---
title: Computer Science Programming Basics in Ruby
categories:
- ruby
- books
image: "/assets/img/csruby"
---

1. [Introduction to Computer Science](#introduction-to-computer-science)
2. [How does the Computer really work ?](#how-does-the-computer-really-work)
3. [Core Programming Elements](#core-programming-elements)
4. [Conditional Structures](#conditional-structures)
5. [Look Structures](#loop-structures)
6. [Arrays](#arrays)
7. [Sorting and Searching](#sorting-and-searching)
8. [Using Objects](#using-objects)
9. [Defining Classes and creating Objects](#defining-classes-and-creating-objects)
10. [Object Inheritance](#object-inheritance)
11. [File input and output](#file-input-and-output)
12. [Putting it all together](#putting-it-all-together)

##### Photo by Austin Neill on Unsplash

## Introduction to Computer Science

Programming is not the same same as Computer Science it is a tool to implement Computer Science concepts. While Programming languages come and go the underlying algorithms are the most important thing as they can be applied to any programming language. It is important to understand that computers only do what they are explicitly told. 

Computer Science is about problem solving:

1. Understand the problem
2. Write out a solution in plain english
3. Translate it to code
4. Test the code on the computer

## How does the Computer really work

Understanding the underlying machinary of computers enables us to develope more efficient software. Digital Computers consists mainly of:

- CPU (Central Processing Unit)
- Memory Unit
- Control Unit
- Peripheral (mass storage, UI devices)

> Most computers today are based on the Von Neumann model computing

Memory stores content as numbers (radix - positional representation). Memory is built from cells where each cell has its own address (cell = byte). Each cell hold up to 8 bits or 1 byte. 

There are two types of memory:

1. RAM (Random Access Memory)
2. Mass Storage (SSD/HHD)

Mass Storages are measured in special units: kilobyte, Megabyte, Gigabyte, Terabyte. Computers are based on radix of 2 (2^10 = 1024). All binary prefixes and names were codified by the IEEE as a standar in 2005. 

> The abbreviation for kilo (k) is written in lowercase because the uppercase (K) is a reserved letter for temperature measurement in Kelvin

Programs are operated by a Control Unit which executes intructions in logical sequencial manner. Each execution is controlled by a time mechanism called a clock. A Clock operates in frequencies (time step) and is measured in Hertz (Hz) where 1 Hz = 1 clock cycle per second. 

Clock speed is not a good way of camparing performance across computers because of the overlap between phases of instructions and because different instructions take a different number of clock cycles. Therefore, FLOPS (Floating point operations) and MIPS (Million of instructions per second) measure instruction rate rather than time per instruction. As processing power increases the access of data in memory dominates the speed of execution which is why newer approaches are introduced (ex. gigateps)

Memory consists of string of bits (Bytes) which can be stringed together to form longer strings. The Control Unit can decode and execute strings of bits which results in instructions leading to new instructions. The same bits can also hold data.

> Unicode: character and non character-based texts standard consisting of 1-4 bytes per item

Computers execute code by compiling or interpreting it. Compilation consists of a compiler that analyzes a program for statements and produces a file with executable instructions. Interpretation consists of an interpreter that analyzes statements and executes them as it encounters them. Pure interpretation doesn't produce instructions for the computer only effects.

> Ruby support 2 types of interpretation: __interactive mode__ where you type one statement at the time and __batch mode__ where you create a file and the interpreter analyzes it for instructions.


## Core Programming Elements
## Conditional Structures
## Look Structures
## Arrays
## Sorting and Searching
## Using Objects
## Defining Classes and creating Objects
## Object Inheritance
## File input and output
## Putting it all together