import { useState, useEffect } from 'react';
import { Calculator, Thermometer, Wind } from 'lucide-react';
import Structural from './components/Viga';
import MemoriaCalculoTermico from './components/Thermal';
import AnsysCFDView from './components/AnsysCFDView';

const views = [
  { id: 'structural', label: 'Ansys Structural', icon: Calculator, component: Structural },
  { id: 'thermal', label: 'Ansys Thermal', icon: Thermometer, component: MemoriaCalculoTermico },
  { id: 'cfd', label: 'Ansys CFD', icon: Wind, component: AnsysCFDView },
];

export default function App() {
  const [activeView, setActiveView] = useState('structural');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  return (
    <main className="min-h-screen bg-transparent px-4 py-8 text-slate-800 sm:py-10">
      <header className="mx-auto mb-8 max-w-5xl text-center">
        <p className="text-sm font-bold uppercase text-violet-700">Memorias de cálculo</p>
        <h1 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Casos de estudio con Ansys 2022</h1>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-600">Validación numérico-analítica de modelos estructurales, térmicos y CFD</p>
      </header>

      <nav className="mx-auto mb-6 flex max-w-5xl border-b border-slate-300" aria-label="Casos de estudio" role="tablist">
        {views.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            id={`tab-${id}`}
            type="button"
            role="tab"
            aria-selected={activeView === id}
            aria-controls="study-panel"
            onClick={() => setActiveView(id)}
            className={`flex min-h-14 flex-1 cursor-pointer items-center justify-center gap-2 border-b-2 px-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
              activeView === id
                ? 'border-violet-700 bg-white/90 text-violet-900'
                : 'border-transparent text-slate-600 hover:bg-white/70 hover:text-violet-900'
            }`}
          >
            <Icon aria-hidden="true" size={16} />
            {label}
          </button>
        ))}
      </nav>

          <div id="study-panel" role="tabpanel" aria-labelledby={`tab-${activeView}`}>
            {activeView === 'structural' ? (
              <Structural onNext={() => setActiveView('thermal')} />
            ) : activeView === 'thermal' ? (
              <MemoriaCalculoTermico onNext={() => setActiveView('cfd')} />
            ) : (
              <AnsysCFDView />
            )}
          </div>

          <footer className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-slate-300/80 py-5 text-center text-sm text-slate-600 sm:flex-row sm:text-left">
            <p>© Ing. Bruno Francisco Dulanto Valentin 2023</p>
            <a href="https://bruno-cv.web.app" target="_blank" rel="noopener noreferrer" className="font-semibold text-violet-800 underline decoration-violet-300 underline-offset-4 transition hover:text-violet-950">
              Contacto
            </a>
          </footer>
    </main>
  );
}