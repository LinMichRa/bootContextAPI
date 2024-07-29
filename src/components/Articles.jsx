import React from 'react'
import Perro1 from '../assets/cocker.jpg';
import Perro2 from '../assets/doberman.jpg';

export const Articles = () => {
  return (
    <>
    <h1 className='container text-center'>Articles</h1>
    <div className='row container text-center'>
      <div className='col'>
        <h5>Cocker spaniel</h5>
        <img src={Perro1} alt="Cocker Spaniel" style={{ width: '200px', height: 'auto' }}/> <br />
        <small>El Cocker Spaniel es una raza de perro mediana, conocida por su pelaje ondulado y orejas largas. Originarios de Inglaterra, estos perros son amigables, juguetones y buenos con los niños. Pesan entre 12 y 15 kilogramos y tienen una altura de 38 a 41 centímetros. Su pelaje viene en varios colores, como negro, marrón y dorado. Los Cocker Spaniels son sociables, requieren ejercicio regular y son fáciles de entrenar, lo que los convierte en excelentes compañeros para familias activas.</small>
      </div>
      <div className='col'>
        <h5>Doberman</h5>
        <img src={Perro2} alt="Cocker Spaniel" style={{ width: '200px', height: 'auto' }}/> <br />
        <small>El Doberman es una raza de perro grande y musculosa, conocida por su apariencia elegante y atlética. Originarios de Alemania, los Doberman son leales, inteligentes y valientes, lo que los convierte en excelentes perros guardianes y compañeros. Pesan entre 30 y 40 kilogramos y miden de 61 a 72 centímetros de altura. Su pelaje es corto y suele ser negro con marcas de color óxido, aunque también puede ser marrón, azul o beige. Los Doberman requieren ejercicio regular y entrenamiento firme para mantenerse equilibrados y felices. Son protectores y muy devotos a sus familias, lo que los hace ideales para personas activas y hogares que buscan un perro guardián alerta y afectuoso.</small>
      </div>
    </div>
    </>
  )
}

