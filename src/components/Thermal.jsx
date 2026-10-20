import { InlineMath, BlockMath } from './Math';
import temperatureImage from '../assets/img/tuberia1.jpg';
import r2ansys from '../assets/img/r2ansys.jpg';
import meshMetricsImage from '../assets/img/tuberiaMesh.jpg';
import cmatlab from '../assets/img/cmatlab.jpg';
import cmatlab2 from '../assets/img/cmatlab2.jpg';
import setupImage from '../assets/img/processTuberia.jpg';
import cylinderDiagram from '../assets/img/c1.jpg';

export default function MemoriaCalculoTermicoCompleta({ onNext }) {
  return (
    <div className="study-document mx-auto max-w-6xl space-y-6 border border-slate-300 bg-white p-5 font-sans text-sm leading-relaxed text-slate-800 shadow-md sm:p-8">
      
      {/* SECCIÓN INICIAL: CAPTURAS DE ANSYS THERMAL Y MALLADO */}
      <div className="space-y-6">
        
        {/* Imagen 1: Contorno Principal Transient Thermal */}
        <figure className="border border-slate-300 bg-slate-50 p-2 text-center">
          <img src={temperatureImage} alt="Contorno de temperatura del cilindro en Ansys Transient Thermal" className="mx-auto h-96 w-full object-contain lg:h-[32rem]" />
          <figcaption className="pt-2 text-xs font-mono text-slate-600">Transient Thermal · Temperature Contour · Máximo: 149.85 °C</figcaption>
        </figure>

        <div className="text-center space-y-1">
          <h2 className="text-base font-bold text-slate-900">
            Cálculo de temperatura con elementos finitos y Fourier
          </h2>
          <p className="text-[11px] text-slate-500 italic">
            Análisis térmico, contiene una validación adicional en MATLAB
          </p>
        </div>

        {/* Detalles de la Simulación y Árbol de Acciones */}
        <div className="space-y-2">
          <h3 className="font-bold text-slate-800 border-b pb-1">Detalles de la Simulación</h3>
          <p className="text-[11px] text-slate-600">En la siguiente imagen se muestra el árbol de acciones de Ansys como un resumen de lo que se realizó:</p>
          
          <figure className="border border-slate-300 bg-white p-2">
            <img src={setupImage} alt="Árbol de acciones del análisis Transient Thermal en Ansys" className="mx-auto h-96 w-full object-contain lg:h-[32rem]" />
            <figcaption className="pt-2 text-center text-[11px] text-slate-600">Árbol de acciones · Transient Thermal</figcaption>
          </figure>
        </div>

        {/* Detalles de la Malla y Calidad */}
        <div className="space-y-2">
          <p className="text-[11px] text-slate-600">Vemos detalles de la malla, vemos que la calidad cayó un poco a 0.95 sin embargo se mantiene dentro de los estándares:</p>
          
          <div className="grid grid-cols-1 gap-4">
            <figure className="border border-slate-300 bg-white p-2">
              <img src={meshMetricsImage} alt="Malla del cilindro y gráfico de métricas de elementos en Ansys" className="mx-auto h-96 w-full object-contain lg:h-[32rem]" />
              <figcaption className="pt-2 text-center text-[11px] text-slate-600">Malla y métricas de elementos</figcaption>
            </figure>
          </div>
        </div>

      </div>

      {/* SECCIÓN: SOLUCIÓN ANALÍTICA */}
      <div className="pt-6 border-t-2 border-slate-300 space-y-4">
        <h2 className="text-base font-bold text-center text-slate-900">
          Solución Analítica
        </h2>

        <p className="italic text-slate-600 text-[11px]">
          Tal como se simuló, un cilindro con radio interior de 10cm y radio exterior de 14cm cuyas temperaturas son de 423K en el interior y 373K en el exterior.
        </p>

        {/* Espacio para los diagramas del cilindro */}
        <div className="flex flex-col items-center justify-center gap-4 border border-slate-200 bg-slate-50 py-3">
          <figure className="w-full">
            <img src={cylinderDiagram} alt="Esquema cilíndrico con radios y temperaturas de contorno" className="h-80 w-full object-contain lg:h-96" />
          </figure>
        </div>

        <p>Empezamos con la ecuación de Fourier para coordenadas cilíndricas:</p>

        <div className="text-center py-1 overflow-x-auto">
          <BlockMath math="\frac{1}{r} \frac{d}{dr} \left( r \frac{dT}{dr} \right) + \frac{\dot{q} \, \text{gen.}}{k} = \frac{1}{\alpha} \frac{dT}{dt}" />
        </div>

        <p>
          Como vemos, en el problema planteado no poseemos energía generada y el flujo de calor es estacionario, por lo que simplificando la fórmula nos quedaría de la siguiente forma:
        </p>

        <div className="text-center py-1">
          <BlockMath math="\frac{d}{dr} \left( r \frac{dT}{dr} \right) = 0" />
        </div>

        <p>Integrando nos quedaría la siguiente ecuación:</p>

        <div className="text-center py-1">
          <BlockMath math="\frac{dT}{dr} = \frac{C_1}{r}" />
        </div>

        <p>En la segunda integral resolvemos, la ecuación diferencial que rige el comportamiento del flujo de calor en el cilindro:</p>

        <div className="text-center py-1 font-bold text-violet-900">
          <BlockMath math="T(r) = C_1 \cdot \ln(r) + C_2" />
        </div>

        <p>Procedemos a realizar el análisis en sus condiciones de contorno para hallar las constantes, y así completar la ecuación diferencial:</p>
        <div className='flex'>
        <div className="space-y-1 pl-4 text-left m-0 m-auto">
          <div>cuando <InlineMath math="r = r_1" /> entonces <InlineMath math="T = T_1" /></div>
          <div><InlineMath math="T(r) = C_1 \cdot \ln(r) + C_2 \rightarrow T(0.1) = C_1 \cdot \ln(0.1) + C_2" /></div>
          <div><InlineMath math="\rightarrow 423 = C_1 \cdot \ln(0.1) + C_2 \quad \ldots (1)" /></div>
          
          <div className="pt-2">cuando <InlineMath math="r = r_2" /> entonces <InlineMath math="T = T_2" /></div>
          <div><InlineMath math="T(r) = C_1 \cdot \ln(r) + C_2 \rightarrow T(0.14) = C_1 \cdot \ln(0.14) + C_2" /></div>
          <div><InlineMath math="\rightarrow 373 = C_1 \cdot \ln(0.14) + C_2 \quad \ldots (2)" /></div>
        </div>
        </div>

        <p className="pt-2">Restando las ecuaciones (1) y (2) tenemos:</p>

        <div className="text-center py-1 space-y-1">
          <BlockMath math="423 = C_1 \cdot \ln(0.1) + C_2" />
          <BlockMath math="373 = C_1 \cdot \ln(0.14) + C_2" />
          <BlockMath math="\rightarrow 50 = -0.3364722366 (C_1)" />
          <BlockMath math="\rightarrow C_1 = -148.6006706" />
        </div>

        <p className="pt-2">Reemplazando en (1):</p>

        <div className="text-center py-1 space-y-1">
          <BlockMath math="423 = C_1 \cdot \ln(0.1) + C_2 \rightarrow 423 = -148.6006706 \cdot \ln(0.1) + C_2" />
          <BlockMath math="\rightarrow C_2 = 80.83431107" />
        </div>

        <p className="pt-2">Reemplazamos las constantes en la ecuación diferencial para completarla:</p>

        <div className="text-center py-1 font-bold text-violet-800 text-sm">
          <BlockMath math="T(r) = 80.83431107 - 148.6006706 \cdot \ln(r)" />
        </div>

        <p className="italic text-slate-600 pt-2 text-[11px]">
          Por lo que evaluando cualquier valor de <InlineMath math="r" /> en la ecuación diferencial tendremos un valor de temperatura correspondiente para este punto y las condiciones dadas.
        </p>

        {/* Tabla de Resultados Analíticos */}
        <div className="overflow-x-auto pt-2">
          <table className="w-full text-center border border-slate-300 bg-white text-xs font-mono rounded">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-1 border-b">r(m)</th>
                <th className="p-1 border-b">T(r) °K</th>
                <th className="p-1 border-b">T(r) °C</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-1 border-b">0.1</td><td className="p-1 border-b font-bold">423</td><td className="p-1 border-b">149.85</td></tr>
              <tr><td className="p-1 border-b">0.11</td><td className="p-1 border-b">408.836843</td><td className="p-1 border-b">135.6888</td></tr>
              <tr><td className="p-1 border-b">0.12</td><td className="p-1 border-b">395.906894</td><td className="p-1 border-b">122.7569</td></tr>
              <tr><td className="p-1 border-b">0.13</td><td className="p-1 border-b">384.012494</td><td className="p-1 border-b">110.8625</td></tr>
              <tr><td className="p-1 border-b">0.14</td><td className="p-1 border-b font-bold">373</td><td className="p-1 border-b">99.85</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECCIÓN DE RESULTADOS Y MATLAB */}
      <div className="pt-6 border-t border-slate-300 space-y-4">
        <h2 className="text-base font-bold text-center text-slate-900">Resultados</h2>
        <p className="text-[11px] text-slate-600 text-center italic">
          ¡Resultados semejantes! tanto en la solución analítica como en la simulación.
        </p>
        <div className="space-y-4">

  <div className="flex w-full flex-col items-center justify-center gap-4 p-3 lg:flex-row lg:gap-3">

    {/* Imagen centrada */}
    <figure className="flex w-full min-w-0 justify-center lg:w-auto lg:flex-none">
      <img
        src={r2ansys}
        alt="Flujo de calor en el cilindro"
        className="mx-auto h-80 max-w-full object-contain lg:h-96"
      />
    </figure>

    {/* Tabla junto a la imagen */}
    <div className="w-full max-w-xs overflow-x-auto lg:w-64 lg:flex-none">
      <table className="w-full rounded border border-slate-300 bg-white text-center text-xs font-mono">
        <thead className="bg-slate-100">
          <tr>
            <th className="border-b p-2">r (m)</th>
            <th className="border-b p-2">T(r) °C</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border-b p-2">0.1</td>
            <td className="border-b p-2 font-bold">149.85</td>
          </tr>
          <tr>
            <td className="border-b p-2">0.11</td>
            <td className="border-b p-2">135.6868</td>
          </tr>
          <tr>
            <td className="border-b p-2">0.12</td>
            <td className="border-b p-2">122.7569</td>
          </tr>
          <tr>
            <td className="border-b p-2">0.13</td>
            <td className="border-b p-2">110.8625</td>
          </tr>
          <tr>
            <td className="border-b p-2">0.14</td>
            <td className="border-b p-2 font-bold">99.85</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</div>
        {/* Sección MATLAB */}
        <div className="pt-4 space-y-3">
          <h3 className="text-sm font-bold text-center text-slate-900">MATLAB</h3>
          
          <p className="text-[11px] text-slate-600 text-justify">
            Utilizando MATLAB basta escribir el siguiente código, detallando solo la primera ecuación, las condiciones de contorno y los valores de en los que se requiere la temperatura:
          </p>
          <figure className="border border-slate-200 bg-slate-50 p-3">
            <img src={cmatlab} alt="Código MATLAB para calcular la temperatura del cilindro" className="mx-auto h-auto max-w-full" />
          </figure>
          <p className="text-[11px] text-slate-600 italic text-center">
            El programa resuelve la ecuación, muestra la ecuación diferencial, evalúa los valores de r y muestra las temperaturas correspondientes.
          </p>
          <figure className="border border-slate-200 bg-slate-50 p-3">
            <img src={cmatlab2} alt="Resultados de MATLAB para la temperatura del cilindro" className="mx-auto h-auto max-w-full" />
          </figure>

          <p className="text-[11px] text-slate-700 font-medium text-center pt-2">
            Los resultados de MATLAB también se aproximan a la solución analítica y computacional. Revise la tercera simulación, el diseño de un perfil Alar con CFD.
          </p>
        </div>

      </div>

{/* Botón para la siguiente simulación */}
<div className="flex justify-center border-t border-slate-200 pt-6">
  <button
    type="button"
    onClick={onNext}
    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
  >
    Ver siguiente simulación - Ansys Thermal
    <span aria-hidden="true">→</span>
  </button>
</div>
    </div>
  );
}