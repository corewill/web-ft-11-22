#Create a new file called "assignment.py" in your week2 day 2 folder
#Write all code beneath each question/problem
#

# 1. Write a function called "nameFunction" have it print out your name. invoke the function

nameFuction = ("Corey")
print(nameFuction)

#2. Define variable named Joe that is the string Joe

Joe = ("joe")

#3 Reinitialize Joe so that it is now the integer 4

Joe = 4

#4 Change Joe into a float

Joe = 4.0

#5. Create a list named students that includes 5 people from this class

Students = ("Corey", "Jessika", "Peter", "Vinny", "Adam")

    #5a print the first item from the list(bonus for more than one way)

print(Students[0])

    #5b print the last item from the list(bonus for more than one way)

print(Students[4])
print(Students[-1]) 

    #5c How do I get the third item from the list?

Students[2]

    #5d print the entire list not in brackets [student1, student2, etc...]

print(Students)

    #5e add "is cool" to the end of each name

for student in Students:
    print(f"{student} is cool")
    print(student+"is cool")

    # 46 is interpolation need f {}
    # 47 is concatonation needs +

    #5f if the students name is your name add "IT ME!!" to the end

for student in Students:
    if student == "Corey":
        print(student+"IT ME!!")

    #5g if you are not in the list print "I guess I'm not cool"


    if "Corey" not in Students:
        print("I guess I'm not cool")

        

    #5h list some methods to remove things from a list

student.remove(0)
# remove(Students[])


#6 Create a dictionary with keys "Digital Crafts" ,"Instructor", "TA" and values "Bootcamp" ,"Joe" ,"Ethan"

Set = {"Digital Crafts":"Bootcamp", "Instructor":"Joe", "TA":"Ethan"}
    
    #6a return the value of "Digital Crafts"

print(Set["Digital Crafts"])


#7 Write a class named Cars with attributes make,model,year, and type(sedan,truck,crossover, sportscar, etc....)

    
class Cars:
    def __init__ (self, make, model, year, type):
            self.make = make
            self.model = model
            self.year = year
            self.type = type

    
    
    
    #7a Instantiate 3 new Cars
Fleet =  []

Coreys_car = Cars("infinity","G35",2007,"sedan")  
Coreys_car2 = Cars("infinity","G35",2003,"sedan")  
Coreys_car3 = Cars("infinity","G35",2004,"sedan")  
    
    #7b Add a method that allows you to see the make and model of a car in your terminal



    def aboutcar(self):
        print(f"{self.make}: {self.model}")



    #7c Use the above method on the second car

    Coreys_car2.aboutcar()
    
    #7d Add a method that is called "honkHorn" that prints "Beep Beep"



#Push this all to a repo on your github
#Paste github link of assignment page to: https://digitalcrafts.instructure.com/courses/225/assignments/9345

