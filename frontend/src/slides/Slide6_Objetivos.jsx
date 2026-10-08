import { Topic } from '../components/SlideTransition';

export default function Slide6_Objetivos() {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold mb-10 border-b-2 border-brand-border pb-4 inline-block">Objetivos do Projeto</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mt-12">
        <div className="md:col-span-5 border-r border-brand-primary/20 pr-12 flex flex-col justify-center">
          <Topic delay={0.2}>
            <h2 className="text-sm font-mono text-brand-muted uppercase tracking-widest mb-6">Objetivo Geral</h2>
            <p className="text-3xl font-bold leading-tight text-brand-primary dark:text-brand-light">
              Validar biologicamente a SAS como fenótipo dimensional para predição de traços do TEA.
            </p>
            <p className="text-xl mt-8 text-brand-muted dark:text-gray-400 border-l-[1px] border-brand-muted pl-4">
              Através da investigação genômica na população brasileira.
            </p>
          </Topic>
        </div>

        <div className="md:col-span-7 flex flex-col justify-center">
          <Topic delay={0.4}>
            <h2 className="text-sm font-mono text-brand-muted uppercase tracking-widest mb-10">Objetivos Específicos</h2>
            <ul className="text-xl space-y-8">
              <li className="flex items-start gap-6 border-b border-gray-100 dark:border-gray-800 pb-6">
                <span className="font-mono text-brand-muted text-lg mt-1">01</span>
                <p className="text-brand-body dark:text-brand-darkText">Testar a associação longitudinal da SAS com o PRS do TEA.</p>
              </li>
              <li className="flex items-start gap-6 border-b border-gray-100 dark:border-gray-800 pb-6">
                <span className="font-mono text-brand-muted text-lg mt-1">02</span>
                <p className="text-brand-body dark:text-brand-darkText">Estimar a herdabilidade embasada em variantes comuns (h²_SNP).</p>
              </li>
              <li className="flex items-start gap-6 border-b border-gray-100 dark:border-gray-800 pb-6">
                <span className="font-mono text-brand-muted text-lg mt-1">03</span>
                <p className="text-brand-body dark:text-brand-darkText">Caracterizar a arquitetura genômica global da SAS (GWAS).</p>
              </li>
              <li className="flex items-start gap-6 border-b border-gray-100 dark:border-gray-800 pb-6">
                <span className="font-mono text-brand-muted text-lg mt-1">04</span>
                <p className="text-brand-body dark:text-brand-darkText">Calcular a correlação genética (rg) entre SAS e risco de TEA.</p>
              </li>
            </ul>
          </Topic>
        </div>
      </div>
    </div>
  );
}
