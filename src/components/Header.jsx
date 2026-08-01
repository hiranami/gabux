import React from 'react';
import { useApp } from '../context/AppContext';

// Logo and Translate Icon imports
import logoLight from '/files/imagens/imagens-dark-mode/logo-gabux-light.svg';
import logoDark from '/files/imagens/imagens-light-mode/logo-gabux-dark.svg';
import translateLight from '/files/imagens/imagens-dark-mode/icon-translate-light.svg';
import translateDark from '/files/imagens/imagens-light-mode/icon-translate-dark.svg';
import downloadLight from '/files/imagens/imagens-dark-mode/icon-download-light.svg';
import downloadDark from '/files/imagens/imagens-light-mode/icon-download-dark.svg';

export default function Header({ logoOpacity = 0, isScrolled = false }) {
  const { theme, lang, toggleTheme, toggleLang, t } = useApp();

  const isDark = theme === 'dark';
  const logoSrc = isDark ? logoLight : logoDark;
  const translateSrc = isDark ? translateLight : translateDark;
  const downloadSrc = isDark ? downloadLight : downloadDark;

  return (
    <header 
      className={`fixed top-0 left-0 w-full h-[70px] z-[100] flex items-center justify-between px-6 md:px-12 transition-all duration-500 box-border border-b ${
        isDark 
          ? 'bg-black/70 border-white/5 text-white' 
          : 'bg-white/70 border-black/5 text-black'
      } backdrop-blur-md`}
      style={{
        opacity: isScrolled ? 1 : 0,
        pointerEvents: isScrolled ? 'auto' : 'none',
      }}
    >
      {/* Left Navigation Group */}
      <div className="flex items-center gap-6 md:gap-8 w-1/3">
        <a href="#hero" className="text-xs md:text-sm font-mori opacity-75 hover:opacity-100 transition-opacity">
          {t.navHome}
        </a>
        <a href="#sobre-mim" className="text-xs md:text-sm font-mori opacity-75 hover:opacity-100 transition-opacity">
          {t.navAbout}
        </a>
        <a href="#entrego" className="text-xs md:text-sm font-mori opacity-75 hover:opacity-100 transition-opacity hidden sm:inline">
          {t.navServices}
        </a>

        {/* Theme Toggle Button (Lantern / Dark Mode Switcher) */}
        <button 
          onClick={toggleTheme}
          className={`flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded border transition-all ${
            isDark 
              ? 'border-white/20 hover:border-white text-white/80 bg-white/5' 
              : 'border-black/20 hover:border-black text-black/80 bg-black/5'
          }`}
          title="Alternar Tema (Dark / Light)"
        >
          <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-amber-400 animate-pulse' : 'bg-blue-600'}`} />
          <span>{isDark ? 'Dark' : 'Light'}</span>
        </button>
      </div>

      {/* Center Logo & Translation Toggle Button Group */}
      <div className="flex items-center gap-3 justify-center w-1/3">
        <img 
          src={logoSrc} 
          alt="Gabux Logo" 
          className="h-8 md:h-9 object-contain transition-opacity duration-300"
        />

        {/* Translation Toggle Button positioned adjacent to logo */}
        <button 
          onClick={toggleLang}
          className="p-1.5 rounded-full hover:bg-white/10 dark:hover:bg-black/10 transition-transform active:scale-95"
          title={`Idioma atual: ${lang.toUpperCase()} - Clique para alternar`}
        >
          <img 
            src={translateSrc} 
            alt="Translate" 
            className="w-5 h-5 object-contain"
          />
        </button>
      </div>

      {/* Right Navigation Group */}
      <div className="flex items-center justify-end gap-6 md:gap-8 w-1/3">
        <a href="#projetos" className="text-xs md:text-sm font-mori opacity-75 hover:opacity-100 transition-opacity hidden md:inline">
          {t.navProjects}
        </a>

        <a 
          href="/files/currículo-gabux.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold font-mono transition-all duration-300 ${
            isDark
              ? 'bg-white text-black hover:bg-transparent hover:border-white hover:text-white border border-transparent'
              : 'bg-black text-white hover:bg-transparent hover:border-black hover:text-black border border-transparent'
          }`}
        >
          <span>{t.navCv}</span>
          <img src={downloadSrc} alt="Download CV" className="w-3.5 h-3.5 object-contain" />
        </a>
      </div>
    </header>
  );
}
