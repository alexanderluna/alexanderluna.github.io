---
title: Introduction to Networking
image: /assets/img/vpn
categories:
  - books
  - it
---

A networking is a collection of computers or hardware that are connected
together. Networking describes the process involved in designing, implementing,
upgrading and managing works with networks and network technologies.

A network is a system that provides its users with unique capabilities above and
beyond what individual machines and their software provide - connectivity and
sharing. Connectivity via LAN or WAN allow for communication. We can share
information and access the internet which is an enourmous network.

All this comes at the cost of hardware and software which isn't cheap and has
to be mantained. At the same time, security becomes a big part as well.

Networking is broken down into layers each containing hardware and software. Low
layers do low level concrete tasks. Higher layers build on those layers to
provide other services. The Commons model used for describing the layers is the
Open Systems Interconnection (OSI) model. An architecture is a set of rules that
describes the section of some portion of the hardware and software that
constitutes a stack of layers.TCP (transmission control protocol) operates on
layer 4 while IP (Internet protocol) operates on layer 3 using services from
layer 2.

Network protocols define a language, a set of rules and procedures to enable
devices and systems to communicate. It is a set of rules governing communication
between entities on the same reference model layer. There are many methods to
exchange information. A fundamental way of differentiating network technologies
is based on the method they use to determine the path between devices.

1. Set a path in advance
2. Set individual data for various paths

**Circuit switching** sets up a connection called a circuit between devices
which are used for the whole communication. Only one path is used. The telephone
system is a classic example. **Packet switching** doesn't use a specific path.
The data is chopped into packets and routed combined or fragmented. At the end,
the process is reversed and reassembled.

Both have their use cases. For phones, circuit switching works the best because
you're the only one using the phone. For LAN where devices share a medium
(modem) it would lock out devices. Thus packet switching is the preferred
choice. The relation between circuit switching and packet switching depends on
the connection orientation. A connection oriented protocol is one where a
connection is first established between devices prior to sending data. In a
connectionless protocol data is just sent without a connection being created.

Circuit switching networking technologies are inherently connection oriented but
not all connection oriented technologies use circuit switching. Logical
connection oriented connections can be implemented on top of packet switching
networks to provide higher level services. TCP/IP has two main protocols, TCP
which is connection oriented and UDP which is connectionless. TCP is used where
a connection is needed and to use TCP's other services like FTP. UDP is used for
faster performance.

Communication between devices on a packet switching network is based on messages
also referred to as packets, datagrams, cells or fragments. Usually each name is
associated to a protocol at a layer on the OSI model. The formal name for the
message is called a protocol data unit (PDU) or service data unit (SDU). A
message consists of a header, data/payload and an optional footer. The header
holds control information. There are three main ways to address and transmit
data between devices.

1. Unicast: transmission from 1 device to 1 device
2. Broadcast: transmission from 1 device to all connected devices
3. Multicast: transmission to a selected group of devices

> IPV6 introduced also Anycast which sends data to the closest memeber of
> devices (group).

Networks that share resources tend to use one of two structural models.

1. Peer to Peer (P2P): each device is equal no one has a particular job
2. Client/Server: devices have roles and the server responds to client requests

Client/Server models are very popular due to its prevalance in TCP/IP and
internet applications.
