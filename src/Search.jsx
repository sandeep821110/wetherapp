import React from 'react'
import Spech from './Spech'

const Search = ({ city, setCity, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Enter city name"
        className="p-2 rounded border"
      />
      {/* <Spech setCity={setCity} /> */}
      <button onClick={onSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </div>
  )
}

export default Search