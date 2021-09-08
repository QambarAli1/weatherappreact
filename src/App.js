import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  localStorage.clear()
  const appid = '973497d219f1c7351022d3f0bbbb2724';
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    console.log(
      "Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude
    );
    localStorage.setItem('lat', position.coords.latitude)
    localStorage.setItem('long', position.coords.longitude)
  }
  getLocation()
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
    else {
      var lat = JSON.parse(localStorage.getItem('lat'))
      var long = JSON.parse(localStorage.getItem('long'))

      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${appid}&units=metric`)
        .then(function (response) {
          const newWeather = response.data
          setWeather(newWeather)
        })
        .catch((error) => {
          console.log('error occured ', error);
        })
    }

  }, [city])


  return (
    <div className='app-main'>
      <div>
        <h1>Weather App</h1>
        <br />
        <input type="text" name="city" id="city" />
        <button
        onClick= {()=>{
          setCity(document.getElementById('city').value)
        }}
        >
          Search</button>
        <br /> <br />
        <br /> <br />
        <br /> <br />

        {
          (weather !== null) ?
            <>
              <h3> {weather.name} </h3>
              <h2> {weather.weather[0].description}  <br />
                <span className='temp'>{weather.main.temp} <sup>o</sup> C</span>
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
