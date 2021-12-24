import React from 'react'

const Weather = (props) => {
    console.log(props)
    if(props != null)
        return (<>
            <h2>Weather in {props.weather.location.name}</h2>
            <p><strong>temperature:</strong> {props.weather.current.temperature} Celsius</p>
            <img src={props.weather.current.weather_icons} />
            <p><strong>wind:</strong> {props.weather.current.wind_speed}</p>
            </>)
    return null;
        

}

export default Weather