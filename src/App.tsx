import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [wordD, setWordD] = useState('start')

  function getData() {

  }

  return (
    <div className="App">
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button className='Data' onClick={() => getData()}>
          {wordD}
        </button>
      </div>
    </div>
  )
}

export default App
