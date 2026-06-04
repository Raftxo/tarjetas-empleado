// import './UserCard.css'
import iconoLinkedIn from '../assets/linkedin.svg'

// function UserCard(props) {
//   return (
//     <div className='tarjeta'>
//         <img src={props.imagen} alt="Foto de perfil" className='tarjeta-img'/>
//         <div className="tarjeta-info">
//             <h3>{props.nombre}</h3>
//             <p className='profesion'>
//                 {props.profesion}
//                 <img src={iconoLinkedIn} alt="Logo LinkedIn" className='icono-red-social' />
//             </p>
//             <button className='btn-conectar'>Conectar</button>
//         </div>
//     </div>
//   )
// }

// export default UserCard

// new code with Tailwind
function UserCard(props) {
  return (
      // magia de TailWindCSS
  <div
    className="group bg-white w-64 rounded-xl shadow-lg overflow-hidden 
    hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
  >
    <img
      src={props.imagen}
      alt="Foto de perfil"
      className="w-full h-48 object-cover grayscale hover:grayscale-0 group-hover:grayscale-0 
      [mask-image:linear-gradient(to_bottom,black_95%,transparent)]"
    />
    <div className="p-6 text-center">
      <h3 className="text-xl font-bold text-gray-800">{props.nombre}</h3>
      <p className="text-sm text-gray-500 my-3 flex items-center justify-center gap-2">{props.profesion}
        <img src={iconoLinkedIn} alt="Icono LinkedIn" className="w-6 h-6 group-hover:animate-bounce" />
      </p>
      <button className="group/btn mt-4 bg-blue-800 hover:bg-blue-500 text-white 
                          py-2 px-6 rounded-full transition-colors">
        Conectar
      </button>
      
    </div>
  </div>
);
}

export default UserCard;
