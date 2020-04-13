import math

player_o = input('Enter a name for player O: ')
player_x = input('Enter a name for player X: ')
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


def to_row_col(pos):
    return (math.floor((loc - 1) / 3), math.floor((loc - 1) % 3))


def check(a, b, c):
    a_row, a_col = to_row_col(a)
    b_row, b_col = to_row_col(b)
    c_row, c_col = to_row_col(c)

    if board[a_row][a_col] == board[b_row][b_col] == board[c_row][c_col]:
        return board[a_row][a_col]
    return None


def check_for_win():
    wins = [[0, 4, 8], [2, 4, 6], [0, 1, 2], [3, 4, 5],
            [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8]]
    for win in wins:
        check = check(win[0], win[1], win[2])
        if(check != None):
            return check


while not game_ended:
    while not round_ended:
        loc = int(input(
            f'{player_x if turn == "X" else player_o} Enter a location to place your marker [1-9]'))
        row, col = to_row_col(loc)
        if board[row][col] != '-':
            print('You cannot place a marker at that location!')
            continue
        board[row][col] = turn
