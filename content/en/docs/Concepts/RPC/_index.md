---
title: "RPC Service Invocation"
linkTitle: "RPC Service Invocation"
date: 2021-10-15
description: >
  Perform direct, secure, service-to-service method calls.
---

## Introduction

## Invocation Logic

The following diagram shows the RPC service invocation logic of Capa:

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/docs/Concepts/rpc_invoke.png)

- Service A is the service invoker, Service B is the service being invoked
- Service A initiates a service call to Service B through the Capa SDK
- Capa RPC API is a unified API specification
- The specific RPC implementation RPC Impl of the Capa RPC API can be found through the SPI mechanism
- Obtain the return data from Service B and return it to the service invoker Service A

## API Design

Capa's API design follows community standards:

- [Dapr API](https://github.com/dapr/dapr/blob/master/dapr/proto/runtime/v1/dapr.proto)
- [Layotto API](https://github.com/mosn/layotto/blob/main/spec/proto/runtime/v1/runtime.proto)
- [Capa API](https://github.com/capa-cloud/cloud-runtimes-jvm/blob/master/cloud-runtimes-api/src/main/java/group/rxcloud/cloudruntimes/domain/core/InvocationRuntimes.java)

The meanings of specific parameters are as follows:

| Parameter | Meaning |
|-----------|---------|
| appId | Unique service ID within the same namespace |
| methodName | Method name of the service being invoked |
| request | Service request to be sent for invocation |
| httpExtension | [HTTP request method](https://github.com/capa-cloud/cloud-runtimes-jvm/blob/master/cloud-runtimes-api/src/main/java/group/rxcloud/cloudruntimes/domain/core/invocation/HttpExtension.java) |
| metadata | Metadata for sending requests (GRPC) or headers (HTTP) |
| clazz | Type of request response |
| type | [Type of request response](https://github.com/capa-cloud/cloud-runtimes-jvm/blob/master/cloud-runtimes-api/src/main/java/group/rxcloud/cloudruntimes/utils/TypeRef.java) |
| invokeMethodRequest | [Request object](https://github.com/capa-cloud/cloud-runtimes-jvm/blob/master/cloud-runtimes-api/src/main/java/group/rxcloud/cloudruntimes/domain/core/invocation/InvokeMethodRequest.java) |
