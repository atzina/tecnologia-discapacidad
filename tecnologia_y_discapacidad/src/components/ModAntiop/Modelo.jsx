import "./Modelo.css";

function Modelo() {
  return (
    <>
      <div className="title-model">
        <h1>Una mirada de atiopresión</h1>
      </div>
      <div className="principal-modelo">
        <aside>
          <a href="/modelo/rango">{"1. La máquina del Rango"}</a>
          <a href="/modelo/discapacidad">
            {"2. La Disapacidad como categoría de opresión"}
          </a>
          <a href="/modelo/habilidades">{"3. Habilidades"}</a>
          <a href="/modelo/discytec">
            {"4. Discapacidad y tecnología desde la antiopresión"}
          </a>
        </aside>

        <div className="contenedor-preguntas">
          <section className="pregunta-uno">
            <h3>¿Porqué incorporar un visión antiopresiva? </h3>
            <p>
              En términos generales entendemos en este espacio la opresión como
              la tendencia a sobrevalorar a ciertos grupos y la desvaloración de
              otros, produciendo ventajas para unos y desventajas para los
              otros. La visión que busca esta propuesta tiene que ver con una
              mirada antiopresiva que pueda ir más allá de la inclusión.
            </p>
          </section>
          <section className="pregunta-dos">
            <h3>¿Por que ir más allá de la inclusión?</h3>
            <p>
              La inclusión supone, muchas veces, que los miembros de los grupos
              marginados por la opresión se incorporen a las instituciones y
              practicas dominantes requiriendo que se asimilen a las normas
              existentes. Es decir, se incluye a grupos marginados a nuestros
              ambientes, exigiéndoles inconscientemente que ellos se las
              arreglen y se vuelvan como nosotros, sin cuestionar las normas y
              el funcionamiento de los espacios
            </p>
          </section>
        </div>
      </div>
      <div className="contendor-modelo">
      <section className="section-modelo">
        <h3>El Modelo</h3>
        <p>
          El modelo es una guía para la práctica real que comprende el
          desarrollo de habilidades antiopresivas que pretenden conducir a
          alcanzar la igualdad. Reconocer que los grupos son infravalorados
          mientras otros sobrevalorados y entender cual es nuestra membresia en
          estos contextos para enfrentar la opresión y vivir pleanemtente. El
          modelo es profundo y requiere mucho trabajo y práctica, este a penas
          es un pequeño vistazo a la membresia por discapacidad, para conocer la
          perspectiva general, si quieres conocer más , haz contacto.
        </p>
      </section>
      </div>
    </>
  );
}

export default Modelo;
