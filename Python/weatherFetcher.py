import requests
import json

def get_weather(city, api_key):
    base_url = "http://api.weatherapi.com/v1/forecast.json"
    params = {
        'key': api_key,
        'q': city,
        'days': 1,  # get forecast for today
        'aqi': 'no'  # disable air quality index
    }
    try:
        response = requests.get(base_url, params=params)
        response.raise_for_status()  # Raises an exception for HTTP errors
        weather_data = response.json()
        
        print_weather_info(weather_data)
    except requests.exceptions.RequestException as e:
        print(f"An error occurred: {e}")

def print_weather_info(weather_data):
    city = weather_data["location"]["name"]
    country = weather_data["location"]["country"]
    temp = weather_data["current"]["temp_c"]
    weather_desc = weather_data["current"]["condition"]["text"]
    humidity = weather_data["current"]["humidity"]
    wind_speed = weather_data["current"]["wind_kph"]
    feels_like = weather_data["current"]["feelslike_c"]
    chance_of_snow = weather_data.get("forecast", {}).get("forecastday", [{}])[0].get("day", {}).get("daily_chance_of_snow", "N/A")
    
    print(f"Current weather in {city}, {country}:")
    print(f"Temperature: {temp} °C")
    print(f"Weather: {weather_desc}")
    print(f"Humidity: {humidity}%")
    print(f"Wind Speed: {wind_speed} kph")
    print(f"Feels Like: {feels_like} °C")
    print(f"Chance of snow: {chance_of_snow}%")

if __name__ == "__main__":
    api_key = "57517be54853443897e171523241811"
    city = input("Enter the name of the city: ")
    get_weather(city, api_key)
