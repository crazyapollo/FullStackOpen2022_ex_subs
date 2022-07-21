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

  const allCountriesFilt = allCountries.filter(o => o.name.common.toLowerCase().includes(searchInfo.toLowerCase()))
  console.log("Filtered: ", allCountriesFilt)

  if (allCountriesFilt.length > 10) {
    return (<>Too many matches, please specify another filter...</>)
  } else {
    if (allCountriesFilt.length === 1) {
      console.log(allCountriesFilt[0])
      const langs = Object.values(allCountriesFilt[0].languages)
      return (
        <div>
          <h1>{allCountriesFilt[0].name.common} </h1>
          capital {allCountriesFilt[0].capital} <br />
          area {allCountriesFilt[0].area}

          <h3>languages</h3>
          <ul>
            {langs.map(lang => <li key={lang}>{lang}</li>)  }
          </ul>

          <img src={allCountriesFilt[0].flags.png} alt={`Flag of $(allCountriesFilt[0].name.common)`} />
        </div>)
    } else {
      if (allCountriesFilt.length === 0) {
        return (<>No country found </>) 
      } else {
        return (
          <>
            {allCountriesFilt.map((derName) =>  <ShowCountryLine key={derName.cca3} value={derName.name.common} />)}
          </>
        )
      }
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

        // const countryList = response.data.map(country => country.name.common)
        // console.log(countryList)
        // setDisplayedCountries(countryList)
        setDisplayedCountries(response.data)

      })
  }, [])
  // console.log('render', notes.length, 'notes')



  const handleCountryChange = (props) => {
    setSearchedCountry(props.target.value)
  }

  return ( 
    <div>
      find countries <input value={searchedCountry} onChange={handleCountryChange} />
      <br />
      
      <ShowCountries searchInfo={searchedCountry} allCountries={displayedCountries}/>
      
      
      

    </div>
  )
}

export default App;
