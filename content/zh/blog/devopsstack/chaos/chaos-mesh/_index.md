---
title: "Chaos Mesh"
linkTitle: "Chaos Mesh云原生混沌工程平台" 
date: 2022-05-25
description: >
    开源的云原生混沌工程平台 实践经验.
---

# Chaos Mesh

## 一、安装到K8S集群

### Helm

### A、有哪些POD

```
chaos-testing       chaos-controller-manager-7788488bbd-dq8k8          1/1     Running            0                45h
chaos-testing       chaos-controller-manager-7788488bbd-dvqdj          1/1     Running            1 (34h ago)      45h
chaos-testing       chaos-controller-manager-7788488bbd-ffwss          1/1     Running            0                45h
chaos-testing       chaos-daemon-4cqnm                                 1/1     Running            0                44h
chaos-testing       chaos-daemon-djrth                                 1/1     Running            0                44h
chaos-testing       chaos-daemon-hpc59                                 0/1     Pending            0                44h
chaos-testing       chaos-daemon-jppg9                                 1/1     Running            0                44h
chaos-testing       chaos-daemon-kgdwb                                 1/1     Running            0                44h
chaos-testing       chaos-daemon-mqh5k                                 1/1     Running            0                44h
chaos-testing       chaos-daemon-qw5cn                                 1/1     Running            0                44h
chaos-testing       chaos-daemon-v8ptz                                 1/1     Running            0                44h
chaos-testing       chaos-daemon-xzkm4                                 1/1     Running            0                44h
chaos-testing       chaos-daemon-zlt67                                 1/1     Running            0                44h
chaos-testing       chaos-dashboard-84ffc4bb9-4nxf9                    1/1     Running            0                45h
```

chaos-daemon每个node一个，以daemonset方式运行。

### B、范围控制：配置允许混沌实验的命名空间

控制混沌实验生效的范围

Chaos Mesh 提供了以下两种方式用于控制混沌实验生效的范围：

* 要配置混沌实验只在指定的命名空间内生效，你需要开启 FilterNamespace 功能（默认关闭），此功能将在全局范围内生效。开启此功能后，你可以为允许混沌实验的命名空间添加注解，其他未添加注解的命名空间则会受到保护不会被注入故障。
* 要为单个混沌实验指定实验生效的范围，请参考定义实验范围

#### 开启 FilterNamespace 功能

    helm upgrade chaos-mesh chaos-mesh/chaos-mesh -n chaos-testing --set controllerManager.enableFilterNamespace=true

在开启 FilterNamespace 功能后，Chaos Mesh 将只会向包含有 chaos-mesh.org/inject=enabled 注解的命名空间注入故障。因此，在进行混沌实验之前，你需要为允许混沌实验的命名空间添加该注解，其他命名空间则受到保护不会被注入故障。

#### 添加注解

见 [为允许混沌实验的命名空间添加注解](https://chaos-mesh.org/zh/docs/configure-enabled-namespace/)

---

### Q&A

### A、kubectl和k8s集群版本差距过大

A：降级kubectl到和k8s server匹配的版本上

### B、执行命令行时报权限类错误

确保命令行执行时，具有相应的权限。

如在AWS时，需确保客户端的IAM角色具有EKS的操作权限。

> Chaos Mesh 使用 Kubernetes 原生的 RBAC 功能来管理用户角色和权限。用户在创建、查看、管理混沌实验时，需要拥有 chaos-mesh.org 这个 apiGroups 下混沌实验自定义资源的相应权限。

对于AWS而言，IAM会映射到RBAC上，所以需要IAM具有权限。

### C、ChaosMesh支持K8s的版本

见 [各版本支持情况与版本时间表​](https://chaos-mesh.org/zh/docs/supported-releases/)

---

## 二、执行实验

### A、爆炸范围选择

* 命名空间选择器 (Namespace Selectors)
* 标签选择器 (Label Selectors)
* 注解选择器 (Annotation Selectors)
* POD
* NODE
* ......

### B、故障恢复

1. 创建后，实验会立刻向测试目标注入已配置的故障。如果配置了 duration 参数，故障在 duration 指定的时间结束后会自动恢复。
2. 当暂停或者删除混沌实验时，故障会立刻被恢复。

### C、实验阶段介绍

在 Chaos Mesh 中，根据实验的执行流程，一个混沌实验的生命周期主要分为以下四个阶段：

1. 注入阶段：混沌实验正在进行注入故障操作。通常情况下，此阶段持续的时间很短。如果此阶段持续的时间很长，可能是由于混沌实验出现了异常，此时可以查看事件信息确定异常原因。
2. 运行阶段：当所有测试目标都已经被成功注入故障后，混沌实验进入运行阶段。
3. 暂停阶段：当对混沌实验进行暂停操作时，Chaos Mesh 会恢复所有测试目标，此时实验进入暂停阶段。
4. 结束阶段：如果配置了实验持续时间，当实验运行时间达到了持续时间后，Chaos Mesh 会恢复所有测试目标，表示实验已经结束。

### C、查看实验结果

可以使用 kubectl describe 命令查看此混沌实验对象的 Status 和 Events，从而确定实验结果。

    kubectl describe podchaos pod-failure-tikv -n tidb-cluster

```text
...
Status:
  Conditions:
    Reason:
    Status:  False
    Type:    Paused
    Reason:
    Status:  True
    Type:    Selected
    Reason:
    Status:  True
    Type:    AllInjected
    Reason:
    Status:  False
    Type:    AllRecovered
  Experiment:
    Container Records:
      Id:            tidb-cluster/basic-tikv-0
      Phase:         Injected
      Selector Key:  .
    Desired Phase:   Run
Events:
  Type    Reason           Age   From          Message
  ----    ------           ----  ----          -------
  Normal  FinalizerInited  39s   finalizer     Finalizer has been inited
  Normal  Paused           39s   desiredphase  Experiment has been paused
  Normal  Updated          39s   finalizer     Successfully update finalizer of resource
  Normal  Updated          39s   records       Successfully update records of resource
  Normal  Updated          39s   desiredphase  Successfully update desiredPhase of resource
  Normal  Started          17s   desiredphase  Experiment has started
  Normal  Updated          17s   desiredphase  Successfully update desiredPhase of resource
  Normal  Applied          17s   records       Successfully apply chaos for tidb-cluster/basic-tikv-0
  Normal  Updated          17s   records       Successfully update records of resource
```

#### Status

依据混沌实验的执行流程，Status 提供了以下四类状态记录：

* Paused： 代表混沌实验正处于暂停阶段。
* Selected： 代表混沌实验已经正确选择出待测试目标。
* AllInjected：代表所有测试目标都已经被成功注入故障。
* AllRecoverd：代表所有测试目标的故障都已经被成功恢复。

可以通过这四类状态记录推断出当前混沌实验的真实运行情况。例如：

1. 当 Paused、Selected、AllRecoverd 的状态是 True 且 AllInjected 的状态是 False时，说明当前实验处在暂停状态。
2. 当 Paused 为 True 的时，说明当前实验处在暂停状态，但是如果此时的 Selected 值为 False，那么可以进一步得出此混沌实验无法选出待测试目标。

 
    注意
    你可以从上述的四类实验记录组合中可以推导出更多的信息，例如当 Paused 为 True 的时候，说明混沌实验处在暂停状态，但是如果此时的 Selected 值为 False，那么可以进一步得出此混沌实验无法选出待测试目标。

#### Events

事件列表中包含混沌实验整个生命周期中的操作记录，可以帮助确定混沌实验状态并排除问题。

---

## 三、Chaos Mesh Workflow

复杂的注入工作流。

TODO