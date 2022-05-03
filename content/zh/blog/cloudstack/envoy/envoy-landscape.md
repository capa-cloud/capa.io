---
title: "Envoy Landscape"
linkTitle: "Envoy Landscape"
date: 2022-05-03
description: >
Envoy Landscape.
---

### 监听器

#### DNS 过滤器

Envoy 支持通过配置UDP 侦听器 DNS Filter来响应 DNS 请求。

DNS 过滤器支持响应 A 和 AAAA 记录的转发查询。答案是从静态配置的资源、集群或外部 DNS 服务器中发现的。过滤器将返回最多 512 个字节的 DNS 响应。如果域配置了多个地址，或者集群配置了多个端点，Envoy 将返回每个发现的地址，但不超过上述大小限制。

### HTTP

#### envoy http重定向

配置http过滤器类型为envoy.filters.http.router，我们的用例中需要这个过滤器将地址127.0.0.1:10000上收到的请求路由到www.envoyproxy.io，除此之外，envoy还有其他过滤器，比如带宽限制过滤器envoy.filters.http.bandwidth_limit,速率限制过滤器envoy.filters.http.ratelimit等。具体可参考：http 过滤器。

指定了cluster的名称为service_envoyproxy_io， 上文中的listener监听到的请求在37行就会被路由到该cluster，listener_0监听来自下游主机的请求后，路由到service_envoyproxy_io，service_envoyproxy_io会将该请求发送给相应的上游端点进行处理。

https://www.ciocso.com/article/730.html

#### 路线匹配

当 Envoy 匹配路由时，它使用以下过程：

HTTP 请求的主机或:authority标头与虚拟主机匹配。

按顺序检查虚拟主机中的 每个路由条目。如果存在匹配，则使用该路由并且不再进行路由检查。

独立地，按顺序检查虚拟主机中的每个虚拟集群。如果匹配，则使用虚拟集群并且不再进行虚拟集群检查。

#### HTTP 动态转发代理

通过HTTP 过滤器和 自定义集群的组合，Envoy 支持 HTTP 动态转发代理。这意味着 Envoy 可以在不事先了解所有配置的 DNS 地址的情况下执行 HTTP 代理的角色，同时仍保留 Envoy 的绝大多数优势，包括异步 DNS 解析。实施工作如下：

如果目标 DNS 主机尚未在缓存中，则动态转发代理 HTTP 过滤器用于暂停请求。

Envoy 将开始异步解析 DNS 地址，并在解析完成时解锁任何等待响应的请求。

由于 DNS 地址已在缓存中，因此不会阻止任何未来的请求。解析过程类似于逻辑 DNS服务发现类型，在任何给定时间都会记住一个目标地址。

所有已知主机都存储在动态转发代理集群中，以便它们可以显示在管理输出中。

一个特殊的负载均衡器将在转发期间根据 HTTP 主机/权限标头选择要使用的正确主机。

一段时间未使用的主机会受到将清除它们的 TTL。

当上游集群配置了 TLS 上下文时，Envoy 将自动对解析的主机名执行 SAN 验证，并通过 SNI 指定主机名。

上述实现细节意味着在稳定状态下，Envoy 可以转发大量 HTTP 代理流量，而所有 DNS 解析都在后台异步进行。此外，所有其他 Envoy 过滤器和扩展都可以与动态转发代理支持结合使用，包括身份验证、RBAC、速率限制等 。

#### HTTP 标头

https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_conn_man/headers

#### HTTP 过滤器

动态代理转发

https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/dynamic_forward_proxy_filter

### 服务发现

#### 原始目的地

当传入连接通过 iptables REDIRECT 或 TPROXY 目标或使用代理协议重定向到 Envoy 时，可以使用原始目标集群。在这些情况下，路由到原始目标集群的请求被转发到由重定向元数据寻址的上游主机，而无需任何显式主机配置或上游主机发现。当上游主机的空闲时间超过 cleanup_interval（默认为 5000 毫秒）时，连接到上游主机的连接被池化，并且未使用的主机被刷新。如果原始目标地址不可用，则不打开上游连接。Envoy 还可以从HTTP 标头中获取原始目标。原始目标服务发现必须与原始目标负载均衡器一起使用.

#### 原始来源

此过滤器应配置为envoy.filters.listener.original_src名称。

原始源侦听器过滤器在 Envoy 的上游端复制连接的下游远程地址。例如，如果下游连接使用 IP 地址连接到 Envoy 10.1.2.3，那么 Envoy 将使用源 IP 连接到上游10.1.2.3。

### 热重启

易于操作是 Envoy 的主要目标之一。除了强大的统计数据和本地管理界面之外，Envoy 还能够“热”或“实时”重启自身。这意味着 Envoy 可以完全重新加载自身（代码和配置），而不会在排水过程中丢弃现有连接。热重启功能具有以下通用架构：

两个活动进程使用基本的 RPC 协议通过 unix 域套接字相互通信。所有计数器都通过 unix 域从旧进程发送到新进程，并且除了标有NeverImport的那些之外，还会传输仪表。热重启完成后，从旧进程传来的 g​​auge 会被清理，但 会保留server.hot_restart_generation 统计等特殊的 gauge 。

新进程在向旧进程请求侦听套接字的副本之前，会完全初始化自身（加载配置、执行初始服务发现和健康检查阶段等）。新进程开始监听，然后告诉旧进程开始排空。

在耗尽阶段，旧进程尝试正常关闭现有连接。如何完成取决于配置的过滤器。排水时间可通过 --drain-time-s选项配置，随着时间的推移，排水变得更加激进。

在耗尽序列之后，新的 Envoy 进程告诉旧的 Envoy 进程自行关闭。该时间可通过--parent-shutdown-time-s选项进行配置。

Envoy 的热重启支持被设计为即使新的 Envoy 进程和旧的 Envoy 进程在不同的容器中运行，它也能正常工作。进程之间的通信仅使用 unix 域套接字进行。

源代码分发中包含一个用 Python 编写的示例重启程序/父进程。此父进程可用于标准进程控制实用程序，例如 monit/runit/etc。

### IP

#### HTTP 标头

HTTP 标头可以在x-forwarded-for标头中携带请求的原始 IP 地址 。上游服务器可以使用此标头来确定下游远程地址。Envoy 也可以使用这个 header 来选择 Original Src HTTP Filter使用的 IP 地址。

HTTP 标头方法有一些缺点：

它仅适用于 HTTP。

上游主机可能不支持它。

它需要仔细配置。

## 生命周期

### 术语

Envoy 在其代码库和文档中使用以下术语：

集群：具有一组端点的逻辑服务，Envoy 将请求转发到这些端点。

下游：连接到 Envoy 的实体。这可能是本地应用程序（在边车模型中）或网络节点。在非 Sidecar 模型中，这是一个远程客户端。

端点：实现逻辑服务的网络节点。它们被分组到集群中。集群中的端点位于Envoy 代理的上游。

过滤器：连接或请求处理管道中的模块，提供请求处理的某些方面。Unix 的一个类比是小型实用程序（过滤器）与 Unix 管道（过滤器链）的组合。

过滤器链：一系列过滤器。

侦听器：Envoy 模块，负责绑定到 IP/端口、接受新的 TCP 连接（或 UDP 数据报）并协调面向下游的请求处理方面。

上游：Envoy 在转发服务请求时连接的端点（网络节点）。这可能是本地应用程序（在边车模型中）或网络节点。在非边车模型中，这对应于远程后端。

![](https://www.envoyproxy.io/docs/envoy/latest/_images/lor-architecture.svg)

## 运维

#### 管理界面

https://www.envoyproxy.io/docs/envoy/latest/operations/admin

## xDS
