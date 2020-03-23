---
title: Understanding and changing MAC addresses on Linux
image: /assets/img/mac-address
categories: it
---

The mac address is the address (identification) of the network/wireless card
and it can be used to indentify us. A typical address looks like this:
**08:00:27:03:5a:75**. The first 3 sets **08:00:27** represent the manufacturer
of the card. The second set of 3 is created by the manufecturer and doesn't
mean anything in particular.

The mac address is only accessible from the local network. It can be used to
restrict access or identify our computer. The good news is that its possible to
change our mac address either manually or with a software.

In order to see our wifi card's mac address we can use the **ifconfig** command:

```bash
ifconfig

en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
  options=400<CHANNEL_IO>
  ether 08:00:27:03:5a:75
  ...
p2p0: flags=8843<UP,BROADCAST,RUNNING,SIMPLEX,MULTICAST> mtu 2304
  options=400<CHANNEL_IO>
  ether 0a:66:7f:37:18:cf
  ...
```

We can use **macchanger** to:

- change our mac address to a specific mac address
- randomly change our mac address
- show our mac address

> if the the macchanger command doesn't work or gives you an error make sure
> you are running it as root and that the interface is down.

```bash
# show mac address with macchanger
macchanger --show en0
Current MAC: 08:00:27:03:5a:75
Permanent MAC: 08:00:27:03:5a:75

# change mac address with macchanger
# use --random, --mac or --another
macchanger --mac 08:00:27:03:5a:ff
```

Macchanger also has a list of known mac addresses from different vendors
which comes in very handy when you need to pretend having a specifics vendor's
network card.

```bash
# display mac addresses from various vendors
macchanger -l
```
