---
title: Learning Git
image: /assets/img/bundle-docker
categories: unix
---

Git is a powerful tool that lets you keep track of your code. It allows us to
go back, revisit, fork, branch and merge changes and thus it is incredibly
versatile.

## Clone

At the core of git is a remote repository or place where you save your files. It
can be local on your computer or in the cloud like Github/Bitbucket. If you want
to contribute or branch off an existing repository you can fork the remote
repository or clone it to get a copy on our machine.

```bash
# download a copy
git clone https://github.com/some-project.git

# navigate into the folder
cd some-project
```

## Branch off

Once you have a copy you can start editing right away. However, you can also
create a branch which is a copy of the original. But why ? It turns out that
making changes can introduce unwanted bugs and a branch allows us to quickly
discard, rollback or merge changes once we are satisfied similar to creating a
draft.

```bash
# create a new branch
git branch changing-the-project

# list all branches
git branch

* master
changing-the-project

# switch to a branch
git checkout changing-the-project

# note the asterix marks the current branch
git branch
master
* changing-the-project
```

> Git does not keep track of empty directories by default. If you want to still
> keep track of them, you have to create an empty `.keep` file in the directory.

## Commit changes

Now we can make changes to our repository. We can create files, edit and delete
them as needed. Git will keep track of everything we do but it will not
automatiacally sync everything with the remote repository. This means we have to
manually tell git which changes we want to send to the remote repository. First,
we add our changes which moves our changes into a staging area. At this point,
we still can revert changes and unstage our changes. Next, we commit our changes
locally. This will update the local repository but no the remote repository.
Finally, we push our commit to update the remote repository.

```bash
# create a readme.md file
touch README.md

## visualize current changes
git status

# tell git to add the README.md
git add README.md

# commit our change with a message to remind us what the change did
git commit -m "Add a REAMDE.md file"

# push the commit and update the remote repository
git push
```

## Keeping track of changes

Git has a build in command to keep track of previous commits through a log.

```bash
# show previous commits
git log

## show previous commits with acutual difference between commits
git log -p
```

## Undoing Staged changes

Prior to commiting our changes, we have to add them to the staging area. The
benefit of adding this extra step, is that we can undo any changes.

```bash
# undo changes to README.md
git reset HEAD README.md
```

## Moving and Deleting files

While it is possible to move files in a git repository using the bash `mv`
command or the GUI, this will result in unexpected behavior. Git only knows of
paths, thus git will think we have removed and added a file instead. Instead,
we want git to keep track of changes despite moving the files. Therefor, git has
its own `mv` command.

```bash
# move README.md into new_folder
git mv README.md new_folder
```

Similar to moving files, we can delete files by manually remove files using the
`rm` command or the build in `git rm` command. `rm` will remove the file, prompt
us to stage the change and finally commit our change. `git rm` on the other
hand, will automatically remove and stage the change in one command ready to be
commited.

## Pull Request

Assuming we created a fork of an existing remote repository, this means our
repository has changes the original does not have. We can contribute our changes
to the original remote repository by creating a pull request. This notifies the
owner of the repository that you want to contribute your changes to the original
repository. The owner can then merge or reject our pull request.
