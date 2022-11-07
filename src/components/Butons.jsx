import React from "react";
import viga from "../media/viga1.jpg";
import vigaDetalle1 from "../media/processViga.jpg";
import vigaMesh from "../media/vigaMesh1.jpg";
import problema1 from "../media/problema1.jpg";
import cuerpoLibre1 from "../media/cuerpoLibre1.jpg";
import tuberiaDetalle from "../media/processTuberia.jpg";
import tuberiaMesh from "../media/tuberiaMesh.jpg";
import i1 from "../media/i1.jpg";
import i2 from "../media/i2.jpg";
import i3 from "../media/i3.jpg";
import i4 from "../media/i4.jpg";
import i5 from "../media/i5.jpg";
import i6 from "../media/i6.jpg";
import i7 from "../media/i7.jpg";
import i8 from "../media/i8.jpg";
import i10 from "../media/i10.jpg";
import i11 from "../media/i11.jpg";
import i12 from "../media/i12.jpg";
import imatlab from "../media/imatlab.jpg";
import r1 from "../media/r1.jpg";
import r1Ansys from "../media/r1ansys.jpg";

import tuberia from "../media/tuberia1.jpg";
import problema2 from "../media/c1.jpg";
import c2 from "../media/c2.jpg";
import c3 from "../media/c3.jpg";
import c4 from "../media/c4.jpg";
import c5 from "../media/c5.jpg";
import c6 from "../media/c6.jpg";
import c7 from "../media/c7.jpg";
import c8 from "../media/c8.jpg";
import c9 from "../media/c9.jpg";
import c10 from "../media/c10.jpg";
import cmatlab from "../media/cmatlab.jpg";
import cmatlab2 from "../media/cmatlab2.jpg";
import r2 from "../media/r2.jpg";
import r2Ansys from "../media/r2ansys.jpg";
import airfoil from "../media/2412.png";
import processAirfoil from "../media/processAirfoil.jpg";
import airfoilMesh from "../media/airfoilMesh.jpg";
import r3 from "../media/r3.jpg";
import r4 from "../media/r4.jpg";
import r5 from "../media/r5.jpg";
import r6 from "../media/r6.jpg";
import r7 from "../media/r7.jpg";
import r8 from "../media/r8.jpg";
import r9 from "../media/r9.jpg";
import r10 from "../media/r10.jpg";
import Video from '../components/video';

import IngBruno from "../media/IngBruno.jpg";


const Butons = ()=>{
    return(
        <>
<div className="card mb-3" style={{maxWidth:"1920px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={IngBruno} style={{width:'14rem'}} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Ing. Bruno Francisco Dulanto Valentin</h5>
        <p className="card-text">Hola! tengo un grado en ingeniería Aeronáutica además soy autodidacta en desarrollo de software
        y Analisis de datos con Python. Tengo experiencia certificada en Documentación técnica Aeronáutica de helicopteros MI-171V, hice los
        electivos de carrera de Gestión de mantenimiento, Analisis de Estructuras por el metodo de elementos finitos,
        Dinámica de fluidos computacionales y formulación - evaluación de proyectos. Puede escribirme directamente a WhatsApp, mas abajo encontrará 3 simulaciones y cálculos agradables con Ansys 2022.</p>
        <p className="card-text"><small className="text-muted">xcdrxcdr@gmail.com</small></p>
        <div className="card-body">
    <a href="https://wa.me/51977631700" className="card-link">WhatsApp</a>
    <a href="https://www.instagram.com/brunodulantovalentin/" className="card-link">Instagram</a>
  </div>
      </div>
    </div>
  </div>
</div>
<ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true"><h3>1 Structural</h3></button>
        </li>
        <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false"><h3>2 Thermal</h3></button>
        </li>
        <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false"><h3>3 CFD</h3></button>
        </li>   
        <li className="nav-item" role="presentation">
            <button className="nav-link" id="cv-tab" data-bs-toggle="tab" data-bs-target="#cv-tab-pane" type="button" role="tab" aria-controls="cv-tab-pane" aria-selected="false"><h3>CV</h3></button>
        </li>   
        </ul>

        
        <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
        <div className="card mb-3">
         <img src={viga} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Cálculo de estructuras por el metodo de elementos finitos</h5>
            <p className="card-text">Un analisis estructural pequeño y simple pero que muestra un proceso de estudio estructurado en solución analitica y computacional, faltando el tercer elemento, experimental,
            conjunto con el que se esperaría validar con certeza los resultados esperados</p>
            <p className="card-text"><small className="text-muted">no se trata solo de imagenes interesantes </small></p>
            <h3 className="card-title">Detalles de la Simulación</h3>
            <p className="card-text">En la siguiente imagen se muestra el arbol de acciones de ansys como un resumen de lo que se realizó</p>
            <img src={vigaDetalle1} className="card-img-top" style={{width:"300px"}} alt="..."/>
            <p className="card-text">aqui vemos detalles de la malla que por ser simple obviamente tiene todos los elementos en semejanza de calidad 1</p>
            <img src={vigaMesh} className="card-img-top" style={{width:"100%"}} alt="..."/>
        </div>
        <div className="card-body">
        <br/>
            <h2 className="card-title">Solución Analítica</h2>
            <p className="card-text">Considerando el caso de la simulación, una viga de 1 metro empotrada en el extremo A, con sección cuadrada y sometida a una carga P1.</p>
            <img src={problema1} className="card-img-top" style={{width:"50%"}} alt="..."/>
            <p className="card-text">Analizando las cargas por el método de seccionamiento, hacemos un corte imaginario en la viga y graficamos la fuerza cortante y el momento flector:</p>
            <img src={cuerpoLibre1} className="card-img-top" style={{width:"20%"}} alt="..."/>
            <p className="card-text">Luego realizamos el análisis con las condiciones de equilibrio para obtener las ecuaciones de y momento flector:</p>
            <img src={i1} className="card-img-top" style={{width:"25%"}} alt="..."/>
            <p className="card-text">Usamos la ecuación de castigliano:</p>
            <img src={i2} className="card-img-top" style={{width:"30%"}} alt="..."/>
            <p className="card-text">Integramos para obtener:</p>
            <img src={i3} className="card-img-top" style={{width:"25%"}} alt="..."/>
            <p className="card-text">Realizamos el análisis en sus condiciones de frontera:</p>
            <img src={i4} className="card-img-top" style={{width:"30%"}} alt="..."/>
            <p className="card-text">Reemplazando:</p>
            <img src={i5} className="card-img-top" style={{width:"35%"}} alt="..."/>
            <p className="card-text">Reemplazamos C1 en la ecuación y así obtenemos la ecuación de la pendiente:</p>
            <img src={i6} className="card-img-top" style={{width:"30%"}} alt="..."/>
            <p className="card-text">Integramos:</p>
            <img src={i7} className="card-img-top" style={{width:"40%"}} alt="..."/>
            <p className="card-text">Luego cuando x = L ⇨𝑦= 𝛥=0  por lo que al reemplazar en la ecuación anterior :</p>
            <img src={i8} className="card-img-top" style={{width:"30%"}} alt="..."/>
            <p className="card-text">Y resolviendo tenemos:</p>
            <img src={i10} className="card-img-top" style={{width:"15%"}} alt="..."/>
            <p className="card-text">Y al reemplazar en la ecuación 1, obtenemos la ecuación de la curva elástica:</p>
            <img src={i11} className="card-img-top" style={{width:"40%"}} alt="..."/>
            <p className="card-text">Luego para hallar la deflexión reemplazamos los valores en la ecuación de la pendiente:</p>
            <img src={i12} className="card-img-top" style={{width:"45%"}} alt="..."/>
        </div>
        <div className="card-body">
            <h1 className="card-text">Resultados</h1>
            <p className="card-text">Llegado a este punto se valida la ecuación con un analisis dimensional para demostrar que es correcta
                y luego se prueban con los valores que se usaron en la simulación, como es el modulo de Young
                del acero estructural, las dimensiones de la viga de 1 metro con area rectangular de 70cm x 30cm y la fuerza
                de 100N, obteniendo resultados satisfactoriamente semejantes:</p>

            <img src={r1} className="card-img-top" style={{width:"40%"}} alt="..."/>
            <br />
            <img src={r1Ansys} className="card-img-top" style={{width:"15%"}} alt="..."/>

        </div>
        <div className="card-body"> 
            <h5>comprobación adicional de la ecuación en MATLAB</h5>
            <p className="card-text">Usando MATLAB vemos que llegamos a la misma ecuación de curva elástica, muchísimo mas rápido:</p>
            <img src={i11} className="card-img-top" style={{width:"40%"}} alt="..."/>
            <img src={imatlab} className="card-img-top" style={{width:"80%"}} alt="..."/>
            <h5>Como vemos es un proceso muy elegante que mayormente involucra ecuaciones diferenciales para validar el modelo computacional,
                guste revisar las siguientes 2 simulaciones.
            </h5>
        </div> 
        
        </div>
        </div>
        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
        <div className="card mb-3">
         <img src={tuberia} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Cálculo de temperatura con elemntos finitos y Fourier</h5>
            <p className="card-text">Un analisis térmico con una elegante solución no tan simple, imagino que podría ser utilizado
            en tuberías metalicas que transporten gases calientes, contiene una validación adicional en MATLAB</p>
            <p className="card-text"><small className="text-muted">Como amo a Fourier</small></p>
            <h3 className="card-title">Detalles de la Simulación</h3>
            <p className="card-text">En la siguiente imagen se muestra el arbol de acciones de ansys como un resumen de lo que se realizó</p>
            <img src={tuberiaDetalle} className="card-img-top" style={{width:"300px"}} alt="..."/>
            <p className="card-text">vemos detalles de la malla, vemos que la calidad cayó un poco a 0.95 sin embargo se mantiene
            dentro de los estandares</p>
            <img src={tuberiaMesh} className="card-img-top" style={{width:"100%"}} alt="..."/>
        </div>
        <div className="card-body">
        <br/>
            <h2 className="card-title">Solución Analítica</h2>
            <p className="card-text">
            Tal como se simuló, un cilindro con radio interior de 10cm y radio exterior de 14cm cuyas temperaturas son de 423°K en el interior y 373°K en el exterior.</p>
            <img src={problema2} className="card-img-top" style={{width:"50%"}} alt="..."/>
            <p className="card-text">Empezamos con la ecuación de Fourier para coordenadas cilindricas:</p>
            <img src={c2} className="card-img-top" style={{width:"35%"}} alt="..."/>
            <p className="card-text">Como vemos en el problema planteado no presenta energía generada y el flujo de calor es estacionario, Por lo que simplificando la fórmula nos quedaría de la siguiente forma:</p>
            <img src={c3} className="card-img-top" style={{width:"20%"}} alt="..."/>
            <p className="card-text">Integrando nos quedaría la siguiente ecuación:</p>
            <img src={c4} className="card-img-top" style={{width:"12%"}} alt="..."/>
            <p className="card-text">En la segunda integral tendríamos la ecuación diferencial que rige el comportamiento del flujo de calor en el cilindro:</p>
            <img src={c5} className="card-img-top" style={{width:"30%"}} alt="..."/>
            <p className="card-text">Procedemos a realizar el análisis en sus condiciones de contorno para hallar las constantes y así completar la ecuación diferencial:</p>
            <img src={c6} className="card-img-top" style={{width:"60%"}} alt="..."/>
            <p className="card-text">Restando las ecuaciones 1 y 2 tenemos:</p>
            <img src={c7} className="card-img-top" style={{width:"37%"}} alt="..."/>
            <p className="card-text">Reemplazando en (1):</p>
            <img src={c8} className="card-img-top" style={{width:"37%"}} alt="..."/>
            <p className="card-text">Reemplazamos las constantes en la ecuación diferencial para completarla:</p>
            <img src={c9} className="card-img-top" style={{width:"50%"}} alt="..."/>
            <p className="card-text">Por lo que evaluando cualquier valor de x en la ecuación diferencial tendremos un valor de temperatura correspondiente para este punto y las condiciones dadas.</p>
            <img src={c10} className="card-img-top" style={{width:"37%"}} alt="..."/>
            </div> 
            <div className="card-body">
            <h1 className="card-text">Resultados</h1>
            <p className="card-text">Resultados semejantes! tanto en la solución analitica como en la simulación:</p>
            <img src={r2Ansys} className="card-img-top" style={{width:"40%"}} alt="..."/>
            <img src={r2} className="card-img-top" style={{width:"40%"}} alt="..."/>

            </div>
            <div className="card-body">
            <h3>MATLAB</h3>
            <p className="card-text">Utilizando MATLAB basta escribir el siguiente código, detallando solo la primera ecuación, las condiciones de contorno y los valores de en los que se requiere la temperatura:</p>
            <img src={cmatlab} className="card-img-top" style={{width:"80%"}} alt="..."/>
            <p className="card-text">El programa resuelve la ecuación, muestra la ecuación diferencial, evalúa los valores de r y muestra las temperaturas correspondientes.</p>
            <img src={cmatlab2} className="card-img-top" style={{width:"80%"}} alt="..."/>
            <h5>Los resultdos de MATLAB tambien se aproximan a la solución analítica y computacional. Revise la tercera simulación, el diseño de un perfil Alar con CFD</h5>
            </div>
        </div>
        </div>
        <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
        <div className="card mb-3">
         <img src={airfoil} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">CFD en el clásico NACA 2412 - comparación con DesignFoil</h5>
            <p className="card-text">Si bien es el tipico NACA 2412, puedo diseñar cualquier alerón para aeronaves, autos, o ideas particulares
            en los que se requiera crear carga o sustentación aerodinámica con el requirimiento de un contexto operacional en cuestiones
            de atmosfera y fuerza solicitada, un pequeño sueño que tengo es el de hacer un alerón con perfil variable que reciba las ordenes de microcontrolador, 
            script o IA, pero eso ya es otra historia.</p>
            <p className="card-text"><small className="text-muted">Ingeniería Aeronáutica</small></p>
            <h3 className="card-title">Detalles de la Simulación</h3>
            <p className="card-text">En la siguiente imagen se muestra el arbol de acciones de ansys como un resumen de lo que se realizó</p>
            <img src={processAirfoil} className="card-img-top" style={{width:"50%"}} alt="..."/>
            <p className="card-text">aqui vemos detalles de la malla obtenida con su inflation y sizings, estas mallas son un poco mas complicadas de conseguir
            pero todo puede encontrarse en la documentación</p>
            <img src={airfoilMesh} className="card-img-top" style={{width:"100%"}} alt="..."/>
            <p className="card-text">los puntos del naca son creados a mano en un excel y corroborados en http://airfoiltools.com/airfoil/details?airfoil=naca2412-il un generador de perfiles en linea, para una longitud característica de 1 metro y velocidad
            de 30m/s con condiciones de atmosfera al nivel del mar para el caso de prueba/ejemplo tenemos variedad de resultdos como son las iteraciones - convergencia </p>
            <img src={r3} className="card-img-top" style={{width:"100%"}} alt="..."/>
            <p className="card-text">Curva del coeficiente de Arrastre - CD</p>
            <img src={r4} className="card-img-top" style={{width:"100%"}} alt="..."/>
            <p className="card-text">Curva del coeficiente de Sustentación - CL</p>
            <img src={r5} className="card-img-top" style={{width:"100%"}} alt="..."/>
            <p className="card-text">Presiones</p>
            <img src={r6} className="card-img-top" style={{width:"100%"}} alt="..."/>
            <p className="card-text">Velocidad</p>
            <img src={r7} className="card-img-top" style={{width:"100%"}} alt="..."/>
            <p className="card-text">Resultados detallados por consola, tanto como los valores buscados y la iteración en la que se logró la convergencia</p>
            <img src={r8} className="card-img-top" style={{width:"100%"}} alt="..."/> 
        </div>
        <div className="card-body">
            <h3>DesignFoil</h3>
            <p className="card-text">Estos valores son un poco mas complejos de validar pero añadiendo algunas herramientas como DesignFoil se consigue, en esta herramienta tenemos mas detalles directos sobre turbulencia, punto de transisión
            entre otros, variando el perfil, las condiciones atmosfericas en el tunel de viento virtual, longitud característica y velocidad. Vemos que los resultados de CD y CL son parecidos
            pero no exactos, por lo que esto nos sirve para continuar con la validación del modelo</p>
            <img src={r9} className="card-img-top" style={{width:"70%"}} alt="..."/>
            </div>
        </div>
        <div className="card-body">
            <h3>Cálculos</h3>
            <p className="card-text">En Aeronáutica cuando se trata de perfiles alares, los valores buscados, generalmente son el CD y CL,
            estos valores son dificilmente obtenidos analiticamente, por lo que se recurre a simulaciones o tuneles de viento para obtenerlos,
            a partir de ahí comienza un proceso de cálculo estructural, aerodinámico y matemático, para el diseño completo
            de las superficies moviles de una aeronave, por lo que hayar bien el CD y CL, es un gran paso, para realizar los cálculos de fuerzas de sustentación
            y arrastre con formulas sencillas:</p>
            <img src={r10} className="card-img-top" style={{width:"20%"}} alt="..."/>
            <p className="card-text">si bien con un buen modelo, cálculos acertados con valores semejantes de FL y FD 
            son suficientes para pasar a la parte estructural del alerón y cumplir con requerimientos, si que podemos aspirar a más detalles con matemática avanzada
            como las ecuaciones de Von Kármán para hallar el punto de desprendimiento de la capa limite analiticamente,
            contrastando con Ansys y DesignFoil. Llegado a ese punto solo faltaría tocar Navier Stokes, uno de los 7 problemas del milenio, 
            para conocer los detalles de mi trabajo, puede ponerse en contacto conmigo directamente a mi whatsapp en el +51977631700</p> 
        </div>
        <br />
        <br />
        <div className="card-body">
        <h5>Un pequeño video con mas detalles</h5>
        <Video/>
        </div>
        </div>
        <div className="tab-pane fade" id="cv-tab-pane" role="tabpanel" aria-labelledby="cv-tab" tabIndex="0">        
        <div className="card mb-3">
        <div className="card-body">    
    
        <a href="https://drive.google.com/file/d/1z0CqMgOkwT1fXvMomFmOiPSI_EkJ8XR_/view?usp=share_link"
        class="btn btn-success">Click aqui para ver mis documentos</a>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default Butons