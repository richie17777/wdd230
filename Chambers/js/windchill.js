let temp = parseFloat(document.querySelector('#temp').textContent);
let wsp = parseFloat(document.querySelector('#windSpeed').textContent);
let windchill = "";

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