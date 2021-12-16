import React from 'react'

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
        {course.map(c=>{
          return(
            <div key={c.id}>
            <Header course={c}/>
            <Content course={c.parts} />
            <Total course={c.parts} />
            </div>
          )
          })}
        
      </div>
    )
  }

  export default Course