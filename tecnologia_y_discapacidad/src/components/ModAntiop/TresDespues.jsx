import { useState } from "react";

function TresDespues () {

    const [mostrarParrafo3, setMostrarParrafo3] = useState(true);

    
  const toggleMostrarParrafo3 = () => {
    setMostrarParrafo3(!mostrarParrafo3);
  }

    return (
        <>
          <div className="hab-cuatro">
            <p>
                Ha sido difícil llegar hasta este punto de la información,
                honestamente me aburre un poco.
            </p>
            <button onClick={toggleMostrarParrafo3}>
                  {mostrarParrafo3 ? "Mostrar mas" : "Seguir con las otras"}{" "}
            </button>
          </div>
          {mostrarParrafo3 && (

            <>
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
                <div>
                    <p>
                        Creo que la depresión es solo una forma de llamar la
                        atención y la forma en que las personas evitan sus
                        responsabilidades
                    </p>
                </div>
                
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
    )
}

export default TresDespues;