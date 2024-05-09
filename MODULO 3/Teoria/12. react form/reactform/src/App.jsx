import { useState } from 'react'
import './App.css'
import { Register } from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Register />
    </>
  )
}

export default App
