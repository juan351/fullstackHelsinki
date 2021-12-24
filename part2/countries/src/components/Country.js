import React, { useState, useEffect } from 'react'
import Languages from './Languages'
import axios from 'axios'
import Weather from './Weather'

const api_key = process.env.REACT_APP_API_KEY



const Country = (country) =>{
    
    const [weather, setWeather] = useState(null)
    
    useEffect(() => {
        
        axios
          .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
          .then((response) => {
            setWeather(response.data)
            
          })
          
      }, [])
      console.log(weather)
      if(!country.capital){
        return <p>{country.name} <button onClick={country.onClick} value={country.name}>show</button></p>
    }
      return weather == null? null : (<><h1>{country.name}</h1>
        <p>capital: {country.capital}</p>
        <p>population: {country.population}</p>
        <h2>languages</h2>
        <ul>
            <Languages lang={country.languages}/>
        </ul>
        <img src={country.imgflag} />
        <Weather weather={weather} />
        </>)  
    
    
}

export default Country