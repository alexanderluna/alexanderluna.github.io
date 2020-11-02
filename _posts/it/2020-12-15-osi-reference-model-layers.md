---
title: The OSI reference model layers
image: /assets/img/cleancode
categories:
  - books
  - it
---

As we know from the OSI reference model, each layer has characteristics and
protocols. The lowest layer is layer 1 or the physical layer. It defines network
hardware specifications. Technologies in this layer perform data encoding,
signaling transmission and reception functions and is related therefor to the
data link layer.

The data link layer is the second layer and most LAN/WLAN technologies are
defined here. The layer is responsible for logical link control
(devices connections), media access control (network access control), hardware
addressing and error detection. The layer is divided into two sub-layers:

- LLC (logical link control)
- MAC (media access control)

The most common protocols that operate on this layer are IEEE 802.2, IEEE 802.11
and Ethernet.

The network layer is the third layer responsible for linking together individual
networks into internetworks. This layer does this by internetwork-level
addressing (IP), routing, datagram encapsulation, fragmentation and reassembly.
It is closely related to the transport layer. IPv4 and IPv6 are the most common
protocols of this layer.

The transport layer is the fourth layer and is a transition layer between the
lower layers, concerned with data delivery, and the higher layers, concerned
with application software. This layer enables end-to-end communication between
application processes by using process-level addressing
(differentiating between applications) and multiplexing de-multiplexing
(combine data into one stream and divide). Protocols on this layer divide app
data into blocks for transmission and provide data delivery management services
such as reliability and flow control. The most common protocols of this layer
are TCP and UDP.

The fifth layer is the session layer and establishes and manages sessions
between software processes. This layer exposes APIs
(application program interfaces) to give programers access to lower level layers
without them needing to worry about the details. The most common protocols of
this layer are sockets and RPCs.

The sixth layer is the presentation layer and is responsible for transforming
data through translation, compression and encryption although this isn't
required very often. The most common protocols of this layer are SSL and MIME.

The seventh layer is the application layer with its protocols it implements user
applications and high level functions. It is the final layer this it doesn't
provide any services to a higher layer but consumes all the services of the
lower layers. Common protocols of this layer are DNS, FTP, SMTP, HTTP and DHCP.

> Overall from layer 5-7 the lines are mostly fuzzy.
