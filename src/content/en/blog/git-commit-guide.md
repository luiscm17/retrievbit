---
title: Guide to Git Commit Message Standards
description: Learn about Git commit message conventions, their common types, structure, and how to use them to maintain a clear and consistent project history, facilitating collaboration and maintenance.
date: 2024-07-26
image: "@assets/blog/git-commit-guide.png"
imageAlt: Illustration of Git commit message structure
categories: [Software Development, Version Control]
author: Luis Condori
tags: [Git, Commit, Standards, Conventional Commits, Development]
---

## Introduction: Why Are Standard Commit Messages Important?

In software development, Git is an indispensable tool for version control. However, having a clear and coherent commit history is as crucial as using Git itself. Standardized commit messages, often following conventions like **Conventional Commits**, transform your Git history into a readable and useful narrative.

A good commit message not only describes *what* was changed, but *why* and *what* the impact of that change is. This facilitates team collaboration, debugging, automatic changelog generation, and semantic versioning of your releases. If you've ever wondered about the purpose of an old commit, you'll understand the value of these conventions.

## General Structure of a Commit Message

A standard commit message typically follows a defined structure that enhances its readability and utility:

```bash
\<type\>(\<optional scope\>): \<concise description\>

[blank line]

[optional detailed body]

[blank line]

[optional footer (e.g., issue references, BREAKING CHANGES)]
```

### Key Rules

* **Subject Line (Header):**
  * **Type:** Mandatory. Indicates the nature of the change (e.g., `feat`, `fix`).
  * **Scope (Optional):** Provides context about where the change was made (e.g., `feat(auth)`, `fix(ui)`).
  * **Concise Description:** A brief summary of the change. It must be written in **imperative mood** (as a command: "add", "fix", not "added", "fixed"). It should not end with a period, and its ideal length is up to 50 characters for quick reading.

* **Body (Optional):**
  * Separated from the subject by a blank line.
  * Provides a more detailed explanation of *why* the change was made and *what* it does, not necessarily *how* (that's in the code).
  * It is recommended that lines do not exceed 72 characters for better readability in different Git tools.

* **Footer (Optional):**
  * Separated from the body by a blank line.
  * Used for metadata, such as references to issues (e.g., `Fixes #123`) or to indicate breaking changes (`BREAKING CHANGE: ...`).

---

## Common Commit Types and Their Usage

Here is a list of the most common commit types, their meaning, when to use them, and concrete examples:

### `feat` (feature)

* **Description:** Introduces a **new feature** or capability to the codebase.
* **When to use:** When you add something new that didn't exist before, such as a new page, a user functionality, an API, etc.
* **Example:** `feat: add user login functionality`

### `fix` (fix)

* **Description:** Corrects a **bug** in the code.
* **When to use:** When you resolve a problem that affected the expected behavior of the application or caused a malfunction.
* **Example:** `fix: correct validation error on contact form`

### `refactor` (refactor)

* **Description:** Restructuring or refactoring of code that **does not change external functionality** or fix a bug. It improves internal structure, readability, or maintainability.
* **When to use:** When you reorganize files, rename variables, simplify logic without altering visible behavior.
* **Example:** `refactor: simplify nested loop for data processing`

### `docs` (documentation)

* **Description:** Changes that affect **documentation only**.
* **When to use:** When you update `README` files, in-code comments, usage guides, etc.
* **Example:** `docs: update installation instructions in README`

### `chore` (chore)

* **Description:** Routine maintenance tasks that **do not modify the application's source or test code**, nor fix a bug or add a feature.
* **When to use:** Updating minor dependencies, cleaning temporary files, changes to development tool configurations (ESLint, Prettier), changes to `.gitignore`.
* **Example:** `chore(deps): update npm packages to latest versions`

### `style` (style)

* **Description:** Changes that affect **code style** (formatting, whitespace, semicolons, indentation) without altering logic or behavior.
* **When to use:** When you run a code formatter, fix indentation, remove unnecessary whitespace.
* **Example:** `style: format code according to linting rules`

### `test` (test)

* **Description:** Changes related to **adding, modifying, or deleting tests**.
* **When to use:** When you write new unit tests, integration tests, or correct existing tests.
* **Example:** `test: add unit tests for new authentication module`

### `perf` (performance)

* **Description:** Changes that **improve the application's performance**.
* **When to use:** When you optimize algorithms, reduce bundle size, improve loading speed.
* **Example:** `perf: optimize image loading for faster rendering`

### `build` (build)

* **Description:** Changes that affect the **build system** or external dependencies (e.g., build tools, libraries, versions).
* **When to use:** When you update Webpack or Babel configurations, or add/remove dependencies that affect the build process.
* **Example:** `build: update webpack configuration`

### `ci` (continuous integration)

* **Description:** Changes to **continuous integration** configuration or scripts.
* **When to use:** When you modify CI/CD configuration files (GitHub Actions, GitLab CI, Jenkins).
* **Example:** `ci: add new step to deploy pipeline`

---

## Benefits of Adopting Standards

Adopting these standards in your commit messages brings multiple benefits to your project and your team:

* **Readable Project History:** Makes it easier for any developer to understand the project history, even months later.
* **Facilitates Collaboration:** Team members can quickly grasp the purpose of each change.
* **Automated Changelog Generation:** Tools can automatically generate lists of changes for each new software version.
* **Semantic Versioning:** Commit types like `feat` and `fix` can be used to automatically determine version numbers (e.g., `patch`, `minor`, `major`).
* **Simplified Debugging:** It's easier to find the commit that introduced an error if messages are clear and descriptive.

By integrating these practices into your Git workflow, you will be building a more robust, organized, and maintainable project history.
