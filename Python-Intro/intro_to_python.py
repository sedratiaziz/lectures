# print() == console.log()
print("Test")


# declaring variables
# like let num = 15
num = 15

print(num)

# snake case
my_name  = "Omar"
my_last_name = 'kamal'



MY_FAVORITE_NUMBER = 17

MY_FAVORITE_NUMBER = 200

print(MY_FAVORITE_NUMBER)


# like typeof in javascript
print(type(10.5))
print(type(my_name))



# Booleans
is_bahraini = True
is_not_bahraini = False


# equivelant to null value in JS
empty_variable = None



# String concatenation

print("hello my first name is " + my_name + " and my last name is " + my_last_name)
# f strings
print(f"hello my name is {my_name} and my last name is {my_last_name}")


print(type(str(10)))


print(int('100') *10)



# operations
result = 4/2

print(result)

print(type(int(result)))

print(10%2)


result +=2

print(result)


# single line comment


multipline_string = '''
cdnkemn
ded
dde
de
de
'''

print(multipline_string)


'''
multi- line comment
'''



# string methods

print("ace of spades".upper())
print("ace of SPADES".lower())

# like indexOf() in JS
print("abcd".index("c"))

print("ab" in "abcdefg")


print(len("my string"))



print(range(0,10))


n = ''

if n:
    print("true")
else:
    print("false")


print(type(5) == float)

favorite_animal = 'dog'

student = {
    'name': 'Maria',
    'favorite_integer': 5,
    favorite_animal: 'llama' # notice the lack of quotes around favorite_animal
}
print(student)
