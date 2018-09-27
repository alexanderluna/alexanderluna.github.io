---
title: Learning Docker from scratch
permalink: learning-docker
image: /assets/img/docker
categories: unix
---

Docker has been around for a while and it is an incredible tool to
manage applications environments and ensuring that each application
runs as intended on any system. It has powerful features to scale our
applications and manage multiple instances of it. In this post we will
learn about Docker, its features and how to use it properly.

[Photo by A J on Unsplash]

## Index
1. [Basic Docker Commands](#basic-docker-commands)
2. [Image vs Container](#image-vs-container)
3. [Running Containers](#running-containers)
4. [Docker Network](#docker-network)
5. [Working with Images](#working-with-images)
6. [Understanding Dockerfiles](#understanding-dockerfiles)

## Basic docker commands

```bash
# output docker version of our computer and the docker server
docker version

# detailed information about docker
docker info

# list of available docker commands
docker

# login into docker (create an account first)
docker login

# logout from our docker account on the computer
docker logout
```


## Image vs Container

Docker is build around the concept of images and container but what are
they and how are they different ?

1. An image is the application we want to run (ex. ubuntu)
2. A container is an instance of an image as a process
3. Many containers can run from the same image (blueprint)
4. Prebuild images can be found on docker hub


## Running Containers

In order to run a container we have to have an image from which the
container can run off. For that we can **pull** an image from the
docker hub and then run the conatiner:

```bash
docker pull nginx
docker container run -d -p 80:80 --name myconatinername nginx
```

Here we get the latest version of the **nginx** image and start the
container using the image. The **—publish/-p** flag exposes the our
localhost port to the containers port **localhost:container**. The
first 80 is the local port and the second 80 is the container port. The
**--detach/-d** flag tells docker to run this conatiner in the
background. Finally we can name our container to access it later using
the **--name** flag.

Once we have our container running we play with the container commands:

```bash
# list currently running containers
docker conatainer ls

# list all containers
docker container ls -a

# show logs of our container
docker container logs myconatinername

# view process running inside the container
docker container top myconatinername

# get information about our container
docker container stats myconatinername

# stop our container
docker container stop myconatinername

# remove our container
docker container remove myconatinername
```

> Keep in mind that removing a container doesn't remove the image
> it is based off.


## Running commands inside our Container

We can start a command prompt inside the container by using the **-it**
flag and the **-ai** flag

```bash
# start container with an image and get a command prompt
docker container run -it nginx

# start prompt inside an existing container
docker container start -ai myconatinername

# start prompt inside a running container
docker container exec -it mycontainer
```


## Docker Network

Each container is connected to a private virtual network “bridge” and
each virtual network routes through the NAT Firewall of the host.
All containers within the same virtual network can talk to each other
without having to expose a port.

We can use these network commands to get the network information of our
running containers

```bash
# check port of our running container
docker container port myconatinername

# list our networks
docker network ls

# view which containers are running a network
docker network inspect bridge

# create a network
docker network create my_network_name
docker network create another_network

# specify which network to our container with
docker container run -d -p 80:80 --name webserver --network my_network_name nginx
```

We can attach a network to a container using the connect command and
detach using the disconnect command.
The connect command takes two container names each connected to their
own network and connects the second container to the first container’s
network

```bash
docker network connect my_network_name myconatinername
docker network disconnect my_network_name myconatinername
```

Using a custom network we get automatic DNS resolution. This is very
useful because normally we would have to specify the IP addresses of
each container to access it from another container in the network. The
problem with that is that when we run our container those IP addresses
can change easily and we would have to manually update all those IP
addresses. Instead we can create a network and connect all containers
to that network which allows us to communicate between containers using
their names.


```bash
# create a network
docker network create my_network_name

# run two container on that network
docker container run -d -p 8080:80 --name firstcontainer nginx:alpine --network my_network_name
docker container run -d -p 80:80 --name secondcontainer nginx:alpine --network my_network_name

# communicate on that network
docker container exec -it firstcontainer ping secondcontainer
```

The last line does the actual communication. We are pining our
**secondcontainer** from within our **firstcontainer**.


## Working with Images

An image holds the app binaries and dependencies and the metadata requireed
to run the image. It is not a complete OS because it runs on the same kernel
as the host machine. Docker hub hosts all the images available to the public.
Images come two forms:

- Official: mantained by the creator and Docker Inc.
- Unofficial: mantained by a single person or open source.

> Unofficial images require special attention to the documentation,
> downloads and stars

Image can come in different versions. Docker uses Tags to specify
the image version. Ex. **latest** is the latest version, **stable** is
the latest stable version. It is also possible to use the actual
version number: **nginx:1.11.9**. There are also small light versions
usually build in **alpine**.

Each image is build on different layers. This means that each layer
gets its unique SHA (gets cached) and therefore Docker knows which layers are
already present. That way Docker can safe the space and time required
to recreate that layer.

```bash
# view the history of the image layers
docker image history myimage

# inspect an image (commands, environments, author, architecture, etc.)
docker image inspect myimage
```

Docker images don't have a name but an Image ID. Conveniently we can refer to images using a Tag and a version optionally. We can therefore
create a new tag for images we already have which is useful to create
our own images.

```bash
# download the nginx image
docker pull nginx

# give a new tag to make it our own
docker image tag nginx alexander/nginx

# list all our images
docker image ls

> REPOSITORY          TAG       IMAGE ID        CREATED       SIZE
> alexander/nginx     latest    be1f31be9a87    2 days ago    109MB
> nginx               latest    be1f31be9a87    2 days ago    109MB
```

> Notice that docker recognizes this is a copy of the nginx image and
> therefore assigns it the same **IMAGE ID**.

Now that we have our own image, we can push our new image to our docker repository (if we are logged in).

```bash
docker image push alexander/nginx

# create another tag for our image
docker image tag alexander/nginx alexander/nginx:mynewtag

# push new tag to our repository
docker image push alexander/nginx:mynewtag
```

## Understanding Dockerfiles

A Dockerfile contains all the information required to build a custom image.
This becomes useful as our images become more complex and they are more
convenient than running a long command from the CLI configuring containers.
Dockerfiles use a language specific to just Dockerfiles and looks similar to a
bash script:

```docker
# specify the image we want to use
FROM alpine

# create environment variables for using later
ENV MY_NAME alexander

# specify what to run when the container starts
RUN echo ${MY_NAME}

# specify our working directory
WORKDIR usr/share

# copy from our folder into the container using the WORKDIR
COPY app.js app.js

# specify which ports to expose host:container
EXPOSE 80 433

# last command that runs when starting the container
CMD ["echo", "We are done"]
```

Now that we have a dockerfile we can build our image from it. For that we navigate to the folder where our dockerfile is located first:

```bash
# build image tagging (-t) it with a name
docker image build -t myalpineimage .
```

> Keep in mind the **.** at the end. As it tells docker build it for
> the current directory

The output of this command is important to take note off. We can see that docker generates a SHA for every step we specified. This means that when we change something like the **EXPOSE** port numbers, docker will not run any previous command again since they were cached as we saw earlier. Only from the line we changed until the end docker regenerates SHA keys and executes those commands again. Therefore it helps to keep in mind that docker reads the Dockerfile from top to bottom. That way we can put the commands that change the most further down and the ones that change the least at the top.

```bash
Sending build context to Docker daemon  2.048kB
Step 1/5 : FROM alpine
 ---> 196d12cf6ab1
Step 2/5 : ENV MY_NAME alexander
 ---> Running in 46472daea8c8
Removing intermediate container 46472daea8c8
 ---> 6f7b38a47d57
Step 3/5 : RUN echo ${MY_NAME}
 ---> Running in 34212670be87
alexander
Removing intermediate container 34212670be87
 ---> 0e89f257f4a3
Step 4/5 : EXPOSE 80 433
 ---> Running in 7f8a18ee6623
Removing intermediate container 7f8a18ee6623
 ---> e56821bae325
Step 5/5 : CMD ["echo", "We are done"]
 ---> Running in 82456498a19c
Removing intermediate container 82456498a19c
 ---> e95d785d44ae
Successfully built e95d785d44ae
Successfully tagged myalpine:latest
```

> And right after step 3 we see that the echo commands gets executed.
> The final echo "We are done" doesn't get outputed until we run a
> container from that image.
