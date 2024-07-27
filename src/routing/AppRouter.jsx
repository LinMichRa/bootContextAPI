import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../components/Home'
import { Articles } from '../components/Articles'

export const AppRouter = () => {
  return (
    <Router>
        {/* Menu de navegacion */}

        {/* Configurar Rutas */}

        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/inicio' element={<Home />}></Route>
            <Route path='/articulos' element={<Articles />}></Route>
            <Route></Route>
        </Routes>
    </Router>
  )
}
