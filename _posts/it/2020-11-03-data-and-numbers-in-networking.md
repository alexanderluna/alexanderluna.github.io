---
title: Data, Numbers and Math in networking
image: /assets/img/numpy
categories:
  - books
  - it
---

Computers store all information in binary digital form. In other words, data is
composed of ones and zeros. The bit is the fundamental building block. We can
collect bits into groups to represent larger amounts.

| Bits | Name                  |
| ---- | --------------------- |
| 1    | bit                   |
| 4    | Nybble/Nibble         |
| 8    | Byte/Octet/Character  |
| 16   | Double Byte/Word      |
| 32   | Double Word/Long Word |
| 64   | Very Long Word        |

Formally an octet is the correct term for 8-bits. However, Byte is more
commonly used in north america and octet in europe.

Most of us are used to the decimal numbers based on the base 10-system of
mathematics. Computers use binary numbers. Bits in a binary number can be
expressed as octal numbers by grouping 3 bits into an octal digit ranging from
(0-7). We can create sets of 4 bits to create a single hexadecimal (0-15).
Hexadecimal uses letters A-F to represent values from 10-15.

| binary | octal digit | hexadecimal | decimal |
| ------ | ----------- | ----------- | ------- |
| 0000   | 0           | 0           | 0       |
| 0001   | 1           | 1           | 1       |
| 0010   | 2           | 2           | 2       |
| 0011   | 3           | 3           | 3       |
| 0100   | 4           | 4           | 4       |
| 0101   | 5           | 5           | 5       |
| 0110   | 6           | 6           | 6       |
| 0111   | 7           | 7           | 7       |
| 1000   |             | 8           | 8       |
| 1001   |             | 9           | 9       |
| 1010   |             | A           |         |
| 1011   |             | B           |         |
| 1100   |             | C           |         |
| 1101   |             | D           |         |
| 1110   |             | E           |         |
| 1111   |             | F           |         |

## Convert from Hexadecimal to Decimal

| Hex             | 8        | 3        | 0        | C        |
| --------------- | -------- | -------- | -------- | -------- |
| Decimal         | 8        | 3        | 0        | 12       |
| Power of 16     | $$16^3$$ | $$16^2$$ | $$16^1$$ | $$16^0$$ |
| Decimal * Power | 32768    | 768      | 0        | 12       |

> The sum of all multiplications is the final result (33548)

## Convert from Decimal to Binary

| Decimal            | 689      | 689     | 177     | 177     | 49      | 49      | 17      | 1       | 1       | 1       | 1       |
| ------------------ | -------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| Power of 2         | $$2^10$$ | $$2^9$$ | $$2^8$$ | $$2^7$$ | $$2^6$$ | $$2^5$$ | $$2^4$$ | $$2^3$$ | $$2^2$$ | $$2^1$$ | $$2^0$$ |
| $$2^N < Decimal $$ | 0        | 1       | 0       | 1       | 0       | 1       | 1       | 0       | 0       | 0       | 1       |

> Everytime the power of 2 is less than or equal to the decimal, we subtract
> it from the decimal and carry the remainder over.

## Convert from Decimal to Hexadecimal

| Decimal               | 689      | 689      | 177      | 1        |
| --------------------- | -------- | -------- | -------- | -------- |
| Power of 16           | $$16^3$$ | $$16^2$$ | $$16^1$$ | $$16^0$$ |
| Power of 16 < Decimal | 0        | 2        | B        | 1        |

> After each division we carry the remainder of the division over.

Boolean logic is a system that uses all lien functions to produce outputs.

- NOT: opposite of the input
- AND: true if all inputs are true
- OR: true if any of the inputs are true.
- XOR: true if only one of the inputs is true

We can use the properties of OR and AND boolean functions to set certain bits
of a data items or clear them. This process is also called bit masking. We can
set bits to 1 by creating a mask and use bit by bit OR with the input. The mask
consists of ones that resulting in one.

| Input  | 1   | 0   | 1   | 0   | 0   | 1   | 0   | 1   | 1   | 0   | 1   | 0   |
| ------ | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Mask   | 0   | 0   | 0   | 1   | 1   | 1   | 1   | 1   | 1   | 0   | 0   | 0   |
| Result | 1   | 0   | 1   | 1   | 1   | 1   | 1   | 1   | 1   | 0   | 1   | 0   |

> We can use a mask with an AND boolean function to do the opposite, clearing or
> setting values to zero.
