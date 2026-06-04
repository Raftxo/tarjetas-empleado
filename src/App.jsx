// import { useState } from 'react'
import './App.css'  // necesario para hacer el Grid
import UserCard from './components/UserCard'  // importamos la tarjeta

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <main className='contenedor-principal'>
      <header className='cabecera-app'>
        {/* Solución: 1. La imagen de public se llama directamente con una barra (/) */}
        <img src="/banner.jpeg" alt="Banner de empleados" className='imagen-banner'/>
        <h1>Directorio de empleados</h1>
        <p>Aprende React usando arquitectura correcta.</p>
        </header>
        {/* Aquí usamos Grid o Flexbox en App.css para alinear las tarjetas */}
        <section className='galeria-empleados'>
          {/* Reutilización Máxima: pasamos props */}
          <UserCard 
            nombre='Ana García'
            profesion='Frontend Developer'
            imagen='https://randomuser.me/api/portraits/women/3.jpg'
          />

          <UserCard 
            nombre='Juan Pérez'
            profesion='UX/UI Designer'
            imagen='https://randomuser.me/api/portraits/men/3.jpg'
          />

          <UserCard 
            nombre='Luisa Rodríguez'
            profesion='DevOps Engineer'
            imagen='https://randomuser.me/api/portraits/women/44.jpg'
          />
        </section>
    </main>
    </>
  )
}

export default App;


