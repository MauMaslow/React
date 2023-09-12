import NewCategoria from "../componentes/NewCategoria"
import { useState, useEffect } from 'react';
import { buscar } from "../api/api";
import { api } from "../api/api";

const ReCategoria = ({url, url2, url3}) => {


    const [filasdeVideoss, setFilasdeVideos] = useState([])

    useEffect(()=>{
        buscar (url2 , setFilasdeVideos)        
    }, [url2])



    /*

    const [videoss, setVideoss] = useState([])
    const [filasdeVideoss, setFilasdeVideos] = useState([])

    useEffect(()=>{
        buscar (url , setVideoss)
        console.log(videoss)
    }, [url])

    useEffect(()=>{
        buscar (url2 , setFilasdeVideos)
        console.log(filasdeVideoss)
    }, [url2])

    const [elementos, setElementos] = useState([])

    useEffect(()=>{
    buscar (url3 , setElementos)
    console.log(elementos)
}, [url3])

*/


const regisrarFila = async (fila) => {
    try {

        const repuesta = await api.post('/filasdeVideos',fila)
        console.log("nueva fila es:", fila)

       // Actualizar el estado local con el nuevo video
       setFilasdeVideos([...filasdeVideoss, repuesta.data]);

    } catch (error) {
        console.error('Error al registrar la fila:', error)
    }       
  }




  const eliminarFila = async (id) => {
    console.log("si estoy escychado")
    try {
        const response = await api.delete(`/filasdeVideos/${id}`)        
        setFilasdeVideos(filasdeVideoss.filter((fila) => fila.id !== id));
       

    } catch (error) {
        console.error('Error al registrar la fila:', error)
    }       
  }




    return <>
    
    <NewCategoria 
    //elementos={elementos.map( (elemento) => elemento.colorPrimario )}
    regisrarFila={regisrarFila}
    eliminarFila={eliminarFila}
    url2={url2}
    filasdeVideos={filasdeVideoss}
    />
    
    
    </>
}

export default ReCategoria