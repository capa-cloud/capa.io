---
title: "Design Documents"
linkTitle: "Design Documents"
weight: 4
description: >
  Capa design overview.
---

{{% pageinfo %}}
{{% /pageinfo %}}

## Background

In cross-cloud and hybrid cloud scenarios, we want applications to use **a single codebase** and deploy to different cloud environments. At runtime, use the **cloud-native implementation** provided by the corresponding cloud environment.

## Technical Approach

![api design](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/docs/Concepts/api_design.png)

Define an **API layer that is independent of specific middleware (no strong binding)**, so that applications only depend on this API layer during programming.
This decouples the application itself from specific middleware; then when deployed to different cloud environments, the different cloud implementation layers of the API are loaded into the application process.

