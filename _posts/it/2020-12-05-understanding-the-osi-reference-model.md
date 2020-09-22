---
title: Understanding the OSI reference model
image: /assets/img/numpy
categories:
  - books
  - it
---

The OSI reference model provides a framework for both designing network
systems and for explaining how they work. The OSI model was originally created
as a basis to design universal sets of protocols called the OSI protocol
suite. The suite was never used but the model became a tool for education and
development.

## Understanding the purpose of the model

The OSI reference model is a framework that breaks down the internetworks into
easier to understand components. Each component does a specific function. This
component approach, allows us to design and develop functionality to combine
components as needed. For these reasons, it is helpful to understand the OSI
reference model as it describing real-world network operations. The OSI
reference model is therefor a tool to better understand networking technologies.
However, not all technologies, protocols and components fit into the layered
model and trying to make it fit can add more confusion than anything else.

Beside the OSI reference model, there are networking architectures and protocol
suites that also describe networking technologies. The DOD model or TCP/IP model
has similarities to the OSI model but is often used when discussing the suit.

## The OSI Layers

The OSI model divides functions into layers. The lower layers are concrete
hardware specific functions while upper layers are more abstract. The four lower
layers have clear boundries and functionality while the three higher layers are
sometimes even treated as one - TCP/IP.

| OSI Layer | Layer Name   | Network Layer |
| --------- | ------------ | ------------- |
| 7         | Application  | N + 4         |
| 6         | Presentation | N + 3         |
| 5         | Session      | N + 2         |
| 4         | Transport    | N + 1         |
| 3         | Network      | N             |
| 2         | Data Link    | N - 1         |
| 1         | Physical     | N - 2         |

In order to communicate between layers, defined interfaces have to be in place.
Interfaces allow other layers to use functionality without understanding the
specifics of each layer. Interfaces thus allow for vertical communication.
Same layers can communicate with each other through protocols. Protocols pass
data through lower layers until layer 1 to transmit it across a network and
finally back up to the same layer on the receiving network. This gives the
impression of direct communication.

Each Protocol communicates information through protocol data units (PDU). The
PDU is passed down to the next lower layer becoming a service data unit (SDU)
since the lower layer provides the service of handling the PDU. The lower layer
encapsulates the SDU into its own PDU in turn sends it down to the next lower
layer until it reaches the physical layer. The process is reversed on the
recipient.

```bash
L4 (PDU) -> L3 (SDU) -> L3 (PDU) -> L2 (SDU)
```

In the OSI model routing occurs when data is sent through an intermmediate
system like a router. That receives data and passes it upt to layer 4 (Network)
where it is repackaged and send out via the layer 2 (Data Link) interface.
