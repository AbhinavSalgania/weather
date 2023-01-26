import React, {useState, useEffect} from 'react';
import WeatherFetchCoord from './WeatherFetchCoord';
import Time from './Time';

const Coordinates = () => {
    const [coordinates, setCoordinates] = useState(null);    
    // use geolocation API to get coordinates

    const getCoordinates = async () => {
        try{
            const position = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });
            const {latitude, longitude} = position.coords;
            setCoordinates({latitude, longitude});
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    useEffect(() => {
        getCoordinates();
    }, []);

    return (
        <div>
        <Time coordinates={coordinates} />
        <WeatherFetchCoord coordinates={coordinates} />
        </div>
    );
};
        
export default Coordinates;