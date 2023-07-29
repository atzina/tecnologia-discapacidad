import "./Habilidadesprivilegio.css";
import { useState } from "react";
import Instrucciones from "./Instrucciones.jsx";

function Habilidadesprivilegio() {
  const [mostrarDivs, setMostrarDivs] = useState(true);
  const [mostrarParrafo1, setMostrarParrafo1] = useState(true);
  // const [mostrarParrafo2, setMostrarParrafo2] = useState(true);

  const toggleMostrarDivs = () => {
    setMostrarDivs(!mostrarDivs);
  };

  const toogleMostrarParrafo1 = () => {
    setMostrarParrafo1(!mostrarParrafo1);
  };

  // const toggleMOstrarParrafo2 = () => {
  //   setMostrarParrafo2(!mostrarParrafo2);
  // }

  return (
    <>
      <div className="title-habPriv">
        <h2>Habilidades Atiopresivas para personas sin discapacidad</h2>
      </div>

      <Instrucciones/>
  
      <div className="contendor-hab-priviegio">
        <p>
          No sé mucho de las personas con discapacidad, no tengo problema con
          ser incluyente, pero sinceramente sería muy difícil para mí que una
          persona con discapacidad saliera con mi hija o hijo
        </p>
        <div>
          <button onClick={toggleMostrarDivs}>
            {" "}
            {mostrarDivs ? "Mostrar mas" : "Seguir con las otras"}{" "}
          </button>
        </div>

        {mostrarDivs && (
          <>
            <div className="hab-uno">
              <p>
                Los respeto mucho pero yo no podría salir con una persona con
                discapacidad
              </p>
              <button onClick={toogleMostrarParrafo1}>
                {mostrarParrafo1 ? "Mostrar mas" : "Seguir con las otras"}{" "}
              </button>
            </div>
            {mostrarParrafo1 && (
              <>
                <div className="hab-dos">
                  <p>
                    No he tenido mucho contacto con personas con discapaciad,
                    pero sobretodo creo que todas son personas muy tiernas.
                  </p>
                </div>
                <div>
                  <p>
                    Ha sido difícil llegar hasta este punto de la información,
                    honestamente me aburre un poco.
                  </p>
                </div>
                <div>
                  <p>
                    Creo que todos somos iguales, no debería haber diferencias
                    entre las condiciones de mi compañero de trabajo y las mías,
                    sus &quot;privilegios&quot; me molestan un poco.
                  </p>
                </div>
                <div>
                  <p>
                    Creo en la inclusión, pero me enoja un poco que mi compañero
                    con discapacidad falte tanto al trabajo
                  </p>
                </div>
                <di>
                  <p>
                    Creo que la depresión es solo una forma de llamar la
                    atención y la forma en que las personas evitan sus
                    responsabilidades
                  </p>
                </di>
                <div>
                  <p>
                    Yo sé lo que las personas con dispacadidad necesitan hacer,
                    yo he vivido situaciones muy dificiles y las he superado
                    así.
                  </p>
                </div>
                <div>
                  <p>
                    Quisera ser la voz de las persons con dispacidad, no soy
                    cercano, a ninguna pero quisiera decir lo que ellos no
                    pueden decir
                  </p>
                </div>
                <div>
                  <p>
                    Siento mucha incomodidad darme cuenta de como mi actuar
                    afecta a las personas con discapacidad
                  </p>
                </div>
                <div>
                  <p>
                    Siento culpa de no saber a todo lo que se tiene que
                    enfrentar una persona con autismo
                  </p>
                </div>
                <div>
                  <p>
                    Siento verguenza de haber sentido miedo de una persona con
                    discapacidad mental
                  </p>
                </div>
                <div>
                  <p>
                    Ahora me doy cuenta de qué no tengo idea de cómo te trata el
                    mundo cuando tienes una discapacidad. ¿Me puedes decir más?
                  </p>
                </div>
                <div>
                  <p>
                    Sé que no te entiendo, pero no sé qué hacer para ayudarte,
                    voy a pensar más sobre eso
                  </p>
                </div>
                <div>
                  <p>
                    Ahora entiendo que nunca voy a poder entender a cabalidad la
                    experiencia de una persona con Autismo
                  </p>
                </div>
                <div>
                  <p>
                    Decidí dedicar mi vida a hacer cosas para ayudar a las
                    personas con discapaciad
                  </p>
                </div>
                <div>
                  <p>
                    Hago labor para que más personas sin discapacidad, entiendan
                    sus privilegios y sus propias discriminaciones hacia las
                    personas con discapacidad.
                  </p>
                </div>
                <div>
                  <p>
                    Escucho y entiendo lo que las personas con discpacidad me
                    dicen, no impongo mis ideas de lo que es mejor para ellas y
                    a hago acciones a partir de sus propias sugerencias e
                    intereses
                  </p>
                </div>
                <div>
                  <p>
                    Uso mis propios privielgios para que las personas con
                    discapaciad sean escuchadas, no hablo por ellas, genero
                    espacios para que sus propias voces sean posibles.
                  </p>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Habilidadesprivilegio;
