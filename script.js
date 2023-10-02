var city = document.getElementById('city-searched');
var cityTemp = document.getElementById('Temp');
var cityWind = document.getElementById('Wind');
var cityHumidity = document.getElementById('Humidity');
var historyEl = document.getElementById("history");
var clearEl = document.getElementById("clear-history");
var searchBtn = document.querySelector(".Search-btn");

const apiKey = "d7f1d0941df75466d2a1db441fbabc00";

function getWeather (cityName) {
    let queryURL= `http:api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
    fetch(queryURL).then(function(response) {
        if (response.ok) {
            response.json().then(function (geo) {
                console.log(geo);

            })
        }
    });
};


function searchSection () {
    searchedCities()
}

function searchedCities () {
    var cityNames = document.querySelector ('.input-text').value;
    console.log (cityNames);
}

searchBtn.addEventListener('click', getWeather);