---
title: "AWS SRE - CloudWatch"
linkTitle: "AWS SRE - CloudWatch使用经验"
date: 2022-05-25
description: >
    AWS SRE - CloudWatch使用经验.
---

# AWS SRE - CloudWatch使用经验

日志、指标、告警等功能

## 一、日志查询

### A、全局日志搜索：Logs Insights

使用 CloudWatch 查询语法进行 日志组 维度的全局日志搜索。

#### 常用查询语法

```
fields @timestamp, @message
| sort @timestamp desc
| limit 20
```

#### "或"语法：|

使用 '|' 来作为 "或" 语义的分隔符，使用多个查询条件

#### "注释"

使用 '#' 在开头，作为该行查询语句的注释，可使用快捷键 "ctrl + /"

### B、日志组

#### AWS原生日志组


