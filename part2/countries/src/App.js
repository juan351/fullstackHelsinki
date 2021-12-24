import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import axios from 'axios'

const App = () => {
  const [ countries, setCountries ] = useState([]) 
  const [ filter, setFilter ] = useState('')

  const handleFilterChange = (event) => setFilter(event.target.value)
  
  
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setCountries(response.data)  
      })
  }, [])

  const countriesToShow = filter === '' ? [] : countries.filter(country => country['name'].common.toLowerCase().includes(filter.toLowerCase()))
  console.log(countries)
  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <Countries countriesToShow={countriesToShow}/>
    </div>
  )
}

export default App