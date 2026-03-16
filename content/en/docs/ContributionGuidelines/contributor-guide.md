---
title: "Contributor Guide"
linkTitle: "Contributor Guide"
date: 2021-10-20
weight: 1
description: >
  General guidelines for contributing to any Capa project repository.
---

{{% pageinfo %}}
Capa is released under the Apache 2.0 license and follows the standard GitHub development process. This document describes how to contribute to Capa using GitHub Issues and Pull Requests.
{{% /pageinfo %}}

## Issue Conventions

1. **Question**: Ask a question about Capa
2. **Feature Request**: Request a new feature for Capa
3. **Bug Report**: Report a bug in Capa
4. **Discussion**: Discuss Capa-related topics
5. **Proposal**: Propose changes or enhancements to Capa

## Coding Standards

1. All submitted code must include the Apache License (can be detected via checkstyle plugin)
2. Only one commit is allowed per submission; if there are multiple, rebase them into a single commit locally
3. It is recommended that one commit should only resolve one issue
4. Commits must include detailed descriptions, all written in English
5. Code that fails the CI Pipeline build will not enter the Code Review stage
6. The repository has only one main branch (master branch)
7. Code on the main branch can only be advanced through Merge PR (MR)
8. All implemented features must have complete usage documentation
9. Packages referenced only in UT must have test scope
10. Each issue must first have an Issue submitted

## Unit Testing Standards

1. Unit tests should use JUnit and Mockito
2. Follow the AIR principles:
   - **Automatic**: Unit tests should be fully automated and non-interactive. Test cases are usually executed regularly and must be completely automated.
   - **Independent**: Keep unit tests independent. To ensure unit tests are stable, reliable, and easy to maintain, unit test cases must never call each other or depend on execution order.
   - **Repeatable**: Unit tests should be repeatable and not affected by external environments.
3. Keep unit test cases running fast; don't put large integration test cases in unit tests
4. UT class naming convention: `BeTestedClassTest`
```
   Example:
   Source class full name: com.api.Matching
   Source file path: src/main/java/com/api/Matching.java
   UT file path: src/test/java/com/api/MatchingTest.java
```
6. UT method naming convention:
```
   Example:
   Source method name: matching()
   UT method name: testMatching_Success() / testMatching_SuccessWhenResultGreaterThanZero() / testMatching_FailWhenThrowException()
```

## Commit Conventions

1. Commit style:
```
 <type>(<scope>): <subject>
 <BLANK LINE>
 <body>
 <BLANK LINE>
 <footer>
```
2. Commit type:
   - **feat**: New feature
   - **fix**: Bug fix
   - **docs**: Documentation changes only, such as README, CHANGELOG, CONTRIBUTE, etc.
   - **style**: Formatting changes only, such as spaces, indentation, commas, etc., without changing code logic
   - **refactor**: Code refactoring, without adding new features or fixing bugs
   - **perf**: Performance optimization, such as improving performance or experience
   - **test**: Test cases, including unit tests, integration tests, etc.
   - **chore**: Changes to build process, or adding dependencies, tools, etc.
   - **revert**: Revert to the previous version
3. **Commit scope**: The scope of the submitted code (optional)
4. **Commit subject**: Within 50 characters, describing the main changes (required)
5. **Commit body**: More detailed description, recommended within 72 characters (required)
6. **Commit footer**: If needed, can add a link to the issue address or other documents, or close an issue (optional)
