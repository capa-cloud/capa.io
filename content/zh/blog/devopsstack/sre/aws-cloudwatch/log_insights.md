---
title: "CloudWatch - Log Insights"
linkTitle: "CloudWatch Log Insights 使用经验"
date: 2022-05-25
description: >
    CloudWatch Log Insights 使用经验.
---

## 一、网关搜索

### A、查询接口以及响应码

```
fields @timestamp, @message
| filter @message like /(?i)(queryData)/
| filter @message like /(?i)("500")/
| sort @timestamp desc
| limit 100
```

-------------

## 二、应用搜索

### A、TraceId检索

```
fields @timestamp, @message
| filter log._trace_id = '12345'
| sort @timestamp desc
| limit 20
```

### B、应用检索

```
fields @timestamp, @message
| filter kubernetes.labels.appid = '12345'
| sort @timestamp desc
| limit 20
```

### C、POD检索

```
fields @timestamp, @message
| filter kubernetes.pod_name = '12345-fb5f75b84-k5kgv'
| sort @timestamp desc
| limit 20
```

### D、日志级别检索

```
fields @timestamp, @message
| filter log._log_level = 'INFO'
| sort @timestamp desc
| limit 20
```

### E、异常模糊匹配

```
fields @timestamp, @message
| filter @message like 'HttpMediaTypeNotSupportedException'
| sort @timestamp desc
| limit 20
```
