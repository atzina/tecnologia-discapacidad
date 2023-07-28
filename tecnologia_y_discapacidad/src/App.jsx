import Navar from "./components/Navar/Navar";
import Home from './components/Home/Home';
import {Routes, Route} from 'react-router-dom';
import Diseno from './components/Diseno';
import Trabajo from './components/Trabajo';
import Directorio from './components/Directorio';
import Modelo from './components/ModAntiop/Modelo';
import Recomendaciones from "./components/Recomendaciones";
import 'bootstrap/dist/css/bootstrap.min.css';
import Rango from "./components/ModAntiop/Rango";
import Discapacidad from "./components/ModAntiop/Discapacidad";
import Habilidades from "./components/ModAntiop/Habilidades";
import Discytec from "./components/ModAntiop/Discytec";
import Habilidadesmarg from "./components/ModAntiop/Habilidadesmarg";
import Habilidadesprivilegio from "./components/ModAntiop/Habilidadesprivilegio";


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

          <Route path="/modelo/rango" element ={<Rango/>} exact />
          <Route path="/modelo/discapacidad" element ={<Discapacidad/>} exact />
          <Route path="/modelo/habilidades" element ={<Habilidades/>} exact />
          <Route path="/modelo/discytec" element ={<Discytec/>} exact />

          <Route path= "/persona-discapacidad" element ={<Habilidadesmarg/>} exact/>
          <Route path= "/persona-sin-discapacidad" element ={<Habilidadesprivilegio/>} exact/>


        </Routes>
        
      </>
    
   
  );
}

export default App
