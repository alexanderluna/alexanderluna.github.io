---
title: Setup phpMyAdmin and MySQL with docker compose
image: assets/img/bundle-docker
categories: unix
---

phpMyAdmin is a great tool for managing MySQL databases and is available as
a docker image. The setup in a docker-compose environment is not as straight
forward as it seems at first sight. That is why I break things down to make it
more managable and easier to understand.

## The Problem

- links are deprecated
- root users require sudo to login
- users work only on localhost

**phpMyAdmin** comes as an image and a look at the documentation is enought to
figure out that the setup is rather simple. You first run a container base off
a MySQL image or MariaDB image and then you run your phpMyAdmin container using
a link to connect both containers. The problem is that **links are deprecated**
and using them inside a docker-compose file will be ignored. Furthermore,
you cannot use the **root** user to login into phpMyAdmin as this requires the
sudo command.

At first glance, we can bypass the problem with the **root** user by creating
a user using the environment variables that phpMyAdmin and MySQL gives to create
a new user but this gives us another problem. A user works only on the localhost
of that container. If you want to log into the MySQL database from the
phpMyAdmin container you are accessing a remote database outside of the localhost
which is why you need to create a user that uses any host.

## Using named Volumes

I use named volumes to persist my databases and share them across different
projects which is why we start by creating one if we don't already have one:

```bash
docker volume create mysqldb
```

## Creating a User with privileges

Now we can create our user with privileges. For that we have to run a MySQL
container to have the MySQL server running and then we have to log into that
MySQL container to create a user:

```bash
docker container run -v mysqldb:/var/lib/mysql \
--environment MYSQL_ROOT_PASSWORD=secret mysql --name mysqlserver

# open a new tab or window
docker container exec -it -v mysqldb:/var/lib/mysql mysqlserver mysql -p

# enter your root password set above as 'secret'
```

Now we are logged into the mysql database and we can create the user. Change
**alexander** to your username and **secret** with your password. The **%**
sign tells MySQL to allow any host with that username to access the database
using the password.

```bash
GRANT ALL PRIVILEGES ON *.* TO 'alexander'@'%' IDENTIFIED BY 'secret';
exit;
```

## Writing the docker-compose file

As we learned earlier links are deprecated but we don't need links to access
our container as long as they are on the same network and docker compose
creates one network and puts all the services in it default:

```docker
version: '3.2'

services:
  db:
    image: mysql
    volumes:
    - mysqldb:/var/lib/mysql
    container_name: db

  phpmyadmin:
    image: phpmyadmin/phpmyadmin
    environment:
      - PMA_HOST=db
      - PMA_USER=alexander
      - PMA_PASSWORD=secret
    ports:
      - 8000:80

volumes:
  mysqldb:
    external: true
```

We specify a service a service for our database and then we pass the host, user
and password to our phpMyAdmin service through the environment variables.