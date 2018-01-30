---
title: How to use Rake Tasks
permalink: how-to-use-rake-tasks
image: /assets/img/rake
categories: ruby
---

When developing Rails apps, it is inevitable to automate processes like submitting sitemaps, removing old records and more. Rake Tasks are the default way of doing it. But what should you do and shouldn't do in your Rake tasks ?

First lets create our rake task:

{%- highlight bash -%}
$ rails generate task our_namespace our_task
{%- endhighlight -%}

The namespace lets us group common tasks under one common name while the task itself is our actual task which should be as specific as possible. Great so we have our task, now lets go over the two most used commands:

{%- highlight bash -%}
# list our rake tasks
$ rake -T

# run our task
$ rake our_task

# run our task without output
$ rake my_task —quiet
{%- endhighlight -%}


## Rake Task Structure

The generated rake file reflects the command we used to generate it:

{%- highlight ruby -%}
namespace :our_namespace do
  desc "Our Rake task description"
  task our_task: :environment do
    # our tasks code goes here
  end
end
{%- endhighlight -%}

- namespace: group common tasks
- desc: describe the task's use
- task: our ruby code to execute

Sometimes we have to execute other tasks before running our task. We can do this by adding a prerequisite array:

{%- highlight ruby -%}
namespace :our_namespace do
  desc "Our Rake task description"
  task our_task: ["run_this", "before_our_task"] do
    # our tasks code goes here
  end
end
{%- endhighlight -%}

Great we can run tasks before running ours but we can also run tasks inside our task:

{%- highlight ruby -%}
namespace :our_namespace do
  desc "Our Rake task description"
  task our_task: :environment do
    puts "Do our task then execute this other task"
    Rake::Task[:run_this].invoke
  end
end
{%- endhighlight -%}


## What we should do in our Tasks

### Use good descriptions
When writing rake tasks it is important to give them a great description because weeks or even months from now our idea is not as clear as it used to be and if we can't decipher our intention who can ?

{%- highlight ruby -%}
desc "Remove posts that are over 3 years old"
task remove_post: :environment do
  Post.where("created_at <= ?", Time.now - 3.years).each do |post|
    post.destroy
  end
end
{%- endhighlight -%}

Plus when we list our tasks, the description shows up right beside our task name:

{%- highlight bash -%}
$ rake -T
rake log:clear                # Truncates all *.log files in log/ ...
rake middleware               # Prints out your Rack middleware stack
rake remove_post              # Remove posts that are over 3 years old
{%- endhighlight -%}


### Use Namespaces
Common tasks should be grouped under a common namespace because once more it makes it clear what we are doing:

{%- highlight ruby -%}
namespace :remove do
  desc "Remove posts that are over 3 years old"
  task old_posts: :environment do
  end
end
{%- endhighlight -%}

### Create folders for each namespace
Create a folder for each namespace and place your tasks inside. Mainly because it becomes very unclear

{%- highlight bash -%}
$ task/
- remove
  |_old_posts.rake
  |_inactive_posts.rake
{%- endhighlight -%}
