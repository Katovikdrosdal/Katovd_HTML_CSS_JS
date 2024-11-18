import random

def number_guessing_game():
    # Generate a random number between 1 and 100
    target_number = random.randint(1, 100)
    attempts = 0

    print("I'm thinking of a number between 1 and 100. Can you guess what it is?")

    while True:
        try:
            # Get the player's guess
            guess = int(input("Enter your guess: "))
            attempts += 1

            # Check if the guess is correct
            if guess == target_number:
                print(f"Congratulations! You guessed the number in {attempts} attempts.")
                break
            elif guess < target_number:
                print("Too low! Try again.")
            else:
                print("Too high! Try again.")
        except ValueError:
            print("Please enter a valid integer.")

if __name__ == "__main__":
    number_guessing_game()
