---
name: smart-commit
description: >-
  Use when you have uncommitted git changes and want to split
  them into logical commits following project rules.
  Triggers when user asks to commit, split changes,
  or organize work into commits.
---

# Smart Commit

## Overview

Split git changes into logical commits following project rules.
Generates a plan for user review before executing.

**REQUIRED:** Reference `.claude/rules/git-commit.mdc`
for commit format rules before generating any commit message.

## Process

1. **Gather context**
   - Read `.claude/rules/git-commit.mdc` for commit format rules
   - Run `git status` to see all changed files
   - Run `git diff HEAD` to see all changes

2. **Analyze and group changes**
   - Group files by logical concern:
     - Same directory/module → same commit
     - Same feature/change type → same commit
     - Configuration/dependency changes → separate commit
   - For each group, determine:
     - **type**: feat | fix | refactor | chore | docs | style
     - **scope/module**: Based on file paths,
       prefer `scope/module` over bare `scope`
     - **description**: Concise lowercase English summary

3. **Present plan**

   Present the proposed commits as a numbered list,
   including file count and file paths for each:

   ```text
   1. [3 files] feat(web/auth): add user list pagination
      - apps/web/src/routes/auth/...
      - apps/web/components/auth/...
      - apps/web/src/hooks/use-users.ts
   ```

4. **Wait for approval**
   - Ask user: "Does this commit plan look good?"
   - Adjust based on feedback
   - Do NOT commit until explicitly approved

5. **Execute commits**
   - For each commit in order:
     1. `git add` the specific files
     2. `git commit -m "type(scope): description"`
   - Run `git status` after all commits to verify

## Commit Order Rules

Commits must be ordered so each one leaves the project in a valid, buildable state:

1. **Plans / specs / documentation** → first
2. **Type definitions / shared utilities** → before consumers
3. **Core logic / data layer** → before consumers
4. **UI components / routes** → after their dependencies
5. **Config / chore changes** → last (or first if unrelated)

When presenting the plan, commits should be numbered in execution order.
If a later commit depends on an earlier one, note the dependency.

## Grouping Heuristics

| Pattern | Group as |
|---------|----------|
| New files in same module | `feat(scope/module): add [feature]` |
| Bug fixes across files | `fix(scope): [description]` |
| Refactoring | `refactor(scope/module): [description]` |
| Dependency updates | `chore(scope): update dependencies` |
| i18n/locale changes | `feat(scope/i18n): [description]` |
| Type definition changes | Group with the feature that needs them |
| Shared utility changes | Group with the feature, or separate |
| Generated files | Group with the route change that triggered them |

## Common Mistakes

- Don't create too many tiny commits - related changes belong together
- Don't mix unrelated changes in one commit
- Don't use bare scope when a module-specific scope applies
- Don't commit until user explicitly approves the plan
