import { BlockMath } from './Math';
import velocityImage from '../assets/img/2412.png';
import workbenchImage from '../assets/img/processAirfoil.jpg';
import meshImage from '../assets/img/airfoilMesh.jpg';
import residualsImage from '../assets/img/r4.jpg';
import dragImage from '../assets/img/r5.jpg';
import liftImage from '../assets/img/r6.jpg';
import r3 from '../assets/img/r3.jpg';
import pressureImage from '../assets/img/r7.jpg';
import velocityDetailImage from '../assets/img/r8.jpg';
import designFoilImage from '../assets/img/r9.jpg';

export default function AnsysCFDView() {
  return (
    <div className="study-document mx-auto max-w-6xl space-y-6 border border-slate-300 bg-white p-5 font-sans text-sm leading-relaxed text-slate-800 shadow-md sm:p-8">
      
      {/* 1. Header Contour Image */}
      <figure className="border border-slate-300 bg-slate-50 p-2 text-center">
        <img src={velocityImage} alt="Contorno de magnitud de velocidad alrededor del perfil NACA 2412" className="mx-auto h-80 w-full object-contain lg:h-[32rem]" />
        <figcaption className="pt-2 text-xs font-mono text-slate-600">Ansys Fluent · Velocity Magnitude</figcaption>
      </figure>

      {/* Title & Intro */}
      <div className="text-center space-y-1">
        <h2 className="text-base font-bold text-slate-900">
          CFD en el clásico NACA 2412 - comparación con DesignFoil
        </h2>
        <p className="text-[11px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Si bien es el típico NACA 2412, puedes diseñar cualquier alerón para aeronaves, autos, u otros particulares en los que se requiera crear carga o sustentación aerodinámica a cierto requerimiento de un contexto operacional en cuestiones de atmósfera y velocidad, un pequeño sueño que tengo es el de hacer un alerón con perfil variable que reciba las órdenes de microcontrolador, script o IA, pero eso ya es otra historia.
        </p>
        <p className="text-[10px] text-slate-400 italic pt-1">Ingeniería Aeronáutica</p>
      </div>

      {/* 2. Detalles de la Simulación */}
      <div className="grid grid-cols-1 gap-5">
        <section className="space-y-2">
        <h3 className="font-bold text-slate-800 border-b pb-1">Detalles de la Simulación</h3>
        <p className="text-[11px] text-slate-600">
          En la siguiente imagen se muestra el árbol de acciones de Ansys como un resumen de lo que se realizó:
        </p>
        
        <figure className="border border-slate-300 bg-white p-2">
          <img src={workbenchImage} alt="Flujo de trabajo Geometry, Mesh y Fluent en Ansys Workbench" className="mx-auto h-70 w-[60%] object-contain lg:h-[32rem]" />
          <figcaption className="pt-2 text-center text-[11px] text-slate-600">Flujo de trabajo en Ansys Workbench</figcaption>
        </figure>
        </section>

      {/* 3. Malla Aerodinámica */}
        <section className="space-y-2">
        <h3 className="font-bold text-slate-800 border-b pb-1">Malla aerodinámica</h3>
        <p className="text-[11px] text-slate-600 leading-relaxed">
          Aquí vemos detalles de la malla obtenida con su inflación y o-rings, estas mallas son un poco más complicadas de conseguir pero todo puede encontrarse en la documentación:
        </p>
        
        <figure className="border border-slate-300 bg-white p-2">
          <img src={meshImage} alt="Malla refinada alrededor del perfil NACA 2412" className="mx-auto h-96 w-full object-contain lg:h-[32rem]" />
          <figcaption className="pt-2 text-center text-[11px] text-slate-600">Malla alrededor del perfil NACA 2412</figcaption>
        </figure>
        </section>
      </div>

      <div className="space-y-2">
        <p className="text-[11px] text-slate-600 leading-relaxed">
          Los puntos del NACA son tomados a manera de dat y coordenadas en <span className="text-violet-700 underline">http://airfoiltools.com/airfoil/details?airfoil=naca2412-il</span> ó un generador de perfiles en línea, para una longitud característica de 1 metro y velocidad de 10m/s con condiciones de atmósfera al nivel del mar para el caso de prueba/ejemplo.
        </p>
        <p className="text-[11px] text-slate-600 font-medium">
          Tenemos cantidad de resultados como son las iteraciones - convergencia:
        </p>
      </div>
              <figure className="border border-slate-300 bg-white p-2">
          <img src={r3} alt="Convergencia del coeficiente de sustentación durante las iteraciones" className="mx-auto h-96 w-full object-contain lg:h-[32rem]" />
          <figcaption className="pt-2 text-center">Convergencia de iteraciones</figcaption>
        </figure>

      {/* 4. Gráficas de Convergencia */}
      <div className="grid grid-cols-1 gap-4">
        <figure className="border border-slate-300 bg-white p-2">
          <img src={residualsImage} alt="Convergencia de residuos de continuidad, velocidades, k y omega" className="mx-auto h-96 w-full object-contain lg:h-[32rem]" />
          <figcaption className="pt-2 text-center">Convergencia de residuos</figcaption>
        </figure>
        <figure className="border border-slate-300 bg-white p-2">
          <img src={dragImage} alt="Convergencia del coeficiente de arrastre durante las iteraciones" className="mx-auto h-96 w-full object-contain lg:h-[32rem]" />
          <figcaption className="pt-2 text-center">Coeficiente de arrastre · CD</figcaption>
        </figure>
        <figure className="border border-slate-300 bg-white p-2">
          <img src={liftImage} alt="Convergencia del coeficiente de sustentación durante las iteraciones" className="mx-auto h-96 w-full object-contain lg:h-[32rem]" />
          <figcaption className="pt-2 text-center">Coeficiente de sustentación · CL</figcaption>
        </figure>
      </div>

      {/* 5. Contornos de Presión y Velocidad */}
      <div className="grid grid-cols-1 gap-4 pt-2">
        <figure className="border border-slate-300 bg-white p-2">
          <img src={pressureImage} alt="Contorno de presión estática sobre el perfil alar" className="mx-auto h-96 w-full object-contain lg:h-[32rem]" />
          <figcaption className="pt-2 text-center font-bold text-slate-800">Presión estática</figcaption>
        </figure>
        <figure className="border border-slate-300 bg-white p-2">
          <img src={velocityDetailImage} alt="Campo de velocidades alrededor del perfil alar" className="mx-auto h-96 w-full object-contain lg:h-[32rem]" />
          <figcaption className="pt-2 text-center text-[11px] font-bold text-slate-800">          Resultados detallados por consola, tanto como los valores buscados y la iteración en la que se logró la convergencia
        </figcaption>
        </figure>
      </div>
     {/* 6. Sección DesignFoil */}
      <div className="space-y-3 pt-4 border-t border-slate-200">
        <h3 className="text-sm font-bold text-center text-slate-900">DesignFoil</h3>
        <p className="text-[11px] text-slate-600 leading-relaxed text-justify">
          Para valores un poco más complejos de validar, pero añadiendo algunas herramientas como DesignFoil se consiguen en más herramientas elementos con más detalles, densidad, túneles de viento para ala/aerofoil, variando el perfil, las condiciones atmosféricas en un túnel de viento virtual, longitud característica y velocidad, vemos que los resultados de CD y CL son parecidos, pero no exactos, por lo que este nos sirve para continuar con la validación del modelo.
        </p>

        <figure className="border border-slate-300 bg-white p-2">
          <img src={designFoilImage} alt="Distribución del coeficiente de presión Cp en DesignFoil para el perfil NACA 2412" className="mx-auto h-67 w-full object-contain lg:h-[32rem]" />
          <figcaption className="pt-2 text-center text-[11px] text-slate-600">Distribución de presión · DesignFoil</figcaption>
        </figure>
      </div>

      {/* 7. Sección Cálculos Ecuaciones */}
      <div className="space-y-4 pt-4 border-t border-slate-200">
        <h3 className="text-sm font-bold text-center text-slate-900">Cálculos</h3>
        <p className="text-[11px] text-slate-600 leading-relaxed text-justify">
          En Aeronáutica cuando se trata de perfiles alares, los valores buscados, generalmente son el CD y CL, estos valores son difícilmente obtenidos analíticamente, por lo que se recurre a simulaciones o túneles de viento para obtenerlos, a partir de ahí se continua un proceso de cálculo estructural, aerodinámico y matemático, para el diseño completo de las superficies móviles de una aeronave por lo que haber hallado el CD y CL es un gran paso, para realizar los cálculos de fuerzas de sustentación y arrastre con fórmulas sencillas.
        </p>

        <div className="text-center space-y-3 py-2 bg-slate-50 border border-slate-200 rounded">
          <div className="text-violet-900 text-sm">
            <BlockMath math="F_L = \frac{1}{2} \, \rho \, V^2 C_L S" />
          </div>
          <div className="text-violet-900 text-sm">
            <BlockMath math="F_D = \frac{1}{2} \, \rho \, V^2 C_D S" />
          </div>
        </div>

        <p className="text-[10px] text-slate-500 leading-relaxed text-justify italic">
          Si bien con un buen modelo, cálculos acertados con valores semejantes de FL, FD y solución experimental en túnel de viento son suficientes para pasar a la parte final del diseño y cumplir con requerimientos, si que podemos aspirar a más detalles, con matemática avanzada como las ecuaciones de Von Kármán para hallar el punto de desprendimiento de la capa límite analíticamente, contrastando con Ansys y DesignFoil, publicaré más adelante. Para conocer los detalles de mi trabajo, puede ponerse en contacto conmigo directamente a mi Whatsapp o al +51927617350
        </p>
      </div>

      {/* 8. Sección Video */}
      <div className="space-y-3 pt-4 border-t border-slate-200 text-center">
        <h3 className="text-xs font-bold text-slate-800">Un pequeño video con más detalles</h3>
        
        <div className="w-full overflow-hidden rounded-xl aspect-video">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/MgiQ4y28jag"
    title="Demostración del proyecto"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />
</div>
      </div>

    </div>
  );
}