export const getWeather = async( city ) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=efdbee390beb40dcae701258212504&q=${city}&aqi=no`;
    const resp = await fetch( url );
    const data = await resp.json();

    if ( data.error){
        const cityWeather = {
            name: '',
            region: '',
            country: '',
            celsius: ''
        }

        return cityWeather;
    }

    const { location, current } = data; 

    const cityWeather = {
            name: location.name,
            region: location.region,
            country: location.country,
            celsius: current.temp_c
        }

    return cityWeather;
}