const convertFah = (celsius) => {
  return celsius * 9/5 + 32;
}

const convertFahToMph = (klm) => {
  return klm * 0.621371
}

const calulateWindChill = (celTemp, distanceMph) => {
  let fahTemp = convertFah(celTemp);
  let distance = convertFahToMph(distanceMph);

  let windchill = "";

  if (fahTemp <= 50 && distance > 3){
    let calcWindChill = 35.74 + (0.6215 * fahTemp ) - (35.75 * Math.pow(distance, 0.16)) + (0.4275 * fahTemp * Math.pow(distance, 0.16));
    windchill = calcWindChill.toFixed(2).toString();
  } else{
    windchill = "N/A";
  }
  return windchill;
}

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

    temp.innerHTML = ((jsObject.main.temp -32) * 5/9).toFixed(1);
    wspeed.innerHTML = jsObject.wind.speed.toFixed(1);

    let windchill = calulateWindChill(temp, wspeed);

    document.querySelector('#chill').innerHTML = windchill;
    
  });

