import React, { useState } from 'react'
import Person from './components/Person'
import { nanoid } from 'nanoid'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number:'040-435342' },
    { name: 'Ada Lovelace', number: '42-34-3234256'},
    { name: "Alan Turin", number: '232-321435'},
    { name: "Don Adams", number: '23-34-3452355'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ phoneNumber, setPhoneNumber] = useState('')
  const [ filter, setFilter ] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)
  const handlePhoneNumber = (event) => setPhoneNumber(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)
  
  const addPerson = (event) => {
    event.preventDefault()
    if (persons.find(element => element.name === newName)){
        return alert(`${newName} is already added to phonebook`)
    }
    const personObject = {name: newName, number: phoneNumber}
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const personsToShow = filter === '' ? persons : persons.filter(person => person.name.includes(filter))

  return (
    <div>
      <h2>Phonebook</h2>
      <p>filter shown with <input value={filter} onChange={handleFilterChange}/></p>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={phoneNumber} onChange={handlePhoneNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
      {personsToShow.map(person => (          
          <Person key={nanoid()} name={person.name} number={person.number}/>        
        ))}
      </div>
    </div>
  )
}

export default App