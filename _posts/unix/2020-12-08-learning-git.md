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

# list all local branches
git branch

# list all local and remote branches
git branch --all

* master
changing-the-project

# switch to a branch
git checkout changing-the-project

# create and switch to new branch in one step
git checkout -b my-new-branch

# note the asterix marks the current branch
git branch
master
* changing-the-project

# delete a branch
git branch -d changing-the-project
```

> Git does not keep track of empty directories by default. If you want to still
> keep track of them, you have to create an empty `.keep` file in the directory.

Git keeps track of changes in our code thorugh commits as we will see later.
This means that creating a branch is as simple as setting a specific commit as
the branch off point and from there on all commits align on the new branch.
Sometimes, our team might create a branch on the remote repository. Git will not
automatically download and keep track of branches.

```bash
# download and track a remote branch
git checkout --track origin/some-remote-branch

# does the same but shorter
git checkout some-remote-branch
```

> `origin` is the default alias for the location of the remote repository.

```bash
# show where origin is location on the web
git remote -v
```

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

# show only the 3 latest commits
git log -3

# show logs in a compact view
git log --oneline

# show previous commits with acutual difference between commits
git log -p

# show a graphical reprensentation of the log
git log --graph

# show complete history
git log --online --all

# search git log by author
git log --author=alexanderluna --oneline

# search git log thorugh grep
git log --grep=searchterm --oneline
```

## Undoing Staged changes

Prior to commiting our changes, we have to add them to the staging area. The
benefit of adding this extra step, is that we can undo any changes.

```bash
# undo changes to README.md
git reset HEAD README.md
```

## Merging

Once we are done with our branch and commited our changes, we use merge to
combine our changes with those of other branches. Usually we have a master
branch which acts as the main development line and developers will branch off
master to introduce changes.

```bash
# create a branch, do a change and commit it
git checkout new-change -b
touch README.md
git add README.md
git commit -m "Add README.md"

# switch back to master and merge the branch
git checkout master
git merge new-change
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

## Ignoring files

While most of the time we want to keep track of all changes, it so happens that
certain files should be kept secret, some folders can be easily reproduced and
sometimes the files/folders are simply too big. Thus, we can tell git to ignore
certain files using the `.gitignore` file. Inside of it, we can list files and
folders we don't want git to track. The power and convenienc of `.gitignore` is
that we can use pattern matching to selectivly choose which files to track.
Maybe we don't want to track html files inside a folder but everything else. We
can tell git to ignore html files inside a particular folder with a simple
pattern: `folder/*.html`.

```bash
# ignore all html files
*.html

# ignore html files in tmp folder
tmp/*.html

# ignore html files in all folders but track root level html files
*/*.html
```

It is even possible to nest `.gitignore` files in our poject. This allows us to
negate exlusions on a folder by folder basis if we want or we can create very
complex ignore conditions. If there are certain files we want to ignore always,
we can use the global `.gitignore` which will apply to all projects.

```bash
# returns globaly ignored files unless empty
git config --global core.excludesfile

# create global gitignore file
touch ~/.gitignore_global

# configure git to use the global gitignore file
git config --global core.excludesfile ~/.gitignore_global
```

## Staying in sync with the cloud

A big part of collaboration is to keep our changes in sync with the cloud. After
commiting our changes locally, we have to thus push our changes to the cloud.

```bash
# send our master branch to the origin (remote repository)
git push origin master
```

Similar to pushing changes to the cloud we also have to sometimes pull changes
from the cloud. Perhaps a collaborator contributed some commits.

```bash
# fetch changes from origin
git fetch

# merge the fetched changes
git merge

# fetch and merge changes from origin (remote repository) in one step
git pull origin
```

## Pull Request

Assuming we created a fork of an existing remote repository, this means our
repository has changes the original does not have. We can contribute our changes
to the original remote repository by creating a pull request. This notifies the
owner of the repository that you want to contribute your changes to the original
repository. The owner can then merge or reject our pull request.

## Creating a Repository First

In order to work with git, we don't a cloud to begin with. Instead we can start
by creating an empty git repository locally and setup everything as we progress.

```bash
git init
```

Two common starting points for any repository are the license file and a
`README.md`. The license file communicates to our developers how you want them
to interact with your project while the README is there to give details about
the project itself and how to use it, configure it, etc. Once we are ready to
connect our local repository to the cloud, we can go ahead and create a remote
repository. Instead of cloning the remote repository, we want to add the remote
repository to our local one.

```bash
# add an origin (remote repository)
git remote add origin https://github.com/some-repo.git

# push our changes to the origin
# -u stands for --push-upstream or track local branches to remote ones
git push -u origin master
```
