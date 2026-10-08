import { Topic } from '../components/SlideTransition';

export default function Slide3_SAS() {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold mb-12 border-b-2 border-brand-border pb-4 inline-block">A Escala de Aptidões Sociais (SAS)</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
        {/* Definition Column */}
        <div className="md:col-span-5">
          <Topic delay={0.2}>
            <h2 className="text-4xl font-bold text-brand-primary dark:text-brand-light mb-6 tracking-tight">O que é a SAS?</h2>
            <div className="text-2xl leading-relaxed text-brand-body dark:text-brand-darkText space-y-6">
              <p>Questionário de 10 itens integrante do DAWBA.</p>
              <p className="text-lg text-brand-muted font-mono italic">
                (Development and Well-Being Assessment)
              </p>
              <p className="pt-4 border-t border-gray-200 dark:border-gray-800">Preenchido por cuidadores.</p>
            </div>
          </Topic>
        </div>

        {/* Features Column */}
        <div className="md:col-span-7 flex flex-col justify-center space-y-12">
          <Topic delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="col-span-3 text-right">
                <span className="text-3xl font-mono font-light text-brand-border">01</span>
              </div>
              <div className="col-span-9">
                <h3 className="text-2xl font-bold text-brand-primary dark:text-brand-light mb-2">Avaliação Bidirecional</h3>
                <p className="text-lg text-brand-muted">Evita o Efeito Teto</p>
              </div>
            </div>
          </Topic>

          <Topic delay={0.5}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="col-span-3 text-right">
                <span className="text-3xl font-mono font-light text-brand-border">02</span>
              </div>
              <div className="col-span-9">
                <h3 className="text-2xl font-bold text-brand-primary dark:text-brand-light mb-2">Objetivo Clínico</h3>
                <p className="text-lg text-brand-muted">Avaliar quantitativamente nuances da compreensão e comportamento social.</p>
              </div>
            </div>
          </Topic>

          <Topic delay={0.6}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="col-span-3 text-right">
                <span className="text-3xl font-mono font-light text-brand-border">03</span>
              </div>
              <div className="col-span-9">
                <h3 className="text-2xl font-bold text-brand-primary dark:text-brand-light mb-2">Métrica de Triagem</h3>
                <p className="text-lg text-brand-muted">Identifica risco para TEA captando déficits dimensionais na cognição.</p>
              </div>
            </div>
          </Topic>
        </div>
      </div>
    </div>
  );
}
