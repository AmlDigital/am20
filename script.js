document.addEventListener("DOMContentLoaded", () => {
// --- FONCTIONS UTILITAIRES ---
    const DESKTOP_BREAKPOINT = 1024;
    const isMobile = () => window.innerWidth < DESKTOP_BREAKPOINT;
// --- MAJ DATE FOOTER ---
    const currentYearElement = document.getElementById("current-year");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
// --- GESTION DE LA MODALE PREVIEW ---
const previewModal = document.getElementById('preview-modal');
const previewImg = document.getElementById('preview-img'); 
const openPreview = (imagePath) => {
    if (!previewModal || !previewImg) return;
    previewImg.src = imagePath;
    const scrollContainer = previewModal.querySelector('.overflow-y-auto');
    if (scrollContainer) scrollContainer.scrollTop = 0;
    previewModal.classList.remove('hidden');
    previewModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
};
const closePreview = () => {
    if (!previewModal) return;
    previewModal.classList.add('hidden');
    previewModal.classList.remove('flex');
    document.body.style.overflow = '';
};
window.openPreview = openPreview;
window.closePreview = closePreview;
if (previewModal) {
    previewModal.addEventListener('click', (e) => {
        if (e.target === previewModal) closePreview();
    });
}
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePreview();
});
// --- EFFET DE CLIC CTA (SNIPER MODE) ---
    const setupSniperClick = () => {
        const ctas = document.querySelectorAll(".cta-accent, .calendly-popup-trigger");
        ctas.forEach(cta => {
            cta.addEventListener("click", function(e) {
                if (this.classList.contains('animating')) return;
                this.classList.add('animating');
                const ripple = document.createElement("span");
                ripple.classList.add("ripple-circle");
                this.appendChild(ripple);
                requestAnimationFrame(() => {
                    ripple.classList.add("ripple-animate");
                });
                setTimeout(() => { this.classList.add('cta-clicked'); }, 100);
                setTimeout(() => {
                    this.classList.remove('cta-clicked', 'animating');
                }, 1000);
                ripple.addEventListener("animationend", () => { ripple.remove(); });
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
            } catch (e) {
                console.error("Erreur de décodage mail:", e);
            }
        });
    };
    document.addEventListener('DOMContentLoaded', setupEmailProtection);
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
// --- GESTION DE CALENDLY ---
const CALENDLY_URL = 'https://calendly.com/appel-decouverte-am20/20min?hide_event_type_details=1&text_color=14244f&primary_color=4d0fa5';
document.addEventListener('click', function (e) {
    const btn = e.target.closest('.calendly-popup-trigger');
    if (btn) {
        e.preventDefault();
        e.stopPropagation(); 
        executeCalendlyLogic();
    }
});
function executeCalendlyLogic() {
    const loader = document.getElementById('calendly-loader');
    if (loader) loader.classList.remove('hidden'); 
    const launch = () => {
        if (window.Calendly) {
            const existing = document.querySelector('.calendly-overlay');
            if (existing) existing.remove();
            Calendly.initPopupWidget({ url: CALENDLY_URL });
            const checkExist = setInterval(() => {
                const calendlyPopup = document.querySelector('.calendly-overlay');
                if (calendlyPopup) {
                    clearInterval(checkExist);
                    setTimeout(() => {
                        if (loader) loader.classList.add('hidden'); 
                        calendlyPopup.classList.add('active'); 
                    }, 1500);
                }
            }, 100);
        }
    };
    if (!window.Calendly) {
        const link = document.createElement('link');
        link.href = 'https://assets.calendly.com/assets/external/widget.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.onload = launch;
        document.body.appendChild(script);
    } else {
        launch();
    }
}
// --- INITIALISATION FINALE ---
    setupEmailProtection();
    setupFaqAccordion();
    setupSniperClick(); 
    setupAnimations();
    handleTimelineProgress();
    window.addEventListener("scroll", handleTimelineProgress, { passive: true });
});