---
title: "Netty Landscape"
linkTitle: "Netty Landscape"
date: 2022-05-20
description: >
    Netty Landscape.
---

## 一、Netty整体设计概述

### A、Pipeline链设计

### B、内外状态映射设计

### C、Reactor线程模型

### D、线程池分离

Boss Worker

## 二、设计思想

### A、可拓展架构

### B、命令模式

将待执行操作包装成命令对象，投递给eventloop线程执行
