---
title: "Java Spring"
linkTitle: "Java Spring"
date: 2022-05-30
description: >
    Java Spring的一些实践经验.
---

### A、初始化

> https://www.codetd.com/en/article/13249666#ServletContextListener_27

#### BeanPostProcessor

Spring容器的创建Bean前后执行

#### InitializingBean

InitializingBean接口为bean提供了属性初始化后的处理方法，在bean的属性初始化后都会执行该方法。

#### PostConstruct

使用@PostConstruct注解一个方法来完成初始化，@PostConstruct注解的方法将会在依赖注入完成后被自动调用。

#### ApplicationRunner和CommandLineRunner

项目启动后执行，CommandLineRunner和ApplicationRunner的作用是相同的，不同在于参数的封装和没封装。可以创建多个实现CommandLineRunner和ApplicationRunner接口的类。为了使他们按一定顺序执行，可以使用@Order注解或实现Ordered接口。

#### 执行顺序结果

    .   ____          _            __ _ _
    /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
    ( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
    \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
    '  |____| .__|_| |_|_| |_\__, | / / / /
    =========|_|==============|___/=/_/_/_/
    :: Spring Boot ::        (v1.5.9.RELEASE)

    beanPostProcessor run...
    servletContextListener run...
    initializingBean run...
    postConstruct run...
    applicationRunner run...
    commandLineRunner run...