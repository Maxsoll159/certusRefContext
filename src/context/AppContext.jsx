import { createContext, useState } from "react";

export const UsuarioContext = createContext()

export const AppContext = ({ children }) => {

    const [nombre, setNombre] = useState("Martin")
    const [favoritos, setFavoritos] = useState([])
    const [cartItems, setCartItems] = useState([])


    const agregarPersonajeFavorito = (personaje) => {
        setFavoritos([personaje, ...favoritos])
    }

  

    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre)
    }

    const addCart = (product) =>{
        const existeProdct = cartItems.find((items)=> items.id === product.id)
        //SI EXISTE
        if(existeProdct){
            const updateProduct = {
                ...existeProdct,
                cantidad: existeProdct.cantidad + 1
            }
            const updateCarrito = cartItems.map((items)=>(
                items.id === existeProdct.id ? updateProduct : items
            ))
            setCartItems(updateCarrito)
        }else{
            const cartNewItems = {
                ...product,
                cantidad: 1
            }
            setCartItems([cartNewItems, ...cartItems])
        }
    }

    console.log("SOY EL CARRUTI",cartItems)


    return (
        <UsuarioContext.Provider value={{ nombre, cambiarNombre, agregarPersonajeFavorito, favoritos, addCart, cartItems }}>
            {children}
        </UsuarioContext.Provider>
    )
}