import { useState } from "react";
import {v4 as uuid} from "uuid";
import Buttom from "../Buttom";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import TextArea from "../TextArea";
import "./NewVideo.css"

const NewVideo = (props) => {


    const [titulo , actualizartitulo] = useState ("")
    const [linkVideo , actualizarlinkVideo] = useState ("")
    const [linkImagen , actualizarlinkImagen] = useState ("")
    const [selectCategoria , actualizarselectCategoria] = useState ("")
    const [descripcionVideo , actualizarescripcionVideo] = useState ("")
    const [codeSeg , actualizarcodeSeg] = useState ("")
    

    const controlarEnvio = (event) => {
        event.preventDefault()
        console.log("movimiento en formulario")
        
        let nuevoVideo={
            titulo,
            linkVideo,
            linkImagen,
            selectCategoria,
            descripcionVideo,
            codeSeg,
            id:  uuid(),
        }

        props.regisrarVideo(nuevoVideo)
    }


    //Registrar Video



return (
    <section className="new_video">
    <div className="video_contenedor">
        <h1>Nuevo Video</h1>

        <form className="video_formulario" onSubmit={controlarEnvio}> 
        <Campo titulo="Título" placeholder="Ingresa un Título" required valor={titulo} actualizarValor={actualizartitulo}/>    
        <Campo titulo="Link del video" placeholder="Ingresa Link" valor={linkVideo} actualizarValor={actualizarlinkVideo}/>    
        <Campo titulo="Link imagen del video" placeholder="Ingresa Imagen" valor={linkImagen} actualizarValor={actualizarlinkImagen}/>  
        <ListaOpciones titulo="Escoja una categoría" valor={selectCategoria} actualizarselectCategoria={actualizarselectCategoria} categorias={props.selectCategoria}/>   
        <TextArea titulo="Descripción" placeholder="Ingresa Texto" valor={descripcionVideo} actualizarValor={actualizarescripcionVideo}/>               
        <Campo titulo="Código de seguridad" placeholder="Ingresa Código" valor={codeSeg} actualizarValor={actualizarcodeSeg} type="password"/>   
        <div className="caja_buttons">
            <div className="video_buttons">
                <Buttom>Guardar</Buttom>
                <Buttom>Limpiar</Buttom>
            </div>
            <a href="">Nueva Categoría</a>
        </div>         
        </form>
    </div>
    </section>
);

}

export default NewVideo