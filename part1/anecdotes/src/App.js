import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState({
    0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0
  })
  let topAnecdote = 0

  const newAnecdote = () => {
    const oldNumber = selected
    let randomNummer = -1
    do {
      randomNummer = Math.floor(Math.random() * anecdotes.length)
    } while (randomNummer === oldNumber)  // if new random number is same as old, try again
    setSelected(randomNummer) // change state of selected anecdote
  }

  const upVote = ({selected}) => {
    const handler = () => {
      const newVotes = {...votes} // copy of complex State
      newVotes[selected] += 1  // increase selected one
      setVote(newVotes)  // change state of votes
    }
    topAnecdote = Object.entries(votes).sort((x, y) => y[1] - x[1])[0]
    return handler
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} <br /><br /> 
      It has {votes[selected]} votes. <br /><br /> 
      <Button text="vote" handleClick={upVote({selected})}/>
      <Button text="next anecdote" handleClick={newAnecdote} />

      <h1>Top Anecdote</h1>
      {anecdotes[topAnecdote[0]]} <br /> <br />
      with {topAnecdote[1]} votes.
    </div>
  )
}

export default App