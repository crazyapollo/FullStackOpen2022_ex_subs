import { useState } from 'react'


const ShowNummer = (props) => {
  console.log(props.filt.toUpperCase())
  if (props.der_name.toUpperCase().startsWith(props.filt.toUpperCase()) ) {
    return (
      <>
        {props.der_name} {props.nummer}  <br />
      </>
    )
  } else {
    return (<></>)
  }
}

const Nummernlist = (props) => {
  console.log(props.persons.map(person => <ShowNummer key={person.name} der_name={person.name} nummer={person.phone_number} filt={props.filt}/>))
  return(
    <>
      {props.persons.map(person => <ShowNummer key={person.name} der_name={person.name} nummer={person.phone_number} filt={props.filt}/>)}
    </>
    
  )
}


const App = () => {
  const [persons, setPersons] = useState([  // State: list of persons
    { name: 'Arto Hellas',
      phone_number: 1234654654
    }
  ]) 
  const [newName, setNewName] = useState('')  // State: field of new name from form
  const [newNumber, setNewNumber] = useState('')  // State: field of new name from form
  const [newFilt, setNewFilt] = useState('')  // State: field of new name from form

  const handleChange = (event) => {  // wenn man tippt wir neuer namens-State generiert
    setNewName(event.target.value)
  }

  const handleChangeNum = (event) => {  // wenn man tippt wir neuer namens-State generiert
    setNewNumber(event.target.value)
  }

  const handleChangeFilt = (event) => {  // wenn man tippt wir neuer namens-State generiert
    setNewFilt(event.target.value)
  }

  const addNewPerson = (event) => {  // logic of the add-button
    event.preventDefault()
    const newPersonObject = {  // new list object is created
      name: newName,
      phone_number: newNumber
    }

    const peps = persons.map(person => person.name)
    const newpep = newPersonObject.name
    if (peps.includes(newpep)) {
      window.alert(`${newpep} is already added to phonebook`)
    } else {
      setPersons(persons.concat(newPersonObject))
      setNewName('')
      setNewNumber('')
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
        filter shown with <input value={newFilt} onChange={handleChangeFilt}/> 
      <h2>add a new number</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={handleChange}/> <br />
          phone number: <input value={newNumber} onChange={handleChangeNum}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      < Nummernlist persons={persons} filt={newFilt}/>  
    </div>
  )
}

export default App