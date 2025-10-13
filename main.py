from art import logo
import random

play_game = input("play game? y/n: ").lower()
while play_game == "y":
    def draw_card():
        drawcard = input("Draw Card Y/N: ").lower()
        if drawcard == "y":
            usr_cards.append(random.choice(cards))
            print(f"Your Cards: {usr_cards} | Score: {sum(usr_cards)}")
            if sum(usr_cards) > 21:
                return False
            draw_card()
        else:
            second_computer_card = random.choice(cards)
            computer_card_list = [first_computer_card, second_computer_card]
            print(f"Computers Cards: {computer_card_list}")
            while sum(computer_card_list) < 17:
                computer_card_list.append(random.choice(cards))
            print(f"Final Computer Cards: {computer_card_list}")

            if sum(usr_cards) > 21:
                return False
            elif sum(computer_card_list) > 21:
                return True
            elif sum(usr_cards) == sum(computer_card_list):
                return "draw"
            elif sum(usr_cards) > sum(computer_card_list):
                return True
            elif sum(usr_cards) < sum(computer_card_list):
                return False

    print(logo)
    cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
    first_computer_card = random.choice(cards)
    usr_cards = [random.choice(cards), random.choice(cards)]
    print(f"Computers First Card: {first_computer_card}")
    print(f"Your Cards: {usr_cards} | Score: {sum(usr_cards)}")

    result = draw_card()

    if result == True:
        print("You won!")
    elif result == False:
        print("You lost!")
    else:
        print("It's a draw!")

    play_game = input("play game? y/n: ").lower()
    if play_game == "n":
        exit()
