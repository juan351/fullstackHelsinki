import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
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

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then((response) => {
        setPersons(response.data)
      })
  }, [])

  const personsToShow = filter === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} phoneNumber={phoneNumber} handlePhoneNumber={handlePhoneNumber}/>
      <h2>Numbers</h2>
      <div>
      <Persons personsToShow={personsToShow} />
      </div>
    </div>
  )
}

export default App