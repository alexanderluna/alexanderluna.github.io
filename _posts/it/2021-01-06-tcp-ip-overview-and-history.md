---
title: TCP/IP Overview and History
image: /assets/img/csruby
categories:
  - books
  - it
---

TCP/IP consists of various protocols. The two defining protocols are the layer
3, IP (Internet Protocol) and layer 4, Transmission Control Protocol. Hence the
name, TCP/IP. Both TCP/IP and the internet were developed at the same time by
DARPA with the purpose of creating a research network. At the beginning, there
was only TCP but upon realizing its limitations its developers split it into TCP
for transmission and IP for end-to-end communication. This change was introduced
in version 4 hence the first real version of IP is 4.

TCP/IP isn't the only internetworking protocol but the universally accepted
standard. It's open standard, route friendly design and scalability gave it a
low entry barrier and wide success.

TCP/IP provides many services to other protocols and end users. Those services
operate primarily in a client/server structural model. This is different from a
peer network in that clients create requests and servers respond to those
requests with data.

The client/server role is a recurring theme in TCP/IP as it is used to describe
a hardware role that functions as a server or client, as a software role it
tells whether a software component functions as a client or server and as a
transactional role when servers communicate with each other in certain
protocols.

The TCP/IP model actually describes the architecture without using the OSI
model. It essentially compresses the OSI model's top 6 layers down into 4
layers. At the bottom we have the network interface layer and it is the place
that allows TCP/IP to run on. Next comes the internet layer, which is
responsible for logical devise addressing, routing and data packaging. Then
comes the host-to-host transport layer which handles the internetwork
communication. Finally there is the application layer, which compresses layer
5-7 of the OSI model and describes the blurriness of these layers in the OSI
model well. In summary the TCP/IP model looks as follows compared to the OSI
model.

1. Network Interface (layer 2)
2. Internet (layer 3)
3. Host-to-Host Transport (layer 4)
4. Application (layer 5-7)
