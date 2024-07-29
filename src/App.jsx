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

  // Inicializa el estado del modo oscuro con el valor de localStorage si existe
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const darkMode = JSON.parse(localStorage.getItem('darkMode'));
    return darkMode || false;
  });

  useEffect (() => {
    localStorage.setItem("user",JSON.stringify(user));
  },[user]);

  // Este useEffect se ejecuta cada vez que cambia el estado `isDarkMode`
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  // Función para alternar el modo oscuro
  const toggleDarkMode = () => {
    // Alterna el valor del modo oscuro
    setIsDarkMode(prevMode => !prevMode);
  };

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
