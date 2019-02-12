---
title: Git
path: '/git'
description: 'Understand Git and workflow when using GitHub'
---

# Git

![Git Logo](git-logo.png)

## Version Control System

Git is a version control system. A version control system is a piece of software that **helps the developers on a software team work together** and also **archives a complete history of their work**.

There are three basic goals of a version control system:

1. people able to **work simultaneously**, not serially.
1. when people are working at the same time, their changes are **not conflicting each other**.
1. archive **every version of everything** that has ever existed — ever. And who did it. And when. And why.

## Using Git

### Using command line

Open Git Bash and try the following commands.

Change directory

```bash
cd folder
cd folder/subfolder
cd ../
cd ../another-folder/nested-folder
```

Create file

```bash
touch file-name.ext
```

> Note: this is one of the many ways out there

Create directory

```bash
mkdir folder-name
```

Remove file

```bash
rm file-name.ext
rm folder
```

Remove folder and all its contents (!)

```bash
rm -rf folder
```

### Create a new, empty repository

> repository = filesystem \* time

```bash
git init
```

### The three states

Git has three main states that your files can reside in: _committed_, _modified_, and _staged_.

- Committed: the file is safely stored in repository
- Modified: the file is changed but not committed to repository yet
- Staged: the file is marked to go into your next commit snapshot

The diagram below illustrated the 3 states:

![The three states of file in git](file-states-in-git.png)

The basic workflow goes something like this:

1. You modify files in your working tree.
1. You selectively stage just those changes you want to be part of your next commit, which adds only those changes to the staging area.
1. You do a commit, which takes the files as they are in the staging area and stores that snapshot permanently to your Git directory.

To stage your change, we use the following command:

```bash
git add <fileName>
```

To commit all staged files, use the following command:

```bash
git commit -m "<commit message>"
```

To check the current status:

```bash
git status
git status -s
```

### Branching

## Using GitHub

### Create a Repository

### Pulling and Pushing from Repository

### Forking and Pull Request
