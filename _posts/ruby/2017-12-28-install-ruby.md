---
title: Installing Ruby the right way
image: "/assets/img/ruby"
extention: ".png"
categories: ruby
---

> This tutorial is geared toward MacOS users

Index:

- [Install Xcode Command Line Tools](#install-xcode-command-line-tools)
- [Install Homebrew](#install-homebrew)
  - [What is Homebrew ?](#what-is-homebrew-)
- [Install RBENV](#install-rbenv)
- [Install Ruby](#install-ruby)


## Install Xcode Command Line Tools

Our first step is to install the Xcode CLT, for that open Terminal:

{% highlight bash %}

$ xcode-select --install

{% endhighlight %}


## Install Homebrew

Now we are ready to install homebrew.

### What is [Homebrew](https://brew.sh/) ?
- The missing package manager for macOS
- You can install pretty much everything need with it (ruby, python, libraries, etc.)
- You can easily update everything you install and uninstall as well

> Installing anything from the internet is always a little risky and
> I recommend going to the Homebrew website self to copy the installation command (link aboves)


{% highlight bash %}

$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

{% endhighlight %}

## Install RBENV
Now we are ready to install rbenv which is a package that lets us install any ruby version and multiple versions which is going to be essential as you develope more apps using Ruby similar to Python's `pipenv/pyenv` and Node's `nvm`.

Important to know: rbenv not only installs ruby versions but creates also seperate folders for each which means that you can mantain ruby versions with all their gems instact. You are going to appreciate it a lot espcially when you start migrating apps from older ruby versions.

{% highlight bash %}

$ brew update
$ brew install rbenv ruby-build

{% endhighlight %}

I had some problems installing things with Homebrew since the update to MacOS High Sierra. It seems that High Sierra changed the permissions of the folder where Homebrew installs everything. I posted a solution on Stackoverflow if you get any errors: [Installation Problem with Homebrew](https://stackoverflow.com/questions/47255517/brew-install-python3-didnt-install-pip3/47256280?noredirect=1#comment81516144_47256280)

All that is left now, is to add the rbenv command to our `~/.bash_profile` or `~/.bashrc` file to make the `rbenv` command available.

{% highlight bash %}

$ echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
$ source ~/.bash_profile

{% endhighlight %}


## Install Ruby

It took us some work but we are now ready to install any version we want using the `rbenv` command:

{% highlight bash %}

$ rbenv install 2.4.1
$ rbenv global 2.4.1
$ ruby -v

{% endhighlight %}

The beauty of `rbenv` is that you can set a global version of `ruby` that you want to use but also a local version. You can navigate to any folder and set a ruby version that only applies to that folder. Once again, this is very useful as you start developing more apps using different ruby versions and updating your projects. ex:

{% highlight bash %}

$ rbenv install 2.3.0
$ cd ~/Desktop

$ rbenv local 2.3.0
$ ruby -v

{% endhighlight %}

Now when you navigate to your `Desktop` folder, you use ruby version `2.3.0` and all the other folders outside your `Desktop` still use ruby version `2.4.1`. If you don't want to have a local version anymore change back and use the unset flag like this:

{% highlight bash %}

$ cd ~/Desktop
$ ruby -v # currently 2.3.0 due to local set

$ rbenv --unset
$ ruby -v # removed local and now have 2.4.1 again

{% endhighlight %}

Furthermore, sometimes you just want to test a new feature in another ruby version. You can do this by setting the ruby version just for your shell session. In other words, the ruby version will be set only while you have your terminal window open:

{% highlight bash %}

$ rbenv install 2.3.0
$ cd ~/Desktop
$ ruby -v # currently 2.4.0

$ rbenv shell 2.3.0
$ ruby -v # now 2.3.0

{% endhighlight %}

If you close your terminal window, your ruby version goes back to `2.4.1`

You can read much more about `rbenv` at their [github repo](https://github.com/rbenv/rbenv#how-it-works)