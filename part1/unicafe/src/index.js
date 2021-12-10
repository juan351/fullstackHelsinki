import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => (<h1>{text}</h1>)
const Button = ({onClick, text}) => (<button onClick={onClick}>{text}</button>)
const Part = (props) => (<p>{props.option} {props.qty}</p>)


const Statistics = (props) => {
  const all= props.good + props.neutral + props.bad;
  const average = () => {
    return all > 0?(props.good - props.bad) / all :0;
  }
  const positive = () => {
    return props.good > 0?((props.good) / all * 100)+"%": 0;
  }
  return (
  <>
    <h2>{props.h2}</h2>
    <Part option={props.comments.good} qty={props.good} />
    <Part option={props.comments.neutral} qty={props.neutral} />
    <Part option={props.comments.bad} qty={props.bad} />
    <Part option={props.comments.all} qty={all} />
    <Part option={props.comments.average} qty={average()}/>
    <Part option={props.comments.positive} qty={positive()}/>
  </>
  )
}
const App = () => {

  const h1="give feedback"
  const h2="statistics"
  const commentsText = {
    good: "good",
    neutral: "neutral",
    bad: "bad",
    all: "all",
    average: "average",
    positive: "positive"
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
      <Button onClick={handleGood} text={commentsText.good} />
      <Button onClick={handleNeutral} text={commentsText.neutral} />
      <Button onClick={handleBad} text={commentsText.bad} />
      <Statistics h2={h2} comments={commentsText} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
