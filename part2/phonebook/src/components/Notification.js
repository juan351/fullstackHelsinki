import React from 'react'

const successStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
}

const errorStyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
}
const Notification = ( {message} ) => {

    if (message === null){
        return null
    }

    if (message.message === "added"){
        return (<div style={successStyle}>
            Added {message.name}
        </div>)
    }

    if (message.message === "number"){
        return (<div style={successStyle}>
            {message.name} telephone updated
        </div>)
    }

    if (message.message === "error"){
        return (<div style={errorStyle}>
            Information of {message.name} has already been removed from server
        </div>)
    }
}

export default Notification