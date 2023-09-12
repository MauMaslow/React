import { useState } from "react";
import "./Campo.css"
import TextField from '@mui/material/TextField';

const Campo = (props) => {
const {type = "text"} = props


const cambiarValor = (e) => {
props.actualizarValor(e.target.value)
}



    const {titulo, placeholder, required,error,helperText,onBlur} = props
    return (
        <div className={`video_input video_input-${type}`}>

            <TextField
            required
            id="name"
            label={titulo}
            variant="outlined"
            fullWidth={true}
            value={props.valor} 
            onChange={cambiarValor}
            type={type}
            error={error}
            helperText={helperText}
            onBlur={onBlur}
            />
            
        </div>
    );
}

export default Campo