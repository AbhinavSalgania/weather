import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';

const WeatherApi = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

const CityWeatherFetcher = (props) => {
    const {city, onFetchSuccess} = props;
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        if(city) {
            const getWeatherData = async (city) => {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WeatherApi}&units=metric`);
                const data = await response.json();
                setWeatherData(data);
                if(onFetchSuccess && typeof onFetchSuccess === 'function') {
                    onFetchSuccess();
                }
            };
            getWeatherData(city);
        }
    }, [city, onFetchSuccess]);

    return (
        <div>
            <WeatherDisplay weatherData={weatherData} />
        </div>
    )
};

export default CityWeatherFetcher;