import "./Habilidadesprivilegio.css";
import { useState } from "react";
import Instrucciones from "./Instrucciones.jsx";
import TresDespues from "./TresDespues";

function Habilidadesprivilegio() {
  const [mostrarDivs, setMostrarDivs] = useState(true);
  const [mostrarParrafo1, setMostrarParrafo1] = useState(true);
  const [mostrarParrafo2, setMostrarParrafo2] = useState(true);

  const toggleMostrarDivs = () => {
    setMostrarDivs(!mostrarDivs);
  };

  const toogleMostrarParrafo1 = () => {
    setMostrarParrafo1(!mostrarParrafo1);
  };

  const toggleMostrarParrafo2 = () => {
    setMostrarParrafo2(!mostrarParrafo2);
  };

  return (
    <>
      <div className="title-habPriv">
        <h2>Habilidades Atiopresivas para personas sin discapacidad</h2>
      </div>

      <Instrucciones />

      <div className="hab-uno">
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
            <div className="hab-dos">
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
                <div className="hab-tres">
                  <p>
                    No he tenido mucho contacto con personas con discapaciad,
                    pero sobretodo creo que todas son personas muy tiernas.
                  </p>
                </div>
                <button onClick={toggleMostrarParrafo2}>
                  {mostrarParrafo2 ? "Mostrar mas" : "Seguir con las otras"}{" "}
                </button>
                {mostrarParrafo2 && <TresDespues />}
              </>
            )}

            {!mostrarParrafo1 && (
              <div className="informacion-adicional">
                <p>
                  Esta es la información adicional que se muestra cuando se
                  oculta el parrafo 1.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Habilidadesprivilegio;
