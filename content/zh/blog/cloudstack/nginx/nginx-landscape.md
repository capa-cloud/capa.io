---
title: "Nginx Landscape"
linkTitle: "Nginx Landscape"
date: 2022-05-22
description: >
    Nginx Landscape.
---

## 一、Nginx 功能

### A、跨域问题

#### 关键字：

* OPTIONS预检请求 
* CORS跨域校验

#### 资料：

跨域中一些ngxin的配置：https://juejin.cn/post/6995374680114741279

跨域的解释：https://juejin.cn/post/6844903938232156167#heading-46

CORS：https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS

## 二、Nginx 运维

#### 快速部署

https://kubernetes.io/zh/docs/tasks/run-application/run-stateless-application-deployment/

#### 常用目录

配置文件 /etc/nginx/conf.d

默认日志 /var/logs/nginx

配置日志 /etc/nginx/logs/

#### 常用命令

测试：nginx -t

重启：nginx -s reload

查看日志：

* tail -n 10 xxx.log
* head -n 10 xxx.log

域名解析：

* /etc/resov.conf
* nslookup
    * apt-get install dnsutils
    * nslookup www.baidu.com

### 配置

#### 日志

error_log    logs/error_www.abc.com.log    error;

#### proxy

如果proxy_pass中hostname使用了占位符，需要指定resovler的dns服务器ip

#### 参数

* 使用$arg_xxx来获取get中的参数
* 使用$http_xxx来获取header中的参数

#### header

* add_header 是当请求从 server 端回来时，Nginx 再往这个 response 里添加一些额外的 reponse header 然后发送给 客户端。
* proxy_set_header 是当请求从客户端发出时，Nginx接收到 request 再往请求里添加一些额外的 request header 然后发送给 服务端。
    * 常见的一些需要设置 proxy_set_header 的场景，比如说，有些 server 可能需要验证 Host，这个时候，就可以使用 proxy_set_header 伪造一个 Host 来骗过服务端。

### 经验

#### proxy

使用resolver指定dns服务器时，hostname要带上 .svc.cluster.local

可以查看/etc/resov.conf中的dns服务器，来指定nginx的resovler

### 参考资料

#### 变量名：

https://www.cnblogs.com/dadonggg/p/7797281.html

#### 代理配置：

https://segmentfault.com/a/1190000019894251

#### service跨namespace：

https://cloud.tencent.com/developer/article/1718427