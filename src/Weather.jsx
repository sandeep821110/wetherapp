import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Search from './Search'
import Spech from './Spech'

const Weather = () => {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('sasaram')

  const fetchWeaterData = async () => {
    if (!city) return // Prevent API call if city is empty
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1942a94725e3fc10a9c41ce566d6c476`
      )
      setWeather(response.data)
    } catch (error) {
      setWeather(null)
      console.error('Error fetching weather:', error)
    }
  }

  useEffect(() => {
    fetchWeaterData()
    // eslint-disable-next-line
  }, [city]) // Fetch weather when city changes

  return (
    <div>
      <div className='flex flex-wrap'>
        <Spech setCity={setCity} />
        <Search city={city} setCity={setCity} onSearch={fetchWeaterData} />
      </div>
      {weather ? (
        <div className="flex items-center justify-center flex-col m-4 gap-1.5">
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <h1 className='font-semibold'>
            Weather City in <span className='font-semibold text-sky-600'>{weather.name}</span>
          </h1>
          <p className='font-semibold'>Temperature: {(weather.main.temp - 273.15).toFixed(2)} °C</p>
          <p className='font-semibold'>Max Temperature: {(weather.main.temp_max - 273.15).toFixed(2)} °C</p>
          <p className='font-semibold'>Min Temperature: {(weather.main.temp_min - 273.15).toFixed(2)} °C</p>
          <p className='font-semibold'>Humidity: {weather.main.humidity}%</p>
          <p className='font-semibold'>Condition: {weather.weather[0].description}</p>
          <p className='font-semibold'>Wind speed: {weather.wind.speed}</p>
          <div>
            <p className='font-semibold'>Weather Country: {weather.sys.country}</p>
            {/* <p>Weather dt: {weather.dt}</p> */}
            <p className='font-semibold'>Weather latitude: {weather.coord.lat}</p>
            <p className='font-semibold'>Weather longitude: {weather.coord.lon}</p>
          </div>
          <div className='flex flex-col items-center justify-center inline-block m-4 gap-1.5'>
            <p>Feels like: {(weather.main.feels_like - 273.15).toFixed(2)} °C</p>
            <p>Pressure: {weather.main.pressure}</p>
          </div>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  )
}

export default Weather