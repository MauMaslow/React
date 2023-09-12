import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
return <header className="header">
<section className="menu">
<img src="/img/logo.png" alt='logo'/>
<Link to="../../../public/new_video.html" className="link">Nuevo Video </Link>
</section>

    
</header>
}

export default Header