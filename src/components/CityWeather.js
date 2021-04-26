import React, {useState} from 'react';

const CityWeather = ( {setCityValue} ) => {

    const [ inputValue, setInputValue ] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue === ''){
            return;
        }

        setCityValue([inputValue]);
        setInputValue('');
    } 

    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <button
                        onClick={handleSubmit}
                        className="btn btn-primary" 
                        type="button"
                        >Buscar
                    </button>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Ciudad..." 
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </div>
            </form>
        </div>
    )
}

export default CityWeather;