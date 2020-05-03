import random
Player_O=input("Please enter the name of the person playing O")
player_X=("Computer")
x=0
row1= [1,2,3]
row2= [4,5,6]
row3= [7,8,9]
print (row1)
print (row2)
print (row3)
try_O=int(input("It is O's turn to play"))
if row1[0]==row1[1] and row1[1]==row1[2]  or row3[0]==row3[1]==row3[2] or row1[0]==row2[1]==row3[2] or row1[2]==row2[1]==row3[0] or row1[0]==row2[0]==row3[0] or row1[1]==row2[1]==row3[1] or row1[2]==row2[2]==row2[2],
try:
    try:
        a=(row1.index(try_O))
        row1[a]=0
    except:
        b=(row2.index(try_O))
        row2[b]=0
except:
        c=(row3.index(try_O))
        row3[c]=0
print(row1)
print(row2)
print(row3)

try_X=int(random.randrange(0,10))
try:
    try:
        x=(row1.index(try_X))
        row1[x]=("X")
    except:
        y=(row2.index(try_X))
        row2[y]=("X")
except:
    z=(row3.index(try_X))
    row3[z]=("X")

print (row1)
print (row2)
print (row3)


