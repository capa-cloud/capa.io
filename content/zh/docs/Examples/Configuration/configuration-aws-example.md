---
title: "Configuration AWS-App Config示例"
linkTitle: "Configuration AWS-App Config示例"
date: 2021-10-15
description: >
  使用App Config实现在AWS云环境下的应用级配置管理.
---

## 文档更新时间

**由于当前处于高速迭代中，代码和版本都很不稳定，文档可能不是最新版本，接入jar包版本和流程都可能会有较大改动，请查看最后更新时间，若和当前时间超过一周请咨询相关开发询问是否有较大改动！！！**

**last updated on 2021/12/06

## 接入使用流程

21/12/06/18:32 updated maven dependency

step1.引入maven依赖

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
    <artifactId>capa-spi-aws-config</artifactId>
</dependency>
```

```xml
<dependency>
    <groupId>io.projectreactor</groupId>
    <artifactId>reactor-core</artifactId>
</dependency>
```

携程用户需要额外引入(目前jar包在携程私服上，仅限携程开发使用)

```xml
<dependency>
    <groupId>group.rxcloud</groupId>
    <artifactId>capa-adaptor-group.rxcloud-qconfig</artifactId>
</dependency>
```

此外还提供foundation方法包，供使用方获取appId,provider,env,namespace,region使用(**该foundation中的其他方法并未测试，请不要使用**)

```xml
<dependency>
    <groupId>group.rxcloud</groupId>
    <artifactId>capa-foundation</artifactId>
    <version>1.0.4.RELEASE</version>
</dependency>
```

ps:后续会统一放入capa-framework-dependencies bom中进行管理

step2.代码改动

### 非携程接入方(不使用adaptor包)使用流程

参照[快速开始-使用Configuration API](https://capa-cloud.github.io/capa.io/docs/gettingstarted/configuration-usage/)

- 创建单例单例Configuration Client

```java
public final class CapaConfigStoreClientProvider {

    private static volatile CapaConfigurationClient client;

    public static CapaConfigurationClient getClient() {
        if (client == null) {
            synchronized (CapaConfigStoreClientProvider.class) {
                if (client == null) {
                    StoreConfig storeConfig = new StoreConfig();
                    //对应实现的storeName
                    storeConfig.setStoreName(storeName);
                    client = new CapaConfigurationClientBuilder(storeConfig).build();
                }
            }
        }
        return client;
    }

    private CapaConfigStoreClientProvider() {
    }
}
```

```java
private static final CapaConfigurationClient client = CapaConfigStoreClientProvider.getClient();
```

- 调用get/subscribe接口获取/订阅数据

```java
//根据自身填入storeName，appId
Mono<List<ConfigurationItem<User>>> configMono = client.getConfiguration(
    	storeName, 
        appId,
        Lists.newArrayList("test.json"),
        null,
        "",
        "",
        TypeRef.get(User.class));

//阻塞获取配置结果
List<ConfigurationItem<User>> config = configMono.block();
//带超时时间的阻塞,自定义超时时间
List<ConfigurationItem<User>> config = configMono.block(Duration.ofSeconds(30));
```

subscribe

```java
//本地存配置的变量
private static SubConfigurationResp<User> cur;

static {
    //根据自身填入storeName，appId
        Flux<SubConfigurationResp<User>> configFlux = client.subscribeConfiguration(
            	storeName,
                appId,
                Lists.newArrayList("test.json"),
                null,
                "",
                "",
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

### 携程接入方使用流程

#### 注解使用流程

- 使用adaptor包中的@QConfig注解替换QConfig中原来的@QConfig注解:将**import qunar.tc.qconfig.client.spring.QConfig**;修改为**import group.rxcloud.capa.adaptor.group.rxcloud.qconfig.annotation.QConfig;**

- 代码写法

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

- 注解支持范围:只支持@QConfig注解，并且只支持注解加载field上和method上

#### API使用流程

- 从adaptor中获取单例config client

```java
private static final CapaConfigurationClient client = CapaConfigurationClientProvider.getClient();
```

- 调用get/subscribe接口获取/订阅数据

```java
//从adaptor中CapaConfigStoreClientProvider静态方法中获取storeName(必须)和appid(可选,可以自己从app.properties中读，也可以使用Foundation.app().getAppId() ps:此包为capa-foundation包提供的方法，仅在aws实现下使用)
Mono<List<ConfigurationItem<User>>> configMono = client.getConfiguration(
    	CapaConfigurationClientProvider.provideStoreName(), 
        Foundation.app().getAppId(),
        Lists.newArrayList("test.json"),
        null,
        TypeRef.get(User.class));
//阻塞获取配置结果
List<ConfigurationItem<User>> config = configMono.block();
//或带超时时间的阻塞,自定义超时时间
List<ConfigurationItem<User>> config = configMono.block(Duration.ofSeconds(30));
```

subscribe

```java
//本地存配置的变量
private static SubConfigurationResp<User> cur;

static {
    //从adaptor中CapaConfigStoreClientProvider静态方法中获取storeName(必须)和appid(可选,可以自己从app.properties中读，也可以使用Foundation.app().getAppId() ps:此包为capa-foundation包提供的方法，仅在aws实现下使用)
        Flux<SubConfigurationResp<User>> configFlux = client.subscribeConfiguration(
            	CapaConfigurationClientProvider.provideStoreName(),
                Foundation.app().getAppId(),
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

## 中间件开发者配置AppConfig应用规范

1. AppConfig应用名格式为:"AppId_ENV",e.g.100012345_FAT(环境与group.rxcloud环境定义一致，且保持全大写)
2. 创建配置文件选择托管文件的方式
3. 文件发布部署时，选择immediate_shixu的部署方式，或者自己创建部署方式，选择创建部署时间0min，烘焙时间0min，百分比100%,线性的部署方式

## 实现步骤

1. 针对AWS云的设施基础现状下，选型AWS AppConfig为应用级别配置管理组件

2. 继承[CapaConfigStoreSpi](https://github.com/capa-cloud/capa-java/blob/master/sdk-spi/src/main/java/group/rxcloud/capa/spi/configstore/CapaConfigStoreSpi.java)抽象类，底层通过对appconfig的封装，实现相应的Configuration API

3. 通过SPI机制引入相关实现类。具体流程为:

   - 引入相关实现类的jar包
   - 在项目resources路径下，新增capa-component-configuration.properties文件。文件内容如下

   ```properties
   #capa-component-configuration.properties文件
   group.rxcloud.capa.component.configstore.CapaConfigStore=group.rxcloud.capa.spi.aws.config.AwsCapaConfigStore
   ```

   - 在项目resources路径下，新增capa-component-configuration-common.properties

   ```properties
   # configuration component store names
   CONFIGURATION_COMPONENT_STORE_NAMES=aws.appconfig
   ```

   - 在项目resources路径下，新增capa-component-configuration-aws.propertoes

   ```properties
   # configstore aws app config env
   CONFIG_AWS_APP_CONFIG_ENV=ENV
   ```

4. 调用方通过使用Capa统一规范的Configuration API即可完成对应用级别配置的管理需求。