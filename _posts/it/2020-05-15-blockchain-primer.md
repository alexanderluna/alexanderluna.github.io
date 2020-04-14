---
title: A blockchain Primer
image: /assets/img/chain
categories: it
---

Blockchain is one of the lastest buzz words in the tech community. Businesses
seem to love it and a whole new branch of blockchain developers has emerged.
However, what is the blockchain and how does it work ?

A blockchain is a growing list of records called blocks which are linked and
secured using cryptography. Each block is linked cryptographically using the
SHA256 hashing algorithm.

| Fields in Block | Block #1        | Block #2         |
| --------------- | --------------- | ---------------- |
| Nonce           | 0054F           | 0044D3           |
| Data            | Send 500 to Bob | Send 230 to Ross |
| Previous Hash   | 0000            | 034EF            |
| Hash            | 034EF           | 4D56E            |

## It is all about the Hash

As you can see each block holds various fields including a nonce, data and
previous hash. All those fields are passed to a hashing function which
returns a new hash. Each hash secures the block. This is possible because a
hashing function completes 5 requirements:

1. It is one way
2. It always yields the same result (deterministic)
3. It is fast compute
4. It has an avalanche effect (small changes result in big hasing changes)
5. It withstands collision (when two hashes overlap)

As you can see, changing a block's data is nearly impossible because the
resulting hash would be very different and thus rejected by the ledger which
is immutable. The ledger is what keeps track of the blocks.

## Mining and the NONCE

The mining process takes the block's data and generates a hash for it.
Specifically, it has to find the NONCE that matches the target. The NONCE is a
field as we saw and it stands for "number used only once". This means the NONCE
is a number and the resulting hash has to match a target. However, it is
impossible to predict the outcome because as we saw in the Hashing section, a
hashing function is one way. We can't find the right NONCE unless we try each
number one by one until we hit our target.

As you can see, the NONCE takes quite a lot of time and work to discover. Thats
why mining rigs are necessary. Finally, the NONCE is used also as the proof of
work. Finding the right NONCE takes time but once the NONCE is found it is
easy for others to verify that the NONCE is correct. This is because the
hasing function is one way and its fast. We simply input the NONCE, hash it and
check if the resulting hash matches the target.
