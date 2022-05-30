---
title: "Chaos Mesh - K8S实验"
linkTitle: "Chaos Mesh云原生混沌工程平台" 
date: 2022-05-30
description: >
    K8S 故障注入实践经验.
---

# Chaos Mesh

## 一、故障注入场景

### A、RPC服务通讯层演练

#### 1. RPC演练-服务延时/性能 监控告警

**演练目标：**



**演练手段：**

**演练：**

#### 2. RPC演练-服务弹性伸缩高可用



#### 3. RPC演练-服务恢复

----------------

## 二、K8S混沌实验

见 [Kubernetes](https://chaos-mesh.org/zh/docs/simulate-pod-chaos-on-kubernetes/)

### A、POD故障

#### 1. Pod Failure

向指定的 Pod 中注入故障，使得该 Pod 在一段时间内处于不可用的状态。

实践：

1. POD不会被K8S回收重新部署。
2. POD会一直处于restart状态，可以看到值在增加
3. 仅在对应namespace生效
4. 使用http访问时，直接报连接错误

#### “Pod Failure” 混沌实验的一些注意事项

简言之，这里有几个关于使用 "Pod Failure" 混沌实验的建议：

* 如果你正在运行一个气隙或网络隔离的 Kubernetes 集群，请更换一个可用的 "pause image"。
* 为容器配置 livenessProbe 和 readinessProbe。

Pod Failure 混沌实验将会改变目标 Pod 中每个容器的 image 为 "pause image"，这是一个特殊的镜像，不会执行任何操作。我们使用 gcr.io/google-containers/pause:latest 作为默认的 "pause image"，你可以在 helm values controllerManager.podChaos.podFailure.pauseImage 中更改它。

下载 "pause image" 将会消耗时间，并且这个时间将会被计入实验的持续时间中。所以你可能会发现，**"实际受影响的时间" 可能会比配置的时间短**。这是推荐设置可用的 "pause image" 的另一个原因。

另外一个迷惑的点是，"pause image" 可以在未配置 command 的容器中正常工作。所以，如果容器未配置 command，livenessProbe 和 readinessProbe，它将会被视为 Running 和 Ready，**即使它已经被改变为 "pause image"，并且实际上不提供正常功能， 或者被视为不可用。所以建议为容器配置 livenessProbe 和 readinessProbe。**

------

### B、网络故障

#### 1. 网络延时

配置：

```yaml 
apiVersion: chaos-mesh.org/v1alpha1
kind: NetworkChaos
metadata:
  name: delay
spec:
  action: delay
  # one（表示随机选出一个符合条件的 Pod）
  mode: one
  selector:
    namespaces:
      - {default}
    labelSelectors:
      'app': '{web-show}'
  delay:
    latency: '{10ms}'
    # 表示延迟时间的时间长度与前一次延迟时长的相关性。取值范围：[0, 100]
    correlation: '100'
    # 表示延迟时间的变化范围
    jitter: '0ms'
```

实践：

1. 仅在对应namespace、pod生效
2. http调用，感觉会有两个延时：一个是connect，一个是数据发送。所以如果设置10sdelay，可能完成一次调用要20s。

------

### C、AWS故障

AWSChaos 能够帮助你模拟指定的 AWS 实例发生故障的情景。目前，AWSChaos 支持以下类型的故障：

* EC2 Stop: 使指定的 EC2 实例进入停止状态。
* EC2 Restart: 重启指定的 EC2 实例。
* Detach Volume: 从指定的 EC2 实例中卸载存储卷。

实践：

1. 似乎无法操作非k8s管理的ec2

ec2级别的故障，可以由aws原生的fis来进行。
