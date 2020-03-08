---
title: Installing Tor on Linux (Virtual Machine)
image: assets/img/tor
categories: it
---

Tor is free and open-source software for enabling anonymous communication. [...]
Tor directs Internet traffic through a free, worldwide, volunteer overlay
network consisting of more than seven thousand relays to conceal a user's
location and usage from anyone conducting network surveillance or traffic
analysis.

> source [Wikipedia](https://en.wikipedia.org/wiki/Tor_(anonymity_network))

Tor is a fantastic way of staying anonymous. It routes your traffic through
various devices connected to the network. Each node adds a layer of ecryption
making it very tough to track the source of the attack. As a penetration tester,
we can use the Tor network to **torify** our applications so that our attack is
routed through the tor network adding all these layers of encryption and making
our attack anonymous.

On linux, we can install Tor with a single command using the terminal:

```bash
apt-get install tor -y
```

Now, we need to create a user so that we don't navigate as a root user. If we
run Tor with out root user, it can be possible for hackers who find an exploit
in the Tor browser to run malicious code our machine. Therefore, it is a best
practice to create a non-root user. All it takes is to type the command
below and follow the steps:

```bash
adduser test #or whatever you want
```

Then, we have to change to our newly created user. Now, we can download the tor
browser by navigating to the [Tor project](https://torproject.org).

![tor website](/assets/uploads/tor-website.png)

Once we installed the Tor Browser, we can start navigating the dark web. One of
the first things to search for is the **hiddenwiki** which is a place that
archives the onion domains of various usefull websites such as forums.
