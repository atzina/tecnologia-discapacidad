import "./Modelo.css";

function Modelo() {
  return (
    <>
      <div className="title-model">
        <h1>Una mirada de atiopresión</h1>
      </div>
      <div className="principal-modelo conteiner">
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

        <div className="gral-dos conteiner">
          <div className="contenedor-preguntas">
            <section className="pregunta-uno ">
              <h3>¿Porqué incorporar un visión antiopresiva? </h3>
              <p>
                En términos generales este espacio, entendemos la opresión como
                la tendencia a sobrevalorar a ciertos grupos y la desvaloración
                de otros, produciendo ventajas para unos y desventajas para los
                otros. La visión que busca esta propuesta tiene que ver con una
                mirada antiopresiva que pueda ir más allá de la inclusión.
              </p>
            </section>
            <section className="pregunta-dos ">
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
          </div>
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
          <div className="cuadroInfo card" >
          <div className="card-body">
            <h5 className="card-title">Referencia de información</h5>
            <p className="card-text">La información aquí vertida está basada en el libro: "Beyond incluson, Beyond Empowerment. A developmental Satrategy to Liberate Everyone" basado en años de trabajo práctico y académico de Leticia Nieto. Para mas inforamción contáctame:</p>
            <a href="#" className="card-link">Card link</a>
            
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modelo;
