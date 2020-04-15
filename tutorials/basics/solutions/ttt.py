import math

turn = 'X'
round_ended = False
game_ended = False
board = [['-', '-', '-'],
         ['-', '-', '-'],
         ['-', '-', '-']]


def print_board():
    for row in board:
        for col in row:
            print(col, end=" ")
        print()


def check(a, b, c):
    return a == b == c and not a == '-'

def check_for_win():
    # checking rows
    for row in board:
        if check(row[0], row[1], row[2]):
            return row[0]
    # checking columns
    for col in range(0, 3):
        if check(board[0][col], board[1][col], board[2][col]):
            return board[0][col]
    # checking diagonals
    if check(board[0][0], board[1][1], board[2][2]):
        return board[0][0]
    if check(board[2][0], board[1][1], board[0][2]):
        return board[2][0]

def check_for_win_better():
    # checking rows
    for winner in [row[0] for row in b if check(*row)]:
        return winner
    # checking columns
    for winner in [row[0] for row in list(zip(*b)) if check(*row)]: 
        return winner
    # checking diagonals
    # this last one is just a meme, nobody can understand it
    for winner in [b[::t][0][0] for t in [1,-1] if check(*[b[::t][i][i] for i in range(3)])]:
        return winner


while not game_ended:
    while not round_ended:
        row = int(input(f'Player {turn}, enter a row to place your marker [0, 2]: '))
        col = int(input(f'Player {turn}, enter a column to place your marker [0, 2]: '))
        if board[row][col] != '-':
            print('You cannot place a marker at that location!')
            continue
        board[row][col] = turn
        print_board()
        win = check_for_win()
        turn = 'O' if turn == 'X' else 'X'
        if (win):
            print(f'Congratulations, player {win} won the game!')
            round_ended = True
    play_again = input('Would you like to play again? (y / n): ')
    if play_again == 'y':
        round_ended = False
        board = [['-', '-', '-'],
                 ['-', '-', '-'],
                 ['-', '-', '-']]
    else:
        game_ended = True
