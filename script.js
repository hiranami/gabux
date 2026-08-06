// --- 0. INITIALIZE LENIS SMOOTH SCROLL ---
let lenis;
if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true
    });
    window.lenis = lenis;
    
    // Check if we should skip preloader immediately
    const checkSkip = sessionStorage.getItem('skip_preloader') === 'true' || 
                      window.location.hash === '#projetos' || 
                      window.location.search.includes('skip_preloader') ||
                      !document.getElementById('preloader');
    if (checkSkip) {
        lenis.start();
    } else {
        lenis.stop();
    }

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
}

// --- PRELOADER WITH DEVICE LANGUAGE DETECTION & SCROLL LOCK ---
document.documentElement.style.overflowY = 'scroll';
document.body.style.overflowY = 'scroll';

function preventPreloaderScroll(e) {
    e.preventDefault();
}

function preventPreloaderKeys(e) {
    const scrollKeys = ['Space', 'PageUp', 'PageDown', 'ArrowUp', 'ArrowDown', 'Home', 'End'];
    if (scrollKeys.includes(e.code)) {
        e.preventDefault();
    }
}

window.addEventListener('wheel', preventPreloaderScroll, { passive: false });
window.addEventListener('touchmove', preventPreloaderScroll, { passive: false });
window.addEventListener('keydown', preventPreloaderKeys, { passive: false });

function revealHeroTitles() {
    const subTitleText = document.getElementById('sub-title-text');
    const mainTitleText = document.getElementById('main-title-text');
    const btnHeroContactMobile = document.getElementById('btn-hero-contact-mobile');

    setTimeout(() => {
        if (subTitleText) {
            subTitleText.style.opacity = '1';
            subTitleText.style.transform = 'translateY(0)';
        }
    }, 120);

    setTimeout(() => {
        if (mainTitleText) {
            mainTitleText.style.opacity = '1';
            mainTitleText.style.transform = 'translateY(0)';
        }
        if (btnHeroContactMobile) {
            btnHeroContactMobile.style.opacity = '1';
            btnHeroContactMobile.style.transform = 'translateY(0)';
            btnHeroContactMobile.style.pointerEvents = 'auto';
        }
    }, 350);
}

function runPreloader() {
    const shouldSkipPreloader = sessionStorage.getItem('skip_preloader') === 'true' || 
                                window.location.hash === '#projetos' || 
                                window.location.search.includes('skip_preloader');

    const preloader = document.getElementById('preloader');

    if (shouldSkipPreloader) {
        if (preloader) {
            preloader.style.display = 'none';
            preloader.remove();
        }
        window.removeEventListener('wheel', preventPreloaderScroll);
        window.removeEventListener('touchmove', preventPreloaderScroll);
        window.removeEventListener('keydown', preventPreloaderKeys);
        document.documentElement.style.overflowY = '';
        document.body.style.overflowY = '';
        sessionStorage.removeItem('skip_preloader');

        if (typeof lenis !== 'undefined' && lenis) {
            lenis.start();
        }

        revealHeroTitles();

        setTimeout(() => {
            if (typeof lenis !== 'undefined' && lenis) {
                lenis.start();
            }
            if (typeof ScrollTrigger !== 'undefined') {
                ScrollTrigger.refresh();
            }
        }, 150);
        return;
    }

    const userLang = navigator.language || navigator.userLanguage || 'pt';
    const isPt = userLang.toLowerCase().startsWith('pt');
    const preloaderLabel = document.getElementById('preloader-label');
    if (preloaderLabel) {
        preloaderLabel.innerText = isPt ? 'Carregando' : 'Loading';
    } else {
        const preloaderText = document.getElementById('preloader-text');
        if (preloaderText) {
            preloaderText.innerHTML = (isPt ? 'Carregando' : 'Loading') + '<span class="preloader-dots"><span>.</span><span>.</span><span>.</span></span>';
        }
    }

    const barFill = document.getElementById('preloader-bar');

    setTimeout(() => {
        if (barFill) barFill.style.width = '100%';
    }, 50);

    setTimeout(() => {
        if (preloader) {
            preloader.style.opacity = '0';
            preloader.style.pointerEvents = 'none';
            revealHeroTitles();
            setTimeout(() => {
                sessionStorage.setItem('site_visited', 'true');
                if (preloader.parentNode) preloader.remove();
                window.removeEventListener('wheel', preventPreloaderScroll);
                window.removeEventListener('touchmove', preventPreloaderScroll);
                window.removeEventListener('keydown', preventPreloaderKeys);
                document.documentElement.style.overflowY = '';
                document.body.style.overflowY = '';
                if (typeof lenis !== 'undefined' && lenis) lenis.start();
                if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
            }, 500);
        }
    }, 1800);
}

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', runPreloader);
} else {
    runPreloader();
}

// --- 1. TRANSLATION DICTIONARY (PT <-> EN FULL INTERFACE) ---
const i18n = {
    pt: {
        navHome: "Início", navAbout: "Sobre Mim", navServices: "O que entrego",
        navProjects: "Projetos", txtCv: "Currículo", txtContact: "Fale comigo",
        heroH5: "Olá, me chamo Gabriel, sou",
        heroLine1: "UX/UI Designer e transformo ideias complexas em interfaces ", heroH1Em: "funcionais e escaláveis", heroLine2Post: " de alta conversão com Figma e Inteligência Artificial.",
        lblSobrePt: "Sobre mim", lblSobreEn: "About me",
        decryptText: "Agilizo a criação de protótipos e produtos sem abrir mão da consistência visual, acessibilidade, hierarquia de informação e usabilidade, unindo Figma e Desenvolvimento com IA.",
        themeDark: "desligado", themeLight: "ligado",
        entregoTitle: "O que entrego",
        delivLine1: "SAAS & MICRO SAAS",
        delivSub1: "Arquitetura de informação e interfaces completas para SaaS de educação, saúde, fintechs e RH com foco em experiência e eficiência. Reduzo a taxa de abandono (churn) criando fluxos de onboarding simples, fluxos claros e protótipos em código para validação rápida com investidores e usuários.",
        delivLine2: "PÁGINAS FOCADAS EM CONVERSÃO",
        delivSub2: "Desenvolvo Landing Pages estáticas ou animadas (Framer/Next.js/React/GSAP) para startups em fase de captação, validação ou lançamento otimizado para SEO, carregamento rápido e integração com ferramentas de métricas e analytics.",
        delivLine3: "DASHBOARDS & CRMS",
        delivSub3: "Estruturação de sistemas de gestão e análise de dados como os de setores de logística, financeiro e pessoal, com foco em hierarquia visual, contexto, e fácil usabilidade.",
        entregoBottom: "Atuo com métodos ágeis, sem ignorar etapas cruciais, e utilizando uma stack atualizada com Figma e Framer aliados com programação por IA, do início ao fim.",
        txtExpand: "expandir", txtHide: "ocultar",
        projetosTitle: "Projetos",
        projStudySub: "Projeto de estudo",
        projFreelanceSub: "Projeto Real - Freelance",
        proj1Desc: "App mobile de viagens onde o usuário pode fazer reservas em hospedagens parceiras.",
        proj2Desc: "Aplicação Web e Mobile de compra e venda com opção de loja local.",
        proj3Desc: "Aplicação Web e Mobile de gerenciamento e agendamento de vagas em estacionamentos.",
        proj4Desc: "Aplicativo mobile de monitoramento urbano em tempo real",
        btnVisualizarProjeto: "Ver detalhes",
        footerSecondaryTitle: "Que tal criarmos algo incrível juntos?",
        footerCtaBtn: "Vamos conversar",
        footerBackTop: "Voltar ao topo",
        footerRights: "©2026. Desenvolvido por gab.ux. Todos os direitos reservados.",
        mobileClose: "Fechar",
        lblVisitors: "N de Visitantes"
    },
    en: {
        navHome: "Home", navAbout: "About Me", navServices: "Services",
        navProjects: "Projects", txtCv: "CV", txtContact: "Contact Me",
        heroH5: "Hello, I'm Gabriel, I'm a",
        heroLine1: "UX/UI Designer turning complex ideas into ", heroH1Em: "functional and scalable", heroLine2Post: " high-converting interfaces with Figma and AI.",
        lblSobrePt: "Sobre mim", lblSobreEn: "About me",
        decryptText: "I accelerate prototype and product creation without sacrificing visual consistency, accessibility, information hierarchy, and usability, combining Figma and AI Development.",
        themeDark: "off", themeLight: "on",
        entregoTitle: "What I deliver",
        delivLine1: "SAAS & MICRO SAAS",
        delivSub1: "Information architecture and complete interfaces for education, healthcare, fintech, and HR SaaS focused on experience and efficiency. I reduce churn rate by creating simple onboarding flows, clear user journeys, and coded prototypes for fast validation with investors and users.",
        delivLine2: "CONVERSION-FOCUSED PAGES",
        delivSub2: "Static or animated development (Framer/Next.js/React/GSAP) of Landing Pages for startups in fundraising, validation, or launch phases optimized for SEO, fast loading, and integration with analytics tools.",
        delivLine3: "DASHBOARDS & CRMS",
        delivSub3: "Structuring management systems and data analytics for logistics, financial, and HR sectors, focusing on visual hierarchy, context, and effortless usability.",
        entregoBottom: "I work with agile methodologies without skipping crucial steps, using an updated stack with Figma and Framer combined with AI coding from start to finish.",
        txtExpand: "expand", txtHide: "hide",
        projetosTitle: "Projects",
        projStudySub: "Study project",
        projFreelanceSub: "Real Project - Freelance",
        proj1Desc: "Travel mobile app where users can book partner accommodations.",
        proj2Desc: "Web and Mobile e-commerce application with local store option.",
        proj3Desc: "Web and Mobile application for parking space management and booking.",
        proj4Desc: "Mobile application for real-time urban monitoring",
        btnVisualizarProjeto: "View details",
        footerSecondaryTitle: "Let's create something incredible together?",
        footerCtaBtn: "Let's talk",
        footerBackTop: "Back to top",
        footerRights: "©2026. Developed by gab.ux. All rights reserved.",
        mobileClose: "Close",
        lblVisitors: "Visitors"
    }
};

let currentLang = 'pt';
let currentTheme = 'dark';

// --- 2. THEME & TRANSLATION TOGGLE LOGIC ---
const btnTheme = document.getElementById('btn-theme');
const btnTranslate = document.getElementById('btn-translate');
const logoImg = document.getElementById('logo-img');
const imgLantern = document.getElementById('img-lantern');
const txtLanternStatus = document.getElementById('txt-lantern-status');
const imgTranslate = document.getElementById('img-translate');
const imgCv = document.getElementById('img-cv');

const iconFigma = document.getElementById('icon-figma');
const iconFramer = document.getElementById('icon-framer');
const iconCode = document.getElementById('icon-code');
const iconAi = document.getElementById('icon-ai');
const iconPs = document.getElementById('icon-ps');

const imgLinkedin = document.getElementById('img-linkedin');
const imgBehance = document.getElementById('img-behance');
const imgEnviar = document.getElementById('img-enviar');
const imgBackTop = document.getElementById('img-back-top');

const imgMobileMenu = document.getElementById('img-mobile-menu');
const mobileImgCv = document.getElementById('mobile-img-cv');

function setElText(id, text) {
    const el = typeof id === 'string' ? document.getElementById(id) : id;
    if (el) el.innerText = text;
}

function setElSrc(id, src) {
    const el = typeof id === 'string' ? document.getElementById(id) : id;
    if (el) el.src = src;
}

function updateThemeAssets() {
    const data = i18n[currentLang];
    if (currentTheme === 'dark') {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        setElSrc('logo-img', "files/imagens/imagens-dark-mode/logo-gabux-light.svg");
        setElSrc('img-lantern', "files/imagens/bttn-lantern-off-dark.svg");
        setElText('txt-lantern-status', data.themeDark);
        setElSrc('img-translate', "files/imagens/imagens-dark-mode/icon-translate-light.svg");
        setElSrc('img-cv', "files/imagens/imagens-dark-mode/icon-download-light.svg");

        setElSrc('icon-figma', "files/imagens/imagens-dark-mode/icon-figma-light.svg");
        setElSrc('icon-framer', "files/imagens/imagens-dark-mode/icon-framer-light.svg");
        setElSrc('icon-code', "files/imagens/imagens-dark-mode/icon-code-light.svg");
        setElSrc('icon-ai', "files/imagens/imagens-dark-mode/icon-ai-light.svg");
        setElSrc('icon-ps', "files/imagens/imagens-dark-mode/icon-photoshop-light.svg");

        document.querySelectorAll('.img-linkedin-icon').forEach(el => el.src = "files/imagens/imagens-dark-mode/logo-linkedin-light.svg");
        document.querySelectorAll('.img-behance-icon').forEach(el => el.src = "files/imagens/imagens-dark-mode/logo-behance-light.svg");
        setElSrc('img-enviar', "files/imagens/imagens-dark-mode/icon-enviar-light.svg");
        setElSrc('img-back-top', "files/imagens/imagens-dark-mode/icon-topo-página.svg");

        setElSrc('img-mobile-menu', "files/imagens/imagens-dark-mode/icon-menu-light.svg");
        setElSrc('mobile-img-cv', "files/imagens/imagens-dark-mode/icon-download-light.svg");
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        setElSrc('logo-img', "files/imagens/imagens-light-mode/logo-gabux-dark.svg");
        setElSrc('img-lantern', "files/imagens/bttn-lantern-on-light.svg");
        setElText('txt-lantern-status', data.themeLight);
        setElSrc('img-translate', "files/imagens/imagens-light-mode/icon-translate-dark.svg");
        setElSrc('img-cv', "files/imagens/imagens-light-mode/icon-download-dark.svg");

        setElSrc('icon-figma', "files/imagens/imagens-light-mode/icon-figma-dark.svg");
        setElSrc('icon-framer', "files/imagens/imagens-light-mode/icon-framer-dark.svg");
        setElSrc('icon-code', "files/imagens/imagens-light-mode/icon-code-dark.svg");
        setElSrc('icon-ai', "files/imagens/imagens-light-mode/icon-ai-dark.svg");
        setElSrc('icon-ps', "files/imagens/imagens-light-mode/icon-photoshop-dark.svg");

        document.querySelectorAll('.img-linkedin-icon').forEach(el => el.src = "files/imagens/imagens-light-mode/logo-linkedin-dark.svg");
        document.querySelectorAll('.img-behance-icon').forEach(el => el.src = "files/imagens/imagens-light-mode/logo-behance-dark.svg");
        setElSrc('img-enviar', "files/imagens/imagens-light-mode/icon-enviar-dark.svg");
        setElSrc('img-back-top', "files/imagens/imagens-light-mode/icon-topo-página.svg");

        setElSrc('img-mobile-menu', "files/imagens/imagens-light-mode/icon-menu-dark.svg");
        setElSrc('mobile-img-cv', "files/imagens/imagens-light-mode/icon-download-dark.svg");
    }
}

function updateLanguageTexts() {
    const data = i18n[currentLang];
    setElText('nav-home', data.navHome);
    setElText('nav-about', data.navAbout);
    setElText('nav-services', data.navServices);
    setElText('nav-projects', data.navProjects);
    setElText('txt-cv', data.txtCv);
    setElText('txt-contact', data.txtContact);

    setElText('mobile-nav-home', data.navHome);
    setElText('mobile-nav-about', data.navAbout);
    setElText('mobile-nav-services', data.navServices);
    setElText('mobile-nav-projects', data.navProjects);
    setElText('mobile-txt-cv', data.txtCv);
    setElText('mobile-txt-close', data.mobileClose);
    setElText('txt-contact-hero-mobile', data.txtContact);

    // Dynamic CV PDF download path switching based on active language (pt-br / eng)
    const cvLinkDesktop = document.getElementById('link-cv');
    const cvLinkMobile = document.getElementById('mobile-link-cv');

    const pdfPath = currentLang === 'en' 
        ? 'files/Curriculo/eng/Resume%20Gabriel%20Rodrigues.pdf' 
        : 'files/Curriculo/pt-br/Curriculo%20Gabriel%20Fonseca.pdf';
    
    const pdfFilename = currentLang === 'en'
        ? 'Resume Gabriel Rodrigues.pdf'
        : 'Curriculo Gabriel Fonseca.pdf';

    if (cvLinkDesktop) {
        cvLinkDesktop.href = pdfPath;
        cvLinkDesktop.setAttribute('download', pdfFilename);
    }
    if (cvLinkMobile) {
        cvLinkMobile.href = pdfPath;
        cvLinkMobile.setAttribute('download', pdfFilename);
    }

    setElText('sub-title-text', data.heroH5);
    setElText('title-line-1', data.heroLine1);
    setElText('title-em', data.heroH1Em);
    setElText('title-line-2-post', data.heroLine2Post);
    setElText('lbl-sobre-pt', data.lblSobrePt);
    setElText('lbl-sobre-en', data.lblSobreEn);
    setElText('txt-sobre-mim-header-title', data.lblSobrePt);
    rawDecryptTargetText = data.decryptText;

    // Section "O que entrego" texts update
    setElText('txt-entrego-title', data.entregoTitle);
    setElText('deliv-line-1', data.delivLine1);
    setElText('deliv-sub-1', data.delivSub1);
    setElText('deliv-line-2', data.delivLine2);
    setElText('deliv-sub-2', data.delivSub2);
    setElText('deliv-line-3', data.delivLine3);
    setElText('deliv-sub-3', data.delivSub3);
    setElText('txt-entrego-bottom', data.entregoBottom);

    // Section "Projetos" texts update
    setElText('txt-projetos-header-title', data.projetosTitle);
    setElText('proj1-sub', data.projStudySub);
    setElText('proj2-sub', data.projStudySub);
    setElText('proj3-sub', data.projStudySub);
    setElText('proj4-sub', data.projFreelanceSub);

    setElText('proj1-desc', data.proj1Desc);
    setElText('proj2-desc', data.proj2Desc);
    setElText('proj3-desc', data.proj3Desc);
    setElText('proj4-desc', data.proj4Desc);

    [1, 2, 3, 4].forEach(id => {
        setElText(`txt-btn-proj-${id}`, data.btnVisualizarProjeto);
    });

    // Section "Footer" texts update
    setElText('txt-footer-secondary', data.footerSecondaryTitle);
    setElText('mobile-txt-footer-secondary', data.footerSecondaryTitle);

    // Re-wrap CTA text with per-letter spans for shutter wave blink
    if (typeof rewrapFooterCtaText === 'function') {
        rewrapFooterCtaText(data.footerCtaBtn);
    }

    setElText('txt-footer-rights', data.footerRights);
    setElText('mobile-txt-footer-rights', data.footerRights);

    const txtSocialLabel = data.footerSocialLabel || (currentLang === 'pt' ? 'Me siga nas minhas redes:' : 'Follow me on my social media:');
    setElText('txt-footer-social-label', txtSocialLabel);
    setElText('mobile-txt-footer-social-label', txtSocialLabel);

    setElText('lbl-visitor-title', data.lblVisitors || "N de Visitantes");
    setElText('mobile-lbl-visitor-title', data.lblVisitors || "N de Visitantes");

    // Toggle buttons text update
    [1, 2, 3, 4].forEach(id => {
        const btn = document.getElementById(`btn-toggle-${id}`);
        const row = btn ? btn.closest('.deliverable-row') : null;
        if (row && row.classList.contains('expanded')) {
            if (btn) btn.innerText = data.txtHide;
        } else {
            if (btn) btn.innerText = data.txtExpand;
        }
    });

    // Update Theme status text according to active language
    setElText(txtLanternStatus, currentTheme === 'dark' ? data.themeDark : data.themeLight);

    // REALTIME DECRYPT UPDATE matching current scroll position immediately!
    if (typeof updateTextDecryptOnScroll === 'function') {
        updateTextDecryptOnScroll();
    }
}

if (btnTheme) {
    btnTheme.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        updateThemeAssets();
    });
}

if (btnTranslate) {
    btnTranslate.addEventListener('click', () => {
        currentLang = currentLang === 'pt' ? 'en' : 'pt';
        updateLanguageTexts();
    });
}

// --- MOBILE NAVIGATION OVERLAY DRAWER LOGIC ---
const btnMobileMenu = document.getElementById('btn-mobile-menu');
const btnMobileNavClose = document.getElementById('btn-mobile-nav-close');
const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
const mobileBtnContact = document.getElementById('mobile-btn-contact');

function openMobileNav() {
    if (mobileNavOverlay) {
        mobileNavOverlay.classList.add('active');
        mobileNavOverlay.setAttribute('aria-hidden', 'false');
    }
}

function closeMobileNav() {
    if (mobileNavOverlay) {
        mobileNavOverlay.classList.remove('active');
        mobileNavOverlay.setAttribute('aria-hidden', 'true');
    }
}

if (btnMobileMenu) btnMobileMenu.addEventListener('click', openMobileNav);
if (btnMobileNavClose) btnMobileNavClose.addEventListener('click', closeMobileNav);

// Auto-close mobile menu drawer when resizing to desktop >= 841px
window.addEventListener('resize', () => {
    if (window.innerWidth >= 841) {
        closeMobileNav();
    }
});

// --- SMOOTH SCROLL NAVIGATION TARGETS HANDLERS (DESKTOP & MOBILE) ---
function scrollToHeroDobra2() {
    // Exact scroll position where Dobra 2 of Hero section (Main Title) is fully revealed
    // Dobra 1 (Logo resize) finishes at scrollRange (~800px). Dobra 2 titles reveal between scrollRange and scrollRange + 400px.
    const heroEl = document.getElementById('hero');
    const heroHeight = heroEl ? heroEl.clientHeight : window.innerHeight;
    const scrollRange = (typeof window.scrollRange !== 'undefined' && window.scrollRange) 
        ? window.scrollRange 
        : (heroHeight * 0.85);

    const targetY = Math.max(0, scrollRange + 420);

    window.scrollTo({
        top: targetY,
        behavior: 'smooth'
    });
}

function scrollToSectionId(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}

// Bind Navigation Links
const navLinkBindings = [
    { id: 'nav-home', action: () => scrollToHeroDobra2() },
    { id: 'mobile-nav-home', action: () => { closeMobileNav(); scrollToHeroDobra2(); } },
    { id: 'nav-about', action: () => scrollToSectionId('sobre-mim-wrapper') },
    { id: 'mobile-nav-about', action: () => { closeMobileNav(); scrollToSectionId('sobre-mim-wrapper'); } },
    { id: 'nav-services', action: () => scrollToSectionId('entrego') },
    { id: 'mobile-nav-services', action: () => { closeMobileNav(); scrollToSectionId('entrego'); } },
    { id: 'nav-projects', action: () => scrollToSectionId('projetos') },
    { id: 'mobile-nav-projects', action: () => { closeMobileNav(); scrollToSectionId('projetos'); } }
];

navLinkBindings.forEach(binding => {
    const element = document.getElementById(binding.id);
    if (element) {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            binding.action();
        });
    }
});

const btnHeroContactMobile = document.getElementById('btn-hero-contact-mobile');
if (btnHeroContactMobile) {
    btnHeroContactMobile.addEventListener('click', () => {
        if (typeof openMailbox === 'function') openMailbox();
    });
}

// --- 3. NATIVE TAG MATRIX CANVAS (WITH PROPORTIONAL MOBILE REDUCTION & NO REPULSION ON MOBILE) ---
const tagsData = ['motion', 'web', 'design', 'cloud', 'creative', 'effects', 'ui/ux', 'code', 'frontend', 'visuals', 'system', 'react', 'nextjs', 'interface', 'animation', 'framer', 'figma', 'prototype', 'startup', 'innovation', 'development', 'javascript', 'html5', 'css3', 'backend', 'fullstack', 'database', 'api', 'serverless', 'mobile', 'responsive', 'performance', 'agile', 'scrum', 'marketing', 'seo', 'svg', 'canvas', 'webgl', '3d', 'tailwind', 'sass', 'webpack', 'vite', 'git', 'github', 'supabase', 'user experience', 'user interface', 'wireframe', 'usability', 'typography', 'interaction', 'user flow', 'design system', 'prototyping', 'heuristics', 'user research', 'personas', 'mockup', 'information architecture', 'visual grammar', 'microinteractions', 'ui kit', 'layout', 'grid system', 'accessibility'];
const hero = document.getElementById('hero');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let width = hero.clientWidth, height = hero.clientHeight;
canvas.width = width; canvas.height = height;
const tags = [];
const mouse = { x: -1000, y: -1000 };
const EXCLUSION_RADIUS_WORDS = 250, EXCLUSION_RADIUS_LINES = 220;

function pointLineDistance(px, py, x1, y1, x2, y2) {
    const A = px - x1, B = py - y1, C = x2 - x1, D = y2 - y1;
    const dot = A * C + B * D, len_sq = C * C + D * D;
    let param = -1; if (len_sq != 0) param = dot / len_sq;
    let xx, yy;
    if (param < 0) { xx = x1; yy = y1; } else if (param > 1) { xx = x2; yy = y2; } else { xx = x1 + param * C; yy = y1 + param * D; }
    const dx = px - xx, dy = py - yy; return Math.sqrt(dx * dx + dy * dy);
}

const cols = 12, rows = 9;
const cellW = width / cols, cellH = height / rows;
let validCells = [];
for(let c = 0; c < cols; c++) {
    for(let r = 0; r < rows; r++) {
        const dx = (c * cellW + cellW / 2) - (width / 2), dy = (r * cellH + cellH / 2) - (height / 2);
        if (Math.sqrt(dx*dx + dy*dy) > EXCLUSION_RADIUS_WORDS - 20) validCells.push({ c, r });
    }
}
for (let i = validCells.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [validCells[i], validCells[j]] = [validCells[j], validCells[i]];
}

let activeTagsData = tagsData;
if (window.innerWidth <= 640) {
    activeTagsData = tagsData.filter((_, idx) => idx % 4 === 0).slice(0, 16);
} else if (window.innerWidth <= 840) {
    activeTagsData = tagsData.filter((_, idx) => idx % 3 === 0).slice(0, 24);
}

activeTagsData.forEach((text, i) => {
    const el = document.createElement('div');
    el.classList.add('tag'); el.innerText = text;
    hero.appendChild(el);
    const cell = validCells[i % validCells.length];
    const originX = cell.c * cellW + (cellW * 0.1) + Math.random() * (cellW * 0.8);
    const originY = cell.r * cellH + (cellH * 0.1) + Math.random() * (cellH * 0.8);
    const tagObj = { el, originX, originY, timeOffsetX: Math.random() * Math.PI * 2, timeOffsetY: Math.random() * Math.PI * 2, speedX: 0.2 + Math.random() * 0.3, speedY: 0.2 + Math.random() * 0.3, amplitude: 15 + Math.random() * 20, width: 0, height: 0, currentDrawX: originX, currentDrawY: originY, currentScale: 0.85, currentOpacity: 0.2, isHovered: false };
    el.addEventListener('mouseenter', () => tagObj.isHovered = true);
    el.addEventListener('mouseleave', () => tagObj.isHovered = false);
    tags.push(tagObj);
});

setTimeout(() => { tags.forEach(tag => { tag.width = tag.el.offsetWidth; tag.height = tag.el.offsetHeight; }); }, 50);

let isHeroVisible = true;
if ('IntersectionObserver' in window && hero) {
    const heroObs = new IntersectionObserver((entries) => {
        entries.forEach(e => isHeroVisible = e.isIntersecting);
    }, { threshold: 0.01 });
    heroObs.observe(hero);
}

function animateTags() {
    if (!isHeroVisible) {
        requestAnimationFrame(animateTags);
        return;
    }
    ctx.clearRect(0, 0, width, height);
    const time = Date.now() * 0.001;
    const isTouchMobileDevice = (window.innerWidth <= 840) || ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    tags.forEach(tag => {
        const baseX = tag.originX + Math.sin(time * tag.speedX + tag.timeOffsetX) * tag.amplitude;
        const baseY = tag.originY + Math.cos(time * tag.speedY + tag.timeOffsetY) * tag.amplitude;
        let targetX = baseX, targetY = baseY, targetScale = 0.85, targetOpacity = 0.20;
        
        if (!isTouchMobileDevice) {
            const dx = mouse.x - baseX, dy = mouse.y - baseY, dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < 260) {
                const force = (260 - dist) / 260;
                targetScale = 0.85 + force * 0.40; targetOpacity = 0.20 + force * 0.8;
                targetX += dx * force * 0.22; targetY += dy * force * 0.22;
            }
        }

        if (tag.isHovered) targetScale = 1.30;
        tag.currentDrawX += (targetX - tag.currentDrawX) * 0.08;
        tag.currentDrawY += (targetY - tag.currentDrawY) * 0.08;
        tag.currentScale += (targetScale - tag.currentScale) * 0.12;
        tag.currentOpacity += (targetOpacity - tag.currentOpacity) * 0.12;
        tag.el.style.left = `${tag.currentDrawX - tag.width / 2}px`;
        tag.el.style.top = `${tag.currentDrawY - tag.height / 2}px`;
        tag.el.style.transform = `scale(${tag.currentScale})`;

        let borderAlpha = (tag.currentOpacity - 0.20) * 1.8;
        borderAlpha = Math.max(0, Math.min(1, borderAlpha));
        
        if(!tag.isHovered) {
            tag.el.style.color = currentTheme === 'dark' 
                ? `rgba(255, 255, 255, ${tag.currentOpacity})` 
                : `rgba(0, 0, 0, ${tag.currentOpacity * 1.2})`;
            tag.el.style.backgroundColor = "transparent";
            tag.el.style.borderColor = currentTheme === 'dark' 
                ? `rgba(255, 255, 255, ${borderAlpha * 0.5})` 
                : `rgba(0, 0, 0, ${borderAlpha * 0.4})`;
        } else {
            tag.el.style.color = currentTheme === 'dark' ? "#000000" : "#ffffff";
            tag.el.style.backgroundColor = currentTheme === 'dark' ? "#ffffff" : "#000000";
            tag.el.style.borderColor = currentTheme === 'dark' ? "#ffffff" : "#000000";
        }
    });
    ctx.lineWidth = 1;
    const strokeRgb = currentTheme === 'dark' ? '255, 255, 255' : '0, 0, 0';
    for (let i = 0; i < tags.length; i++) {
        for (let j = i + 1; j < tags.length; j++) {
            const dx = tags[i].currentDrawX - tags[j].currentDrawX, dy = tags[i].currentDrawY - tags[j].currentDrawY, dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < 250) {
                const distToCenter = pointLineDistance(width/2, height/2, tags[i].currentDrawX, tags[i].currentDrawY, tags[j].currentDrawX, tags[j].currentDrawY);
                if (distToCenter > EXCLUSION_RADIUS_LINES) {
                    let opacity = (1 - (dist / 250)) * 0.25;
                    ctx.beginPath(); ctx.moveTo(tags[i].currentDrawX, tags[i].currentDrawY); ctx.lineTo(tags[j].currentDrawX, tags[j].currentDrawY);
                    ctx.strokeStyle = `rgba(${strokeRgb}, ${opacity})`; ctx.stroke();
                }
            }
        }
    }
    requestAnimationFrame(animateTags);
}

// --- 4. NATIVE INTERACTION ENGINE ---
const logoWrapper = document.getElementById('logo-wrapper');
const resizeUI = document.getElementById('resize-ui');
const headerEl = document.getElementById('header');
const subTitleText = document.getElementById('sub-title-text');
const mainTitleText = document.getElementById('main-title-text');

const defaultLogoW = window.innerWidth <= 840 ? Math.min(260, Math.floor(window.innerWidth * 0.70)) : 300;
let targetLogoWidth = defaultLogoW;
let currentLogoWidth = defaultLogoW;
let isResizing = false;

function initResize(e) {
    e.preventDefault(); e.stopPropagation();
    isResizing = true;

    const handleResizeMove = (evt) => {
        if (!isResizing) return;
        const clientX = evt.touches ? evt.touches[0].clientX : evt.clientX;
        const rect = logoWrapper.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        let newWidth = Math.abs(clientX - centerX) * 2;
        const minWidth = window.innerWidth <= 640 ? 180 : 300;
        const maxWidth = window.innerWidth <= 640 ? 320 : 540;
        if (newWidth < minWidth) newWidth = minWidth; 
        if (newWidth > maxWidth) newWidth = maxWidth; 
        targetLogoWidth = newWidth;
    };

    const stopResize = () => {
        isResizing = false;
        window.removeEventListener('mousemove', handleResizeMove);
        window.removeEventListener('touchmove', handleResizeMove);
        window.removeEventListener('mouseup', stopResize);
        window.removeEventListener('touchend', stopResize);
    };

    window.addEventListener('mousemove', handleResizeMove);
    window.addEventListener('touchmove', handleResizeMove, { passive: false });
    window.addEventListener('mouseup', stopResize);
    window.addEventListener('touchend', stopResize);
}

document.querySelectorAll('.handle').forEach(h => {
    h.addEventListener('mousedown', initResize);
    h.addEventListener('touchstart', initResize, { passive: false });
});

let curScroll = 0, tarScroll = 0;

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

function savePortfolioState() {
    sessionStorage.setItem('portfolio_scroll_y', window.scrollY);
    sessionStorage.setItem('portfolio_theme', currentTheme);
    sessionStorage.setItem('portfolio_lang', currentLang);
}

window.addEventListener('scroll', () => {
    tarScroll = window.scrollY;
    savePortfolioState();
});
window.addEventListener('beforeunload', savePortfolioState);
window.addEventListener('pagehide', savePortfolioState);

function restorePortfolioState() {
    const savedTheme = sessionStorage.getItem('portfolio_theme');
    if (savedTheme) {
        currentTheme = savedTheme;
        updateThemeAssets();
    }
    const savedLang = sessionStorage.getItem('portfolio_lang');
    if (savedLang) {
        currentLang = savedLang;
        updateLanguageTexts();
    }

    const scrollToProjetos = sessionStorage.getItem('scroll_to_projetos') === 'true';
    if (scrollToProjetos || window.location.hash === '#projetos') {
        sessionStorage.removeItem('scroll_to_projetos');
        if (window.location.hash) {
            try {
                history.replaceState(null, '', window.location.pathname + window.location.search);
            } catch(e) {}
        }
        setTimeout(() => {
            const projEl = document.getElementById('projetos') || document.getElementById('secao-projetos-wrapper');
            if (projEl) {
                const topPos = projEl.offsetTop;
                curScroll = topPos;
                tarScroll = topPos;
                window.scrollTo(0, topPos);
                if (typeof lenis !== 'undefined' && lenis) {
                    lenis.scrollTo(topPos, { immediate: true });
                }
            }
        }, 30);
    } else {
        // Force page to open at the top (Hero section)
        sessionStorage.removeItem('portfolio_scroll_y');
        curScroll = 0;
        tarScroll = 0;
        window.scrollTo(0, 0);
        if (typeof lenis !== 'undefined' && lenis) {
            lenis.scrollTo(0, { immediate: true });
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    restorePortfolioState();
});

function mainLoop() {
    curScroll += (tarScroll - curScroll) * 0.1;

    updateEntregoScrollAnimations();
    updateSobreMimHeaderScroll();
    updateProjetosScrollAnimations();

    requestAnimationFrame(mainLoop);
}

// --- NOISE GRAIN CANVAS ENGINE FOR SECTIONS (O QUE ENTREGO, PROJETOS, FOOTER) ---
function initSectionGrains() {
    const canvasIds = ['entrego-grain-canvas', 'projetos-grain-canvas', 'footer-grain-canvas'];
    const canvases = canvasIds.map(id => document.getElementById(id)).filter(Boolean);
    if (canvases.length === 0) return;

    const visibleCanvases = new Set();

    function resizeAll() {
        canvases.forEach(c => {
            const parent = c.parentElement;
            if (parent) {
                c.width = Math.max(250, Math.floor(parent.clientWidth * 0.4));
                c.height = Math.max(250, Math.floor(parent.clientHeight * 0.4));
            }
        });
    }
    resizeAll();
    window.addEventListener('resize', resizeAll, { passive: true });

    function renderGrains() {
        canvases.forEach(c => {
            if (!visibleCanvases.has(c)) return;
            const ctx = c.getContext('2d', { alpha: true });
            const w = c.width, h = c.height;
            if (w === 0 || h === 0) return;
            const imgData = ctx.createImageData(w, h);
            const data = imgData.data;
            for (let i = 0; i < data.length; i += 4) {
                const noise = (Math.random() * 255) | 0;
                data[i] = noise;
                data[i+1] = noise;
                data[i+2] = noise;
                data[i+3] = 20;
            }
            ctx.putImageData(imgData, 0, 0);
        });
    }

    if ('IntersectionObserver' in window) {
        const grainObs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    visibleCanvases.add(e.target);
                } else {
                    visibleCanvases.delete(e.target);
                }
            });
        }, { threshold: 0.01 });
        canvases.forEach(c => grainObs.observe(c));
    }

    setInterval(() => {
        if (visibleCanvases.size > 0) renderGrains();
    }, 150);
}

window.addEventListener('load', () => {
    animateTags();
    mainLoop();
    initSectionGrains();
    initProjetosList();
    const img = document.getElementById('logo-img');
    img.style.filter = "blur(15px)"; img.style.opacity = "0";
    setTimeout(() => {
        img.style.transition = "all 1s ease";
        img.style.filter = "none"; img.style.opacity = "1";
    }, 500);
});

window.addEventListener('mousemove', e => {
    const rect = hero.getBoundingClientRect();
    mouse.x = e.clientX - rect.left; mouse.y = e.clientY - rect.top;
});

window.addEventListener('resize', () => {
    width = hero.clientWidth; height = hero.clientHeight;
    canvas.width = width; canvas.height = height;
});

// --- 5. FOLD 3: THREE.JS CHROMA SHADER BACKGROUND ---
function initChromaShader() {
    const container = document.getElementById('chroma-canvas');
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const vertexShader = `
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = vec4(position, 1.0); }
    `;

    const fragmentShader = `
        uniform float uTime;
        uniform vec2 uResolution;
        varying vec2 vUv;

        mat2 rotate2D(float angle) {
            float s = sin(angle); float c = cos(angle);
            return mat2(c, -s, s, c);
        }

        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

        float snoise(vec2 v) {
            const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
            vec2 i  = floor(v + dot(v, C.yy) );
            vec2 x0 = v -   i + dot(i, C.xx);
            vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
            vec4 x12 = x0.xyxy + C.xxzz;
            x12.xy -= i1;
            i = mod289(i);
            vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
            vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
            m = m*m; m = m*m;
            vec3 x = 2.0 * fract(p * C.www) - 1.0;
            vec3 h = abs(x) - 0.5;
            vec3 ox = floor(x + 0.5);
            vec3 a0 = x - ox;
            m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
            vec3 g;
            g.x  = a0.x  * x0.x  + h.x  * x0.y;
            g.yz = a0.yz * x12.xz + h.yz * x12.yw;
            return 130.0 * dot(m, g);
        }

        float getPleatHeight(vec2 st, float t) {
            vec2 p = rotate2D(-0.7) * st;
            float waveDistort = snoise(p * 2.5 + vec2(t * 0.25, -t * 0.2)) * 0.12;
            float microDistort = sin(p.y * 8.0 + t * 0.6) * 0.04;
            float xPos = (p.x + waveDistort + microDistort) * 18.0;
            float ridgePattern = abs(sin(xPos));
            float pleatHeight = pow(1.0 - ridgePattern, 1.6);
            float depthMod = snoise(p * 1.2 + t * 0.15) * 0.15;
            return pleatHeight * (0.85 + depthMod);
        }

        vec3 getNormal(vec2 st, float t) {
            vec2 eps = vec2(0.002, 0.0);
            float h  = getPleatHeight(st, t);
            float hx = getPleatHeight(st + eps.xy, t);
            float hy = getPleatHeight(st + eps.yx, t);
            vec3 dx = vec3(eps.x, 0.0, (hx - h) * 1.8);
            vec3 dy = vec3(0.0, eps.x, (hy - h) * 1.8);
            return normalize(cross(dx, dy));
        }

        void main() {
            vec2 st = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
            float t = uTime * 0.4;
            vec3 N = getNormal(st, t);
            vec3 V = vec3(0.0, 0.0, 1.0);

            float pleatH = getPleatHeight(st, t);
            vec3 ridgeBaseShade = mix(vec3(0.005, 0.005, 0.008), vec3(0.035, 0.035, 0.045), pleatH);

            vec2 lightPos1 = vec2(sin(t * 0.5) * 0.5, cos(t * 0.4) * 0.3);
            vec2 lightPos2 = vec2(cos(t * 0.35) * 0.35, sin(t * 0.6) * 0.25);
            float d1 = length(st - lightPos1);
            float d2 = length(st - lightPos2);
            float spotMask1 = smoothstep(0.70, 0.0, d1);
            float spotMask2 = smoothstep(0.55, 0.0, d2) * 0.6;
            float totalSpotMask = clamp(spotMask1 + spotMask2, 0.0, 1.0);

            vec3 L1 = normalize(vec3(lightPos1 - st, 0.8));
            vec3 H1 = normalize(L1 + V);
            float NdotH1 = max(dot(N, H1), 0.0);
            float specSharp = pow(NdotH1, 48.0) * totalSpotMask * 0.5;
            float specSoft  = pow(NdotH1, 16.0) * totalSpotMask * 0.25;

            vec2 rotatedSt = rotate2D(-0.7) * st;
            float chromaPhase = (rotatedSt.x * 12.0 + N.x * 3.0 + N.y * 2.0 + t * 0.3);
            vec3 rainbow = 0.5 + 0.5 * cos(6.28318 * (chromaPhase + vec3(0.0, 0.33, 0.67)));
            vec3 chromaSpecular = mix(vec3(specSharp), rainbow * specSharp * 1.1, totalSpotMask * 0.7);

            vec3 L_ambient = normalize(vec3(-0.4, 0.6, 1.0));
            vec3 H_ambient = normalize(L_ambient + V);
            float specAmbient = pow(max(dot(N, H_ambient), 0.0), 28.0) * 0.06;

            vec3 finalColor = ridgeBaseShade;
            finalColor += vec3(specAmbient);
            finalColor += vec3(specSoft * 0.2);
            finalColor += chromaSpecular * 0.6;
            finalColor *= 0.7;

            gl_FragColor = vec4(finalColor, 0.65);
        }
    `;

    const material = new THREE.ShaderMaterial({
        vertexShader, fragmentShader,
        uniforms: {
            uTime: { value: 0 },
            uResolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) }
        },
        transparent: true, depthWrite: false, depthTest: false
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let isChromaVisible = true;
    let chromaRafId = null;

    const startTime = performance.now();
    function animateChroma(currentTime) {
        if (!isChromaVisible) return;
        material.uniforms.uTime.value = (currentTime - startTime) * 0.001;
        renderer.render(scene, camera);
        chromaRafId = requestAnimationFrame(animateChroma);
    }

    if ('IntersectionObserver' in window && container) {
        const chromaObs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                const wasVisible = isChromaVisible;
                isChromaVisible = e.isIntersecting;
                if (isChromaVisible && !wasVisible) {
                    chromaRafId = requestAnimationFrame(animateChroma);
                }
            });
        }, { threshold: 0.01 });
        chromaObs.observe(container);
    }

    chromaRafId = requestAnimationFrame(animateChroma);

    window.addEventListener('resize', () => {
        if (!container) return;
        renderer.setSize(container.clientWidth, container.clientHeight);
        material.uniforms.uResolution.value.set(container.clientWidth, container.clientHeight);
    }, { passive: true });
}

// --- 6. SCROLL-TRIGGERED PINNED TEXT DECRYPT EFFECT FOR FOLD 3 ---
let rawDecryptTargetText = i18n.pt.decryptText;
const decryptEl = document.getElementById('decrypt-text');
const MATRIX_CHARS = '!<>-_\\/[]{}—=+*^?#________!@#$%&*';

function updateTextDecryptOnScroll() {
    if (!decryptEl) return;
    const wrapper = document.getElementById('sobre-mim-wrapper');
    if (!wrapper) return;

    const rect = wrapper.getBoundingClientRect();
    const totalScroll = wrapper.offsetHeight - window.innerHeight;
    const scrolled = Math.max(0, -rect.top);
    let progress = Math.max(0, Math.min(1, scrolled / (totalScroll || 1)));

    const totalLength = rawDecryptTargetText.length;
    const revealedLength = Math.floor(progress * totalLength);

    const result = rawDecryptTargetText.split('').map((char, index) => {
        if (char === ' ' || char === '\n') return char;
        if (index < revealedLength) return char;
        if (index < revealedLength + 8) return MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        return MATRIX_CHARS[index % MATRIX_CHARS.length];
    }).join('');

    decryptEl.innerText = result;
}

// --- SCROLL-LINKED HEADER FOR SOBRE MIM SECTION ---
function updateSobreMimHeaderScroll() {
    const sobreMimSection = document.getElementById('sobre-mim');
    const sobreMimHeader = document.getElementById('sobre-mim-header');
    if (!sobreMimSection || !sobreMimHeader) return;

    const rect = sobreMimSection.getBoundingClientRect();
    const winHeight = window.innerHeight;

    if (rect.top <= winHeight * 0.85) {
        sobreMimHeader.classList.add('active');
    } else {
        sobreMimHeader.classList.remove('active');
    }
}

// --- 8. FOLD 4: SECTION "O QUE ENTREGO" ENGINE ---
const entregoSection = document.getElementById('entrego');
const entregoHeader = document.getElementById('entrego-header');
const logoFigma3D = document.getElementById('logo-figma-3d');
const logoClaude3D = document.getElementById('logo-claude-3d');
const logoFramer3D = document.getElementById('logo-framer-3d');

function updateEntregoScrollAnimations() {
    if (!entregoSection || !entregoHeader) return;
    const rect = entregoSection.getBoundingClientRect();
    const winHeight = window.innerHeight;

    if (rect.top <= winHeight * 0.85) {
        entregoHeader.classList.add('active');
    } else {
        entregoHeader.classList.remove('active');
    }

    const totalTravel = rect.height + winHeight;
    const currentPos = winHeight - rect.top;
    const progress = Math.max(0, Math.min(1, currentPos / totalTravel));

    const offsetVal = 250 - (progress * 570);

    if (logoFigma3D) {
        logoFigma3D.style.transform = `translateY(${offsetVal * 1.15}px) rotate(${12 - progress * 24}deg)`;
    }
    if (logoClaude3D) {
        logoClaude3D.style.transform = `translateY(${offsetVal * 0.9}px) rotate(${80 - progress * 20}deg)`;
    }
    if (logoFramer3D) {
        logoFramer3D.style.transform = `translateY(${offsetVal * 1.35}px) rotate(${8 - progress * 16}deg)`;
    }

    if (window.innerWidth <= 840) {
        const rows = entregoSection.querySelectorAll('.deliverable-row');
        const screenCenter = winHeight / 2;
        let closestRow = null;
        let minDistance = Infinity;

        rows.forEach(row => {
            const rRect = row.getBoundingClientRect();
            const rCenter = rRect.top + rRect.height / 2;
            const dist = Math.abs(rCenter - screenCenter);
            if (dist < minDistance && rRect.top < winHeight && rRect.bottom > 0) {
                minDistance = dist;
                closestRow = row;
            }
        });

        rows.forEach(row => {
            if (row === closestRow) {
                row.classList.add('active-scroll');
            } else {
                row.classList.remove('active-scroll');
            }
        });
    }
}

document.querySelectorAll('.deliverable-row').forEach(row => {
    row.addEventListener('click', () => {
        const btn = row.querySelector('.btn-expand-toggle');
        const data = i18n[currentLang];
        if (row.classList.contains('expanded')) {
            row.classList.remove('expanded');
            if (btn) btn.innerText = data.txtExpand;
        } else {
            row.classList.add('expanded');
            if (btn) btn.innerText = data.txtHide;
        }
    });
});

// --- 9. FOLD 5: SECTION "PROJETOS" — TEXT LIST HOVER (DESKTOP) & SCROLL (MOBILE) ---
const projetosSection = document.getElementById('projetos');
const projetosHeader  = document.getElementById('projetos-header');
let meRowsProjetos = [];
let isProjetosVisible = false;

function initProjetosList() {
    meRowsProjetos = Array.from(document.querySelectorAll('.projeto-row'));
    if (meRowsProjetos.length === 0) return;

    if ('IntersectionObserver' in window && projetosSection) {
        const projObs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                isProjetosVisible = e.isIntersecting;
                if (e.isIntersecting && projetosHeader) {
                    projetosHeader.classList.add('active');
                }
            });
        }, { threshold: 0.05 });
        projObs.observe(projetosSection);
    }

    // Desktop: Hover state activation
    meRowsProjetos.forEach(row => {
        row.addEventListener('mouseenter', () => {
            if (window.innerWidth > 840) {
                meRowsProjetos.forEach(r => r.classList.remove('active'));
                row.classList.add('active');
            }
        });
    });
}

function updateProjetosScrollAnimations() {
    if (!projetosSection || !isProjetosVisible) return;

    // Mobile: Scroll-based activation (closest row to screen center)
    if (window.innerWidth <= 840 && meRowsProjetos.length > 0) {
        const winHeight = window.innerHeight;
        const screenCenter = winHeight / 2;
        let closestRow = null;
        let minDistance = Infinity;

        meRowsProjetos.forEach(row => {
            const rRect = row.getBoundingClientRect();
            const rCenter = rRect.top + rRect.height / 2;
            const dist = Math.abs(rCenter - screenCenter);
            if (dist < minDistance && rRect.top < winHeight && rRect.bottom > 0) {
                minDistance = dist;
                closestRow = row;
            }
        });

        meRowsProjetos.forEach(row => {
            if (row === closestRow) {
                if (!row.classList.contains('active-scroll')) {
                    row.classList.add('active-scroll', 'active');
                }
            } else {
                if (row.classList.contains('active-scroll')) {
                    row.classList.remove('active-scroll', 'active');
                }
            }
        });
    }
}

// --- 10. FOLD 6: VERSION 0.1 - MONOCHROME THEME ASCII SHADER ENGINES ---
function initAsciiShader() {
    const canvases = [
        document.getElementById('ascii-shader-canvas-desktop'),
        document.getElementById('ascii-shader-canvas-mobile'),
        document.getElementById('ascii-shader-canvas')
    ].filter(Boolean);

    if (canvases.length === 0) return;

    canvases.forEach(canvas => {
        const ctx = canvas.getContext('2d');
        function resizeAsciiCanvas() {
            if (!canvas.parentElement) return;
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.parentElement.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0) return;
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
        }
        resizeAsciiCanvas();
        window.addEventListener('resize', resizeAsciiCanvas);

        const startTime = performance.now();

        function getPhaseWeights(p) {
            const d1 = Math.min(Math.abs(p - 0), Math.abs(p - 4));
            const d2 = Math.abs(p - 1);
            const d3 = Math.abs(p - 2);
            const d4 = Math.abs(p - 3);

            const f = (d) => (d >= 1 ? 0 : 0.5 * (1 + Math.cos(d * Math.PI)));
            const w1 = f(d1), w2 = f(d2), w3 = f(d3), w4 = f(d4);
            const sum = w1 + w2 + w3 + w4 || 1;
            return [w1 / sum, w2 / sum, w3 / sum, w4 / sum];
        }

        const starRamp = ["+", "*", "✦", "★", "*"];
        const redRamp = ["i", "!", "|", "║", "!"];
        const matrixGlyphs = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "@", "#", "$", "%", "&", "*", "+", "=", "?", "X", "Z", "¥", "§", "¶", "µ", "∆", "Ω"];
        let isAsciiVisible = true;
        let asciiRafId = null;

        function renderAsciiFrame(now) {
            if (!isAsciiVisible) return;
            const width = canvas.clientWidth || (canvas.parentElement ? canvas.parentElement.clientWidth : 0);
            const height = canvas.clientHeight || (canvas.parentElement ? canvas.parentElement.clientHeight : 0);
            if (width === 0 || height === 0) {
                asciiRafId = requestAnimationFrame(renderAsciiFrame);
                return;
            }

            ctx.clearRect(0, 0, width, height);

            const elapsed = (now - startTime) * 0.001;
            const cycleDuration = 16.0;
            const phaseProgress = ((elapsed % cycleDuration) / cycleDuration) * 4.0;
            const [w1, w2, w3, w4] = getPhaseWeights(phaseProgress);

            const themeRgb = currentTheme === 'dark' ? [246, 251, 255] : [10, 10, 10];
            const [rCol, gCol, bCol] = themeRgb;

            const cellW = 12;
            const cellH = 15;
            const cols = Math.ceil(width / cellW);
            const rows = Math.ceil(height / cellH);

            ctx.font = `11px 'Share Tech Mono', 'Consolas', 'Courier New', monospace`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            for (let r = 0; r < rows; r++) {
                const y = r * cellH + cellH / 2;
                for (let c = 0; c < cols; c++) {
                    const x = c * cellW + cellW / 2;

                    const wave1 = (Math.sin(c * 0.08 + Math.sin(r * 0.06 + elapsed * 1.2) * 1.8 + elapsed * 1.5) *
                                   Math.cos(r * 0.07 - Math.cos(c * 0.05 - elapsed * 0.9) * 1.4 - elapsed * 1.2) + 1) * 0.5;

                    const snakeWave = (Math.sin(c * 0.08 + Math.cos(r * 0.10 + elapsed * 1.6) * 1.4 + elapsed * 1.2) + 1) * 0.5;

                    const colSpeed = 4.0 + (c % 7) * 1.2;
                    const matrixY = (r + elapsed * colSpeed) % (rows + 16);
                    const matrixHead = Math.floor(matrixY);
                    const distFromHead = (r - matrixHead + rows + 16) % (rows + 16);
                    const tailLen = 10 + (c % 6);
                    const isMatrixHead = distFromHead === 0;
                    const matrixVal = distFromHead < tailLen ? 1.0 - (distFromHead / tailLen) : 0.20;

                    const redStream = (Math.sin((c * 0.7 + r * 1.4) * 0.12 - elapsed * 3.8) + 1) * 0.5;

                    let char = '/';
                    let alpha = 0.25;

                    if (w1 > 0.4) {
                        char = '/';
                        alpha = 0.15 + Math.pow(wave1, 1.2) * 0.82;
                    } else if (w2 > 0.4) {
                        const starIdx = Math.min(starRamp.length - 1, Math.floor(snakeWave * starRamp.length));
                        char = starRamp[starIdx];
                        alpha = 0.28 + snakeWave * 0.68;
                    } else if (w3 > 0.4) {
                        const glyphSeed = (c * 31 + r * 17 + Math.floor(elapsed * 10.0) * 13) % matrixGlyphs.length;
                        char = matrixGlyphs[glyphSeed];
                        alpha = isMatrixHead ? 0.98 : (0.22 + matrixVal * 0.73);
                    } else if (w4 > 0.4) {
                        const redIdx = Math.min(redRamp.length - 1, Math.floor(redStream * redRamp.length));
                        char = redRamp[redIdx];
                        alpha = 0.32 + redStream * 0.65;
                    } else {
                        const intensity = w1 * wave1 + w2 * snakeWave + w3 * matrixVal + w4 * redStream;
                        alpha = Math.max(0.18, Math.min(0.95, 0.20 + intensity * 0.75));
                        if (w1 > 0.25) char = '/';
                        else if (w2 > 0.25) char = starRamp[Math.floor(snakeWave * starRamp.length) % starRamp.length];
                        else if (w3 > 0.25) char = matrixGlyphs[(c * 31 + r * 17) % matrixGlyphs.length];
                        else char = redRamp[Math.floor(redStream * redRamp.length) % redRamp.length];
                    }

                    ctx.fillStyle = `rgba(${rCol}, ${gCol}, ${bCol}, ${alpha.toFixed(3)})`;
                    ctx.fillText(char, x, y);
                }
            }

            asciiRafId = requestAnimationFrame(renderAsciiFrame);
        }

        if ('IntersectionObserver' in window && canvas.parentElement) {
            const asciiObs = new IntersectionObserver((entries) => {
                entries.forEach(e => {
                    const wasVisible = isAsciiVisible;
                    isAsciiVisible = e.isIntersecting;
                    if (isAsciiVisible && !wasVisible) {
                        asciiRafId = requestAnimationFrame(renderAsciiFrame);
                    }
                });
            }, { threshold: 0.01 });
            asciiObs.observe(canvas.parentElement);
        }

        asciiRafId = requestAnimationFrame(renderAsciiFrame);
    });
}

const btnBackTop = document.getElementById('btn-back-top');
if (btnBackTop) {
    btnBackTop.addEventListener('click', () => {
        if (lenis) lenis.scrollTo('#hero');
        else window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

let isScrollTicking = false;
function handleGlobalScrollTick() {
    updateTextDecryptOnScroll();
    isScrollTicking = false;
}

window.addEventListener('scroll', () => {
    if (!isScrollTicking) {
        isScrollTicking = true;
        requestAnimationFrame(handleGlobalScrollTick);
    }
}, { passive: true });

if (typeof lenis !== 'undefined' && lenis) {
    lenis.on('scroll', () => {
        if (!isScrollTicking) {
            isScrollTicking = true;
            requestAnimationFrame(handleGlobalScrollTick);
        }
    });
}

// --- FOOTER CTA: TEXT SHUTTER WAVE BLINK ANIMATION ---
function wrapTextInLetterSpans(h1El, text) {
    h1El.innerHTML = text.split('').map((ch, i) => {
        if (ch === ' ') return `<span class="footer-cta-letter" data-idx="${i}">&nbsp;</span>`;
        return `<span class="footer-cta-letter" data-idx="${i}">${ch}</span>`;
    }).join('');
}

function initFooterCtaShutter() {
    const pairs = [
        { containerId: 'btn-footer-cta', textId: 'footer-cta-text' },
        { containerId: 'btn-footer-cta-mobile', textId: 'mobile-footer-cta-text' }
    ];

    pairs.forEach(({ containerId, textId }) => {
        const h1El = document.getElementById(textId);
        const container = document.getElementById(containerId);
        if (!h1El || !container) return;

        wrapTextInLetterSpans(h1El, h1El.textContent.trim());

        container.addEventListener('mouseenter', () => {
            const liveLetters = h1El.querySelectorAll('.footer-cta-letter');
            if (!liveLetters.length) return;

            const waveDelay = 35;
            const blinkDuration = 90;

            liveLetters.forEach((span, i) => {
                setTimeout(() => {
                    span.style.opacity = '0';
                    setTimeout(() => {
                        span.style.opacity = '1';
                    }, blinkDuration);
                }, i * waveDelay);
            });
        });
    });
}

function rewrapFooterCtaText(newText) {
    ['footer-cta-text', 'mobile-footer-cta-text'].forEach(id => {
        const h1El = document.getElementById(id);
        if (h1El) wrapTextInLetterSpans(h1El, newText);
    });
}

// --- MAIL BOX CONTACT OVERLAY ENGINE ---
function initMailboxOverlay() {
    const overlay = document.getElementById('mailbox-overlay');
    const closeBtn = document.getElementById('btn-mailbox-close');
    const formStep = document.getElementById('mailbox-form-step');
    const successStep = document.getElementById('mailbox-success-step');
    
    const nameInput = document.getElementById('mailbox-name-input');
    const emailInput = document.getElementById('mailbox-email-input');
    const emailError = document.getElementById('mailbox-email-error');
    
    const subjectInput = document.getElementById('mailbox-subject-input');
    const messageTextarea = document.getElementById('mailbox-message-textarea');
    
    const btnAttach = document.getElementById('btn-mailbox-attach');
    const fileInput = document.getElementById('mailbox-file-input');
    const attachedFilesList = document.getElementById('mailbox-attached-files-list');
    
    const btnLink = document.getElementById('btn-mailbox-link');
    const btnEmoji = document.getElementById('btn-mailbox-emoji');
    const emojiPicker = document.getElementById('mailbox-emoji-picker');
    
    const actionBtn = document.getElementById('btn-mailbox-action');
    const actionTxt = document.getElementById('txt-mailbox-action');
    const actionIcon = document.getElementById('icon-mailbox-action');

    const btnContactHeader = document.getElementById('btn-contact');
    const btnFooterCta = document.getElementById('btn-footer-cta');
    const btnHeroContactMobile = document.getElementById('btn-hero-contact-mobile');
    const btnFooterCtaMobile = document.getElementById('btn-footer-cta-mobile');

    const formData = {
        recipient: 'gabrielrf19@gmail.com',
        name: '',
        email: '',
        subject: '',
        message: '',
        files: []
    };

    function validateEmail(emailStr) {
        const trimmed = (emailStr || '').trim();
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!re.test(trimmed)) return false;
        const parts = trimmed.split('@');
        if (parts.length !== 2) return false;
        const domain = parts[1].toLowerCase();
        if (domain.includes('..') || domain.endsWith('.')) return false;
        const knownTypos = ['meil.cmo', 'gmal.com', 'gmeil.com', 'yaho.com', 'hotmeil.com', 'outlok.com', 'gmail.cmo', 'yahoo.cmo'];
        if (knownTypos.includes(domain)) return false;
        return true;
    }

    const modalContainer = document.getElementById('mailbox-modal-container');

    function resetMailboxForm() {
        formData.name = '';
        formData.email = '';
        formData.subject = '';
        formData.message = '';
        formData.files = [];

        if (nameInput) { nameInput.value = ''; nameInput.style.borderColor = ''; }
        if (emailInput) { emailInput.value = ''; emailInput.style.borderColor = ''; }
        if (subjectInput) { subjectInput.value = ''; subjectInput.style.borderColor = ''; }
        if (messageTextarea) { messageTextarea.value = ''; messageTextarea.style.borderColor = ''; }
        if (fileInput) fileInput.value = '';
        if (attachedFilesList) attachedFilesList.innerHTML = '';
        if (emailError) emailError.style.display = 'none';
        if (emojiPicker) emojiPicker.style.display = 'none';

        if (actionBtn) actionBtn.disabled = false;
        if (actionTxt) actionTxt.textContent = 'Enviar';
        if (actionIcon) actionIcon.innerHTML = '▶';

        if (modalContainer) {
            modalContainer.style.maxWidth = '650px';
            modalContainer.style.alignItems = 'flex-end';
        }
        if (formStep) formStep.style.display = 'block';
        if (successStep) successStep.style.display = 'none';
        if (closeBtn) closeBtn.style.display = 'block';
    }

    function openMailbox() {
        resetMailboxForm();
        if (!overlay) return;
        overlay.classList.add('active');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.classList.add('mailbox-open');
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
        if (typeof lenis !== 'undefined' && lenis) {
            lenis.stop();
        }

        setTimeout(() => {
            if (nameInput) nameInput.focus({ preventScroll: true });
        }, 100);
    }

    function closeMailbox() {
        if (!overlay) return;
        overlay.classList.remove('active');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('mailbox-open');
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        if (typeof lenis !== 'undefined' && lenis) {
            lenis.start();
        }
        if (modalContainer) modalContainer.style.transform = 'none';
        resetMailboxForm();
    }

    if (overlay) {
        overlay.addEventListener('touchmove', (e) => {
            if (!modalContainer || !modalContainer.contains(e.target)) {
                e.preventDefault();
            }
        }, { passive: false });
    }

    function handleSubmitForm() {
        const nameVal = nameInput ? nameInput.value.trim() : '';
        const emailVal = emailInput ? emailInput.value.trim() : '';
        const subjVal = subjectInput ? subjectInput.value.trim() : '';
        const msgVal = messageTextarea ? messageTextarea.value.trim() : '';

        let hasError = false;

        if (!nameVal || nameVal.length < 2) {
            if (nameInput) nameInput.style.borderColor = '#FF3300';
            hasError = true;
        } else {
            if (nameInput) nameInput.style.borderColor = '';
        }

        if (!validateEmail(emailVal)) {
            if (emailInput) emailInput.style.borderColor = '#FF3300';
            hasError = true;
        } else {
            if (emailInput) emailInput.style.borderColor = '';
        }

        if (!subjVal) {
            if (subjectInput) subjectInput.style.borderColor = '#FF3300';
            hasError = true;
        } else {
            if (subjectInput) subjectInput.style.borderColor = '';
        }

        if (!msgVal) {
            if (messageTextarea) messageTextarea.style.borderColor = '#FF3300';
            hasError = true;
        } else {
            if (messageTextarea) messageTextarea.style.borderColor = '';
        }

        if (hasError) {
            if (emailError) {
                emailError.textContent = 'Por favor, preencha todos os campos corretamente.';
                emailError.style.display = 'block';
            }
            setTimeout(() => {
                if (emailError) emailError.style.display = 'none';
            }, 3000);
            return;
        }

        formData.name = nameVal;
        formData.email = emailVal;
        formData.subject = subjVal;
        formData.message = msgVal;
        
        if (actionBtn) actionBtn.disabled = true;
        if (actionTxt) actionTxt.textContent = 'Enviando...';
        if (actionIcon) actionIcon.innerHTML = '<span class="mailbox-spinner"></span>';
        
        let hiddenIframe = document.getElementById('formsubmit-iframe');
        if (!hiddenIframe) {
            hiddenIframe = document.createElement('iframe');
            hiddenIframe.id = 'formsubmit-iframe';
            hiddenIframe.name = 'formsubmit-iframe';
            hiddenIframe.style.display = 'none';
            document.body.appendChild(hiddenIframe);
        }

        let hiddenForm = document.getElementById('formsubmit-form');
        if (hiddenForm) hiddenForm.remove();

        hiddenForm = document.createElement('form');
        hiddenForm.id = 'formsubmit-form';
        hiddenForm.action = 'https://formsubmit.co/gabrielrf19@gmail.com';
        hiddenForm.method = 'POST';
        hiddenForm.target = 'formsubmit-iframe';
        hiddenForm.enctype = 'multipart/form-data';
        hiddenForm.style.display = 'none';

        const addInput = (name, val) => {
            const inp = document.createElement('input');
            inp.type = 'hidden';
            inp.name = name;
            inp.value = val;
            hiddenForm.appendChild(inp);
        };

        addInput('name', formData.name);
        addInput('email', formData.email);
        addInput('_subject', formData.subject);
        addInput('message', formData.message);
        addInput('_captcha', 'false');
        addInput('_template', 'table');

        if (formData.files && formData.files.length > 0) {
            const fileData = new DataTransfer();
            formData.files.forEach(f => fileData.items.add(f));
            const fileInp = document.createElement('input');
            fileInp.type = 'file';
            fileInp.name = 'attachment';
            fileInp.files = fileData.files;
            hiddenForm.appendChild(fileInp);
        }

        document.body.appendChild(hiddenForm);

        setTimeout(() => {
            hiddenForm.submit();
            setTimeout(() => {
                if (formStep) formStep.style.display = 'none';
                if (successStep) successStep.style.display = 'block';
                if (closeBtn) closeBtn.style.display = 'none';
            }, 600);
        }, 100);
    }

    if (actionBtn) actionBtn.addEventListener('click', handleSubmitForm);
    if (closeBtn) closeBtn.addEventListener('click', closeMailbox);

    const thanksCloseBtn = document.getElementById('btn-mailbox-thanks-close');
    if (thanksCloseBtn) thanksCloseBtn.addEventListener('click', closeMailbox);

    [btnContactHeader, btnFooterCta, btnHeroContactMobile, btnFooterCtaMobile].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                openMailbox();
            });
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay && overlay.classList.contains('active')) {
            closeMailbox();
        }
    });

    // File upload
    if (btnAttach && fileInput) {
        btnAttach.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', (e) => {
            const newFiles = Array.from(e.target.files);
            formData.files = [...formData.files, ...newFiles];
            renderAttachedFiles();
        });
    }

    function renderAttachedFiles() {
        if (!attachedFilesList) return;
        attachedFilesList.innerHTML = '';
        formData.files.forEach((f, idx) => {
            const chip = document.createElement('div');
            chip.className = 'mailbox-file-chip';
            chip.innerHTML = `<span>${f.name}</span><button type="button" data-idx="${idx}">✕</button>`;
            chip.querySelector('button').addEventListener('click', (e) => {
                const removeIdx = parseInt(e.target.getAttribute('data-idx'));
                formData.files.splice(removeIdx, 1);
                renderAttachedFiles();
            });
            attachedFilesList.appendChild(chip);
        });
    }

    // Emoji picker
    if (btnEmoji && emojiPicker) {
        btnEmoji.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = emojiPicker.style.display === 'grid' || emojiPicker.style.display === 'flex';
            emojiPicker.style.display = isOpen ? 'none' : 'grid';
        });
        document.addEventListener('click', (e) => {
            if (emojiPicker && !emojiPicker.contains(e.target) && e.target !== btnEmoji) {
                emojiPicker.style.display = 'none';
            }
        });

        emojiPicker.querySelectorAll('.emoji-item').forEach(item => {
            item.addEventListener('click', () => {
                if (messageTextarea) {
                    messageTextarea.value += item.textContent;
                    messageTextarea.focus();
                }
                emojiPicker.style.display = 'none';
            });
        });
    }
}

// --- MOBILE BURGER DRAWER EVENT HANDLERS ---
function initMobileMenuDrawer() {
    const btnMobileBurger = document.getElementById('btn-mobile-burger');
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
    const btnMobileNavClose = document.getElementById('btn-mobile-nav-close');

    if (btnMobileBurger && mobileNavOverlay) {
        btnMobileBurger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            mobileNavOverlay.classList.add('active');
            mobileNavOverlay.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        });
    }

    if (btnMobileNavClose && mobileNavOverlay) {
        btnMobileNavClose.addEventListener('click', (e) => {
            e.preventDefault();
            mobileNavOverlay.classList.remove('active');
            mobileNavOverlay.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        });
    }

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            if (mobileNavOverlay) {
                mobileNavOverlay.classList.remove('active');
                mobileNavOverlay.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
                document.documentElement.style.overflow = '';
            }

            if (href === '#hero' || link.id === 'mobile-nav-home' || href === '/') {
                e.preventDefault();
                curScroll = 0;
                tarScroll = 0;
                window.scrollTo({ top: 0, behavior: 'smooth' });
                if (typeof lenis !== 'undefined' && lenis) {
                    lenis.scrollTo(0);
                }
            } else if (href && href.startsWith('#')) {
                const targetEl = document.querySelector(href);
                if (targetEl) {
                    e.preventDefault();
                    const targetPos = targetEl.offsetTop;
                    curScroll = targetPos;
                    tarScroll = targetPos;
                    window.scrollTo({ top: targetPos, behavior: 'smooth' });
                    if (typeof lenis !== 'undefined' && lenis) {
                        lenis.scrollTo(targetPos);
                    }
                }
            }
        });
    });
}

function initApp() {
    initChromaShader();
    initAsciiShader();
    initFooterCtaShutter();
    initMailboxOverlay();
    initMobileMenuDrawer();
    updateLanguageTexts();
    updateThemeAssets();
}

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
