import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Greetinf from './components/Greeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <h1>hello</h1>
        <Greeting />
      </div>
    </div>
  )
}

export default App
