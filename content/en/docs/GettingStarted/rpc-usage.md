---
title: "Using RPC API"
linkTitle: "Using RPC API"
date: 2021-10-15
weight: 1
description: >
  Using RPC API for remote calls.
---

## Steps

[Example](https://github.com/capa-cloud/capa-java/blob/master/examples/src/main/java/group/rxcloud/capa/examples/rpc/DemoRpcClient.java)

1. Build RPC Client

```java
CapaRpcClient capaRpcClient = new CapaRpcClientBuilder().build();
```

2. Invoke request

```java
Mono<byte[]> responseMono = capaRpcClient.invokeMethod(SERVICE_APP_ID,
        "hello",
        "hello",
        HttpExtension.POST,
        null,
        TypeRef.BYTE_ARRAY);
```

3. Get invocation result

```java
byte[] response = responseMono.block();
```

## Explanation
1. The RPC capabilities provided by CapaRpcClient require concrete implementation, as shown in the example [DemoCapaHttp](https://github.com/capa-cloud/capa-java/blob/master/examples/src/main/java/group/rxcloud/capa/examples/rpc/DemoRpcClient.java).
2. After implementing DemoCapaHttp, it needs to be configured in [capa-component-rpc.properties](https://github.com/capa-cloud/capa-java/blob/master/sdk-spi-demo/src/main/resources/capa-component-rpc.properties), and loaded through the SPI mechanism.
