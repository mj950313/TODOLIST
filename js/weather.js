const API_KEY = "040cbeabbaf60380e2a7cb628a81a3ad"

function onGeoOk(position){
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json())
  .then(data => {
    const weather = document.querySelector("#weather span:first-child"); 
    const city = document.querySelector("#weather span:last-child"); 
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${Math.floor(data.main.temp)}° `;
  });
}

function onGeoError(){
  alert("날씨 정보를 제공할 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);