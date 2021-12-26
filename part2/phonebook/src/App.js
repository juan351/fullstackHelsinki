import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ phoneNumber, setPhoneNumber] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ message, setMessage ] = useState(null)

  const handleNameChange = (event) => setNewName(event.target.value)
  const handlePhoneNumber = (event) => setPhoneNumber(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)
  
  const addPerson = (event) => {
    event.preventDefault()
    if (persons.find(element => element.name === newName)){
        if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
          const personFound = persons.find(element => element.name === newName)
          const personChanged = {...personFound, number: phoneNumber}
          personService
            .update(personFound.id, personChanged)
            .then(returnedPerson => {
              setPersons(persons.map(person=> person.id !== personFound.id ? person : returnedPerson))
            })
          setMessage({message:"number", name: personChanged.name})
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        }
        return null;
    }
    const personObject = {name: newName, number: phoneNumber}

    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
      })
    setMessage({message: "added", name: personObject.name})
    setTimeout(() => {
      setMessage(null)
    }, 5000)

  }

  useEffect(() => {
    personService
      .getAll()
      .then((initialPersons) => {
        setPersons(initialPersons)
      })
  }, [])

  const handleDelete = (event) => {
    if (window.confirm(`Delete ${event.target.name}?`)){
      let config = {
        headers: {
          'User-Agent':'',
          'Accept': '',
          'Host':''
        }
      }
      personService
      .deletePerson(event.target.value, config)
      .then(response => {
        personService
      .getAll()
      .then((initialPersons) => {
        setPersons(initialPersons)
      })

      })
      .catch(error => {
        setMessage({message: "error", name: event.target.name})
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
      
      
    }
    
  }

  const personsToShow = filter === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} phoneNumber={phoneNumber} handlePhoneNumber={handlePhoneNumber}/>
      <h2>Numbers</h2>
      <div>
      <Persons personsToShow={personsToShow} onDelete={handleDelete}/>
      </div>
    </div>
  )
}

export default App