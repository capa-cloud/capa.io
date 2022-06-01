---
title: "K8S Devops"
linkTitle: "K8S Devops"
date: 2022-05-24
description: >
    K8S Devops.
---

# K8S

## 一、常用操作命令

### A、调试POD

#### 1. kubectl exec

登录命令

* nodejs: sh
* java: /bin/bash
* nginx: /bin/bash

#### 2. busybox

    kubectl run -it --rm --restart=Never busybox --image=gcr.io/google-containers/busybox sh

#### 3. pod调试

+ https://kubernetes.io/zh/docs/tasks/debug-application-cluster/debug-running-pod/
+ https://kubernetes.io/zh/docs/tasks/debug-application-cluster/debug-application/#debugging-pods
---------

### B、动态伸缩

#### 1. 动态伸缩deployment副本数量

    kubectl scale deployment/nginx-proxy-deployment --replicas=2
