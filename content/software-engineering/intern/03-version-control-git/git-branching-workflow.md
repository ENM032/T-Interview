---
id: "swe-int-004"
slug: "git-branching-workflow"
title: "What is Git and how does a collaborative branching workflow work?"
track: "software-engineering"
level: "intern"
category: "03-version-control-git"
categoryLabel: "Git & Version Control"
difficulty: "Beginner"
tags: ["git", "version-control", "collaboration", "ci-cd", "pull-requests"]
order: 4
summary_answer: "Git is a distributed version control system tracking file changes across teams. In a modern Feature Branch / GitHub Flow workflow, developers create isolated topic branches from 'main', commit atomic changes, open Pull Requests for peer review and automated CI tests, and merge back into 'main' upon approval."
key_takeaways:
  - "Distributed vs. Centralized: Every developer holds a full copy of the entire repository history locally."
  - "The 3 States of Git: Working Directory -> Staging Area (`git add`) -> Local Repository (`git commit`) -> Remote Repository (`git push`)."
  - "`git merge` (preserves historical branch structure) vs. `git rebase` (rewrites commit history linearly)."
interview_tips:
  - "Demonstrate understanding of how to resolve merge conflicts calmly: examine conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`), choose correct code, stage, and complete commit."
  - "Emphasize writing clear, atomic commit messages following conventional commit standards (`feat:`, `fix:`, `refactor:`, `test:`)."
common_follow_ups:
  - "What is the difference between `git pull` and `git fetch`?"
  - "What does `git cherry-pick` do, and when is it useful?"
---

## Overview

Version control is mandatory for professional software engineering. Explaining Git workflow fundamentals proves you are ready to collaborate seamlessly within an engineering squad.

```
[ main branch ] ──────────────────────────────────────────●───────> (Production)
                        \                                /
[ feature/login ]        ●──────●──────● (Pull Request) ─┘
```

---

## The Three Git Trees

```
+-------------------------------------------------------------------------------+
|                             The Git Lifecycle                                 |
|                                                                               |
|  [ Working Directory ] ───( git add )───> [ Staging Area (Index) ]            |
|                                                     │                         |
|                                              ( git commit )                   |
|                                                     ▼                         |
|  [ Remote Server (GitHub) ] <──( git push )── [ Local Repository (.git) ]     |
+-------------------------------------------------------------------------------+
```

---

## Standard Feature Branch Workflow

1. **Pull Latest Changes**: Ensure your base branch is up to date:
   ```bash
   git checkout main
   git pull origin main
   ```
2. **Create Feature Branch**:
   ```bash
   git checkout -b feature/auth-jwt-refresh
   ```
3. **Stage and Commit Atomic Work**:
   ```bash
   git add src/auth/jwt.js
   git commit -m "feat(auth): implement rotating refresh token logic"
   ```
4. **Push and Open Pull Request (PR)**:
   ```bash
   git push -u origin feature/auth-jwt-refresh
   ```
5. **Code Review & Automated CI**: Peer engineers review code, automated linters and unit test suites execute.
6. **Merge & Delete Branch**: Merged into `main` and branch is safely deleted.
