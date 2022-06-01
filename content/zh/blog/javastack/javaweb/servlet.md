---
title: "Java Servlet"
linkTitle: "Java Servlet"
date: 2022-05-30
description: >
    Java Servlet的一些实践经验.
---

### A、初始化

> https://www.codetd.com/en/article/13249666#ServletContextListener_27

#### ServletContextListener

ServletContextListener 接口，它能够监听 ServletContext 对象的生命周期，当Servlet 容器启动或终止Web 应用时，会触发ServletContextEvent 事件，该事件由ServletContextListener 来处理。