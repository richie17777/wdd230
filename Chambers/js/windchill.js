const temp = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9b5c7fa82f3408fc04926b03ca35be91"

fetch(temp)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#temp').textContent = jsObject.main.temp.toFixed(1);
    document.querySelector('#windSpeed').textContent = jsObject.wind.speed.toFixed(1);

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').innerHTML = desc;

    let windchill = ""

    if (temp <= 50 && wsp > 3){
      windchill = windChill(temp, wsp);
      windchill = `${windchill}`;
    }else{
      windChill = "N/A";
    }
    
    document.querySelector('#chill').textContent = windChill;
    
    function windChill(t,s){
      return (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));
    }
  });

