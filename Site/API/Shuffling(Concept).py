import random


def shuffling():
    player_no = 1
    cards = []
    while player_no < 6:
        card_type = ['Clubs', 'Diamond', 'Spades', 'Hearts']
        card_name_S = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        card_name_H = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        card_name_C = ['A', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        card_name_D = ['A', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        cards.append("Player %s" % player_no)
        player_no = player_no + 1
        number_of_crds_pr_plyr = 0
        while number_of_crds_pr_plyr < 10:
            rand_crd_typ = random.choice(card_type)
            if rand_crd_typ == 'Clubs':
                card_name = random.choice(card_name_C)
                number_of_crds_pr_plyr = number_of_crds_pr_plyr + 1
                card_name_C.remove(card_name)
            elif rand_crd_typ == 'Diamond':
                card_name = random.choice(card_name_D)
                number_of_crds_pr_plyr = number_of_crds_pr_plyr + 1
                card_name_D.remove(card_name)
            elif rand_crd_typ == 'Hearts':
                card_name = random.choice(card_name_H)
                number_of_crds_pr_plyr = number_of_crds_pr_plyr + 1
                card_name_H.remove(card_name)
            elif rand_crd_typ == 'Spades':
                card_name = random.choice(card_name_S)
                number_of_crds_pr_plyr = number_of_crds_pr_plyr + 1
                card_name_S.remove(card_name)
            cards.append(rand_crd_typ)
            cards.append(card_name)
    print(*cards)

shuffling()