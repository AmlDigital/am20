document.addEventListener("DOMContentLoaded", () => {
    // --- FONCTIONS UTILITAIRES ---
    const DESKTOP_BREAKPOINT = 1024;
    const isMobile = () => window.innerWidth < DESKTOP_BREAKPOINT;

    // --- ANIMATIONS D'APPARITION ---
    const setupAnimations = () => {
        const animatedElements = document.querySelectorAll(".animate-on-scroll");
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    element.classList.add("animated", "opacity-100", "translate-y-0");
                    element.classList.remove("opacity-0", "translate-y-10");
                }
            });
        }, { threshold: 0.1 });
        animatedElements.forEach((el) => animationObserver.observe(el));
    };

    // --- SÉLECTEURS ÉLÉMENTS ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const burgerTop = document.getElementById('burger-top');
    const burgerBottom = document.getElementById('burger-bottom');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    const navLinks = document.querySelectorAll('.nav-link');

    // --- GESTION DU MENU BURGER MOBILE ---
    function toggleMenu() {
        const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', !isExpanded);
        if (!isExpanded) {
            mobileMenu.setAttribute('aria-hidden', 'false');
            menuBtn.setAttribute('aria-label', 'Fermer le menu');
            mobileMenu.classList.remove('-translate-y-full');
            mobileMenu.classList.add('translate-y-0');
            burgerTop.classList.add('rotate-45', 'translate-y-[4px]');
            burgerBottom.classList.add('-rotate-45', '-translate-y-[4px]');
            document.body.classList.add('overflow-hidden'); 
        } else {
            closeMenu();
        }
    }

    function closeMenu() {
        if (!menuBtn) return;
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Ouvrir le menu');
        mobileMenu.setAttribute('aria-hidden', 'true');
        mobileMenu.classList.remove('translate-y-0');
        mobileMenu.classList.add('-translate-y-full');
        burgerTop.classList.remove('rotate-45', 'translate-y-[4px]');
        burgerBottom.classList.remove('-rotate-45', '-translate-y-[4px]');
        document.body.classList.remove('overflow-hidden');
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMenu);
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(closeMenu, 150);
        });
    });

    // --- SCROLLSPY : DETECTION DES SECTIONS (CORRIGÉ) ---
    const targetIds = Array.from(navLinks)
        .map(link => {
            const href = link.getAttribute('href');
            return href && href.includes('#') ? href.split('#')[1] : null;
        })
        .filter(id => id); // Élimine les valeurs nulles ou vides

    if (targetIds.length > 0) {
        const sections = document.querySelectorAll(targetIds.map(id => `#${id}`).join(','));
        
        const observerOptions = {
            root: null,
            rootMargin: '-49% 0px -50% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        const href = link.getAttribute('href').split('#')[1];
                        const bullet = link.querySelector('.bullet'); 
                        if (href === id) {
                            link.classList.add('text-white');
                            link.classList.remove('text-gray-400');
                            if (bullet) {
                                bullet.classList.remove('hidden', 'opacity-0');
                                bullet.classList.add('inline-block', 'opacity-100', 'animate-pulse'); 
                            }
                        } else {
                            link.classList.remove('text-white');
                            link.classList.add('text-gray-400');
                            if (bullet) {
                                bullet.classList.remove('inline-block', 'opacity-100', 'animate-pulse'); 
                                bullet.classList.add('hidden', 'opacity-0');
                            }
                        }
                    });
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach(section => observer.observe(section));
    }

    // --- DETECTION ACTIVE DES CARTES SUR MOBILE ---
    if (isMobile()) {
        const cards = document.querySelectorAll('.group\\/card');
        const cardObserverOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px', 
            threshold: 0.2
        };

        const cardObserverCallback = (entries) => {
            entries.forEach(entry => {
                const card = entry.target;
                const iconBox = card.querySelector('.w-10.h-10'); 
                if (entry.isIntersecting) {
                    card.classList.add('-translate-y-1', 'border-transparent', 'bg-gradient-to-r', 'from-[#8449d9]/40', 'via-[#a370f7]/40', 'to-cyan-400/40', 'shadow-[0_0_25px_rgba(132,73,217,0.3)]');
                    card.classList.remove('border-[#8449d9]/30', 'bg-gradient-to-b', 'from-[#16171a]', 'to-[#8449d9]/5');
                    if (iconBox) {
                        iconBox.classList.add('bg-gradient-to-r', 'from-[#8449d9]', 'to-cyan-400', 'text-white');
                        iconBox.classList.remove('bg-[#8449d9]/10', 'text-[#8449d9]');
                    }
                } else {
                    card.classList.remove('-translate-y-1', 'border-transparent', 'bg-gradient-to-r', 'from-[#8449d9]/40', 'via-[#a370f7]/40', 'to-cyan-400/40', 'shadow-[0_0_25px_rgba(132,73,217,0.3)]');
                    card.classList.add('border-[#8449d9]/30', 'bg-gradient-to-b', 'from-[#16171a]', 'to-[#8449d9]/5');
                    if (iconBox) {
                        iconBox.classList.remove('bg-gradient-to-r', 'from-[#8449d9]', 'to-cyan-400', 'text-white');
                        iconBox.classList.add('bg-[#8449d9]/10', 'text-[#8449d9]');
                    }
                }
            });
        };
        const cardObserver = new IntersectionObserver(cardObserverCallback, cardObserverOptions);
        cards.forEach(card => cardObserver.observe(card));
    }

    // --- EFFET DE COULEUR AU SCROLL SUR LES IMAGES (MOBILE) ---
    const setupMobileImagesScroll = () => {
        if (!isMobile()) return;
        const mobileImages = document.querySelectorAll('.scroll-effect-img');
        const imgObserverOptions = {
            root: null,
            rootMargin: '-30% 0px -30% 0px', 
            threshold: 0.1
        };

        const imgObserverCallback = (entries) => {
            entries.forEach(entry => {
                const img = entry.target;
                const src = img.getAttribute('src');
                const isUnsplash = src && src.includes('unsplash.com');
                if (entry.isIntersecting) {
                    if (isUnsplash) {
                        img.classList.remove('mix-blend-luminosity');
                        img.classList.add('mix-blend-normal', 'scale-105');
                    } else {
                        img.classList.remove('grayscale', 'scale-[1.02]');
                        img.classList.add('grayscale-0', 'scale-100');
                    }
                } else {
                    if (isUnsplash) {
                        img.classList.remove('mix-blend-normal', 'scale-105');
                        img.classList.add('mix-blend-luminosity');
                    } else {
                        img.classList.remove('grayscale-0', 'scale-100');
                        img.classList.add('grayscale', 'scale-[1.02]');
                    }
                }
            });
        };
        const imgObserver = new IntersectionObserver(imgObserverCallback, imgObserverOptions);
        mobileImages.forEach(img => imgObserver.observe(img));
    };

    // --- FAQ ACCORDION ---
    const setupFaqAccordion = () => {
        const faqItems = document.querySelectorAll(".faq-item");
        faqItems.forEach((item) => {
            const header = item.querySelector(".faq-toggle");
            const content = item.querySelector(".faq-content");
            if (!header || !content) return;
            header.addEventListener("click", () => {
                const isOpen = item.classList.contains("is-open");
                faqItems.forEach(other => {
                    if (other !== item && other.classList.contains("is-open")) {
                        const otherContent = other.querySelector(".faq-content");
                        if (otherContent) otherContent.style.maxHeight = "0";
                        other.classList.remove("is-open");
                        const otherToggle = other.querySelector(".faq-toggle");
                        if (otherToggle) otherToggle.setAttribute("aria-expanded", "false");
                    }
                });
                item.classList.toggle("is-open", !isOpen);
                content.style.maxHeight = isOpen ? "0" : content.scrollHeight + "px";
                header.setAttribute("aria-expanded", String(!isOpen));
            });
        });
    };

    // --- PROTECTION EMAIL ---
    const setupEmailProtection = () => {
        document.querySelectorAll('.protected-mail').forEach(link => {
            const u = link.dataset.u; 
            const d = link.dataset.d; 
            if (!u || !d) return;
            try {
                const user = atob(u);
                const domain = atob(d);
                const fullEmail = `${user}@${domain}`;
                link.href = `mailto:${fullEmail}`;
                link.title = fullEmail; 
                const textContainer = link.querySelector('.mail-text');
                if (textContainer) textContainer.textContent = fullEmail;
            } catch (e) {
                console.error("Erreur de décodage mail:", e);
            }
        });
    };

    // --- MODALE SITES WEB ---
    const setupWebModal = () => {
        const webModal = document.getElementById('web-lightbox');
        const webModalImg = document.getElementById('web-lightbox-img');
        const webModalCta = document.getElementById('web-lightbox-cta');
        const openWebButtons = document.querySelectorAll('.open-web-modal-btn');
        const closeWebBtn = document.getElementById('close-web-modal-btn');
        const webOverlay = document.getElementById('web-modal-overlay-bg');

        openWebButtons.forEach(button => {
            const mobileImg = button.getAttribute('data-img-mobile');
            const desktopImg = button.getAttribute('data-img-desktop');
            if (mobileImg) { const img = new Image(); img.src = mobileImg; }
            if (desktopImg) { const img = new Image(); img.src = desktopImg; }
        });

        openWebButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const imgMobile = button.getAttribute('data-img-mobile');
                const imgDesktop = button.getAttribute('data-img-desktop');
                const siteUrl = button.getAttribute('data-url');
                if (webModal && webModalImg && webModalCta) {
                    webModalImg.setAttribute('src', (window.innerWidth >= 768 && imgDesktop) ? imgDesktop : imgMobile);
                    webModalCta.setAttribute('href', siteUrl);
                    webModal.classList.remove('hidden');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        function closeWebLightbox() {
            if (webModal) {
                webModal.classList.add('hidden');
                document.body.style.overflow = '';
                setTimeout(() => { webModalImg.setAttribute('src', ''); }, 300);
            }
        }

        if (webOverlay) webOverlay.addEventListener('click', closeWebLightbox);
        if (closeWebBtn) closeWebBtn.addEventListener('click', closeWebLightbox);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && webModal && !webModal.classList.contains('hidden')) closeWebLightbox();
        });
    };

    // --- MODALE LINKEDIN ---
    const setupLinkedinModal = () => {
        const linkedinModal = document.getElementById('preview-modal');
        const linkedinModalImg = document.getElementById('modal-img');
        const openLinkedinButtons = document.querySelectorAll('.open-modal-btn');
        const closeLinkedinBtn = document.getElementById('close-modal-btn');
        const linkedinOverlay = document.getElementById('modal-overlay-bg');

        openLinkedinButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const imgMobile = button.getAttribute('data-img-mobile');
                const imgDesktop = button.getAttribute('data-img-desktop');
                if (linkedinModal && linkedinModalImg) {
                    linkedinModalImg.setAttribute('src', (window.innerWidth >= 768 && imgDesktop) ? imgDesktop : imgMobile);
                    linkedinModal.classList.remove('hidden');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        function closeLinkedinModal() {
            if (linkedinModal) {
                linkedinModal.classList.add('hidden');
                document.body.style.overflow = '';
                setTimeout(() => { linkedinModalImg.setAttribute('src', ''); }, 300);
            }
        }

        if (linkedinOverlay) linkedinOverlay.addEventListener('click', closeLinkedinModal);
        if (closeLinkedinBtn) closeLinkedinBtn.addEventListener('click', closeLinkedinModal);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && linkedinModal && !linkedinModal.classList.contains('hidden')) closeLinkedinModal();
        });
    };

    // --- MAJ DATE FOOTER ---
    const currentYearElement = document.getElementById("current-year");
    if (currentYearElement) currentYearElement.textContent = new Date().getFullYear();

    // --- INITIALISATION GLOBALE ---
    setupEmailProtection();
    setupFaqAccordion(); 
    setupAnimations();
    setupMobileImagesScroll();
    setupWebModal();
    setupLinkedinModal();
});

// --- FONCTIONS GLOBALLES (CONSERVÉES EN DEHORS POUR LES APPELS INLINE HTML) ---
function filterProjects(category) {
    const sections = document.querySelectorAll('.project-cat');
    const buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(btn => {
        btn.setAttribute('aria-pressed', 'false');
        btn.className = "filter-btn relative inline-flex items-center gap-2 font-bold px-5 py-2.5 rounded-full text-base transition-all duration-300 cursor-pointer bg-transparent border border-[#8449d9]/80 hover:bg-gradient-to-r hover:from-[#8449d9] hover:via-[#a370f7] hover:to-cyan-400 hover:border-transparent group/filter z-10";
        const span = btn.querySelector('.text-span');
        if (span) span.className = "text-span bg-gradient-to-r from-[#8449d9] to-cyan-400 bg-clip-text text-transparent group-hover/filter:text-white transition-colors duration-300 flex items-center gap-2";
        const svg = btn.querySelector('svg');
        if (svg) { svg.classList.remove('text-white'); svg.classList.add('text-[#8449d9]'); }
    });

    const activeBtn = document.getElementById(`btn-${category}`);
    if (activeBtn) {
        activeBtn.setAttribute('aria-pressed', 'true');
        activeBtn.className = "filter-btn relative inline-flex items-center gap-2 font-bold px-5 py-2.5 rounded-full text-base transition-all duration-300 cursor-pointer text-white bg-gradient-to-r from-[#8449d9] via-[#a370f7] to-cyan-400 border-transparent z-10";
        const activeSpan = activeBtn.querySelector('.text-span');
        if (activeSpan) activeSpan.className = "text-span text-white flex items-center gap-2";
        const activeSvg = activeBtn.querySelector('svg');
        if (activeSvg) { activeSvg.classList.remove('text-[#8449d9]'); activeSvg.classList.add('text-white'); }
    }

    sections.forEach(section => {
        section.style.display = (category === 'tous' || section.id === `cat-${category}`) ? 'block' : 'none';
    });
}
window.filterProjects = filterProjects;

window.toggleExtraBanners = function() {
    const extraBanners = document.querySelectorAll('.extra-banner');
    const loadButton = document.getElementById('btn-load-banners');
    extraBanners.forEach(banner => banner.classList.remove('hidden'));
    if (loadButton && loadButton.parentElement) loadButton.parentElement.style.display = 'none';
};

window.scrollBanners = function(direction) {
    const container = document.getElementById('banners-container');
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.34; 
    container.scrollLeft += (direction === 'left' ? -scrollAmount : scrollAmount);
};

// --- GESTION DE LA VIDEO ---
const video = document.getElementById('instagramReel');
const playBtn = document.getElementById('playBtnOverlay');
const fakePoster = document.getElementById('videoPoster'); 
if (video && playBtn && fakePoster) {
    playBtn.addEventListener('click', () => {
        video.play();
        video.setAttribute('controls', 'true');
        playBtn.classList.add('hidden');
        fakePoster.classList.add('opacity-0', 'pointer-events-none'); 
    });
    video.addEventListener('ended', () => {
        video.removeAttribute('controls');
        playBtn.classList.remove('hidden');
        fakePoster.classList.remove('opacity-0', 'pointer-events-none'); 
        video.load(); 
    });
}

// --- CARROU INSTA ---
window.updateCarouselCounter = function(element) {
    const counter = document.getElementById('carousel-counter');
    if (!counter) return;
    const currentSlide = Math.round(element.scrollLeft / element.offsetWidth) + 1;
    counter.innerText = `Slide ${currentSlide}/5`;
};

window.scrollCarousel = function(direction) {
    const slider = document.getElementById('pedagogicSlider');
    if (!slider) return;
    slider.scrollLeft += (direction === 'left' ? -slider.offsetWidth : slider.offsetWidth);
};

// --- BFCache ---
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        document.querySelectorAll('#web-lightbox, #preview-modal').forEach(m => m.classList.add('hidden'));
        document.querySelectorAll('#web-lightbox-img, #modal-img').forEach(i => i.setAttribute('src', ''));
        document.body.style.overflow = '';
    }
});