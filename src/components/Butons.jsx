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

import euler from '../media/euler.jpg';
import rn from '../media/rn.jpg';

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
        <p className="card-text">Hola! tengo un grado en ingenier??a Aeron??utica, adem??s soy autodidacta en desarrollo de software
        y an??lisis de datos con Python. Tengo experiencia certificada en Documentaci??n t??cnica Aeron??utica de helic??pteros MI-171V, hice los
        electivos de carrera de Gesti??n de mantenimiento, an??lisis de Estructuras por el m??todo de elementos finitos,
        Din??mica de fluidos computacionales y formulaci??n - evaluaci??n de proyectos. Puede escribirme directamente a WhatsApp, m??s abajo encontrar?? 3 simulaciones y c??lculos agradables con Ansys 2022.</p>
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
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true"><h3>Ansys Structural</h3></button>
        </li>
        <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false"><h3>Ansys Thermal</h3></button>
        </li>
        <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false"><h3>Ansys CFD</h3></button>
        </li>   
        <li className="nav-item" role="presentation">
            <button className="nav-link" id="web-tab" data-bs-toggle="tab" data-bs-target="#web-tab-pane" type="button" role="tab" aria-controls="web-tab-pane" aria-selected="false"><h3>Play with Euler</h3></button>
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
            <h5 className="card-title">C??lculo de estructuras por el metodo de elementos finitos</h5>
            <p className="card-text">Un an??lisis estructural peque??o y simple pero que muestra un proceso de estudio estructurado en soluci??n anal??tica y computacional, faltando el tercer elemento, experimental,
            conjunto con el que se esperar??a validar con certeza los resultados esperados</p>
            <p className="card-text"><small className="text-muted">no se trata solo de imagenes interesantes </small></p>
            <h3 className="card-title">Detalles de la Simulaci??n</h3>
            <p className="card-text">En la siguiente imagen se muestra el ??rbol de acciones de Ansys como un resumen de lo que se realiz??
            Un an??lisis estructural peque??o y simple pero que muestra un proceso de estudio</p>
            <img src={vigaDetalle1} className="card-img-top" style={{width:"300px"}} alt="..."/>
            <p className="card-text">aqu?? vemos detalles de la malla que por ser simple obviamente tiene todos los elementos en semejanza de calidad 1</p>
            <img src={vigaMesh} className="card-img-top" style={{width:"100%"}} alt="..."/>
        </div>
        <div className="card-body">
        <br/>
            <h2 className="card-title">Soluci??n Anal??tica</h2>
            <p className="card-text">Considerando el caso de la simulaci??n, una viga de 1 metro empotrada en el extremo A, con secci??n cuadrada y sometida a una carga P1.</p>
            <img src={problema1} className="card-img-top" style={{width:"50%"}} alt="..."/>
            <p className="card-text">Analizando las cargas por el m??todo de seccionamiento, hacemos un corte imaginario en la viga y graficamos la fuerza cortante y el momento flector:</p>
            <img src={cuerpoLibre1} className="card-img-top" style={{width:"20%"}} alt="..."/>
            <p className="card-text">Luego, realizamos el an??lisis con las condiciones de equilibrio para obtener las ecuaciones de y momento flector:</p>
            <img src={i1} className="card-img-top" style={{width:"25%"}} alt="..."/>
            <p className="card-text">Usamos la ecuaci??n de Castigliano:</p>
            <img src={i2} className="card-img-top" style={{width:"30%"}} alt="..."/>
            <p className="card-text">Integramos para obtener:</p>
            <img src={i3} className="card-img-top" style={{width:"25%"}} alt="..."/>
            <p className="card-text">Realizamos el an??lisis en sus condiciones de frontera:</p>
            <img src={i4} className="card-img-top" style={{width:"30%"}} alt="..."/>
            <p className="card-text">Reemplazando:</p>
            <img src={i5} className="card-img-top" style={{width:"35%"}} alt="..."/>
            <p className="card-text">Reemplazamos C1 en la ecuaci??n y as?? obtenemos la ecuaci??n de la pendiente:</p>
            <img src={i6} className="card-img-top" style={{width:"30%"}} alt="..."/>
            <p className="card-text">Integramos:</p>
            <img src={i7} className="card-img-top" style={{width:"40%"}} alt="..."/>
            <p className="card-text">Luego, cuando x = L ???????= ????=0  por lo que al reemplazar en la ecuaci??n anterior :</p>
            <img src={i8} className="card-img-top" style={{width:"30%"}} alt="..."/>
            <p className="card-text">Y resolviendo tenemos:</p>
            <img src={i10} className="card-img-top" style={{width:"15%"}} alt="..."/>
            <p className="card-text">Y al reemplazar en la ecuaci??n 1, obtenemos la ecuaci??n de la curva el??stica:</p>
            <img src={i11} className="card-img-top" style={{width:"40%"}} alt="..."/>
            <p className="card-text">Luego, para hallar la deflexi??n reemplazamos los valores en la ecuaci??n de la pendiente:</p>
            <img src={i12} className="card-img-top" style={{width:"45%"}} alt="..."/>
        </div>
        <div className="card-body">
            <h1 className="card-text">Resultados</h1>
            <p className="card-text">Llegado a este punto, se valida la ecuaci??n con un an??lisis dimensional para demostrar que es correcta
                y luego se prueban con los valores que se usaron en la simulaci??n, como es el m??dulo de Young
                del acero estructural, las dimensiones de la viga de 1 metro con ??rea rectangular de 70cm x 30cm y la fuerza
                de 100N, obteniendo resultados satisfactoriamente semejantes:</p>

            <img src={r1} className="card-img-top" style={{width:"40%"}} alt="..."/>
            <br />
            <img src={r1Ansys} className="card-img-top" style={{width:"15%"}} alt="..."/>

        </div>
        <div className="card-body"> 
            <h5>comprobaci??n adicional de la ecuaci??n en MATLAB</h5>
            <p className="card-text">Usando MATLAB vemos que llegamos a la misma ecuaci??n de curva el??stica, much??simo m??s r??pido:</p>
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
            <h5 className="card-title">C??lculo de temperatura con elementos finitos y Fourier</h5>
            <p className="card-text">Un an??lisis t??rmico con una elegante soluci??n no tan simple, contiene una validaci??n adicional en MATLAB</p>
            <p className="card-text"><small className="text-muted">Como amo a Fourier</small></p>
            <h3 className="card-title">Detalles de la Simulaci??n</h3>
            <p className="card-text">En la siguiente imagen se muestra el ??rbol de acciones de Ansys como un resumen de lo que se realiz??</p>
            <img src={tuberiaDetalle} className="card-img-top" style={{width:"300px"}} alt="..."/>
            <p className="card-text">vemos detalles de la malla, vemos que la calidad cay?? un poco a 0.95 sin embargo se mantiene
            dentro de los est??ndares</p>
            <img src={tuberiaMesh} className="card-img-top" style={{width:"100%"}} alt="..."/>
        </div>
        <div className="card-body">
        <br/>
            <h2 className="card-title">Soluci??n Anal??tica</h2>
            <p className="card-text">
            Tal como se simul??, un cilindro con radio interior de 10cm y radio exterior de 14cm cuyas temperaturas son de 423??K en el interior y 373??K en el exterior.</p>
            <img src={problema2} className="card-img-top" style={{width:"50%"}} alt="..."/>
            <p className="card-text">Empezamos con la ecuaci??n de Fourier para coordenadas cil??ndricas:</p>
            <img src={c2} className="card-img-top" style={{width:"35%"}} alt="..."/>
            <p className="card-text">Como vemos en el problema planteado no presenta energ??a generada y el flujo de calor es estacionario, Por lo que simplificando la f??rmula nos quedar??a de la siguiente forma:</p>
            <img src={c3} className="card-img-top" style={{width:"20%"}} alt="..."/>
            <p className="card-text">Integrando nos quedar??a la siguiente ecuaci??n:</p>
            <img src={c4} className="card-img-top" style={{width:"12%"}} alt="..."/>
            <p className="card-text">En la segunda integral tendr??amos la ecuaci??n diferencial que rige el comportamiento del flujo de calor en el cilindro:</p>
            <img src={c5} className="card-img-top" style={{width:"30%"}} alt="..."/>
            <p className="card-text">Procedemos a realizar el an??lisis en sus condiciones de contorno para hallar las constantes y as?? completar la ecuaci??n diferencial:</p>
            <img src={c6} className="card-img-top" style={{width:"60%"}} alt="..."/>
            <p className="card-text">Restando las ecuaciones 1 y 2 tenemos:</p>
            <img src={c7} className="card-img-top" style={{width:"37%"}} alt="..."/>
            <p className="card-text">Reemplazando en (1):</p>
            <img src={c8} className="card-img-top" style={{width:"37%"}} alt="..."/>
            <p className="card-text">Reemplazamos las constantes en la ecuaci??n diferencial para completarla:</p>
            <img src={c9} className="card-img-top" style={{width:"50%"}} alt="..."/>
            <p className="card-text">Por lo que evaluando cualquier valor de x en la ecuaci??n diferencial tendremos un valor de temperatura correspondiente para este punto y las condiciones dadas.</p>
            <img src={c10} className="card-img-top" style={{width:"37%"}} alt="..."/>
            </div> 
            <div className="card-body">
            <h1 className="card-text">Resultados</h1>
            <p className="card-text">??Resultados semejantes! tanto en la soluci??n analitica como en la simulaci??n:</p>
            <img src={r2Ansys} className="card-img-top" style={{width:"40%"}} alt="..."/>
            <img src={r2} className="card-img-top" style={{width:"40%"}} alt="..."/>

            </div>
            <div className="card-body">
            <h3>MATLAB</h3>
            <p className="card-text">Utilizando MATLAB basta escribir el siguiente c??digo, detallando solo la primera ecuaci??n, las condiciones de contorno y los valores de en los que se requiere la temperatura:</p>
            <img src={cmatlab} className="card-img-top" style={{width:"80%"}} alt="..."/>
            <p className="card-text">El programa resuelve la ecuaci??n, muestra la ecuaci??n diferencial, eval??a los valores de r y muestra las temperaturas correspondientes.</p>
            <img src={cmatlab2} className="card-img-top" style={{width:"80%"}} alt="..."/>
            <h5>Los resultados de MATLAB tambi??n se aproximan a la soluci??n anal??tica y computacional. Revise la tercera simulaci??n, el dise??o de un perfil Alar con CFD</h5>
            </div>
        </div>
        </div>
        <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
        <div className="card mb-3">
         <img src={airfoil} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">CFD en el cl??sico NACA 2412 - comparaci??n con DesignFoil</h5>
            <p className="card-text">Si bien es el t??pico NACA 2412, puedo dise??ar cualquier aler??n para aeronaves, autos, o ideas particulares
            en los que se requiera crear carga o sustentaci??n aerodin??mica con el requerimiento de un contexto operacional en cuestiones
            de atmosfera y fuerza solicitada, un peque??o sue??o que tengo es el de hacer un aler??n con perfil variable que reciba las ordenes de microcontrolador, 
            script o IA, pero eso ya es otra historia.</p>
            <p className="card-text"><small className="text-muted">Ingenier??a Aeron??utica</small></p>
            <h3 className="card-title">Detalles de la Simulaci??n</h3>
            <p className="card-text">En la siguiente imagen se muestra el ??rbol de acciones de Ansys como un resumen de lo que se realiz??</p>
            <img src={processAirfoil} className="card-img-top" style={{width:"50%"}} alt="..."/>
            <p className="card-text">aqu?? vemos detalles de la malla obtenida con su inflation y sizings, estas mallas son un poco m??s complicadas de conseguir
            pero todo puede encontrarse en la documentaci??n</p>
            <img src={airfoilMesh} className="card-img-top" style={{width:"100%"}} alt="..."/>
            <p className="card-text">los puntos del NACA son creados a mano en un Excel y corroborados en http://airfoiltools.com/airfoil/details?airfoil=naca2412-il un generador de perfiles en l??nea, para una longitud caracter??stica de 1 metro y velocidad
            de 30m/s con condiciones de atmosfera al nivel del mar para el caso de prueba/ejemplo tenemos variedad de resultados como son las iteraciones - convergencia</p>
            <img src={r3} className="card-img-top" style={{width:"100%"}} alt="..."/>
            <p className="card-text">Curva del coeficiente de Arrastre - CD</p>
            <img src={r4} className="card-img-top" style={{width:"100%"}} alt="..."/>
            <p className="card-text">Curva del coeficiente de Sustentaci??n - CL</p>
            <img src={r5} className="card-img-top" style={{width:"100%"}} alt="..."/>
            <p className="card-text">Presiones</p>
            <img src={r6} className="card-img-top" style={{width:"100%"}} alt="..."/>
            <p className="card-text">Velocidad</p>
            <img src={r7} className="card-img-top" style={{width:"100%"}} alt="..."/>
            <p className="card-text">Resultados detallados por consola, tanto como los valores buscados y la iteraci??n en la que se logr?? la convergencia</p>
            <img src={r8} className="card-img-top" style={{width:"100%"}} alt="..."/> 
        </div>
        <div className="card-body">
            <h3>DesignFoil</h3>
            <p className="card-text">Estos valores son un poco m??s complejos de validar, pero a??adiendo algunas herramientas como DesignFoil se consigue, en esta herramienta tenemos m??s detalles directos sobre turbulencia, punto de transici??n
            entre otros, variando el perfil, las condiciones atmosf??ricas en el t??nel de viento virtual, longitud caracter??stica y velocidad. Vemos que los resultados de CD y CL son parecidos
            pero no exactos, por lo que esto nos sirve para continuar con la validaci??n del modelo</p>
            <img src={r9} className="card-img-top" style={{width:"70%"}} alt="..."/>
            </div>
        </div>
        <div className="card-body">
            <h3>C??lculos</h3>
            <p className="card-text">En Aeron??utica cuando se trata de perfiles alares, los valores buscados, generalmente son el CD y CL,
            estos valores son dif??cilmente obtenidos anal??ticamente, por lo que se recurre a simulaciones o t??neles de viento para obtenerlos,
            a partir de ah?? comienza un proceso de c??lculo estructural, aerodin??mico y matem??tico, para el dise??o completo
            de las superficies m??viles de una aeronave, por lo que hallar bien el CD y CL, es un gran paso, para realizar los c??lculos de fuerzas de sustentaci??n
            y arrastre con f??rmulas sencillas:</p>
            <img src={r10} className="card-img-top" style={{width:"20%"}} alt="..."/>
            <p className="card-text">si bien con un buen modelo, c??lculos acertados con valores semejantes de FL y FD 
            son suficientes para pasar a la parte estructural del aler??n y cumplir con requerimientos, s?? que podemos aspirar a m??s detalles con matem??tica avanzada
            como las ecuaciones de Von K??rm??n para hallar el punto de desprendimiento de la capa limite anal??ticamente,
            contrastando con Ansys y DesignFoil, publicar?? esto m??s tade.
            Para conocer los detalles de mi trabajo, puede ponerse en contacto conmigo directamente a mi WhatsApp en el +51977631700</p> 
        </div>
        <br />
        <br />
        <div className="card-body">
        <h5>Un peque??o video con m??s detalles</h5>
        <Video/>
        </div>
        </div>
        <div className="tab-pane fade" id="web-tab-pane" role="tabpanel" aria-labelledby="web-tab" tabIndex="0">
        <div className="card mb-3">
         <img src={euler} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Relajate un poco con los ??ngulos de Euler</h5>
            <p className="card-text">Puedes perdir que agregue el avi??n que tu quieras! :3</p>
            <a href="https://brunodv.github.io/AngulosEuler/"
        class="btn btn-success">Clic aqu?? para ingresar</a>
        </div>
        </div>
        </div>
        <div className="tab-pane fade" id="cv-tab-pane" role="tabpanel" aria-labelledby="cv-tab" tabIndex="0">        
        <div className="card mb-3">
        <div className="card-body">    
        <a href="https://drive.google.com/file/d/1Aj92wAKGPzWjeDuIT5FT9SXOgSa7hIjE/view?usp=share_link"
        class="btn btn-success">Clic aqu?? para ver mis documentos</a>
        </div>
        </div>
        </div>
        
        </div>
        </>
    )
}
export default Butons
