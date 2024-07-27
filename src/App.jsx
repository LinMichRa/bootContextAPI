import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppRouter } from './routing/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Ejercicio context API con React</h1>
        <AppRouter />
      </header>
    </div>
  )
}

export default App
