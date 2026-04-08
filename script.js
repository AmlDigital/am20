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
// --- GESTION DU MENU BURGER ---
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const burgerIcon = document.getElementById('burger-icon');
const closeIcon = document.getElementById('close-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');
function toggleMenu() {
    mobileMenu.classList.toggle('hidden');
    burgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
}
menuBtn.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});
// --- GESTION DU ZOOM SUR LES IMAGES ---
window.openLightbox = function(src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    if (lightbox && img) {
        img.src = src;
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
        document.body.style.overflow = 'hidden'; 
    }
};
window.closeLightbox = function() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
        document.body.style.overflow = 'auto'; 
    }
};
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});
// --- GESTION DES BULLETS CAROUSEL ---
const carousel = document.getElementById('mobile-carousel');
const dots = document.querySelectorAll('#carousel-dots .carousel-dot'); 
if (carousel && dots.length > 0) {
    carousel.addEventListener('scroll', () => {
        const scrollLeft = carousel.scrollLeft;
        const itemWidth = carousel.querySelector('div').offsetWidth + 24; 
        const activeIndex = Math.round(scrollLeft / itemWidth);
        dots.forEach((dot, index) => {
            if (index === activeIndex) {    
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    });
}
// --- TIMELINE PROGRESSION ---
    const handleTimelineProgress = () => {
        const container = document.getElementById('timeline-container');
        const progressLine = document.getElementById('progress-line');
        const steps = document.querySelectorAll('.step-container');
        if (!container || !progressLine) return;
        const rect = container.getBoundingClientRect();
        const triggerPoint = window.innerHeight / 1.5;
        const progress = Math.max(0, Math.min(100, ((triggerPoint - rect.top) / rect.height) * 100));
        progressLine.style.height = `${progress}%`;
        steps.forEach(step => {
            const dot = step.querySelector('.timeline-dot');
            const ghost = step.querySelector('.ghost-text');
            const stepRect = step.getBoundingClientRect();
            if (stepRect.top + (stepRect.height / 4) < triggerPoint) {
                if (dot) dot.classList.add('bg-validate', 'scale-125');
                if (ghost) ghost.classList.add('active');
            } else {
                if (dot) dot.classList.remove('bg-validate', 'scale-125');
                if (ghost) ghost.classList.remove('active');
            }
        });
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
                        other.querySelector(".faq-content").style.maxHeight = "0";
                        other.classList.remove("is-open");
                        other.querySelector(".faq-toggle").setAttribute("aria-expanded", "false");
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
            if (link.innerHTML.trim() === "") {
                link.textContent = fullEmail;
            }
        } catch (e) {
            console.error("Erreur de décodage mail:", e);
        }
    });
};
// --- MAJ DATE FOOTER ---
    const currentYearElement = document.getElementById("current-year");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
// --- INITIALISATION FINALE ---
    setupEmailProtection();
    setupFaqAccordion(); 
    setupAnimations();
    handleTimelineProgress();
    window.addEventListener("scroll", handleTimelineProgress, { passive: true });
});