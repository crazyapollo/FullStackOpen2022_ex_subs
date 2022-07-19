import React from 'react'

const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => {
  const summe = parts.reduce((summe, part) => summe + part.exercises, 0)
  return (
    <p><b>Total of {summe} exercises</b></p>
  )
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  return parts.map(onePart => <Part key={onePart.id} part={onePart} />)
}

const Course = (props) => {
  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  )
}

export default Course