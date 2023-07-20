import "./Home.css";
import Persons from "../../assets/encabezado.jpg";
import Icon from "../../assets/comunidad.png";

function Home() {
  return (
    <>
      <main>
        <img className="image-persons" src={Persons}></img>
      </main>
      <section className="info-gral">
        <div className="container-fluid texto-gral ">
          <p>
            Este espacio tiene como objetivo brindar información sobre las
            posibilidades que la tecnología ofrece a las personas con
            discapacidad. A partir de una investigación destacamos los puntos
            claves donde la tecnología es capaz de fomentar la inclusión para
            las personas con discapacidad, buscando encontrar aspectos que
            lleven el tema más allá de la inclusión, es decir, apuntar a
            contestar la pregunta ¿Cómo la tecnología puede ser una herramienta
            para la transformación de la vida de las personas con discapcidad y
            con ella la vida de las comunidades y sociedades? . Con este
            esfuerzo se busca resaltar los desafíos y acompañar la discusión
            sobre el tema.
          </p>
        </div>
      </section>
      <section className="section-ejes">
        <div className="ejes container">
          <h5 className="title-ejes">EJES</h5>
          <div className="row">
            <div className="principio-gral col-12 col-md-4 col-lg-4">
              <h5>PRINCIPIO GENERAL</h5>
              <p>
                Es urgente que la tecnología desarrolle productos para todas las
                personas. Reconocemos que la tecnología subyacen valiosas
                oportunidades no exploradas que pueden contrubuir al
                empoderamiento de las personas con discapacidad, es obligación
                de todas y todos de desarrollarlas.
              </p>
            </div>
            <div className="modelo-antiopresion col-12 col-md-4 col-lg-4">
              <h5>MODELO DE ANTIOPRESIÓN PARA LA DISCAPACIDAD</h5>
              <p>
                Es una herramienta muy valiosa para tomar conciencia y accionar
                en favor de la inclusión, se trata del modelo de atiopresión de
                Leticia Nieto, del cual aquí se mostrarán sus bases
                fundamentales para la categoría de discapacidad.
              </p>
            </div>
            <div className="recomendaciones col-12 col-md-4 col-lg-4">
              <h5>RECOMENDACIONES</h5>
              <p>
                Otro de los objetivos de este proyecto es elaborar
                recomendaciones generales que ayuden a la discusicón sobre los
                pasos que la tecnología debe tomar para avanzar en la inclusión
                de las personas con discapacidad.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="section-contacto d-flex flex-column align-items-center justify-content-center">
        <div className="d-flex flex-column align-items-center justify-content-center div-icono-footer">
          <img className="image-final" src={Icon}></img>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center div-text-footer">
          <p>
            Este proyecto está en construcción, todas las contribuciones,
            comentarios e ideas son bien recibidas
          </p>
          <p>Contáctame</p>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center mail">
          <a href="mailto:atzina@gmail.com" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            class="bi bi-envelope-fill"
            viewBox="0 0 16 16"
          >
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
          </svg>
          </a>
        </div>
        <div>
        <p>Creado por Atzin G.A. (2023) &#169;</p>
        </div>
      </footer>
    </>
  );
}

export default Home;
