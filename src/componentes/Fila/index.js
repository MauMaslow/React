import React from "react";
import Card from "../Card";
import "./Fila.css";


const Fila = (props) => {    
    const {nombre,descripcion, codigo, color,id} = props.datos
    const {videos, eliminarVideo, cambiarColor, like} = props    
    
    const colorDeEtiqueta = { backgroundColor: color };

    
    const renderEnlace = nombre && <a href="" style={colorDeEtiqueta} >{nombre}</a> 
    const inputCambiaColores = nombre &&
    <input 
    type="color"
    value={color}
    onChange={ (e) => {
        cambiarColor(e.target.value,id)
    }
       }
    ></input>


    return (
        videos.length > 0 &&
        <section className="fila">
            <div className="contenido__fila">
                <div className="informacion__fila">
                    {renderEnlace}
                    <span>{descripcion}</span>
                    {inputCambiaColores}
                </div>

                <div className="cards__fila">

                {
                    videos.map( (video,index) => <Card 
                    datos={video}
                    key={index}
                    color={color}
                    eliminarVideo= {eliminarVideo}
                    like={like}     
                    /> )
                }

                </div>
            </div>
        </section>
    );
    
};

export default Fila;
