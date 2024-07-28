import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import { AppRouter } from './routing/AppRouter'
import { Context } from './context/Context'

function App() {
  const [count, setCount] = useState(0)

  const[user, setUser] = useState({
    username:'@Linda',
    name: 'Linda',
    phone: '2333323'
  })
  return (
    <Context.Provider value={{
      user,
      setUser
    }}>
      <div className='App'>
        <AppRouter />
      </div>
    </Context.Provider>
    
  )
}

export default App
