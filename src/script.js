document.addEventListener("DOMContentLoaded", () => {
    
    // --- FONCTIONS UTILITAIRES ---
    const DESKTOP_BREAKPOINT = 1024;
    const isMobile = () => window.innerWidth < DESKTOP_BREAKPOINT;
    
    // Fonction anti-rebond (debounce)
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
    
    // Constante pour les images (AVIS)
    const AVIS_IMAGES = [
        "images/sites-exemples/am2.0-exemple-site3-mbperformance.webp",
        "images/sites-exemples/am2.0-exemple-site4-mbperformance.webp",
        "images/sites-exemples/am2.0-exemple-site2-shodokan.webp",
        "images/sites-exemples/am2.0-exemple-site1-shodokan.webp",
    ];

    // Initialisation de l'année dans le footer
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

// =======================================================
// 🛡️ NOUVEAU : LOGIQUE DE PROTECTION DES EMAILS (Anti-robots)
// =======================================================
    const setupEmailProtection = () => {
        const links = document.querySelectorAll('.protected-mail');
        
        links.forEach(function(link) {
            
            const user = link.getAttribute('data-user');
            const domain = link.getAttribute('data-domain');
            const fullEmail = user + '@' + domain;
            
            // 1. Sauvegarder et vider le contenu (pour le SVG/l'icône)
            const originalContent = link.innerHTML;
            link.innerHTML = '';
            
            // 2. Réinsérer le contenu original (le SVG)
            link.insertAdjacentHTML('beforeend', originalContent);
            
            // 3. Insérer le texte de l'email reconstitué
            const textNode = document.createTextNode(fullEmail);
            link.appendChild(textNode);

            // 4. Gérer le clic pour le mailto
            link.addEventListener('click', function(e) {
                e.preventDefault(); 
                window.location.href = 'mailto:' + fullEmail;
            });
        });
    };
// =======================================================
// 🛡️ FIN : LOGIQUE DE PROTECTION DES EMAILS
// =======================================================
    
// --- ✅ DÉPLOIEMENT DES CARTES ATTACHÉES ---
    const setupDeployCardsAnimation = () => {
        const deployCards = document.querySelectorAll('.card-deploy');
        if (deployCards.length === 0) return;

        const options = {
            root: null, 
            rootMargin: '0px',
            threshold: [0, 0.2] 
        };

        const deployObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                const card = entry.target;
                
                if (entry.intersectionRatio > 0) { 
                    card.classList.remove('is-initially-hidden'); 
                    card.classList.add('is-visible'); 
                } else { 
                    card.classList.add('is-initially-hidden');
                    card.classList.remove('is-visible');
                }
            });
        }, options);

        deployCards.forEach(card => {
            card.classList.add('is-initially-hidden');
            deployObserver.observe(card);
        });
    };

// --- ✅ SLIDER ETUDES DE CAS ---
const initCaseStudiesSlider = () => {
    const slider = document.getElementById("case-studies-slider");

    if (!slider) return;

    const controlsWrapper = document.getElementById("case-studies-controls-wrapper");
    const prevButton = document.getElementById("case-studies-prev");
    const nextButton = document.getElementById("case-studies-next");
    const caseStudyCards = Array.from(slider.querySelectorAll(".case-study-card"));

    if (!controlsWrapper || caseStudyCards.length < 2 || !prevButton || !nextButton) {
        if (controlsWrapper) controlsWrapper.classList.add("hidden");
        return;
    }
    
    if (isMobile()) {
        if (controlsWrapper) controlsWrapper.classList.add("hidden");
        slider.classList.remove("lg:flex", "lg:flex-nowrap", "lg:overflow-x-scroll", "lg:scrollbar-hide");
        slider.classList.add("grid", "gap-8");
        caseStudyCards.forEach((card) => {
             card.classList.add("is-active");
             card.classList.remove("is-inactive"); 
        });
        return; 
    }

    slider.classList.add("lg:flex", "lg:flex-nowrap", "lg:overflow-x-scroll", "lg:scrollbar-hide");
    slider.classList.remove("grid", "gap-8");
    if (controlsWrapper) controlsWrapper.classList.remove("hidden"); 

    const totalSlides = caseStudyCards.length;
    let currentIndex = 0; 

    const updateCardClasses = (indexToActivate) => {
        caseStudyCards.forEach((card, index) => {
            const isActive = index === indexToActivate;
            card.classList.toggle("is-active", isActive);
            card.classList.toggle("is-inactive", !isActive); 
        });
        
        prevButton.disabled = indexToActivate === 0;
        nextButton.disabled = indexToActivate === totalSlides - 1;
    };
    
    const goToSlide = (index) => {
        if (index < 0 || index >= totalSlides) return;
        const card = caseStudyCards[index];
        
        const cardOffset = card.offsetLeft;
        const cardWidth = card.offsetWidth;
        const sliderWidth = slider.clientWidth;
        
        const scrollTo = cardOffset - (sliderWidth / 2) + (cardWidth / 2);

        slider.scroll({
            left: scrollTo,
            behavior: "smooth"
        });
        
        currentIndex = index;
        updateCardClasses(currentIndex);
    };
    
    const scrollCard = (direction) => {
        const newIndex = currentIndex + direction;
        goToSlide(newIndex);
    };
    
    prevButton.addEventListener("click", () => scrollCard(-1));
    nextButton.addEventListener("click", () => scrollCard(1));
    
    let checkInterval;
    
    const initialSetup = () => {
        const firstCard = caseStudyCards[0];
        if (firstCard && slider.offsetWidth > 0) {
            
            const cardOffset = firstCard.offsetLeft;
            const cardWidth = firstCard.offsetWidth;
            const sliderWidth = slider.clientWidth;

            const scrollTo = cardOffset - (sliderWidth / 2) + (cardWidth / 2);

            slider.scroll({
                left: scrollTo,
                behavior: 'auto' 
            });
            
            currentIndex = 0;
            updateCardClasses(currentIndex);
            if (checkInterval) clearInterval(checkInterval);
        }
    };
    
    checkInterval = setInterval(initialSetup, 100); 
    
    window.addEventListener("resize", debounce(() => {
        if (!isMobile()) {
            goToSlide(currentIndex);
        }
        updateCardClasses(currentIndex);
    }, 300));
};

// --- ✅ SLIDER MINI BLOG --- 
const initArticlesSlider = () => {
    const slider = document.getElementById('articles-slider');
    
    if (!slider) return; 
    
    const cards = Array.from(slider.querySelectorAll('.article-card'));
    
    const prevButtons = [
        document.getElementById('articles-prev-mobile'),
        document.getElementById('articles-prev-desktop')
    ].filter(btn => btn);
    
    const nextButtons = [
        document.getElementById('articles-next-mobile'),
        document.getElementById('articles-next-desktop')
    ].filter(btn => btn);
    
    if (cards.length === 0 || (prevButtons.length === 0 && nextButtons.length === 0)) return;

    cards.forEach((card, index) => {
        card.setAttribute('data-card-index', index);
    });

    const initialActiveIndex = 1; 
    let lastScrollLeft = slider.scrollLeft; 

    const updateActiveCard = () => {
        const sliderWidth = slider.offsetWidth;
        if (sliderWidth === 0) return; 

        let activeIndex = -1;
        const viewportCenter = window.innerWidth / 2;
        
        cards.forEach((card, index) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + (cardRect.width / 2);
            const distanceToCenter = Math.abs(cardCenter - viewportCenter); 
            
            if (distanceToCenter < 150) { 
                card.classList.add('article-active');
                card.classList.remove('article-inactive');
                
                if (activeIndex === -1 || distanceToCenter < Math.abs(cards[activeIndex].getBoundingClientRect().left + (cards[activeIndex].offsetWidth / 2) - viewportCenter)) {
                    activeIndex = index;
                }
            } else {
                card.classList.add('article-inactive');
                card.classList.remove('article-active');
            }
        }); 

        let isDisabledPrev = true;
        let isDisabledNext = true;

        if (activeIndex !== -1) {
            isDisabledPrev = activeIndex === 0;
            isDisabledNext = activeIndex === cards.length - 1;
        } else {
            isDisabledPrev = slider.scrollLeft <= 10; 
            isDisabledNext = slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 10;
        }

        prevButtons.forEach(btn => btn.disabled = isDisabledPrev);
        nextButtons.forEach(btn => btn.disabled = isDisabledNext);
    };
    
    const scrollCard = (direction) => {
        if (isMobile() && typeof window.toggleArticleCardCollapse === 'function') {
            window.toggleArticleCardCollapse(); 
        }
        
        const currentActiveCard = slider.querySelector('.article-active');
        let targetIndex = -1;

        if (currentActiveCard) {
            const currentIndex = parseInt(currentActiveCard.getAttribute('data-card-index'));
            targetIndex = currentIndex + direction;
        } else {
            const sliderCenter = slider.offsetWidth / 2;
            let closestIndex = -1;
            let minDistance = Infinity;

            cards.forEach((card, index) => {
                const cardCenterInSlider = card.offsetLeft + (card.offsetWidth / 2) - slider.scrollLeft;
                const distance = Math.abs(cardCenterInSlider - sliderCenter);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            });

            if (closestIndex !== -1) {
                targetIndex = closestIndex + direction;
            } else {
                return; 
            }
        }

        if (targetIndex >= 0 && targetIndex < cards.length) {
            const targetCard = cards[targetIndex];
            const cardOffset = targetCard.offsetLeft;
            const cardWidth = targetCard.offsetWidth;
            const sliderWidth = slider.clientWidth;

            const scrollTo = cardOffset - (sliderWidth / 2) + (cardWidth / 2);

            slider.scroll({
                left: scrollTo,
                behavior: 'smooth'
            });
        }
    };
    
    prevButtons.forEach(btn => btn.addEventListener('click', () => scrollCard(-1)));
    nextButtons.forEach(btn => btn.addEventListener('click', () => scrollCard(1)));

    const centerInitialCard = () => {
        const initialCard = cards[initialActiveIndex];
        if (initialCard && slider.offsetWidth > 0) {
            
            const cardOffset = initialCard.offsetLeft;
            const cardWidth = initialCard.offsetWidth;
            const sliderWidth = slider.clientWidth;
            const scrollTo = cardOffset - (sliderWidth / 2) + (cardWidth / 2);

            slider.scroll({
                left: scrollTo,
                behavior: 'auto' 
            });
            
            updateActiveCard();
            if (checkInterval) clearInterval(checkInterval);
        }
    };
    
    let checkInterval = setInterval(centerInitialCard, 100); 

    const handleScrollEnd = () => {
        const scrollDifference = Math.abs(slider.scrollLeft - lastScrollLeft);
        const swipeThreshold = 50; 

        if (isMobile() && scrollDifference > swipeThreshold && typeof window.toggleArticleCardCollapse === 'function') {
            window.toggleArticleCardCollapse(); 
        }
        
        lastScrollLeft = slider.scrollLeft; 
        updateActiveCard();
    };

    if (typeof debounce === 'function') {
        if (slider.debouncedUpdate) slider.removeEventListener('scroll', slider.debouncedUpdate); 
        slider.debouncedUpdate = debounce(updateActiveCard, 100);
        slider.addEventListener('scroll', slider.debouncedUpdate);
        
        if (slider.debouncedScrollEnd) slider.removeEventListener('scroll', slider.debouncedScrollEnd);
        slider.debouncedScrollEnd = debounce(handleScrollEnd, 300); 
        slider.addEventListener('scroll', slider.debouncedScrollEnd);
        
    } else {
        slider.addEventListener('scroll', updateActiveCard);
    }
    
    updateActiveCard();
};
    
// --- ✅ GESTION DES CARTES EXPANSIBLES --- 
let globalToggleCard; 

const smoothScrollToCenter = (element) => {
    if (!isMobile()) return; 
    const rect = element.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    const offset = window.innerHeight / 2 - rect.height / 2;
    window.scrollTo({
        top: top - offset,
        behavior: "smooth",
    });
};

const toggleCard = (card, forceState) => {
    const expandableCards = document.querySelectorAll("[data-expandable-card]");
    if (!isMobile() && forceState === undefined) return;

    const INITIAL_MAX_HEIGHT = card.getAttribute("data-initial-height") || "20vh";
    const isExpanded = card.getAttribute("data-expanded") === "true";
    const newState = forceState !== undefined ? forceState : !isExpanded;
    const wrapper = card.querySelector("[data-card-wrapper]");
    const toggleBtn = card.querySelector("[data-toggle-btn]");
    const toggleBtnText = toggleBtn ? toggleBtn.firstChild : null;
    const parentSection = card.closest("section");

    if (newState === isExpanded) return;

    if (newState) {

        expandableCards.forEach((other) => {
            if (other !== card && other.getAttribute("data-expanded") === "true" &&
                other.closest("section") === parentSection) {
                toggleCard(other, false);
            }
        });

        if (isMobile()) {
            wrapper.style.maxHeight = "150vh"; // temporaire pour calcul
            const fullHeight = wrapper.scrollHeight;
            card.style.setProperty("--content-height", `${fullHeight}px`);
            wrapper.style.maxHeight = INITIAL_MAX_HEIGHT;

            requestAnimationFrame(() => {
                card.setAttribute("data-expanded", "true");
                if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "true");
                card.classList.add("is-expanded");
                setTimeout(() => smoothScrollToCenter(card), 50);
            });
        } else {
            card.setAttribute("data-expanded", "true");
            wrapper.style.maxHeight = "initial"; 
        }

        if (toggleBtnText) toggleBtnText.nodeValue = "Masquer les détails ";
    } else {
        if (isMobile()) {
            wrapper.style.maxHeight = INITIAL_MAX_HEIGHT;
            card.classList.remove("is-expanded");
            setTimeout(() => {
                card.setAttribute("data-expanded", "false");
                if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
                wrapper.style.maxHeight = null;
            }, 700);
        } else {
            card.setAttribute("data-expanded", "false");
        }

        if (toggleBtnText) toggleBtnText.nodeValue = "Voir les détails";
    }
};

const setupExpandableCards = () => {
    const expandableCards = document.querySelectorAll("[data-expandable-card]");
    if (!expandableCards.length) return;

    globalToggleCard = toggleCard;

    expandableCards.forEach((card) => {
        const toggleBtnContainer = card.querySelector("[data-toggle-btn]");
        const toggleBtnText = toggleBtnContainer ? toggleBtnContainer.firstChild : null;

        const isExpanded = card.getAttribute("data-expanded") === "true";
        if (toggleBtnText) toggleBtnText.nodeValue = isExpanded ? "Masquer les détails " : "Voir les détails";

        if (toggleBtnContainer) {
            toggleBtnContainer.addEventListener("click", (e) => {
                e.preventDefault();
                toggleCard(card);
            });
        }

        if (isMobile()) {
            toggleCard(card, false);
        }
    });

    const handleResize = () => {
        expandableCards.forEach((card) => {
            if (!isMobile()) {
                card.setAttribute("data-expanded", "false");
                card.querySelector("[data-card-wrapper]").style.maxHeight = null;
                const toggleBtn = card.querySelector("[data-toggle-btn]");
                if (toggleBtn) toggleBtn.firstChild.nodeValue = "Voir les détails";
            }
        });
    };
    window.addEventListener("resize", debounce(handleResize, 300));
};

window.toggleArticleCardCollapse = () => {
    if (!isMobile() || !globalToggleCard) return;

    const articlesSection = document.getElementById("articles");
    if (!articlesSection) return;

    const expandedCard = articlesSection.querySelector('[data-expanded="true"]');
    if (expandedCard) {
        globalToggleCard(expandedCard, false);
        console.log("Carte expansible d'article fermée.");
    }
};

// --- ✅ COMPTEUR EFFECT (HERO)  ---
    function countUp(element, duration = 2500) {
        if (element.classList.contains("counting")) return;

        const target = parseInt(element.getAttribute("data-target"));
        const prefix = element.getAttribute("data-prefix") || "";
        const suffix = element.getAttribute("data-suffix") || "";

        if (isNaN(target)) return;

        let start = 0;
        const startTime = performance.now();

        element.classList.add("counting");

        const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = Math.floor(progress * target);

            element.textContent = prefix + currentValue.toLocaleString() + suffix;

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                element.textContent = prefix + target.toLocaleString() + suffix;
                element.classList.remove("counting");
            }
        };
        requestAnimationFrame(step);
    }

// --- ✅ ANIMATIONS (INTERSECTION OBSERVER) ---
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    const animationObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const element = entry.target;

                if (entry.isIntersecting) {
                    element.classList.add("animated");

                    const countersToAnimate = element.querySelectorAll(".counter");
                    countersToAnimate.forEach((counter) => {
                        countUp(counter);
                    });
                } else {
                    element.classList.remove("animated");

                    const countersToReset = element.querySelectorAll(".counter");
                    countersToReset.forEach((counter) => {
                        const prefix = counter.getAttribute("data-prefix") || "";
                        const suffix = counter.getAttribute("data-suffix") || "";
                        counter.textContent = prefix + "0" + suffix;
                        counter.classList.remove("counting");
                    });
                }
            });
        },
        {
            rootMargin: "0px",
            threshold: 0.1,
        }
    );
    animatedElements.forEach((element) => {
        animationObserver.observe(element);
    });

// --- ✅ BURGER MENU ---
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
            if (mainNav && burgerBtn && mainNav.classList.contains("is-active")) {
                document.body.classList.remove("no-scroll");
                burgerBtn.setAttribute("aria-expanded", "false");
                mainNav.classList.remove("is-active");
                burgerBtn.classList.remove("is-active");
            }
        });
    });

// --- ✅ FAQ ACCORDION  ---
    const setupFaqAccordion = () => {
        const faqItems = document.querySelectorAll(".faq-item");

        if (faqItems.length === 0) return;

        faqItems.forEach((item) => {
            const header = item.querySelector(".faq-toggle");
            const content = item.querySelector(".faq-content");

            if (!header || !content) return;

            content.style.maxHeight = "0";
            content.setAttribute("aria-hidden", "true");
            header.setAttribute("aria-expanded", "false");
            item.classList.remove("is-open");
            
            header.addEventListener("click", () => {
                const isCurrentlyOpen = item.classList.contains("is-open");
                faqItems.forEach((otherItem) => {
                    if (otherItem !== item && otherItem.classList.contains("is-open")) {
                        const otherContent = otherItem.querySelector(".faq-content");
                        const otherHeader = otherItem.querySelector(".faq-toggle");

                        if (otherContent) {
                            otherContent.style.maxHeight = "0";
                            otherContent.setAttribute("aria-hidden", "true");
                        }

                        if (otherHeader) otherHeader.setAttribute("aria-expanded", "false");
                        otherItem.classList.remove("is-open");
                    }
                });
                if (isCurrentlyOpen) {
                    content.style.maxHeight = "0";
                    content.setAttribute("aria-hidden", "true");
                    header.setAttribute("aria-expanded", "false");
                    item.classList.remove("is-open");
                } else {
                    item.classList.add("is-open");

                    const scrollHeight = content.scrollHeight;
                    content.style.maxHeight = scrollHeight + "px";
                    content.setAttribute("aria-hidden", "false");
                    header.setAttribute("aria-expanded", "true");
                }
            });

            content.addEventListener("transitionend", () => {
                if (item.classList.contains("is-open")) {
                    content.style.maxHeight = "none";
                }
            });
        });
    };

// --- ✅ TIMELINE ANIMEE  ---
    const timelineContainer = document.querySelector(".timeline-container");
    const timelineLine = document.getElementById("timeline-line");
    const timelineItems = document.querySelectorAll(".timeline-item");
    let scrollListenerAttached = false; 

    const updateVerticalTimeline = () => {

        if (!timelineContainer || !timelineLine) return;

        const rect = timelineContainer.getBoundingClientRect();
        const startVisible = rect.top;
        const endVisible = rect.bottom;
        const containerHeight = rect.height;
        const viewportHeight = window.innerHeight;

        let progress;

        if (startVisible < viewportHeight && endVisible > 0) {
            let visibleScrollArea = viewportHeight + containerHeight;
            let scrolledDistance = viewportHeight - startVisible;

            progress = Math.min(
                100,
                Math.max(0, (scrolledDistance / visibleScrollArea) * 100 * 1.5)
            );
        } else if (startVisible >= viewportHeight) {
            progress = 0; 
        } else {
            progress = 100; 
        }
        timelineLine.style.height = `${progress}%`;
        timelineItems.forEach((item, index) => {
            const itemRect = item.getBoundingClientRect();
            const triggerPoint = window.innerHeight * 0.55;
            const point = item.querySelector(".timeline-point");

            if (itemRect.top < triggerPoint) {
                point.classList.add("bg-gradient-dynamic-accent");
                point.classList.remove("bg-subtle-gradient");
            } else {
                point.classList.remove("bg-gradient-dynamic-accent");
                point.classList.add("bg-subtle-gradient");
            }
        });
    }; 
    
    const timelineObserverOptions = {
        root: null, 
        rootMargin: "0px 0px -20% 0px", 
        threshold: 0.1,
    };
    
    const horizontalTimelineObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = parseInt(entry.target.dataset.timelineIndex);
                    const point = entry.target.querySelector(".timeline-point");
                    const progress = (index / (timelineItems.length - 1)) * 100;

                    if (timelineLine) {
                        timelineLine.style.width = `${progress}%`;
                    }
                    point.classList.add("bg-gradient-dynamic-accent");
                    point.classList.remove("bg-subtle-gradient");
                } else {
                    // Logique pour quand l'élément sort si nécessaire, ici vide
                }
            });
        },
        timelineObserverOptions
    );
    
    const initTimelineAnimation = () => {
        if (!timelineContainer || !timelineLine) return;
        window.removeEventListener("scroll", updateVerticalTimeline);
        horizontalTimelineObserver.disconnect();
        scrollListenerAttached = false;
        timelineLine.style.width = "0%";
        timelineLine.style.height = "0%";
        timelineItems.forEach((item) => {
            const point = item.querySelector(".timeline-point");
            if (point) {
                point.classList.remove("bg-gradient-dynamic-accent");
                point.classList.add("bg-subtle-gradient");
            }
        });
        
        if (isMobile()) {
            window.addEventListener("scroll", updateVerticalTimeline);
            updateVerticalTimeline();
            scrollListenerAttached = true;

            timelineLine.style.width = "2px"; 
        } else {
            timelineLine.style.height = "2px"; 
            timelineItems.forEach((item, index) => { // S'assurer que chaque item a l'index pour l'observer
                item.setAttribute('data-timeline-index', index);
                horizontalTimelineObserver.observe(item);
            });
        }
    };

// --- ✅ ANIMATION IMAGES SUR 3 COLONNES AVIS SECTION ---
    const setupAvisAnimation = () => {
        const animationWrapper = document.getElementById("avis-animation-wrapper");
        const columnsContainer = document.getElementById("avis-columns-container");
        const allAvisCards = Array.from(
            document.querySelectorAll(".avis-slider .avis-card-wrapper")
        );
        const imagesToLoad = [];

        if (!animationWrapper || !columnsContainer || allAvisCards.length === 0)
            return;

        const numClones = 10;
        const avisToAnimate = [];
        columnsContainer.innerHTML = "";

        let totalCloneIndex = 0;

        for (let i = 0; i < numClones; i++) {
            allAvisCards.forEach((card) => {
                const clone = card.cloneNode(true);
                clone.classList.remove("avis-card-wrapper", "flex-shrink-0", "w-[85vw]", "mx-auto", "sm:w-[500px]", "lg:mx-0", "lg:max-w-[450px]", 
                    "lg:w-full"
                );
                clone.classList.add("avis-animation-card");

                const imageIndex = totalCloneIndex % AVIS_IMAGES.length;
                const imagePath = AVIS_IMAGES[imageIndex];

                // Remplacement du contenu de la carte par l'image
                clone.innerHTML = `
                    <div class="avis-item-content chat-bubble p-0 overflow-hidden">
                        <img src="${imagePath}" alt="Illustration de site web réalisé par AM 2.0" class="w-full h-auto object-cover" loading="lazy" aria-hidden="true" width="355" height="734">
                    </div>
                `;

                const img = clone.querySelector("img");
                if (img) {
                    imagesToLoad.push(
                        new Promise((resolve) => {
                            if (img.complete) {
                                resolve();
                            } else {
                                img.onload = resolve;
                                img.onerror = resolve;
                            }
                        })
                    );
                }

                totalCloneIndex++;

                avisToAnimate.push(clone);
            });
        }

        const columns = [];
        for (let i = 0; i < 3; i++) {
            const column = document.createElement("div");
            column.classList.add("avis-column");

            // Gestion de la classe mobile/desktop pour le centrage si nécessaire
            if (isMobile()) {
                if (i === 1) {
                    column.classList.add("avis-column-center");
                } else {
                    column.classList.add("avis-column-side");
                }
            }

            // Direction du scroll CSS
            if (i === 0) {
                column.classList.add("scroll-up");
            } else if (i === 1) {
                column.classList.add("scroll-down");
            } else {
                column.classList.add("scroll-up");
            }

            const scrollContent = document.createElement("div");
            scrollContent.classList.add(
                "avis-scroll-content",
                "h-auto",
                "min-h-full"
            );

            columns.push(scrollContent);
            column.appendChild(scrollContent);
            columnsContainer.appendChild(column);
        }

        avisToAnimate.forEach((card, index) => {
            const colIndex = index % 3;
            columns[colIndex].appendChild(card);
        });

        // Calcul de la hauteur et de la durée après le chargement des images
        Promise.all(imagesToLoad).then(() => {
            const longestColumnHeight = columns.reduce(
                (max, col) => Math.max(max, col.scrollHeight),
                0
            );
            const singleLoopHeight =
                (longestColumnHeight / numClones) * allAvisCards.length;

            const animationSpeedFactor = 25;
            const duration = singleLoopHeight * animationSpeedFactor;

            columnsContainer.style.setProperty(
                "--scroll-distance",
                `-${singleLoopHeight}px`
            );
            columnsContainer.style.setProperty("--scroll-duration", `${duration}ms`);
        });
    };

// --- ✅ SLIDER AVIS ---
const setupAvisSlider = () => {
    const slider = document.querySelector(".avis-slider");
    
    if (!slider) {
        if (window.autoSlideInterval) clearInterval(window.autoSlideInterval);
        return; 
    }
    
    const avisControlsWrapper = document.querySelector(
        ".avis-controls-wrapper"
    );
    const avisControls = document.querySelector(".avis-bullets");

    const allCardWrappers = Array.from(
        slider.querySelectorAll(".avis-card-wrapper")
    );

    if (
        !avisControls ||
        !avisControlsWrapper ||
        allCardWrappers.length < 2
    ) {
        if (window.autoSlideInterval) clearInterval(window.autoSlideInterval);
        if (avisControlsWrapper) avisControlsWrapper.classList.add("hidden");
        return;
    }

    const totalSlides = allCardWrappers.length;
    let currentIndex = 0;

    avisControlsWrapper.classList.remove("hidden");

    const createBullets = () => {
        avisControls.innerHTML = "";
        for (let i = 0; i < totalSlides; i++) {
            const bullet = document.createElement("span");
            bullet.classList.add("bullet-trait", "w-8", "h-1", "bg-primary");
            bullet.dataset.index = i;
            bullet.classList.toggle("active", i === 0);
            bullet.classList.toggle("inactive", i !== 0);
            avisControls.appendChild(bullet);

            bullet.addEventListener("click", () => {
                goToSlide(i);
                resetAutoSlide();
            });
        }
    };

    const updateBullets = () => {
        avisControls.querySelectorAll(".bullet-trait").forEach((bullet) => {
            const index = parseInt(bullet.dataset.index);
            bullet.classList.toggle("active", index === currentIndex);
            bullet.classList.toggle("inactive", index !== currentIndex);
        });
    };

    const goToSlide = (index) => {
        if (index < 0 || index >= totalSlides) return;

        const card = allCardWrappers[index];
        let scrollOffset = isMobile() ? 24 : 0;
        let scrollPosition = card.offsetLeft - scrollOffset;

        slider.scroll({
            left: scrollPosition,
            behavior: "smooth",
        });

        currentIndex = index;
        updateBullets();
        updateCardVisibility(index);
    };

    const updateCardVisibility = (activeIndex) => {
        allCardWrappers.forEach((card, index) => {
            card.classList.remove("is-hidden");
            card.style.opacity = "1";

            if (index === activeIndex) {
                card.style.opacity = "1";
            } else if (index === (activeIndex + 1) % totalSlides) {
                card.classList.add("is-hidden");
            } else {
                card.style.opacity = "0";
            }
        });
    };

    const startAutoSlide = () => {
        if (window.autoSlideInterval) clearInterval(window.autoSlideInterval);
        window.autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSlides;
            goToSlide(currentIndex);
        }, 5000);
    };

    const resetAutoSlide = () => {
        clearInterval(window.autoSlideInterval);
        startAutoSlide();
    };

    createBullets();
    goToSlide(0);
    startAutoSlide();

    slider.addEventListener("touchstart", () =>
        clearInterval(window.autoSlideInterval)
    );
    slider.addEventListener("touchend", resetAutoSlide);
};

// --- ✅ CHARGEMENT CALENDLY DIFFÉRÉ (CSS ET JS) ---
const CALENDLY_URL = 'https://calendly.com/aurore-am20/20min?hide_event_type_details=1&text_color=0e1a35&primary_color=a83287';
const CALENDLY_SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';
const CALENDLY_CSS_SRC = 'https://assets.calendly.com/assets/external/widget.css';

let isCalendlyScriptLoaded = false;
let isCalendlyLoading = false;

const loadCalendlyCSS = () => {
    const link = document.createElement('link');
    link.href = CALENDLY_CSS_SRC;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
};

const loadCalendlyScript = () => {
    if (isCalendlyLoading || isCalendlyScriptLoaded) return Promise.resolve();

    isCalendlyLoading = true;
    
    loadCalendlyCSS();

    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = CALENDLY_SCRIPT_SRC;
        script.type = 'text/javascript';
        script.async = true;
        
        script.onload = () => {
            isCalendlyScriptLoaded = true;
            isCalendlyLoading = false;
            resolve();
        };

        script.onerror = () => {
            isCalendlyLoading = false;
            console.error("Erreur de chargement du script Calendly.");
            resolve();
        };
        document.body.appendChild(script);
    });
};

const handleCalendlyPopup = (event) => {
    event.preventDefault(); 
    
    if (typeof Calendly !== 'undefined' && typeof Calendly.initPopupWidget === 'function') {
        Calendly.initPopupWidget({ url: CALENDLY_URL });
        return;
    }
    
    if (isCalendlyScriptLoaded) {
        setTimeout(() => {
            if (typeof Calendly !== 'undefined') {
                 Calendly.initPopupWidget({ url: CALENDLY_URL });
            } else {
                console.error("Calendly non défini après chargement.");
            }
        }, 50); 
        return;
    }

    loadCalendlyScript().then(() => {
        if (typeof Calendly !== 'undefined') {
            Calendly.initPopupWidget({ url: CALENDLY_URL });
        } else {
            window.location.href = CALENDLY_URL; 
        }
    });
};

const setupCalendlyTrigger = () => {
    const triggerBtns = document.querySelectorAll(".calendly-popup-trigger");
    
    if (triggerBtns.length > 0) {
        triggerBtns.forEach(button => {
            button.addEventListener("click", handleCalendlyPopup);
        });
    }
};

// --- APPEL DE TOUTES LES FONCTIONS D'INITIALISATION ---
    setupEmailProtection(); // 🛡️ PROTECTION EMAIL
    setupDeployCardsAnimation(); 
    setupExpandableCards();
    initCaseStudiesSlider(); 
    initTimelineAnimation();
    setupAvisAnimation();
    setupAvisSlider();
    setupFaqAccordion();
    initArticlesSlider(); 
    setupCalendlyTrigger();

// --- RESIZE : Gestion de la réactivité ---
    const handleResizeLogic = () => {
        initTimelineAnimation();
        setupExpandableCards();
        initCaseStudiesSlider(); 
        initArticlesSlider(); 
    };

    window.addEventListener("resize", debounce(handleResizeLogic, 300));
});