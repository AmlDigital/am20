document.addEventListener("DOMContentLoaded", () => {
    
// --- FONCTIONS UTILITAIRES ---
    const DESKTOP_BREAKPOINT = 1024;
    const isMobile = () => window.innerWidth < DESKTOP_BREAKPOINT;
    
    const debounce = (func, delay) => {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    };

// --- CONSTANTES GLOBALES ---
    const burgerBtn = document.querySelector(".burger-menu");
    const mainNav = document.getElementById("main-nav");
    const navLinks = document.querySelectorAll(".main-nav a");
    const currentYearElement = document.getElementById("current-year");

    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

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

                setTimeout(() => {
                    this.classList.add('cta-clicked');
                }, 100);

                setTimeout(() => {
                    this.classList.remove('cta-clicked');
                    this.classList.remove('animating');
                }, 1000);

                ripple.addEventListener("animationend", () => {
                    ripple.remove();
                });
            });
        });
    };

// --- DETECTION SECTION ACTIVE (NAV HIGHLIGHT) ---
    const setupActiveMenuOnScroll = () => {
        const sections = document.querySelectorAll("section[id], header[id]");
        const navLinks = document.querySelectorAll(".main-nav a:not(.cta)");

        const observerOptions = {
            root: null,
            rootMargin: '-25% 0px -65% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    
                    navLinks.forEach((link) => {
                        link.classList.remove("active", "scribble-underline-green");
                        
                        if (link.getAttribute("href") === `#${id}`) {
                            link.classList.add("active");
                            link.classList.add("scribble-underline-green");
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach((section) => observer.observe(section));
    };

// --- GESTION APPARITION FAB MOBILE ---
    const setupMobileFabScroll = () => {
        const fab = document.getElementById('mobile-fab');
        if (!fab) return;

        const handleScroll = () => {
            if (window.scrollY > 300) {
                fab.classList.add('is-visible');
            } else {
                fab.classList.remove('is-visible');
            }
        };

        window.addEventListener('scroll', () => {
            requestAnimationFrame(handleScroll);
        });
    };

// --- PROTECTION EMAIL ---
    const setupEmailProtection = () => {
        document.querySelectorAll('.protected-mail').forEach(link => {
            const user = link.dataset.user;
            const domain = link.dataset.domain;
            if (!user || !domain) return;
            const fullEmail = `${user}@${domain}`;
            const icon = link.querySelector('svg');
            link.textContent = '';
            if (icon) link.appendChild(icon);
            link.appendChild(document.createTextNode(fullEmail));
            link.href = `mailto:${fullEmail}`;
        });
    };

// --- COMPTEUR EFFECT ---
    function countUp(element, duration = 2500) {
        if (element.classList.contains("counting")) return;
        const target = parseInt(element.getAttribute("data-target"));
        const prefix = element.getAttribute("data-prefix") || "";
        const suffix = element.getAttribute("data-suffix") || "";
        if (isNaN(target)) return;
        let startTime = performance.now();
        element.classList.add("counting");
        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentValue = Math.floor(progress * target);
            element.textContent = prefix + currentValue.toLocaleString() + suffix;
            if (progress < 1) requestAnimationFrame(step);
            else {
                element.textContent = prefix + target.toLocaleString() + suffix;
                element.classList.remove("counting");
            }
        };
        requestAnimationFrame(step);
    }

// --- TIMELINE (PROGRESSION & GHOST TEXTS) ---
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
                if (dot) {
                    dot.classList.add('bg-validate', 'shadow-[0_0_15px_rgba(137,217,87,0.8)]', 'scale-125');
                    dot.classList.remove('bg-white/20');
                }
                if (ghost) ghost.classList.add('active');
            } else {
                if (dot) {
                    dot.classList.remove('bg-validate', 'shadow-[0_0_15px_rgba(137,217,87,0.8)]', 'scale-125');
                    dot.classList.add('bg-white/20');
                }
                if (ghost) ghost.classList.remove('active');
            }
        });
    };

// --- ANIMATIONS (INTERSECTION OBSERVER) ---
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    const animationObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const element = entry.target;
                if (entry.isIntersecting) {
                    element.classList.add("animated");
                    element.classList.remove("opacity-0", "translate-y-10");
                    element.classList.add("opacity-100", "translate-y-0");

                    const countersToAnimate = element.querySelectorAll(".counter");
                    countersToAnimate.forEach((counter) => countUp(counter));
                }
            });
        },
        { threshold: 0.1 }
    );
    animatedElements.forEach((el) => animationObserver.observe(el));

// --- BURGER MENU ---
    if (burgerBtn && mainNav) {
        burgerBtn.addEventListener("click", () => {
            const isExpanded = burgerBtn.getAttribute("aria-expanded") === "true";
            const action = isExpanded ? "remove" : "add";
            document.body.classList[action]("no-scroll");
            burgerBtn.setAttribute("aria-expanded", String(!isExpanded));
            mainNav.classList[action]("is-active");
            burgerBtn.classList[action]("is-active");
        });
    }
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (mainNav?.classList.contains("is-active")) {
                document.body.classList.remove("no-scroll");
                burgerBtn.setAttribute("aria-expanded", "false");
                mainNav.classList.remove("is-active");
                burgerBtn.classList.remove("is-active");
            }
        });
    });

// --- FAQ ACCORDION ---
   const setupFaqAccordion = () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const header = item.querySelector(".faq-toggle");
        const content = item.querySelector(".faq-content");

        if (!header || !content) return;

        header.addEventListener("click", () => {
            const isCurrentlyOpen = item.classList.contains("is-open");

            faqItems.forEach((otherItem) => {
                if (otherItem !== item && otherItem.classList.contains("is-open")) {
                    otherItem.querySelector(".faq-content").style.maxHeight = "0";
                    otherItem.classList.remove("is-open");
                    otherItem.querySelector(".faq-toggle").setAttribute("aria-expanded", "false");
                }
            });

            if (isCurrentlyOpen) {
                content.style.maxHeight = "0";
                item.classList.remove("is-open");
                header.setAttribute("aria-expanded", "false");
            } else {
                item.classList.add("is-open");
                content.style.maxHeight = content.scrollHeight + "px";
                header.setAttribute("aria-expanded", "true");
            }
        });
    });
};

// --- CALENDLY ---
    const CALENDLY_URL = 'https://calendly.com/aurore-am20/20min?hide_event_type_details=1&text_color=14244f&primary_color=4d0fa5';
    let isCalendlyScriptLoaded = false;

    const loadCalendly = () => {
        if (isCalendlyScriptLoaded) return Promise.resolve();
        return new Promise((resolve) => {
            const link = document.createElement('link');
            link.href = 'https://assets.calendly.com/assets/external/widget.css';
            link.rel = 'stylesheet';
            document.head.appendChild(link);
            const script = document.createElement('script');
            script.src = 'https://assets.calendly.com/assets/external/widget.js';
            script.async = true;
            script.onload = () => { isCalendlyScriptLoaded = true; resolve(); };
            document.body.appendChild(script);
        });
    };

    const setupCalendlyTrigger = () => {
        document.querySelectorAll(".calendly-popup-trigger").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                loadCalendly().then(() => {
                    if (window.Calendly) Calendly.initPopupWidget({ url: CALENDLY_URL });
                });
            });
        });
    };

// --- INITIALISATIONS ---
    setupEmailProtection();
    setupFaqAccordion();
    setupCalendlyTrigger();
    setupSniperClick(); 
    setupActiveMenuOnScroll();
    setupMobileFabScroll();
    
    window.addEventListener("scroll", handleTimelineProgress);
});