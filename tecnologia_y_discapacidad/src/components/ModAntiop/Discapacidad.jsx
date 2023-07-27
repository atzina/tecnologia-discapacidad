import './Discapacidad.css';
import Escuela from '../../assets/escuela.jpg'

function Discapacidad() {
  return (
    <>
      <div className="title-disc">
        <h2>2. La Discapacidad como una categoría de opresión</h2>
      </div>
      
      <div className='contenedor-discapacidad'>
        <p>
            La sociedad está organizada para excluir y limitar las posibilidades de las personas con discapacidad, incluso las personas con discapacidades no visibles o consideradas &quot;leves&quot;.  La discapacidad, a diferencia de la mayoría de la categorías de Rango, puede cambiar durante toda la vida. La pérdida de capacidad es intrínsecamente parte de le experiencia humana; una enfermedad, lesión o condición médica temporal puede convertir a cualquier persona en parte de un grupo marginado, es decir, infravalorado. La mayoría de las personas formaremos parte del grupo marginado por discapacidad en algún momento de nuestras vidas.
        </p>

        <p>
            Las personas sin discapaciad son parte del grupo Privilegiado y las personas con alguna discapacidad son miembros del grupo marginado.
        </p>

        <p>
            La discapacidad tiene que ver con el efecto combiandao de la devaluación social, además de las dificultades asociadas a la discapacidad en sí. Por ejemplo, no solo la falta de movilidad es lo que limita a las personas, sino un mundo construido exclusivamente para las personas que sin movilidad limitada. LO OPRESIVO ES LA EXCLUSIÓN.
        </p>

        <div className='img-escuela'>
          <img src={Escuela}></img>
        </div>

        <div className="capacitismo card">
            <div className="card-body">
              <h6 className="card-text">
                La opresión asociada con esta categoría es el CAPACITISMO.
              </h6>
            </div>
          </div>

        <p>
           
        </p>
        <p>
            La Capacidad, además de todas las categorías en que clasifica el rango, es una construcción y es defectuosa. Bajo el capacitismo todos limitamos nuestra definición de lo que significa ser humano a las personas capaces. Esto conduce a resistirse a tomar en consideración las necesidades del grupo marginado por el capacitismo.
        </p>
        <p>
            Un síntoma de esta resistencia es reconocer sólo la pérdida visible y pronunciada de capacidad. Una posición antiopresiva sería reconocer que toda pérdida importa y el capacitismo afecta a todos los que experimentan una pérdida posible. El objetivo no es sugerir que la experiencia de pérdida de habilidad de cada persona es equivalente, si que la supremacía de habilidad afecta a todos los marginados por discapacidad.
        </p>
      </div>
      <section className='enlaces'>
            <a href='/modelo'>ATRÁS -- 1. La discapacidad como categoría de opresión</a>
            <a href='/modelo/habilidades'>SIGUIENTE -- 3. Habilidades</a>
        </section>
     
    </>
  );
}

export default Discapacidad;
