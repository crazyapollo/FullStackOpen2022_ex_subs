import { useState } from 'react'

const Header = ({title}) => <h1>{title}</h1> 



const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticsLine = (props) => {
  if (props.text === "positive") {
    return (
      <>
      {props.text} {props.value} %<br />
    </>
    )
  }
  return(
    <>
      {props.text} {props.value} <br />
    </>
  )
  
}

const Statistics = ({good, neutral, bad}) => {
  const sum = good + neutral + bad
  const average = (good - bad) / sum
  const positive = good/sum * 100

  if (sum === 0) {
    return (
      <div>
        <p>No feedback has been given</p>
      </div>
    )
  }
  return (
    <div>
      <p>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
      </p>
      <p>
        <StatisticsLine text="sum" value={sum} />
        <StatisticsLine text="average" value={average} />
        <StatisticsLine text="positive" value={positive} />
      </p>
    </div>
    
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)
  
  console.log(good)

  return (
    <div>
      <Header title="give feedback" />
      <br/>
      <Button text="good" handleClick={increaseGood}/>
      <Button text="neutral" handleClick={increaseNeutral} />
      <Button text="bad" handleClick={increaseBad} />

      <Header title="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App