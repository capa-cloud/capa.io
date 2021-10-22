---
title: "文档贡献指南"
linkTitle: "文档贡献指南"
date: 2021-10-20
weight: 2
description: >
  为Capa文档贡献的指南
---

{{% pageinfo %}}
本文档描述了如何为 Capa 文档库做出贡献。文档库使用 Markdown 语法编写。已发布到 [reactivegroup/capa.io](https://github.com/reactivegroup/capa.io)。
{{% /pageinfo %}}


## 先决条件
Capa 文档库使用 Hugo 的 Docsy 主题构建。

[文档搭建步骤](https://github.com/reactivegroup/capa.io/issues/3)

[文档开发步骤](https://github.com/reactivegroup/capa.io/issues/4)

## 规范约定
1. 确保你所贡献文件在层次结构中的位置是正确的。
2. 确保你所贡献内容在名称、参数、术语方面保持一致。
3. 确保任何贡献内容在 Web 站点可以构建成功。
4. 确保读者能够理解为什么他们应该关注贡献内容，以及能够为他们解决什么问题。

## 文档路径说明
### 文件路径说明
文件统一放在 content/ 目录下，其中中文文档存放于 content/zh ，英文文档存放于 content/en。

如果需要新增文档，需要按照目录结构新增文件夹和.md文件。

![](https://raw.githubusercontent.com/reactivegroup/capa.io/master/content/images/zh/docs/ContributionGuidelines/contribution_file.png)

### 图片路径说明
图片统一放在 content/images/ 目录下，其中图片目录结构与所引用的 md 文件的目录保持一致。需要选用清晰且与背景适配的图片。

文档中统一使用全路径来引用图片，Url前缀 https://raw.githubusercontent.com/reactivegroup/capa.io/master/content/images 。

例如，引入下图的图片（contribution_file.png），Markdown写法如下：

```markdown
 ![Architecture](https://raw.githubusercontent.com/reactivegroup/capa.io/master/content/images/zh/docs/ContributionGuidelines/contribution_file.png)
```
* master 表示分支名
* content/images/zh/docs/ContributionGuidelines/contribution_file.png 表示图片的相对路径

![](https://raw.githubusercontent.com/reactivegroup/capa.io/master/content/images/zh/docs/ContributionGuidelines/contribution_image.png)