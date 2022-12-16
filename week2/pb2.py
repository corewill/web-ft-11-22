class Phonebook:
    def __init__(self):
        self.listOfPhoneNumbers = []
    def addEntry(self,usersEntry):
        self.listOfPhoneNumbers.append(usersEntry)
    def printListOfNumbers(self):
        counter = 1
        for number in self.listOfPhoneNumbers:
            print(f""" {counter}:
           {number["name"]} - {number["number"]} 
            """)
            counter+= 1
    def remove(self, number):
        number-= 1
        self.listOfPhoneNumbers.pop(number)


myPhoneBook = Phonebook()
def phoneapp():
    while(True):
        choice = input("""
        1. add a no. 
        2. Delete a No.
        3. View All No.
        4. Quit
        -->""")
        if choice == ("1"):
            userName = input("What is your name?\n")
            phoneNumber = input("What is your phone number?\n")
            usersEntry = {"name": userName, "number":phoneNumber}
            myPhoneBook.addEntry(usersEntry)
            print("Entry Added")
        elif choice == ("2"):
            myPhoneBook.printListOfNumbers()
            notodelete = int(input("What entry would you like to remove? \n"))
            myPhoneBook.remove(notodelete)
            print("Entry Deleted")
        elif choice == ("3"):
            if myPhoneBook.listOfPhoneNumbers == []:
                print("Phonebook Empty")
            myPhoneBook.printListOfNumbers()
        elif choice == ("4"):
            print("Goodbye")
            return False
        else:
            print("Please input 1 - 4")

phoneapp()
        