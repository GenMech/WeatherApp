// 5f8ea32f6cca3622266517a9175b108c

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
 
const weatherApi = {
     key: "5f8ea32f6cca3622266517a9175b108c",
     baseUrl: "https://api.openweathermap.org/data/2.5/weather"
 }

 // On Enter the City
const searchBox = document.getElementById('inputBox');

searchBox.addEventListener('keypress', (event) => {
    
    if(event.key === 'Enter'){ 
    console.log(searchBox.value);
    getWeather(searchBox.value);
    document.querySelector('.weather').style.display = "block";
    }
});

// To get weather report

function getWeather(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeather);
}

// To show weather report

function showWeather(weather) {
    console.log(weather);

    let city = document.getElementById('location');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temperature');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let Humidity = document.getElementById('humidity');
    Humidity.innerHTML = `${weather.main.humidity}&percnt;`;
     
    let Wind = document.getElementById('wind');
    Wind.innerHTML = `${weather.wind.speed} Mps`;

    let Visibility = document.getElementById('visibility');
    Visibility.innerHTML = `${weather.visibility} m`;

    let weatherType = document.getElementById('type')
    weatherType.innerText = `${weather.weather[0].main}`;



if(weatherType.textContent == 'Clear') {
    document.body.style.backgroundImage = "url('Image/Clear.jpg')";
    let clearly = document.getElementById('icon-desc');
    clearly.innerHTML = '<i class="wi wi-day-sunny"></i>'
    
} else if(weatherType.textContent == 'Clouds') {

    document.body.style.backgroundImage = "url('Image/Cloudy.jpg')";
    let cloudy = document.getElementById('icon-desc');
    cloudy.innerHTML = '<i class="wi wi-day-cloudy"></i>'
    
} else if(weatherType.textContent == 'Haze') {

    document.body.style.backgroundImage = "url('Image/Haze.jpg')";
    let hazey = document.getElementById('icon-desc');
    hazey.innerHTML = '<i class="wi wi-day-haze"></i>'
    
}     else if(weatherType.textContent == 'Rain') {
    
    document.body.style.backgroundImage = "url('Image/Rainy.jpg')";
    let rainy = document.getElementById('icon-desc');
    rainy.innerHTML = '<i class="wi wi-day-rain"></i>'
    
} else if(weatherType.textContent == 'Snow') {
    
    document.body.style.backgroundImage = "url('Image/Snow.jpg')";
    let snowy = document.getElementById('icon-desc');
    snowy.innerHTML = '<i class="wi wi-day-snow"></i>'

} else if(weatherType.textContent == 'Thunderstorm') {

    document.body.style.backgroundImage = "url('Image/Thunderstorm.jpg')";
    let thunder = document.getElementById('icon-desc');
    thunder.innerHTML = '<i class="wi wi-thunderstorm"></i>'

} else if(weatherType.textContent == 'Mist') {

    document.body.style.backgroundImage = "url('Image/Mist.jpg')";
    let misty = document.getElementById('icon-desc');
    misty.innerHTML = '<i class="wi wi-fog"></i>'
}    

}


let date = document.getElementById('date');
let todayDate = new Date();
date.innerText = dateTimeManage(todayDate);

// To Manage date and time 
function dateTimeManage(DateComponents) {

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let hr = DateComponents.getHours();
    let min = DateComponents.getMinutes();
    let ampm = hr >= 12 ? 'pm' : 'am';

    let year = DateComponents.getFullYear();
    let month = months[DateComponents.getMonth()];
    let date = DateComponents.getDate();

    return `${hr}:${min} ${ampm} | ${month} ${date} , ${year}`;
}