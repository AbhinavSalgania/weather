import React, { useState, useEffect } from 'react';

const ImageApi = process.env.REACT_APP_PEXELS_API_KEY;

const CityImage = (props) => {
    const {city} = props;
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        if(city) {
            getImage(city);
        }
    }, [city]);

    const getImage = async (city) => {
        const response = await fetch(`https://api.pexels.com/v1/search?query=${city}&per_page=1`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: ImageApi
            }
        });
        const data = await response.json();
        const image = data.photos[0].src.large;
        setImageUrl(image);
    }

    return (
        <div className='cityimg'>
            {imageUrl && <img src={imageUrl} alt={city} />}
        </div>
    )
}

export default CityImage;



