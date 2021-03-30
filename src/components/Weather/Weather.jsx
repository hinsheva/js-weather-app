import React from 'react';

const Weather = ({weather}) => {
    return (
        <div className="weather-box">
        <div className="temp">{Math.round(weather.main.temp)}°</div>
        <div className="weather">{weather.weather[0].main}</div>
        <div className="description">{(weather.weather[0].description.toUpperCase())}<br /><br />Feels like: {Math.round(weather.main.feels_like)}°, Humidity: {weather.main.humidity}%, Wind: {weather.wind.speed} m/s</div>
      </div>
    )
}

export default Weather;