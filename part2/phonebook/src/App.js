import { useState, useEffect } from 'react'
import personService from './services/persons'

const ShowNummer = (props) => {
  console.log("props aus show number: ", props.die_id)
  console.log(props.filt.toUpperCase())
  if (props.der_name.toUpperCase().startsWith(props.filt.toUpperCase()) ) {
    return (
      <>
        {props.der_name} {props.nummer} 
        <button key={props.id} onClick={() => props.wantDelete(props.die_id)}>delete</button> <br />
      </>
    )
  } else {
    return (<></>)
  }
}

const Nummernlist = (props) => {
  // console.log(props.persons.map(person => 
  //   <ShowNummer key={person.name} 
  //               die_id={person.id} 
  //               der_name={person.name} 
  //               nummer={person.phone_number} 
  //               filt={props.filt}
  //               wantDelete={props.wantDelete}/>))
  console.log("props aus nummern list: ", props.wantDelete)
  return(
    <>
      {props.persons.map(person => 
        <ShowNummer key={person.name} 
                    die_id={person.id} 
                    der_name={person.name} 
                    nummer={person.phone_number} 
                    filt={props.filt}
                    wantDelete={props.wantDelete}
        />
      )} 
    </>
    
  )
}

const Filter = (props) => {
  return (
    <>
      filter shown with <input value={props.filter} onChange={props.change}/> 
    </>
  )
}



const AddPersonForm = (props) => {
  return (
    <form onSubmit={props.sub}>
      <div>
        name: <input value={props.name} onChange={props.changeName}/> <br />
        phone number: <input value={props.pNumber} onChange={props.changeNum}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')  // State: field of new name from form
  const [newNumber, setNewNumber] = useState('')  // State: field of new name from form
  const [newFilt, setNewFilt] = useState('')  // State: field of new name from form

  // Effect to load all person data from server and set initial persons state
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        console.log("promise fulfilled")
        setPersons(initialPersons)
      })
  }, [])

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

      personService
        .create(newPersonObject)
        .then(returnedPersonDetails => {
          setPersons(persons.concat(returnedPersonDetails))
          setNewName('')
          setNewNumber('')
        })

    }

  }


  const wantDeleteNumber = (id) => {
    if (window.confirm("Do you really want to delete this item?")) {
        console.log("deleteeeed", id)
        personService
          .deletePersonNumber(id)
        const newPersonSet = persons.filter(pers => pers.id !== id)
        setPersons(newPersonSet)
    } else {
        console.log("alles kllar")
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
        <Filter filter={newFilt} change={handleChangeFilt} />
      <h2>add a new number</h2>
        <AddPersonForm sub={addNewPerson} name={newName} changeName={handleChange} pNumber={newNumber} changeNum={handleChangeNum} />
      <h2>Numbers</h2>
      < Nummernlist persons={persons} filt={newFilt} wantDelete={wantDeleteNumber}/>  
    </div>
  )
}

export default App