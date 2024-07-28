import React, { useContext } from 'react'
import { Context } from '../context/Context'

export const Contact = () => {

  const nameContact = useContext(Context);

  return (
    <div>
      <h1>Contact</h1>
      <p>Esta es la pagina del contacto de: <strong>{nameContact.phone}</strong></p>
    </div>
    
  )
}
