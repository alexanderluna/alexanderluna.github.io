---
title: Configuring Proxychains on Linux (Virtual Machine)
image: assets/img/chain
categories: it
---

A proxy server is a server application or appliance that acts as an
intermediary for requests from clients seeking resources from servers that
provide those resources

> source [Wikipedia](https://en.wikipedia.org/wiki/Proxy_server)

We have to mainly do some configurations to work with proxychains on linux:

```bash
nano /etc/proxychains.conf
```

When working with proxies we have different protocols at our disposal:

- HTTP: HTTP only and not very secure
- SOCKS4: doesn't support IPv6 nor UDP
- SOCKS5: the most secure option

Furthermore, we can use different policies:

- dynamic_chain: proxies from a list and skips the ones that are unavailable
- strict_chain: proxies from a list but all have to be online or it brakes
- random_chain: changes the proxy for each package - very slow.

As we can see, **dynamic_chain** is what we want as its the most robust option.
So comment the **strict_chain** and uncomment the **dynamic_chain** from the
config file.

Among the configurations, we have to make sure the **proxy_dns** configuration
is uncommented as this prevents the DNS from leaking. When we access the web our
local ISP accesses a local DNS server to find the IP of the site we are
requesting which will expose the DNS server information. While they can't find
our IP address directly it is possible to figure out our location through our
local DNS server.

Now we can start adding proxies to our list inside the config:

```bash
# format
# TYPE  HOST  PORT  USER  PASSWORD
socks5  127.0.0.1  9050
```

We can now see the current status of tor in the terminal and check our
connection:

```bash
# check status
service tor status

# start tor
service tor start

# check connection
proxychains firefox www.ecosia.org

# use proxychains for anything (nmap, firefox, etc.)
proxychains programName
```

We are ready to add proxies to our proxychain now. A simple search for free
proxies will give us a lot of sites that host large lists of proxies which we
can copy/paste into our configuration file at the bottom following the specified
format. Its important to keep in mind that the more proxies we add to our
proxychains the slower our connection will be. A good number is between 2-5.
