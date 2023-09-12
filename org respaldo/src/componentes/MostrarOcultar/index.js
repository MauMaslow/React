import { useState } from "react"
import "./MostarOcultar.css"

const IconoImg = (props) =>{

    /* const [variable, FunciónQueActualiza] = useState (valorInicial)
    Los useState se deben de usar dentro de la función antes del return
    
    Ejemplo
    const [ mostrar, actualizarMostrar] = useState (true)

    const MostrarOcultar = () => {       
        actualizarMostrar(!mostrar)        
        }
    */

    return <i className="fa-solid fa-eye ojo" onClick={props.mostrarOcultar}> Ver / Ocultar</i>

}
export default IconoImg 