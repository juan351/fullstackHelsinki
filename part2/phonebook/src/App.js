import React, { useState } from 'react'
import Person from './components/Person'
import { nanoid } from 'nanoid'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)
  const addPerson = (event) => {
    event.preventDefault()
    if (persons.find(element => element.name === newName)){
        return alert(`${newName} is already added to phonebook`)
    }
    const personObject = {name: newName,}
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
      {persons.map(person => (          
          <Person key={nanoid()} name={person.name} />        
        ))}
      </div>
    </div>
  )
}

export default App