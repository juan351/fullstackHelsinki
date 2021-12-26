import React from 'react'

const Person = (person) =>{
    return <p>{person.name} {person.number} <button onClick={person.onDelete} value={person.id} name={person.name}>delete</button></p>

}

export default Person