import { Topic } from '../components/SlideTransition';

export default function Slide1_Capa() {
  return (
    <div className="w-full h-full flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full items-end">
        <div className="md:col-span-8">
          <Topic delay={0.2}>
            <h2 className="text-sm font-mono text-brand-muted dark:text-brand-border mb-8 tracking-[0.3em] uppercase">
              Apresentação SAS 08/10
            </h2>
          </Topic>
          <Topic delay={0.4}>
            <h1 className="text-6xl md:text-7xl font-bold text-brand-body dark:text-brand-light mb-6 leading-[1.1] tracking-tight">
              Arquitetura Genética do Transtorno do Espectro Autista e a Validação Biológica da Escala de Aptidões Sociais (SAS)
            </h1>
          </Topic>
        </div>
        
        <div className="md:col-span-4 border-l border-brand-primary/20 pl-8 pb-2">
          <Topic delay={0.6}>
            <p className="text-lg text-brand-primary dark:text-brand-border mb-12 font-medium leading-relaxed">
              Uma Abordagem Integrativa Multimodal na Coorte Brasileira de Alto Risco (BHRCS)
            </p>
          </Topic>
          <Topic delay={0.8}>
            <div className="text-sm text-brand-muted dark:text-gray-400 space-y-1 font-mono">
              <p className="font-bold text-brand-body dark:text-brand-light">Cleber Augusto Muniz Cunha</p>
              <p>CRBM: 66297</p>
              <p className="pt-4">Universidade Federal de São Paulo (UNIFESP)</p>
            </div>
          </Topic>
        </div>
      </div>
    </div>
  );
}
