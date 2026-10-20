import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from './Math';
import setupImage from '../assets/img/processViga.jpg';
import meshImage from '../assets/img/vigaMesh1.jpg';
import r1ansys from '../assets/img/r1ansys.jpg';
import imatlab from '../assets/img/imatlab.jpg';
import resultImage from '../assets/img/viga1.jpg';

export default function Structural({ onNext }) {
  return (
    <div className="study-document mx-auto max-w-6xl space-y-6 border border-slate-300 bg-white p-5 font-sans text-sm leading-relaxed text-slate-800 shadow-md sm:p-8">

      {/* TÍTULO E INTRODUCCIÓN */}
      <div className="text-center space-y-2">
        <h1 className="text-xl font-extrabold text-slate-900">
          Cálculo de estructuras por el método de elementos finitos
        </h1>
        <p className="text-xs text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Un análisis estructural pequeño y simple pero que muestra un proceso de estudio estructurado en solución analítica, computacional y experimental, conjunto con el que se esperaría validar con certeza los resultados esperados
        </p>
        <p className="text-[11px] text-slate-400 italic">
          no se trata solo de imágenes interesantes
        </p>
      </div>

      {/* DETALLES DE LA SIMULACIÓN */}
      <div className="space-y-3">
        <h2 className="text-base font-bold text-slate-800 border-b pb-1">Detalles de la Simulación</h2>
        <p className="text-xs text-slate-600">
          Comenzaremos con un proceso sencillo para validar el programa, mallado y resultados contrastados, tomaremos un ejemplo simple que nos permita avanzar a simulaciones mas complejas con confianza
        </p>
      </div>

      {/* IMÁGENES DE CONFIGURACIÓN, RESULTADOS Y MALLA */}
      <div className="grid grid-cols-1 gap-5" aria-label="Configuración y resultados del modelo estructural">
        {[
          { src: resultImage, alt: 'Resultado de deformación total de la viga', label: 'Deformación total', prominent: true },
          { src: setupImage, alt: 'Árbol de configuración Static Structural en Ansys', label: 'Configuración del análisis', prominent: true },
          { src: meshImage, alt: 'Malla de elementos finitos aplicada a la viga', label: 'Malla de la viga' },
        ].map(({ src, alt, label, prominent }) => (
          <figure key={src} className="min-w-0 border border-slate-200 bg-slate-50">
            <div className={`flex ${prominent ? 'h-96 lg:h-[32rem]' : 'h-80 lg:h-96'} items-center justify-center bg-slate-100 p-3`}>
              <img src={src} alt={alt} className="h-full w-full object-contain" />
            </div>
            <figcaption className="border-t border-slate-200 px-3 py-2 text-center text-xs text-slate-600">{label}</figcaption>
          </figure>
        ))}
      </div>

      <p className="text-xs text-slate-600">
        aqui vemos detalles de la malla que por ser simple obviamente tiene todos los elementos en semejanza de calidad 1
      </p>

      {/* SECCIÓN SOLUCIÓN ANALÍTICA */}
      <div className="pt-4 border-t border-slate-200 space-y-4">
        <h2 className="text-lg font-bold text-center text-slate-900">Solución Analítica</h2>

        <p className="text-xs text-slate-600">
          Considerando el caso de la simulación, una viga de 1 metro empotrada en el extremo A, con sección cuadrada y sometida a una carga P1.
        </p>

        <p>
          Luego, realizamos el análisis con las condiciones de equilibrio para obtener las ecuaciones de y momento flector:
        </p>

        <div className="text-center py-1">
          <BlockMath math="\sum M = 0 \Rightarrow M = -PX" />
        </div>

        <p>Usamos la ecuación de Castigliano:</p>

        <div className="text-center py-1">
          <BlockMath math="\frac{d^2y}{dx^2} = \frac{M(x)}{EI} \Leftrightarrow EI \frac{d^2T}{dx^2} = -Px" />
        </div>

        <p>Integramos para obtener:</p>

        <div className="text-center py-1">
          <BlockMath math="EI \frac{dy}{dx} = -\frac{1}{2} Px^2 + C1" />
        </div>

        <p>Realizamos el análisis en sus condiciones de frontera:</p>

        <div className="text-center py-1">
          <BlockMath math="\text{Para } x = 0 \Leftrightarrow \alpha = \frac{dy}{dx} = 0" />
        </div>

        <p>Reemplazando:</p>

        <div className="text-center py-1 overflow-x-auto">
          <BlockMath math="EI(0) = -\frac{1}{2}P(L)^2 + C1 \Leftrightarrow 0 = -\frac{1}{2}P(L)^2 + C1 \Leftrightarrow C1 = \frac{1}{2}PL^2" />
        </div>

        <p>Reemplazamos C1 en la ecuación y así obtenemos la ecuación de la pendiente:</p>

        <div className="text-center py-1">
          <BlockMath math="EI \frac{dy}{dx} = -\frac{1}{2}Px^2 + \frac{1}{2}PL^2" />
        </div>

        <p>Integramos:</p>

        <div className="text-center py-1">
          <BlockMath math="EIy = -\frac{1}{6}Px^3 + \frac{1}{2}PL^2x + C2 \quad \ldots (1)" />
        </div>

        <p>
          Luego, cuando <InlineMath math="x = L \Rightarrow y = 0" /> por lo que al reemplazar en la ecuación anterior:
        </p>

        <div className="text-center py-1">
          <BlockMath math="EI(0) = -\frac{1}{6}PL^3 + \frac{1}{2}PL^3 + C2" />
        </div>

        <p>Y resolviendo tenemos:</p>

        <div className="text-center py-1">
          <BlockMath math="C2 = -\frac{1}{3}PL^3" />
        </div>

        <p>Y al reemplazar en la ecuación 1, obtenemos la ecuación de la curva elástica:</p>

        <div className="text-center py-1">
          <BlockMath math="y = \frac{P}{6EI}(-x^3 + 3L^2x - 2L^3) \quad \ldots (2)" />
        </div>

        <p>Luego, para hallar la deflexión reemplazamos los valores en la ecuación de la pendiente:</p>

        <div className="text-center py-1 space-y-2">
          <BlockMath math="EI \frac{dy}{dx} = -\frac{1}{2}Px^2 + \frac{1}{2}PL^2" />
          <BlockMath math="\Rightarrow \text{para } x = 0 \Rightarrow EI \frac{dy}{dx} = -\frac{1}{2}P(0)^2 + \frac{1}{2}PL^2" />
          <BlockMath math="\Rightarrow \alpha = \frac{dy}{dx} = \frac{PL^2}{2EI}" />
          <BlockMath math="y = \frac{P}{6EI}(-x^3 + 3PL^2x - 2L^3)" />
          <BlockMath math="\Rightarrow \frac{P}{6EI}(-0^3 + 3PL^2(0) - 2L^3)" />
          <BlockMath math="\Rightarrow y = \frac{-PL^3}{3EI}" />
        </div>
      </div>

      {/* SECCIÓN DE RESULTADOS */}
      <div className="pt-6 border-t border-slate-300 space-y-4">
        <h2 className="text-xl font-bold text-center text-slate-900">Resultados</h2>

        <p className="text-xs text-slate-600 leading-relaxed text-justify">
          Llegado a este punto, se valida la ecuación con un análisis dimensional para demostrar que es correcta y luego se prueban con los valores que se usaron en la simulación, como es el módulo de Young del acero estructural, las dimensiones de la viga de 1 metro con área rectangular de 70cm x 30cm y la fuerza de 100N, obteniendo resultados satisfactoriamente semejantes:
        </p>

        <div className="text-center py-2 overflow-x-auto">
          <BlockMath math="y = \frac{-100\,(\text{kg}\cdot\text{m}/\text{s}^2)(1\,\text{m})^3}{3 \left(2\times 10^{11}\,\text{kg}\cdot\text{m}/\text{s}^2\right) \cdot (1.575\times 10^{-7}\,\text{m}^2)}" />
        </div>

        <div className="text-center font-bold text-red-600 text-base py-1">
          <BlockMath math="y = \underline{0.0010582 \text{ m}}" />
        </div>

        {/* Escala de Deformación Ansys */}
        <figure className="border border-slate-200 bg-slate-50 p-3">
          <img src={r1ansys} alt="Escala de deformación total de la viga en Ansys" className="mx-auto max-h-96 w-full object-contain" />
          <figcaption className="pt-2 text-center">Escala de deformación · Ansys Structural</figcaption>
        </figure>
        {/* SECCIÓN MATLAB COMPROBACIÓN ADICIONAL */}
        <div className="pt-4 border-t border-slate-200 space-y-3">
          <h3 className="text-sm font-bold text-center text-slate-800">
            comprobación adicional de la ecuación en MATLAB
          </h3>
          <p className="text-xs text-slate-600 text-center">
            Usando MATLAB vemos que llegamos a la misma ecuación de curva elástica, muchísimo más rápido:
          </p>

          <div className="text-center py-1">
            <BlockMath math="y = \frac{P}{6EI}(-x^3 + 3L^2x - 2L^3) \quad \ldots (2)" />
          </div>

          {/* Editor MATLAB */}
          <figure className="border border-slate-200 bg-slate-50 p-3">
            <img src={imatlab} alt="Comprobación de la ecuación de la viga en MATLAB" className="mx-auto max-h-96 w-full object-contain" />
            <figcaption className="pt-2 text-center">Comprobación en MATLAB</figcaption>
          </figure>
          <p className="text-xs text-slate-700 text-center font-medium pt-3">
            Proceso simple para plantear inicialmente una estructura de estudio, se aumenta la complejidad en las siguientes simulaciones.
          </p>
          {/* Botón para la siguiente simulación */}
<div className="flex justify-center border-t border-slate-200 pt-6">
  <button
    type="button"
    onClick={onNext}
    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
  >
    Ver siguiente simulación - Ansys Fluent
    <span aria-hidden="true">→</span>
  </button>
</div>
        </div>
        
      </div>
    </div>
  );
}