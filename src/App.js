import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const appid = '973497d219f1c7351022d3f0bbbb2724';
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [iframesrc, setiframesrc] = useState(null)

  // getLocation()
  useEffect(() => {
    if (city != null) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=metric`)
        .then(function (response) {
          const newWeather = response.data
          setWeather(newWeather)
        })
        .catch((error) => {
          console.log('error occured ', error);
        })
    }
    if (city==null && weather!=null){
      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          console.log("Geolocation is not supported by this browser.");
        }
      }
      function showPosition(position) {
        // console.log(`latitude = ${position.coords.latitude}`);
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${appid}&units=metric`)
          .then(function (response) {
            const newWeather = response.data
            setWeather(newWeather)
          })
          .catch((error) => {
            console.log('error occured ', error);
          })
      }
      getLocation()
      if (weather != null) {
        var descp = weather.weather[0].description
        console.log(weather.weather[0].description);
        if (descp ==='overcast clouds' || descp === 'smoke') {
          console.log('Raining');
        }
        if (descp != 'cloud') {
          console.log(' ! rain');
          var newiframeSrc = 'Hello'
          setiframesrc(newiframeSrc)
        }
      }
      console.log(iframesrc);
    }
  }, [city])


  return (
    <div className='app-main'>
      <div>
        <h1>Weather App</h1>
        <br />
        <input type="text" name="city" id="city" onChange={() => {
          setInterval(() => {
            setCity(document.getElementById('city').value)
          }, 1000);
        }} />

        <br /> <br />
        <br /> <br />
        <br /> <br />

        {
          (weather !== null) ?
            <>
              <h3> {weather.name} </h3>
              <span className='temp'>{weather.main.temp} <sup>o</sup> C</span>
              <h2> {weather.weather[0].description}  <br />
              </h2>
            </>
            :
            <h4>Weather Updates</h4>
        }

        <footer> &copy; QambarAli</footer>
      </div>
    </div>
  )

}

export default App;
