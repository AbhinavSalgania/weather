import React, { useState, useEffect } from 'react';

const TimeApi = process.env.REACT_APP_TIMEZONE_API_KEY;


// get coordinates fro CityCoordinates.js
// and display time using dbtime API

const CityTime = (props) => {
    const {coordinates} = props;
    const [prevCoordinates, setPrevCoordinates] = useState(JSON.stringify(coordinates));
    const [timeData, setTimeData] = useState(null);

    useEffect(() => {
        if (coordinates && JSON.stringify(coordinates) !== prevCoordinates) {
            setPrevCoordinates(JSON.stringify(coordinates));
            getTimeData(coordinates);
        }
    }, [coordinates, prevCoordinates]);
    

    const getTimeData = async ({lat, lon}) => {
        const timestamp = Date.now() / 1000;
        const response = await fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lon}&timestamp=${timestamp}&key=${TimeApi}`);
        const timeData = await response.json();
        const timeString = new Date().toLocaleString('en-US',{
            timeZone: timeData.timeZoneId,
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });

        setTimeData({formatted: timeString});
        
    };

    // create a new element with classname time

    return (
        <div className="time">
            {timeData && timeData.formatted}
        </div>
    )
};


export default CityTime;
    

