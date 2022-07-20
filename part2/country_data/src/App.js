import { useState, useEffect } from 'react'
import axios from 'axios'

const ShowCountryLine = ({value}) => {
  return (
    <>
      {value} <br/>
    </>
  )
}


const ShowCountries = ({searchInfo, allCountries}) => {
  
  console.log(searchInfo)
  console.log(allCountries)

  const allCountriesFilt = allCountries.filter(o => o.toLowerCase().includes(searchInfo.toLowerCase()))
  console.log("Filtered: ", allCountriesFilt)

  if (allCountriesFilt.length > 20) {
    return (<>Too many Laender</>)
  } else {
    if (allCountriesFilt.length === 1) {
      return (<> Tadaaaa: {allCountriesFilt}</>)
    } else {
      return (
        <>
          {allCountriesFilt.map((derName) =>  <ShowCountryLine value={derName} />)}
        </>
      )
    }
  }
}

const App = () => {
  const [searchedCountry, setSearchedCountry] = useState('')  // State: field of new name from form
  const [displayedCountries, setDisplayedCountries] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        console.log(response.data[20].name.common)

        const countryList = response.data.map(country => country.name.common)
        console.log(countryList)

        setDisplayedCountries(countryList)

      })
  }, [])
  // console.log('render', notes.length, 'notes')



  const handleCountryChange = (props) => {
    setSearchedCountry(props.target.value)
  }

  return ( 
    <div>
      find countries <input value={searchedCountry} onChange={handleCountryChange} />
      <p>
        <ShowCountries searchInfo={searchedCountry} allCountries={displayedCountries}/>
      </p>
      
      

    </div>
  )
}

export default App;
