import { Topic } from '../components/SlideTransition';

export default function Slide5_Arquitetura() {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold mb-10 border-b-2 border-brand-border pb-4 inline-block">O TEA e sua Arquitetura Genética</h1>
      
      <div className="flex flex-col h-full mt-8">
        <Topic delay={0.2}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-brand-primary dark:text-brand-light mb-4">Espectro Comportamental Contínuo</h2>
            <p className="text-xl max-w-3xl leading-relaxed">
              O autismo representa os extremos de um espectro contínuo de traços sociais presentes em toda a população geral.
            </p>
          </div>
        </Topic>

        <Topic delay={0.4}>
          <div className="mb-16 border-l-[1px] border-brand-primary pl-6 py-2">
            <h2 className="text-xl font-mono text-brand-muted uppercase tracking-widest mb-2">Alta Herdabilidade</h2>
            <p className="text-2xl font-medium">Estimativas variam entre <strong className="text-brand-primary dark:text-brand-light">83% e 90%</strong>.</p>
            <p className="text-xl text-brand-muted mt-1">Componente biológico fortemente poligênico.</p>
          </div>
        </Topic>

        <Topic delay={0.6}>
          <div className="w-full relative mt-8">
            <h2 className="text-sm font-mono tracking-widest text-brand-muted uppercase mb-8">Arquitetura Molecular</h2>
            
            {/* Minimalist SVG Spectrum Line */}
            <div className="h-12 w-full relative mb-6">
              <svg width="100%" height="100%" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="spectrum" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1F4E79" />
                    <stop offset="100%" stopColor="#DCEBF7" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="24" x2="100%" y2="24" stroke="url(#spectrum)" strokeWidth="4" />
                <circle cx="2%" cy="24" r="6" fill="#1F4E79" />
                <circle cx="98%" cy="24" r="4" fill="#DCEBF7" stroke="#1F4E79" strokeWidth="2" />
              </svg>
            </div>

            <div className="flex justify-between items-start">
              <div className="max-w-xs pr-8">
                <h3 className="text-xl font-bold text-brand-primary dark:text-brand-light mb-2">Variantes Raras</h3>
                <p className="text-lg text-brand-muted leading-relaxed">Alta penetrância, frequentemente com comorbidades graves (mutações <i className="font-serif">de novo</i>).</p>
              </div>
              <div className="max-w-xs pl-8 text-right">
                <h3 className="text-xl font-bold text-brand-primary dark:text-brand-light mb-2">Variantes Comuns</h3>
                <p className="text-lg text-brand-muted leading-relaxed">Milhares de SNPs de pequeno efeito modulando os traços sociais contínuos (PRS).</p>
              </div>
            </div>
          </div>
        </Topic>
      </div>
    </div>
  );
}
