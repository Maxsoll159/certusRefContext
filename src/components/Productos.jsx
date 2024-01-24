import { useEffect, useState } from "react"
import { getProducts } from "../helpers/apiProducts"
import { CardProduct } from "./CardProduct"
import { NavbarProduct } from "./NavbarProduct"


export const Productos = () => {
    const [products, setProducts] = useState([])



    useEffect(() => {
        getProducts().then(res => setProducts(res))
    }, [])


    return (
        <>

            <NavbarProduct />
            <div className="container mx-auto">
                <h1 className="text-blue-500 font-bold text-3xl">Elige tus productos</h1>
                <div className="grid grid-cols-3 gap-5 mt-10">
                    {
                        products.map((product) => (
                            <CardProduct key={product.id} product={product} />
                        ))
                    }


                </div>
            </div>
        </>
    )
}
