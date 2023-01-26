import React, { useState, useEffect } from 'react';

const TimeApi = process.env.REACT_APP_TIMEZONE_API_KEY;

// Time API needs coordinates to work

const Time = (props) => {
    const {coordinates} = props;
    const [timeData, setTimeData] = useState(null);
    const [prevCoordinates, setPrevCoordinates] = useState(coordinates);

useEffect(() => {
        if (coordinates && coordinates !== prevCoordinates && coordinates.latitude && coordinates.longitude) {
            setPrevCoordinates(coordinates);
            getTimeData(coordinates.latitude, coordinates.longitude);
        }
    }, [coordinates, prevCoordinates]);
    

    const getTimeData = async (lat, lon) => {
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

export default Time;

