---
title: Object Oriented Programming in Python
image: /assets/img/react-testing
categories:
  - books
  - python
---

Python is an Object Oriented Language (OOP) which can be used to write
procedural code as well. The procedural programming style consists of splitting
a program into several functions (procedures or subroutines). Data goes into the
function and the function returns results ideally without mutating the data it
received.

```python
# procedural python

accountName = "alexander"
accountBalance = 100
accountPassword = "root"

def get_balance(password):
    if password != accountPassword:
        return
    return accountBalance

def withdraw(amount, password):
    global accountName, accountBalance, accountPassword
    if amount < 0:
        return
    if password != accountPassword:
        return
    if amount > accountBalance:
        return
    
    accountBalance = accountBalance - amount
    return accountBalance
```

OOP on the other hand combines code and data into one cohesive unit.

```python
# object oriented python

class Account():
    def __init__(self, name, balance, password):
        self.name = name
        self.balance = balance
        self.password = password

    def getBalance(self, password):
        if password != self.password:
            return
        return self.balance
    
    def withdraw(self, amount, password):
        if password != self.password:
            return
        if amount < 0 or amount > self.balance
            return
        
        self.balance = self.balance - amount
        return self.balance
```

If we were to build a program using procedural programming it can be difficult
to identity the different parts of our program which in turn makes it difficult
to reuse our code in another program. Procedural programming relies heavily on
global variables which results some key problems:

- data is separated from the code and thus difficult to reuse
- it is unclear which variables are modified and thus difficult to maintain
- functions have unrestricted access to data resulting in error prone changes
