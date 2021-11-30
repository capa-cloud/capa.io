---
title: "Configuration Ctrip-Qconfig示例"
linkTitle: "Configuration Ctrip-Qconfig示例"
date: 2021-10-15
description: >
  使用Qconfig API实现在携程全家桶环境下的应用级配置管理#
---

## 接入使用流程

step1.引入maven依赖

引入相关依赖maven包:CAPA SDK,ctrip实现包以及ctrip 适配包

```xml
<dependency>
  <groupId>group.rxcloud</groupId>
  <artifactId>capa-sdk</artifactId>
  <version>1.0.6.RELEASE</version>
</dependency>
```

```xml
<dependency>
    <groupId>com.ctrip.ibu</groupId>
    <artifactId>capa-spi-ctrip-qconfig</artifactId>
    <version>1.0.6-SNAPSHOT</version>
</dependency>
```

```xml
<dependency>
    <groupId>com.ctrip.ibu</groupId>
    <artifactId>capa-adaptor-ctrip-qconfig</artifactId>
    <version>1.0.0-SNAPSHOT</version>
</dependency>
```

ps:以上版本皆为目前的版本，使用方在接入时要以当时的最新版本替代后接入

~~step2.增加config properties文件~~

**2021/11/27 update:升级capa-spi-ctrip-qconfig jar包，将不需要再显式加入此文件(1.0.7及以后的版本，目前还没deploy,使用1.0.6-SNAPSHOT还需要显式加入此文件)**

1. ~~项目resources下新增capa-component-configuration.properties文件~~
2. ~~文件内容如下~~

```properties
group.rxcloud.capa.component.configstore.CapaConfigStore=com.ctrip.ibu.capa.spi.ctrip.configstore.CtripCapaConfigStore
store.config.name=QConfig
```

step3.相关代码修改

### 注解接入使用流程

- 使用adaptor包中的@QConfig注解替换QConfig中原来的@QConfig注解:将**import qunar.tc.qconfig.client.spring.QConfig**;修改为**import com.ctrip.ibu.capa.adaptor.ctrip.qconfig.annotation.QConfig;**
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
private static final CapaConfigurationClient client = CapaConfigStoreClientProvider.getClient();
```

- 调用get/subscribe接口获取/订阅数据

```java
//从adaptor中CapaConfigStoreClientProvider静态方法中获取storeName(必须)和appid(可选,可以自己从app.properties中读)
Mono<List<ConfigurationItem<User>>> configMono = client.getConfiguration(storeName, 
        SERVICE_APP_ID,
        Lists.newArrayList("test.json"),
        null,
        TypeRef.get(User.class));

//阻塞获取配置结果
List<ConfigurationItem<User>> config = configMono.block();
```

```java
//本地存配置的变量
private static SubConfigurationResp<User> cur;

static {
    //从adaptor中CapaConfigStoreClientProvider静态方法中获取storeName(必须)和appid(可选,可以自己从app.properties中读)
        Flux<SubConfigurationResp<User>> configFlux = client.subscribeConfiguration(storeName,
                SERVICE_APP_ID,
                Lists.newArrayList("test.json"),
                null,
                TypeRef.get(User.class));
	//阻塞初始化配置
    cur = configFlux.blockFirst();
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

![configuration_in_ctrip](https://raw.githubusercontent.com/reactivegroup/capa.io/master/content/images/zh/docs/Example/Configuration/configuration_ctrip.png)

ps:Service(appid:123)为举例，表示一个应用id为123的服务，下面直接缩写成ServiceA

- ServiceA:服务调用方
- ServiceA通过调用Capa SDK中统一规范制定的Capa Configuration API发起该应用的配置管理请求
- 找到通过SPI机制注册Capa Configuration API的Ctrip实现类，并执行相关逻辑
- Configuration API内部关于Ctrip的实现，底层调用Qconfig API进行相应的配置管理
- 获取Qconfig Service返回的数据，并一路返回给服务调用方ServiceA
- ServiceA获取相关配置操作的结果，实现应用级别的配置管理

## 实现步骤

1. 针对携程全家桶的设施基础现状下，选型Qconfig为应用级别配置管理组件

2. 继承[CapaConfigStoreSpi](https://github.com/reactivegroup/capa/blob/master/sdk-spi/src/main/java/group/rxcloud/capa/spi/configstore/CapaConfigStoreSpi.java)抽象类，底层通过对Qconfig的封装，实现相应的Configuration API

3. 通过SPI机制引入相关实现类。具体流程为:

   - 引入相关实现类的jar包
   - 在项目resources路径下，新增capa-component-configuration.properties文件。文件内容如下

   ```properties
   //capa-component-configuration.properties文件
   group.rxcloud.capa.component.configstore.CapaConfigStore=com.ctrip.ibu.capa.spi.ctrip.configstore.CtripCapaConfigStore
   CONFIGURATION_COMPONENT_STORE_NAME=QConfig
   ```
   
4. 调用方通过使用Capa统一规范的Configuration API即可完成对应用级别配置的管理需求。