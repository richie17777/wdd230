const temp = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9b5c7fa82f3408fc04926b03ca35be91&unit=metric"

fetch(temp)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.querySelector('#temp').textContent = (jsObject.main.temp - 273.15).toFixed(1);

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;

    // const temp = jsObject.main.temp.toFixed(1);
    const wspeed = (jsObject.wind.speed).toFixed(1);
    document.querySelector('#windSpeed').innerHTML = wspeed;
    document.querySelector('figcaption').innerHTML = desc;

    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);

    let temp =  Number(jsObject.main.temp - 273.15);
    let wSpeed =  Number(jsObject.wind.speed);
    let windchill = "";

    if (temp <= 50 && wSpeed > 3){
      windchill = calulateWindChill(temp, wSpeed);
    } else{
      windchill = "N/A";
    }

    function calulateWindChill(temp, wSpeed){
      // windchill = 13.12 + (0.6215 * temp) - 11.37 (wSpeed^0.16) + 0.3965* temp (wSpeed^0.16)
      chill = 35.74 + (0.6215 * temp ) - (35.75 * Math.pow(wSpeed, 0.16)) + (0.4275 * temp * Math.pow(wSpeed, 0.16));
      return chill;
    }
    // console.log(windchill)

    document.querySelector('#chill').innerHTML = windchill;
  });

