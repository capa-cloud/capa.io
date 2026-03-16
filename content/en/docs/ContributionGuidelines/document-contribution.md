---
title: "Document Contribution Guide"
linkTitle: "Document Contribution Guide"
date: 2021-10-20
weight: 2
description: >
  Guide for contributing to Capa documentation.
---

{{% pageinfo %}}
This document describes how to contribute to the Capa documentation repository. The documentation is written in Markdown syntax and published to [capa-cloud/capa.io](https://github.com/capa-cloud/capa.io).
{{% /pageinfo %}}

## Prerequisites

The Capa documentation repository is built using Hugo with the Docsy theme.

[Documentation Setup Steps](https://github.com/capa-cloud/capa.io/issues/3)

[Documentation Development Steps](https://github.com/capa-cloud/capa.io/issues/4)

## Standards and Conventions

1. Ensure that the files you contribute are in the correct position in the hierarchy.
2. Ensure that your contributed content is consistent in terms of names, parameters, and terminology.
3. Ensure that any contributed content can be successfully built on the website.
4. Ensure that readers can understand why they should care about the contributed content and what problems it can solve for them.

## Document Path Instructions

### File Path Instructions

Files are uniformly placed in the `content/` directory, with Chinese documents stored in `content/zh` and English documents stored in `content/en`.

If you need to add new documents, you must create new folders and .md files according to the directory structure.

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/docs/ContributionGuidelines/contribution_file.png)

### Image Path Instructions

Images are uniformly placed in the `content/images/` directory, with the image directory structure consistent with the directory of the referenced md file. Choose clear images that are compatible with the background.

The document uniformly uses full paths to reference images, with the URL prefix `https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images`.

For example, to include the image below (contribution_file.png), the Markdown syntax is as follows:

```markdown
 ![Architecture](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/docs/ContributionGuidelines/contribution_file.png)
```

- `master` indicates the branch name
- `content/images/zh/docs/ContributionGuidelines/contribution_file.png` indicates the relative path of the image

![](https://raw.githubusercontent.com/capa-cloud/capa.io/master/content/images/zh/docs/ContributionGuidelines/contribution_image.png)
