

import { useRef, useState } from 'react'
import './App.css'
import { Favoritos, Navbar } from './components'

function App() {

  const [contador, setContado] = useState(0)
  const capturaDiv = useRef()
  console.log("SE RENDERIZA EL COMPONENTE")
  //document.getElementsByTagName("div")

  const cambiarColor = () => {
    capturaDiv.current.style.background = "blue"
    //capturaDiv.current.innerHTML = "<p>VENGO DESDE EL USE REF</p>"
    capturaDiv.current.insertAdjacentHTML("afterbegin", '<p>Vengo desde el useRef</p>');
    capturaDiv.current.classList.add("meAgrege")
    capturaDiv.current.classList.remove("removerUseRef")
  }
  const nombre = useRef()
  const apellido = useRef()
  const capturarDivRef = (e) => {
    e.preventDefault()
    console.log(nombre.current.value)
    console.log(apellido.current.value)
  }
  const contadorRef = useRef(0)

  const sumarRef = () => {
    contadorRef.current += 1
    console.log("CONRADORE RED", contadorRef.current)
  }

  return (
    <>

      <Navbar />


      <Favoritos />


      <h1>HOOK USE REF</h1>
      <p>Accede al Dom</p>
      <p>Almacena datos que no cambian en una rederizacion</p>
      <div className='removerUseRef' ref={capturaDiv} style={{ width: "150px", height: "150px", background: "red" }}>
        Soy un div
      </div>


      <form onSubmit={capturarDivRef}>
        <input type="text" placeholder='Nombre' ref={nombre} />
        <input type="text" placeholder='Apellido' ref={apellido} />
        <button>Enviar</button>
      </form>

      <button onClick={cambiarColor}>CAMBIAR COLOR</button>

      <p>{contador}</p>

      <button onClick={() => setContado(contador + 1)}>Sumar + 1</button>
      <p>{contadorRef.current}</p>

      <button onClick={sumarRef}>Sumar + 1</button>

    </>
  )
}

export default App
