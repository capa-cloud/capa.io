---
title: "Dapr 设计思路"
linkTitle: "Dapr 设计思路"
date: 2022-05-22
description: >
    Dapr 设计思路.
---

> 参考文档：https://docs.dapr.io/


### A、pipeline设计

#### 中间件管道：链式中间件组件的自定义处理管道

Dapr 允许通过链接一系列中间件组件来定义自定义处理管道。 请求在路由到用户代码之前经过所有已定义的中间件组件，然后在返回到客户机之前，按相反顺序经过已定义的中间件，如下图中所示。

![](https://docs.dapr.io/images/middleware.png)
