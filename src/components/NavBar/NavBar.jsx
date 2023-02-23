import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css';
import {NavLink, Link} from 'react-router-dom';

export const Navbar = () =>{
    return(
        <nav className='nav-container'>
            <Link to="/">
                <div>
                    
                </div>
            </Link>
            <div className='navegacion'>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/">Inicio</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/Italia">Italia</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/Cancun">Cancun</NavLink>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}