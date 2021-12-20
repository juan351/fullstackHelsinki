import React from 'react'

const PersonForm = ({addPerson,newName,handleNameChange,phoneNumber,handlePhoneNumber}) => {
    return(
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
      </form>)
}

export default PersonForm