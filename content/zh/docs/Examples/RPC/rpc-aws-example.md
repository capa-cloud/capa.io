---

title: "RPC AWS-App Mesh示例"
linkTitle: "RPC AWS-App Mesh示例"
date: 2021-10-15
description: >
  使用RPC API 在 AWS 的 App Mesh 中进行远程调用.
---
## 目前支持的API

```java
  @Override
    <T> Mono<T> invokeMethod(String appId, String methodName, Object data, HttpExtension httpExtension, Map<String, String> metadata, TypeRef<T> type);

    @Override
    <T> Mono<T> invokeMethod(String appId, String methodName, Object request, HttpExtension httpExtension, Map<String, String> metadata, Class<T> clazz);

    @Override
    <T> Mono<T> invokeMethod(String appId, String methodName, Object request, HttpExtension httpExtension, TypeRef<T> type);

    @Override
    <T> Mono<T> invokeMethod(String appId, String methodName, Object request, HttpExtension httpExtension, Class<T> clazz);

    @Override
    <T> Mono<T> invokeMethod(String appId, String methodName, HttpExtension httpExtension, Map<String, String> metadata, TypeRef<T> type);

    @Override
    <T> Mono<T> invokeMethod(String appId, String methodName, HttpExtension httpExtension, Map<String, String> metadata, Class<T> clazz);

    @Override
    Mono<Void> invokeMethod(String appId, String methodName, Object request, HttpExtension httpExtension, Map<String, String> metadata);

    @Override
    Mono<Void> invokeMethod(String appId, String methodName, Object request, HttpExtension httpExtension);

    @Override
    Mono<Void> invokeMethod(String appId, String methodName, HttpExtension httpExtension, Map<String, String> metadata);

    @Override
    Mono<byte[]> invokeMethod(String appId, String methodName, byte[] request, HttpExtension httpExtension, Map<String, String> metadata);

    @Override
    <T> Mono<T> invokeMethod(InvokeMethodRequest invokeMethodRequest, TypeRef<T> type);
```

## 调用逻辑
下图为 Capa 的 RPC 在携程的 App Mesh 服务调用逻辑

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/docs/Example/RPC/rpc_invoke_in_aws.png)

* Service A 为服务调用方， Service B 为服务被调用方
* Service A 通过 Capa SDK 发起对 Service B 的服务调用
* Capa RPC API 是统一的 API 规范
* 通过 SPI 机制可以找到 Capa RPC API 的在 AWS 中的具体 RPC 实现 Capa-Aws RPC Impl
* 获取 Service B 的返回数据，并返回给服务调用方 Service A


## 实现步骤
1. 实现 [RpcServiceOptions](https://github.com/capa-cloud/capa-java/blob/master/sdk-spi/src/main/java/group/rxcloud/capa/spi/config/RpcServiceOptions.java) （实际 RPC 调用需要的参数） 和 [CtripSpiOptionsLoader](https://github.com/capa-cloud/capa-java/blob/master/sdk-spi/src/main/java/group/rxcloud/capa/spi/config/CapaSpiOptionsLoader.java) （加载 RpcServiceOptions 的实现类） 接口。

   例如 AwsRpcServiceOptions 和 AwsSpiOptionsLoader

2. 继承 [CapaSerializeHttpSpi](https://github.com/capa-cloud/capa-java/blob/master/sdk-spi/src/main/java/group/rxcloud/capa/spi/http/CapaSerializeHttpSpi.java) ， 实现在携程 Service Mesh 的 RPC 调用。

   例如 AwsCapaHttp

3. 构建 capa-component-rpc.properties 文件，添加 group.rxcloud.capa.component.http.CapaHttp 和 group.rxcloud.capa.spi.config.CapaSpiOptionsLoader 对应的类的路径，以支持 SPI 方式加载对应的类。

   例如:
```
 group.rxcloud.capa.component.http.CapaHttp=group.rxcloud.capa.spi.group.rxcloud.http.AwsCapaHttp
 group.rxcloud.capa.spi.config.CapaSpiOptionsLoader=group.rxcloud.capa.spi.group.rxcloud.config.AwsSpiOptionsLoader   
```