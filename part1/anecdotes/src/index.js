import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (<button onClick={onClick}>{text}</button>)
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const random = (min, max) => Math.floor((Math.random() * (max - min + 1)) + min)

  const selectAnecdote = () => {
    setSelected(random(0,anecdotes.length - 1));
  }

  
  const voteAnecdote = () => {
    const copy = [...votes]
    copy[selected] +=1
    setVotes(copy)
    console.log(copy)
  }

  const Votes = ({votes}) => (<p>has {votes} votes</p>)  
  
  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }
  

  return (
    <>
    <h1>Anecdote of the day</h1>
    <div>
      {props.anecdotes[selected]}
      <Votes votes={votes[selected]}/>
    </div>
    <Button onClick={voteAnecdote} text="vote" />
    <Button onClick={selectAnecdote} text="next anecdote" />
    <h2>Anecdote with most votes</h2>
    <div>
      {props.anecdotes[votes.indexOf(getMaxOfArray(votes))]}
      <Votes votes={getMaxOfArray(votes)} />
    </div>
    
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
