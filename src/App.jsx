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
            profesion='Frontend Developer'
            imagen='https://randomuser.me/api/portraits/women/3.jpg'
          />

          <UserCard 
            nombre='Juan Perez'
            profesion='UX/UI Designer'
            imagen='https://randomuser.me/api/portraits/men/3.jpg'
          />

          <UserCard 
            nombre='Luisa Rodriguez'
            profesion='DevOps Engineer'
            imagen='https://randomuser.me/api/portraits/women/44.jpg'
          />
        </section>
    </main>
    </>
  )
}

export default App;


