import React from 'react'
import Person from './Person'
import { nanoid } from 'nanoid'

const Persons = ({personsToShow}) => {
    return personsToShow.map(person => (          
        <Person key={nanoid()} name={person.name} number={person.number}/>        
      ))
}

export default Persons