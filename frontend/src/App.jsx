import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import ThemeToggle from './components/ThemeToggle';
import SlideTransition from './components/SlideTransition';

import Slide1 from './slides/Slide1_Capa';
import Slide2 from './slides/Slide2_Conflito';
import Slide3 from './slides/Slide3_SAS';
import Slide4 from './slides/Slide4_SASPratica';
import Slide5 from './slides/Slide5_Arquitetura';
import Slide6 from './slides/Slide6_Objetivos';
import Slide7 from './slides/Slide7_Metodologia';
import Slide8 from './slides/Slide8_Achados';
import Slide9 from './slides/Slide9_Conclusoes';
import Slide10 from './slides/Slide10_Referencias';

const slides = [
  Slide1, Slide2, Slide3, Slide4, Slide5, 
  Slide6, Slide7, Slide8, Slide9, Slide10
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const CurrentComponent = slides[currentSlide];

  return (
    <div className="w-full h-screen overflow-hidden bg-white dark:bg-brand-darkBg text-brand-body dark:text-brand-darkText font-sans transition-colors duration-300 relative">
      <ThemeToggle />

      <main className="w-full h-full relative">
        <AnimatePresence initial={false} custom={direction}>
          <div key={currentSlide} className="absolute inset-0 w-full h-full">
            <SlideTransition direction={direction}>
              <CurrentComponent />
            </SlideTransition>
          </div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls - Minimalist Editorial */}
      <div className="absolute bottom-8 right-12 flex items-center gap-6 z-50">
        <span className="font-mono text-xs tracking-widest text-brand-muted uppercase">
          Slide {currentSlide + 1} / {slides.length}
        </span>
        <div className="flex gap-2">
          <button 
            onClick={prevSlide} 
            disabled={currentSlide === 0}
            className="p-3 border border-brand-body dark:border-brand-border hover:bg-brand-body hover:text-white dark:hover:bg-brand-light dark:hover:text-brand-primary disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={18} strokeWidth={1.5} />
          </button>
          <button 
            onClick={nextSlide} 
            disabled={currentSlide === slides.length - 1}
            className="p-3 border border-brand-body dark:border-brand-border hover:bg-brand-body hover:text-white dark:hover:bg-brand-light dark:hover:text-brand-primary disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Progress Bar - Hairline */}
      <div className="absolute bottom-0 left-0 h-[1px] bg-gray-200 dark:bg-gray-800 w-full z-50">
        <div 
          className="h-full bg-brand-primary dark:bg-brand-light transition-all duration-500 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
