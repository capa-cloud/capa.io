---
title: "Nginx Devops"
linkTitle: "Nginx Devops"
date: 2022-05-26
description: >
    Nginx Devops.
---

## 一、Nginx Devops

### A、499

#### 作为AWS网关, 同ELB配合使用

当ELB的IP变化时，DNS刷新不及时，导致499超时问题。

[带有 AWS ELB 的 Nginx 代理：间歇性网关超时（499 或 502）的关键处理](https://blog.microideation.com/2020/04/06/nginx-proxy-with-aws-elb-critical-handling-for-intermittent-gateway-timeout-499-or-502/)

---

### B、502

往往是Nginx服务有问题