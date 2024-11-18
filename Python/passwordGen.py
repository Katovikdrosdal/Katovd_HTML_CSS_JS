# Password Generator Function
def generate_password(length):
    import random
    
    letters = 'abcdefghijklmnopqrstuvwxyzæøåABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ'
    numbers = '0123456789'
    symbols = '!@#$%^&*()_+[]{}|;:,.<>?'
    all_characters = letters + numbers + symbols
    
    password = ''
    for _ in range(length):
        random_index = random.randint(0, len(all_characters) - 1)
        password += all_characters[random_index]
    
    return password

# Example usage with replay option
def main():
    while True:
        try:
            password_length = int(input("Enter the desired password length: "))
            print("Generated Password:", generate_password(password_length))
        except ValueError:
            print("Please enter a valid number.")
        
        again = input("Do you want to generate another password? (yes/no): ").strip().lower()
        if again != 'yes':
            break

if __name__ == "__main__":
    main()
