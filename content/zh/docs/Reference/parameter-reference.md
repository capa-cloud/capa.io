---
title: "版本与兼容性"
linkTitle: "版本与兼容性"
weight: 1
description: >
  Capa API、SDK、运行时与适配器的发布版本和兼容边界。
---

{{% pageinfo %}}
Capa API 契约、SDK、运行时和云适配器分别发布。集成时应明确匹配版本，不要假设所有仓库共享同一个版本号。
{{% /pageinfo %}}

## 当前文档版本

| 组件 | 版本或状态 | 用途 |
| --- | --- | --- |
| [cloud-runtimes-jvm](https://github.com/capa-cloud/cloud-runtimes-jvm) | `1.19.RELEASE` | JVM API 契约和部分运行时 adapter |
| [capa-java](https://github.com/capa-cloud/capa-java) | `1.11.13.2.RELEASE` | Java 富 SDK |
| [capa-java-aws](https://github.com/capa-cloud/capa-java-aws) | `1.11.13.5.RELEASE` | Capa Java 的 AWS SPI 模块 |
| [cloud-runtimes-golang](https://github.com/capa-cloud/cloud-runtimes-golang) | 接口规范 | Go API 契约，不包含运行时实现 |
| [cloud-runtimes-python](https://github.com/capa-cloud/cloud-runtimes-python) | Alpha 源码 API | 修正后的制品发布前使用源码安装 |
| [capa](https://github.com/capa-cloud/capa) | 实验性 | 独立演进的 Go Sidecar/运行时 |

## 兼容规则

1. SDK 与 adapter 使用 adapter 仓库明确记录的版本组合。
2. 确认所选 adapter 已实现应用实际调用的每个操作。
3. API 存在只表示契约已定义，不代表运行时已经支持。
4. 上生产前针对目标中间件或云服务运行集成测试。
5. 跨 minor 或 `RELEASE` 后缀版本升级前检查发布说明和源码差异。

Java API 类型可从 [`cloud-runtimes-api` 源码](https://github.com/capa-cloud/cloud-runtimes-jvm/tree/master/cloud-runtimes-api/src/main/java/group/rxcloud/cloudruntimes)开始查阅；Java SDK 用法请参考 [capa-java examples](https://github.com/capa-cloud/capa-java/tree/master/examples)。
