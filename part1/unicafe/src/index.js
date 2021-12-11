import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => (<h1>{text}</h1>)
const Button = ({onClick, text}) => (<button onClick={onClick}>{text}</button>)
const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
const Part = ({text}) => (<p>{text}</p>)


const Statistics = (props) => {
  const all= props.good + props.neutral + props.bad;
  const average = () => {
    return (props.good - props.bad) / all;
  }
  const positive = () => {
    return props.good > 0?((props.good) / all * 100)+"%": String(0) + "%"; 
  }
  if (all >0){
    return (
      <>
        <h2>{props.h2}</h2>
        <table>
          <tbody>
            <Statistic text={props.comments.good} value={props.good} />
            <Statistic text={props.comments.neutral} value={props.neutral} />
            <Statistic text={props.comments.bad} value={props.bad} />
            <Statistic text={props.comments.all} value={all} />
            <Statistic text={props.comments.average} value={average()}/>
            <Statistic text={props.comments.positive} value={positive()}/>
          </tbody>
        </table>
      </>
      )
  }
  
  return (<><h2>{props.h2}</h2><Part text="No feedback given" /></>)
  
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
