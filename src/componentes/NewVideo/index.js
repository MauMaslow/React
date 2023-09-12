import { useState } from "react";
import {v4 as uuid} from "uuid";
import Buttom from "../Buttom";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import TextArea from "../TextArea";
import "./NewVideo.css"
import { Link } from "react-router-dom";

const NewVideo = (props) => {


    const [titulo , actualizartitulo] = useState ("")
    const [linkVideo , actualizarlinkVideo] = useState ("")
    const [linkImagen , actualizarlinkImagen] = useState ("")
    const [selectCategoria , actualizarselectCategoria] = useState ("")
    const [descripcionVideo , actualizarescripcionVideo] = useState ("")
    const [codeSeg , actualizarcodeSeg] = useState ("")
    
    const [tituloTocado, setTituloTocado] = useState(false);
    const [codeSegTocado, setCodeSegTocado] = useState(false);

    const campos = {
        camTitulo: null,    
        camCodeSeg: null,    
    };
    
     const mensaje = {
        msjTitulo: "",
        msjCodeSeg: "",
     }


     const vali = /^[a-zA-Záéóóúàèíòùäëïöüñ\s]+$/;
    
     // Validación del nombre
             if (tituloTocado && !titulo) {
             campos.camTitulo = true;
             mensaje.msjTitulo="Campo vacio"
             }else if (tituloTocado && !titulo.match(vali)){
             campos.camTitulo = true;
             mensaje.msjTitulo="Ingresa solo letras"        
             }else if(tituloTocado && titulo.length < 3) {
                 campos.camTitulo = true;
                 mensaje.msjTitulo="Debe tener más de 3 letras"
             }else{
                 console.log("campo correcto")
             }
    
    const valCodeSeg = /^[0-9]+$/;
    
             if (codeSegTocado && !codeSeg) {
                campos.camCodeSeg = true;
                mensaje.msjCodeSeg="Campo vacio"
                }else if(codeSegTocado && codeSeg.length < 4) {
                    campos.camCodeSeg = true;
                    mensaje.msjCodeSeg="Debe tener más de 4 números  "
                }else if (codeSegTocado && !codeSeg.match(valCodeSeg)){
                    campos.camCodeSeg = true;
                    mensaje.msjCodeSeg="Ingresa solo números"        
                }else{
                    console.log("campo correcto")
                }
    










    const controlarEnvio = async (event) => {
        event.preventDefault();
    

        if (!campos.camNombre && !campos.camCodigo) {

        let nuevoVideo = {
          titulo,
          linkVideo,
          linkImagen,
          selectCategoria,
          descripcionVideo,
          codeSeg,
          id: uuid(),
        };
    
        // Enviar los datos al servidor
        await props.regisrarVideo(nuevoVideo);
    
        // Limpiar los valores de los inputs
        actualizartitulo("");
        actualizarlinkVideo("");
        actualizarlinkImagen("");
        actualizarselectCategoria("");
        actualizarescripcionVideo("");
        actualizarcodeSeg("");

    } else {
        console.log("Existen errores en el registro");
        // Puedes mostrar mensajes de error o tomar otras acciones en caso de errores
    }


      };

      

//limpiar form 

const limpiarForm = () => {

    console.log ("escucho")

    actualizartitulo("");
    actualizarlinkVideo("");
    actualizarlinkImagen("");
    actualizarselectCategoria("");
    actualizarescripcionVideo("");
    actualizarcodeSeg("");

}

const msjTitulo =  mensaje.msjTitulo;
const errorTitulo = campos.camTitulo;

const msjCodeSeg =  mensaje.msjCodeSeg;
const errorCodeSeg = campos.camCodeSeg;




return (
    <section className="new_video">
    <div className="video_contenedor">
        <h1>Nuevo Video</h1>

        <form className="video_formulario" onSubmit={controlarEnvio}> 
        <Campo titulo="Título" placeholder="Ingresa un Título" required valor={titulo} actualizarValor={actualizartitulo} error={errorTitulo} helperText={errorTitulo && msjTitulo } onBlur={() => setTituloTocado(true)}/>    
        <Campo titulo="Link del video" placeholder="Ingresa Link" valor={linkVideo} actualizarValor={actualizarlinkVideo}/>    
        <Campo titulo="Link imagen del video" placeholder="Ingresa Imagen" valor={linkImagen} actualizarValor={actualizarlinkImagen}/>  
        <ListaOpciones titulo="Escoja una categoría" valor={selectCategoria} actualizarselectCategoria={actualizarselectCategoria} categorias={props.selectCategoria}/>   
        <TextArea titulo="Descripción" placeholder="Ingresa Texto" valor={descripcionVideo} actualizarValor={actualizarescripcionVideo}/>               
        <Campo titulo="Código de seguridad" placeholder="Ingresa Código" valor={codeSeg} actualizarValor={actualizarcodeSeg} type="password" error={errorCodeSeg} helperText={errorCodeSeg && msjCodeSeg } onBlur={() => setCodeSegTocado(true)}/>   
        <div className="caja_buttons">
            <div className="video_buttons">
                <Buttom type="submit" >Guardar</Buttom>
                <Buttom onClick={limpiarForm} type="button" >Limpiar</Buttom>
            </div>
            <Link to="/NewCategoria">Nueva Categoría</Link>
        </div>         
        </form>
    </div>
    </section>
);

}

export default NewVideo