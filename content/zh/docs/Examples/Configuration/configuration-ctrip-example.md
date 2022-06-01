---
title: "Configuration Ctrip-Qconfig示例"
linkTitle: "Configuration Ctrip-Qconfig示例"
date: 2021-10-15
description: >
  使用Qconfig API实现在携程全家桶环境下的应用级配置管理##
---

## 文档更新时间

**由于当前处于高速迭代中，代码和版本都很不稳定，文档可能不是最新版本，接入jar包版本和流程都可能会有较大改动，请查看最后更新时间，若和当前时间超过一周请咨询相关开发询问是否有较大改动！！！**

**last updated on 2021/12/06**

## 接入使用流程

step1.引入maven依赖

21/12/06/18:32 updated maven dependency

```xml
<dependencyManagement>        
     <dependency>
            <groupId>group.rxcloud</groupId>
            <artifactId>capa-framework-dependencies</artifactId>
            <version>1.0.1</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```

```xml
<dependency>
    <groupId>group.rxcloud</groupId>
    <artifactId>capa-spi-group.rxcloud-qconfig</artifactId>
</dependency>
```

```xml
<dependency>
    <groupId>io.projectreactor</groupId>
    <artifactId>reactor-core</artifactId>
</dependency>
```

```xml
<dependency>
    <groupId>group.rxcloud</groupId>
    <artifactId>capa-adaptor-group.rxcloud-qconfig</artifactId>
</dependency>
```

step2.相关代码修改

### 注解接入使用流程

- 使用adaptor包中的@QConfig注解替换QConfig中原来的@QConfig注解:将**import qunar.tc.qconfig.client.spring.QConfig**;修改为**import group.rxcloud.capa.adaptor.group.rxcloud.qconfig.annotation.QConfig;**
- 使用如下

```java
@Service
public class JsonConfigService {
    @QConfig("testjson.json")
    private Person person;//非监听模式，支持热更新

    @QConfig("testjson.json")
    private void onChange(Person person) {//监听模式
        System.out.println(person);
    }

    public String getPerson() {
        return JSON.toJSONString(person);
    }
}
```

### API接入使用流程

- 调用adaptor中方法，创建单例单例Configuration Client

```java
private static final CapaConfigurationClient client = CapaConfigurationClientProvider.getClient();
```

- 调用get/subscribe接口获取/订阅数据

```java
//从adaptor中CapaConfigStoreClientProvider静态方法中获取storeName(必须)
Mono<List<ConfigurationItem<User>>> configMono = client.getConfiguration(
    	CapaConfigurationClientProvider.provideStoreName(), 
        appid,
        Lists.newArrayList("test.json"),
        null,
        TypeRef.get(User.class));

//阻塞获取配置结果
List<ConfigurationItem<User>> config = configMono.block();
//带超时时间的阻塞,自定义超时时间
List<ConfigurationItem<User>> config = configMono.block(Duration.ofSeconds(30));
```

```java
//本地存配置的变量
private static SubConfigurationResp<User> cur;

static {
    //从adaptor中CapaConfigStoreClientProvider静态方法中获取storeName(必须)
        Flux<SubConfigurationResp<User>> configFlux = client.subscribeConfiguration(
            	CapaConfigurationClientProvider.provideStoreName(),
                appid,
                Lists.newArrayList("test.json"),
                null,
                TypeRef.get(User.class));
	//阻塞初始化配置
    cur = configFlux.blockFirst();
    //或使用带超时时间的阻塞初始化配置，自定义超时时间
    cur = configFlux.blockFirst(Duration.ofSeconds(30));
	//订阅变更并更新原数据
        configFlux.subscribe(resp -> cur.setItems(resp.getItems()));
    }
```

- 代码中，通过本地存配置的变量cur使用相关配置

```java
public String getConfig() {
        User user = cur.getItems().get(0).getContent();
        System.out.println("-----------------------------------age:" + user.getName());
 }
```

## 目前支持的功能范围

1. 配置文件类型:**.json和.properties结尾的文件**
2. 注解支持范围:仅支持@QConfig注解(不支持其他注解)，注解支持修饰在field上和method上
   - 修饰在field上，为非监听模式，仅支持热更新
   - 修饰在方法上，为监听模式，同时支持热更新
3. API支持范围如下

## 目前支持的API

```java
@Override
<T> Mono<List<ConfigurationItem<T>>> getConfiguration(String storeName, String appId, List<String> keys, Map<String, String> metadata, TypeRef<T> type);

@Override
<T> Mono<List<ConfigurationItem<T>>> getConfiguration(String storeName, String appId, List<String> keys, Map<String, String> metadata, String group, TypeRef<T> type);

@Override
<T> Mono<List<ConfigurationItem<T>>> getConfiguration(String storeName, String appId, List<String> keys, Map<String, String> metadata, String group, String label, TypeRef<T> type);
@Override
<T> Flux<SubConfigurationResp<T>> subscribeConfiguration(String storeName, String appId, List<String> keys, Map<String, String> metadata, TypeRef<T> type);

@Override
<T> Flux<SubConfigurationResp<T>> subscribeConfiguration(String storeName, String appId, List<String> keys, Map<String, String> metadata, String group, TypeRef<T> type);

@Override
<T> Flux<SubConfigurationResp<T>> subscribeConfiguration(String storeName, String appId, List<String> keys, Map<String, String> metadata, String group, String label, TypeRef<T> type);
```

## 暂不支持的API

```java
@Override
<T> Mono<List<ConfigurationItem<T>>> getConfiguration(ConfigurationRequestItem configurationRequestItem, TypeRef<T> type);

@Override
<T> Flux<SubConfigurationResp<T>> subscribeConfiguration(ConfigurationRequestItem configurationRequestItem, TypeRef<T> type);

@Override
Mono<Void> saveConfiguration(SaveConfigurationRequest saveConfigurationRequest);

@Override
Mono<Void> deleteConfiguration(ConfigurationRequestItem configurationRequestItem);
```

## 调用逻辑

![configuration_in_group.rxcloud](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/docs/Example/Configuration/configuration_ctrip.png)

ps:Service(appid:123)为举例，表示一个应用id为123的服务，下面直接缩写成ServiceA

- ServiceA:服务调用方
- ServiceA通过调用Capa SDK中统一规范制定的Capa Configuration API发起该应用的配置管理请求
- 找到通过SPI机制注册Capa Configuration API的Ctrip实现类，并执行相关逻辑
- Configuration API内部关于Ctrip的实现，底层调用Qconfig API进行相应的配置管理
- 获取Qconfig Service返回的数据，并一路返回给服务调用方ServiceA
- ServiceA获取相关配置操作的结果，实现应用级别的配置管理

## 实现步骤

1. 针对携程全家桶的设施基础现状下，选型Qconfig为应用级别配置管理组件

2. 继承[CapaConfigStoreSpi](https://github.com/capa-cloud/capa-java/blob/master/sdk-spi/src/main/java/group/rxcloud/capa/spi/configstore/CapaConfigStoreSpi.java)抽象类，底层通过对Qconfig的封装，实现相应的Configuration API

3. 通过SPI机制引入相关实现类。具体流程为:

   - 引入相关实现类的jar包
   - 在项目resources路径下，新增capa-component-configuration.properties文件。文件内容如下

   ```properties
   #capa-component-configuration.properties文件
   group.rxcloud.capa.component.configstore.CapaConfigStore=group.rxcloud.capa.spi.group.rxcloud.configstore.CtripCapaConfigStore
   ```

   - 在项目resources路径下，新增capa-component-configuration-common.properties

   ```properties
   CONFIGURATION_COMPONENT_STORE_NAME=group.rxcloud.qconfig
   ```

   - 在项目resources路径下，新增capa-component-configuration-group.rxcloud.propertoes

   ```properties
   #暂无配置
   ```

4. 调用方通过使用Capa统一规范的Configuration API即可完成对应用级别配置的管理需求。