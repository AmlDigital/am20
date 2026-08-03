document.addEventListener("DOMContentLoaded", () => {
// --- SÉLECTEURS ÉLÉMENTS BURGER ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const burgerTop = document.getElementById('burger-top');
    const burgerBottom = document.getElementById('burger-bottom');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
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
// --- GESTION DU SCROLLSPY ---
    const setupScrollSpy = () => {
        const navLinks = document.querySelectorAll('.nav-link[href^="#"], .mobile-nav-link[href^="#"]');
        const sections = Array.from(navLinks)
            .map(link => {
                const id = link.getAttribute('href');
                return id && id.length > 1 ? document.querySelector(id) : null;
            })
            .filter(Boolean);
        if (sections.length === 0) return;
        const onScroll = () => {
            const scrollPos = window.scrollY + 150;
            let activeId = '';
            sections.forEach(section => {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                if (scrollPos >= top && scrollPos < top + height) {
                    activeId = section.getAttribute('id');
                }
            });
            if (window.scrollY < 100) {
                activeId = '';
            }
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
                activeId = sections[sections.length - 1].getAttribute('id');
            }
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href === `#${activeId}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll(); 
    };
// --- GESTION DU FLIP CARTES CAS CLIENTS ---
    const setupFlipCards = () => {
        const triggerBtns = document.querySelectorAll('.btn-flip-trigger');
        const closeBtns = document.querySelectorAll('.btn-flip-close');
        triggerBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const cardInner = btn.closest('.flip-card-inner'); 
                if (cardInner) {
                    cardInner.classList.add('[transform:rotateY(180deg)]');
                }
            });
        });
        closeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const cardInner = btn.closest('.flip-card-inner'); 
                if (cardInner) {
                    cardInner.classList.remove('[transform:rotateY(180deg)]');
                }
            });
        });
    };
// --- ANIMATION DE LA TIMELINE DE PARCOURS CLIENT ---
    const setupTimelineAnimation = () => {
        const container = document.getElementById('timeline-container');
        const progressBar = document.getElementById('timeline-progress');
        const steps = document.querySelectorAll('.timeline-step');
        if (!container || !progressBar) return;
        const handleTimelineScroll = () => {
            const rect = container.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const startPoint = viewportHeight * 0.7;
            const containerTop = rect.top;
            const containerHeight = rect.height;
            let progress = (startPoint - containerTop) / containerHeight;
            progress = Math.max(0, Math.min(1, progress));
            progressBar.style.height = `${progress * 100}%`;
            steps.forEach((step) => {
                const dot = step.querySelector('.timeline-dot');
                const dotInner = step.querySelector('.dot-inner');
                if (!dot || !dotInner) return;
                const dotRect = dot.getBoundingClientRect();       
                if (dotRect.top < startPoint) {
                    dot.classList.remove('border-slate-300', 'bg-white');
                    dot.classList.add('border-[#29c6dc]', 'shadow-purple-500/20', 'scale-110');
                    dotInner.classList.remove('bg-slate-300');
                    dotInner.classList.add('bg-gradient-to-r', 'from-purple-700', 'to-[#29c6dc]');
                } else {
                    dot.classList.add('border-slate-300', 'bg-white');
                    dot.classList.remove('border-[#29c6dc]', 'shadow-purple-500/20', 'scale-110');
                    dotInner.classList.add('bg-slate-300');
                    dotInner.classList.remove('bg-gradient-to-r', 'from-purple-700', 'to-[#29c6dc]');
                }
            });
        };
        window.addEventListener('scroll', handleTimelineScroll, { passive: true });
        handleTimelineScroll(); 
    };
// --- GESTION DE LA FAQ ACCORDION ---
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
// --- GESTION DE LA MODALE DEMANDE DE DEVIS  ---
    const setupQuoteModal = () => {
        const modal = document.getElementById('quote-modal');
        const modalBackdrop = document.getElementById('quote-modal-backdrop');
        const modalContainer = document.getElementById('quote-modal-container');
        const closeBtn = document.getElementById('close-quote-modal');
        const closeSuccessBtn = document.getElementById('close-success-btn');
        const form = document.getElementById('quote-form');
        const successMessage = document.getElementById('quote-success-message');
        const submitBtn = document.getElementById('quote-submit-btn');
        const triggerBtns = document.querySelectorAll('a[href="#devis"], .btn-devis');
        if (!modal) return;
        const openModal = (e) => {
            if (e) e.preventDefault();
            modal.classList.remove('opacity-0', 'pointer-events-none');
            modal.setAttribute('aria-hidden', 'false');
            modalContainer.classList.remove('scale-95');
            modalContainer.classList.add('scale-100');
            document.body.classList.add('overflow-hidden');
        };
        const closeModal = () => {
            modal.classList.add('opacity-0', 'pointer-events-none');
            modal.setAttribute('aria-hidden', 'true');
            modalContainer.classList.remove('scale-100');
            modalContainer.classList.add('scale-95');
            document.body.classList.remove('overflow-hidden');
            setTimeout(() => {
                if (form) {
                    form.reset();
                    form.classList.remove('hidden');
                }
                if (successMessage) successMessage.classList.add('hidden');
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Envoyer ma demande de devis';
                }
            }, 300);
        };
        triggerBtns.forEach(btn => btn.addEventListener('click', openModal));
        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
        if (closeSuccessBtn) closeSuccessBtn.addEventListener('click', closeModal);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
                closeModal();
            }
        });
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const checkboxes = form.querySelectorAll('input[name="type_projet[]"]:checked');
                if (checkboxes.length === 0) {
                    alert('Veuillez sélectionner au moins un type de projet.');
                    return;
                }
                submitBtn.disabled = true;
                submitBtn.textContent = 'Envoi en cours...';
                const formData = new FormData(form);
                fetch('/', {
                    method: 'POST',
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams(formData).toString()
                })
                .then(response => {
                    if (response.ok) {
                        form.classList.add('hidden');
                        successMessage.classList.remove('hidden');
                    } else {
                        throw new Error('Erreur réseau');
                    }
                })
                .catch(error => {
                    console.error('Erreur soumission formulaire:', error);
                    alert('Une erreur est survenue lors de l’envoi. Veuillez réessayer.');
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Envoyer ma demande de devis';
                });
            });
        }
    };
// --- MAJ DATE FOOTER ---
    const currentYearElement = document.getElementById("current-year");
    if (currentYearElement) currentYearElement.textContent = new Date().getFullYear();
// --- INITIALISATION GLOBALE ---
    setupScrollSpy();
    setupTimelineAnimation();
    setupFlipCards();
    setupFaqAccordion();
    setupEmailProtection();
    setupQuoteModal();
});