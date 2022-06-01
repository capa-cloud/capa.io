---
title: "Configuration服务调用"
linkTitle: "Configuration服务调用"
date: 2021-10-15
description: >
  执行应用级的配置管理
---

## 介绍

通过调用Capa SDK API的方式，管理应用级配置。底层通过SPI的方式注册适配各平台的实现类。

## 调用逻辑

下图为Capa的Configuration服务调用逻辑

![Configuration](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/docs/Concepts/Configuration/configuration.png)

- Service(appid:A):服务调用方，CloudX Configuration Service为服务被调用方，服务被调用方可以是任意云厂商的配置服务
- Service(appid:A)通过Capa SDK发起对Cloud Configuration Service的服务调用
- Capa Configuration API是统一的API规范
- Capa-CloudX Configuration Adaptor SDK为Capa的适配器实现类，通过spi的形式注册
- CloudX Configuration Service提供实际的配置服务

## API设计

Capa Configuration API的设计参考了社区的规范

[Layotto API](https://github.com/mosn/layotto/blob/main/spec/proto/runtime/v1/runtime.proto)

[Capa Configuration API](https://github.com/capa-cloud/cloud-runtimes-jvm/blob/master/cloud-runtimes-api/src/main/java/group/rxcloud/cloudruntimes/domain/core/ConfigurationRuntimes.java)

具体参数含义如下:

| 参数                                                         | 含义                               |
| ------------------------------------------------------------ | ---------------------------------- |
| storeName                                                    | 存储名称                           |
| appId                                                        | 同一命名空间内的服务唯一ID         |
| keys                                                         | 配置key列表                        |
| metadata                                                     | 发送配置请求的元信息               |
| group                                                        | 配置组(Optional)                   |
| label                                                        | 配置标签(Optional)                 |
| type                                                         | 请求响应对象中的泛型对应的具体类型 |
| [ConfigurationRequestItem](https://github.com/capa-cloud/cloud-runtimes-jvm/blob/master/cloud-runtimes-api/src/main/java/group/rxcloud/cloudruntimes/domain/core/configuration/ConfigurationRequestItem.java) | 请求对象                           |
| [ConfigurationItem](https://github.com/capa-cloud/cloud-runtimes-jvm/blob/master/cloud-runtimes-api/src/main/java/group/rxcloud/cloudruntimes/domain/core/configuration/ConfigurationItem.java) | 获取配置的响应对象                 |
| [SubConfigurationResp](https://github.com/capa-cloud/cloud-runtimes-jvm/blob/master/cloud-runtimes-api/src/main/java/group/rxcloud/cloudruntimes/domain/core/configuration/SubConfigurationResp.java) | 订阅配置的响应对象                 |

