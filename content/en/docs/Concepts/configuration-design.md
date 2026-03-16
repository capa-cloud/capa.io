---
title: "Configuration Service Invocation"
linkTitle: "Configuration Service Invocation"
date: 2021-10-15
description: >
  Perform application-level configuration management.
---

## Introduction

Manage application-level configuration by calling the Capa SDK API. The underlying implementation uses SPI to register adapter implementations for various platforms.

## Invocation Logic

The following diagram shows the Capa Configuration service invocation logic:

![Configuration](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/docs/Concepts/Configuration/configuration.png)

- Service (appid:A): the service invoker, CloudX Configuration Service is the service being invoked, which can be any cloud vendor's configuration service
- Service (appid:A) initiates a service call to the Cloud Configuration Service through the Capa SDK
- Capa Configuration API is a unified API specification
- Capa-CloudX Configuration Adaptor SDK is Capa's adapter implementation class, registered via SPI
- CloudX Configuration Service provides the actual configuration service

## API Design

The design of the Capa Configuration API follows community standards:

- [Layotto API](https://github.com/mosn/layotto/blob/main/spec/proto/runtime/v1/runtime.proto)
- [Capa Configuration API](https://github.com/capa-cloud/cloud-runtimes-jvm/blob/master/cloud-runtimes-api/src/main/java/group/rxcloud/cloudruntimes/domain/core/ConfigurationRuntimes.java)

The meanings of specific parameters are as follows:

| Parameter | Meaning |
|-----------|---------|
| storeName | Storage name |
| appId | Unique service ID within the same namespace |
| keys | List of configuration keys |
| metadata | Metadata for sending configuration requests |
| group | Configuration group (Optional) |
| label | Configuration label (Optional) |
| type | The specific type corresponding to the generic in the request response object |
| [ConfigurationRequestItem](https://github.com/capa-cloud/cloud-runtimes-jvm/blob/master/cloud-runtimes-api/src/main/java/group/rxcloud/cloudruntimes/domain/core/configuration/ConfigurationRequestItem.java) | Request object |
| [ConfigurationItem](https://github.com/capa-cloud/cloud-runtimes-jvm/blob/master/cloud-runtimes-api/src/main/java/group/rxcloud/cloudruntimes/domain/core/configuration/ConfigurationItem.java) | Response object for getting configuration |
| [SubConfigurationResp](https://github.com/capa-cloud/cloud-runtimes-jvm/blob/master/cloud-runtimes-api/src/main/java/group/rxcloud/cloudruntimes/domain/core/configuration/SubConfigurationResp.java) | Response object for subscribing to configuration |
