import './cssPages/page404.css'
import { Link } from 'react-router-dom'


const page404 = () => {
return <>
<div className='contenedorError'>
<img src='../img/404.jpg' alt='error'></img>
<Link to='' className='linka'>Dirigite a la pantalla principal</Link>
</div>
</>
} 

export default page404