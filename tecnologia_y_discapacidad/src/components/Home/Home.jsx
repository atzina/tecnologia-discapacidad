import "./Home.css";
import Persons from "../../assets/encabezado.jpg";

function Home () {
    
    return (
        <>
        <main>
            <img className="image-persons" src={Persons}></img>
        </main>
        <h1>Aquí estoy</h1>
        
        </>
    )
    
}

export default Home;