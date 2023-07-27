import "./Modelo.css";

function Modelo() {
  return (
    <>
      <div className="title-model">
        <h2>Una mirada de antiopresión</h2>
      </div>
      <div className="principal-modelo conteiner">
        <aside>
          <a href="/modelo/rango">{"1. La máquina del Rango"}</a>
          <a href="/modelo/discapacidad">
            {"2. La Discapacidad como categoría de opresión"}
          </a>
          <a href="/modelo/habilidades">{"3. Habilidades"}</a>
          <a href="/modelo/discytec">
            {"4. Discapacidad y tecnología desde la antiopresión"}
          </a>
        </aside>

        <div className="gral-dos conteiner-fluid">
          <section className="pregunta-uno col-12 col-md-12 col-lg-12">
            <h3>¿Porqué incorporar un visión antiopresiva? </h3>
            <p>
              En términos generales este espacio, entendemos la opresión como la
              tendencia a sobrevalorar a ciertos grupos y la desvaloración de
              otros, produciendo ventajas para unos y desventajas para los
              otros. La visión que busca esta propuesta tiene que ver con una
              mirada antiopresiva que pueda ir más allá de la inclusión.
            </p>
          </section>
          <section className="pregunta-dos col-12 col-md-12 col-lg-12 ">
            <h3>¿Por que ir más allá de la inclusión?</h3>
            <p>
              La inclusión supone muchas veces, que los miembros de los grupos
              marginados por la opresión se incorporen a las instituciones y
              prácticas dominantes requiriendo que se asimilen a las normas
              existentes. Es decir, se incluye a grupos marginados a nuestros
              ambientes, exigiéndoles inconscientemente que ellos se las
              arreglen y se vuelvan como nosotros, sin cuestionar las normas y
              las estructuras que perpetuan la desigualdad.
            </p>
          </section>

          <div className="contenedor-modelo">
            <h3>El Modelo</h3>
            <p>
              El modelo es una guía para la práctica real que comprende el
              desarrollo de habilidades antiopresivas que pretenden conducir a
              alcanzar la igualdad. Reconocer que los grupos son infravalorados
              mientras otros sobrevalorados y entender cual es nuestra membresia
              en estos contextos para enfrentar la opresión y vivir
              pleanemtente. El modelo es profundo y requiere mucho trabajo y
              práctica, este a penas es un pequeño vistazo a la membresia por
              discapacidad, para conocer la perspectiva general, si quieres
              conocer más , haz contacto.
            </p>
          </div>
          <div className="cuadroInfo card">
            <div className="card-body">
              <h5 className="card-title">Referencia de esta información</h5>
              <p className="card-text">
                El contenido aquí vertido tiene como base en el libro: "Beyond
                incluson, Beyond Empowerment. A developmental Satrategy to
                Liberate Everyone", construido en muchos años de trabajo
                práctico y académico de Leticia Nieto. Para mas información:
              </p>
              <a
                href="https://beyondinclusionbeyondempowerment.com/about-the-book/"
                className="card-link"
              >
                web del libro
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="enlace-uno">
        <a href="/modelo/rango">SIGUIENTE - 1. La Máquina del rango</a>
      </div>
    </>
  );
}

export default Modelo;
