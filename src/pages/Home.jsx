import Banner from "../componentes/Banner"
import Fila from "../componentes/Fila"
import { useState, useEffect } from 'react';
import {v4 as uuid} from "uuid";
import { api } from "../api/api";
import { buscar } from "../api/api";


const Home = ({url, url2}) => {

/*  
    const[filasdeVideos, actualizarFilas] = useState([
        {
          id:  uuid(),
          codigo:"",
          color: "#fff",
          descripcion: "",
          nombre: ""
        },
        {
          id:  uuid(),
          codigo:"",
          color: "#FFBA05",
          descripcion: "un dia",
          nombre: "volare"
        }
      ])

      const[videos , actualizarVideos]= useState([
        {
          fav: true,
          id:  uuid(),
          codeSeg: "",
          descripcionVideo: "",
          linkImagen:"/img/img-banner.jpg",
          linkVideo:"klkl",
          selectCategoria: "",
          titulo:"Un universo nos espera  "
        },
      {
        fav: false,
        id:  uuid(),
        codeSeg: "",
        descripcionVideo: "",
        linkImagen:"/img/img-banner.jpg",
        linkVideo:"klkl",
        selectCategoria: "volare",
        titulo:"Uns universo nos espera  "
      },
      {
        fav: true,
        id:  uuid(),
        codeSeg: "",
        descripcionVideo: "",
        linkImagen:"/img/img-banner.jpg",
        linkVideo:"klkl",
        selectCategoria: "volare",
        titulo:"Un universo nos espera  "
      },
      {
        fav: true,
        id:  uuid(),
        codeSeg: "",
        descripcionVideo: "",
        linkImagen:"/img/img-banner.jpg",
        linkVideo:"klkl",
        selectCategoria: "volare",
        titulo:"Un universo nos espera  "
      }
      ])

      */

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


    const eliminarVideo = async (id) => {
      try {
        // Realizar una solicitud DELETE al servidor simulado para eliminar el video por ID
        const response = await api.delete(`/videos/${id}`);
        
        // Actualizar el estado local eliminando el video con el ID correspondiente
        setVideoss(videoss.filter((video) => video.id !== id));
      } catch (error) {
        console.error('Error al eliminar el video:', error);
      }
    };


    const cambiarColor = (color,id) => {  
      const actualizarColorDeFila = filasdeVideoss.map( (fila) => {
      if(fila.id === id){
        fila.color = color
      }
      return fila
      })
      setFilasdeVideos(actualizarColorDeFila)
    }
    

    const like = (id) => {
      const Like = videoss.map( (video) => {
      if(video.id === id){
      video.fav = !video.fav
      }
      return video
      })
      setVideoss(Like)
      }
      

      /*

      const eliminarVideo = (id) => {
        const Videos = videos.filter((video) => video.id !== id)
        actualizarVideos(Videos)
      }       
        
        
      
      const cambiarColor = (color,id) => {  
        const actualizarColorDeFila = filasdeVideos.map( (fila) => {
        if(fila.id === id){
          fila.color = color
        }
        return fila
        })
        actualizarFilas(actualizarColorDeFila)
      }
      
      const like = (id) => {
        const Like = videos.map( (video) => {
        if(video.id === id){
        video.fav = !video.fav
        }
        return video
        })
        actualizarVideos(Like)
        }
        
    */


return <>
<Banner/> 
{filasdeVideoss.map( (fila) => <Fila      
      datos={fila}
      key={fila.id}
      //filter nos ayuda a filtrar una condición en este caso que la llave lleve un nombre
      videos={videoss.filter( video => video.selectCategoria === fila.nombre)} 
      eliminarVideo= {eliminarVideo}  
      cambiarColor={cambiarColor}  
      like={like} 
      />)}
</>
}

export default Home