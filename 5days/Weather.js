import { useEffect, useState } from "react";
 

function GetWether() { 
    const [text, setText] = useState('')
    useEffect(() => { 
        navigator.geolocation.getCurrentPosition(handleGeoSuccuess, handlerGeoError);
    }, []);

    function handleGeoSuccuess(position) {
        console.log("success!")
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const coordsObject = {
            latitude,
            longitude
        }
        localStorage.setItem("coords", JSON.stringify(coordsObject));
        tellWeather(latitude, longitude);
    }
    
    function handlerGeoError() {
        console.log("error!")
    }
    
    function tellWeather(lat, lon) {
        const API_KEY = '15f8fbf5168d6da001f1e3c2c4b76277';
        console.log(lat);
        console.log(lon);
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`).then(
            function(response) {
                console.log(response);
                return response.json();
            }
        ).then(function(json){
            const temperature = json.main.temp;
            const position = json.name;
            // console.log(`${temperature} @ ${position}`);
            setText(`${temperature} @ ${position}`);
            
        })
    }
    
    return(
        <div>
            {text}
        </div>
    );
}

export default GetWether;