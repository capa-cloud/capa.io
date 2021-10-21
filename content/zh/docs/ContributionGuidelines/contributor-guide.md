---
title: "贡献者指南"
linkTitle: "贡献者指南"
date: 2021-10-20
weight: 1
description: >
  为任何Capa项目资源库做出贡献的通用指南
---

{{% pageinfo %}}
Capa 基于 Apache 2.0 许可发布，遵循标准的 Github 开发流程。 本文档描述了如何使用 Github Issue 和 Pull Request 对Capa做出贡献。
{{% /pageinfo %}}

## Issues 约定

1. Question: 提出一个关于 Capa 的问题
2. Feature Request: 提出一个关于 Capa 新功能的请求
3. Bug Report: 提出一个 Bug 的报告
4. Discussion: 对 Capa 的讨论
5. Proposal: 对 Capa 的提案

## 编码规范约定
1. 提交的代码一律要添加 Apache License（可以通过checkstyle插件来检测）
2. 每次只允许提交一个 Commit，如果有多个在本地 Rebase 成一个 Commit
3. 建议一个 Commit 只解决一个 Issue
4. Commit 中要有详细的说明，且一律使用英文来描述
5. CI Pipeline 构建失败的代码不会进入 Code Review 环节
6. 代码仓库有且仅有一个主干分支（master分支）
7. 主干分支上的代码只能通过 Merge PR（MR）向前推进
8. 所有实现的 Feature 都要有完善使用说明文档
9. 仅在 UT 中引用到的 Package 的 Scope 必须是 test
10. 每个问题都要先提交一个Issue

## 单测规范约定
1. 单元测试统一用 junit 和 mockito
2. 遵守AIR原则
   * Automatic（自动化）。单元测试应该是全自动执行的，并且非交互式的。测试用例通常是被定期执行的，执行过程必须完全自动化。
   * Independent（独立性）。保持单元测试的独立性。为了保证单元测试稳定可靠且便于维护，单元测试用例之间决不能互相调用，也不能依赖执行的先后次序。
   * Repeatable（可重复）。单元测试是可以重复执行的，不能受到外界环境的影响。
3. 保持单元测试用例的运行速度，不要将大的集成用例放在单元测试中
4. UT类命名规范 BeTestedClassTest
```
   范例：
   源类的全限定名为 com.api.Matching
   源文件路径 src/main/java/com/api/Matching.java
   UT文件路径 src/test/java/com/api/MatchingTest.java
```
6. UT方法命名规范
```
   范例：
   源方法名为 matching()
   UT方法命名为 testMatching_Success()/testMatching_SuccessWhenResultGreaterThanZero()/testMatching_FailWhenThrowException()
```

## Commit 约定
1. Commit style
```
 <type>(<scope>): <subject>
 <BLANK LINE>
 <body>
 <BLANK LINE>
 <footer>
```
2. Commit type
   * feat: 新增 feature
   * fix：修复 bug
   * docs：仅仅修改了文档，比如 README, CHANGELOG, CONTRIBUTE等等
   * style：仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑
   * refactor：代码重构，没有加新功能或者修复 bug
   * perf：优化相关，比如提升性能、体验
   * test：测试用例，包括单元测试、集成测试等
   * chore：改变构建流程、或者增加依赖库、工具等
   * revert：回滚到上一个版本
3. Commit scope: 提交代码适用的范围（选填）
4. Commit subject：50个字符以内，描述主要变更内容（必填）
5. Commit body：更详细的说明文本，建议72个字符以内（必填）
6. Commit footer：如果需要的化可以添加一个链接到issue地址或者其它文档，或者关闭某个issue（选填）
