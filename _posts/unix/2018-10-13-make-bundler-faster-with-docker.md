---
title: Make Bundler faster with Docker
image: /assets/img/bundle
categories: 
  - ruby
  - unix
---

Docker is an incredible tool that simplifies developement environemnt setup.
It allows us to configure and save complex environments and their dependencies
in a single image which we can execute at will. Nonetheless we have to configure
our images and bundler is no exception.

Bundler works just fine inside a container. We can bind our project to the
docker container and we can install our gems inside with a simple
**bundle install**. We might do something like this for a jekyll blog:

```yaml
version: '2'

services:
  jekyll:
    image: mycroft1891/jekyll-github
    volumes:
      - .:/site
    ports:
      - '80:4000'

```

> This is my personal image which has ruby, node and yarn installed.
> The image will run bundle install if there is a gemfile in our project.

We can run **docker-compose up** and we will see that for the next 2-5 minutes
bundler is installing our gems. Once bundler is done our blog is ready and
we can create, edit and save our files without going through the whole process
again but our gems are short lived. When we stop our container all the gems are
lost. The next time we run **docker-compose up** we will see that bundler
installs all our gems again.

When we run our container we want bundler to load any previously installed gems
from disk and for that we have to use volumes. Docker allows us to create custom
volumes and it creates volumes we specify in our **docker-compose.yml** by
default. For our purpose we will create a volume to store our gems:

```bash
docker image create ruby_bundle
```

Now we have to bind it to the folder that bundler uses to store gems with our
volume. Bundler installs all the gems in the **$BUNDLER_PATH**:

```bash
docker container run --rm -it ruby:2.5-alpine ash

echo $BUNDLE_PATH
# /usr/local/bundle
```

We can use that path to mount our volume and persist any downloaded gem for
future use. For that we add our named volume to the **docker-compose.yml** file:

```yaml
version: '2'

services:
  jekyll:
    image: mycroft1891/jekyll-github
    volumes:
      - ruby_bundle:/usr/local/bundle
      - .:/site
    ports:
      - '4000:4000'

volumes:
  ruby_bundle:
    external: true
```

> Note that we are setting `external` to true here otherwhise docker would
> create a new volume using the folder and volume name resulting in a name
> like git-blog_ruby_bundle which wouldn't allow us to reuse the volume for
> other containers.

No we can run **docker-compose up** again and we will see that bundler installs our gems again but if we stop the container and run **docker-compose up** again
it loads all the gems from the volume and the startup time is much shorter.

We can also share this named volume with other containers as well.

*Further reading:*

- [Docker Volumes](https://docs.docker.com/compose/compose-file/#volumes)
- [Docker Containers](https://docs.docker.com/engine/reference/commandline/container_run/)
