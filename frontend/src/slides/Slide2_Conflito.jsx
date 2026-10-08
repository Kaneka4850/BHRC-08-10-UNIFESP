import { Topic } from '../components/SlideTransition';

export default function Slide2_Conflito() {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold mb-12 border-b-2 border-brand-border pb-4 inline-block">Quem sou eu?</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mt-16">
        
        {/* Editorial Section 1: Formação */}
        <div className="md:col-span-6 flex flex-col justify-end">
          <Topic delay={0.2}>
            <h2 className="text-sm font-mono tracking-widest text-brand-muted uppercase mb-8 border-b border-gray-200 dark:border-gray-800 pb-2">
              Formação Acadêmica
            </h2>
            <ul className="text-xl space-y-8 text-brand-body dark:text-brand-darkText">
              <li className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
                <span className="font-medium">Biomédico <span className="text-brand-muted text-sm ml-2 font-mono">(CRBM: 66297)</span></span>
              </li>
              <li className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
                <span className="font-medium">Especialista em Bioinformática</span>
                <img src="/einstein-logo.png" alt="Logo Einstein" className="h-6 object-contain grayscale opacity-80 hover:grayscale-0 transition-all" />
              </li>
              <li className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
                <span className="font-medium">Mestrando Probatório</span>
                <img src="/unifesp-logo.webp" alt="Logo UNIFESP" className="h-8 object-contain grayscale opacity-80 hover:grayscale-0 transition-all" />
              </li>
            </ul>
          </Topic>
        </div>

        {/* Editorial Section 2: Atuação / Conflitos */}
        <div className="md:col-span-6 flex flex-col justify-end">
          <Topic delay={0.4}>
            <h2 className="text-sm font-mono tracking-widest text-brand-muted uppercase mb-8 border-b border-gray-200 dark:border-gray-800 pb-2">
              Atuação Profissional
            </h2>
            <div className="text-xl space-y-2 mb-12">
              <p className="font-bold text-brand-primary dark:text-brand-light">Analista de Bioinformática Jr.</p>
              <p className="text-brand-muted">Ollin Análises Genômicas <br/><span className="text-base">(Grupo EVA genomics)</span></p>
            </div>

            <div className="pl-6 border-l-[1px] border-brand-primary/30">
              <p className="text-sm font-mono leading-relaxed text-brand-muted">
                * Fora este vínculo empregatício, <strong className="text-brand-body dark:text-brand-light">não possuo</strong> conflitos financeiros ou comerciais. Esta pesquisa possui caráter estritamente acadêmico e científico.
              </p>
            </div>
          </Topic>
        </div>

      </div>
    </div>
  );
}
