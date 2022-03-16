const temp = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9b5c7fa82f3408fc04926b03ca35be91"

fetch(temp)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const temp = document.querySelector('#temp'); //#endregion.textContent = jsObject.main.temp.toFixed(1);
    const wspeed = document.querySelector('#windSpeed'); //#endregion.textContent = jsObject.wind.speed.toFixed(1);

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').innerHTML = desc;

    temp.innerHTML = jsObject.main.temp.toFixed(1);
    wspeed.innerHTML = jsObject.wind.speed.toFixed(1);

    let windchill = ""

    if (temp <= 50 && wspeed > 3){
      windchill = windChill(temp, wspeed);
      windchill = `${windchill}`;
    }else{
      windChill = "N/A";
    }
    
    document.querySelector('#chill').innerHTML = windchill;
    
    function windChill(t,s){
      return (35.74 + (0.6215 * t))-(35.75 * Math.pow(s,0.16)) + (0.4275*t*Math.pow(s,0.16));
    }
  });

