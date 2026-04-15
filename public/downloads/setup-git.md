# Setup Git

Initializes a git repository, creates a GitHub remote, and pushes the initial commit.

---

## Prerequisites

- Git installed (`git --version` to check)
- A GitHub account

## Steps

1. Check if a git repo already exists by running `git status`. If not initialized, run:

```
git init
```

2. Stage all files and create the initial commit:

```
git add .
git commit -m "initial project setup"
```

3. Ask the user for their GitHub username. Then instruct them to create a new empty repository at github.com/new (no README, no .gitignore). Ask for the repository name.

4. Connect the remote and push:

```
git remote add origin https://github.com/<USERNAME>/<REPO>.git
git push -u origin main
```

Replace `<USERNAME>` and `<REPO>` with the values the user provided.

5. Confirm the push succeeded by checking `git status` — the branch should be up to date with `origin/main`.
