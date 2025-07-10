
import './App.css'
import Spech from './Spech'
import Weather from './Weather'

function App() {
  return (
    <div className="App flex flex-col items-center justify-center text-white bg-gray-100 min-h-screen bg-violet-900">
      <div className='flex flex-col items-center justify-center bg-gray-900 bg-opacity-50 rounded-lg shadow-lg p-6 m-4 w-full max-w-md'>
        <h1 className='text-shadow-gray-300  text-white font-semibold p-4 justify-items-center items-center text-2xl m-2 md:text-center sm:text-center sm:text-xl md:text-xl lg:w-full lg:text-xl '>
        Weather App
      </h1>
      <Weather />
      </div>
      
    </div>
  )
}

export default App