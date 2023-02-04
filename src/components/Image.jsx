import React, { useState, useEffect } from 'react';

const ImageApi = process.env.REACT_APP_PEXELS_API_KEY;

const CityImage = (props) => {
    const {city} = props;
    const [imageUrl, setImageUrl] = useState(null);
    // add photographer name
    // add photographer link
    const [photographer, setPhotographer] = useState(null);
    const [photographerUrl, setPhotographerUrl] = useState(null);

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
        console.log (data);
        const image = data.photos[0].src.large;
        const photographer = data.photos[0].photographer;
        const photographerUrl = data.photos[0].photographer_url;
        setPhotographer(photographer);
        setPhotographerUrl(photographerUrl);
        setImageUrl(image);
    }

    return (
        <div>
            {imageUrl && <img src={imageUrl} className="cityimg" alt={city} />}
            <p class="photographer">
            Photo by:&nbsp;
            {photographer && <a href = {photographerUrl} className = "photographer" target="_blank" rel="noreferrer">{photographer}</a>}
            </p>
        </div>
    )
}

export default CityImage;



