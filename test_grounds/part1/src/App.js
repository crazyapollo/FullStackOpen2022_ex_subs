import { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>


const App = () => {
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    console.log('clicked')
  }

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  
  return (
    <div>
        <Display counter={counter}/>
        <button onClick={handleClick}>
            plus log
        </button>
        <Button
            onClick={increaseByOne}
            text='plus'
        />
        <Button
            onClick={setToZero}
            text='zero'
        />     
        <Button
            onClick={decreaseByOne}
            text='minus'
        />  
    </div>
    
  )
}

export default App