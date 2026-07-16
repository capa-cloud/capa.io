---
title: "Versions and Compatibility"
linkTitle: "Versions and Compatibility"
weight: 1
description: >
  Published versions and compatibility boundaries across Capa APIs, SDKs, runtimes, and adapters.
---

{{% pageinfo %}}
Capa API contracts, SDKs, runtimes, and cloud adapters are released independently. Match versions at the integration boundary instead of assuming that every repository shares one version.
{{% /pageinfo %}}

## Current documented versions

| Component | Version or status | Purpose |
| --- | --- | --- |
| [cloud-runtimes-jvm](https://github.com/capa-cloud/cloud-runtimes-jvm) | `1.19.RELEASE` | JVM API contracts and partial runtime adapters |
| [capa-java](https://github.com/capa-cloud/capa-java) | `1.11.13.2.RELEASE` | Java rich SDK |
| [capa-java-aws](https://github.com/capa-cloud/capa-java-aws) | `1.11.13.5.RELEASE` | AWS SPI modules for Capa Java |
| [cloud-runtimes-golang](https://github.com/capa-cloud/cloud-runtimes-golang) | Interface specification | Go API contracts; no bundled runtime implementation |
| [cloud-runtimes-python](https://github.com/capa-cloud/cloud-runtimes-python) | Alpha source API | Install from source until a corrected package is published |
| [capa](https://github.com/capa-cloud/capa) | Experimental | Go sidecar/runtime with a separate implementation roadmap |

## Compatibility rules

1. Use the exact SDK and adapter versions documented by the adapter repository.
2. Confirm that the selected adapter implements every operation used by the application.
3. Treat API presence as a contract definition, not proof of runtime support.
4. Run integration tests against the target middleware or cloud service before production deployment.
5. Review release notes and source changes before upgrading across minor or release-suffix versions.

For Java API types, start with the [`cloud-runtimes-api` source](https://github.com/capa-cloud/cloud-runtimes-jvm/tree/master/cloud-runtimes-api/src/main/java/group/rxcloud/cloudruntimes). For Java SDK usage, use the [capa-java examples](https://github.com/capa-cloud/capa-java/tree/master/examples).
