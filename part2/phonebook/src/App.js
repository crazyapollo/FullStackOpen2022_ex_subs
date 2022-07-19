import { useState } from 'react'


const ShowNummer = (props) => {
  return (
    <>
      {props.nummer} <br />
    </>
  )
}

const Nummernlist = (props) => {

  return(
    <>
      {props.persons.map(person => <ShowNummer key={person.name} nummer={person.name} />)}
    </>
    
  )
}


const App = () => {
  const [persons, setPersons] = useState([  // State: list of persons
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')  // State: field of new name from form

  const handleChange = (event) => {  // wenn man tippt wir neuer namens-State generiert
    setNewName(event.target.value)
  }

  const addNewPerson = (event) => {  // logic of the add-button
    event.preventDefault()
    const newPersonObject = {  // new list object is created
      name: newName
    }
    
    const peps = persons.map(person => person.name)
    const newpep = newPersonObject.name
    if (peps.includes(newpep)) {
      window.alert(`${newpep} is already added to phonebook`)
    } else {
      setPersons(persons.concat(newPersonObject))
      setNewName('')
    }

    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      < Nummernlist persons={persons} />  
    </div>
  )
}

export default App