import "./Navar.css";
import Icon from "../../assets/comunidad.png";

function Navar() {
  return (
    <header className="menu">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <div className="div-icon">
            <img className="icon-nav" src={Icon}></img>
          </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse div-nav" id="navbarNavDropdown">
          <ul class="navbar-nav ">
            <li>
              <a className="nav-link nav-link-blue"  href="/">{"Inicio"}</a>
            </li>
            <li>
            <a class="nav-link nav-link-yellow" href="/modelo">{"Antiopresión"}</a>
            </li>
            <li >
              <a class="nav-link nav-link-pink" href="/trabajo">{"Trabajo"}</a>
            </li >
            <li >
              <a class="nav-link nav-link-red" href="/directorio">
                {"Directorio de tencologías"}
              </a>
            </li>
            <li >
              <a class="nav-link nav-link-aqua" href="/diseno">{"Diseño inclusivo"}</a>
            </li>
            <li >
              <a class="nav-link nav-link-brown" href="/recomendaciones">{"Recomendaciones"}</a>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navar;
