import React from 'react';

const WeatherDisplay = (props) => {
    const weatherData = props.weatherData;
    if (!weatherData) {
    return <p></p>;
    }

    const {name, sys, main, weather, wind} = weatherData;
    return(
        <div>
            <h1 className="city">{name}, {sys.country}</h1>
            <p className="temperature">Temperature: {main.temp}</p>
            <p className="feelslike">Feels like: {main.feels_like}</p>
            <p className="description">{weather[0].description}</p>
            <p className="humidity">Humidity: {main.humidity}</p>
            <p className="wind">Wind: {wind.speed}</p>
        </div>
    );
};

export default WeatherDisplay;