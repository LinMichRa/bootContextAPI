import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import { AppRouter } from './routing/AppRouter'
import { Context } from './context/Context'

function App() {

  const [user, setUser] = useState(() => {
    const storeUser  = localStorage.getItem("user");
    return storeUser ?  JSON.parse (storeUser) : {};
  });

  useEffect (() => {
    localStorage.setItem("user",JSON.stringify(user));
  },[user]);

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
