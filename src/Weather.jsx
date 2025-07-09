import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Search from './Search'

const Weather = () => {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('') // Add city state

  const fetchWeaterData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1942a94725e3fc10a9c41ce566d6c476`
      )
      setWeather(response.data)
    } catch (error) {
      console.error('Error fetching weather:', error)
    }
  }

  useEffect(() => {
    fetchWeaterData()
    // eslint-disable-next-line
  }, [city]) // Fetch weather when city changes

  return (
    <div>
      <Search city={city} setCity={setCity} onSearch={fetchWeaterData} />
      {weather ? (
        <div className="flex items-center justify-center flex-col ">
          <div>
            <p>{weather.sys.country}</p>
            <p>{weather.dt}</p>
            <p>{weather.coord.lat}</p>
            <p>{weather.coord.lon}</p>
          </div>
          <div>
            <p>{weather.main.feels_like}</p>
            <p>{weather.main.pressure}</p>
          </div>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <h1>Weather in {weather.name}</h1>
          <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)} °C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Condition: {weather.weather[0].description}</p>
          <p>Wind speed: {weather.wind.speed}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  )
}

export default Weather