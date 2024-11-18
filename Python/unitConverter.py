def km_to_miles(km):
    return km * 0.621371

def celsius_to_fahrenheit(celsius):
    return (celsius * 9/5) + 32

def kg_to_pounds(kg):
    return kg * 2.20462

def main():
    print("Unit Converter")
    print("1. Kilometers to Miles")
    print("2. Celsius to Fahrenheit")
    print("3. Kilograms to Pounds")

    choice = int(input("Choose a conversion (1/2/3):"))

    if choice == 1:
        km = float(input("Enter kilometers: "))
        miles = km_to_miles(km)
        print(f"{km} kilometers is equal to {miles} miles")
    elif choice == 2:
        celsius = float(input("Enter temperature in Celsius: "))
        fahrenheit = celsius_to_fahrenheit(celsius)
        print(f"{celsius} Celsius is equal to {fahrenheit} Fahrenheit.")
    elif choice == 3:
        kg = float(input("Enter weight in kilograms: "))
        pounds = kg_to_pounds(kg)
        print(f"{kg} kilograms is equal to {pounds} pounds.")
    else:
        print("Invalid choice. Please select a valid conversion.")

if __name__ == "__main__":
    main()