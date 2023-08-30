import "./Habilidadesprivilegio.css";
import Instrucciones from "./Instrucciones.jsx";
//import TresDespues from "./TresDespues";
import Distanciamiento from "./Distanciamiento";
import Indiferencia from "./Indiferencia";
import Inclusion from "./Inclusion";
import Conciencia from "./Conciencia";
import Alianza from "./Alianza";

function Habilidadesprivilegio() {
  return (
    <>
      <div className="title-habPriv">
        <h2>Habilidades Atiopresivas para personas sin discapacidad</h2>
      </div>

      <Instrucciones />


      <div className="contenedor-accordion">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
               1. No sé mucho de las personas con discapacidad, no tengo problema
                con ser incluyente, pero sinceramente sería muy difícil para mí
                que una persona con discapacidad saliera con mi hija o hijo
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  Esta expresión corresponde a habilidades de Distanciamiento.
                </strong>{" "}
                Consulta más sobre estas habilidades <a href="#ancla-distanciamiento">aquí</a>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                2. Los respeto mucho pero yo no podría salir con una persona con
                discapacidad
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  Esta expresión corresponde a habilidades de Distanciamiento.
                </strong>{" "}
                Consulta más sobre estas habilidades <a href="#ancla-distanciamiento">aquí</a>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                3. No he tenido mucho contacto con personas con discapaciad, pero
                sobretodo creo que todas son personas muy tiernas.
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  Esta expresión corresponde a habilidades de Distanciamiento..
                </strong>{" "}
                Consulta más sobre estas habilidades <a href="#ancla-distanciamiento">aquí</a>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                4. Ha sido difícil llegar hasta este punto de la información,
                honestamente me aburre un poco.
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  Esta expresión corresponde a habilidades de Indiferencia..
                </strong>{" "}
                Consulta más sobre estas habilidades <a href="#ancla-indiferencia">aquí</a>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                5. Creo que todos somos iguales, no debería haber diferencias entre
                las condiciones de mi compañero de trabajo y las mías, sus
                &quot;privilegios&quot; me molestan un poco.
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  Esta expresión corresponde a habilidades de Inclusión.
                </strong>{" "}
                Consulta más sobre estas habilidades <a href="#ancla-inclusion">aquí</a>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                6. Creo en la inclusión, pero me enoja un poco que mi compañero con
                discapacidad falte tanto al trabajo
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  Esta expresión corresponde a habilidades de Inclusión .
                </strong>{" "}
                Consulta más sobre estas habilidades <a href="#ancla-inclusion">aquí</a>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                7. Creo que la depresión es solo una forma de llamar la atención y
                la forma en que las personas evitan sus responsabilidades
              </button>
            </h2>
            <div
              id="collapseSeven"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Esta expresión corresponde a habilidades de Distanciamiento .</strong>{" "}
                Consulta más sobre estas habilidades <a href="#ancla-distanciamiento">aquí</a>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEight"
                aria-expanded="false"
                aria-controls="collapseEight"
              >
                8. Yo sé lo que las personas con dispacadidad necesitan hacer, yo
                he vivido situaciones muy dificiles y las he superado así.
              </button>
            </h2>
            <div
              id="collapseEight"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Esta expresión corresponde a habilidades de Inclusión .</strong>{" "}
                Consulta más sobre estas habilidades <a href="#ancla-inclusion">aquí</a>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseNine"
                aria-expanded="false"
                aria-controls="collapseNine"
              >
                9. Quisera dar la voz de las personas con dispacidad.
              </button>
            </h2>
            <div
              id="collapseNine"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Esta expresión corresponde a habilidades de Inclusión.</strong>{" "}
                Consulta más sobre estas habilidades <a href="#ancla-Inclusión">aquí</a>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTen"
                aria-expanded="false"
                aria-controls="collapseTen"
              >
               10. Siento mucha incomodidad darme cuenta de cómo mi actuar afecta a
                las personas con discapacidad
              </button>
            </h2>
            <div
              id="collapseTen"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  Esta expresión corresponde a habilidades de Conciencia.
                </strong>{" "}
                Consulta más sobre estas habilidades <a href="#">aquí</a>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEleven"
                aria-expanded="false"
                aria-controls="collapseEleven"
              >
                11. Siento culpa de no saber a todo lo que se tiene que enfrentar
                una persona con autismo
              </button>
            </h2>
            <div
              id="collapseEleven"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  Esta expresión corresponde a habilidades de Conciencia.
                </strong>{" "}
                Consulta más sobre estas habilidades <a href="#">aquí</a>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwelve"
                aria-expanded="false"
                aria-controls="collapseTwelve"
              >
                12. Siento verguenza de haber sentido miedo de una persona con
                discapacidad mental
              </button>
            </h2>
            <div
              id="collapseTwelve"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  Esta expresión corresponde a habilidades de Conciencia.
                </strong>{" "}
                Consulta más sobre estas habilidades <a href="#">aquí</a>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThirteen"
                aria-expanded="false"
                aria-controls="collapseThirteen"
              >
                13. Ahora me doy cuenta de qué no tengo idea de cómo te trata el
                mundo cuando tienes una discapacidad. ¿Me puedes decir más?
              </button>
            </h2>
            <div
              id="collapseThirtheen"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  Esta expresión corresponde a habilidades de Conciencia.
                </strong>{" "}
                Consulta más sobre estas habilidades <a href="#">aquí</a>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFourteen"
                aria-expanded="false"
                aria-controls="collapseFourteen"
              >
                14. Sé que no te entiendo, pero no sé qué hacer para ayudarte, voy a
                pensar más sobre eso
              </button>
            </h2>
            <div
              id="collapseFourteen"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  Esta expresión corresponde a habilidades de Conciencia.
                </strong>{" "}
                Consulta más sobre estas habilidades <a href="#">aquí</a>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFiveteen"
                aria-expanded="false"
                aria-controls="collapseFiveteen"
              >
                15. Ahora entiendo que nunca voy a poder entender a cabalidad la
                experiencia de una persona con Autismo
              </button>
            </h2>
            <div
              id="collapseFiveteen"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Esta expresión corresponde a habilidades de .</strong>{" "}
                Consulta más sobre estas habilidades <a href="#">aquí</a>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSixteen"
                aria-expanded="false"
                aria-controls="collapseSixteen"
              >
                16. Decidí dedicar tiempo a hacer cosas para acompñar a las personas
                con discapaciad
              </button>
            </h2>
            <div
              id="collapseSixteen"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  Esta expresión corresponde a habilidades de Alianza .
                </strong>{" "}
                Consulta más sobre estas habilidades <a href="#ancla-alianza">aquí</a>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeventeen"
                aria-expanded="false"
                aria-controls="collapseSeventeen"
              >
                17. Hago labor para que más personas sin discapacidad, entiendan sus
                privilegios y sus propias discriminaciones hacia las personas
                con discapacidad.
              </button>
            </h2>
            <div
              id="collapseSeventeen"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  Esta expresión corresponde a habilidades de Alianza .
                </strong>{" "}
                Consulta más sobre estas habilidades <a href="#ancla-alianza">aquí</a>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEighteen"
                aria-expanded="false"
                aria-controls="collapseEighteen"
              >
                18. Escucho y entiendo lo que las personas con discpacidad me dicen,
                no impongo mis ideas de lo que es mejor para ellas y a hago
                acciones a partir de sus propias sugerencias e intereses
              </button>
            </h2>
            <div
              id="collapseEighteen"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  Esta expresión corresponde a habilidades de Alianza .
                </strong>{" "}
                Consulta más sobre estas habilidades <a href="#ancla-alianza">aquí</a>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseNineteen"
                aria-expanded="false"
                aria-controls="collapseNineteen"
              >
                19. Uso mis propios privielgios para que las personas con
                discapaciad sean escuchadas, no hablo por ellas.
              </button>
            </h2>
            <div
              id="collapseNineteen"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  Esta expresión corresponde a habilidades de Alianza .
                </strong>{" "}
                Consulta más sobre estas habilidades <a href="#ancla-alianza">aquí</a>
              </div>
            </div>
          </div>
        </div>
      </div>

     <Indiferencia/>

     <Distanciamiento/>

     <Inclusion/>

     <Conciencia/>

     <Alianza/>

     <section className='enlaces'>
            <a href='/modelo/habilidades'>ATRÁS -- 3. Habilidades para la Antiopresión</a>
            <a href='/modelo/discytec'>SIGUIENTE -- 4 Discapacidad y Tecnología.</a>
     </section>

    </>
  );
}

export default Habilidadesprivilegio;
