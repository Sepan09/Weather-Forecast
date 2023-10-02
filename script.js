var cityName = document.getElementById('city-searched');
var cityTemp = document.getElementById('Temp');
var cityWind = document.getElementById('Wind');
var cityHumidity = document.getElementById('Humidity');
var historyEl = document.getElementById("history");
var clearEl = document.getElementById("clear-history");
var searchBtn = document.querySelector(".Search-btn");

const apiKey = "d7f1d0941df75466d2a1db441fbabc00";

function getWeather (cityName) {
    let queryURL = queryURL = "http:api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}"
    fetch(queryURL)
    .then(function(response) {
        console.log(response.status)
        var currentDate = new Date(response.date.dt * 1000);
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1;
        var year = currentDate.getFullYear();
        cityName.innerHTMl = response.date.name + " (" + month + "/" + day + "/" + year + ") ";

        cityTemp.innerHTML = "Temperature: " + k2f(response.data.main.temp) + " &#176F";
        cityHumidity.innerHTML = "Humidity: " + response.data.main.humidity + "%";
        cityWind.innerHTML = "Wind Speed: " + response.data.wind.speed + " MPH";
    })
}


function searchSection () {
    searchedCities()
}

function searchedCities () {
    var cityNames = document.querySelector ('.input-text').value;
    console.log (cityNames);
}

searchBtn.addEventListener('click', getWeather);