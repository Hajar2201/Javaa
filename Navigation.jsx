
import { NavLink } from "react-router-dom";
import './Navlink.css'
import './Nav.css'


const Navigation = () => {
    return (
        <nav className="menu">
        <ul className="menu-list">
          <li>
            <NavLink  to="/home"  className={({ isActive }) =>  isActive ? "active" : ""  } > Accueil  </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about"
              className={({ isActive }) => 
                isActive ? "active" : ""
              }
            >
              À propos
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/Contact"
              className={({ isActive }) => 
                isActive ? "active" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  };

  export default Navigation;