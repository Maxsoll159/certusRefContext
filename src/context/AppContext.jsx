import { createContext, useState } from "react";

export const UsuarioContext = createContext()

export const AppContext = ({ children }) => {

    const [nombre, setNombre] = useState("Martin")
    const [favoritos, setFavoritos] = useState([])

    const agregarPersonajeFavorito = (personaje) => {
        setFavoritos([personaje, ...favoritos])
    }

    console.log("FAVORITOS DESDE CONTEX", favoritos)

    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre)
    }

    return (
        <UsuarioContext.Provider value={{ nombre, cambiarNombre, agregarPersonajeFavorito, favoritos }}>
            {children}
        </UsuarioContext.Provider>
    )
}