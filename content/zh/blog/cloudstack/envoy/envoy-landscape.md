---
title: "Envoy Landscape"
linkTitle: "Envoy Landscape"
date: 2022-05-03 
description: >
    Envoy Landscape.
---

## 一、Envoy 常用概念

### A、Listener 监听器

#### DNS 过滤器

Envoy 支持通过配置UDP 侦听器 DNS Filter来响应 DNS 请求。

DNS 过滤器支持响应 A 和 AAAA 记录的转发查询。答案是从静态配置的资源、集群或外部 DNS 服务器中发现的。过滤器将返回最多 512 个字节的 DNS 响应。如果域配置了多个地址，或者集群配置了多个端点，Envoy
将返回每个发现的地址，但不超过上述大小限制。

### B、HTTP 相关

#### envoy http重定向

配置http过滤器类型为envoy.filters.http.router，我们的用例中需要这个过滤器将地址127.0.0.1:10000上收到的请求路由到www.envoyproxy.io，
除此之外，envoy还有其他过滤器，比如带宽限制过滤器envoy.filters.http.bandwidth_limit,速率限制过滤器envoy.filters.http.ratelimit等。具体可参考：http 过滤器。

指定了cluster的名称为service_envoyproxy_io，
上文中的listener监听到的请求在37行就会被路由到该cluster，listener_0监听来自下游主机的请求后，路由到service_envoyproxy_io，service_envoyproxy_io会将该请求发送给相应的上游端点进行处理。

> https://www.ciocso.com/article/730.html

#### 路线匹配

当 Envoy 匹配路由时，它使用以下过程：

HTTP 请求的主机或:authority标头与虚拟主机匹配。

按顺序检查虚拟主机中的 每个路由条目。如果存在匹配，则使用该路由并且不再进行路由检查。

独立地，按顺序检查虚拟主机中的每个虚拟集群。如果匹配，则使用虚拟集群并且不再进行虚拟集群检查。

#### HTTP 动态转发代理

通过HTTP 过滤器和 自定义集群的组合，Envoy 支持 HTTP 动态转发代理。这意味着 Envoy 可以在不事先了解所有配置的 DNS 地址的情况下执行 HTTP 代理的角色，同时仍保留 Envoy 的绝大多数优势，包括异步 DNS
解析。实施工作如下：

如果目标 DNS 主机尚未在缓存中，则动态转发代理 HTTP 过滤器用于暂停请求。

Envoy 将开始异步解析 DNS 地址，并在解析完成时解锁任何等待响应的请求。

由于 DNS 地址已在缓存中，因此不会阻止任何未来的请求。解析过程类似于逻辑 DNS服务发现类型，在任何给定时间都会记住一个目标地址。

所有已知主机都存储在动态转发代理集群中，以便它们可以显示在管理输出中。

一个特殊的负载均衡器将在转发期间根据 HTTP 主机/权限标头选择要使用的正确主机。

一段时间未使用的主机会受到将清除它们的 TTL。

当上游集群配置了 TLS 上下文时，Envoy 将自动对解析的主机名执行 SAN 验证，并通过 SNI 指定主机名。

上述实现细节意味着在稳定状态下，Envoy 可以转发大量 HTTP 代理流量，而所有 DNS 解析都在后台异步进行。此外，所有其他 Envoy 过滤器和扩展都可以与动态转发代理支持结合使用，包括身份验证、RBAC、速率限制等 。

#### HTTP 标头

> https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_conn_man/headers

#### HTTP 过滤器

动态代理转发

> https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/dynamic_forward_proxy_filter

### C、服务发现

#### 原始目的地

当传入连接通过 iptables REDIRECT 或 TPROXY 目标或使用代理协议重定向到 Envoy
时，可以使用原始目标集群。在这些情况下，路由到原始目标集群的请求被转发到由重定向元数据寻址的上游主机，而无需任何显式主机配置或上游主机发现。当上游主机的空闲时间超过 cleanup_interval（默认为 5000
毫秒）时，连接到上游主机的连接被池化，并且未使用的主机被刷新。如果原始目标地址不可用，则不打开上游连接。Envoy 还可以从HTTP 标头中获取原始目标。原始目标服务发现必须与原始目标负载均衡器一起使用.

#### 原始来源

此过滤器应配置为envoy.filters.listener.original_src名称。

原始源侦听器过滤器在 Envoy 的上游端复制连接的下游远程地址。例如，如果下游连接使用 IP 地址连接到 Envoy 10.1.2.3，那么 Envoy 将使用源 IP 连接到上游10.1.2.3。

### D、热重启

易于操作是 Envoy 的主要目标之一。除了强大的统计数据和本地管理界面之外，Envoy 还能够“热”或“实时”重启自身。这意味着 Envoy 可以完全重新加载自身（代码和配置），而不会在排水过程中丢弃现有连接。热重启功能具有以下通用架构：

两个活动进程使用基本的 RPC 协议通过 unix 域套接字相互通信。所有计数器都通过 unix 域从旧进程发送到新进程，并且除了标有NeverImport的那些之外，还会传输仪表。热重启完成后，从旧进程传来的 gauge 会被清理，但
会保留server.hot_restart_generation 统计等特殊的 gauge 。

新进程在向旧进程请求侦听套接字的副本之前，会完全初始化自身（加载配置、执行初始服务发现和健康检查阶段等）。新进程开始监听，然后告诉旧进程开始排空。

在耗尽阶段，旧进程尝试正常关闭现有连接。如何完成取决于配置的过滤器。排水时间可通过 --drain-time-s选项配置，随着时间的推移，排水变得更加激进。

在耗尽序列之后，新的 Envoy 进程告诉旧的 Envoy 进程自行关闭。该时间可通过--parent-shutdown-time-s选项进行配置。

Envoy 的热重启支持被设计为即使新的 Envoy 进程和旧的 Envoy 进程在不同的容器中运行，它也能正常工作。进程之间的通信仅使用 unix 域套接字进行。

源代码分发中包含一个用 Python 编写的示例重启程序/父进程。此父进程可用于标准进程控制实用程序，例如 monit/runit/etc。

### E、IP 相关

#### HTTP 标头

HTTP 标头可以在x-forwarded-for标头中携带请求的原始 IP 地址 。上游服务器可以使用此标头来确定下游远程地址。Envoy 也可以使用这个 header 来选择 Original Src HTTP Filter使用的 IP
地址。

HTTP 标头方法有一些缺点：

它仅适用于 HTTP。

上游主机可能不支持它。

它需要仔细配置。

### F、生命周期

#### 术语

Envoy 在其代码库和文档中使用以下术语：

集群：具有一组端点的逻辑服务，Envoy 将请求转发到这些端点。

下游：连接到 Envoy 的实体。这可能是本地应用程序（在边车模型中）或网络节点。在非 Sidecar 模型中，这是一个远程客户端。

端点：实现逻辑服务的网络节点。它们被分组到集群中。集群中的端点位于Envoy 代理的上游。

过滤器：连接或请求处理管道中的模块，提供请求处理的某些方面。Unix 的一个类比是小型实用程序（过滤器）与 Unix 管道（过滤器链）的组合。

过滤器链：一系列过滤器。

侦听器：Envoy 模块，负责绑定到 IP/端口、接受新的 TCP 连接（或 UDP 数据报）并协调面向下游的请求处理方面。

上游：Envoy 在转发服务请求时连接的端点（网络节点）。这可能是本地应用程序（在边车模型中）或网络节点。在非边车模型中，这对应于远程后端。

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/envoy/envoy-1.png)

---

## 二、Envoy 启动流程

#### Envoy 完整配置

从 Envoy 初始化配置文件中，我们可以看出 Istio 中 Envoy sidecar 真正的配置实际上是由两部分组成的。Pilot-agent 在启动 Envoy 时将 xDS server 信息通过静态资源的方式配置到 Envoy
的初始化配置文件中，Envoy 启动后再通过 xDS server 获取网格中的服务信息、路由规则等动态资源。

![](https://www.servicemesher.com/istio-handbook/images/envoy-config-init.png)

1. Pilot-agent 根据启动参数生成 Envoy 的初始配置文件 envoy-rev0.json，该文件告诉 Envoy 从指定的 xDS server 中获取动态配置信息，并配置了 xDS server 的地址信息，即控制平面的
   Pilot 服务器地址。
2. Pilot-agent 使用 envoy-rev0.json 启动 Envoy 进程。
3. Envoy 根据初始配置获得 Pilot 地址，采用 xDS 接口从 Pilot 获取到 listener，cluster，route 等动态配置信息。
4. Envoy 根据获取到的动态配置启动 Listener，并根据 listener 的配置，结合 route 和 cluster 对拦截到的流量进行处理。

---

## 二、Envoy 流量

### A、流量路由机制分析

> 重要参考资料！！！：https://www.servicemesher.com/istio-handbook/concepts/sidecar-traffic-route.html

#### 术语

* Host： 能够进行网络通信的实体（如移动设备、服务器上的应用程序）。在此文档中，host 是一个逻辑上的网络应用程序。一个物理硬件上可能运行有多个 host，只要它们是可以独立寻址的。在 EDS 接口中，也使用 “endpoint”
  来表示一个应用实例，对应一个 IP + port 的组合。
* Downstream： 下游 host 连接到 Envoy，发送请求并接收响应。
* Upstream： 上游 host 接收来自 Envoy 的连接和请求，并返回响应。
* Listener： 监听器是一个命名网络地址（例如，端口、unix domain socket 等)，可以被下游客户端连接。Envoy 中暴露一个或者多个给下游主机连接的监听器。在 Envoy 中，**listener
  可以绑定到端口上直接对外提供服务，也可以不绑定到端口上，而是接收其他 listener 转发的请求。**
* Cluster： 集群是指 Envoy 连接的一组上游主机，集群中的主机是对等的，对外提供相同的服务，这些主机一起组成了一个可以提供负载均衡和高可用的服务集群。Envoy
  通过服务发现来发现集群的成员。可以选择通过主动健康检查来确定集群成员的健康状态。Envoy 通过负载均衡策略决定将请求路由到哪个集群成员。

### Listeners

Envoy 采用 listener 来接收并处理 downstream 发过来的请求，listener 采用了插件式的架构，可以通过配置不同的 filter 在 listener 中插入不同的处理逻辑。

Listener 可以绑定到 IP Socket 或者 Unix Domain Socket 上，以接收来自客户端的请求；也可以不绑定，而是接收从其他 listener 转发来的数据。Istio 利用了 Envoy listener
的这一特点，通过 VirtualOutboundListener 在一个端口接收所有出向请求，然后再按照请求的端口分别转发给不同的 listener 分别处理。

#### VirtualOutbound Listener

Istio 在 Envoy 中配置了一个在 15001 端口监听的虚拟入口监听器。Iptable 规则将 Envoy 所在 pod 的对外请求拦截后发向本地的 15001
端口，该监听器接收后并不进行业务处理，而是根据请求的目的端口分发给其他监听器处理。这就是该监听器取名为 "virtual”（虚拟）监听器的原因。

Envoy 是如何做到按请求的目的端口进行分发的呢？ 从下面 VirtualOutbound listener 的配置中可以看到 use_original_dest 属性被设置为 true, 这表示该**监听器在接收到来自
downstream 的请求后，会将请求转交给匹配该请求原目的地址的 listener（即名字格式为 0.0.0.0_ 请求目的端口 的 listener）进行处理。**

如果在 Enovy 的配置中找不到匹配请求目的端口的 listener，则将会根据 Istio 的 outboundTrafficPolicy 全局配置选项进行处理。存在两种情况：

* 如果 outboundTrafficPolicy 设置为 **ALLOW_ANY**：这表明网格允许发向任何外部服务的请求，无论该服务是否在 Pilot 的服务注册表中。在该策略下，Pilot 将会在下发给 Envoy 的
  VirtualOutbound listener 加入一个 upstream cluster 为 `PassthroughCluster` 的 TCP proxy filter，找不到匹配端口 listener 的请求会被该 TCP
  proxy filter 处理，**请求将会被发送到其 IP 头中的原始目的地地址。**
* 如果 outboundTrafficPolicy 设置为 **REGISTRY_ONLY**：只允许发向 Pilot 服务注册表中存在的服务的对外请求。在该策略下，Pilot 将会在下发给 Enovy 的 VirtualOutbound
  listener 加入一个 upstream cluster 为 BlackHoleCluster 的 TCP proxy filter，找不到匹配端口 listener 的请求会被该 TCP proxy filter 处理，由于
  BlackHoleCluster 中没有配置 upstteam host，请求实际上会被丢弃。

下图是 bookinfo 例子中 productpage 服务中 Enovy Proxy 的 Virutal Outbound Listener 配置。由于 outboundTrafficPolicy 的默认配置为 ALLOW_ANY，因此
listener 的 filterchain 中第二个 filter chain 中是一个 upstream cluster 为 PassthroughCluster 的 TCP proxy filter。注意该 filter 没有
filter_chain_match 匹配条件，因此如果进入该 listener 的请求在配置中找不到匹配其目的端口的 listener，就会缺省进入该 filter 进行处理。

filterchain 中的第一个 filter chain 中是一个 upstream cluster 为 BlackHoleCluster 的 TCP proxy filter，该 filter 设置了
filter_chain_match 匹配条件，只有发向 10.40.0.18 这个 IP 的出向请求才会进入该 filter 处理。10.40.0.18 是 productpage 服务自身的IP地址。该 filter
的目的是为了防止服务向自己发送请求可能导致的死循环。

##### PassthroughCluster

该 cluster 的 type 被设置为 ORIGINAL_DST 类型， 表明任何发向该 cluster 的请求都会被直接发送到其请求中的原始目地的，Envoy 不会对请求进行重新路由。

##### BlackHoleCluster

这是一个特殊的 cluster ，其中并没有配置后端处理请求的 host。如其名字所表明的一样，请求进入该 cluster 后如同进入了一个黑洞，将被丢弃掉，而不是发向一个 upstream host。

---

## 三、Envoy 运维

#### 管理界面

> https://www.envoyproxy.io/docs/envoy/latest/operations/admin

### 查看配置

可以看到，Envoy 中实际生效的配置是由初始化配置文件中的静态配置和从 Pilot 获取的动态配置一起组成的。因此只对 envoy-rev0 .json 进行分析并不能看到网络中流量管理的全貌。那么有没有办法可以看到 Envoy
中实际生效的完整配置呢？Envoy 提供了相应的管理接口，我们可以采用下面的命令导出 productpage-v1 服务 sidecar 的完整配置。

```
kubectl exec -it productpage-v1-6d8bc58dd7-ts8kw -c istio-proxy curl http://127.0.0.1:15000/config_dump > config_dump
```

该配置文件的内容如下：

```json
{
  "configs": [
    {
      "@type": "type.googleapis.com/envoy.admin.v3.BootstrapConfigDump",
      "bootstrap": {},
      "last_updated": "2020-03-11T08:14:03.630Z"
    },
    {
      "@type": "type.googleapis.com/envoy.admin.v3.ClustersConfigDump",
      "version_info": "2020-03-11T08:14:06Z/23",
      "static_clusters": [
        ...
      ],
      "dynamic_active_clusters": [
        ...
      ]
    },
    {
      "@type": "type.googleapis.com/envoy.admin.v3.ListenersConfigDump",
      "version_info": "2020-03-11T08:13:39Z/22",
      "static_listeners": [
        ...
      ],
      "dynamic_listeners": [
        ...
      ]
    },
    {
      "@type": "type.googleapis.com/envoy.admin.v3.RoutesConfigDump",
      "static_route_configs": [
        ...
      ],
      "dynamic_route_configs": [
        ...
      ]
    },
    {
      "@type": "type.googleapis.com/envoy.admin.v3.SecretsConfigDump",
      "dynamic_active_secrets": [
        ...
      ]
    }
  ]
}
```

从导出的文件中可以看到 Envoy 中主要由以下几部分内容组成：

* BootstrapConfigDump： 初始化配置，来自于初始化配置文件中配置的内容。
* ClustersConfigDump： 集群配置，包括对应于外部服务的 outbound cluster 和 自身所在节点服务的 inbound cluster。
* ListenersConfigDump： 监听器配置，包括用于处理对外业务请求的 outbound listener，处理入向业务请求的 inbound listener，以及作为流量处理入口的 virtual listener。
* RoutesConfigDump： 路由配置，用于 HTTP 请求的路由处理。
* SecretsConfigDump： TLS 双向认证相关的配置，包括自身的证书以及用于验证请求方的 CA 根证书。

下面我们对该配置文件中和流量路由相关的配置一一进行详细分析。

#### Bootstrap

从名字可以看出这是 Envoy 的初始化配置，打开该节点，可以看到其中的内容和 envoy-rev0.json 是一致的，这里不再赘述。 需要注意的是在 bootstrap 部分配置的一些内容也会被用于其他部分，例如 clusters
部分就包含了 bootstrap 中定义的一些静态 cluster 资源。

```json
{
  "@type": "type.googleapis.com/envoy.admin.v3.BootstrapConfigDump",
  "bootstrap": {
    "node": {
      ...
    },
    "stats_config": {
      ...
    },
    "admin": {
      ...
    },
    "dynamic_resources": {
      ...
    },
    "static_resources": {
      ...
    },
    "tracing": {
      ...
    }
  },
  "last_updated": "2020-03-11T08:14:03.630Z"
}
```

#### Clusters

这部分配置定义了 Envoy 中所有的 cluster，即服务集群，cluster 中包含一个到多个 endpoint，每个 endpoint 都可以提供服务，Envoy 根据负载均衡算法将请求发送到这些 endpoint 中。

从配置文件结构中可以看到，在 productpage 的 clusters 配置中包含 static_clusters 和 dynamic_active_clusters 两部分，其中 static_clusters 是来自于
envoy-rev0.json 的初始化配置中的 prometheus_stats、xDS server、zipkin server 信息。dynamic_active_clusters 是 Envoy 通过 xDS 接口从 Istio
控制平面获取的服务信息。

其中 dynamic cluster 又分为以下几类：

##### Outbound Cluster

这部分的 cluster 占了绝大多数，该类 cluster 对应于 Envoy 所在节点的外部服务。以 reviews 为例，对于 productpage 来说，reviews 是一个外部服务，因此其 cluster 名称中包含
outbound 字样。

从 reviews 服务对应的 cluster 配置中可以看到，其类型为 EDS，即表示该 cluster 的 endpoint 来自于动态发现，动态发现中 eds_config 则指向了ads，最终指向 static resource
中配置的 xds-grpc cluster，即 Pilot 的地址。

```json
{
  "version_info": "2020-03-11T08:13:39Z/22",
  "cluster": {
    "@type": "type.googleapis.com/envoy.api.v2.Cluster",
    "name": "outbound|9080||reviews.default.svc.cluster.local",
    "type": "EDS",
    "eds_cluster_config": {
      "eds_config": {
        "ads": {}
      },
      "service_name": "outbound|9080||reviews.default.svc.cluster.local"
    },
    "connect_timeout": "1s",
    "circuit_breakers": {},
    "filters": [],
    "transport_socket_matches": []
  },
  "last_updated": "2020-03-11T08:14:04.664Z"
}
```

可以通过 Pilot 的调试接口获取该 cluster 的 endpoint：

    curl http://10.97.222.108:15014/debug/edsz > pilot_eds_dump

从导出的文件内容可以看到，reviews cluster 配置了3个 endpoint 地址，是 reviews 的 pod ip。

```json
{
  "clusterName": "outbound|9080||reviews.default.svc.cluster.local",
  "endpoints": [
    {
      "lbEndpoints": [
        {
          "endpoint": {
            "address": {
              "socketAddress": {
                "address": "10.40.0.15",
                "portValue": 9080
              }
            }
          },
          "metadata": {},
          "loadBalancingWeight": 1
        },
        {
          "endpoint": {
            "address": {
              "socketAddress": {
                "address": "10.40.0.16",
                "portValue": 9080
              }
            }
          },
          "metadata": {},
          "loadBalancingWeight": 1
        },
        {
          "endpoint": {
            "address": {
              "socketAddress": {
                "address": "10.40.0.17",
                "portValue": 9080
              }
            }
          },
          "metadata": {},
          "loadBalancingWeight": 1
        }
      ],
      "loadBalancingWeight": 3
    }
  ]
}
```

##### Inbound Cluster

对于 Envoy 来说，inbound cluster 对应于入向请求的 upstream 集群， 即 Envoy 自身所在节点的服务。对于 productpage Pod 上的 Envoy，其对应的 Inbound cluster 只有一个，即 productpage。该 cluster 对应的 host 为127.0.0.1，即回环地址上 productpage 的监听端口。由于 iptable 规则中排除了127.0.0.1，入站请求通过该 Inbound cluster 处理后将跳过 Envoy，直接发送给 productpage 进程处理。

##### BlackHoleCluster

##### PassthroughCluster