import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';

const WeatherApi = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

const CityWeatherFetcher = (props) => {
    const {city, onFetchSuccess} = props;
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    // eslint-disable-next-line
    const _unused = error;

    useEffect(() => {
        if(city) {
            const getWeatherData = async (city) => {
                try {
                    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WeatherApi}&units=metric`);
                    const data = await response.json();
                    if (data.cod !== 200) {
                        throw new Error('City not found');
                    }
                    setWeatherData(data);
                    if(onFetchSuccess && typeof onFetchSuccess === 'function') {
                        onFetchSuccess();
                    }
                } catch (error) {
                    setError(error.message);
                    window.alert(error.message);
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