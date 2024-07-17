//c0a81f552cf9abf5566f4edef2dda73c

const date = document.getElementById('date');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const tempImg = document.getElementById('tempImg');
const description = document.getElementById('description');
const tempMax = document.getElementById('temp-max');
const tempMin = document.getElementById('temp-min');

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let dateObj = new Date();
let month = monthNames[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate()-1;
let year = dateObj.getUTCFullYear();

date.innerHTML =`${month} ${day} ${year}`;

const app = document.getElementById('app');

const getWeather = async () =>{
    try{
        const cityName = document.getElementById("searchBarInput").value;
        const WeatherDataFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c0a81f552cf9abf5566f4edef2dda73c&units=metric`,
           { headers : {
                Accept : "application/json"
            }
    });

    const weatherData = await WeatherDataFetch.json();
    console.log(weatherData)
    city.innerHTML=`${weatherData.name}`;
    description.innerHTML= `${weatherData.weather[0].main}`;
    tempImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png"/>`;
    temp.innerHTML= `<h2>${Math.round(weatherData.main.temp)}°C</h2>`;
    tempMax.innerHTML= `${weatherData.main.temp_max}°C`;
    tempMin.innerHTML= `${weatherData.main.temp_min}°C`;
    }
    catch(error){
        console.log(error);
    }
}
getWeather();
