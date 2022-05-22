---
title: "AppMesh Landscape"
linkTitle: "AppMesh Landscape"
date: 2022-05-22
description: >
    AppMesh Landscape.
---

## 二、AppMesh 运维

### 故障排除

跟踪控制器日志：

```shell
export APPMESH_SYSTEM_NAMESPACE=appmesh-system
kubectl logs -n "${APPMESH_SYSTEM_NAMESPACE}" -f --since 10s \
$(kubectl get pods -n "${APPMESH_SYSTEM_NAMESPACE}" -o name | grep controller)
```

尾特使日志：

```shell
export APPLICATION_NAMESPACE=<your namespace>
export APPLICATION=<your pod or deployment> # i.e. deploy/my-app
kubectl logs -n "${APPLICATION_NAMESPACE} "${APPLICATION_POD}" envoy -f --since 10s
```

查看特使配置：

```shell
export APPLICATION_NAMESPACE=<your namespace>
export APPLICATION=<your pod>
kubectl port-forward -n "${APPLICATION_NAMESPACE}" \
$(kubectl get pod -n "${APPLICATION_NAMESPACE}" | grep "${APPLICATION}" |awk '{print $1}') \
9901
```

然后导航到localhost:9901/索引或localhost:9901/config_dump特使配置。