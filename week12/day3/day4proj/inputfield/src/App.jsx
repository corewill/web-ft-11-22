import { useState } from 'react'
import InputField from './components/InputField.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h3>Input</h3>
      <InputField />
    </div>
  )
}

export default App
