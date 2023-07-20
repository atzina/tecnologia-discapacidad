import "./Home.css";
import Persons from "../../assets/encabezado.jpg";

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
    </>
  );
}

export default Home;
