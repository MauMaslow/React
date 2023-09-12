import { useState } from "react";
import "./TextArea.css"

const TextArea = (props) => {

const cambiarValor = (e) =>{
props.actualizarValor(e.target.value)
}


    const {titulo} = props
    return (
        <div className="video_text">
            <label>{titulo}</label>
            <textarea value={props.valor} onChange={cambiarValor}></textarea>
        </div>
    );
}

export default TextArea