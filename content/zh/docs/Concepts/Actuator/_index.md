---
title: "Actuator可观测性"
linkTitle: "Actuator可观测性"
date: 2022-01-18
description: >
  应用级组件可观测性规范定义
---

# 可观测性 规范定义

全面的可观测指标度量规范定义

### A、可观测性理论探究

![](http://icyfenix.cn/assets/img/mtl.7974eb9f.png)

![](https://segmentfault.com/img/bVcSfQs)

![](https://s5.51cto.com/oss/202111/19/bdd32d343c4e0d45bac4012e7bc866bc.jpg) 

## 一、命名空间 规范定义

命名空间采用分级域名命名方式：

**(顶级域名).一级域名.二级域名.三级域名.x.y.z**

### 0、顶级域名: 云划分

顶级域名应标识所属云(私有云、公有云)等基础设施。

但目前各云监控指标命名空间本身隔离，故不考虑加入顶级域名。

### A、一级域名: 技术栈领域划分

将云原生技术栈划分为4个领域，一级域名标识了所属的层级。

+ 运维层（Maintainance）
+ 应用层（Application）
+ 中间件层（Middleware）
+ 基础设施层（Infrastructure）

对应一级域命名空间为：

+ Ops
+ App
+ Fxc
+ Inf

#### 参考设计1：云原生技术栈Stack

参考云原生技术栈图示给出的四个层次，使一级域名能够显示出Actuator所属的层级。

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/blog/news/capa/cloud-native-stack.png)

#### 参考设计2：携程现有监控指标分类

携程监控指标的一级域名主要有`System`、`FrameworkName`、`App`等等。

不过其技术栈领域的监控划分主要依赖于：使用不同看板进行呈现，相当于不同的监控平台本身对应于不同的技术栈领域。

应用层的监控主要还是以`FrameworkName`为主，反映出了携程是以框架为主体，框架就强绑定了该领域的概念（看到Dal就意味着关系型数据库、看到SOA就意味着RPC领域）。

### B、二次域名: 组件领域划分

#### 1. Ops

Ops运维和管理领域：

+ CICD
+ ...

#### 2. App

应用层，应在二级域名进行应用类型的划分。

在这里，我们参考携程的应用类型设计，取运行时语言作为划分：

+ Java
+ Node
+ Python
+ Golang
+ ...

#### 3. Fxc

主要基于中间件维度进行定义：

* RPC
* MQ
* Configuration
* DB
* Redis
* Metric
* Log
* ...

#### 4. Inf

以基础设施作为划分：

+ K8S
+ ECS
+ AppMesh
+ ...

### C、三次域名: 中间件/语种/... 细节划分

基于以上 `一级域名(技术栈领域).二级域名(组件领域划分)` 的命名空间，我们已经能够体现具体领域。

但每个领域，都可能有多种实现。
例如在中间件领域，携程命名空间做了 `中间件-领域` 的强绑定。

所以在三级域名的设计上，我们希望体现一些更细节的信息。

但没有必要像一二级域名一样，保持独立的语义。
故使用 `小写+下划线` 作为三级域名的格式标准。
包含更丰富的语义，但视觉上不像一二级域名一样强烈。

三级域名如果有更多细节需要体现，通过追加的方式进行拓展。

#### 1. Ops

#### 2. App

从实用性上来看，可以不使用三级域名，直接基于appId等。

如果要使用，参考携程应用类型定义。

+ web
+ service
+ job
+ serverless
+ ...

#### 3. Fxc

#### 3.1 中间件/工具

组件领域，可能有多种 中间件实现 / 工具。

所以在三级域名上，我们希望体现 `中间件/工具` 的概念。

#### 3.2 语种

组件领域，中间件领域，都可能有多种编程语言的实现，其SDK内部逻辑不可能完全一致。

所以在三级域名上，我们希望体现 `编程语言` 的概念。

#### 3.3 总结

对于Fxc而言，目前已有（中间件名称_编程语言）：

+ capa_java
+ ibu_java
+ ibu_node
+ ...

#### 4. Inf

对于Inf而言，目前已有（工具/产品名称）：

+ ecs
+ eks
+ ...

#### 参考设计1：携程框架监控

携程在监控命名上，强体现 `框架名称`。

### D、命名空间划分效果

#### 1. Ops

#### CICD

+ Ops.CICD.codepipeline
+ ...

#### 2. App

#### 业务应用

+ App.Java.service
+ App.Node.web
+ ...

#### 3. Fxc

中间件领域命名空间

#### RPC

+ Fxc.RPC.capa_java
+ Fxc.RPC.ibu_node

#### MQ

+ Fxc.MQ.ibu_java

#### Configuration

+ Fxc.Configuration.capa_java
+ Fxc.Configuration.ibu_java

#### DB

+ Fxc.DB.dal_java

#### Redis

+ Fxc.Redis.ibu_java

#### Metric

+ Fxc.Metric.capa_java
+ Fxc.Metric.ibu_node

#### Log

+ Fxc.Log.capa_java
+ Fxc.Log.ibu_node

#### 4. Inf

#### K8S

+ Inf.K8S.ecs
+ Inf.K8S.eks

## 二、监控指标 规范定义

使用 `小写+下划线` 作为 监控指标 名称的格式标准。

监控指标设计分为：Level0、Level1、Level2层次。

#### 1. level0

必需监控指标：

+ 请求量
+ 耗时
  + avg
  + 95
  + 99
  + max
+ 成功率
  + 成功量
  + 失败量

#### 2. level1

拓展监控指标

### A、Fxc

#### level0

**xx定义为 操作/业务 名称**

请求量：

+ xx_count

耗时：

+ xx_duration

成功率：

+ xx_success
+ xx_failure

## 三、Attributes 规范定义

使用 `小写+下划线` 作为attributes的格式标准。

### A、必需（建议）

+ app_id（广义的app_id）
+ env
+ ...

### B、操作字段

+ method 操作名称
+ stub 端标识（client/server、pub/sub）



