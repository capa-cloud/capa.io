---
title: "Configuration Ctrip-Qconfig示例"
linkTitle: "Configuration Ctrip-Qconfig示例"
date: 2021-10-15
description: >
  使用Qconfig API实现在携程全家桶环境下的应用级配置管理
---

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

## 推荐写法

1. 创建单例的CapaConfigurationClient

```java
public final class CapaConfigurationClientSingleton {

    private static volatile CapaConfigurationClient client;

    public static CapaConfigurationClient getInstance() {
        if (client == null) {
            synchronized (CapaConfigurationClientSingleton.class) {
                if (client == null) {
                    StoreConfig storeConfig = new StoreConfig();
                    storeConfig.setStoreName("qconfig");
                    client = new CapaConfigurationClientBuilder(storeConfig).build();
                }
            }
        }
        return client;
    }
    private CapaConfigurationClientSingleton(){}
}
```

2. 对于订阅配置的写法

```java
private static final CapaConfigurationClient capaConfigurationClient = CapaConfigurationClientSingleton.getInstance();

static {
    Flux<SubConfigurationResp<User>> subJsonConfigMono = capaConfigurationClient.subscribeConfiguration("qconfig", "123", Lists.newArrayList("test.json"), Collections.emptyMap(), TypeRef.get(User.class));
    //获取当前配置
    SubConfigurationResp<User> cur = subJsonConfigMono.blockFirst();
    //更新订阅配置
    subJsonConfigMono.subscribe(resp-> {
        cur.setItems(Lists.newArrayList(resp.getItems()));
    });
}
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
   - 在项目resources路径下，新增capa-component.properties文件。在文件中新增属性key:“group.rxcloud.capa.component.configstore.CapaConfigStore”，value:“实现类的全路径”。示例如下:

   ```properties
   //capa-component.properties文件
   group.rxcloud.capa.component.configstore.CapaConfigStore=group.rxcloud.capa.spi.demo.configstore.DemoCapaConfigStore
   ```

4. 调用方通过使用Capa统一规范的Configuration API即可完成对应用级别配置的管理需求。