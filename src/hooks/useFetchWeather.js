import { useState, useEffect } from 'react';
import { getWeather } from '../helpers/getWeather';

export const useFetchWeather = ( city ) => {

    const [value, setValue] = useState({
        data: [],
        loading: true
    })


    useEffect(() => {
        getWeather(city).then( resp => 
            setTimeout( () => {
                setValue({
                    data: resp,
                    loading: false
                })
            },2500)
    
        );
        return () => {
            setValue({
                data: [],
                loading: true
            });
        }
    }, [city]);

    return value;
}