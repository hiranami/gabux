import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const translations = {
  pt: {
    navHome: "Início",
    navAbout: "Sobre Mim",
    navServices: "O que entrego",
    navProjects: "Projetos",
    navCv: "Baixar currículo",
    navContact: "Fale comigo",
    
    heroH5: "BEM-VINDO AO MEU PORTFÓLIO",
    heroH1Pre: "UX/UI Designer Jr e ",
    heroH1Em: "explorador",
    heroH1Post: " de inovações",

    aboutLabelPt: "Sobre mim",
    aboutLabelEn: "About me",
    aboutDecryptText: "CONSTRUO SOLUÇÕES EM UX E UI ALIADO AO VIBE CODE EM UM WORKFLOW COMPLETO COM FOCO EM RESULTADOS E PRODUTOS DE ALTO VALOR.",

    themeDark: "Dark",
    themeLight: "Light"
  },
  en: {
    navHome: "Home",
    navAbout: "About Me",
    navServices: "Services",
    navProjects: "Projects",
    navCv: "Download CV",
    navContact: "Contact Me",

    heroH5: "WELCOME TO MY PORTFOLIO",
    heroH1Pre: "UX/UI Designer Jr and ",
    heroH1Em: "explorer",
    heroH1Post: " of innovations",

    aboutLabelPt: "Sobre mim",
    aboutLabelEn: "About me",
    aboutDecryptText: "BUILDING UX & UI SOLUTIONS COMBINED WITH VIBE CODE IN A COMPLETE WORKFLOW FOCUSED ON RESULTS AND HIGH-VALUE PRODUCTS.",

    themeDark: "Dark",
    themeLight: "Light"
  }
};

export function AppProvider({ children }) {
  const [theme, setTheme] = useState('dark'); // Default theme: dark
  const [lang, setLang] = useState('pt');     // Default lang: pt

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleLang = () => {
    setLang(prev => (prev === 'pt' ? 'en' : 'pt'));
  };

  const t = translations[lang];

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
  }, [theme]);

  return (
    <AppContext.Provider value={{ theme, lang, toggleTheme, toggleLang, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
