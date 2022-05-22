---
title: "Netty Channel设计"
linkTitle: "Netty Channel设计"
date: 2022-05-20
description: >
    Netty Channel设计.
---

## 一、整体流程概览

......

### 1.1 启动流程

### Server端

#### 1. 创建Handler

```java
EchoServerHandler serverHandler = new EchoServerHandler()
```

Handler类结构图：

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/netty/img.png)

#### 2. 创建EventLoopGroup

```java
EventLoopGroup group = new NioEventLoopGroup();
```

EventLoopGroup类结构图：

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/netty/img_1.png)

#### 2.1 创建Group下面的EventLoop

```java
@Override
protected EventLoop newChild(Executor executor, Object... args) throws Exception {
    return new NioEventLoop(this, executor, (SelectorProvider) args[0],
        ((SelectStrategyFactory) args[1]).newSelectStrategy(), (RejectedExecutionHandler) args[2]);
}
```

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/netty/img_2.png)

#### 2.2 创建EventLoop

* `taskQueue`: `MpscChunkedArrayQueue`

* `tailQueue`: `MpscChunkedArrayQueue`

* `selectNowSupplier`: `selector.selectNow()`

* `pendingTasksCallable`: `super.pendingTasks() + tailTasks.size()`

* `selectProvider`: `SelectorProvider.provider()`

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/netty/img_3.png)

#### 3. 创建引导

```java
ServerBootstrap b = new ServerBootstrap();
```

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/netty/img_4.png)

#### 3.1 初始化一个Channel

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/netty/img_5.png)

#### 4. bind流程

#### 4.1 初始化一个Channel

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/netty/img_6.png)

持有底层的SocketChannel:(此处的Channel为java.nio的Channel)

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/netty/img_7.png)

#### 4.2 初始化ChannelPipeline

创建一个`DefaultChannelPipeline`:

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/netty/img_8.png)

Channel和ChannelPipeline是双向绑定的关系，向ChannelPipeline中通过`addLast`方法添加Handler。
将ChannelHandler包装进入ChannelContext, 然后ChannelPipeline持有ChannelContext的双向链表：

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/netty/img_9.png)

#### 4.3 注册ChannelFuture

ChannelFuture：对Channel的各个生命周期阶段注册回调

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/netty/img_10.png)

调用的是`AbstractChannel`的：

```java
public final void register(EventLoop eventLoop, final ChannelPromise promise) {
```

然后是:

```java
eventLoop.execute(new Runnable() {
    @Override
    public void run() {
        register0(promise);
    }
});
```

eventloop在这里是前面创建的EventLoopGroup

#### 4.4 register0()解析

1. pipeline.invokeHandlerAddedIfNeeded();

执行前面注册的ChannelHandler初始化initChannel的动作

2. 第一个Handler执行完成后，会再次提交一个Runnable给EventLoop

`ServerBootstrapAcceptor`

3. EventLoop不断执行Task（该部分需要细化）

最终进入bind()操作，执行`ServerSocketChannelImpl.bind()`

---

### Client端

#### 1. 启动流程

同Server

#### 2. connect流程

1. connect操作会注册一个task给eventloop

2. eventloop执行task:

   `Bootstrap.doResolveAndConnect0()`

3. doConnect()

4. channel.connect()

5. SocketChannelImpl.connect()

6. interestOps置为8

#### 3. ClientHandler

1. channelActive()

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/netty/img_11.png)

2. channelRead()

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/netty/img_12.png)

---

### 1.2 事件驱动模型设计

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/netty/img_13.png)

主要包括4个基本组件：

事件队列（event queue）：接收事件的入口，存储待处理事件

分发器（event mediator）：将不同的事件分发到不同的业务逻辑单元

事件通道（event channel）：分发器与处理器之间的联系渠道

事件处理器（event processor）：实现业务逻辑，处理完成后会发出事件，触发下一步操作

可以看出，相对传统轮询模式，事件驱动有如下优点：
* 可扩展性好，分布式的异步架构，事件处理器之间高度解耦，可以方便扩展事件处理逻辑
* 高性能，基于队列暂存事件，能方便并行异步处理事件

> 在同一组会话/链接中，将会触发不同的事件入口时，适合事件驱动架构

## 二、主要模块

### 2.1 Reactor线程模型

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/netty/img_14.png)

1）Netty 抽象出两组线程池：BossGroup 和 WorkerGroup，也可以叫做 BossNioEventLoopGroup 和 WorkerNioEventLoopGroup。每个线程池中都有 NioEventLoop 线程。BossGroup 中的线程专门负责和客户端建立连接，WorkerGroup 中的线程专门负责处理连接上的读写。BossGroup 和 WorkerGroup 的类型都是 NioEventLoopGroup。

2）NioEventLoopGroup 相当于一个事件循环组，这个组中含有多个事件循环，每个事件循环就是一个 NioEventLoop。

3）NioEventLoop 表示一个不断循环的执行事件处理的线程，每个 NioEventLoop 都包含一个 Selector，用于监听注册在其上的 Socket 网络连接（Channel）。

4）NioEventLoopGroup 可以含有多个线程，即可以含有多个 NioEventLoop。

5）每个 BossNioEventLoop 中循环执行以下三个步骤：

5.1）select：轮训注册在其上的 ServerSocketChannel 的 accept 事件（OP_ACCEPT 事件）

5.2）processSelectedKeys：处理 accept 事件，与客户端建立连接，生成一个 NioSocketChannel，并将其注册到某个 WorkerNioEventLoop 上的 Selector 上

5.3）runAllTasks：再去以此循环处理任务队列中的其他任务

6）每个 WorkerNioEventLoop 中循环执行以下三个步骤：

6.1）select：轮训注册在其上的 NioSocketChannel 的 read/write 事件（OP_READ/OP_WRITE 事件）

6.2）processSelectedKeys：在对应的 NioSocketChannel 上处理 read/write 事件

6.3）runAllTasks：再去以此循环处理任务队列中的其他任务

7）在以上两个processSelectedKeys步骤中，会使用 Pipeline（管道），Pipeline 中引用了 Channel，即通过 Pipeline 可以获取到对应的 Channel，Pipeline 中维护了很多的处理器（拦截处理器、过滤处理器、自定义处理器等）。这里暂时不详细展开讲解 Pipeline。

### 2.2 ChannelPipeline设计

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/netty/img_15.png)

1）Bootstrap 和 ServerBootstrap 分别是客户端和服务器端的引导类，一个 Netty 应用程序通常由一个引导类开始，主要是用来配置整个 Netty 程序、设置业务处理类（Handler）、绑定端口、发起连接等。

2）客户端创建一个 NioSocketChannel 作为客户端通道，去连接服务器。

3）服务端首先创建一个 NioServerSocketChannel 作为服务器端通道，每当接收一个客户端连接就产生一个 NioSocketChannel 应对该客户端。

4）使用 Channel 构建网络 IO 程序的时候，不同的协议、不同的阻塞类型和 Netty 中不同的 Channel 对应，常用的 Channel 有：

NioSocketChannel：非阻塞的 TCP 客户端 Channel（本案例的客户端使用的 Channel）
NioServerSocketChannel：非阻塞的 TCP 服务器端 Channel（本案例的服务器端使用的 Channel）
NioDatagramChannel：非阻塞的 UDP Channel
NioSctpChannel：非阻塞的 SCTP 客户端 Channel
NioSctpServerChannel：非阻塞的 SCTP 服务器端 Channel…

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/netty/img_16.png)

每个 Netty Channel 包含了一个 ChannelPipeline（其实 Channel 和 ChannelPipeline 互相引用），而 ChannelPipeline 又维护了一个由 ChannelHandlerContext 构成的双向循环列表，其中的每一个 ChannelHandlerContext 都包含一个 ChannelHandler。（前文描述的时候为了简便，直接说 ChannelPipeline 包含了一个 ChannelHandler 责任链，这里给出完整的细节。）

### 2.3 Channel模块设计

#### 1. 事件驱动 + 指令式设计 + 过程调用

网络Channel对象 + 执行器 + 不同的事件处理器

processor.execute(channel(data), executor(executore))

#### 2. 事件驱动 + 对象设计 + 责任链

面向对象包装Channel：执行器、自身属性、操作定义

事件处理器责任链化：pipeline

事件处理器状态机：内部状态流转和外部状态触发
(好几套状态机...channel/pipeline/bootstrap...)

> 内部状态流转的例子：register->register0->doregister ---future完成后---> bind->dobind0
> 内部状态流转：bind --> pipeline.fireChannelActive ---> 一系列handler等内部状态流转 ---> read  --> 注册read状态位 --> 进入外部事件触发

register: 接口定义，事件入口
register0: 抽象类封装（递交给eventloop）
doregister: 委托底层实现

### 3. channel接口交互

    channel事件入口 --->递交给  channelpipeline（invoker定义链路操作）  --->链路入口   channelhandler执行具体链路方法
                                                                   --->上下文    channelcontext

channelpipelint: invoker+链路组装

佐证：channelpipeline(invoker)和handler的方法一一对应
推测：context：面向对象的封装、另开一条链路
> ctx.fireChannelActive(); 链路控制

责任链需要递归无用的handler，通过context直接指向下一个执行者，优化了流程

## 三、细节功能

### 3.1 缓冲区/零拷贝

......

### 3.2 IO异步机制

......

### 3.3 网络协议

......

### 参考文章

#### IO 模型

https://xie.infoq.cn/article/25d369e183563e44fc50d8168