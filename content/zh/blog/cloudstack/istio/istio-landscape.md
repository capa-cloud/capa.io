---
title: "Istio Landscape"
linkTitle: "Istio Landscape"
date: 2022-03-09
description: >
Istio Landscape.
---

## 一、Istio Sidecar

### Sidecar实现

### A、Sidecar docker

使用docker部署多容器

### B、Sidecar k8s

使用k8s自动注入sidecar

### C、Sidecar istio

使用envoy代理流量

------

## 二、Istio polit-agent

### A、结构



### B、功能


### C、流量拦截

#### 查看iptables规则

```txt
ip netns exec cni-bf783dac-fe05-cb35-4d5a-848449119b19 iptables -L -t nat

-A PREROUTING -p tcp -j ISTIO_INBOUND                          # PREROUTING全部转发到INBOUND,PREROUTING发生在流入的数据包进入路由表之前
-A OUTPUT -p tcp -j ISTIO_OUTPUT                               # 由本机产生的数据向外转发的
-A ISTIO_INBOUND -p tcp -m tcp --dport 22 -j RETURN            # 22 15090  15021 15020的不转发到ISTIO_REDIRECT 
-A ISTIO_INBOUND -p tcp -m tcp --dport 15090 -j RETURN         
-A ISTIO_INBOUND -p tcp -m tcp --dport 15021 -j RETURN
-A ISTIO_INBOUND -p tcp -m tcp --dport 15020 -j RETURN
-A ISTIO_INBOUND -p tcp -j ISTIO_IN_REDIRECT                   # 剩余的流量都转发到ISTIO_REDIRECT
-A ISTIO_IN_REDIRECT -p tcp -j REDIRECT --to-ports 15006       # 转发到15006
-A ISTIO_OUTPUT -s 127.0.0.6/32 -o lo -j RETURN                # 127.0.0.6是InboundPassthroughBindIpv4,代表原地址是passthrough的流量都直接跳过,不劫持
-A ISTIO_OUTPUT ! -d 127.0.0.1/32 -o lo -m owner --uid-owner 1337 -j ISTIO_IN_REDIRECT  #lo网卡出流量,目标地址不是localhost的,且为同用户的流量进入ISTIO_IN_REDIRECT
-A ISTIO_OUTPUT -o lo -m owner ! --uid-owner 1337 -j RETURN    # lo网卡出流量 非同用户的不劫持
-A ISTIO_OUTPUT -m owner --uid-owner 1337 -j RETURN            # 剩下的同用户的都跳过
-A ISTIO_OUTPUT ! -d 127.0.0.1/32 -o lo -m owner --gid-owner 1337 -j ISTIO_IN_REDIRECT  # lo网卡出流量,目标地址非本地,同用户组的流量进入ISTIO_IN_REDIRECT
-A ISTIO_OUTPUT -o lo -m owner ! --gid-owner 1337 -j RETURN    # lo网卡出流量非同组的不劫持
-A ISTIO_OUTPUT -m owner --gid-owner 1337 -j RETURN            # 剩余的同用户的不劫持
-A ISTIO_OUTPUT -d 127.0.0.1/32 -j RETURN                      # 剩余的目标地址为127的不劫持
-A ISTIO_OUTPUT -j ISTIO_REDIRECT                              # 剩下的都进入 ISTIO_REDIRECT
-A ISTIO_REDIRECT -p tcp -j REDIRECT --to-ports 15001          # 转达到15001 outbond
COMMIT
```

------

## 三、Sidecar

### A、Proxy VS Runtime

#### 1. 服务发现

Mesh: dns拦截

![](http://img.rocdu.top/20201117/role-of-dns-today.png)

![](http://img.rocdu.top/20201117/dns-interception-in-istio.png)


### B、eBPF

### C、gRPC-proxy

### D、WASM