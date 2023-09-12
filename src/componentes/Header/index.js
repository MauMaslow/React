import "./Header.css"
import {AiOutlineHome} from 'react-icons/ai';
import { Link, useLocation } from "react-router-dom"

const Header = () => {

    const location = useLocation();
    const isHomePage = location.pathname === "/";


return <header className="header">
<section className="menu">
<Link to="/"><img src="/img/logo.png" alt='logo'/></Link>

        {isHomePage && (
          <Link to="/NewVideos" className="link">
            Nuevo Video
          </Link>
        )}

        {
        !isHomePage && (
            <Link to="/">
                <AiOutlineHome className="homme"/>
            </Link>            
        )}

</section>

    
</header>
}

export default Header