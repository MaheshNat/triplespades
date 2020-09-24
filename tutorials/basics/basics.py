from random import random
import math

# generates random integer between 10 and 20
min = 10
max = 20
print(math.floor(random() * (max - min + 1)) + min)

# variable types
# strings
name = 'Mahesh'
multi_line = '''multi
line'''
ex1 = f'My name is: {name}'
ex2 = 'My name is: %s' % (name)
print(name, multi_line, ex1, ex2)
# numbers
number = 0.2

# operators
# +, -, *, /, //, **
print(f'2 ** 3: {2 ** 3}')

# lists
list = ['a', 'a', 'b', 'c', 'd']
print(f'slice from [0, 3): {list[0:3]}')
list[2] = f'index 2: {list[2]}'
print(list)
del list[2]  # java equivalent: list.remove(2)
list.append('f')  # java equivalent: list.add('f')
list.insert(0, 'start')  # java equivalent: list.add(0, 'start's)
# removes first instance
list.remove('a')
list.sort()
list = sorted(list)
list.reverse()
print(f'length of list: {len(list)}')  # prints length of list

# tuples
# are immutable; cannot be changed
# use case: returning multiple values from a function
tuple = ('a', 'b', 'c', 'd')

# throws error
# tuple[0] = 'b'
# print(tuple)

# dictionaries
# are like maps in java
grades = {'student a': 100, 'student b': 90}
map = {'key': 'value', 'second key': 'second value'}

for key in grades:
    print(key, f'got a grade of {grades[key]}')

print(f"student a got a grade of: {grades['student a']}")

grade = 100

if grade >= 90:
    print('You got an A!')
elif grade >= 80:
    print('You got a B!')
else:
    print('You got something else!')

for num in range(0, 11):
    print(num)

names = ['John', 'Susan', 'Some Dude']
for name in names:
    print(name)

i = 1
while(i < 10):
    i += 1
    if(i == 3):
        continue  # goes to next iteration of loop
    print(i)
    if(i == 8):
        break  # exits loop


def the_sum(a, b):
    return a + b


def the_sum_keyword(a=0, b=0):
    return a + b


def example(a, b, c=0):
    return a + b + c


args = [10, 2]
print(the_sum(*args))
print(the_sum(10, 2))

args = {'b': 2, 'a': 10}
print(the_sum_keyword(**args))
print(the_sum_keyword(a=10, b=2))


print(the_sum(10, 2))

with open('tutorials/basics/basics.txt') as f:
    for line in f:
        print(line)


class Animal:
    name = ''
    height = 0
    weight = 0

    def __init__(self, name, height, weight):
        self.name = name
        self.height = height
        self.weight = weight

    def to_string(self):
        return f'name: {self.name}, height: {self.height}, weight: {self.weight}'


# we can instantiate an Animal with a dictionary using **args
args = {'name': 'Dog', 'height': 2, 'weight': 50}
dog = Animal(**args)
print(dog.to_string())
