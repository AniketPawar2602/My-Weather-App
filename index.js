const apiKey = "fc9b6d2ab5d68a49379e5dfb718ee9f4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchCity = document.querySelector('.search input');
const searchBtn = document.querySelector('.search img');

const weatherImg = document.querySelector('.weather-condition img');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status === 404) {
        document.querySelector('.error-msg').style.display = "block";
        document.querySelector('.error-msg').style.color = "red";
        // document.querySelector('.weather').style.display = "none";
    }
    else {
        document.querySelector('.error-msg').style.display = "none";
        const data = await response.json();

        // console.log(data);

        document.querySelector('.weather-name').innerHTML = data.weather[0].main;
        document.querySelector('#temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.weather h2').innerHTML = data.name;
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
        
        if (data.weather[0].main == "Clouds") {
            weatherImg.src = "./assets/clouds.png";
        }
        else if (data.weather[0].main == "Haze") {
            weatherImg.src = "./assets/haze.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherImg.src = "./assets/rain.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherImg.src = "./assets/snow.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherImg.src = "./assets/clear-sky.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherImg.src = "./assets/mist.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherImg.src = "./assets/drizzle.png";
        }
        else {
            weatherImg.src = "./assets/error.png";
        }

        // document.querySelector('.weather').style.display = "block";

    }
}

searchCity.addEventListener('keydown',function(event){
    if(event.key === 'Enter'){
        checkWeather(searchCity.value);
    }
});

searchBtn.addEventListener('click', () => {
    checkWeather(searchCity.value);
});

