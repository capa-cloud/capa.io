---
title: "AWS EKS Devops"
linkTitle: "AWS EKS Devops"
date: 2022-05-24
description: >
    AWS EKS Devops.
---

# EKS Devops

## 一、EKS集群

### A、安装相关命令行工具

#### awsctl

    pip install awscli

#### eksctl

    curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp

    sudo mv /tmp/eksctl /usr/local/bin

    eksctl version

#### kubectl

    curl -o kubectl https://amazon-eks.s3.us-west-2.amazonaws.com/1.21.2/2021-07-05/bin/linux/amd64/kubectl

    chmod +x ./kubectl
    mkdir -p $HOME/bin && cp ./kubectl $HOME/bin/kubectl && export PATH=$PATH:$HOME/bin
    echo 'export PATH=$PATH:$HOME/bin' >> ~/.bashrc

    kubectl version --short --client

### B、连接

     aws eks update-kubeconfig --region ap-southeast-1 --name xxx-eks-cluster

更新kube的config文件

### C、权限

默认使用的是客户端 用户/角色 的权限。

AWS IAM权限映射到EKS的RBCA权限上。

