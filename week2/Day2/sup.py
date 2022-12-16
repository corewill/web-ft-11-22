class Character:
    def __init__(self, attack, defense, dodge):
        self.attack = attack
        self.defense = defense
        self.dodge = dodge
    
    def hitByAttack(self, attack):
        while True:
            if self.dodge >= attack:
                print("dodged attack")
                return False
            newHealth = self.defense - attack
            print(f'your new health is{newHealth}')
            if  newHealth <= 0:
                print('you dead foo')
                return False

Superman = Character(15,30,5)
Lex_Luther = Character(5,5,5)

Lex_Luther.hitByAttack(Superman.attack)