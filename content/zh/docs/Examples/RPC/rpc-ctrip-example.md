---

title: "RPC Ctrip-Service Mesh示例"
linkTitle: "RPC Ctrip-Service Mesh示例"
date: 2021-10-15
description: >
  使用RPC API 在携程的 Service Mesh 中进行远程调用.
---

## 调用逻辑
下图为 Capa 的 RPC 在携程的 Service Mesh 服务调用逻辑

![](https://raw.githubusercontent.com/reactivegroup/capa.io/master/content/images/zh/docs/Example/RPC/rpc_invoke_in_ctrip.png)

* Service A 为服务调用方， Service B 为服务被调用方
* Service A 通过 Capa SDK 发起对 Service B 的服务调用
* Capa RPC API 是统一的 API 规范
* Ctrip RPC Call 是 携程 Service Mesh 支持的 RPC 调用

## 实现步骤
1. 实现 [RpcServiceOptions](https://github.com/reactivegroup/capa/blob/master/sdk-spi/src/main/java/group/rxcloud/capa/spi/config/RpcServiceOptions.java) （实际 RPC 调用需要的参数） 和 [CtripSpiOptionsLoader](https://github.com/reactivegroup/capa/blob/master/sdk-spi/src/main/java/group/rxcloud/capa/spi/config/CapaSpiOptionsLoader.java) （加载 RpcServiceOptions 的实现类） 接口。

     例如 CtripRpcServiceOptions 和 CtripSpiOptionsLoader  

2. 继承 [CapaSerializeHttpSpi](https://github.com/reactivegroup/capa/blob/master/sdk-spi/src/main/java/group/rxcloud/capa/spi/http/CapaSerializeHttpSpi.java) ， 实现在携程 Service Mesh 的 RPC 调用。

     例如 CtripCapaHttp

3. 构建 capa-component.properties 文件，添加 group.rxcloud.capa.component.http.CapaHttp 和 group.rxcloud.capa.spi.config.CapaSpiOptionsLoader 对应的类的路径，以支持 SPI 方式加载对应的类。

   例如:
```
 group.rxcloud.capa.component.http.CapaHttp=com.ctrip.ibu.capa.spi.ctrip.http.CtripCapaHttp
 group.rxcloud.capa.spi.config.CapaSpiOptionsLoader=com.ctrip.ibu.capa.spi.ctrip.config.CtripSpiOptionsLoader   
```
       
