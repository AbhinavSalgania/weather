import React, { useState } from 'react';

const CitySearch = (props) => {
    const [city, setCity] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        props.onSearch(city);
        setCity('');
    }

    return (
        <div>
            <form className = "searchForm" onSubmit={handleSubmit}>
                <input className="searchBar" type="text" value={city} onChange={(event) => setCity(event.target.value)} />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default CitySearch;