---
title: "AWS故障注入模拟器"
linkTitle: "AWS故障注入模拟器 实践经验" 
date: 2022-05-25
description: >
    AWS故障注入模拟器 实践经验.
---

# AWS Fault Injection Simulator (AWS FIS) 

## 一、重要概念

要运行实验，您首先要创建一个**实验模板**。实验模板是实验的蓝图。它包含实验的 **操作**、**目标**和**停止条件**。

![](https://docs.aws.amazon.com/fis/latest/userguide/images/experiment-components.png)

### A、AWS FIS 操作和支持的 AWS 服务

AWS FIS 支持针对以下 AWS 服务的目标资源的操作：

* Amazon 弹性计算云 (Amazon EC2)
* 亚马逊弹性容器服务 (Amazon ECS)
* Amazon 弹性 Kubernetes 服务 (Amazon EKS)
  * Node(EC2)维度
  * 不支持到POD维度
* Amazon 关系数据库服务 (Amazon RDS)

### B、基本原则和指导方针

在开始使用 AWS FIS 进行实验之前，请执行以下步骤：

1. **确定实验的目标部署**——首先确定目标部署。如果这是您的第一次实验，我们建议您从预生产或测试环境开始。
2. **审查应用程序架构**——您必须确保您已确定所有应用程序组件、依赖项和每个组件的恢复过程。首先查看应用程序架构。根据应用程序，请参阅AWS 架构完善的框架。
3. **定义稳态行为**——根据重要的技术和业务指标定义系统的稳态行为，例如延迟、CPU 负载、每分钟登录失败、重试次数或页面加载速度。
4. **形成一个假设**——形成一个假设，说明您期望系统行为在实验期间如何变化。假设定义遵循以下格式：如果fault injection action执行，则business or technical metric impact不应超过value. 身份验证服务的假设可能如下所示：如果网络延迟增加 10%，则登录失败的增加不到 1%。实验完成后，您将评估应用程序弹性是否符合您的业务和技术预期。

---

## 二、实验步骤

### A、创建角色权限

> 参考: https://docs.aws.amazon.com/fis/latest/userguide/getting-started-iam-service-role.html

### B、创建实验

### C、TODO