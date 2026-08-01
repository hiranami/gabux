import React from 'react';
import euportImg from '../assets/euport.jpg';

export default function PortfolioLayout() {
  return (
    <main className="relative z-10 min-h-screen w-full flex flex-col justify-center items-center px-[20px] py-10 md:py-16 text-white overflow-y-auto">
      
      {/* Central Hero Section: Left Text + Portrait Photo + Right Text */}
      <div className="relative w-full max-w-[calc(100vw-40px)] lg:max-w-7xl flex items-center justify-center gap-6 sm:gap-12 md:gap-16 lg:gap-24 mb-12 md:mb-16">
        
        {/* Left Label: "Sobre mim" */}
        <div className="flex-1 text-right">
          <span className="font-editorial-ultrabold text-sm sm:text-base md:text-lg lg:text-xl text-neutral-200 tracking-tight select-none">
            Sobre mim
          </span>
        </div>

        {/* Central Portrait Photo */}
        <div className="relative shrink-0 w-44 sm:w-56 md:w-64 lg:w-72 aspect-[3/4] overflow-hidden rounded-sm shadow-2xl border border-neutral-800/80 bg-neutral-900 group">
          <img 
            src={euportImg} 
            alt="Eu - Designer & Strategist UX/UI" 
            className="w-full h-full object-cover object-center grayscale contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Right Label: "About me" */}
        <div className="flex-1 text-left">
          <span className="font-editorial-ultrabold text-sm sm:text-base md:text-lg lg:text-xl text-neutral-200 tracking-tight select-none">
            About me
          </span>
        </div>

      </div>

      {/* Bottom Main Headline Block - Wider width with ~20px margin and larger typography */}
      <div className="w-full max-w-[calc(100vw-40px)] lg:max-w-[1400px] text-center px-[20px]">
        <h1 className="font-mori-semibold text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.35rem] leading-[1.25] md:leading-[1.28] tracking-wide text-white uppercase font-bold select-text drop-shadow-md">
          CONSTRUO SOLUÇÕES EM UX E UI<br className="hidden sm:inline" />{' '}
          COM WORKFLOW BASEADO EM I.A + FIGMA<br className="hidden sm:inline" />{' '}
          GERANDO RESULTADOS WEB & MOBILE<br className="hidden sm:inline" />{' '}
          ROBUSTOS E IMPACTANTES.
        </h1>
      </div>

    </main>
  );
}
