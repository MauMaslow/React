import { useState } from "react";
import {v4 as uuid} from "uuid";
import Campo from "../Campo";
import ListaColores from "../ListaColores";
import TextArea from "../TextArea";
import MostrarOcultar from "../MostrarOcultar"
import "./NewCategoria.css"
import "./Tabla.css"




const NewCategoria = (props) => {

/* Ternario --> es una condición: 
condicion ? seMuestra : noSeMuestra
otro tipo de condición es con && es decir 
condicion && seMuestra
*/

const [mostrarCategorias, actualizarMostar] = useState (true)

const mostrarOcultar = (props) => {
    actualizarMostar (!mostrarCategorias)
}

/*Actualizar input*/
const [nombre , actualizarNombre] = useState ("")
const [descripcion , actualizarDescripcion] = useState ("")
const [codigo , actualizarCodigo] = useState ("")
const [color, actualizarColor] = useState ("")



const controlarEnvio = (event) => {
    event.preventDefault()
    console.log("movimiento en formulario")

    let nuevaCategoria = {
        nombre,
        descripcion,
        codigo,
        color,
        id:  uuid(),
    }

    props.regisrarFila(nuevaCategoria)
}

/* Se va a refactorizar el campo a color para que seleccione el de su preferencia y no de una lista
<ListaColores titulo="Color" valor={color} actualizarColor={actualizarColor}  colores={props.elementos} />
*/

return (
    <section className="new_categori">
    <div className="categori_contenedor">
        <h1>Nueva Categoría</h1>

        <form className="categori_formulario" onSubmit={controlarEnvio}> 
        <Campo titulo="Nombre" placeholder="Ingresa Nombre" valor={nombre} actualizarValor={actualizarNombre} />    
        <TextArea titulo="Descripción" placeholder="Ingresa Texto" valor={descripcion} actualizarValor={actualizarDescripcion}/>         
        <Campo titulo="color" valor={color} actualizarValor={actualizarColor} type="color"/>    
        <Campo titulo="Código de seguridad" placeholder="Ingresa Código" valor={codigo} actualizarValor={actualizarCodigo} type="password"/>    
        
         

        <div className="categori_buttons">
            <button className="guardar">Guardar</button>
            <button className="limpiar">Limpiar</button>
        </div>      
        </form>



        <MostrarOcultar mostrarOcultar={mostrarOcultar}/>
        {mostrarCategorias  &&   <table className="categori_table">
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Editar</th>
                <th>Remover</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Back End</td>
                <td>Todos los videos que estoy usando para estudiar Back End</td>
                <td className="editar">Editar</td>
                <td className="remover">Remover</td>
                </tr>
                <tr>
                <td>Mobile</td>
                <td>Contenido que vengo estudiando sobre React Native y Flutter</td>
                <td className="editar">Editar</td>
                <td className="remover">Remover</td>
                </tr>
                <tr>
                <td>Infraestructura</td>
                <td>Todo lo que estoy aprendiendo sobre Docker y mucho más</td>
                <td className="editar">Editar</td>
                <td className="remover">Remover</td>
                </tr>
                <tr>
                <td>Data Science</td>
                <td>Cosas de React y Python que vengo aprendiendo</td>
                <td className="editar">Editar</td>
                <td className="remover">Remover</td>
                </tr>
                <tr>
                <td>Design & UX</td>
                <td>Herramientas y técnicas que estudio sobre UX y Design</td>
                <td className="editar">Editar</td>
                <td className="remover">Remover</td>
                </tr>
                <tr>
                <td>Marketing Digital</td>
                <td>La forma de vender y monetizar mis ideas</td>
                <td className="editar">Editar</td>
                <td className="remover">Remover</td>
                </tr>
                <tr>
                <td>Innovación & Gestión</td>
                <td>Como mantener el equipo feliz y mucho más</td>
                <td className="editar">Editar</td>
                <td className="remover">Remover</td>
                </tr>
            </tbody>
        </table>
}

        
    </div>
    </section>
);

}

export default NewCategoria