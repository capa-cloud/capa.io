---
title: "SDK管理实践"
linkTitle: "SDK管理与实践经验"
date: 2022-05-15
description: >
  SDK管理与实践经验.
---

Capa 支持应用内 SDK；实验性 Sidecar 运行时由独立仓库演进。使用 SDK 时需要重点处理：

+ 依赖版本冲突管理
+ SDK升级推动
+ 不同云适配实现的选择与验证

本章介绍 Capa 在 SDK 实践中遇到的问题和对应的工程取舍。具体可用能力仍以
目标 SDK 与适配器仓库的 README 为准。
