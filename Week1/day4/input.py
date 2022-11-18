word = input("Give me a word: ")


def check_palindrome(word):
    reversed_string=string[::-1]
        if string == reversed_string:
            print(string, "is a palindrome")
        else:
            print(string, "is not a Palindrome")

check_palindrome()