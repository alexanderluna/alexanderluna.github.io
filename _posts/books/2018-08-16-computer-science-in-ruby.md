---
title: Computer Science Programming Basics in Ruby
categories:
- ruby
- books
image: /assets/img/csruby
---

If you know basic high-school math, you can quickly learn and apply the core
concepts of computer science with this concise, hands-on book. Led by a team of
experts, you’ll quickly understand the difference between computer science and
computer programming, and you’ll learn how algorithms help you solve computing
problems.

- [1 Introduction to Computer Science](#1-introduction-to-computer-science)
- [2 How does the Computer really work](#2-how-does-the-computer-really-work)
- [3 Core Programming Elements](#3-core-programming-elements)
- [4 Conditional Structures](#4-conditional-structures)
- [5 Loop Structures](#5-loop-structures)
- [6 Arrays](#6-arrays)
- [7 Sorting and Searching](#7-sorting-and-searching)
  - [Selection Sort O(n)](#selection-sort-on)
  - [Insertion Sort O(n²)](#insertion-sort-on²)
  - [Bubble Sort O(n)](#bubble-sort-on)
  - [Radix Sort O(dn)](#radix-sort-odn)
- [8 Using Objects](#8-using-objects)
- [9 Defining Classes and creating Objects](#9-defining-classes-and-creating-objects)
- [10 Object Inheritance](#10-object-inheritance)
- [11 File input and output](#11-file-input-and-output)
- [12 Putting it all together](#12-putting-it-all-together)

**Photo by Austin Neill on Unsplash**

## 1 Introduction to Computer Science

Programming is not the same as Computer Science. It is a tool to implement
Computer Science concepts. While Programming languages come and go the
underlying algorithms are the most important thing as they can be applied to
any programming language. It is important to understand that computers only do
what they are explicitly told.

Computer Science is about problem solving:

1. Understand the problem
2. Write out a solution in plain english
3. Translate it to code
4. Test the code on the computer

## 2 How does the Computer really work

Understanding the underlying machinary of computers enables us to develope more
efficient software. Digital Computers consists mainly of:

- CPU (Central Processing Unit)
- Memory Unit
- Control Unit
- Peripheral (mass storage, UI devices)

> Most computers today are based on the Von Neumann model computing

Memory stores content as numbers (radix - positional representation). Memory is
built from cells where each cell has its own address (cell = byte). Each cell
hold up to 8 bits or 1 byte.

There are two types of memory:

1. RAM (Random Access Memory)
2. Mass Storage (SSD/HHD)

Mass Storages are measured in special units: kilobyte, Megabyte, Gigabyte,
Terabyte. Computers are based on radix of 2 (2^10 = 1024). All binary prefixes
and names were codified by the IEEE as a standar in 2005.

> The abbreviation for kilo (k) is written in lowercase because the uppercase
> (K) is a reserved letter for temperature measurement in Kelvin

Programs are operated by a Control Unit which executes intructions in logical
sequencial manner. Each execution is controlled by a time mechanism called a
clock. A Clock operates in frequencies (time step) and is measured in Hertz (Hz
 where 1 Hz = 1 clock cycle per second.

Clock speed is not a good way of camparing performance across computers because
of the overlap between phases of instructions and because different
instructions take a different number of clock cycles. Therefore, FLOPS
(Floating point operations) and MIPS (Million of instructions per second)
measure instruction rate rather than time per instruction. As processing power
increases the access of data in memory dominates the speed of execution which
is why newer approaches are introduced (ex. gigateps)

Memory consists of string of bits (Bytes) which can be stringed together to
form longer strings. The Control Unit can decode and execute strings of bits
which results in instructions leading to new instructions. The same bits can
also hold data.

> Unicode: character and non character-based texts standard consisting of
> 1-4 bytes per item

Computers execute code by compiling or interpreting it. Compilation consists of
a compiler that analyzes a program for statements and produces a file with
executable instructions. Interpretation consists of an interpreter that
analyzes statements and executes them as it encounters them. Pure
interpretation doesn't produce instructions for the computer only effects.

> Ruby support 2 types of interpretation: __interactive mode__ where you type
> one statement at the time and __batch mode__ where you create a file and the
> interpreter analyzes it for instructions.

## 3 Core Programming Elements

> For Ruby Installation instructions read this [post](/installing-ruby)

In programming a variables is a  piece of data attached to a name. Most
programming languages declare variables like in algebra `variable_name =value`.
It is a good practice to give variables a meaningful name and avoid special
characters. If you want to use multiple words for your variables name use a `_`
to join them. Variables store a value at a given memory location. While
variables can change constants allow us to declare unchangeable variables.

Variables can have different data types and each data type needs a different
amount of memory allocated. In Ruby data types are defined as Classes. The most
common Data Types are as follows:

- Integer: possitive or negative number
- Float: decimal number
- String: one or more characters surrounded by quotes (' or ")
- Boolean: true or false value

Ruby will always try to remain in the same data type as such we have to do the
conversion to ensure that the operation we want to do are doable.

It is common to do mathematical operations which why ruby supports binary
operations (`+, -, *, /, %, **` ). Ruby has a module for more complex
mathmatical operations `Math.sin(1) or Math::PI` . I/O in Ruby is archived
through `gets` and `puts`.

When designing a program it is important to follow certain steps to design well:

1. Understand the problem
2. Write out the problem in plain english
3. Rewrite the problem into code
4. Test out the code on the computer

No matter how good we design our programs errors will pop up. There are mainly
2 types of errors:

1. Syntax Error:  code that ruby cannot execute
2. Logical Error: error that ruby cannot catch  => wrong/undesired result

## 4 Conditional Structures

Every algorithm has some type of logic flow also known as
**Flow of Execution**. Conditional flow allows us to have more than one flow
option. This is accomplished through expressions using boolean operators
(true/false) and relations. We can combine various simple expressions to create
complex expressions. In order to do this we can use the **and** and **or**
boolean operators in Ruby. Furthermore we can flip the boolean value of any
expression using the **!** sign. These operations allow us to alter the logic
flow in a program.

At the top of these expressions we have **if/elsif/else** statements which use
the expressions to determine how the program flows.

```ruby
if condition
 # do something
elsif other_condition
 # something else
else
 # default case
end
```

The condition represents the logical expressions we discussed earlier. It is
possible to chain multiple **elsif** statements to create even complexer logic
flow but this becomes increasinly tideous to write and read. A better statement
for these situations is a **case** statement:

```ruby
age = 12
case
when age > 12
 puts 'You are older than 12'
when age < 12
 puts 'You are younger than 12'
then
 puts 'You are 12'
end
```

or on a single line as follows:

```ruby
age = 12
case age
when 13 then puts 'You are older than 12'
when 11 then puts 'You are younger than 12'
else puts 'You are 12'
end
```

As the logic flow increases in complexity, it is important to debug our
applications effectively. A simple option would be to use **puts** statements
everywhere we expect the value of a variable to change. A slightly better
options would be to use **Debug Flags** which are global variables that allow
us to specify if our code is running in debug mode or not and only then
increase our application log level using puts statments:

```ruby
DEBUG_MODE = true

name = 'Alexander'
#expext name = ["A", "l", "e", "x", "a", "n", "d", "e", "r"]
name.split

puts name  if DEBUG_MODE
#real value of name is ["alexander"]
```

## 5 Loop Structures

There are three types of loops in Ruby:

1. while loop
2. until loop
3. for loop

Loops iterate or repeat commands. The **While** loop is the simplest since it
keeps looping while the condition is true:

```ruby
i = 0
while i < 10 do
 puts i
 i += 1
end
```

On the other hand, the **Until** keeps looping until the condition is true.
Hence is it as simple as flipping the comparison operator:

```ruby
i = 0
until i > 10 do
 puts i
 i += 1
end
```

The **For** loop is different altogether as this loop takes a group of elements
and loops through all of them. It is possible to nest this loop as well which
comes in handy for multidimentional arrays.

```ruby
integer_list = [1,2,3,4,5]
for i in integer_list do
 puts i
end
```

A common mistakes programmers make with loops is to create an infinite loop.
This happens when there is no exit condition or the exit condition is never
met. This is where **For** loops are handy as they will only loop while there
are elements to loop over.

## 6 Arrays

There are two types of arrays:

1. One-Dimensional: has only one index
2. Multidimensional: has multiple indexes

Arrays always start at index **0** where the index is the offset from the
beginning of the array. Therefore the **n-th** element is found at index
**n-1**.

> It is n - 1 because the array starts at 0 not 1.

As you can see arrays can at times be complicated when we deal with indexes
especially of multidimensional arrays. Some of the most common errors
programmers make are:

1. Forget that the array starts at index 0
2. **Arary.size** is the number of elements in the array not the highest index
3. The last index is **Array.size - 1**

Another common construct we can use which gives us a similar power as arrays, are hashes. Hashes unlike arrays can use any data as their index. This way we
can use the string data type to map elements inside an array like structure.
The string in this case is refered to as the **hash key**.

```ruby
students = Hash.new
students.keys

# []

students['Alexander'] = { subject: 'Math', present: true }

students.keys
# ["Alexander"]

students
# {"Alexander"=>{:subject=>"Math", :present=>true}}
```

An important aspect of hashes is that the key has to be unique. For that reason,
hashes excel at looking up values by custom keys like **["Alexander"]** instead
of indexes. This makes it quicker to lookup phone numbers, names, emails, etc.

## 7 Sorting and Searching

Computers spend a tremendous amount sorting. Sorting itself is a problem that
is described as followed:

> Given a list of elements in any order reorder them so that they appear
> according to their ordinal value from lowest to highest.

```text
5,3,2,4,3,2,1
```

Given the above sequence we can use several sorting algorithms to solve this
problem:

1. Selection Sort
2. Insertion Sort
3. Bubble Sort
4. Radix Sort

### Selection Sort O(n)

This is the simplest sort algorithm. You pick the smallest number and move it
to the beginning of the list and you repeat this process until the list is
sorted. You would take these steps for this algorithm:

1. Mark list as unprocessed
2. Find the smallest element and put it at the beginning
3. Repeat step 2 for n - 2 times

### Insertion Sort O(n²)

This algorithm works by inserting the number at its right position. These would
be the steps you would have to take:

1. Considering the first element, the list is sorted
2. Take the second element and insert it at its position keeping it sorted
3. repeat step 2 until the entire list is sorted.

### Bubble Sort O(n)

This algorithm works by repetitively comparing adjacent pairs of cards in the
list. This sorting algorithm uses two loops. The outer loops makes sure the
process runs **n - 1** times while the inner loop is responsible to loop though
the list. If the current element is bigger than the element on the right swap
them. You would take these steps:

1. Loop through all entries in the list
2. Compare each entry to all successive entries and swap if out of order
3. Repeat this process a total of n - 1 times.

### Radix Sort O(dn)

This algorithm works by sorting by successive digits. This way we sort first
all the ones digits then the tens digit and so on. This means we first sort
the right most digit, then the tens, then the hudreds, etc.

```ruby
[47, 21, 90] # unsorted
[90, 21, 47] # right most digit is sorted
[21, 47, 90] # the second digit is sorted
# and we are done
```

Each algorithm can be evaluated by analyzing its complexity. Assuming that each
element takes one unit of time how many units of time are required to process a
list of **n sized** elements. We use the **on the order of** or the
**big oh (O)** notation to note the complexity of an algorithm. For example
**O(n²)** means that the complexity grows exponantially in relation to **n** or
the size of the list.

Another common task computers perform frequently and which build on the sorting
algorithms we just learned is searching. When searching a list there are 2 very
important questions we must ask ourselves:

1. Is the list sorted ?
2. Are the elements unique ?

We will go through two types of searches:

**Linear Search O(n)** is used for unsorted lists. It will just go through the
list in a linear fashion and compares each element to the value we are searching
until it finds it. In the worst case it will loop though the entire list.

**Binary Search O(log₂(n))** is used for sorted lists. The approach is similar
to how you would search a phone book. Assuming it is sorted from A-Z we can
start at the middle. If the name we look for on the left we look there
otherwise we look at the right half. Once again this a rinse and repeat process
until we find the name we look for.

## 8 Using Objects

Software development is prone to repeating code and as applications become
more and more complex they become difficult to debug. For those reasons the
object oriented (OOP) approach was created. In order to make OOP possible, we
have to isolate functionality and we can do that using classes that define
objects. Each object has its own private data and methods. In Ruby everything is an object.

> API: application programming interface is an interface that allows programmers
> to use a functionality without having to know how it works under the hood
> creating a layer of abstraction.

When we donwload ruby on our machine, we also download of Ruby's API
documentation which has 3 headings: files, classes and methods. A class defines
and includes all the variables and methods required to make the object work.

As we can see form the Ruby documentation, there are many methods for different
built in classes such as the string class's **.length** method. But there are
also other methods that require a variable or paramter such as the **.index(x)**
method of the string class. These type of methods take input to compute the
output.

## 9 Defining Classes and creating Objects

An object is an instantiation of a class. Every class has a unique name. The
syntax for creating a class simple:

```ruby
student = String.new
```

String is a buil-in class but we can create own classes capable of encapsulating
everything related to a particular student:

```ruby
class Student

 def initialize(name, subject, grade)
  @name = name
  @subject = subject
  @grade = grade || []
 end

 def information
  puts "Name: #{@student}"
  puts "Subject: #{@subject}"
  puts "Grades: #{@grades.join(', ')}
 end

 def addGrade(grade)
  @grade.push(grade)

end
```

The first part of our class is responsible for initializing all the required
values which can come from the user or be a default value. If we don't do this
our **attending** method would throw an error. The special method **initialize**
is reserved and gets called when a new class is created which is why it is
called a constructor. We would use our class this way:

```ruby
require 'student.rb'

alexander = Student.new('Alexander', :math)
alexander.addGrade(100)
```

All objects consist of two parts:

- data: variables holding information about the instance
- actions: methods to manipulate the data

Classes group any combination of data and actions needed under a common name.

## 10 Object Inheritance

One of the most powerful abilities of OOP are relationships. Instead of defining
large objects and repeating certain aspects which are shared across similar
objects we can use **inheritance** to define the base and let other objects
share the common methods which is called **Polymorphism**. This way we could
create a vehicle class which defines the weight, number of tiers, price, engine
power and color. Now we can create a car which inherits from vehicle all those
variables and methods and adds some more such as number of doors and windows
something that a motorcycle doesn't have. A motorcycle can inherit from vehicle
the same properties without a problem.

```ruby
class Vehicle

 def initialize(tire, price, color, weight, hp, milage)
  @tire = tire
  @price = price
  @color = color
  @weight = weight
  @hp = hp
  @milage = milage
 end

 def information
  puts "Price #{@price}"
  puts "Color #{@color}"
  puts "milage #{@milage}"
 end

end


class Car < Vehicle

 def initialize(tire, price, color, weight, hp, milage, windows, doors)
  super(tire, price, color, weight, hp, milage)
  @windows = windows
  @doors = doors
 end

end
```

The main reason of doing this is to reduce complexity in other classes, handle
shared logic in one place instead of reapting it and in the worst case introduce
bugs.

The relationship between classes is expressed as Superclass and Subclass
(inherits from superclass). It so happends that we define sometimes methods
that do not work for a subclass in which case we can overwrite that method.
In ruby it is as simple as defining the method on the current subclass as it
will overwrite it by default.

```ruby
class Car < Vehicle

 def initialize(tire, price, color, weight, hp, milage, windows, doors)
  super(tire, price, color, weight, hp, milage)
  @windows = windows
  @doors = doors
 end

 def information
  # only print the number of doors
  puts "Doors: #{@doors}"
 end

end
```

Just as there are times where we want to overwrite the method from the
superclass there are also times we want to extend a method. When we overwrite
a method it executes just the code we define in our overwritten method. But
we can also execute the superclass method and then execute our code on top of
that using the **super** keyword.

```ruby
class Car < Vehicle

 def initialize(tire, price, color, weight, hp, milage, windows, doors)
  super(tire, price, color, weight, hp, milage)
  @windows = windows
  @doors = doors
 end

 def information
  # print the Vehicle Information
  super
  # and also print number of doors
  puts "Doors: #{@doors}"
 end

end
```

## 11 File input and output

We can manipulate files in Ruby using the **File Class**. Everytime we use it
we have to specify the access mode (read or write):

```ruby
# access mode -> write (w), read (r)
my_file = File.open('path_to_file', access_mode)

# get one line
my_file.gets

# cloes the file when done
my_file.close
```

> In *read mode* the file is accessed from the start while in *write mode*
> it will access the beginning of the file and overwrite any content.

## 12 Putting it all together

As a final project we are going to build a tic tac toe game. Writing a program
like this requires all the steps we have learning thus far. First, we have to
to break the problem down into keysteps as we learned in
[Chapter 1](##1-introduction-to-computer-science):

1. Draw Board
2. Ask Player for move
3. Validate Move
4. Store Move

Given that we interact with a virtual board all the time, we have to first
create a board class which defines all the game logic using methods. After that
we have to create a game loop which will ask the players for the next move
until one player wins or the board is full.

[Code for this project](https://github.com/alexanderluna/ruby/tree/master/ruby/tic_tac_toe)