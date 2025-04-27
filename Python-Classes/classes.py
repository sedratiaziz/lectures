print(type("string"))


dog1 = {
   "name": "Lucky",
   "age": 2
}

dog2 = {
    "name": "dog2",
    "age": 3
}


# class

class Dog():

    # Rule 1: every class has an __init__ method
    # method is just a function in a class
    # Rule 2: every class method starts with self
    def __init__(self, name_param, age_param):
        print("Init mehtod is called")
        self.name = name_param
        self.age = age_param
        self.teacher = "Omar"
    def bark():
        print("Bark Bark")


# two parts of class
# 1. descriptor
# 2. actions


dog1 = Dog("Lucky",2)

dog2 = Dog("Dog2",7)
dog1.name = "New dog name"

print(dog1.name)
print(dog1.age)
print(dog1.teacher)



class Student():
    # class variable
    teacher = "Omar"

    def __init__(self,name,country,course = "SEB"):

        self.name = name
        self.country = country
        self.course = course
        self.provider = "GA"
    def introduce_yourself(self):
        print(f"Hello my name is {self.name} and I am from {self.country}")

#   str method is what we will see when we try to print an object of this class
    def __str__(self):
        # __str__ method has to return a string
        return f" name: {self.name}, country: {self.country}, course: {self.course}"
student1 = Student("Ali","Bahrain","SEB")
student2 = Student("Sayed","Bahrain","SEB")

print(student1.name)

student1.introduce_yourself()
student2.introduce_yourself()


print(student1)


student3 = Student("Sara","Bahrain")

print(student3)


class Vehicle():
    
    def __init__(self,make,model):
        self.make = make
        self.model = model
        self.running = False

    def start(self):
        self.running = True
        print("Starting Up!")

    def stop(self):
        self.running = False
        print("Turning Off")
    
    def __str__(self):
        return f"The vehicle is a {self.make} {self.model}"
    

car1 = Vehicle("Toyota","Rav4")

print(car1)


print(student1.provider)
student1.provider = "General Assembly"
print(student1.provider)
print(student2.provider)

# changing the static variable
Student.teacher = "New Teacher"


print(student2.teacher)
print(student1.teacher)