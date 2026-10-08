import { Topic } from '../components/SlideTransition';

export default function Slide10_Referencias() {
  const refs = [
    { id: 1, text: "Salum GA, et al. High risk cohort study for psychiatric disorders in childhood: rationale, design, methods and preliminary results. Int J Methods Psychiatr Res. 2015;24(1):58-73.", link: "https://pubmed.ncbi.nlm.nih.gov/25227743/" },
    { id: 2, text: "Liddle EB, Batty MJ, Goodman R. The Social Aptitudes Scale: an initial validation. Soc Psychiatry Psychiatr Epidemiol. 2009;44(6):508-13.", link: "https://pubmed.ncbi.nlm.nih.gov/18979221/" },
    { id: 3, text: "Axelrud LK, et al. The Social Aptitudes Scale: looking at both \"ends\" of the social functioning dimension. Soc Psychiatry Psychiatr Epidemiol. 2017;52(8):1031-40.", link: "https://pubmed.ncbi.nlm.nih.gov/28551730/" },
    { id: 4, text: "Kaiser S, et al. Examining the psychometric properties of the Norwegian version of the Social Aptitudes Scale in two clinical samples. BMC Psychol. 2023;11(1):221.", link: "https://doi.org/10.1186/s40359-023-01258-4" },
    { id: 5, text: "Satterstrom FK, et al. Large-Scale Exome Sequencing Study Implicates Both Developmental and Functional Changes in the Neurobiology of Autism. Cell. 2020;180(3):568-584.", link: "https://pubmed.ncbi.nlm.nih.gov/31981491/" },
    { id: 6, text: "Chaste P, Leboyer M. Autism risk factors: genes, environment, and gene-environment interactions. Dialogues Clin Neurosci. 2012;14(3):281-92.", link: "https://doi.org/10.31887/DCNS.2012.14.3/pchaste" },
    { id: 7, text: "Ohi K, et al. Polygenic risk scores for major psychiatric and neurodevelopmental disorders contribute to sleep disturbance in childhood. Transl Psychiatry. 2021;11(1):187.", link: "https://pubmed.ncbi.nlm.nih.gov/33753730/" },
    { id: 8, text: "Chen C, et al. Polygenic risk score for five major psychiatric disorders associated with volume of distinct brain regions in the general population. Biol Psychol. 2023;178:108530.", link: "https://pubmed.ncbi.nlm.nih.gov/36754320/" }
  ];

  return (
    <div className="w-full flex flex-col h-full">
      <header className="mb-10">
        <h1 className="text-5xl font-sans font-light tracking-tight text-brand-primary dark:text-brand-light mb-4">
          Referências Bibliográficas
        </h1>
        <div className="w-full h-px bg-brand-border"></div>
      </header>

      <div className="flex-1 flex flex-col justify-between">
        <Topic delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mt-4">
            {refs.map((ref) => (
              <div key={ref.id} className="relative pl-8 text-sm font-sans font-light text-brand-body dark:text-brand-darkText">
                <span className="absolute left-0 top-0 font-mono text-brand-muted">[{ref.id}]</span>
                <a 
                  href={ref.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block leading-relaxed hover:text-brand-primary dark:hover:text-brand-light transition-colors"
                >
                  {ref.text}
                </a>
              </div>
            ))}
          </div>
        </Topic>

        <Topic delay={0.5}>
          <div className="w-full mt-12 pt-8 flex items-center justify-between border-t border-brand-border">
            <div>
              <h2 className="text-4xl font-sans font-light text-brand-primary dark:text-brand-light tracking-tight">Obrigado.</h2>
              <p className="text-sm font-mono text-brand-muted mt-2">cleber.muniz@evagenomics.com.br</p>
            </div>
            
            <div className="text-right">
              {/* Removed UNIFESP footer */}
            </div>
          </div>
        </Topic>
      </div>
    </div>
  );
}
