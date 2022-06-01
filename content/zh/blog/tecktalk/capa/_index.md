---
title: "Capa: Mecha SDK of Cloud Application Api"
linkTitle: "Mecha SDK of Cloud Application Api"
weight: 20
---

# Capa(Cloud-Application-API)：架起混合云应用开发的桥梁

 "让代码实现"一次编写，随处运行"。 借助Capa体系，使你的Java应用在改动量较小的情况下，拥有跨云、混合云运行的能力。"

> 作者简介： 
> KevinTen，携程后端开发工程师，关注Reactive、RPC和云原生领域，对Mecha架构混合云中间件有深度实践经验。 
> Capa官方GitHub地址:[https://github.com/capa-cloud/capa-java](https://github.com/capa-cloud/capa-java)

在过去微服务的发展历程中，各大厂商基于SDK模式已经有相对完善的中间件体系。但在业务全球化、混合多云架构场景下，业务应用对基础设施的标准化和解耦、可迁移性以及拥抱开源成为新的诉求。
以当前的业界实践及趋势来看，ServiceMesh 这种 Sidecar 架构与体系是满足上述诉求的最佳实践。

ServiceMesh 在微服务领域已经非常流行，越来越多的公司开始在内部落地，ServiceMesh 带来的业务解耦，平滑升级等优势大大提高了中间件的迭代效率。

不过 ServiceMesh 只解决了服务间通讯的需求，而现实中的分布式应用存在更多的需求。而效仿 ServiceMesh 将应用需要的其他分布式能力外移到各种 Sidecar Runtime，这逐渐演变成了一个趋势。

本文主要对 ServiceMesh 进行回顾总结，并分享业界基于 ServiceMesh 这种 Sidecar 模式解决混合云应用开发的解决方案，最后是关于混合云应用开发模式的探讨。

## 一、Service Mesh 回顾与总结

### A、Service Mesh 的初衷

>![](https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*p8tGTbpLRegAAAAAAAAAAAAAARQnAQ)
在微服务架构下，基础架构团队一般会为应用提供一个封装了各种服务治理能力的 SDK，这种做法虽然保障了应用的正常运行，但缺点也非常明显，每次基础架构团队迭代一个新功能都需要业务方参与升级才能使用，尤其是 bugfix 版本，往往需要强推业务方升级，这里面的痛苦程度每一个基础架构团队成员都深有体会。

伴随着升级的困难，随之而来的就是应用使用的 SDK 版本差别非常大，生产环境同时跑着各种版本的 SDK，这种现象又会让新功能的迭代必须考虑各种兼容，就好像带着枷锁前进一般，这样随着不断迭代，会让代码维护非常困难，有些祖传逻辑更是一不小心就会掉坑里。

同时这种“重”SDK 的开发模式，导致异构语言的治理能力非常薄弱，如果想为各种编程语言都提供一个功能完整且能持续迭代的 SDK 其中的成本可想而知。

18 年的时候，Service Mesh 在国内持续火爆，这种架构理念旨在把服务治理能力跟业务解耦，让两者通过进程级别的通信方式进行交互。在这种架构模式下，服务治理能力从应用中剥离，运行在独立的进程中，迭代升级跟业务进程无关，这就可以让各种服务治理能力快速迭代，并且由于升级成本低，因此每个版本都可以全部升级，解决了历史包袱问题，同时 SDK 变“轻”直接降低了异构语言的治理门槛，再也不用为需要给各个语言开发相同服务治理能力的 SDK 头疼了。

### B、Service Mesh 落地现状

#### Istio

> 参考资料：https://mp.weixin.qq.com/s/xokpWwTItyEW2YN4Iklmww

* 探索阶段：2017 年 - 2018 年
* 早期采用者阶段：2019 年 - 2020 年
* 大规模落地及生态发展阶段：2021 年至今

如果根据 “跨越鸿沟” 理论，服务网格已经跨越了 “鸿沟”，处于 “早期大众” 和 “晚期大众” 阶段之间。根据《Istio 大咖说》 观众中的反馈来看，用户已不再盲从于新技术，开始辩证的考虑 是否真的需要引入服务网格。

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/capa/service-mesh.png)

#### Mson

>![](https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*rRG_TYlHMqYAAAAAAAAAAAAAARQnAQ)
蚂蚁很快意识到了 Service Mesh 的价值，全力投入到这个方向，用 Go 语言开发了 MOSN 这样可以对标 envoy 的优秀数据面，全权负责服务路由，负载均衡，熔断限流等能力的建设，大大加快了公司内部落地 Service Mesh 的进度。

现在 MOSN 在蚂蚁内部已经覆盖了数千个应用、数十万容器，新创建的应用默认接入 MOSN，形成闭环。而且在大家最关心的资源占用、性能损耗方面 MOSN 也交出了一份让人满意的答卷：

1.  RT 小于 0.2ms

2.  CPU 占用增加 0%~2%

3.  内存消耗增长小于 15M

由于 Service Mesh 降低了异构语言的服务治理门槛，NodeJS、C++等异构技术栈也在持续接入到 MOSN 中。

在看到 RPC 能力 Mesh 化带来的巨大收益之后，蚂蚁内部还把 MQ，Cache，Config 等中间件能力都进行了 Mesh 化改造，下沉到 MOSN，提高了中间件产品整体的迭代效率。

### C、新的挑战

**Mesh化是云原生落地的关键步骤。**

* 最下方是云，以kubernetes为核心，关于这一点社区基本已经达成共识：kubernetes 就是云原生下的操作系统，屏蔽了不同云的软硬件差异。
* 在kubernetes之上，是Mesh层。不仅仅有我们熟悉的 ServiceMesh，还有诸如Database Mesh和Message Mesh等类似的其他 Mesh 产品形态，这些Mesh组成了一个标准化的通信层。
* 运行在各种 Mesh 的应用，不管是微服务形态，还是传统非微服务形态，都可以借助Mesh的帮助实现应用轻量化。非业务逻辑的各种功能被剥离到Mesh中后，应用得以“瘦身减负”。
* 瘦身之后的应用，其内容主要是业务逻辑实现。这样的工作负载形式，更适合 serverless 的要求，为接下来转型 serverless 做好准备。

![](https://skyao.io/talk/202103-dapr-from-servicemesh-to-cloudnative/images/ant-more-mesh_hu56c375bdd66e5b8ec5c7446e085ec97c_227360_1200x1200_fit_lanczos_3.png)

#### X Mesh

> 参考资料：https://skyao.io/talk/201910-ant-finance-service-mesh-deep-practice/

>![](https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*nKxcTKLp4EoAAAAAAAAAAAAAARQnAQ)
一个现代分布式应用，往往会同时依赖 RPC、Cache、MQ、Config 等各种分布式能力来完成业务逻辑的处理。

当初看到 RPC 下沉的红利以后，其他各种能力也都快速下沉。

初期，大家都会以自己最熟悉的方式来开发，这就导致没有统一的规划管理，如上图所示，应用依赖了各种基础设施的 SDK，而每种 SDK 又以自己特有的方式跟 MOSN 进行交互，使用的往往都是由原生基础设施提供的私有协议，这直接导致了复杂的中间件能力虽然下沉，但应用本质上还是被绑定到了基础设施。

1. 中间件抽象不足

比如想把缓存从 Redis 迁移到 Memcache 的话，仍旧需要业务方升级 SDK，这种问题在应用上云的大趋势下表现的更为突出。

2. 应用跟基础设施强绑定

试想一下，如果一个应用要部署在云上，由于该应用依赖了各种基础设施，势必要先把整个基础设施搬到云上才能让应用顺利部署，这其中的成本可想而知。
因此如何让应用跟基础设施解绑，使其具备可移植能力，能够无感知跨平台部署是我们面临的第一个问题。

2. 异构语言接入成本高

>![](https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*oIdQQZmgtyUAAAAAAAAAAAAAARQnAQ)
事实证明 Service Mesh 确实降低了异构语言的接入门槛，但在越来越多的基础能力下沉到 MOSN 以后，我们逐渐意识到为了让应用跟 MOSN 交互，各种 SDK 里都需要对通信协议，序列化协议进行开发，如果再加上需要对各种异构语言都提供相同的功能，那维护难度就会成倍上涨，

Service Mesh 让重 SDK 成为了历史，但对于现在各种编程语言百花齐放、各种应用又强依赖基础设施的场景来说，我们发现现有的 SDK 还不够薄，异构语言接入的门槛还不够低，如何进一步降低异构语言的接入门槛是我们面临的第二个问题。

## 二、Multi Runtime 理论概述

### A、什么是 Runtime?

> 参考资料：https://skyao.io/talk/202103-dapr-from-servicemesh-to-cloudnative/

>![](https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*hQT-Spc5rI4AAAAAAAAAAAAAARQnAQ)
20 年初的时候，Bilgin lbryam 发表了一篇名为
Multi-Runtime Microservices Architecture
的文章，里面对微服务架构下一阶段的形态进行了讨论。

如上图所示，作者把分布式服务的需求进行了抽象，总共分为了四大类：

1.  生命周期（Lifecycle）
    主要指应用的编译、打包、部署等事情，在云原生的大趋势下基本被 docker、kubernetes 承包。

2.  网络（Networking）
    可靠的网络是微服务之间进行通信的基本保障，Service Mesh 正是在这方面做了尝试，目前 MOSN、envoy 等流行的数据面的稳定性、实用性都已经得到了充分验证。

3.  状态（State）
    分布式系统需要的服务编排，工作流，分布式单例，调度，幂等性，有状态的错误恢复，缓存等操作都可以统一归为底层的状态管理。

4.  绑定（Binding）
    在分布式系统中，不仅需要跟其他系统通信，还需要集成各种外部系统，因此对于协议转换，多种交互模型、错误恢复流程等功能也都有强依赖。

明确了需求以后，借鉴了 Service Mesh 的思路，作者对分布式服务的架构演进进行了如下总结：

>![](https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*rwS2Q5yMp_sAAAAAAAAAAAAAARQnAQ)
第一阶段就是把各种基础设施能力从应用中剥离解耦，通通变成独立 sidecar 模型伴随着应用一起运行。

第二阶段是把各种 sidecar 提供的能力统一抽象成若干个 Runtime，这样应用从面向基础组件开发就演变成了面向各种分布式能力开发，彻底屏蔽掉了底层实现细节，而且由于是面向能力，除了调用提供各种能力的 API 之外，应用再也不需要依赖各种各样基础设施提供的 SDK 了。

作者的思路跟我们希望解决的问题一致，我们决定使用 Runtime 的理念来解决 Service Mesh 发展到现在所遇到的新问题。

### B、Service Mesh vs Runtime

>![](https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*srPVSYTEHc4AAAAAAAAAAAAAARQnAQ)
为了让大家对 Runtime 有一个更加清晰的认识，上图针对 Service Mesh 跟 Runtime 两种理念的定位、交互方式、通信协议以及能力丰富度进行了总结，可以看到相比 Service Mesh 而言，Runtime 提供了语义明确、能力丰富的 API，可以让应用跟它的交互变得更加简单直接。

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/capa/cloud-native-stack.png)

## 三、Multi Runtime 落地实践

### A、dapr

>![](https://static001.geekbang.org/wechat/images/93/93ccecd9a241b5c6921b988b18f0362e.png)
dapr 是社区中一款知名的 Runtime 实现产品，活跃度也比较高。

![](https://docs.dapr.io/images/overview-sidecar-model.png)

1.  提供了多种分布式能力，API 定义清晰，基本能满足一般的使用场景。
2.  针对各种能力都提供了不同的实现组件，基本涵盖了常用的中间件产品，用户可以根据需要自由选择。

#### 控制平面

![](https://skyao.io/talk/202103-dapr-from-servicemesh-to-cloudnative/images/dapr-control-plane_hu32ec8c339282b281cdff3c71662e3695_1613641_1200x1200_fit_lanczos_3.png)

#### 和Service Mesh共存

> 参考资料：https://docs.dapr.io/concepts/service-mesh/#using-dapr-with-a-service-mesh

![](https://docs.dapr.io/images/service-mesh.png)

当考虑如何在已使用Service Mesh公司内部落地 dapr 时，提出了两种方案，如下：

1. 替换：废弃掉现在的Istio，用 dapr 进行替换，这种方案存在两个问题：

   a.  dapr 虽然提供了很多分布式能力，但目前并不具备 Service Mesh 包含的丰富的服务治理能力。

   b.  Istio 已经大规模落地，并且经过了考验，直接用 dapr 来替换 Istio 稳定性有待验证。

2. 共存：新增一个 dapr 容器，跟 Istio 以两个 sidecar 的模式进行部署。这种方案同样存在两个问题：

   a.  引入一个新的 sidecar，我们就需要考虑它配套的升级、监控、注入等等事情，运维成本飙升。

   b.  多维护一个容器意味着多了一层挂掉的风险，这会降低现在的系统可用性。

### B、Layotto

同样的，如果你目前正在使用 envoy 作为数据面，也会面临上述问题。

因此我们希望把 Runtime 跟 Service Mesh 两者结合起来，通过一个完整的 sidecar 进行部署，在保证稳定性、运维成本不变的前提下，最大程度复用现有的各种 Mesh 能力。此外我们还希望这部分 Runtime 能力除了跟 Istio 结合起来之外，未来也可以跟 envoy 结合起来，解决更多场景中的问题，Layotto 就是在这样的背景下诞生。

>![](https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*sdGoSYB_XFUAAAAAAAAAAAAAARQnAQ)
如上图所示，Layotto 是构建在 MOSN 之上，在下层对接了各种基础设施，向上层应用提供了统一的，具有各种各样分布式能力的标准 API。对于接入 Layotto 的应用来说，开发者不再需要关心底层各种组件的实现差异，只需要关注应用需要什么样的能力，然后调用对应能力的 API 即可，这样可以彻底跟底层基础设施解绑。

对应用来说，交互分为两块，一个是作为 gRPC Client 调用 Layotto 的标准 API，一个是作为 gRPC Server 来实现 Layotto 的回调，得利于gRPC 优秀的跨语言支持能力，应用不再需要关心通信、序列化等细节问题，进一步降低了异构技术栈的使用门槛。

除了面向应用，Layotto 也向运维平台提供了统一的接口，这些接口可以把应用跟 sidecar 的运行状态反馈给运维平台，方便 SRE 同学及时了解应用的运行状态并针对不同状态做出不同的举措，该功能考虑到跟 k8s 等已有的平台集成，因此我们提供了 HTTP 协议的访问方式。

除了 Layotto 本身设计以外，项目还涉及两块标准化建设，首先想要制定一套语义明确，适用场景广泛的 API 并不是一件容易的事情，为此我们跟阿里、 dapr 社区进行了合作，希望能够推进 Runtime API 标准化的建设，其次对于 dapr 社区已经实现的各种能力的 Components 来说，我们的原则是优先复用、其次开发，尽量不把精力浪费在已有的组件上面，重复造轮子。

最后 Layotto 目前虽然是构建在 MOSN 之上，未来我们希望 Layotto 可以跑在 envoy 上，这样只要应用接入了 Service Mesh，无论数据面使用的是 MOSN 还是 envoy，都可以在上面增加 Runtime能力。

### C、Capa

> Capa主要为了解决携程混合云部署开发的问题，主要面向Java技术栈。
> github: https://github.com/capa-cloud/capa-java

Capa项目基于Mecha架构的设计理念，使用 富SDK模式 提供Multi-Runtime的标准API。

您可以简单的将Capa项目理解为 Dapr / Layotto 等Sidecar模式项目的SDK实现版本。

#### Sidecar or SDK

基于Mecha架构理念的Multi-Runtime，以Sidecar的方式提供标准API的功能，看起来似乎是最合理的选择。

那为什么不直接使用Dapr/Layotto等项目，而是选择开发 富SDK模式 的Capa项目呢。

概括：以Dapr为代表的Sidecar架构是未来，但现有的很多企业和系统很难一步到位的升级到Sidecar架构，富SDK架构将会长期的存在下去。

+ sidecar的开发和运维成本高。
+ sidecar中实现自定义逻辑的复杂度高。
+ 当前sidecar模式还不足够成熟，无法短时间内完成开发和部署。

引申：面对庞大的Java系统体系，Capa项目将使用富SDK模型支持Java系统向Mecha架构过渡。在Dapr等项目成熟后，也可以无缝衔接到Sidecar架构。

#### 能力水平模型

选用sidecar来进行中间件支持，存在以下几个问题：

* 在过去我们积累了丰富的Java SDK，全盘舍弃意味着巨大的损失。
* 社区还比较年轻，短时间内用golang重写所有SDK逻辑不太现实。
* 社区对公有云功能支持比较好，私有云主要依赖SDK模式。

![img.png](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/capa/feature-support.png)

> SDK模式的缺点
> + 跨语言开发和维护成本高。无法支撑多语言战略，团队没有精力维护除了 Java 以外其他语言的 SDK；
> + SDK升级侵入性强。客户端 SDK 版本升级推进困难，特别是遇到 Bug 的时候，彻底下线一个版本可能会花上几个月的时间，给业务带来了隐患；
> + 依赖冲突
> + ......

#### Capa SDK设计

> 参考资料：https://github.com/dapr/dapr/issues/3261

设计思路：标准API + 可拔插可替换的SDK组件 模式

在不同的分布式中间件领域，Capa提供与具体中间件API无关的统一的标准编程API。 所以应用程序在使用Capa编程时不需要依赖任何具体的中间件API，只需要依赖Capa的标准编程API即可。

例如：

```java
Mono<Void> result = client.publishEvent("mytopic", "my message");
```

在部署到不同的目标环境时，Capa将会装载标准API的不同实现类到应用程序中。当调用统一的编程API时，底层运行时会适配到不同的具体中间件SDK实现。

中间件团队需要针对不同目标环境，开发标准API在目标环境下的实现类即可；而应用代码可以拥有"一次编写，随处运行"的开发体验。

![](https://user-images.githubusercontent.com/22876610/120766251-9ef56200-c54c-11eb-9fc2-15b17937b4bb.PNG)

#### 示例：Capa-java + Maven

核心实现思想就是：面向接口编程 + 通过JavaSPI动态加载实现类

![capa-sdk](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/capa/capa-sdk.png)

Maven配置伪代码示例：

```xml
<!-- 编程时直接引入API层 -->
<dependency>
    <groupId>group.rxcloud</groupId>
    <artifactId>capa-sdk</artifactId>
</dependency>

<profiles>
    <!-- AWS云实现类 -->
    <profile>aws</profile>
    <dependencys>
        <dependency>
            <groupId>group.rxcloud</groupId>
            <artifactId>capa-sdk-aws</artifactId>
        </dependency>  
    </dependencys>

    <!-- Ali云实现类 -->
    <profile>ali</profile>
    <dependencys>
        <dependency>
            <groupId>group.rxcloud</groupId>
            <artifactId>capa-sdk-ali</artifactId>
        </dependency>
    </dependencys>
</profiles>
```

开发人员编程时，应用程序直接调用API层的接口进行编程。

在打包成镜像的过程中，通过maven profile加载不同云平台的jar实现。

在运行时，SDK通过Java SPI机制，动态加载API层接口的实现类。
该实现类，即为各个云平台上不同的SDK实现。

### D、Femas / OpenSergo / Micro / Other / ...

> 参考资料：https://www.yuque.com/docs/share/5221c27a-9d0c-44c7-8ef2-0956d3b09a32?#

![](https://cdn.nlark.com/yuque/0/2021/png/12961124/1632385886671-69b482d2-eef9-498d-a036-021e3810e6ee.png?x-oss-process=image%2Fresize%2Cw_750%2Climit_0)

![](https://camo.githubusercontent.com/69c8695b4a1c5440d798343bb4b86128b7b733d60b67605f7476c099616f9dd8/68747470733a2f2f6d6963726f2e6d752f696d616765732f6d6963726f2d332e302e706e67)

### E、移植性

>![](https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*2DrSQJ6GL8cAAAAAAAAAAAAAARQnAQ)
如上图所示，一旦完成 Runtime API 的标准化建设，接入 Mecha 的应用天然具备了可移植性，应用不需要任何改造就可以在私有云以及各种公有云上部署，并且由于使用的是标准 API，应用也可以无需任何改造就在 Layotto / dapr / Capa 之间自由切换。

#### 未来迁移

SDK模式的优点在于开发和接入的成本较低，可以快速拥有混合云部署开发的能力。但缺点也是无法忽视的，当随着Mecha Runtime的发展，未来SDK模式很可能将会迁移到更有技术优势的Mecha Runtime Sidecar模式中。

> 但也要考虑到性能敏感领域，例如分布式缓存领域。相关模块能接受额外 1ms 的响应延迟吗？Sidecar 带来的优势能否弥补这个问题？
> 所以in-process(SDK)模型在这些领域仍具备不可替代的优势。

推动API的标准化建设：使各大Mecha体系保持API层的统一，保留未来互相迁移的可能。

从未来几年来看：
* 在较小的私有云，会长期支持SDK模式。
* 在较大的私有云，框架团队有能力完成大规模sidecar化改造，会从SDK模式迁移到Sidecar模式。
* 在公有云，目前可以选用SDK模式/Sidecar模式，SDK模式更有利于二次定制；
* 随着社区在公有云能力的发展，以及云厂商的支持，未来可全部切换到sidecar模式。
* 对于异构语言架构，可对主要语种采用sdk模式(功能更丰富)，小语种采用sidecar模式。

## 四、API设计原则

> 就像SQL标准之于关系型数据库。
> 
> 参考资料：https://www.infoq.cn/article/wjkNGoGaaHyKs7xIyTSB

### A、功能集选择

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/capa/api-design.png)

#### 组件提供的能力不平齐

![](https://static001.geekbang.org/wechat/images/29/298af0137732cd1fb526bd46229a71fc.png)

#### 解决思路一：Runtime 弥补组件缺失能力（sidecar）

![](https://static001.geekbang.org/wechat/images/ca/caa5f9fc42715d24967cbeed433bd870.png)

#### 解决思路二：Component 弥补组件缺失能力

#### Capa示例：Configuration

在私有云的Configuraion-java-sdk(如apollo/qconfig)中，sdk本身支持监听配置变化。

但在AWS AppConfig java sdk中，本身并不支持监听配置变化。

那我们认为对于configuraion中间件领域而言，监听配置变化是level0的功能，是必须具有的功能。

所以需要在component-sdk中对其进行弥补：

+ sdk中通过定时线程+轮询接口的方式，获取最新的配置变化。

以此，使用户接入时，认为具有这项能力。

#### 解决思路三：无法弥补，但可以模糊处理

能力分层模型：A云能够实现，B云通过其他方式也能实现。

#### 解决思路四：无法弥补又不能模糊处理

高危，按条件选用。 明确告知在特定云上才有这项能力。

> 社区讨论：协商机制

### B、分层模型

![](https://static001.geekbang.org/wechat/images/2a/2a92f5f1dd7d8dae44df981e3afa5368.png)

### C、拓展字段

高度定制化。不建议用户直接使用。

若要用，则使用定义好的有限枚举。
SDK实现中对该枚举进行支持。

![](https://static001.geekbang.org/wechat/images/39/391a3a9fa724a81fb53ac409adb4e3f9.jpeg)

### E、配置原语

> 参考资料：https://github.com/dapr/dapr/issues/2988

>![](https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*mfkRQZH3oNwAAAAAAAAAAAAAARQnAQ)
首先是分布式系统中经常使用的配置功能，应用一般使用配置中心来做开关或者动态调整应用的运行状态。Layotto 中配置模块的实现包括两部分，一个是对如何定义配置这种能力的 API 的思考，一个是具体的实现，下面逐个来看。

想要定义一个能满足大部分实际生产诉求的配置 API 并不是一件容易的事，dapr 目前也缺失这个能力，因此我们跟阿里以及 dapr 社区一起合作，为如何定义一版合理的配置 API 进行了激烈讨论。

目前讨论结果还没有最终确定，因此 Layotto 是基于我们提给社区的第一版草案进行实现，下面对我们的草案进行简要说明。

我们先定义了一般配置所需的基本元素：

1.  appId：表示配置属于哪个应用

2.  key：配置的 key

3.  content：配置的值

4.  group：配置所属的分组，如果一个 appId 下面的配置过多，我们可以给这些配置进行分组归类，便于维护。

此外我们追加了两种高级特性，用来适配更加复杂的配置使用场景：

1.  label，用于给配置打标签，比如该配置属于哪个环境，在进行配置查询的时候，我们会使用 label + key 来查询配置。

2.  tags，用户给配置追加的一些附加信息，如描述信息、创建者信息，最后修改时间等等，方便配置的管理，审计等。

对于上述定义的配置 API 的具体实现，目前支持查询、订阅、删除、创建、修改五种操作，其中订阅配置变更后的推送使用的是 gRPC 的 stream 特性，而底层实现这些配置能力的组件，我们选择了国内流行的 apollo，后面也会根据需求增加其他实现。

level1

![](https://user-images.githubusercontent.com/1582369/112835954-8d1abd00-90cc-11eb-9426-f26e14fb984f.png)

level2

![](https://user-images.githubusercontent.com/1582369/112836063-ae7ba900-90cc-11eb-8617-0939b13b6c40.png)

levelx...

metadata

### G、RPC 原语

>![](https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*i-JnSaeZbJ4AAAAAAAAAAAAAARQnAQ)
RPC 的能力大家不会陌生，这可能是微服务架构下最最基础的需求，对于 RPC 接口的定义，我们同样参考了 dapr 社区的定义，发现完全可以满足我们的需求，因此接口定义就直接复用 dapr 的，但目前 dapr 提供的 RPC 实现方案还比较薄弱，而 MOSN 经过多年迭代，能力已经非常成熟完善，因此我们大胆把 Runtime 跟 Service Mesh 两种思路结合在一起，把 MOSN 本身作为我们实现 RPC 能力的一个 Component，这样 Layotto 在收到 RPC 请求以后交给 MOSN 进行实际数据传输，这种方案可以通过 istio 动态改变路由规则，降级限流等等设置，相当于直接复用了 Service Mesh 的各种能力，这也说明 Runtime 不是要推翻 Service Mesh，而是要在此基础上继续向前迈一步。

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/capa/capa-rpc.png)

## 五、Capa 实践

### A、适配迁移之痛

如果要使用原生的Capa API，您的遗留系统需要面对较大的重构工作量。

为了使迁移做到低成本，我们可以复用目前使用到的中间件API。

通过开发一个适配层项目(提供相同的注解/接口调用方式)，将原中间件API的实现更改为Capa API。

如此一来，应用程序只需要更改很少的代码(例如更换注解/接口的路径名)即可迁移到Capa架构。

目前在Java语言上，Capa可以支持：

+ 接入(携程)私有云SDK的适配层
+ 接入spring boot体系的适配层

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/capa/capa-use.png)

#### 接入适配模式的改动范围

1. 替换中间件依赖

```xml
<dependency>
    <groupId>com.ctrip.framework.apollo</groupId>
    <artifactId>apollo-client</artifactId>
</dependency>
```

to

```xml
<dependency>
    <groupId>group.rxcloud</groupId>
    <artifactId>capa-sdk-configuration</artifactId>
</dependency>
```

2. 替换相关代码（import路径+注解名）

```java
import com.ctrip.framework.apollo.Config;

@Config("testjson.json")
private Person person;
```

to

```java
import group.rxcloud.capa.config.CloudConfig;

@CloudConfig("testjson.json")
private Person person;
```

> Q: 为什么不保持import路径和使用方式完全一致？
> 
> A: 当运行在特定云上时，需要加载对应的sdk进来；这时如果有类路径完全一致的类存在，会导致类加载冲突。

### B、Capa API设计

Capa(Java SDK)是面向Java应用实现Mecha架构的SDK解决方案，它目前支持以下领域：

* Service Invocation (RPC服务调用)
* Configuration Centor (Configuration动态配置)
* Publish/Subscribe (Pub/Sub发布订阅)
* State Management (State状态管理)
* Application Log/Metrics/Traces (Telemetry可观测性)
* Redis (Redis高度定制化存储) -beta
* Database (SQL关系型数据库) -alpha
* Schedule (Schedule定时调度) -alpha

### 完全复用的标准API

* Service Invocation (RPC服务调用)
* Configuration Centor (Configuration动态配置)
* Publish/Subscribe (Pub/Sub发布订阅)

### 补充了的标准API

#### RPC

标准API中只涵盖了作为Client调用其他服务的API。

但不同云上服务注册的框架弈有所不同（例如：dubbo/spring cloud/service mesh)。

在sidecar模式中，sidecar本身可类似service mesh一样承担服务注册的能力，通过callback API调用服务接口，但SDK模式时却不行。

所以添加了作为服务端的API：

```java
    // -- Runtime as Server

    /**
     * Register onInvoke method when runtime as server.
     *
     * @param <T>            The Type of the request type, use byte[] to skip serialization.
     * @param <R>            The Type of the response type, use byte[] to skip serialization.
     * @param methodName     The actual Method to be call in the application.
     * @param httpExtensions Additional fields that are needed if the receiving app is listening on                       HTTP, {@link HttpExtension#NONE} otherwise.
     * @param onInvoke       the on invoke
     * @param metadata       Metadata (in GRPC) or headers (in HTTP) to be received in request.
     * @return A Mono Plan of register result.
     */
    <T, R> Mono<Boolean> registerMethod(String methodName, List<HttpExtension> httpExtensions,
                                        Function<T, R> onInvoke,
                                        Map<String, String> metadata);

    /**
     * Register controller class when runtime as server.
     *
     * @param registerServerRequest the register server request
     * @return A Mono Plan of register result.
     */
    Mono<Boolean> registerServer(RegisterServerRequest registerServerRequest);
```

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/capa/capa-rpc-server.png)

#### PubSub

标准API中定义了Pub发布消息的API，而Sub订阅消息则通过callback进行定义。

sidecar通过callback回调触发Sub订阅，但对于SDK模式而言，并没有额外的进程可触发callback逻辑。

所以添加了消息订阅的API：

```java
    // -- Runtime as Subscriber

    /**
     * Subscribe events.
     *
     * @param pubsubName the pubsub name we will subscribe the event from.
     * @param topicName  the topicName where the event will be subscribed.
     * @param metadata   The metadata for the subscription.
     * @return a Flux stream of subscription events.
     */
    Flux<TopicEventRequest> subscribeEvents(String pubsubName, String topicName, Map<String, String> metadata);

    /**
     * Subscribe events.
     *
     * @param topicSubscription the request for topic subscription.
     * @return a Flux stream of subscription events.
     */
    Flux<TopicEventRequest> subscribeEvents(TopicSubscription topicSubscription);
```

### 未使用的标准API

#### State Management (State状态管理)

目前KV主要使用的Redis。

而标准State API，可表达的语义较弱，无法cover redis场景。

所以暂时未使用。

#### Distributed Lock API (分布式锁)

规划中。

但对于跨云环境而言，很难做到全局锁，只能做到Region/云级别的锁。

#### Sequencer API (全局UUID)

目前在java中，直接使用本地进程内算法实现。

#### File API (文件系统)

规划中。

后续应该会做，因为不同云上的文件系统使用方式不同。

#### Secret API (密钥存储)

规划中。

后续可能会做，因为不同云上密钥存储使用方式不同。

但目前密钥存储还未暴露给用户使用，而只是中间件在使用，所以中间件中直接引用了对应云的SDK来实现。

### 自定义的非标准API

目前的 dapr api 并不能在保持可移植性的同时满足现实世界中应用程序的所有需求。

> 参考：https://github.com/mosn/layotto/issues/530

#### DB SQL

对于SQL而言：

+ SQL协议已经十分成熟
+ 将SQL抽象为一套API，面临的挑战很多

故Capa目前仅提供了一套待讨论的SQL API: [dapr【提案】数据库API设计 #3354](https://github.com/dapr/dapr/issues/3354)

而在落地实践过程中，SQL关系型数据库领域采用的方案是 
[DAL](https://github.com/ctripcorp/dal) 数据库连接技术，经二次开发支持混合云SDK模式。

#### Redis

目前的State API，无法支持复杂的Redis语义表达。
故Capa在Redis领域，基于 Jedis 定义了一套 [Redis API](https://github.com/capa-cloud/cloud-runtimes-jvm/blob/develop/cloud-runtimes-api/src/main/java/group/rxcloud/cloudruntimes/domain/enhanced/RedisRuntimes.java)

#### Telemetry (Log/Metric/Trace)

场景：中间件SDK/应用程序 需要记录指标埋点。

之前，我们可以通过 CAT 这类应用监控告警平台进行实现。

Capa复用了 OpenTelemetry 的API，来实现监控告警/指标收集的功能。

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/capa/capa-telemetry-api.png)

#### Schedule

场景：触发job调度任务（规划中）

```java
/**
 * Schedule Bindings Runtimes standard API defined.
 */
public interface ScheduleRuntimes {

    /**
     * Invokes a Schedule Binding operation.
     *
     * @param appId    the app id
     * @param jobName  the job name
     * @param metadata the metadata
     * @return the job flux stream
     */
    Flux<Object> invokeSchedule(String appId, String jobName, Map<String, String> metadata);
}
```

### C、云原生技术栈选型

Capa SDK本身不具有丰富的功能，更像是一个包装适配层，具体功能由下层的具体中间件来实现。

|领域|云厂商|技术选型|实践经验|
|---|---|---|---|
|RPC|Trip|Trip SOA||
| |AWS|AWS AppMesh|重试、熔断、超时等全部从SDK中下沉到Mesh层处理|
|Configuration|Trip|Apollo / [QConfig](https://github.com/qunarcorp/qconfig)||
| |AWS|AWS AppConfig|功能较为简陋，需要在SDK中进行弥补|
|MQ|Trip|[QMQ]((https://github.com/qunarcorp/qmq))||
| |AWS|AWS MSK Kafka|缺少如延时消息等功能，需要借助周边系统进行弥补|
|Redis|Trip|CRedis||
| |AWS|AWS ElasticCache||
|Log/Metric/Trace|Trip|CAT||
| |AWS|AWS CloudWatch|OpenTelemetryAPI对接CloudWatch SDK|
|DB(SQL)|Trip|[DAL](https://github.com/ctripcorp/dal)|非Mecha架构|
| |AWS|DAL + AWS RDS|非Mecha架构|
|Schedule|Trip|QSchedule||
| |AWS|K8S cronJob||

### D、个性化的配置和逻辑

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/capa/capa-plugin.png)

1. 应用程序可以覆写 配置 ，实现自定义
2. 应用程序可以覆写 插件 ，实现自定义

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/capa/capa-plugin-config.png)

自定义配置类似layotto：[layotto 配置下发通道与配置热加载 #500](https://github.com/mosn/layotto/issues/500)

#### 特定云的配置

集成在对应云的SDK中。

#### 举个例子：[layotto 解耦API跟具体实现 #513](https://github.com/mosn/layotto/issues/513)

如果用户在调用API时明确指定了，使用redis作为store_name，那么对于没有部署redis的云平台，则无法运行。

所以对于redis这种与基础设施有关的选择，capa并不暴露给用户：

+ store_name，存放在sdk的配置文件中。
+ 用户通过一个接口方法(比如getStoreName())，获取该name，并透传给API调用。

主要也是因为，capa当前都是1:1的情况，目前不存在1个领域有多种实现。

后续如果有这种情况，考虑使用configuration配置功能进行映射：

1. 定义一个configuration配置，key1=redis, key2=mongo
2. 用户发起了两次调用，两次调用分别为例如key1=1, key2=2
3. 则getStoreName(key1)=redis，getStoreName(key1)=mongodb，默认=redis
4. 用户将此store_name透传给API调用

#### 应用个性化的配置和逻辑

SDK中的一些逻辑是可替换的，实现上通过面向Java接口编程，在SDK中提供了接口的默认实现。

应用程序可以通过覆盖接口实现，从而实现自定义逻辑。

### E、跨云交互

一方面在进行混合云改造的过程中，面临过渡期的问题。
当一部分的服务和数据在原云平台上时，新云平台将面临和原云平台进行交互的问题。

另一方面作为混合云架构，若要发挥每个云各自的优势，有可能不同服务会部署在不同的云平台上，这时也会面对跨云交互的问题。

而要实现跨云交互，主要由以下两个思路：

#### 1. 由Mecha Runtime解决跨云交互问题

Mecha Runtime/SDK感知混合云，并实现跨云交互。

但可能实现起来比较复杂，设计到跨云的认证、网络打通等。

#### 2. (Capa)由外部插件/周边系统，完成跨云交互部分的功能

Mecha Runtime/SDK将会比较轻量，不需要感知其他云。
涉及到某个领域的跨云交互问题，交由该领域的 基础设施/周边系统 完成。

Capa相比于layotto等sidecar模型，采用SDK模式更不易引入较复杂逻辑，会导致SDK过于臃肿，且无法多语言复用。
故Capa架构中，所有跨云交互问题，都交由具体领域的周边系统完成，Capa只关注于当前云的配置和使用。

#### RPC服务调用跨云

跨云服务调用的前提是，网络层面流量已经打通。
例如在AWS上，通过PrivateLink技术进行网络流量打通。

之后在服务调用中，依赖网络基础的流量转发实现:

|RPC网络基础设施|跨云交互能力|
|---|---|
|K8S|ExternalService转发|
|Istio|ServiceEntry转发|
|Dubbo/SpringCloud/Trip SOA|MockService转发|
|AWS AppMesh|VirtualNode DNS转发|
|不支持？|搭建Nginx代理实现转发|

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/capa/capa-rpc-crose.png)

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/capa/rpc-cross.png)

#### MQ跨云

使用周边系统：MQ同步工具，进行跨云消息传输。

按需申请，消息格式转换，失败重试。

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/capa/capa-mq-crose.png)

#### 数据跨云

DB数据使用周边系统：[MySQL同步工具](https://github.com/ctripcorp/drc) ，进行跨云数据传输。

Redis数据目前不做跨云传输。

#### Configuration等

使用周边系统：XX同步工具，进行跨云的数据同步。

## 六、高阶拓展

### A、WebAssembly 的探索

>![](https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*-ACRSpqbuJ0AAAAAAAAAAAAAARQnAQ)
WebAssembly，简称 WASM，是一个二进制指令集，最初是跑在浏览器上来解决 JavaScript 的性能问题，但由于它良好的安全性，隔离性以及语言无关性等优秀特性，很快人们便开始让它跑在浏览器之外的地方，随着 WASI 定义的出现，只需要一个 WASM 运行时，就可以让 WASM 文件随处执行。

既然 WebAssembly 可以在浏览器以外的地方运行，那么我们是否能把它用在 Serverless 领域？目前已经有人在这方面做了一些尝试，不过如果这种方案真的想落地的话，首先要考虑的就是如何解决运行中的 WebAssembly 对各种基础设施的依赖问题。

#### WebAssembly 落地原理

目前 MOSN 通过集成 WASM Runtime 的方式让 WASM 跑在 MOSN 上面，以此来满足对 MOSN 做自定义扩展的需求。同时，Layotto 也是构建在 MOSN 之上，因此我们考虑把二者结合在一起，实现方案如下图所示：

>![](https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*U7UDRYyBOvIAAAAAAAAAAAAAARQnAQ)
开发者可以使用 Go/C++/Rust 等各种各样自己喜欢的语言来开发应用代码，然后把它们编译成 WASM 文件跑在 MOSN 上面，当 WASM 形态的应用在处理请求的过程中需要依赖各种分布式能力时就可以通过本地函数调用的方式调用 Layotto 提供的标准 API，这样直接解决了 WASM 形态应用的依赖问题。

目前 Layotto 提供了 Go 跟 Rust 版 WASM 的实现，虽然只支持 demo 级功能，但已经足够让我们看到这种方案的潜在价值。

此外，WASM 社区目前还处于初期阶段，有很多地方需要完善，我们也给社区提交了一些 PR共同建设，为 WASM 技术的落地添砖加瓦。

#### WebAssembly 落地展望

>![](https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*NzwKRY2GZPcAAAAAAAAAAAAAARQnAQ)
虽然现在 Layotto 中对 WASM 的使用还处于试验阶段，但我们希望它最终可以成为 Serverless 的一种实现形态，如上图所示，应用通过各种编程语言开发，然后统一编译成 WASM 文件，最后跑在 Layotto+MOSN 上面，而对于应用的运维管理统一由 k8s、docker、prometheus 等产品负责。

1. 用户实现自定义的逻辑

对于中间件领域，可以由社区定义一套执行模板，而用户可以灵活的插入自定义的回调逻辑，更具有动态扩展性。

2. 隔离中间件运行时

Runtime启动多个相互隔离的 WASM Runtime ，从而隔离每个中间件组件的运行时（CPU/内存/...)，避免异常的扩散和传播，互不影响。

#### Istio Wasm

Istio 的扩展机制使用 Proxy-Wasm 应用二进制接口（ABI）规范，提供了一套代理无关的流媒体 API 和实用功能，可以用任何有合适 SDK 的语言来实现。

扩展 Istio 的功能，满足你的特定需求，需要三个步骤：

1. 在 Golang 中实现你的插件功能。
2. 编译、构建，并将 Wasm 模块推送到符合 OCI 标准的 Docker 镜像仓库。
3. 使用 WasmPlugin 资源配置服务网格工作负载，以便从远程镜像仓库中拉取 Wasm 模块。

> 参考资料：https://mp.weixin.qq.com/s/VAwTCIP6RhqDNoBbmE8zVA

#### Wasm 展望

1. 支持网络接口
2. 对go-sdk有更好的支持，现在以c/rust为主。

### B、eBPF 的探索

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/capa/iptables.png)

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/capa/ebpf-2.png)

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/capa/ebpf-3.png)

> 参考资料：https://mp.weixin.qq.com/s/W9NySdKnxuQ6S917QQn3PA

#### 应用场景: sidecar加速

socket重定向，绕过TCP/IP协议栈，
 
## 七、社区规划

最后来看下社区的做的一些事情。

> 参考资料：https://zhuanlan.zhihu.com/p/435012312?utm_source=wechat_session&utm_medium=social&utm_oi=618742049890111488&utm_content=group2_article&utm_campaign=shareopn

### A、建设更多的API标准

>![](https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*OpQTRqoMpK0AAAAAAAAAAAAAARQnAQ)
上图列出了 Layotto 跟 dapr 现有的能力对比，在 Layotto 的开发过程中，我们借鉴 dapr 的思路，始终以优先复用、其次开发为原则，旨在达成共建的目标，而对于正在建设或者未来要建设的能力来说，我们计划优先在 Layotto 上落地，然后再提给社区，合并到标准 API，鉴于社区异步协作的机制，沟通成本较高，因此短期内可能 Layotto 的 API 会先于社区，但长期来看一定会统一。

+ 分布式锁API
+ 文件系统API
+ 延迟消息API
+ 密钥管理API
+ ...

### B、API 标准化建设

>![](https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*GAe8QqZ03eoAAAAAAAAAAAAAARQnAQ)
关于如何定义一套标准的 API 以及如何让 Layotto 可以跑在 envoy 上等等事项，我们已经在各个社区进行了深入讨论，并且以后也还会继续推进。

对于 API 标准化的建设是一件需要长期推动的事情，同时标准化意味着不是满足一两种场景，而是尽可能的适配大多数使用场景。

### C、可扩展API架构

参考OS领域当年是怎么定API的，我们可以把Runtime API设计成多层：

- 社区标准API

- 企业内部的私有API

- 基础设施特定API

分别对应OS领域的：

- POSIX API

- 各种Unix-like系统自己的System Call

- 特殊硬件提供的特殊功能

基于这种思想，尝试让Runtime支持API插件，让用户自己实现自己的私有API

### D、直接支持行业标准协议

- 直接支持SQL

- 直接支持Redis

需要进一步讨论。

### E、开源协同

各个Mecha项目积极交流，合作共建，互为补充。

## 八、云厂商的支持

### A、阿里云在内部的落地

> 参考资料：https://blog.dapr.io/posts/2021/03/19/how-alibaba-is-using-dapr/

#### 微服务架构、Faas 与 多语言应用

微服务架构分层逐渐形成，后端 BaaS 化，客户端轻量化，业务侧 Serverless 化，让业务更加聚焦业务开发，进一步提升研发效率。

FaaS 对多语言支持的需求强烈，并不局限于 Java。但实际上，由于成本和时间限制，用所有语言重新开发客户是不切实际的。

借助 Dapr，阿里巴巴解决了 FaaS 的多语言问题，帮助客户通过 FaaS 提高开发效率。

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/capa/ali-dapr.png)

> [Are you using Dapr? #3169](https://github.com/dapr/dapr/issues/3169)

#### 适配基于Java的遗留系统

我们旨在消除业务开发团队进行代码更改以减少迁移期间对业务应用程序的影响的需要。在将这些遗留系统迁移到 Dapr 时，我们设计了一个 Java 适配层，它将原始 Java 调用适配到 Dapr 客户端 API。

![](https://blog.dapr.io/posts/2021/03/19/how-alibaba-is-using-dapr/multiple-langurage_hu5d98ca782c8bcb789c89210a0f8e3e46_207793_1500x0_resize_q75_box.jpg)

#### 混合云：云到云迁移

Dapr 的可移植性将钉钉文档的上层应用与消息系统等底层基础设施解耦。从而，钉钉文档实现了不同云平台之间的平滑迁移。

![](https://blog.dapr.io/posts/2021/03/19/how-alibaba-is-using-dapr/cloud-migration_hu5d98ca782c8bcb789c89210a0f8e3e46_276395_1500x0_resize_q75_box.jpg)

### B、蚂蚁集团Mesh化进展

> 参考文章：https://mp.weixin.qq.com/s/eh0Jz7YeF27bXqdBMd4MPw

#### 1、SOA 时代

中间件的客户端，均直接集成在业务进程内：

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/capa/ant-1.png)

#### 2、Mesh 化阶段

中间件能力下沉，应用和基础设施实现部分解耦：

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/capa/ant-2.png)

#### 3.应用运行时阶段

将应用和具体基础设施的类型解耦，仅依赖标准 API 编程：

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/capa/ant-3.png)

### C、微软Azure的托管支持

微软在 Ignite 2021 大会上发布了预览版的Azure Container Apps，这是一个完全托管的无服务器容器运行时，用于大规模构建和运行现代应用程序。

* 利用分布式应用运行时 Dapr 轻松构建和连接微服务。 Dapr允许你构建松耦合的微服务应用程序，而不是构建一个分布式单体应用，在Azure Container Apps里我，利用 Dapr 及其组件构建具有弹性、可扩展性和松耦合的应用程序

> 参考资料：https://www.cnblogs.com/shanyou/p/15509042.html

### D、Dapr/Layotto 加入 CNCF 孵化器

CNCF 托管了许多与 Dapr 紧密结合的项目。例如，Dapr 使用 gRPC 作为它的主要 RPC 堆栈。OpenTelemetry 用作 Dapr 的遥测协议，CloudEvents 用于标准化 Dapr 的 Pub/Sub API 中的消息格式，SPIFFE 用作 Dapr 的访问列表特性的身份格式，Prometheus 用作 Dapr 端点的指标格式，Dapr 支持 NATS 的 Pub/Sub 实现以及 Open Policy Agent。此外，Dapr 使用 Operator 在 Kubernetes 上原生运行，并使用 Helm 作为主要部署机制。

> 参考资料：https://mp.weixin.qq.com/s/8qnmL12JrESwJg3RsSelJQ

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/capa/slog.png)

------------

### 主要参考文献

+ https://mosn.io/layotto/#/zh/blog/mosn-subproject-layotto-opening-a-new-chapter-in-service-grid-application-runtime/index
+ https://mp.weixin.qq.com/s/N3dzDc4QvtvCZytBh46PLw