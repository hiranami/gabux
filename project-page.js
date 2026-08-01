// --- PROJECT PRESENTATION PAGE LOGIC ---

// 1. Theme Management (Always Dark Theme by default on opening presentation pages)
let currentTheme = 'dark';

function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('portfolio_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    
    if (theme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    }

    // Update theme toggle icons
    const iconLight = document.getElementById('icon-theme-light');
    const iconDark  = document.getElementById('icon-theme-dark');
    if (iconLight && iconDark) {
        if (theme === 'dark') {
            iconLight.style.display = 'none';
            iconDark.style.display  = 'block';
        } else {
            iconLight.style.display = 'block';
            iconDark.style.display  = 'none';
        }
    }

    // Update GabUX logo
    const headerLogo = document.getElementById('header-logo-img');
    if (headerLogo) {
        headerLogo.style.display = 'block';
        headerLogo.src = theme === 'dark' 
            ? 'files/imagens/imagens-dark-mode/logo-gabux-light.svg' 
            : 'files/imagens/imagens-light-mode/logo-gabux-dark.svg';
    }

    // Update Behance logo
    const behanceLogo = document.getElementById('behance-logo-img');
    if (behanceLogo) {
        behanceLogo.src = theme === 'dark' 
            ? 'files/imagens/imagens-dark-mode/logo-behance-light.svg' 
            : 'files/imagens/imagens-light-mode/logo-behance-dark.svg';
    }

    // Update Top Icons (desktop & mobile circular button)
    ['top-icon-img', 'top-icon-img-mobile'].forEach(id => {
        const topIcon = document.getElementById(id);
        if (topIcon) {
            topIcon.src = theme === 'dark'
                ? 'files/imagens/imagens-dark-mode/icon-topo-página.svg'
                : 'files/imagens/imagens-light-mode/icon-topo-página.svg';
        }
    });

    // Update Translate Icon
    const imgTranslate = document.querySelector('#btn-translate img');
    if (imgTranslate) {
        imgTranslate.src = theme === 'dark'
            ? 'files/imagens/imagens-dark-mode/icon-translate-light.svg'
            : 'files/imagens/imagens-light-mode/icon-translate-dark.svg';
    }
}

// 2. Language Management
let currentLang = localStorage.getItem('portfolio_lang') || 'pt';

const pageTranslations = {
    pt: {
        btnBack: "Página Anterior",
        txtFooterRights: "©2026. Desenvolvido por gab.ux. Todos os direitos reservados.",
        btnBehance: "OUTROS DETALHES NO",
        btnBackToTop: "voltar ao topo",
        mobileClose: "Fechar"
    },
    en: {
        btnBack: "Previous Page",
        txtFooterRights: "©2026. Developed by gab.ux. All rights reserved.",
        btnBehance: "OTHER DETAILS ON",
        btnBackToTop: "back to top",
        mobileClose: "Close"
    }
};

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    
    const t = pageTranslations[lang] || pageTranslations.pt;

    const elBack = document.getElementById('txt-btn-back');
    if (elBack) elBack.innerText = t.btnBack;

    const elRights = document.getElementById('txt-footer-rights');
    if (elRights) elRights.innerText = t.txtFooterRights;

    const elBehanceTxt = document.getElementById('txt-behance-label');
    if (elBehanceTxt) elBehanceTxt.innerText = t.btnBehance;

    const elTopTxt = document.getElementById('txt-back-top-label');
    if (elTopTxt) elTopTxt.innerText = t.btnBackToTop;

    const elMobileClose = document.getElementById('mobile-txt-close');
    if (elMobileClose) elMobileClose.innerText = t.mobileClose || (lang === 'pt' ? 'Fechar' : 'Close');

    // Elements with data-pt and data-en
    document.querySelectorAll('[data-pt]').forEach(el => {
        const text = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-pt');
        if (text) el.innerText = text;
    });

    const btnTranslate = document.getElementById('btn-translate');
    if (btnTranslate) {
        btnTranslate.title = lang === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese';
    }
}

// 3. Carousel Logic
function initCarousels() {
    const containers = document.querySelectorAll('.carousel-container');
    containers.forEach(container => {
        const track = container.querySelector('.carousel-track');
        const prevBtn = container.querySelector('.carousel-btn-prev');
        const nextBtn = container.querySelector('.carousel-btn-next');
        const dots = container.querySelectorAll('.carousel-dot');

        if (!track) return;

        let currentIndex = 0;
        const slides = track.querySelectorAll('.carousel-slide');
        const totalSlides = slides.length;

        function updateCarousel(index) {
            currentIndex = (index + totalSlides) % totalSlides;
            const offset = -currentIndex * 100;
            track.style.transform = `translateX(${offset}%)`;

            dots.forEach((dot, idx) => {
                if (idx === currentIndex) dot.classList.add('active');
                else dot.classList.remove('active');
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => updateCarousel(currentIndex - 1));
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => updateCarousel(currentIndex + 1));
        }

        dots.forEach((dot, idx) => {
            dot.addEventListener('click', () => updateCarousel(idx));
        });

        // Touch Swipe Support
        let startX = 0;
        let isSwiping = false;

        track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isSwiping = true;
        }, { passive: true });

        track.addEventListener('touchend', (e) => {
            if (!isSwiping) return;
            const endX = e.changedTouches[0].clientX;
            const diffX = startX - endX;
            if (Math.abs(diffX) > 40) {
                if (diffX > 0) updateCarousel(currentIndex + 1);
                else updateCarousel(currentIndex - 1);
            }
            isSwiping = false;
        }, { passive: true });
    });
}

// DOM Init
document.addEventListener('DOMContentLoaded', () => {
    applyTheme('dark'); // Always default to Dark theme when opening project presentation pages
    applyLanguage(currentLang);
    initCarousels();

    const btnTheme = document.getElementById('btn-toggle-theme');
    if (btnTheme) {
        btnTheme.addEventListener('click', () => {
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(nextTheme);
        });
    }

    const btnTranslate = document.getElementById('btn-translate');
    if (btnTranslate) {
        btnTranslate.addEventListener('click', () => {
            const nextLang = currentLang === 'pt' ? 'en' : 'pt';
            applyLanguage(nextLang);
        });
    }

    // Página Anterior button: set skip_preloader flag so index.html loads instantly at #projetos
    const btnBackHome = document.getElementById('btn-back-home');
    if (btnBackHome) {
        btnBackHome.addEventListener('click', () => {
            sessionStorage.setItem('skip_preloader', 'true');
            sessionStorage.setItem('site_visited', 'true');
        });
    }

    // Scroll to top buttons (desktop & mobile)
    ['btn-scroll-top', 'btn-circle-top-mobile'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    });
});
