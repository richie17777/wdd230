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
  return "It works"
}