import React, { useContext } from 'react'
import { Context } from '../context/Context'

export const Home = () => {

  const nameHome = useContext(Context);

  return (
    <div>
      <h1>Home</h1>
      <p>Esta es la pagina del inicio</p>
      <p>Bienvenid@ <strong>{nameHome.first_name} {nameHome.last_name}</strong></p>
    </div>
  )
}
