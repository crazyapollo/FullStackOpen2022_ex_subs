const Hello = (props) => {
  console.log("Hello from Hello func in component 'App'")

  const now = new Date()
  const a = 10
  const b = 20

  return(
    <div>
      <p>Hello World, {props.age} year old {props.name}, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/crazyapollo">crazyapollo</a>
    </div>
  )
}

const App = () => {
  const name = "Peter"
  const age = 19

  return (
    <>
      <h1>Grettings</h1>
      <Hello name="George" age="12" />
      <Hello name="Deasy" age={13+2}/>
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}


export default App