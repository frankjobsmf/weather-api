import React from 'react';
import { useFetchWeather } from '../hooks/useFetchWeather';

const CityWeatherGrid = ({ city }) => {

    const { data, loading } = useFetchWeather(city);

    const { name, region, country, celsius } = data;
    
    console.log(name);

    return (
        <>
        {
            loading
            ?
            (
                <div className="alert alert-primary" role="alert">
                        Cargando ciudad...
                </div>
            )
            :
            (
                <div className="city-weather-grid">
                    <h2 className="nameCity">{name}</h2>
                    <hr/>
                    
                    <h3 className="regionCountry">{region} - {country}</h3>
                    <h2 className="celsius">{celsius}°</h2>
                </div>
            )
        }

    </>

    )
}

export default CityWeatherGrid;