import { Topic } from '../components/SlideTransition';

export default function Slide8_Achados() {
  return (
    <div className="w-full flex flex-col h-full">
      <header className="mb-12">
        <h1 className="text-5xl font-sans font-light tracking-tight text-brand-primary dark:text-brand-light mb-4">
          Achados Relevantes na Literatura
        </h1>
        <div className="w-full h-px bg-brand-border"></div>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 flex-1">
        
        <div className="md:col-span-5 flex flex-col relative h-full justify-center">
          <Topic delay={0.2} className="w-full relative">
            {/* Massive Typography overlaid / integrated */}
            <div className="absolute top-0 left-0 w-full flex flex-col z-10">
              <span className="block text-[7rem] leading-none font-mono font-light text-brand-primary dark:text-brand-light -ml-2 tracking-tighter">0,85</span>
              <span className="block text-lg font-mono text-brand-muted tracking-widest uppercase mt-2">AUC (Area under curve)</span>
            </div>

            {/* ROC SVG */}
            <div className="w-full aspect-square relative mt-32 max-h-[350px]">
              <svg viewBox="0 0 100 100" className="w-full h-full text-brand-body dark:text-brand-darkText overflow-visible">
                {/* Axes */}
                <line x1="0" y1="100" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                <line x1="0" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                
                {/* Random classifier */}
                <line x1="0" y1="100" x2="100" y2="0" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2" opacity="0.5" />
                
                {/* AUC Area */}
                <path d="M0,100 L0,50 Q25,10 60,5 T100,0 L100,100 Z" fill="var(--color-brand-border)" opacity="0.2" />
                
                {/* ROC Curve */}
                <path d="M0,100 L0,50 Q25,10 60,5 T100,0" fill="none" stroke="var(--color-brand-primary)" strokeWidth="1.5" />
                
                {/* Labels */}
                <text x="50" y="106" fontSize="3" textAnchor="middle" fill="currentColor" opacity="0.6" className="font-mono">1 - Specificity (FPR)</text>
                <text x="-4" y="50" fontSize="3" textAnchor="middle" fill="currentColor" opacity="0.6" transform="rotate(-90 -4,50)" className="font-mono">Sensitivity (TPR)</text>
              </svg>
            </div>

            {/* Graph Explanation */}
            <div className="mt-8 border-t border-brand-border pt-4">
              <p className="text-sm font-sans font-light text-brand-body dark:text-brand-darkText leading-relaxed">
                <span className="font-medium text-brand-primary dark:text-brand-light">Interpretação:</span> Um valor de <strong>AUC = 0,85</strong> indica uma excelente capacidade de discriminação da escala SAS na diferenciação clínica entre o neurotipo padrão e o espectro autista.
              </p>
            </div>
          </Topic>
        </div>

        {/* Text Column */}
        <div className="md:col-span-7 flex flex-col justify-center space-y-12 pl-12 border-l border-brand-border">
          <Topic delay={0.4}>
            <div className="relative">
              <span className="absolute -left-[53px] top-1 text-sm font-mono text-brand-muted">01.</span>
              <h2 className="text-2xl font-sans font-medium text-brand-primary dark:text-brand-light mb-3">Adequação Clínica e Psicométrica</h2>
              <p className="text-lg leading-relaxed text-brand-body dark:text-brand-darkText font-light">SAS isolada prediz diagnóstico de TEA com alta precisão em populações miscigenadas.</p>
            </div>
          </Topic>

          <Topic delay={0.6}>
            <div className="relative">
              <span className="absolute -left-[53px] top-1 text-sm font-mono text-brand-muted">02.</span>
              <h2 className="text-2xl font-sans font-medium text-brand-primary dark:text-brand-light mb-3">Distribuição Subclínica</h2>
              <p className="text-lg leading-relaxed text-brand-body dark:text-brand-darkText font-light">Prejuízos na cognição não operam em binário, manifestando-se em níveis moderados altamente herdáveis na população.</p>
            </div>
          </Topic>

          <Topic delay={0.8}>
            <div className="relative">
              <span className="absolute -left-[53px] top-1 text-sm font-mono text-brand-muted">03.</span>
              <h2 className="text-2xl font-sans font-medium text-brand-primary dark:text-brand-light mb-3">Pleiotropia Transdiagnóstica</h2>
              <p className="text-lg leading-relaxed text-brand-body dark:text-brand-darkText font-light">Loci de risco poligênico do TEA correlacionam-se com inteligência global, TDAH e distúrbios de humor.</p>
            </div>
          </Topic>
        </div>

      </div>
    </div>
  );
}
