// const temp = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=9b5c7fa82f3408fc04926b03ca35be91&units=metric"

const temp = "https://api.openweathermap.org/data/2.5/onecall?lat=5.533&lon=-0.422&dt=1586468027&appid=9b5c7fa82f3408fc04926b03ca35be91&units=metric"
// const temp = "https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=9b5c7fa82f3408fc04926b03ca35be91&units=metric"

fetch(temp)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.querySelector('#temp').textContent = (jsObject.current.temp).toFixed(1);
    document.querySelector('#humid').textContent = jsObject.current.humidity

    document.querySelector('#day1Temp').textContent = (jsObject.daily[1].temp.day).toFixed(1);
    document.querySelector('#day2Temp').textContent = (jsObject.daily[2].temp.day).toFixed(1);
    document.querySelector('#day3Temp').textContent = (jsObject.daily[3].temp.day).toFixed(1);

    document.querySelector('#speed1').textContent = jsObject.daily[1].weather[0].description;
    document.querySelector('#speed2').textContent = jsObject.daily[2].weather[0].description;
    document.querySelector('#speed3').textContent = jsObject.daily[3].weather[0].description;

    document.querySelector('#humidity1').textContent = jsObject.daily[1].humidity;
    document.querySelector('#humidity2').textContent = jsObject.daily[2].humidity;
    document.querySelector('#humidity3').textContent = jsObject.daily[3].humidity;

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
    const desc = jsObject.current.weather[0].description;

    document.querySelector('#icon').setAttribute('src', iconsrc);
    document.querySelector('#icon').setAttribute('alt', desc);
    document.querySelector('figcaption').innerHTML = desc;

  });

