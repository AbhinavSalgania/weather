import React from 'react';

const WeatherDisplay = (props) => {
    const weatherData = props.weatherData;
    if (!weatherData) {
    return <p></p>;
    }

    const {name, sys, main, weather, wind} = weatherData;
    return(
        <div class = "weatherinfo">
            <h1 className="city">{name}, {sys.country}</h1>
            <p className="temperature">Temperature: {main.temp} °C </p>
            <p className="feelslike">Feels like: {main.feels_like} °C</p>
            <p className="description">{weather[0].description}</p>
            <p className="humidity">Humidity: {main.humidity} % </p>
            <p className="wind">Wind: {wind.speed} km/hr </p>
        </div>
    );
};

export default WeatherDisplay;