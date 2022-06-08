---
title: "Tomcat Devops"
linkTitle: "Tomcat Devops"
date: 2022-06-08
description: >
    Tomcat Devops的一些运维排障经验.
---

### A、Tomcat关闭

```
start: INFO [Thread-7] org.apache.coyote.AbstractProtocol.pause Pausing ProtocolHandler [\"http-nio-8080\"]

start: INFO [Thread-6] org.apache.catalina.core.StandardService.stopInternal Stopping service [Catalina]

end:   INFO [Thread-6] org.apache.coyote.AbstractProtocol.stop Stopping ProtocolHandler [\"http-nio-8080\"]

end:   INFO [Thread-6] org.apache.coyote.AbstractProtocol.destroy Destroying ProtocolHandler [\"http-nio-8080\"]
```

#### 0. 非正常关闭

    start: INFO [Thread-7] org.apache.coyote.AbstractProtocol.pause Pausing ProtocolHandler [\"http-nio-8080\"]

    start: INFO [Thread-6] org.apache.catalina.core.StandardService.stopInternal Stopping service [Catalina]

这是非正常关闭

#### 1. tomcat通过脚本正常关闭(viaport: 即通过8005端口发送shutdown指令)

正常关闭(viaport)的话会在 pause 之前有这样的一句warn日志：

    org.apache.catalina.core.StandardServer await
    A valid shutdown command was received via the shutdown port. Stopping the Server instance.
    
然后才是 pause -> stop -> destory

#### 2. tomcat的shutdownhook被触发，执行了销毁逻辑

而这又有两种情况:

1. 应用代码里有地方用System.exit来退出jvm
2. 系统发的信号(kill -9除外，SIGKILL信号JVM不会有机会执行shutdownhook)
   1. ssh会话退出
   2. 健康检查失败，POD触发信号