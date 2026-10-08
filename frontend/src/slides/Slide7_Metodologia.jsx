import { Topic } from '../components/SlideTransition';

export default function Slide7_Metodologia() {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold mb-8 border-b-2 border-brand-border pb-4 inline-block">Metodologia</h1>
      <p className="text-2xl text-brand-muted dark:text-gray-400 mb-8 font-serif italic">Análise exploratória e Revisão de Literatura</p>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mt-8">
        <div className="md:col-span-5 space-y-12 flex flex-col justify-center">
          <Topic delay={0.2}>
            <div className="border-l-[1px] border-brand-primary pl-6">
              <h2 className="text-sm font-mono text-brand-muted uppercase tracking-widest mb-2">Fase 1</h2>
              <p className="text-2xl font-bold text-brand-primary dark:text-brand-light">Levantamento</p>
              <p className="text-lg text-brand-muted">Revisão bibliográfica da Escala SAS e arquitetura genética do TEA.</p>
            </div>
          </Topic>

          <Topic delay={0.4}>
            <div className="border-l-[1px] border-brand-primary pl-6">
              <h2 className="text-sm font-mono text-brand-muted uppercase tracking-widest mb-2">Fase 2</h2>
              <p className="text-2xl font-bold text-brand-primary dark:text-brand-light">Análise Exploratória</p>
              <p className="text-lg text-brand-muted">Avaliação teórica e conceitual no contexto da coorte de alto risco.</p>
            </div>
          </Topic>

          <Topic delay={0.6}>
            <div className="border-l-[1px] border-brand-primary pl-6">
              <h2 className="text-sm font-mono text-brand-muted uppercase tracking-widest mb-2">Fase 3</h2>
              <p className="text-2xl font-bold text-brand-primary dark:text-brand-light">Síntese Integrativa</p>
              <p className="text-lg text-brand-muted">Consolidação dos achados como endofenótipo dimensional.</p>
            </div>
          </Topic>
        </div>

        <div className="md:col-span-7 flex items-center justify-center">
          <Topic delay={0.8}>
            <div className="w-full max-w-lg aspect-square">
              <svg viewBox="0 0 300 400" className="w-full h-full text-brand-primary dark:text-brand-light">
                <defs>
                  <marker id="arrow-sharp" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
                  </marker>
                </defs>
                
                {/* Node 1 */}
                <rect x="50" y="40" width="200" height="50" fill="transparent" stroke="currentColor" strokeWidth="1" />
                <text x="150" y="65" fontSize="14" fontFamily="monospace" textAnchor="middle" fill="currentColor" fontWeight="bold">Revisão de Literatura</text>
                <text x="150" y="80" fontSize="10" fontFamily="monospace" textAnchor="middle" fill="currentColor" opacity="0.7">Coleta de Referências</text>
                
                <line x1="150" y1="90" x2="150" y2="150" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow-sharp)" />

                {/* Node 2 */}
                <rect x="50" y="150" width="200" height="50" fill="transparent" stroke="currentColor" strokeWidth="1" />
                <text x="150" y="175" fontSize="14" fontFamily="monospace" textAnchor="middle" fill="currentColor" fontWeight="bold">Análise Exploratória</text>
                <text x="150" y="190" fontSize="10" fontFamily="monospace" textAnchor="middle" fill="currentColor" opacity="0.7">Estudo de Contexto</text>
                
                <line x1="150" y1="200" x2="150" y2="260" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow-sharp)" />

                {/* Node 3 */}
                <rect x="50" y="260" width="200" height="70" fill="transparent" stroke="currentColor" strokeWidth="1" />
                <text x="150" y="285" fontSize="14" fontFamily="monospace" textAnchor="middle" fill="currentColor" fontWeight="bold">Síntese Integrativa</text>
                <text x="150" y="305" fontSize="10" fontFamily="monospace" textAnchor="middle" fill="currentColor" opacity="0.7">Arquitetura Genética</text>
                <text x="150" y="318" fontSize="10" fontFamily="monospace" textAnchor="middle" fill="currentColor" opacity="0.7">e Escala SAS</text>
              </svg>
            </div>
          </Topic>
        </div>
      </div>
    </div>
  );
}
