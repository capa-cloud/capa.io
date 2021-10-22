---
title: "使用RPC API"
linkTitle: "使用RPC API"
date: 2021-10-15 
weight: 1 
description: >
  使用RPC API进行远程调用.
---

## 步骤

[示例](https://github.com/reactivegroup/capa/blob/master/examples/src/main/java/group/rxcloud/capa/examples/rpc/DemoRpcClient.java)

1. 构建 RPC Client

```java
CapaRpcClient capaRpcClient = new CapaRpcClientBuilder().build();
```

2. 调用请求

```java
  Mono<byte[]> responseMono = capaRpcClient.invokeMethod(SERVICE_APP_ID,
        "hello",
        "hello",
        HttpExtension.POST,
        null,
        TypeRef.BYTE_ARRAY);
```

3. 获取调用结果

```java
byte[] response = responseMono.block();
```

## 解释
1. CapaRpcClient 提供的 RPC 能力，需要具体实现，如示例 [DemoCapaHttp](https://github.com/Huijing-Xu/capa/blob/master/sdk-spi-demo/src/main/java/group/rxcloud/capa/spi/demo/http/DemoCapaHttp.java) 。
2. 实现后的DemoCapaHttp，需要在 [capa-component.properties](https://github.com/Huijing-Xu/capa/blob/master/sdk-spi-demo/src/main/java/group/rxcloud/capa/spi/demo/http/DemoCapaHttp.java) 中进行配置，通过SPI机制实现加载。


