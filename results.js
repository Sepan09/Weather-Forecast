var cityName = document.getElementById('city-searched');
var cityTemp = document.getElementById('Temp');
var cityWind = document.getElementById('Wind');
var cityHumidity = document.getElementById('Humidity');
var historyEl = document.getElementById("history");
var clearEl = document.getElementById("clear-history");


const apiKey = "d7f1d0941df75466d2a1db441fbabc00";

function getWeather (cityName) {
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
    fetch(queryURL)
    .then(function(response) {

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




