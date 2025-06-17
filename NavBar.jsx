
import { Link } from 'react-router-dom';
import './Nav.css'

// function Navbar() {

    



//   return (
//     <>
// <nav className="menu">
// <ul className="menu-list">
//      <li> 
//     <Link to="/">Home</Link> </li>
//     <li><Link to="/Contact">Contact</Link></li>
    
//     </ul>
//     </nav>
//     </>
//     )
//     }

//     export default  Navbar;
    

const Navbar = () => {
    return (
      <nav className="menu">
        <ul className="menu-list">
          <li> < Link to="/">Home</Link> </li>
          <li> <Link to="/#">About</Link> </li>
          <li><Link to="/#">Services</Link> </li>
          <li><Link to="/#">Contact</Link> </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;