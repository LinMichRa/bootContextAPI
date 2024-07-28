import React from 'react'
import './../styles/error-page.css'

export const ErrorPage = () => {
  return (
    <section className='custom-body-class'>
      <div id='title'>Page Not Found</div>
      <div className='circles'>
        <p><small>Error 404</small></p>
        <span className='circle big'></span>
        <span className='circle med'></span>
        <span className='circle small'></span>
      </div>
    </section>
  )
}