import { useState } from 'react'
import {Link} from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Welcome</h1>
     <Link to="/page1">Weather App</Link>
    </>
  )
}

export default App
