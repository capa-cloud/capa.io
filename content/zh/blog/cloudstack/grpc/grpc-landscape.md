---
title: "gRPC Landscape"
linkTitle: "gRPC Landscape"
date: 2022-01-21
description: >
  gRPC Landscape.
---

## 一、Why gRPC?

### Cloud Native Interactive Landscape

CNCF 云原生景观全景图：https://landscape.cncf.io/?zoom=400

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/grpc/cloud-native.png)

面对庞大的技术栈，有选择性的进行研究：

* 使用上了解
* 原理上了解
* 设计上了解
* 源码级了解
* 参与贡献

### Application layer

偏向 应用层 的技术栈：

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/capa/cloud-native-stack.png)

#### messaging

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/grpc/messaging.png)

#### mesh

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/grpc/mesh.png)

#### rpc

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/grpc/rpc.png)

#### serverless framework

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/grpc/serverless.png)

### gRPC

云原生 应用层 技术栈，大量使用了gRPC作为网络通讯的协议/框架

#### gRPC-go

尤其是go-sdk，在大量sidecar模式架构中进行使用。

Go语言gRPC技术栈

![](https://chai2010.gitbooks.io/advanced-go-programming-book/content/images/ch4-1-grpc-go-stack.png)

### Why gRPC?

鉴于 gRPC 在应用层技术栈的广泛使用和重要性，对其有源码级了解是有价值的。

## 二、gRPC协议

### 设计原则

● 服务非对象、消息非引用 —— 促进微服务的系统间粗粒度消息交互设计理念，同时避免分布式对象的陷阱和分布式计算的谬误。

> 和 DCOM 及 EJB 完全相反的。只有数据，不包含逻辑

> 分布式计算谬误
> * 网络可靠；
> * 延迟为零；
> * 带宽是无限的；
> * 网络安全；
> * 拓扑不变；
> * 有一名管理员；
> * 运输成本为零；
> * 网络是同质的。

● 普遍并且简单 —— 该基础框架应该在任何流行的开发平台上适用，并且易于被个人在自己的平台上构建。它在CPU和内存有限的设备上也应该切实可行。

> 协议的设计应考虑全面的应用场景：边缘节点、serverless等

● 免费并且开源 —— 所有人可免费使用基本特性。以友好的许可协议开源方式发布所有交付件。

> 避免具体技术锁定，应是可插拔的

● **互通性** —— 该报文协议(Wire Protocol)必须遵循普通互联网基础框架。

> 同现有网络设施的兼容性和连通性

> * over HTTP
> * over TCP
> * over UDP

● 通用并且高性能 —— 该框架应该适用于绝大多数用例场景，相比针对特定用例的框架，该框架只会牺牲一点性能。

> 要通用性，不要极端性能优化

● 分层的 —— 该框架的关键是必须能够独立演进。对报文格式(Wire Format)的修改不应该影响应用层。

> 抽象的编程模型，与具体实现解耦

● 负载无关的 —— 不同的服务需要使用不同的消息类型和编码，例如protocol buffers、JSON、XML和Thrift，协议上和实现上必须满足这样的诉求。类似地，对负载压缩的诉求也因应用场景和负载类型不同而不同，协议上应该支持可插拔的压缩机制。

> Payload agnostic，RPC 框架不应该规定用的是什么 payload 格式

● **流** —— 存储系统依赖于流和流控来传递大数据集。像语音转文本或股票代码等其它服务，依靠流表达时间相关的消息序列。

> 在某种程度上，可以将其理解为类似消息系统的消息队列。

![](https://img.toutiao.io/c/df910edf0aca9dd3ba8387f2e767411d)

● 阻塞式和非阻塞式 —— 支持异步和同步处理在客户端和服务端间交互的消息序列。这是在某些平台上缩放和处理流的关键。

> 用户态线程阻塞模型性能较差，应使用NIO编程模型，支持异步非阻塞式的交互。

● **取消和超时** —— 有的操作可能会用时很长，客户端运行正常时，可以通过取消操作让服务端回收资源。当任务因果链被追踪时，取消可以级联。客户端可能会被告知调用超时，此时服务就可以根据客户端的需求来调整自己的行为。

> 支持重置功能(RST_STREAM 帧)

● **Lameducking** —— 服务端必须支持优雅关闭，优雅关闭时拒绝新请求，但继续处理正在运行中的请求。

> 优先级设计(Http2)
> * 针对流ID
> * 流级联设计

● **流控** —— 在客户端和服务端之间，计算能力和网络容量往往是不平衡的。流控可以更好的缓冲管理，以及保护系统免受来自异常活跃对端的拒绝服务(DOS)攻击。

> 维护缓冲区：窗口/背压/租约

> 基于HTTP2缓冲区的流控机制
> 基于应用层语义的流控

● 可插拔的 —— 数据传输协议(Wire Protocol)只是功能完备API基础框架的一部分。大型分布式系统需要安全、健康检查、负载均衡和故障恢复、监控、跟踪、日志等。实现上应该提供扩展点，以允许插入这些特性和默认实现。

● API扩展 —— 可能的话，在服务间协作的扩展应该最好使用接口扩展，而不是协议扩展。这种类型的扩展可以包括健康检查、服务内省、负载监测和负载均衡分配。

● 元数据交换 —— 常见的横切关注点，如认证或跟踪，依赖数据交换，但这不是服务公共接口中的一部分。部署依赖于他们将这些特性以不同速度演进到服务暴露的个别API的能力。

> metadata与payload分离

● 标准化状态码 —— 客户端通常以有限的方式响应API调用返回的错误。应该限制状态代码名字空间，使得这些错误处理决定更清晰。如果需要更丰富的特定域的状态，可以使用元数据交换机制来提供。

---

● **对端平等** —— 人机交互强调 客户端->服务端 模型，机器之间交互任意一端都可作为客户端/服务端

● **长链接** —— 为服务端推送和双向流交互提供基础。

> 完善的应用层状态码命名空间

### HTTP2

### 交互分析

![](https://i.imgur.com/H0HPgv9.jpg)

+ Magic
+ SETTINGS
+ HEADERS
+ DATA
+ SETTINGS
+ WINDOW_UPDATE
+ PING
+ HEADERS
+ DATA
+ HEADERS
+ WINDOW_UPDATE
+ PING

#### 主链路

* Magic 
* Settings

#### 流链路

* Settings
* Headers
* data
* Window_update

#### 控制链路

* Window_update
* Ping

![](https://i.imgur.com/FrA8EW4.png)

* 在建立连接之前，客户端/服务端都会发送连接前言（Magic+SETTINGS），确立协议和配置项。
* 在传输数据时，是会涉及滑动窗口（WINDOW_UPDATE）等流控策略的。
* 传播 gRPC 附加信息时，是基于 HEADERS 帧进行传播和设置；而具体的请求/响应数据是存储的 DATA 帧中的。
* 请求/响应结果会分为 HTTP 和 gRPC 状态响应两种类型。
* 客户端发起 PING，服务端就会回应 PONG，反之亦可。

### grpc

#### 语义概念

gRPC 引入了三个新概念：通道、远程过程调用(RPC) 和消息。三者之间的关系很简单：每个通道可能有很多 RPC，而每个 RPC 可能有很多消息。

![](https://grpc.io/img/channels_mapping_2.png)

![](https://grpc.io/img/grpc_on_http2_mapping_2.png)

通道是 gRPC 中的一个关键概念。HTTP/2 中的流支持在单个连接上进行多个并发会话；通道通过在多个并发连接上启用多个流来扩展这个概念。

通道代表到端点的虚拟连接，实际上可能由许多 HTTP/2 连接支持。RPC 与连接相关联。RPC 实际上是普通的 HTTP/2 流。消息与 RPC 相关联并作为 HTTP/2 数据帧发送。更具体地说，消息是在数据帧之上分层的。一个数据帧可能有很多 gRPC 消息，或者如果一个 gRPC 消息非常大它可能跨越多个数据帧。

> gRPC 对 16kb 的数据帧使用 HTTP/2 默认的最大大小。超过 16kb 的消息可能跨越多个数据帧，而低于该大小的消息可能与一些其他消息共享一个数据帧。

#### 并非与HTTP2强绑定？

* Channel
  * Conns
  * 负载均衡
* RPC
  * Conn
  * Stream
* Message
  * Frame m:n 

## 三、gRPC框架

### 主链路

* 启动net server
  * 
* Stub
  * Contact
    * proto
  * Channel
    * 生命周期
  * 业务executor
* Channel
  * 创建ClientCall(RPC)
  * 将ClientCall转化成realCall(H2 Conn)
  * 将realCall转化成realStream (H2 Stream)
  * 执行realStream
  * 获取Response

H2 Conn:

startCall

call.sendMessage

call.halfMessage


TODO

https://juejin.cn/post/6844903984524705800
https://grpc.io/docs/what-is-grpc/core-concepts/
https://grpc.io/blog/grpc-on-http2/
https://grpc.io/blog/yikyak/
https://grpc.io/blog/grpc-load-balancing/
https://segmentfault.com/a/1190000019608421