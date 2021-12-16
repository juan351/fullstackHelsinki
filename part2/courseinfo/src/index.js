import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ( {course} ) => {
 
  return(
    <p><strong>Total of {course.reduce((acum, c)=>acum + c.exercises, 0)} exercises.</strong></p>
  ) 
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {
      course.map(c=>(
        <Part name={c.name} exercises={c.exercises} key={c.id}/>
      ))}
    </div>
  )
}

const Course = ({course}) => {
  return(
    <div>
      <Header course={course} />
      <Content course={course.parts} />
      <Total course={course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4,
      },
      
    ]
  }

  return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))