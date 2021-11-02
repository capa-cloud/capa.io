---
title: "使用Configuration API"
linkTitle: "使用Configuration API"
date: 2021-10-27
weight: 1
description: >
  使用Configuration API进行应用级配置管理.
---

## 简介

1. CapaConfigurationClient提供的配置能力，需要实现具体的实现类来适配不同的平台(通过继承[CapaConfigStoreSpi](https://github.com/reactivegroup/capa/blob/master/sdk-spi/src/main/java/group/rxcloud/capa/spi/configstore/CapaConfigStoreSpi.java)抽象类)，如示例[DemoCapaConfigStore](https://github.com/reactivegroup/capa/blob/master/sdk-spi-demo/src/main/java/group/rxcloud/capa/spi/demo/configstore/DemoCapaConfigStore.java)

2. 通过spi机制实现对具体实现类的加载。具体配置过程为:在项目resources路径下，新增capa-component.properties文件。

   在文件中新增属性key:"group.rxcloud.capa.component.configstore.CapaConfigStore"，value:"实现类的全路径"。示例如下:

   ```properties
   //capa-component.properties文件
   group.rxcloud.capa.component.configstore.CapaConfigStore=group.rxcloud.capa.spi.demo.configstore.DemoCapaConfigStore
   ```

3. 调用相应Configuration API进行应用级配置管理

## API使用步骤

[Demo示例](https://github.com/reactivegroup/capa/blob/master/examples/src/main/java/group/rxcloud/capa/examples/configuration/DemoConfigurationClient.java)

### 第一步：构建单例Configuration Client

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

### 第二步：通过提供的api对配置进行读/订阅/删除/保存等操作

1. 读配置操作(getConfiguration)

```java
//拿到单例client
private static final CapaConfigurationClient client = CapaConfigurationClientSingleton.getInstance();

//getConfiguration()其中一个重载方法
Mono<List<ConfigurationItem<User>>> configMono = client.getConfiguration(new ConfigurationRequestItem(),TypeRef.get(User.class));

//getConfiguration()另一个重载方法
Mono<List<ConfigurationItem<User>>> configMono = client.getConfiguration("config", 
        SERVICE_APP_ID,
        Lists.newArrayList("test.json"),
        metaDataMap,
        "group",
        "label"
        TypeRef.get(User.class));

//阻塞获取配置结果
List<ConfigurationItem<User>> config = configMono.block();
```

2. 订阅配置操作(subscribeConfiguration)

```java
//subscribeConfiguration()其中一个重载方法
Flux<SubConfigurationResp<User>> configFlux = client.subscribeConfiguration(new ConfigurationRequestItem(),TypeRef.get(User.class))

//subscribeConfiguration()另一个重载方法
Flux<SubConfigurationResp<User>> configFlux = client.subscribeConfiguration("config", 
        SERVICE_APP_ID,
        Lists.newArrayList("test.json"),
        metaDataMap,
        "group",
        "label"
        TypeRef.get(User.class));

//阻塞得到订阅的第一个配置结果
SubConfigurationResp<User> cur = configFlux.blockFirst();
//订阅后续的变更并更新原数据
configFlux.subscribe(resp-> {
	cur.setItems(Lists.newArrayList(resp.getItems()));
});
```

3. 保存配置操作(saveConfiguration)

```java
Mono<Void> configFlux = client.saveConfiguration(new SaveConfigurationRequest());
```

4. 删除配置操作()

```java
Mono<Void> configFlux = client.deleteConfiguration(new ConfigurationRequestItem());
```

**ps:以上api存在重载方法，[点击此处](https://github.com/reactivegroup/cloud-runtimes-jvm/blob/master/cloud-runtimes-api/src/main/java/group/rxcloud/cloudruntimes/client/DefaultCloudRuntimesClient.java)查询全部api列表**