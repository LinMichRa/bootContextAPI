import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import { AppRouter } from './routing/AppRouter'
import { Context } from './context/Context'

function App() {
  const [count, setCount] = useState(0)

  const client = {
    id: 1,
    first_name: "Luis",
    last_name:"Ramirez",
    phone: "33332323",
    city:"Bogota"
  }
  return (
    <Context.Provider value={client}>
      <div className='App'>
        <AppRouter />
      </div>
    </Context.Provider>
    
  )
}

export default App
