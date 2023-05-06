const weather = document.querySelector(".js-weather");

const API_KEY = '15f8fbf5168d6da001f1e3c2c4b76277';
const COORDS = 'coords';

function getWether(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5\/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return response.json();
    }).then(function(json){
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
   const latitude = position.coords.latitude;
   const longitude = position.coords.longitude;
   const coordsObject = {
       latitude,
       longitude
   };
   saveCoords(coordsObject);
   getWether(latitude, longitude);
}

function handleGeoError() {
    console.log("failed!");
}

function askforCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askforCoords();
    }else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWether(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();    
}

init(); 