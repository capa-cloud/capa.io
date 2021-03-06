---
title: "SDK-Java管理实践"
linkTitle: "SDK-Java管理与实践经验"
date: 2022-05-15
weight: 2
description: >
  SDK Java管理与实践经验.
---

Java SDK主要使用Maven进行管理，故以下内容主要基于Maven进行实践。

# 动态加载不同的SDK实现包

根据Capa设计，接入层面向API层的SDK进行编程，然后在运行时动态调用不同的实现层SDK。

## 实现包如何加载到运行时空间？

### 思路一：打包时包含了所有实现层SDK，运行时仅加载对应的实现包。

问题：

若包含所有的实现层SDK，则面对依赖冲突的可能性大增。

有的实现层SDK在初始化时执行了操作，若将A云的实现层jar打包到B云的包中，可能有未知的问题出现。

综上，不使用该方案。

### 思路二：将不同云的实现，打包成不同的包/镜像。

基于Maven提供的profile机制，可以将不同云的实现打包到不同的包中，最终生成不同的镜像。

可以避免不同云SDK之间的冲突，以及可以针对性的添加个性化的配置。

具体实现主要有以下思路：

#### 1. 使用maven插件自动化该步骤

但动态修改 pom 文件本身并不推荐。

maven 官方建议直接指定需要的依赖：

+ 可以更方便的解决依赖冲突的问题
+ 为项目提供了更容易阅读的文档，只需要阅读项目中的 pom 文件或者执行 mvn dependency: tree 即可了解更多信息

综上，不使用该方案。

#### 2. 手动指定profile

面对的问题：

+ 接入方需要编写额外的pom内容。
+ 需要生成不同的包/镜像，需要改动原有的CI流程。
+ profile在查看依赖冲突等问题时，IDE支持的不如直接引用的方式。

但以上问题，提高了复杂度，但减少了面对未知问题的可能性，更有利于生产的稳定性。

**所以使用该种方式。**

---

## 实现包加载到运行时空间实践

### 

------

# 依赖冲突管理

本文介绍在SDK-Java中的依赖管理实践经验。

## Maven依赖管理

### 依赖版本传递

因为有了依赖传递，我们就不需要考虑依赖的依赖如何管理了，maven都会把他们加载进来，但是这么多依赖都进来到底用哪个，会不会冲突呢？

maven在解析pom时，会使用依赖调解，具体原则有：

1) 第一原则 路径最近者优先


    A -> B -> X(1.0)
    A -> C -> D -> X(2.0)

X（1.0） 路径长度为2，X（2.0）路径长度3，所以 X（1.0） 会被真正的使用

2) 第二原则 第一声明者优先


    A -> B -> X(1.0)
    A -> C -> X(2.0)

这次X（1.0） X（2.0）路径长度相同了，因为B比C声明的早，所以取B依赖的X（1.0）版本

### scope的分类

#### compile

**默认就是compile**，什么都不配置也就是意味着compile。compile表示被依赖项目需要参与当前项目的编译，当然后续的测试，运行周期也参与其中，是一个比较强的依赖。打包的时候通常需要包含进去。

#### test

scope为test表示依赖项目仅仅参与测试相关的工作，包括测试代码的编译，执行。比较典型的如junit。

#### runtime

runntime表示被依赖项目无需参与项目的编译，不过后期的测试和运行周期需要其参与。与compile相比，跳过编译而已，说实话在终端的项目（非开源，企业内部系统）中，和compile区别不是很大。比较常见的如JSR×××的实现，对应的API jar是compile的，具体实现是runtime的，compile只需要知道接口就足够了。oracle jdbc驱动架包就是一个很好的例子，一般scope为runntime。**另外runntime的依赖通常和optional搭配使用，optional为true。我可以用A实现，也可以用B实现。**

#### provided

provided意味着打包的时候可以不用包进去，别的设施(Web Container)会提供。事实上该依赖理论上可以参与编译，测试，运行等周期。**相当于compile，但是在打包阶段做了exclude的动作。**

scope使用provided，表示用于当前项目编译使用，不向下传递。

#### system

从参与度来说，也provided相同，不过被依赖项不会从maven仓库抓，而是从本地文件系统拿，一定需要配合systemPath属性使用。

#### 总结

+ compile： 默认配置适用于所有阶段，会随着项目一起发布。
+ runtime： 只在运行时使用，如JDBC驱动
+ provided： 期望JDK、容器或使用者会提供这个依赖。如 servlet.jar需要tomcat来提供
+ test：只在测试时使用，用于编译和运行测试代码。不会随 项目发布, 比如junit
+ import: 用来导入依赖, 比如tcdev

### scope的依赖传递

A–>B–>C。当前项目为A，A依赖于B，B依赖于C。知道B在A项目中的scope，那么怎么知道C在A中的scope呢？答案是：
* 当C是test或者provided时，C直接被丢弃，A不依赖C；
* 否则A依赖C，C的scope继承于B的scope。