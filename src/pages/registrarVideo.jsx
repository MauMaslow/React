import NewVideo from "../componentes/NewVideo"
import {v4 as uuid} from "uuid";
import { useState, useEffect } from 'react';
import { buscar } from "../api/api";
import { api } from "../api/api";


const ReVideos = ({url, url2}) => {

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


    const regisrarVideo = async (video) => {
      try {
        // Realizar una solicitud POST al servidor simulado para agregar el nuevo video
        const response = await api.post('/videos', video);
        
        // Actualizar el estado local con el nuevo video
        setVideoss([...videoss, response.data]);
      } catch (error) {
        console.error('Error al registrar el video:', error);
      }
    };
    





    return<>

      <NewVideo selectCategoria={filasdeVideoss.map( (select) => select.nombre )}       
      regisrarVideo={regisrarVideo}      
      />

    </>
}

export default ReVideos


