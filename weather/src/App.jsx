import { useState } from 'react'
import './App.css'

function App() {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('')

  const fetchWeather = (e) => {
    e.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=94e3cdcd829cd62bd6820494ef80dcc8&q=${city}&units=metric`)
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data)
      setWeather(data)
    })
    .catch(() => alert
    ("This city not found"))
  }
  
  const searchHandler = (e) => {
    setCity(e.target.value)
  }

  return (
    <div>
      <form onSubmit={searchHandler}>
      <input placeholder='Enter location' type="text" onChange={searchHandler}/>
      <button type='submit' onClick={fetchWeather}>get weather</button>
      </form>
      <h1>Город: {weather?.name}</h1>
      <div className="temp">
        {weather?.main.temp}°C
      </div>
    </div>
  )
}

export default App
