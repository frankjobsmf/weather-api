import React, {useState} from 'react';
import CityWeather from './components/CityWeather';
import CityWeatherGrid from './components/CityWeatherGrid';

const WeatherAPI = () => {
    
    const [ cityValue, setCityValue ] = useState([]);
    
    return (
        <div className="container">
            <h2 className="title"> Weather API </h2>
            
            <div className="city-weather">
                <CityWeather setCityValue={setCityValue}/>

                {
                    cityValue.map( cv => (
                        <CityWeatherGrid 
                            key={ cv }
                            city={ cv }
                        />
                    ))
                }
            </div>



        </div>
    )
}

export default WeatherAPI;