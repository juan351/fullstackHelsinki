import React from 'react'
import Country from './Country'
import { nanoid } from 'nanoid'


const Countries = (props) => {
    if(props.countriesToShow.length > 10){
        return "Too many matches, specify another filter"
    }
    if(props.countriesToShow.length == 1){
        return props.countriesToShow.map(country => (          
            <Country key={nanoid()} name={country.name.common} capital={country.capital[0]} population={country.population} languages={country.languages} imgflag={country.flags.png}/>        
        ))
    }
    return props.countriesToShow.map(country => (          
        <Country key={nanoid()} name={country.name.common} onClick={props.onClick}/>        
    ))
}

export default Countries