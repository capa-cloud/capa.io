---
title: "Istio devops"
linkTitle: "Istio devops"
date: 2022-03-09
description: >
    Istio devops.
---

### 请求的生命周期

在这些示例中，我们将介绍应用程序运行时会发生什么curl example.com。虽然在curl这里使用，但同样适用于几乎所有客户端。

当您向域发送请求时，客户端将执行 DNS 解析以将其解析为 IP 地址。无论 Istio 设置如何，都会发生这种情况，因为 Istio 只拦截网络流量；它不能改变您的应用程序的行为或发送 DNS 请求的决定。在下面的示例中，example.com解析为192.0.2.0.

$ curl example.com -v
*   Trying 192.0.2.0:80...

接下来，请求将被 Istio 拦截。此时，Istio 将同时看到主机名（来自Host: example.com标头）和目标地址 ( 192.0.2.0:80)。Istio 使用此信息来确定预期目的地。 了解流量路由可以深入了解此行为的工作原理。

如果客户端无法解析 DNS 请求，请求将在 Istio 收到之前终止。这意味着如果将请求发送到 Istio 已知的主机名（例如 a VirtualService）但不发送到 DNS 服务器，则请求将失败。Istio DNS 代理可以改变这种行为。

一旦 Istio 确定了预期的目的地，它必须选择要发送到的地址。由于 Istio 的高级负载均衡功能，这通常不是客户端发送的原始 IP 地址。根据服务配置，Istio 有几种不同的方式来执行此操作。

使用客户端的原始 IP 地址（192.0.2.0在上面的示例中）。这是ServiceEntrytype resolution: NONE（默认）和headlessServices的情况。
在一组静态 IP 地址上进行负载平衡。这是ServiceEntrytype的情况，将使用resolution: STATICall ，或 standard ，将使用 all 。spec.endpointsServicesEndpoints
使用 DNS 定期解析地址，并对所有结果进行负载平衡。这是ServiceEntrytype的情况resolution: DNS。
请注意，在所有情况下，Istio 代理中的 DNS 解析都与用户应用程序中的 DNS 解析正交。即使客户端进行 DNS 解析，代理也可能会忽略解析的 IP 地址并使用自己的 IP 地址，这可能来自静态 IP 列表或通过自己的 DNS 解析（可能是相同的主机名或不同的主机名）。

DNS 代理
3分钟阅读 页面测试

除了捕获应用程序流量之外，Istio 还可以捕获 DNS 请求以提高网格的性能和可用性。在代理 DNS 时，来自应用程序的所有 DNS 请求都将被重定向到 sidecar，其中存储了本地域名到 IP 地址的映射。如果请求可以被 Sidecar 处理，它将直接向应用程序返回响应，避免往返上游 DNS 服务器。否则，请求将按照标准/etc/resolv.confDNS 配置向上游转发。

虽然 Kubernetes 为 Kubernetes 提供了开箱即用的 DNS 解析Service，但任何自定义ServiceEntry的都不会被识别。使用此功能，ServiceEntry无需自定义配置 DNS 服务器即可解析地址。对于 Kubernetes Service，DNS 响应将是相同的，但负载减少kube-dns并提高了性能。

此功能也可用于在 Kubernetes 之外运行的服务。这意味着可以解决所有内部服务，而无需笨拙的变通方法将 Kubernetes DNS 条目暴露在集群之外。

入门
默认情况下当前未启用此功能。要启用它，请使用以下设置安装 Istio：

$ cat <<EOF | istioctl install -y -f -
apiVersion: install.istio.io/v1alpha1
kind: IstioOperator
spec:
meshConfig:
defaultConfig:
proxyMetadata:
# Enable basic DNS proxying
ISTIO_META_DNS_CAPTURE: "true"
# Enable automatic address allocation, optional
ISTIO_META_DNS_AUTO_ALLOCATE: "true"
EOF

这也可以使用proxy.istio.io/configannotation在每个 pod 的基础上启用。

使用 部署到 VM 时，默认情况下将启用基本 DNS 代理。istioctl workload entry configure
DNS 捕获在行动
要尝试 DNS 捕获，首先ServiceEntry为一些外部服务设置一个：

apiVersion: networking.istio.io/v1beta1
kind: ServiceEntry
metadata:
name: external-address
spec:
addresses:
- 198.51.100.0
  hosts:
- address.internal
  ports:
- name: http
  number: 80
  protocol: HTTP

如果没有 DNS 捕获，请求address.internal可能无法解析。启用此功能后，您应该根据配置获得响应address：

$ curl -v address.internal
*   Trying 198.51.100.1:80...

地址自动分配
在上面的示例中，您有一个用于发送请求的服务的预定义 IP 地址。但是，访问没有稳定地址的外部服务是很常见的，而是依赖 DNS。在这种情况下，DNS 代理将没有足够的信息来返回响应，并且需要向上游转发 DNS 请求。

这对于 TCP 流量来说尤其成问题。与基于Host标头路由的 HTTP 请求不同，TCP 携带的信息要少得多。您只能在目标 IP 和端口号上进行路由。因为后端没有一个稳定的IP，所以也不能基于它进行路由，只留下端口号，当多个ServiceEntryTCP服务共享同一个端口时，会导致冲突。

为了解决这些问题，DNS 代理还支持为ServiceEntry未明确定义地址的 s 自动分配地址。这是由ISTIO_META_DNS_AUTO_ALLOCATE选项配置的。

启用此功能后，DNS 响应将为每个ServiceEntry. 然后将代理配置为将请求匹配到此 IP 地址，并将请求转发到相应的ServiceEntry.

由于此功能会修改 DNS 响应，因此它可能无法与所有应用程序兼容。
要尝试这一点，请配置另一个ServiceEntry：

apiVersion: networking.istio.io/v1beta1
kind: ServiceEntry
metadata:
name: external-auto
spec:
hosts:
- auto.internal
  ports:
- name: http
  number: 80
  protocol: HTTP
  resolution: STATIC
  endpoints:
- address: 198.51.100.2

现在，发送请求：

$ curl -v auto.internal
*   Trying 240.240.0.1:80...

如您所见，请求被发送到一个自动分配的地址，240.240.0.1. 这些地址将从240.240.0.0/16保留的 IP 地址范围中挑选，以避免与实际服务发生冲突。