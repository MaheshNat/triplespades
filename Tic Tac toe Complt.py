import  random

def nameofoperator():
    name=input("Please enter your name: ")
#this takes input of the name of the player
row1= [1,2,3]
row2= [4,5,6]
row3= [7,8,9]
row=[row1,row2,row3]

#row1 is the first row of the TicTacToe Board.
#simmilarly row2 is the second row of the TicTacToe Board and row3 is the third row of the TicTacToe Board.

def PrintingTheboard():
    #this prints the board
    print ("This is what the board currently looks like:")
    print(row1)
    print(row2)
    print(row3)

def placingO():
    Playerturn = int(input("Where would you like to place your sign[O]"))
    # This is the input of the user as to  where he would like to place the sign(O)
    try:
        try:
            a = (row1.index(Playerturn))
            row1[a] = ("O")
        except:
            b = (row2.index(Playerturn))
            row2[b] = ("O")
    except:
        c = (row3.index(Playerturn))
        row3[c] = ("O")
        #this places the sign where the player wants to.

def placingforcomputer():
    test=(random.choice(row))
    computerturn=(random.choice(test))
    try:
        try:
            x = (row1.index(computerturn))
            row1[x] = ("X")
        except:
            y = (row2.index(computerturn))
            row2[y] = ("X")
    except:
        z = (row3.index(computerturn))
        row3[z] = ("X")

def checkinghorizontally_row_1():
    if row1[0]==row1[1] and row1[1]==row1[2]:
        print("Game Ends!")
        return (0)

def checkinghorizontally_row_2():
    if row2[0]==row2[1] and row2[1]==row2[2]:
        print("Game Ends!")
        return (0)

def checkinghorizontally_row_3():
    if row3[0]==row3[1] and row3[1]==row3[2]:
        print("Game Ends!")
        return (0)

def CheckingVertically_row_1():
    if row1[0]==row2[0] and row2[0]==row3[0]:
        print("Game Ends!")
        return (0)

def CheckingVertically_row_2():
    if row1[1]==row2[1] and row2[1]==row3[1]:
        print("Game Ends!")
        return (0)

def CheckingVertically_row_3():
    if row1[2]==row2[2] and row2[2]==row3[2]:
        print("Game Ends!")
        return (0)

def CheckingDiagonally_left_To_Right():
    if row1[0]==row2[1] and row2[1]==row3[2]:
        print("Game Ends!")
        return (0)

def CheckingDiagonally_Right_To_left():
    if row1[2]==row2[1] and row2[1]==row3[0]:
        print("Game Ends!")
        return (0)

def CheckingForWinner():
    checkinghorizontally_row_1()
    checkinghorizontally_row_2()
    checkinghorizontally_row_3()
    CheckingVertically_row_1()
    CheckingVertically_row_2()
    CheckingVertically_row_3()
    CheckingDiagonally_Right_To_left()
    CheckingDiagonally_left_To_Right()

output=CheckingForWinner()

#The Game Coding Starts Here
nameofoperator()
PrintingTheboard()
while output!=(0):

    placingO()
    PrintingTheboard()
    CheckingForWinner()
    output = CheckingForWinner()
    placingforcomputer()
    PrintingTheboard()
    CheckingForWinner()
    output = CheckingForWinner()








#Two doubts:
#1.Is there any way to get only intgers using a randomiser giving intigers only
#2.why elif is not working.
#3 What does public void do?