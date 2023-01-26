import React from 'react';
import Coordinates from './components/Coordinates';
import CityWeatherFetcher from './components/CityWeatherFetcher';
import CitySearch from './components/CitySearch';
import CityCoordinates from './components/CityCoordinates';
import CityTime from './components/CityTime';
import Image from './components/Image';
import './components/styles.css';


const App = () => {
    const [city, setCity] = React.useState(null);
    const [coordinates, setCoordinates] = React.useState(null);
    const [citySearched, setCitySearched] = React.useState(false);

    const handleSearch = (newCity) => {
        setCity(newCity);
        setCitySearched(true);
    }

    const handleFetchSuccess = () => {
        setCity(null);
    }

    const handleFetchCoordinates = (newCoordinates) => {
        setCoordinates(newCoordinates);

    }

    return (
        <div>
          <CityWeatherFetcher city={city} onFetchSuccess={handleFetchSuccess} /> 
          <CityCoordinates city={city} onFetchSuccess={handleFetchCoordinates} />
          <CityTime coordinates={coordinates} onFetchSuccess={handleFetchSuccess} />
          <Image city={city} onFetchSuccess={handleFetchSuccess} />
          
          { !citySearched && <Coordinates /> }

          <CitySearch onSearch={handleSearch} />
        </div>
    );
};


export default App;
