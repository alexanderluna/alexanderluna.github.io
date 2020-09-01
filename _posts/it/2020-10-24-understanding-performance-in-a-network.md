---
title: Understanding Performance in a Network
image: /assets/img/vpn
categories:
  - books
  - it
---

Everyone wants high-performance. However, the cost, quality, reliability,
expandability and maintainability are all attributes which will have an impact.
The higher the performance requirement is the more difficult it is to keep these
attributes intact. Expanding and maintaining high-performance networks is more
expensive and difficult. The key consideration should therefor always be the
clients need and to build a network that fits it.

When it comes to speed we have three terms to describe it.

- Speed: generic term usually refers to the rated speed
- Bandwidth: describes the frequency band width or data capacity
- Throughput: specific measure of how much data flows in a period of time

Latency describes how data is conveyed. It describes the delay between the time
data was requested and the time it arrives. Latency is what makes the network
worse and feel slow.

We measure speed using bits and bytes. Both are usually confused
1 Byte = 8 bits (B = Byte and b = bit). The most commonly used unit to describe
speed is the bit (Kb, Mb, Gb). It almost always uses the decimal and not the
binary versions. Baud measures the signaling rate of the number of times that
the signal changes value in each second. Don't confuse it with BPS
(bits per second). Modern encoders encode 9 bits in each transaction.

Usually it is not possible to achieve the rated speed for a number of reasons.

1. Overhead: issues that don't allow us to use full network capacity.
2. External factors: bandwidth, data input and output.
3. Configuration problems: hardware or software isn't configured correctly.

There are three basic operation modes that describe how data is sent between
two devices.

1. Symplex: data flows in one direction
2. Half duplex: any device can transmit but only one at the time
3. Full duplex: two devices can transmit and receive simultaneously

Quality of service (QoS) describes the characteristics of how data is
transmitted. QoS seeks to provide more predictable streams of data. It archives
this using bandwitdh reservation, latency management (limits the latency),
traffic prioritization (give more importance to important connections),
traffic shaping and network congestion avoidance (reroutes data when networks
become congested).
