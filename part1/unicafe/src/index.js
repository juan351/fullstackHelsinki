import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => (<h1>{text}</h1>)
const Button = ({onClick, text}) => (<button onClick={onClick}>{text}</button>)
const Part = (props) => (<p>{props.option} {props.qty}</p>)


const Statistics = (props) => {
  return (
  <>
    <h2>{props.h2}</h2>
    <Part option={props.comments.good} qty={props.good} />
    <Part option={props.comments.neutral} qty={props.neutral} />
    <Part option={props.comments.bad} qty={props.bad} />
  </>
  )
}
const App = () => {

  const h1="give feedback"
  const h2="statistics"
  const comments = {
    good: "good",
    neutral: "neutral",
    bad: "bad"
  }
  const handleGood = () =>{
    setGood(good + 1)
  }
  const handleNeutral = () =>{
    setNeutral(neutral + 1)
  }
  const handleBad = () =>{
    setBad(bad + 1)
  }

    
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text={h1} />
      <Button onClick={handleGood} text={comments.good} />
      <Button onClick={handleNeutral} text={comments.neutral} />
      <Button onClick={handleBad} text={comments.bad} />
      <Statistics h2={h2} comments={comments} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
