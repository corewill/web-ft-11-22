import time
import random


class Character():
    def __init__ (self, name, vitals,attack, wins):
        self.name = name
        self.vitals = vitals
        self.attack = attack
        self.wins = wins
    
    def checkChar(self):
        print(f"""{self.name}'s current stats:
        Vitals: {self.vitals}
        Attack: {self.attack}
        Wins: {self.wins}""")

    def checkHealth(self):
        print(f'{self.name} new health is {self.vitals}')
    
    def vitalschange(self, vitals_amount, NPCvillain):
        if (vitals_amount > self.vitals):
            Deceased = abs(self.vitals - vitals_amount)
            self.vitals = 0
            if (Deceased > 0):
                print("{0}'s soul has been collected by {1}!"
                    .format(self.name, NPCvillain, Deceased))
            else:
                print("{0}'s soul has been collected by {1}!"
                    .format(self.name, NPCvillain))
        else:
            self.vitals -= vitals_amount
            print("{0} takes {1} vitals from {2}!"
                    .format(self.name, vitals_amount, NPCvillain))

def parse_int(input):
    try:
        int(input)
        return True
    except ValueError:
        return False

def Player_action():
    valid_input = False
    while (valid_input is False):
        print()
        choice = input("Select an action: ")
        if (parse_int(choice) is True):
            return int(choice)
        else:
            print("The action was invalid fool, try again.")

def NPC_action():
    sleep_time = 3
    time.sleep(sleep_time)
    return random.randint(1,2)

def Battle(NPCvillain, Hero):
    Battle_wages = True
    while Battle_wages == True:

        print("Available Actions:")
        print("1) Tackle - Causes moderate damage.")
        print("2) Slash - high or low damage, ")
        print("3) Pray - The creators's spare your soul and heal you to fight another day.")
        move = Player_action()

        if (move == 1):
            damage = int(15)
            NPCvillain.vitalschange(damage, Hero.name)
            Hero.vitalschange(NPCvillain.attack, NPCvillain.name)
            Hero.checkHealth()
            NPCvillain.checkHealth()
        elif (move == 2):
            possibleDmg = [0,1,2,3,4,5,30,31,32,33,34,35]
            damage = random.choice(possibleDmg)
            NPCvillain.vitalschange(damage, Hero.name)
            Hero.vitalschange(NPCvillain.attack, NPCvillain.name)
            Hero.checkHealth()
            NPCvillain.checkHealth()
        elif (move == 3):
                response = input("Play another round?(Y/N)")
                if (response.lower() == "n"):
                    break
                if (response.lower()=='y'):
                    Goblin = Character('Goblin',100,17, 0)
                    Terminator = Character('Terminator',50,25, 0)
                    Breserker = Character('breserker',200,10, 0)
                    enemyList = [Goblin, Terminator, Breserker]
                    NPCvillain = random.choice(enemyList)
                    Hero = Character({Hero.name},100, 50, 0)
                    Battle(NPCvillain, Hero)
                
        else:
            print ("The input was not valid. Please select a choice again.")
        
    if  (NPCvillain.vitals == 0):
        print(f"Congratulations, you beat {NPCvillain.name}!")
        Hero.wins += 1
        Battle_wages = False
    if  (Hero.vitals == 0):
        print(f"Oh no! you've been beat by{NPCvillain.name}!")
        NPCvillain.wins += 1
        Battle_wages = False 

def start_game():
    print("the Battle")
    Goblin = Character('Goblin',100,17, 0)
    Terminator = Character('Terminator',50,25, 0)
    Breserker = Character('breserker',200,10, 0)
    enemyList = [Goblin, Terminator, Breserker]
    NPCvillain = random.choice(enemyList)

    
    name = input("Please enter your name: ")
    Hero = Character(name,100, 50, 0)

    keep_playing = True

    while (keep_playing is True):
        Goblin = Character('Goblin',100,17, 0)
        Terminator = Character('Terminator',50,25, 0)
        Breserker = Character('breserker',200,10, 0)
        enemyList = [Goblin, Terminator, Breserker]
        NPCvillain = random.choice(enemyList)
        Hero = Character(Hero.name,100, 50, 0)
        Battle(NPCvillain, Hero)
        print("Current Score:")
        print(f"{Hero.name} - {Hero.wins}")
        print(f"{NPCvillain.name} - {NPCvillain.wins}")
        Battle(NPCvillain, Hero)
        print()
        response = input("Play another round?(Y/N)")
        if (response.lower() == "n"):
            break

start_game()