import os
import requests
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv("exchangeAPI.env")

def get_exchange_rate(from_currency, to_currency):
    api_key = os.getenv("EXCHANGE_RATE_API_KEY")
    if not api_key:
        raise ValueError("API key is not set. Please set the EXCHANGE_RATE_API_KEY environment variable.")
    
    url = f"https://v6.exchangerate-api.com/v6/{api_key}/latest/{from_currency}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        rates = data.get("conversion_rates")
        if rates and to_currency in rates:
            return rates[to_currency]
        else:
            raise ValueError(f"Exchange rate for {to_currency} not available.")
    else:
        raise ConnectionError("Failed to fetch exchange rates from ExchangeRate-API.")

def convert_currency(amount, from_currency, to_currency):
    try:
        rate = get_exchange_rate(from_currency, to_currency)
        return amount * rate
    except Exception as e:
        raise e

if __name__ == "__main__":
    from_currency = input("Enter the currency you want to convert from (e.g., USD, EUR): ").upper()
    to_currency = input("Enter the currency you want to convert to (e.g., USD, EUR): ").upper()
    amount = float(input("Enter the amount you want to convert: "))

    try:
        result = convert_currency(amount, from_currency, to_currency)
        print(f"{amount} {from_currency} is equal to {result:.2f} {to_currency}")
    except ValueError as ve:
        print(f"Error: {ve}")
    except ConnectionError as ce:
        print(f"Error: {ce}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")