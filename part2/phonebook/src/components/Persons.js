import React from 'react'
import Person from './Person'
import { nanoid } from 'nanoid'

const Persons = ({personsToShow, onDelete}) => {
    return personsToShow.map(person => (          
        <Person key={nanoid()} id={person.id} name={person.name} number={person.number} onDelete={onDelete}/>        
      ))
}

export default Persons