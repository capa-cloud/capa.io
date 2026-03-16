---
title: "Overview"
linkTitle: "Overview"
weight: 1
description: >
  Capa (Cloud Application API): To be the high-level API layer for all application runtimes.
---

{{% pageinfo %}}
  Capa enables your Java applications to run across multiple clouds and hybrid environments with minimal modifications.
{{% /pageinfo %}}

# Capa (Cloud Application API): To be the high-level API layer for all application runtimes.

**Write once, run anywhere.**

With the Capa framework, your Java applications can gain the ability to run across clouds and in hybrid cloud environments with minimal changes.

## Motivation

### Mecha Architecture

The Capa project is based on the design philosophy of the Mecha architecture, providing Multi-Runtime standard APIs through a **rich SDK model**.

You can simply understand the Capa project as an SDK implementation of Sidecar-mode projects like [Dapr](https://github.com/dapr/dapr) / [Layotto](https://github.com/mosn/layotto).

To understand the design thinking behind the Mecha architecture, please read the following articles:

- [The Importance of API Standardization for Dapr](https://www.infoq.cn/article/wjkNGoGaaHyKs7xIyTSB)
- [Layotto: A New Chapter in Service Mesh + Application Runtime](http://mosn.io/layotto/#/zh/blog/mosn-subproject-layotto-opening-a-new-chapter-in-service-grid-application-runtime/index)

### Sidecar or SDK

Multi-Runtime based on the Mecha architecture concept, providing standard API functionality through Sidecar, seems to be the most reasonable choice.

So why not just use projects like Dapr/Layotto directly, but choose to develop the **rich SDK model** Capa project?

**Summary:** _Sidecar architectures represented by Dapr are the future, but many existing enterprises and systems find it difficult to upgrade to a Sidecar architecture in one step. Rich SDK architectures will exist for a long time._

**Extension:** _Faced with the huge Java system ecosystem, the Capa project will use the rich SDK model to support Java systems in transitioning to the Mecha architecture. After projects like Dapr mature, they can also seamlessly transition to the Sidecar architecture._

For detailed discussions on this issue, please refer to:

- [SDK Model for Dapr API](https://github.com/dapr/dapr/issues/3261)
- [Future Plans for Dapr API](https://github.com/dapr/dapr/issues/2817)
- [Java SDK Design Discussion](https://github.com/mosn/layotto/issues/188)

## Features

### API Definitions

Capa API design follows community standards. Please refer to API definitions in open source projects like Dapr / Layotto.

API definitions are placed in the following independent repositories, decoupled from the Capa project, with the hope of becoming community standard API definitions:

- Java: [cloud-runtimes-jvm](https://github.com/capa-cloud/cloud-runtimes-jvm)
- Python (alpha): [cloud-runtimes-python](https://github.com/capa-cloud/cloud-runtimes-python)
- Golang (alpha): [cloud-runtimes-golang](https://github.com/capa-cloud/cloud-runtimes-golang)

#### Why not use Dapr API directly?

Since the current Dapr API is tightly bound to the Dapr project, but we hope that this set of APIs can become a standard for the entire community, Capa places the API definitions in independent repositories and keeps them synchronized with upstream community standards at all times.

We hope that Dapr will be able to deploy its APIs independently in the future, decoupled from the Dapr project, and become a standard for the entire community.

For discussions on this topic, please see:

- [Future plans for dapr api](https://github.com/dapr/dapr/issues/2817)

### Capa Features

Capa (Java SDK) is an SDK solution for implementing the Mecha architecture for Java applications. It currently supports features in the following domains:

- Service Invocation (RPC service calls)
- Configuration Center (Configuration dynamic configuration)
- Publish/Subscribe (Pub/Sub messaging)
- State Management (State management)
- Application Log/Metrics/Traces (Telemetry observability)
- Database (SQL relational database) - alpha
- Schedule (Scheduled tasks) - alpha
- ...

## Design

### Capa Design

Design philosophy: **Standard API + Pluggable and replaceable SDK components** model

In different distributed middleware domains, Capa provides unified standard programming APIs that are independent of specific middleware APIs. Therefore, applications using Capa for programming do not need to depend on any specific middleware API, only Capa's standard programming APIs.

When deployed to different target environments, Capa will load different implementation classes of the standard API into the application. When calling the unified programming API, the underlying runtime will adapt to different specific middleware SDK implementations.

Middleware teams need to develop implementation classes of the standard API in the target environment for different target environments; while application code can have a "write once, run anywhere" development experience.

### SDK Design

Capa module division mainly consists of the following parts:

- sdk
- sdk-component
- sdk-spi
- sdk-spi-demo/...

![capa-design](./docs/capa-design/capa-layer.PNG)

When programming applications, you only need to depend on the sdk and use the unified programming APIs defined in the SDK module.

Before running, the specific SPI implementation package will be introduced as the specific implementation of the unified programming API.

## Usage

### Getting Started

#### Importing Capa's Java SDK

For a Maven project, add the following to your pom.xml file:

```xml
<project>
    ...
    <dependencies>
        ...
        <!-- Capa's core SDK with all features. -->
        <dependency>
            <groupId>group.rxcloud</groupId>
            <artifactId>capa-sdk</artifactId>
            <version>1.0.7.RELEASE</version>
        </dependency>
        ...
    </dependencies>
    ...
</project>
```

Sample implementation library:

```xml
<project>
    ...
    <dependencies>
        ...
        <!-- Capa's core SDK with all features. -->
        <dependency>
            <groupId>group.rxcloud</groupId>
            <artifactId>capa-sdk-spi-demo</artifactId>
            <version>1.0.7.RELEASE</version>
        </dependency>
        ...
    </dependencies>
    ...
</project>
```

### Running the examples

Try the following examples to learn more about Capa's Java SDK:

- [capa-demo](https://github.com/capa-cloud/capa/tree/master/sdk-spi-demo)
- [capa-aws](https://github.com/capa-cloud/capa-aws)
- [capa-alibaba](https://github.com/capa-cloud/capa-alibaba)

### Low-cost Migration

If you want to use the native Capa API, your legacy system will face a large amount of refactoring work.

To make the migration low-cost, we can reuse the middleware APIs currently in use.

By developing an adapter layer project (providing the same annotation/interface calling method), the original middleware API implementation is changed to the Capa API.

In this way, the application only needs to change a small amount of code (such as changing the path name of the annotation/interface) to migrate to the Capa architecture.

For discussions on this issue, please see:

- [Java SDK Design Research: Can We Reuse Existing Industry De Facto Standards?](https://github.com/mosn/layotto/issues/206)
- [Capa API Adapted to Spring Annotation](https://github.com/capa-cloud/sigs/issues/16)
- [Legacy Middleware SDK Seamless Migration to Capa](https://github.com/capa-cloud/sigs/issues/18)

## Development

#### Reactor API

Considering asynchronous calling modes and the use of non-blocking IO, we natively provide the Reactor programming model. You can also use the `block()` method to use synchronous calling functionality.

The Java SDK for Capa is built using [Project Reactor](https://projectreactor.io/). It provides an asynchronous API for Java. When consuming a result synchronously, as in the examples referenced above, the `block()` method is used.

The code below does not make any API call; it simply returns the [Mono](https://projectreactor.io/docs/core/release/api/reactor/core/publisher/Mono.html) publisher object. Nothing happens until the application subscribes or blocks on the result:

```java
Mono<String> result = capaRpcClient.invokeMethod(SERVICE_APP_ID, "say", "hello", HttpExtension.POST, null, TypeRef.STRING);
```

To start execution and receive the result object synchronously, use `block()`. The code below shows how to execute the call and consume an empty response:

```java
Mono<String> result = capaRpcClient.invokeMethod(SERVICE_APP_ID, "say", "hello", HttpExtension.POST, null, TypeRef.STRING);
String response = result.block();
```

#### Exception handling

Most exceptions thrown from the SDK are instances of `CapaException`. `CapaException` extends from `RuntimeException`, making it compatible with Project Reactor.

## Future Development

### Thoughts on Multi-Runtime

- [Multi-Runtime 2022: Problems to be Solved](https://zhuanlan.zhihu.com/p/435012312)
