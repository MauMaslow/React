import React from 'react';
import "./Card.css"
import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import hexToRgba from 'hex-to-rgba';

const Card = (props) =>{
    const {titulo, linkVideo, linkImagen, selectCategoria, descripcionVideo, codeSeg,id,fav} = props.datos
    const {color, eliminarVideo, like}= props    
    
    const Bodercolor = { borderColor: hexToRgba(color, 0.6) };
    const Favorito = fav ? <AiFillHeart className="like" color="red"  onClick={()=>like(id)}/> : <AiOutlineHeart className="like" color="red" onClick={()=>like(id)}/>

     

//<iframe src="https://www.youtube.com/embed/uuwfgXD8qV8"></iframe>

return <div className="card" style={Bodercolor}>
        <AiFillCloseCircle className='eliminar' onClick={() => eliminarVideo(id)}/>
        <img src={linkImagen}></img>
        <span className='titulo'>{titulo}</span>
        {Favorito}
</div>
}

export default Card

