from random import random
import math

min = 10
max = 20
print(math.floor(random() * (max - min + 1)) + min)

# variable types
# String
name = '''multi     
line'''
name = f'My name is: {name}'
name = 'My name is: %s' % (name)
print(name)
name = 2
print(name)
# Number
number = 0.2
# print(number)

# operators
# +, -, *, /, //, **
# print(2 ** 3)

# list
list = ['a', 'a', 'b', 'c', 'd']
print(list[0:3])
list[2] = 'index 2'
print(list)
del list[2]
print(list)
list.append('f')
list.insert(0, 'start')
# removes first instance
list.remove('a')
list.sort()
list = sorted(list)
print(len(list))
print(max(list))
print(min(list))
print(list)

# tuples
tuple = ('a', 'b', 'c', 'd')

# throws error v
# tuple[0] = 'b'
# print(tuple)

# dictionaries
grades = {'student a': 100, 'student b': 90}
map = {'key': 'value', 'second key': 'second value'}

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
        continue
    print(i)
    if(i == 8):
        break


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

with open('basics.txt') as f:
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

    def get_name(self):
        return self.name
