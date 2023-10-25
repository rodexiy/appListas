import { useState } from "react"
import { Lista } from "./Lista"

const Listas = ({ArrayListas, setArrayListas}) => {


    return (
        <>
            {
                ArrayListas.map((objLista, index) => {
                    return <Lista Titulo={objLista.Titulo} IndexLista={index} />
                })
            }
        </>
    )

}

export default Listas