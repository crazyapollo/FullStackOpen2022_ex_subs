const Header = ({ course }) => <h1>{course}</h1>

// const Total = ({ sum }) => <p>Number of exercises {sum}</p>

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
      {/* <Total sum={props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises} /> */}
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
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }


  return <Course course={course} />
}

//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={parts} />
//       <Total sum={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
//     </div>
//   )
// }

export default App