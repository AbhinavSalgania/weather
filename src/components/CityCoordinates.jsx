import React, { useState, useEffect } from 'react';
import CityTime from './CityTime';

const WeatherApi = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;


const CityCoordinates = (props) => {
    const {city} = props;
    const [coordinates, setCoordinates] = useState(null);

    useEffect(() => {
        if(city) {
            getCoordinates(city);
        }
    }, [city]);

    const getCoordinates = async (city) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WeatherApi}&units=metric`);
        const data = await response.json();
        const{lat, lon} = data.coord;
        setCoordinates({lat, lon});
    };

    //return time of the city

    return (
        <div>
            <CityTime coordinates={coordinates} /> 
        </div>
    )
};

export default CityCoordinates;
