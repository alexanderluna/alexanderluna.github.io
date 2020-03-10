---
title: Learning enough UNIX to get things done
image: /assets/img/unix
categories: unix
---

Awww the good old shell. These days it doesn't matter what you are doing, the UNIX shell is always around. Wether we work as web developers, iOS developers, Android developers, Data Scientists. At some point we will have to use it.

The first time I saw that shell prompt I found it intimidating. First of all, you can't move freely around, you have to use your arrow keys. Secondly, you can only work line by line which means if you break something it can be hard to redo things, especially when you delete things (thats why we have Graphical User Interfaces).

While there seem to be a bazillion UNIX commands and combinations, there are really just a few which everyone should know to get around. The rest, one should learn based on specific needs. And even tho opening a shell window might seem tedious at first, soon it will become your preferred way of working with your computer.

# The most Basic UNIX Commands

Ok so enough talking, lets tackle the problem, learning UNIX commands. Among the most used one's for everyday tasks are these commands:

- ls (list items in directory)
- cd (change directory)
- pwd (show current directory)
- touch (create empty file)
- grep (search output)
- cat (print file content)

## ls command
The `ls` command is used to list items in a directory. You can simply type it and it will show you the files but not the ones that begin with a dot `.git` for example. Usually you want to use it with a flag or a combination of flags. You can take a look at the man page and read more about the different flags you can use but I like using these 4 flags:

{%- highlight bash -%}
$ ls -lahG
total 96
drwxr-xr-x  13 alexander  staff   416B Jan 24 17:56 .
drwxr-xr-x  19 alexander  staff   608B Feb  2 20:33 ..
-rw-r--r--@  1 alexander  staff   6.0K Jan 23 00:11 .DS_Store
drwxr-xr-x  13 alexander  staff   416B Feb  5 17:27 .git
-rw-r--r--   1 alexander  staff    10B Jan 20 23:08 .gitignore
-rw-r--r--   1 alexander  staff    20B Jan 20 23:14 README.md
drwxr-xr-x   3 alexander  staff    96B Jan 20 17:01 css
drwxr-xr-x  34 alexander  staff   1.1K Jan 23 03:57 img
-rw-r--r--   1 alexander  staff    12K Jan 24 18:48 index.amp.html
-rw-r--r--   1 alexander  staff    11K Jan 31 20:44 index.html
drwxr-xr-x   3 alexander  staff    96B Jan 22 05:20 js
-rw-r--r--   1 alexander  staff   304B Jan 22 23:20 manifest.json
-rw-r--r--   1 alexander  staff   2.0K Jan 27 16:25 sw.js
{%- endhighlight -%}

Every file that starts with a `d` on ther very left `drwxr-xr-x` is a directory/folder. This might look funny all this shows us is the permissions of the given file/folder. Every computer has 3 users:

- root (owner)
- group
- public

The whole string is divided actually into 3 pieces `drwxr-xr-x`. The leading `d` tells us this is a directory so we can ignore it for now but for the rest:

- `rwx`: root (owner)
- `r-x`: group
- `r-x`: public

Everyone has 3 possible permissions: `rwx`

- r stands for read
- w stands for write
- x stands for execute

We can see that we as the owner have the right to read, write and execute our directory but groups and public users, can only read and execute. They would need our permission to write to our directory. PS: a `-` means that they don't have that permission. In case you are wondering, you can change the permissions of any file if you are the owner or know the owner's password, more on that later. Now to the flags of `ls`:

- -l => list long format (more details)
- -a => include dot file (`.git`)
- -h => unit suffix (Kb, Mb, etc.)
- -G => colorized output

A special word about the `-G` flag. It colorizes your output and while it look nice the main reason you want to use it is to make your life easier. Using this option will color dot files, directories, executables, normal files, etc. You can see at a glance which files are what. It makes it much easier to find what you are looking for but we will also take a look at built in search command a little later.


## cd command
The UNIX filesystem is the same as the GUI you are used to. You can navigate from folder to folder do you your job like spinning up a web server, create some files, run a script, etc. In order to make this all happen you must be able to move inside the filesystem and for that we have `cd`. This command takes a path to tell UNIX where you want to go. Assuming we are currently in our desktop and we `ls` our current files directories:

{%- highlight bash -%}
$ ls -lahG
drwxr-xr-x  13 alexander  staff   416B Jan 24 17:56 .
drwxr-xr-x  19 alexander  staff   608B Feb  2 20:33 ..
drwxr-xr-x  13 alexander  staff   416B Feb  5 17:27 projects
-rw-r--r--   1 alexander  staff    10B Jan 20 23:08 random_text.txt
-rw-r--r--   1 alexander  staff    20B Jan 20 23:14 my-book.pdf
drwxr-xr-x   3 alexander  staff    96B Jan 20 17:01 work
{%- endhighlight -%}

We can see there are 2 folders: `projects` and `work`. We can use `cd` to move into any of those folder like this:

{%- highlight bash -%}
$ cd projects/
{%- endhighlight -%}

Now we are in the projects folder. What about getting out of there ?

{%- highlight bash -%}
$ cd ../
{%- endhighlight -%}

Now we are back in our Desktop. We can actually chain this an navigate much quicker using the tab key to let UNIX autocomplete the folder. Assuming in our `projects` folder there is a `build` folder and inside the `build` folder there is a `src` folder we can navigate from our desktop fairly quick into that folder:

{%- highlight bash -%}
$ cd projects/build/src
{%- endhighlight -%}

Now we are 3 folders deep. We can get back to our Desktop in a similar way as before:

{%- highlight bash -%}
$ cd ../../../
{%- endhighlight -%}

We went 3 folders deep so we have to go 3 times up again. It is quite simple and with a little practice with the tab key, you can get around faster than with the build in GUI.

# pwd command
This is a very simple command you can use to know where you are right now. Unlike in the Graphical User Interface where you can see the current folder names, in UNIX you navigating the same structure without that guidance. `pwd` will tell you quickly where you are:

{%- highlight bash -%}
$ pwd
/Users/alexander/Desktop/project

$ cd Desktop/projects/build/src
$ pwd
/Users/alexander/Desktop/projects/build/src
{%- endhighlight -%}

## touch command
This is yet another simple command. You can use it to create empty files quickly like this:

{%- highlight bash -%}
$ touch my-file.txt
$ ls -lahG
-rw-r--r--   1 alexander  staff    10B Jan 20 23:08 my-file.txt
{%- endhighlight -%}

This makes file creation a breeze and you can then open your file in any editor you like after it like this:

{%- highlight bash -%}
$ atom my-file.txt
{%- endhighlight -%}

This will open the file in my atom editor. If you have other programs such as Text Edit, Sublime, VIM, Nano, VS, etc. You can use those as well.


## cat command
A lot of times we will want to take a look at the contents of a file but not necessarily leave our shell just for that or maybe we don't have even a GUI like when we are using SSH. The `cat` outputs the content of the file we specify. Assuming we have a `my-file.txt` file and inside is just the string `hello there`:

{%- highlight bash -%}
$ cat my-file.txt
hello there
{%- endhighlight -%}

As you can see, very simple and useful


## grep command
When we list files (ls) or look into files (cat), depending on our project or file structure we can have a lot of files and if we remember parts of the file name or keywords we are looking for we can speed things up a lot using `grep`. This command lets us search the output of our previous command using a pipe `|`. Back to our `ls` example:

{%- highlight bash -%}
$ ls -lahG
total 96
drwxr-xr-x  13 alexander  staff   416B Jan 24 17:56 .
drwxr-xr-x  19 alexander  staff   608B Feb  2 20:33 ..
-rw-r--r--@  1 alexander  staff   6.0K Jan 23 00:11 .DS_Store
drwxr-xr-x  13 alexander  staff   416B Feb  5 17:27 .git
-rw-r--r--   1 alexander  staff    10B Jan 20 23:08 .gitignore
-rw-r--r--   1 alexander  staff    20B Jan 20 23:14 README.md
drwxr-xr-x   3 alexander  staff    96B Jan 20 17:01 css
drwxr-xr-x  34 alexander  staff   1.1K Jan 23 03:57 img
-rw-r--r--   1 alexander  staff    12K Jan 24 18:48 index.amp.html
-rw-r--r--   1 alexander  staff    11K Jan 31 20:44 index.html
drwxr-xr-x   3 alexander  staff    96B Jan 22 05:20 js
-rw-r--r--   1 alexander  staff   304B Jan 22 23:20 manifest.json
-rw-r--r--   1 alexander  staff   2.0K Jan 27 16:25 sw.js
{%- endhighlight -%}

We have 11 files now. If we are looking for our `README.md` we can use grep like this:

{%- highlight bash -%}
$ ls -lahG | grep read -i
-rw-r--r--   1 alexander  staff    20B Jan 20 23:14 README.md
{%- endhighlight -%}

And it reduces the output. We can do the same with `cat`:

{%- highlight bash -%}
$ cat sw.js | grep fetch -i
self.addEventListener('fetch', function(event) {
      return response || fetch(event.request);
{%- endhighlight -%}

Once again it reduces the 150 lines of code inside the `sw.js` down to just 2 where grep found the word `fetch`. If you use `grep --color=always` it will even highlight the word you are looking for.


## cat command
Out of all the commands, the cat is probably the easiest to use. It's job is to output the content of any file. Personally, this commands very handy when you want to quickly check the content of a file. Just type the command followed by the file name:

{%- highlight bash -%}
$ cat package.json
{%- endhighlight -%}
