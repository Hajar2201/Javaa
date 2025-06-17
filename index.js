import React from 'react';
import { BrowserRouter} from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import './index.css';

// import Navigation from './Navigation';
// import MenuH from './Exemple';
import App from './App';
import MenuH from './Exemple';
// import Navigation from './Navigation';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
     <BrowserRouter>
     {/* <Navigation/> */}
     <MenuH/>
    <App/>
    </BrowserRouter>
  </React.StrictMode>
);


