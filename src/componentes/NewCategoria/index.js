import { useState } from "react";
import {v4 as uuid} from "uuid";
import Campo from "../Campo";
import ListaColores from "../ListaColores";
import TextArea from "../TextArea";
import MostrarOcultar from "../MostrarOcultar"
import "./NewCategoria.css"
import Table from "../Table";


const NewCategoria = (props) => {
const eliminarFila = props.eliminarFila


/* Ternario --> es una condición: 
condicion ? seMuestra : noSeMuestra
otro tipo de condición es con && es decir 
condicion && seMuestra
*/

const [mostrarCategorias, actualizarMostar] = useState (false)

const mostrarOcultar = (props) => {
    actualizarMostar (!mostrarCategorias)
}



/*Actualizar input*/
const [nombre , actualizarNombre] = useState ("")
const [descripcion , actualizarDescripcion] = useState ("")
const [codigo , actualizarCodigo] = useState ("")
const [color, actualizarColor] = useState ("")

const [nombreTocado, setNombreTocado] = useState(false);
const [codigoTocado, setCodigoTocado] = useState(false);

const campos = {
    camNombre: null,    
    camCodigo: null,    
};

 const mensaje = {
    msjNombre: "",
    msjCodigo: "",
 }

 const val = /^[a-zA-Záéóóúàèíòùäëïöüñ\s]+$/;
    
 // Validación del nombre
         if (nombreTocado && !nombre) {
         campos.camNombre = true;
         mensaje.msjNombre="Campo vacio"
         }else if (nombreTocado && !nombre.match(val)){
         campos.camNombre = true;
         mensaje.msjNombre="Ingresa solo letras"        
         }else if(nombreTocado && nombre.length < 3) {
             campos.camNombre = true;
             mensaje.msjNombre="Debe tener más de 3 letras"
         }else{
             console.log("campo correcto")
         }

const valCodigo = /^[0-9]+$/;

         if (codigoTocado && !codigo) {
            campos.camCodigo = true;
            mensaje.msjCodigo="Campo vacio"
            }else if(codigoTocado && codigo.length < 4) {
                campos.camCodigo = true;
                mensaje.msjCodigo="Debe tener más de 4 números  "
            }else if (codigoTocado && !codigo.match(valCodigo)){
                campos.camCodigo = true;
                mensaje.msjCodigo="Ingresa solo números"        
            }else{
                console.log("campo correcto")
            }




        const controlarEnvio = (event) => {
            event.preventDefault()


            if (!campos.camNombre && !campos.camCodigo) {
                // Si no hay errores en ningún campo, continuamos con el registro
                
            let nuevaCategoria = {
                nombre,
                descripcion,
                codigo,
                color,
                id:  uuid(),
            }
        

            props.regisrarFila(nuevaCategoria)

            actualizarNombre("");
            actualizarDescripcion("");
            actualizarCodigo("");
            actualizarColor("");

        } else {
            console.log("Existen errores en el registro");
            // Puedes mostrar mensajes de error o tomar otras acciones en caso de errores
        }


}



const limpiarForm = () => {

    

    actualizarNombre("");
    actualizarDescripcion("");
    actualizarCodigo("");
    actualizarColor("");

}


const msj =  mensaje.msjNombre;
const errornombre = campos.camNombre;

const msjCodigo =  mensaje.msjCodigo;
const errorCodigo = campos.camCodigo;


/* Se va a refactorizar el campo a color para que seleccione el de su preferencia y no de una lista
<ListaColores titulo="Color" valor={color} actualizarColor={actualizarColor}  colores={props.elementos} />
*/

return (
    <section className="new_categori">
    <div className="categori_contenedor">
        <h1>Nueva Categoría</h1>

        <form className="categori_formulario" onSubmit={controlarEnvio}> 
        <Campo titulo="Nombre" placeholder="Ingresa Nombre" valor={nombre} actualizarValor={actualizarNombre}  error={errornombre} helperText={errornombre && msj } onBlur={() => setNombreTocado(true)}/>    
        <TextArea titulo="Descripción" placeholder="Ingresa Texto" valor={descripcion} actualizarValor={actualizarDescripcion} error={errornombre} />         
        <Campo titulo="color" valor={color} actualizarValor={actualizarColor} type="color"/>    
        <Campo titulo="Código de seguridad" placeholder="Ingresa Código" valor={codigo} actualizarValor={actualizarCodigo} type="password" error={errorCodigo} helperText={errorCodigo && msjCodigo } onBlur={() => setCodigoTocado(true)}/>    
        
         

        <div className="categori_buttons">
            <button className="guardar">Guardar</button>
            <button onClick={limpiarForm} className="limpiar">Limpiar</button>
        </div>      
        </form>



        <MostrarOcultar mostrarOcultar={mostrarOcultar}/>
        {mostrarCategorias  && 
        <Table 
        eliminarFila={eliminarFila}
        filasdeVideos= {props.filasdeVideos}
        />
}

        
    </div>
    </section>
);

}

export default NewCategoria