---
title: "Configuration AWS-App Config示例"
linkTitle: "Configuration AWS-App Config示例"
date: 2021-10-15
description: >
  使用App Config实现在AWS云环境下的应用级配置管理.
---

## 文档更新时间

**由于当前处于高速迭代中，代码和版本都很不稳定，文档可能不是最新版本，接入jar包版本和流程都可能会有较大改动，请查看最后更新时间，若和当前时间超过一周请咨询相关开发询问是否有较大改动！！！**

**last updated on 2021/12/03**

## 接入使用流程

step1.引入maven依赖

引入相关依赖maven包:CAPA SDK,ctrip实现包以及ctrip 适配包

21/12/03/14:40 updated maven dependency

```xml
<dependency>
  <groupId>group.rxcloud</groupId>
  <artifactId>capa-sdk</artifactId>
  <version>1.0.8.RELEASE</version>
</dependency>
```

```xml
<dependency>
    <groupId>group.rxcloud</groupId>
    <artifactId>capa-spi-aws-config</artifactId>
    <version>1.0.5.2.RELEASE</version>
</dependency>
```

```xml
<dependency>
    <groupId>io.projectreactor</groupId>
    <artifactId>reactor-core</artifactId>
    <version>3.3.22.RELEASE</version>
</dependency>
```

携程用户需要额外引入(目前jar包在携程私服上，仅限携程开发使用)

```xml
<dependency>
    <groupId>com.ctrip.ibu</groupId>
    <artifactId>capa-adaptor-ctrip-qconfig</artifactId>
    <version>1.0.0-SNAPSHOT</version>
</dependency>
```

ps:1.以上版本皆为目前的版本，使用方在接入时要以当时的最新版本替代后接入

2.snapshot版本，每次要将本地snapshot版本更新再进行测试

~~step2.增加config properties文件~~

**2021/11/27 update:升级capa-spi-aws-config jar包，将不需要再显式加入此文件(1.0.4及以后的版本，目前还没deploy,使用1.0.3.RELEASE还需要显式加入此文件)**

**2021/12/03 update:step2废弃，无需引入此文件**

1. ~~项目resources下新增capa-component-configuration.properties文件~~
2. ~~文件内容如下~~

```properties
group.rxcloud.capa.component.configstore.CapaConfigStore=group.rxcloud.capa.spi.aws.config.AwsCapaConfiguration
CONFIGURATION_COMPONENT_STORE_NAME=aws.appconfig
```

step3.相关代码修改

### 非携程接入方(不使用adaptor包)使用流程

参照[快速开始-使用Configuration API](https://reactivegroup.github.io/capa.io/docs/gettingstarted/configuration-usage/)

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

- 使用adaptor包中的@QConfig注解替换QConfig中原来的@QConfig注解:将**import qunar.tc.qconfig.client.spring.QConfig**;修改为**import com.ctrip.ibu.capa.adaptor.ctrip.qconfig.annotation.QConfig;**

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
Mono<List<ConfigurationItem<User>>> configMono = client.getConfiguration(
    	CapaConfigurationClientProvider.provideStoreName(), 
        appId,
        Lists.newArrayList("test.json"),
        null,
        TypeRef.get(User.class));

//带超时时间的阻塞,自定义超时时间
List<ConfigurationItem<User>> config = configMono.block(Duration.ofSeconds(30));

//阻塞获取配置结果
List<ConfigurationItem<User>> config = configMono.block();
```

subscribe

```java
//本地存配置的变量
private static SubConfigurationResp<User> cur;

static {
    //从adaptor中CapaConfigStoreClientProvider静态方法中获取storeName(必须)和appid(可选,可以自己从app.properties中读)
        Flux<SubConfigurationResp<User>> configFlux = client.subscribeConfiguration(
            	CapaConfigurationClientProvider.provideStoreName(),
                appId,
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

## 实现步骤

1. 针对AWS云的设施基础现状下，选型AWS AppConfig为应用级别配置管理组件

2. 继承[CapaConfigStoreSpi](https://github.com/reactivegroup/capa/blob/master/sdk-spi/src/main/java/group/rxcloud/capa/spi/configstore/CapaConfigStoreSpi.java)抽象类，底层通过对appconfig的封装，实现相应的Configuration API

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