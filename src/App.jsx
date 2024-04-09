import axios from "axios";
import { useEffect, useState } from "react";

import './App.css'

function App() {
  const apiKey = "f56f24967aaf51182d1d4df628297c6d";
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})


  const getWetherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
     console.log(err)
    })
  }
  const handleChangeInput = (e) => {
    
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getWetherDetails(inputCity)
  }



  return (
    <>
   <div className="main">
      <div className="top">

       <h1>Weather App</h1>
       <input type="text"  placeholder='Search the cities....' value={inputCity}
            onChange={handleChangeInput} />
       <button  onClick={handleSearch}>Search</button>
     </div>
     {Object.keys(data).length > 0 &&
     <div className="down">
      <div className="icon">
        <img src="/sun.png" width={'200px'} alt="" />
        <h3>{data?.name}</h3>
        <h2>{((data?.main?.temp) - 273.15).toFixed(2)}°C</h2>
        
      </div>
     </div>
     }
   </div>
    </>
    
  )
}

export default App
