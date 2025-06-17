import './App.css';
// import MenuH from './Exemple';
import { Routes,Route } from 'react-router-dom';
import PageNotFound from './PageNotFound';

import Contact from './Contact';
import Home from './Home';
import Services from './Services';



function App() {
  return (
    <div className="App">
 
<Routes>

<Route path="*" element={<PageNotFound />} />
<Route path="/Home" element={<Home/>} />
<Route path="/Services" element={<Services/>} />
<Route path="/Contact" element={<Contact/>} />


 </Routes>

 {/* </BrowserRouter> */}


     
 
     
   
    
{/* 
      </header> */}
</div>
  );
}

export default App;
