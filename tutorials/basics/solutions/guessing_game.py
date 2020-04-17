import random as rand
import math

min = int(input('Enter a lower bound: '))
max = int(input('Enter an upper bound: '))

round_ended = False
game_ended = False

while not game_ended:
    answer = rand.randrange(min, max)
    tries = 0
    while not round_ended:
        guess = int(input(f'Take a guess between {min} and {max}: '))
        tries += 1
        if guess > answer:
            print('Your guess was too high!')
        elif guess < answer:
            print('Your guess was too low!')
        else:
            print(f'You guessed right in {tries} tries')
            round_ended = True
    play_again = input('Would you like to play again? (y / n)')
    if play_again == 'n':
        game_ended = True
    elif play_again == 'y':
        round_ended = False
