import { Topic } from '../components/SlideTransition';

export default function Slide4_SASPratica() {
  const items = [
    { id: 1, text: "Capacidade de rir com os outros." },
    { id: 2, text: "Manter conversas fora do interesse especial." },
    { id: 3, text: "Ser flexível e chegar a meios-termos." },
    { id: 4, text: "Atenuar situações tensas ou embaraçosas." },
    { id: 5, text: "Espírito esportivo ao perder ou errar." },
    { id: 6, text: "Conforto das pessoas com a sua presença." },
    { id: 7, text: "Leitura de entrelinhas e sentimentos." },
    { id: 8, text: "Pedir desculpas e reparar vínculos." },
    { id: 9, text: "Liderança pró-social e colaborativa." },
    { id: 10, text: "Consciência de regras sociais não escritas." }
  ];

  return (
    <div className="w-full flex flex-col h-full justify-center">
      <h1 className="text-4xl font-bold mb-6 border-b-2 border-brand-border pb-2 inline-block">A Escala SAS na Prática</h1>
      
      <Topic delay={0.1}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b-2 border-brand-primary dark:border-brand-border pb-4">
          <p className="text-xl font-bold text-brand-primary dark:text-brand-light mb-4 md:mb-0 max-w-md">
            Escores globais ≤ 12 ativam investigação profunda para TEA.
          </p>
          <div className="flex gap-6 text-sm font-mono text-brand-muted">
            <span><strong className="text-brand-body dark:text-gray-300">0:</strong> Muito pior</span>
            <span><strong className="text-brand-body dark:text-gray-300">1:</strong> Pior</span>
            <span><strong className="text-brand-body dark:text-gray-300">2:</strong> Na média</span>
            <span><strong className="text-brand-body dark:text-gray-300">3:</strong> Melhor</span>
            <span><strong className="text-brand-body dark:text-gray-300">4:</strong> Muito melhor</span>
          </div>
        </div>
      </Topic>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
        {items.map((item, index) => (
          <Topic delay={0.2 + (index * 0.05)} key={item.id}>
            <div className="flex items-baseline gap-6 py-4 border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
              <span className="font-mono text-brand-muted text-sm min-w-[50px]">SAS {item.id.toString().padStart(2, '0')}</span>
              <p className="text-xl text-brand-body dark:text-gray-200">{item.text}</p>
            </div>
          </Topic>
        ))}
      </div>
    </div>
  );
}
