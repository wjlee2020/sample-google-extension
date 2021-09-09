const weather = document.getElementById('weather');
const currentLocation = document.getElementById('location');

function getWeather() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            let currentLat = position.coords.latitude;
            let currentLong = position.coords.longitude;
            console.log(position.coords.latitude, position.coords.longitude);
            const weatherData = (lat, long, key) => {
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${key}`)
                    .then(response => response.json())
                    .then(data => {
                        // console.log(data)
                        weather.textContent = Math.round(data.main.temp)
                        currentLocation.textContent = data.name
                        currentLocation.innerHTML += `<img id="weather-icon" src=http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png />`
                    })
                    .catch(e => {
                        console.log(e + " : something happened. check your api call / key")
                    })
            }
            weatherData(currentLat, currentLong, 'GETYOURKEY')
        });
    } else {
        console.log('nooo')
        /* geolocation IS NOT available */
    }
}

export default getWeather;