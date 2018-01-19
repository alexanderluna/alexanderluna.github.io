---
title: Schedule Tasks with Crontab and Launchd
permalink: schedule-tasks-with-crontab-and-launchd
image: /assets/img/cron
extention: .jpg
---

When we write a lot of scripts we will eventually want to automate some tasks like saving Database backups, scrap a website prodigally, do POST or GET requests to an API, etc. In all this cases we will need a task scheduler. On a Linux system, our easiest and best option is [Crontbab](http://www.adminschoice.com/crontab-quick-reference) and while it is a great option for quickly creating a scheduled task both on Linux and Mac, Apple deprecated it in favor of [launchd](http://www.launchd.info/). This does not mean that we can't use `Crontab` on Mac but downside of `Crontab` is that is assumes you machine is awake and therefor will skip the task until the next time if this is not the case. On the other hand, `launchd` will not run while your Mac is asleep BUT once you wake it up again, it will run.

Nonetheless, both are great and thus we will cover them both. These are the main reason we would want to use `Crontab` over `launchd` :

- It is simpler to setup
- We don't care if the job runs every time, it just should run on a best effort case

## Index:
1. [Crontab](#crontab)
2. [Launchd](#launchd)

# Crontab

As mentioned above Crontab is simpler to setup, it comes already installed all we have to do is add our job to the list which we can access using the `-l` flag:

{% highlight bash %}
$ crontab -l
{% endhighlight %}

This lists all our jobs which currently is probably empty.
In order to add a job we use the `-e` flag:

{% highlight bash %}
$ crontab -e
{% endhighlight %}

This will let us add a job to the list. The default editor on Mac is VIM but don't be afraid. A very quick guide to VIM. When the VIM editor opens:

- Use the `i` key to start insert mode and edit the file
- Use the arrow keys to move around the cursor
- Use the `esc` key to stop editing
- Type `:wq` to write your changes and exit after the `esc` key

Now lets get into the actuall job running:

{% highlight bash %}
$ 1 2 3 4 5  node  my_node_job.js
{% endhighlight %}

Cronjobs let you specify the time by putting your desired times in the right slots as followed (based on the above job):
- 1) minute (0 - 59)
- 2) hour (0 - 23)
- 3) day of month (1 - 31)
- 4) month (1 - 12)
- 5) day of the week (0 - 6)

For example a taks that will run every day at 4pm:

{% highlight bash %}
0 16 * * *  node  my_node_job.js
{% endhighlight %}

If you don't specify a day, month or day of the week, it will run every day. If we take a look at our job list again, we can see our newly created job:

{% highlight bash %}
$ crontab -l
0 16 * * * node  my_node_job.js
{% endhighlight %}

A little extra to note, if we leave the cronjob as it is, we will get an email in our terminal every time it executes which can be a little annoying. The fix is fairly simple, open the job list again and add at the top this line:

{% highlight bash %}
MAILTO=""
0 16 * * *  node  my_node_job.js
{% endhighlight %}

No more email great ^^


# Launchd

While Crontab is a quick solution to for some scripts that don't necessarily have to run every day, sometimes we need something more robust. Sometimes we might be commuting at the time our job should run and as mentioned above, Crontab will skip this job and will not until tomorrow at the same.  Launchd solves this problem for us because it knows we are not always actively using our computer.

In order to create a new job with `Launchd` we have to create our `.plist` file first which is just an `XML` file with some boilerplate XML from [Apple's docs](https://developer.apple.com/library/content/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html). We can create the file using `touch`:

{% highlight bash %}
$ touch ~/Library/LaunchAgents/org.USERNAME.TASK-NAME.plist
{% endhighlight %}

Using the Crontab example, note my username is `Alexander` you have to use yours:

{% highlight bash %}
$ touch ~/Library/LaunchAgents/org.Alexander.my-node-job.plist
{% endhighlight %}

Now we can open it in our favorite editor (mine is atom):

{% highlight bash %}
$ atom ~/Library/LaunchAgents/org.Alexander.my-node-job.plist
{% endhighlight %}

This is the boilerplate XML we need for any job:

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>org.Alexander.my-node-job</string>
    <key>ProgramArguments</key>
    <array>
        <string>/Users/alexander/.nvm/versions/node/v8.4.0/bin/node</string>
        <string>/Users/alexander/Desktop/my-node-job.js</string>
    </array>
</dict>
</plist>
{% endhighlight %}

At this point we have two options to schedule our job:
1. Run it in intervals (every 10 seconds, 1 minute, etc.)
2. Run it a specific times (4pm every day)

If we want to run it in intervals we have to add an interval key to our XML specifying the interval in seconds like this:

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>org.Alexander.my-node-job</string>
    <key>ProgramArguments</key>
    <array>
        <string>/Users/alexander/.nvm/versions/node/v8.4.0/bin/node</string>
        <string>/Users/alexander/Desktop/my-node-job.js</string>
    </array>
    <key>StartInterval</key>
    <integer>60</integer> <!-- 60 seconds or 1 minute -->
</dict>
</plist>
{% endhighlight %}

This would run every 60 seconds. If we want to run our job based on a specific time we exchange the `interval` key for a `calendar interval` key:

{% highlight xml %}
<key>StartCalendarInterval</key>
    <dict>
        <key>Weekday</key>
        <integer>5</integer>
        <key>Hour</key>
        <integer>5</integer>
        <key>Minute</key>
        <integer>5</integer>
    </dict>
{% endhighlight %}

In our case all we want is to specify the hour since we want to run our job every day at the same time:

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <!-- The label should be the same as the filename without the extension -->
    <string>org.Alexander.my-node-job</string>
    <key>ProgramArguments</key>
    <array>
        <string>/Users/alexander/.nvm/versions/node/v8.4.0/bin/node</string>
        <string>/Users/alexander/Desktop/javascript_box/nodejs/cronjob.js</string>
    </array>
    <key>StartCalendarInterval</key>
    <dict>
        <key>Hour</key>
        <integer>16</integer>
    </dict>
</dict>
</plist>
{% endhighlight %}

Great now all that is left is to load our agent (job). Here you have 2 options, you can do it the manual way or use a small tool for this called `lunchy`:

## The Manual way

We have to use `launchctl` to load and start our job (note, replace Alexander with your username):

{% highlight bash %}
$ launchctl load ~/Library/LaunchAgents/org.Alexander.my-node-job.plist
$ launchctl start org.Alexander.my-node-job
{% endhighlight %}


## Using Lunchy

Lunchy is a Ruby gem so we have to install it first like this:

{% highlight bash %}
$ gem install lunchy
{% endhighlight %}

Once it is downloaded we can load our job a little more simply, we don't have to specify a path nor the username just the plist's name:

{% highlight bash %}
$ lunchy restart my-node-job
{% endhighlight %}


Similar to list our jobs:

{% highlight bash %}
$ launchctl list
$ lunchy list
{% endhighlight %}

Finally to stop our Agent:

{% highlight bash %}
$ launchctl stop org.Alexander.my-node-job
$ lunchy stop my-node-job
{% endhighlight %}
