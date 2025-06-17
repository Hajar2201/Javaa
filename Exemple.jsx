import { Link } from 'react-router-dom';
import './Nav.css';
const MenuH = () => {
  return (
    <div>
      <h1>Welcome to my website!</h1>
    

      <nav className="menu">
        <ul className="menu-list">
        <li>   <Link to="/about">Learn more</Link></li> 
          <li> <Link to="/Home">Home</Link> </li>
          <li> <Link to="/About">About</Link> </li>
          <li><Link to="/Services">Services</Link> </li>
          <li><Link to="/Contact">Contact</Link> </li>
       
      
        </ul>
      </nav>

    </div>
  );
};

export default MenuH;

