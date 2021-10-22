---
title: "RPC服务调用"
linkTitle: "RPC服务调用"
date: 2021-10-15
description: >
  执行直接、安全、服务到服务的方法调用
---

## 介绍
通过服务调用，应用程序可以使用 [HTTP](https://www.w3.org/Protocols/) 这样的标准协议来发现并可靠地与其他应用程序通信。

## 调用逻辑
下图为 Capa 的 RPC 服务调用逻辑

![](https://raw.githubusercontent.com/reactivegroup/capa.io/master/content/images/zh/docs/Concepts/rpc_invoke.png)

* Service A 为服务调用方， Service B 为服务被调用方
* Service A 通过 Capa SDK 发起对 Service B 的服务调用
* Capa RPC API 是统一的 API 规范
* RPC Call 为 Service B 所支持的 RPC SDK ，例如 AWS App Mesh Api

## API 设计

Capa的 api 设计参照了社区的规范

[Dapr API](https://github.com/dapr/dapr/blob/master/dapr/proto/runtime/v1/dapr.proto)

[Layotto API](https://github.com/mosn/layotto/blob/main/spec/proto/runtime/v1/runtime.proto)

[Capa API](https://github.com/reactivegroup/cloud-runtimes-jvm/blob/master/cloud-runtimes-api/src/main/java/group/rxcloud/cloudruntimes/domain/core/InvocationRuntimes.java)


具体参数含义如下：
| 参数                   | 含义             |
|-----------------------|-----------------|
| appId                 | 同一命名空间内的服务唯一ID   |
| methodName            | 被调用服务的方法名        |
| request               | 要发送调用的服务请求        |
| httpExtension         | [HTTP请求方式](https://github.com/reactivegroup/cloud-runtimes-jvm/blob/master/cloud-runtimes-api/src/main/java/group/rxcloud/cloudruntimes/domain/core/invocation/HttpExtension.java)       |
| metadata              | 发送请求的元数据（GRPC）或者请求头（HTTP）        |
| clazz                 | 请求响应的类型        |
| type                  | [请求响应的类型](https://github.com/reactivegroup/cloud-runtimes-jvm/blob/master/cloud-runtimes-api/src/main/java/group/rxcloud/cloudruntimes/utils/TypeRef.java)       |
| invokeMethodRequest   | [请求对象](https://github.com/reactivegroup/cloud-runtimes-jvm/blob/master/cloud-runtimes-api/src/main/java/group/rxcloud/cloudruntimes/domain/core/invocation/InvokeMethodRequest.java)        |

