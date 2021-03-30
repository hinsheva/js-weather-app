import React, { useState } from 'react';

const weatherAPI = {
  key: "dd2c4feffaaa6b1573e3d9c27d84fd07",
  baseURL: "https://api.openweathermap.org/data/2.5/"
}


function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = event => {
    if(event.key === "Enter") {
      fetch(`${weatherAPI.baseURL}weather?q=${query}&units=metric&APPID=${weatherAPI.key}`)
        .then(response => response.json())
        .then(result => {
          setWeather(result);
          setQuery('');
        });
    }
  }


  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={
      (typeof weather.main !="undefined")
        ?((weather.main.temp > 15)
          ? 'app-warm'
          : 'app')
      :'app'}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Find your weather..."
            onChange={e=> setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">{Math.round(weather.main.temp)}°</div>
            <div className="weather">{weather.weather[0].main}</div>
            <div className="description">{(weather.weather[0].description.toUpperCase())}<br /><br />Feels like: {Math.round(weather.main.feels_like)}°, Humidity: {weather.main.humidity}%, Wind: {weather.wind.speed} m/s</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
