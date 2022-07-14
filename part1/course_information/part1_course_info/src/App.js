const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.cpart1} exercises={props.cexercises1} />
      <Part part={props.cpart2} exercises={props.cexercises2} />
      <Part part={props.cpart3} exercises={props.cexercises3} />
    </div>
  )
}



const Total = (props) => (
  <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content cpart1={part1} cexercises1={exercises1} 
        cpart2={part2} cexercises2={exercises2} 
        cpart3={part3} cexercises3={exercises3} 
      />
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
    </div>
  )
}

export default App