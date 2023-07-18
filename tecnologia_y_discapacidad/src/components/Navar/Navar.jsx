import "./Navar.css";

function Navar() {
  return (
    <header className="menu">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ">
            <li>
              <a  href="/">{"Inicio"}</a>
            </li>
            <li>
              <a href="/diseno">{"Diseño inclusivo"}</a>
            </li>
            <li >
              <a  href="/trabajo">{"Trabajo"}</a>
            </li >
            <li >
              <a href="/directorio">
                {"Directorio de proyectos y tencologías"}
              </a>
            </li>
            <li >
              <a  href="/modelo">{"Modelo antiopresión"}</a>
            </li>
            <li >
              <a href="/recomendaciones">{"Recomendaciones"}</a>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navar;
