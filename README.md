# Weather App

This is a simple weather app that provides real-time weather information based on a city name entered by the user. The app uses the [OpenWeather API](https://openweathermap.org/api) to fetch weather data and display it in a clean and user-friendly interface.

## Features

- Displays current weather for any city worldwide.
- Shows temperature, humidity, wind speed, and weather description.
- Responsive design that works across different devices.
- Error handling for invalid city names or network issues.

## Demo

You can try the live demo of the app here: https://aniketpawar2602.github.io/My-Weather-App/ . 

## Screenshots
![Screenshot 2024-10-24 153749](https://github.com/user-attachments/assets/07ef33b7-62cc-4fe0-8ba6-e27406688d62)

![Screenshot 2024-10-24 153803](https://github.com/user-attachments/assets/7e15ce45-bc2f-4d21-a30b-67cd9344a3c1)


## Tech Stack

- **HTML**: For the structure of the app.
- **CSS**: For styling the user interface.
- **JavaScript**: To handle API requests and dynamic rendering of weather data.
- **OpenWeather API**: For fetching the weather data.

## Setup and Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/weather-app.git
    ```

2. Open the `index.html` file in your preferred web browser:
    ```bash
    open index.html
    ```

## Usage

1. Open the app in your web browser.
2. Enter the name of a city in the search bar.
3. Click the "Search" button or press Enter.
4. The current weather data will be displayed for the specified city.

## API Key Setup

To use the OpenWeather API, you'll need to sign up for a free API key:

1. Go to the [OpenWeather API](https://openweathermap.org/api) website.
2. Sign up and get your API key.
3. Replace `your_api_key_here` in the JavaScript file with your actual API key:
    ```javascript
    const apiKey = 'your_api_key_here';
    ```


