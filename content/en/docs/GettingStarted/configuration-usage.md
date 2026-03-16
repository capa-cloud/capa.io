---
title: "Using Configuration API"
linkTitle: "Using Configuration API"
date: 2021-10-27
weight: 1
description: >
  Using Configuration API for application-level configuration management.
---

## Introduction

1. The configuration capabilities provided by CapaConfigurationClient require concrete implementation classes to adapt to different platforms (by inheriting the [CapaConfigStoreSpi](https://github.com/capa-cloud/capa-java/blob/master/sdk-spi/src/main/java/group/rxcloud/capa/spi/configstore/CapaConfigStoreSpi.java) abstract class), such as the example [DemoCapaConfigStore](https://github.com/capa-cloud/capa-java/blob/master/sdk-spi-demo/src/main/java/group/rxcloud/capa/spi/demo/configstore/DemoCapaConfigStore.java).

2. Loading of the concrete implementation class is achieved through the SPI mechanism. The specific configuration process is: add a capa-component-configuration.properties file under the project's resources path.

   Add a new property key: "group.rxcloud.capa.component.configstore.CapaConfigStore" with value: "full path of the implementation class"; add a new property key: "CONFIGURATION_COMPONENT_STORE_NAME" with value: "config store name". Example:

   ```properties
   //capa-component-configuration.properties file
   group.rxcloud.capa.component.configstore.CapaConfigStore=group.rxcloud.capa.spi.demo.configstore.DemoCapaConfigStore
   CONFIGURATION_COMPONENT_STORE_NAME=DEMO CONFIG
   ```

3. Call the corresponding Configuration API for application-level configuration management.

## API Usage Steps

[Demo Example](https://github.com/capa-cloud/capa-java/blob/master/examples/src/main/java/group/rxcloud/capa/examples/configuration/DemoConfigurationClient.java)

### Step 1: Build a singleton Configuration Client

```java
public final class CapaConfigStoreClientProvider {

    private static volatile CapaConfigurationClient client;

    public static CapaConfigurationClient getClient() {
        if (client == null) {
            synchronized (CapaConfigStoreClientProvider.class) {
                if (client == null) {
                    StoreConfig storeConfig = new StoreConfig();
                    storeConfig.setStoreName(Optional.ofNullable(CapaProperties.COMPONENT_PROPERTIES_SUPPLIER.apply("configuration").getProperty("CONFIGURATION_COMPONENT_STORE_NAME")).orElse("UN_CONFIGURED_STORE_CONFIG_NAME"));
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

### Step 2: Use the provided API to read/subscribe/delete/save configurations

1. Read configuration operation (getConfiguration)

```java
// Get singleton client
private static final CapaConfigurationClient client = CapaConfigStoreClientSingleton.getClient();

// getConfiguration() one of the overloaded methods
Mono<List<ConfigurationItem<User>>> configMono = client.getConfiguration(new ConfigurationRequestItem(), TypeRef.get(User.class));

// getConfiguration() another overloaded method
Mono<List<ConfigurationItem<User>>> configMono = client.getConfiguration("config",
        SERVICE_APP_ID,
        Lists.newArrayList("test.json"),
        metaDataMap,
        "group",
        "label"
        TypeRef.get(User.class));

// Block to get configuration result
List<ConfigurationItem<User>> config = configMono.block();
```

2. Subscribe to configuration operation (subscribeConfiguration)

```java
// Local variable to store configuration
private SubConfigurationResp<String> cur;

// subscribeConfiguration() one of the overloaded methods
Flux<SubConfigurationResp<User>> configFlux = client.subscribeConfiguration(new ConfigurationRequestItem(), TypeRef.get(User.class));

// subscribeConfiguration() another overloaded method
Flux<SubConfigurationResp<User>> configFlux = client.subscribeConfiguration("config",
        SERVICE_APP_ID,
        Lists.newArrayList("test.json"),
        metaDataMap,
        "group",
        "label"
        TypeRef.get(User.class));

// Subscribe to subsequent changes and update original data
configFlux.subscribe(resp -> cur.setItems(resp.getItems()));
```

3. Save configuration operation (saveConfiguration)

```java
Mono<Void> configFlux = client.saveConfiguration(new SaveConfigurationRequest());
```

4. Delete configuration operation (deleteConfiguration)

```java
Mono<Void> configFlux = client.deleteConfiguration(new ConfigurationRequestItem());
```

**Note: The above APIs have overloaded methods. [Click here](https://github.com/capa-cloud/cloud-runtimes-jvm/blob/master/cloud-runtimes-api/src/main/java/group/rxcloud/cloudruntimes/client/DefaultCloudRuntimesClient.java) to view the full API list.**
