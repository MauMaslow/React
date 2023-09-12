import './App.css';
import {v4 as uuid} from "uuid";
import Banner from './componentes/Banner';
import Header from './componentes/Header';
import Fila from './componentes/Fila';
import Footer from './componentes/Footer';
import NewVideo from './componentes/NewVideo';
import NewCategoria from './componentes/NewCategoria';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page404 from './pages/page404';
import Home from './pages/Home';
import ReVideos from './pages/registrarVideo';
import ReCategoria from './pages/registrarCategoria';



function App() {

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

  const elementos =[

    {
      titulo: " ",      
      olorPrimario:"#6BD1FF"
      
    },
     
    {
      titulo: "Back End",      
      colorPrimario:"#00C86F"
    },
    {
      titulo: "Mobile",      
      colorPrimario:"#FF8C2A"

    },
    {
      titulo: "Infraestrutura",      
      colorPrimario:"#FFBA05"
    },
    {
      titulo: "Data Science",      
      colorPrimario:"#DC6EBE"
    },
    {
      titulo: "Design & UX",      
      colorPrimario:"#9CD33B"
    },
    {
      titulo: "Marketing Digital",
      colorPrimario:"#6B5BE2"
    },
    {
      titulo: "Inovación y Gestión",      
      colorPrimario:"#9CD33B"
    }    
 
]




//Spread operator actaaliza los arreglos se usan ... asi copia el arreglo y agrega depues con [variable ,  nuevo elemento]

/*
const regisrarVideo = (video)  => {
  console.log("nuevo video es:",  video)  
  actualizarVideos([...videos,video])
}
*/

/*
const eliminarVideo = (id) => {
const Videos = videos.filter((video) => video.id !== id)
actualizarVideos(Videos)
}
*/


/*
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

const url = "/videos";
const url2 = "/filasdeVideos"
const url3 = "/elementos"

  return (    
  
    


  <Router>
    <Header/>

    <Routes>
      <Route path='/' element={<Home  url={url} url2={url2} />} />
      <Route path='/NewVideos' element={<ReVideos url={url} url2={url2} />} />
      <Route path='/NewCategoria' element={<ReCategoria url={url} url2={url2} url3={url3} />} />
      <Route path='*' element={<Page404/>} />
    </Routes>
  
    <Footer/>

    <div>
     
              
      


      
 
     


    {/*<div>      



    

    
      <Header/>             
      <Banner/>  
      <Fila titulo=""/>         
      <Fila titulo="Back End" parrafo="Formación Back End de Alura Latam"/>               
      <Footer/>
      <NewVideo/>
      <NewCategoria/>
      </div>


    */}

  </div>
  </Router>

  );
}

export default App;
