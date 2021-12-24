import React from 'react'
import Languages from './Languages'

const Country = (country) =>{
    if(!country.capital){
        return <p>{country.name} <button onClick={country.onClick} value={country.name}>show</button></p>
    }
    return (<><h1>{country.name}</h1>
    <p>capital: {country.capital}</p>
    <p>population: {country.population}</p>
    <h2>languages</h2>
    <ul>
        <Languages lang={country.languages}/>
    </ul>
    <img src={country.imgflag} />
    </>)
    
}

export default Country