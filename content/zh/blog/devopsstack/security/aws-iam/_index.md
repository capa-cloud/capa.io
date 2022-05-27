---
title: "AWS Security - IAM"
linkTitle: "AWS Security - IAM使用经验"
date: 2022-05-25
description: >
    AWS Security - IAM使用经验.
---

# AWS Security - IAM使用经验

## 一、IAM相关概念

### A、用户

用户和角色类似，也是一组权限的集合，但是用户应该更多的面向 人/客户端？

+ 人 是某个用户，通过密钥进行认证，然后具有对应的权限
+ 机器 是某个用户，通过secretkey进行认证，然后具有对应的权限

### B、角色

角色可以理解为，一组权限的集合代表，当需要权限进行操作时，往往是基于 角色 这个实体进行赋予。

+ 对某个应用赋予某个角色
+ 对某项操作赋予某个角色

### C、策略

就是一组权限，或者单个权限。可以赋给 用户、角色。

---

## 二、权限认证实践

### A、开放的访问环境（sandbox）

由于本身网络环境是开放的，所以仅需进行IAM认证即可连接到其中。

以下为一种示例流程：

#### 1. 设置 用户 访问密钥

1. 添加到系统文件

```
[aws]
aws_access_key_id=
aws_secret_access_key=
aws_session_token=
```

2. 会话级别参数

```
export AWS_ACCESS_KEY_ID=
export AWS_SECRET_ACCESS_KEY=
export AWS_SESSION_TOKEN=
```

#### 2. 访问目标环境

这时，作为客户端，需要使用的是 用户 这个概念，然后具有 用户 上面对应的权限。

### B、隔离的访问环境

#### 1. 通过会话管理器进行访问

这时，作为客户端，需要使用的是 用户 这个概念，然后具有 用户 上面对应的权限。

#### 2. 通过VPN进行访问

连接VPN后，操作步骤同A中所示。
