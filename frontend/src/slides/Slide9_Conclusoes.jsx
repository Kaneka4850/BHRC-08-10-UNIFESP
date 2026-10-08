import { Topic } from '../components/SlideTransition';

export default function Slide9_Conclusoes() {
  return (
    <div className="w-full flex flex-col h-full">
      <header className="mb-12">
        <h1 className="text-5xl font-sans font-light tracking-tight text-brand-primary dark:text-brand-light mb-4">
          Conclusões e Perspectivas
        </h1>
        <div className="w-full h-px bg-brand-border"></div>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 flex-1 mt-4">
        
        {/* Column 1 */}
        <div className="pr-10 border-r border-brand-border flex flex-col">
          <Topic delay={0.2} className="h-full">
            <span className="block text-brand-muted font-mono text-xs uppercase tracking-widest mb-6">Perspectiva I</span>
            <h2 className="text-3xl font-sans font-medium text-brand-primary dark:text-brand-light mb-6 leading-tight">Quebra de Paradigma</h2>
            <p className="text-lg leading-relaxed text-brand-body dark:text-brand-darkText font-light text-justify">
              Em vez de restringir a avaliação ao diagnóstico dicotômico padrão (sim/não), a integração bidirecional da SAS permite mensurar clinicamente as nuances do espectro autista usando predição genômica molecular.
            </p>
          </Topic>
        </div>

        {/* Column 2 */}
        <div className="px-10 border-r border-brand-border flex flex-col">
          <Topic delay={0.4} className="h-full">
            <span className="block text-brand-muted font-mono text-xs uppercase tracking-widest mb-6">Perspectiva II</span>
            <h2 className="text-3xl font-sans font-medium text-brand-primary dark:text-brand-light mb-6 leading-tight">Síntese Arquitetural</h2>
            <p className="text-lg leading-relaxed text-brand-body dark:text-brand-darkText font-light text-justify">
              O TEA não se baseia em um único gene. A arquitetura genética reflete uma rede complexa que combina alterações raras de alto impacto fenotípico com o efeito acumulado (PRS) de milhares de variantes polimórficas comuns.
            </p>
          </Topic>
        </div>

        {/* Column 3 */}
        <div className="pl-10 flex flex-col">
          <Topic delay={0.6} className="h-full">
            <span className="block text-brand-muted font-mono text-xs uppercase tracking-widest mb-6">Perspectiva III</span>
            <h2 className="text-3xl font-sans font-medium text-brand-primary dark:text-brand-light mb-6 leading-tight">Impacto Científico e Clínico</h2>
            <p className="text-lg leading-relaxed text-brand-body dark:text-brand-darkText font-light text-justify">
              A validação na BHRCS consolida a SAS como um endofenótipo dimensional robusto. Isso não só refina a arquitetura de risco no Brasil, mas também facilita a detecção precoce de prejuízos cognitivos e sociais em estágios subclínicos.
            </p>
          </Topic>
        </div>

      </div>
    </div>
  );
}
