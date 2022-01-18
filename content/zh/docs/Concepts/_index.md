---
title: "设计文档"
linkTitle: "设计文档"
weight: 4
description: >
  Capa设计概述
---
{{% pageinfo %}}
{{% /pageinfo %}}

## 背景

在跨云、混合云的场景下，我们希望应用程序可以使用**一套代码**，部署到不同的云环境上。在运行时，采用对应云环境提供的**云原生实现方案**。

## 技术思路

![api design](https://raw.githubusercontent.com/reactivegroup/capa.io/master/content/images/zh/docs/Concepts/api_design.png)

定义**与具体中间件无关的API层（无强绑定）**，使应用程序在编程时仅依赖该API层。
如此一来，应用本身便与具体中间件解耦；然后在部署到不同云环境时，将API的不同云的实现层加载到应用进程中。





