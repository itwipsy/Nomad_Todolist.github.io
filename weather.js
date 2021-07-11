const API_KEY = "fd9570d74ab8e7c0a6b4c1904b5f12c3";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in",lat,lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json())
              .then(data => {
                  const weather = document.querySelector("#weather span:first-child")
                  const city = document.querySelector("#weather span:last-child")
                  
                  city.innerText = "  SEOUL";
                  weather.innerText = `${data.weather[0].main} / ${data.main.temp} °C`;
              });
}


function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);