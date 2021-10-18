---
title: "概述"
linkTitle: "概述"
date: 2021-10-15
description: >
  服务调用构建块概述
---

## 介绍

## 服务调用

### 服务调用API定义 - protobuf

```protobuf
service Dapr {
  // Invokes a method on a remote Dapr app.
  rpc InvokeService(InvokeServiceRequest) returns (common.v1.InvokeResponse) {}
}  
```

```protobuf
// InvokeServiceRequest represents the request message for Service invocation.
message InvokeServiceRequest {
  // Required. Callee's app id.
  string id = 1;

  // Required. message which will be delivered to callee.
  common.v1.InvokeRequest message = 3;
}

// InvokeRequest is the message to invoke a method with the data.
// This message is used in InvokeService of Dapr gRPC Service and OnInvoke
// of AppCallback gRPC service.
message InvokeRequest {
  // Required. method is a method name which will be invoked by caller.
  string method = 1;

  // Required. Bytes value or Protobuf message which caller sent.
  // Dapr treats Any.value as bytes type if Any.type_url is unset.
  google.protobuf.Any data = 2;

  // The type of data content.
  //
  // This field is required if data delivers http request body
  // Otherwise, this is optional.
  string content_type = 3;

  // HTTP specific fields if request conveys http-compatible request.
  //
  // This field is required for http-compatible request. Otherwise,
  // this field is optional.
  HTTPExtension http_extension = 4;
}

// InvokeResponse is the response message inclduing data and its content type
// from app callback.
// This message is used in InvokeService of Dapr gRPC Service and OnInvoke
// of AppCallback gRPC service.
message InvokeResponse {
  // Required. The content body of InvokeService response.
  google.protobuf.Any data = 1;

  // Required. The type of data content.
  string content_type = 2;
}
```

### 服务调用API定义 - JVM

```java
    /**
     * Invoke a service method.
     *
     * @param invokeMethodRequest Request object.
     * @param type                The Type needed as return for the call.
     * @param <T>                 The Type of the return, use byte[] to skip serialization.
     * @return A Mono Plan of type T.
     */
    <T> Mono<T> invokeMethod(InvokeMethodRequest invokeMethodRequest, TypeRef<T> type);
```

```java
public class InvokeMethodRequest {

  private final String appId;

  private final String method;

  private Object body;

  private group.rxcloud.cloudruntimes.domain.core.invocation.HttpExtension httpExtension;

  private String contentType;

  private Map<String, String> metadata;
}
```

## 特征

### 命名空间范围

使用应用ID来调用相同命名空间内的服务：

`appId`: 同一命名空间内的服务唯一ID
