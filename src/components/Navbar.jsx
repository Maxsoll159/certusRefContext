import React, { useContext } from 'react'
import { UsuarioContext } from '../context/AppContext'

export const Navbar = () => {
    const { nombre, favoritos } = useContext(UsuarioContext)

    return (
        <nav className='navbar'>
            <p>{nombre}</p>


            {
                favoritos.length === 0 ? <p>No hay personajes Favoritos</p> : <div>
                    {favoritos.map((favorito)=>(
                        <p>{favorito.nombre}</p>
                    ))}
                    <p>Tengo {favoritos.length} personajes favoritos</p>
                </div>
            }



            <button>Cambiar Nombre</button>
        </nav>
    )
}
