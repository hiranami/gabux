import React from 'react';
import ChromaBackground from './ChromaBackground';
import TextDecrypt from './TextDecrypt';
import { useApp } from '../context/AppContext';

import sobreMimImg from '/files/imagens/img-sobre-mim.svg';

// Skill icons
import figmaLight from '/files/imagens/imagens-dark-mode/icon-figma-light.svg';
import figmaDark from '/files/imagens/imagens-light-mode/icon-figma-dark.svg';
import framerLight from '/files/imagens/imagens-dark-mode/icon-framer-light.svg';
import framerDark from '/files/imagens/imagens-light-mode/icon-framer-dark.svg';
import codeLight from '/files/imagens/imagens-dark-mode/icon-code-light.svg';
import codeDark from '/files/imagens/imagens-light-mode/icon-code-dark.svg';
import aiLight from '/files/imagens/imagens-dark-mode/icon-ai-light.svg';
import aiDark from '/files/imagens/imagens-light-mode/icon-ai-dark.svg';
import psLight from '/files/imagens/imagens-dark-mode/icon-photoshop-light.svg';
import psDark from '/files/imagens/imagens-light-mode/icon-photoshop-dark.svg';

export default function AboutSection() {
  const { theme, t } = useApp();
  const isDark = theme === 'dark';

  const skills = [
    { name: 'Figma', icon: isDark ? figmaLight : figmaDark },
    { name: 'Framer', icon: isDark ? framerLight : framerDark },
    { name: 'VibeCode', icon: isDark ? codeLight : codeDark },
    { name: 'IA', icon: isDark ? aiLight : aiDark },
    { name: 'Photoshop', icon: isDark ? psLight : psDark },
  ];

  return (
    <section 
      id="sobre-mim" 
      className={`relative min-h-screen w-full flex flex-col justify-center items-center px-6 py-24 z-20 overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-[#0a0a0a] text-white' : 'bg-neutral-100 text-neutral-900'
      }`}
    >
      {/* 65% Opacity Autonomous Chroma Shader Background - Scoped strictly to Fold 3 */}
      <ChromaBackground />

      {/* Invisible Soft Gradient Transition Layer at Top Boundary */}
      <div 
        className="absolute top-0 left-0 w-full h-40 pointer-events-none z-10"
        style={{
          background: isDark
            ? 'linear-gradient(to bottom, #0d0d0d 0%, rgba(10,10,10,0.8) 50%, transparent 100%)'
            : 'linear-gradient(to bottom, #f7f7f8 0%, rgba(247,247,248,0.8) 50%, transparent 100%)'
        }}
      />

      {/* Main Content Container matching Figma frame 271:1178 (sobre mim) */}
      <div className="relative z-20 w-full max-w-6xl flex flex-col items-center justify-center">
        
        {/* Central Hero Block: Left Label + SVG Portrait Image + Right Label */}
        <div className="relative w-full flex items-center justify-center gap-6 sm:gap-12 md:gap-20 mb-14 md:mb-16">
          
          {/* Left Label: "Sobre mim" */}
          <div className="flex-1 text-right">
            <span className="font-editorial-ultrabold text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 dark:text-neutral-200 tracking-tight select-none">
              {t.aboutLabelPt}
            </span>
          </div>

          {/* Central Portrait SVG */}
          <div className="relative shrink-0 w-48 sm:w-60 md:w-72 lg:w-80 aspect-[3/4] overflow-hidden rounded-sm shadow-2xl border border-neutral-800/60 bg-black/40 group">
            <img 
              src={sobreMimImg} 
              alt="Sobre Mim - Gabux" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Right Label: "About me" */}
          <div className="flex-1 text-left">
            <span className="font-editorial-ultrabold text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 dark:text-neutral-200 tracking-tight select-none">
              {t.aboutLabelEn}
            </span>
          </div>

        </div>

        {/* Scroll-driven Text Decrypt Heading */}
        <div className="w-full max-w-[calc(100vw-40px)] lg:max-w-[1300px] text-center px-4 mb-14 md:mb-20">
          <h2 className="font-mori text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.65rem] leading-[1.3] md:leading-[1.35] uppercase font-semibold text-neutral-100 dark:text-white select-text">
            <TextDecrypt text={t.aboutDecryptText} />
          </h2>
        </div>

        {/* Skill Badges / Main Tools (Figma node 271:1190 -box-main-skills) */}
        <div className="w-full flex flex-col items-center gap-6">
          <div className="w-32 h-[1px] bg-neutral-800 dark:bg-neutral-700" />
          <span className="font-mori text-xs tracking-widest uppercase text-neutral-400">
            {t.aboutLabelPt} — Tools & Tech
          </span>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-2">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-2.5 px-4 py-2 rounded-full border text-xs font-mori font-medium transition-all hover:scale-105 ${
                  isDark 
                    ? 'bg-neutral-900/80 border-neutral-800 text-neutral-200 hover:border-neutral-600'
                    : 'bg-white/80 border-neutral-200 text-neutral-800 hover:border-neutral-400'
                }`}
              >
                <img src={skill.icon} alt={skill.name} className="w-4 h-4 object-contain" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Soft Bottom Gradient Fade */}
      <div 
        className="absolute bottom-0 left-0 w-full h-32 pointer-events-none z-10"
        style={{
          background: isDark
            ? 'linear-gradient(to top, #0a0a0a 0%, transparent 100%)'
            : 'linear-gradient(to top, #f7f7f8 0%, transparent 100%)'
        }}
      />
    </section>
  );
}
