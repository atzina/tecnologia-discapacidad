import Navar from "./components/Navar/Navar";
import Home from './components/Home/Home';
import {Routes, Route} from 'react-router-dom';
import Diseno from './components/Diseno';
import Trabajo from './components/Trabajo';
import Directorio from './components/Directorio';
import Modelo from './components/Modelo';
import Recomendaciones from "./components/Recomendaciones";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 

  return (

      <>
        <Navar/>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/diseno" element ={<Diseno/>} exact />
          <Route path="/trabajo" element ={<Trabajo/>} exact />
          <Route path="/directorio" element ={<Directorio/>} exact />
          <Route path="/modelo" element ={<Modelo/>} exact />
          <Route path="/recomendaciones" element ={<Recomendaciones/>} exact />

        </Routes>
        
      </>
    
   
  );
}

export default App
