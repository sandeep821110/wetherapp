import React from 'react'

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
      <button onClick={onSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </div>
  )
}

export default Search