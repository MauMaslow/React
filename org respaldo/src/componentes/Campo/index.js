import { useState } from "react";
import "./Campo.css"

const Campo = (props) => {
const {type = "text"} = props

const cambiarValor = (e) => {
props.actualizarValor(e.target.value)
}

    const {titulo, placeholder, required} = props
    return (
        <div className={`video_input video_input-${type}`}>
            <label>{titulo}</label>
            <input placeholder="" 
            required={required} 
            value={props.valor} 
            onChange={cambiarValor}
            type={type}
            />  
        </div>
    );
}

export default Campo