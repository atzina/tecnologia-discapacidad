import "./Habilidadesprivilegio.css";

import Instrucciones from "./Instrucciones.jsx";
//import TresDespues from "./TresDespues";

function Habilidadesprivilegio() {
  return (
    <>
      <div className="title-habPriv">
        <h2>Habilidades Atiopresivas para personas sin discapacidad</h2>
      </div>

      <Instrucciones />


      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              No sé mucho de las personas con discapacidad, no tengo problema con
              ser incluyente, pero sinceramente sería muy difícil para mí que una
              persona con discapacidad saliera con mi hija o hijo
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>Esta expresión corresponde a habilidades de Indiferencia.</strong> Consulta más sobre estas habilidades <a href="#">aquí</a>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Los respeto mucho pero yo no podría salir con una persona con
              discapacidad
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>Esta expresión corresponde a habilidades de Distanciamiento.</strong> Consulta más sobre estas habilidades <a href="#">aquí</a>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              No he tenido mucho contacto con personas con discapaciad,
              pero sobretodo creo que todas son personas muy tiernas.
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>Esta expresión corresponde a habilidades de Distanciamiento..</strong> Consulta más sobre estas habilidades <a href="#">aquí</a>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
                Ha sido difícil llegar hasta este punto de la información,
                honestamente me aburre un poco.
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>Esta expresión corresponde a habilidades de Indiferencia..</strong> Consulta más sobre estas habilidades <a href="#">aquí</a>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
                Creo que todos somos iguales, no debería haber diferencias
                        entre las condiciones de mi compañero de trabajo y las mías,
                        sus &quot;privilegios&quot; me molestan un poco.
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>Esta expresión corresponde a habilidades de Inclusión.</strong> Consulta más sobre estas habilidades <a href="#">aquí</a>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Habilidadesprivilegio;
