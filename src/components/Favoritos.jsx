import React, { useContext, useRef } from 'react'
import { UsuarioContext } from '../context/AppContext'

export const Favoritos = () => {
    const nombre = useRef()

    const { cambiarNombre, agregarPersonajeFavorito } = useContext(UsuarioContext)


    const personajesFavoritos = [{
        id: 1,
        nombre: "Goku",
        description : "Es un buen Personaje"
    },{
        id: 2,
        nombre: "Vegeta",
        description : "Es un personaje azul"
    },{
        id: 3,
        nombre: "Krillin",
        description : "Es un personaje que muere mucho"
    },{
        id: 4,
        nombre: "Piccoro",
        description : "Es un personaje de otro planeta"
    },{
        id: 5,
        nombre: "Yancha",
        description : "Es un personaje muy debil"
    }]


    return (
        <div>

            <div>
                <h1>Elige tus personajes Favoritos</h1>
                {personajesFavoritos.map((personaje)=>(
                    <div style={{border: "1px solid black", padding: "20px", marginTop: "25px"}} key={personaje.id}>
                        <p>{personaje.nombre}</p>
                        <p>{personaje.description}</p>
                        <button onClick={()=>agregarPersonajeFavorito(personaje)}>Agregar a Favoritos</button>
                    </div>
                ))}
            </div>



            
            <input ref={nombre} type="text" placeholder='Ingresa un nuevo Nombre' />

            <button onClick={()=>cambiarNombre(nombre.current.value)}>Cambiar Nombre Desde Favorito</button>
        </div>
    )
}
