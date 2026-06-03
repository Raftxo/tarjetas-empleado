// import { useState } from 'react'
import './App.css'  // necesario para hacer el Grid
import UserCard from './components/UserCard'  // importamos la tarjeta

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <main className='contenedor-principal'>
      <header className='cabecera-app'>
        <h1>Directorio de empleados</h1>
        <p>Aprende React usando arquitectura correcta.</p>
        </header>
        {/* Aquí usamos Grid o Flexbox en App.css para alinear las tarjetas */}
        <section className='galeria-empleados'>
          {/* Reutilización Máxima: pasamos props */}
          <UserCard 
            nombre='Ana Garcia'
            profesion='Desarrollador'
            imagen='https://randomuser.me/api/portraits/women/3.jpg'
          />

          <UserCard 
            nombre='Juan Perez'
            profesion='Diseñador'
            imagen='https://randomuser.me/api/portraits/men/3.jpg'
          />

          <UserCard 
            nombre='Luisa Rodriguez'
            profesion='Diseñadora'
            imagen='https://randomuser.me/api/portraits/women/44.jpg'
          />
        </section>
    </main>
    </>
  )
}

export default App;


