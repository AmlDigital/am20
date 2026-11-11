document.addEventListener('DOMContentLoaded', () => {

// 1. GESTION DE L'HEURE
  const now = new Date();
  const timeStr = now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0');
  document.querySelectorAll('#wa-time, .wa-modal-time').forEach(el => el.textContent = timeStr);
  document.querySelectorAll('#wa-clock, .wa-modal-clock').forEach(el => el.textContent = timeStr);
  
// 2. BARRE DE PROGRESSION DU SCROLL
  const scrollProgress = document.getElementById('scroll-progress');
  if (scrollProgress) {
    window.addEventListener('scroll', () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      scrollProgress.style.width = `${progress}%`;
    }, { passive: true });
  }

// 3. EFFET DE SOURIS 
  let lastX = 0;
  let lastY = 0;
  let throttle = 0;
  window.addEventListener('mousemove', (e) => {
    throttle++;
    if (throttle % 2 !== 0) return;
    const speed = Math.hypot(e.clientX - lastX, e.clientY - lastY);
    lastX = e.clientX;
    lastY = e.clientY;
    const dropCount = Math.min(Math.floor(speed / 4) + 1, 4);
    for (let i = 0; i < dropCount; i++) {
      createPaintDrop(e.clientX, e.clientY);
    }
  });
  function createPaintDrop(x, y) {
    const drop = document.createElement('div');
    drop.classList.add('paint-drop');
    const offsetX = (Math.random() - 0.5) * 20;
    const offsetY = (Math.random() - 0.5) * 20;
    const size = Math.random() * 8 + 4; 
    const colors = ['#ff66c4', '#5ce1e6', '#ffffff'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    drop.style.left = `${x + offsetX}px`;
    drop.style.top = `${y + offsetY}px`;
    drop.style.width = `${size}px`;
    drop.style.height = `${size}px`;
    drop.style.backgroundColor = color;
    drop.style.boxShadow = `0 0 6px ${color}`;
    document.body.appendChild(drop);
    setTimeout(() => {
      drop.remove();
    }, 600);
  }

// 4. CURSEUR PERSONNALISÉ
  const cursor = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursor-ring');
  if (cursor && cursorRing) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    });
    function animateRing() {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
      requestAnimationFrame(animateRing);
    }
    animateRing();
    const interactables = document.querySelectorAll('a, button, input, textarea, select');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

// 5. REVEAL ANIMATIONS ON SCROLL
  const reveals = document.querySelectorAll('.reveal');
  const observerOptions = { threshold: 0.1 };
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);
  reveals.forEach(el => revealObserver.observe(el));

// 6. GESTION DU HEADER TRANSPARENT ET AU SCROLL
  const header = document.getElementById('main-header');
  const headerLogo = document.getElementById('main-header-logo');
  const headerNavLinks = document.querySelectorAll('.header-nav-link');
  const mobileNavLinks = document.querySelectorAll('#mobile-menu a');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 24) {
// Ajout effectif du bandeau blanc
        header.classList.add('bg-[#f8fbff]', 'backdrop-blur-md', 'border-b-2', 'border-[#2e3d59]/10', 'shadow-sm');
        header.classList.remove('bg-transparent');
// Changement du logo
        if (headerLogo) {
          headerLogo.src = 'images/logo/logo-ghost.webp';
        }
// Passage des textes desktop en sombre (text-main)
        headerNavLinks.forEach(link => {
          link.classList.remove('text-white/90');
          link.classList.add('text-main');
        });
// Passage des textes mobiles en sombre (text-main)
        mobileNavLinks.forEach(link => {
          link.classList.remove('text-white');
          link.classList.add('text-main');
        });
      } else {
// Retour à la transparence sur la Hero
        header.classList.remove('bg-[#f8fbff]', 'backdrop-blur-md', 'border-b-2', 'border-[#2e3d59]/10', 'shadow-sm');
        header.classList.add('bg-transparent');
// Remise du logo initial
        if (headerLogo) {
          headerLogo.src = 'images/logo/logo-ghost.webp';
        }
// Remise des textes desktop en clair
        headerNavLinks.forEach(link => {
          link.classList.remove('text-main');
          link.classList.add('text-white/90');
        });
// Remise des textes mobiles en blanc
        mobileNavLinks.forEach(link => {
          link.classList.remove('text-main');
          link.classList.add('text-white');
        });
      }
    }, { passive: true });
  }

// 7. TOGGLE MENU MOBILE
  const menuBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconBurger = document.getElementById('icon-burger');
  const iconCross = document.getElementById('icon-cross');
  let isMenuOpen = false;
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      if (isMenuOpen) {
        mobileMenu.classList.remove('max-h-0', 'opacity-0');
        mobileMenu.classList.add('max-h-[500px]', 'opacity-100'); 
        if (typeof updateActiveSection === 'function') {
          updateActiveSection();
        }
        if (iconBurger && iconCross) {
          iconBurger.classList.add('opacity-0', 'scale-75', 'rotate-90');
          iconCross.classList.remove('opacity-0', 'scale-75');
          iconCross.classList.add('opacity-100', 'scale-100', 'rotate-0');
        }
      } else {
        mobileMenu.classList.remove('max-h-[500px]', 'opacity-100');
        mobileMenu.classList.add('max-h-0', 'opacity-0');
        if (iconBurger && iconCross) {
          iconBurger.classList.remove('opacity-0', 'scale-75', 'rotate-90');
          iconCross.classList.remove('opacity-100', 'scale-100', 'rotate-0');
          iconCross.classList.add('opacity-0', 'scale-75');
        }
      }
    });
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (isMenuOpen) menuBtn.click();
      });
    });
  }

// 8. SCROLLSPY (MENU DESKTOP & MOBILE)
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('header nav a[href^="#"], #mobile-menu a[href^="#"]');
  function updateActiveSection() {
    let scrollPosition = window.scrollY + window.innerHeight * 0.3;
    let activeId = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        activeId = section.getAttribute('id');
      }
    });
    if (activeId) {
      navLinks.forEach(link => {
        const href = link.getAttribute('href').substring(1);
        if (href === activeId) {
          link.classList.add('active-section');
        } else {
          link.classList.remove('active-section');
        }
      });
    }
  }
  if (sections.length > 0 && navLinks.length > 0) {
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    updateActiveSection(); 
  }

// 9. BANDEAU INFINI DYNAMIQUE (Hero, Story & Contact)
  const marqueeTracks = document.querySelectorAll('#marquee-track, #marquee-track-reverse');
  marqueeTracks.forEach(track => {
    const originalContent = track.firstElementChild;
    if (originalContent) {
      track.appendChild(originalContent.cloneNode(true));
    }
  });

// 10. GESTION DE LA FAQ 
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const toggleBtn = item.querySelector('.faq-toggle');
    const content = item.querySelector('.faq-content');
    const chevron = item.querySelector('.icon-chevron');
    const cross = item.querySelector('.icon-cross');
    const borderColorType = item.getAttribute('data-border-color'); 
    if (toggleBtn && content) {
      toggleBtn.addEventListener('click', () => {
        const isOpen = !content.classList.contains('hidden');
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            const otherContent = otherItem.querySelector('.faq-content');
            const otherBtn = otherItem.querySelector('.faq-toggle');
            const otherChevron = otherItem.querySelector('.icon-chevron');
            const otherCross = otherItem.querySelector('.icon-cross');
            const otherColor = otherItem.getAttribute('data-border-color');
            otherContent.classList.add('hidden');
            otherBtn.setAttribute('aria-expanded', 'false');
            if (otherColor === 'pink') {
              otherItem.classList.remove('border-[#ff66c4]');
              otherItem.classList.add('border-[#ff66c4]/40');
            } else {
              otherItem.classList.remove('border-[#22b8c2]');
              otherItem.classList.add('border-[#22b8c2]/40');
            }
            if (otherChevron && otherCross) {
              otherChevron.classList.remove('opacity-0', 'scale-75');
              otherChevron.classList.add('opacity-100', 'scale-100');
              otherCross.classList.remove('opacity-100', 'scale-100');
              otherCross.classList.add('opacity-0', 'scale-75');
            }
          }
        });
        if (isOpen) {
          content.classList.add('hidden');
          toggleBtn.setAttribute('aria-expanded', 'false');
          if (borderColorType === 'pink') {
            item.classList.remove('border-[#ff66c4]');
            item.classList.add('border-[#ff66c4]/40');
          } else {
            item.classList.remove('border-[#22b8c2]');
            item.classList.add('border-[#22b8c2]/40');
          }
          if (chevron && cross) {
            chevron.classList.remove('opacity-0', 'scale-75');
            chevron.classList.add('opacity-100', 'scale-100');
            cross.classList.remove('opacity-100', 'scale-100');
            cross.classList.add('opacity-0', 'scale-75');
          }
        } else {
          content.classList.remove('hidden');
          toggleBtn.setAttribute('aria-expanded', 'true');
          if (borderColorType === 'pink') {
            item.classList.remove('border-[#ff66c4]/40');
            item.classList.add('border-[#ff66c4]');
          } else {
            item.classList.remove('border-[#22b8c2]/40');
            item.classList.add('border-[#22b8c2]');
          }
          if (chevron && cross) {
            chevron.classList.remove('opacity-100', 'scale-100');
            chevron.classList.add('opacity-0', 'scale-75');
            cross.classList.remove('opacity-0', 'scale-75');
            cross.classList.add('opacity-100', 'scale-100');
          }
        }
      });
    }
  });

// 11. GESTION DE LA MODALE WHATSAPP
  const waModal = document.getElementById('wa-modal');
  const waModalCard = document.getElementById('wa-modal-card');
  const waModalClose = document.getElementById('wa-modal-close');
  const waModalText = document.getElementById('wa-modal-text');
  const waModalCopyBtn = document.getElementById('wa-modal-copy-btn');
  const waRawBtn = document.getElementById('wa-raw-btn');
  const waTriggers = document.querySelectorAll('.btn-wa-trigger');
  const waBaseUrl = "https://wa.me/message/UAHGQCLAFQF7L1"; 
  if (waModal && waTriggers.length > 0) {
    let currentMessage = "";
    waTriggers.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        currentMessage = btn.getAttribute('data-wa-msg') || "Bonjour, je souhaiterais échanger sur mon projet.";
  // Affichage de la modale
        waModal.classList.remove('opacity-0', 'pointer-events-none');
        if (waModalCard) {
          waModalCard.classList.remove('scale-90');
          waModalCard.classList.add('scale-100');
        }
  // Animation GSAP de la modale (effet de frappe & apparition)
        if (window.gsap && waModalText) {
          const note = waModal.querySelector('.wa-note');
          const bubble = waModal.querySelector('.wa-out');
          const copyBtnInModal = waModal.querySelector('#wa-modal-copy-btn'); 
          const obj = { n: 0 };
          if (copyBtnInModal) gsap.set(copyBtnInModal, { autoAlpha: 0, y: 8 });
          waModalText.textContent = '';
          if (note) gsap.set(note, { y: 0, opacity: 1 });
          if (bubble) gsap.set(bubble, { scale: 1, opacity: 1 });

          const tl = gsap.timeline();
          if (note) tl.from(note, { y: -10, opacity: 0, duration: .4 });
          if (bubble) tl.from(bubble, { scale: .5, opacity: 0, duration: .4, ease: 'back.out(1.8)' }, '+=.1'); 
          tl.to(obj, { 
            n: currentMessage.length, 
            duration: 1.2, 
            ease: 'none', 
            onUpdate: () => { 
              waModalText.textContent = currentMessage.slice(0, Math.round(obj.n)); 
            } 
          });
          if (copyBtnInModal) {
            tl.to(copyBtnInModal, { autoAlpha: 1, y: 0, duration: .4, ease: 'back.out(2)' });
          }
        } else if (waModalText) {
          waModalText.textContent = currentMessage;
        }
        if (waRawBtn) waRawBtn.href = waBaseUrl;
      });
    });
    const closeModal = (e) => {
      if (e) e.preventDefault();
      waModal.classList.add('opacity-0', 'pointer-events-none');
      if (waModalCard) {
        waModalCard.classList.remove('scale-100');
        waModalCard.classList.add('scale-90');
      }
    };
    if (waModalClose) {
      waModalClose.addEventListener('click', closeModal);
      waModalClose.addEventListener('touchend', closeModal);
    }
    waModal.addEventListener('click', (e) => {
      if (e.target === waModal) closeModal();
    });
    if (waModalCopyBtn) {
      waModalCopyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(currentMessage).then(() => {
          const originalText = waModalCopyBtn.innerHTML;
          waModalCopyBtn.innerHTML = '<span class="text-white font-semibold">Texte copié ! Redirection...</span>';  
          const encodedMsg = encodeURIComponent(currentMessage);
          setTimeout(() => {
            window.open(`${waBaseUrl}?text=${encodedMsg}`, '_blank');
            closeModal();
            waModalCopyBtn.innerHTML = originalText;
          }, 600);
        }).catch(err => {
          console.error("Erreur lors de la copie :", err);
        });
      });
    }
    if (waRawBtn) {
      waRawBtn.addEventListener('click', () => {
        setTimeout(closeModal, 500);
      });
    }
  }

// 12. DÉCODAGE EMAIL ANTI-SPAM 
  const emailLink = document.getElementById("protected-email");
  if (emailLink) {
    const encodedEmail = "Y29udGFjdEBhbTIwLmZy";
    const email = atob(encodedEmail);
    emailLink.href = "mailto:" + email;
    emailLink.textContent = email;
  }

// 13. ANNÉE AUTOMATIQUE POUR LE FOOTER
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }




  
// ------------------------------------  CONTACT  ------------------------------------


// 1. CONTACT - GSAP
  if (window.gsap) {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
    gsap.registerPlugin(ScrollTrigger, window.SplitText);

// 2. CONTACT - GESTION DE L'IMAGE HERO MOBILE
    const fig = document.querySelector('.cg-mob'), im = fig && fig.querySelector('img');
    if (im) {
      const shape = () => {
        try {
          const w = im.naturalWidth, h = im.naturalHeight; if (!w) return;
          fig.style.aspectRatio = w + '/' + h;
          const N = 40, c = document.createElement('canvas'); c.width = 200; c.height = Math.round(200 * h / w);
          const g = c.getContext('2d', { willReadFrequently: true }); g.drawImage(im, 0, 0, c.width, c.height);
          const d = g.getImageData(0, 0, c.width, c.height).data, pts = ['100% 0%'];
          for (let i = 0; i <= N; i++) {
            const y = Math.min(c.height - 1, Math.round(i / N * (c.height - 1))); let x = c.width;
            for (let k = 0; k < c.width; k++) if (d[(y * c.width + k) * 4 + 3] > 24) { x = k; break; }
            pts.push((x / c.width * 100).toFixed(1) + '% ' + (i / N * 100).toFixed(1) + '%');
          }
          pts.push('100% 100%');
          fig.style.shapeOutside = 'polygon(' + pts.join(',') + ')';
        } catch (e) {}
      };
      im.naturalWidth ? shape() : im.addEventListener('load', shape);
    }

// 3. GESTION DES TITRES ANIMES
    if (!reduce) {
      document.querySelectorAll('[data-split]').forEach(el => {
        const hero = el.tagName === 'H1';
        const run = targets => {
          gsap.set(el, { perspective: 700 });
          return gsap.from(targets, {
            yPercent: () => gsap.utils.random(90, 160), x: () => gsap.utils.random(-40, 40),
            rotationX: -80, rotate: () => gsap.utils.random(-12, 12), opacity: 0, filter: 'blur(10px)',
            ease: hero ? 'expo.out' : 'power3.out', duration: hero ? 1.3 : 1, stagger: { each: .03, from: hero ? 'start' : 'random' },
            delay: hero ? .2 : 0,
            scrollTrigger: hero ? null : { trigger: el, start: 'top 88%', end: 'top 45%', scrub: .7 }
          });
        };
        if (!window.SplitText) return run(el);
        SplitText.create(el, {
          type: 'words,chars', charsClass: 'cg-ch', autoSplit: true,
          onSplit(self) {
            const t = [];
            self.words.forEach(w => {
              if (w.closest('.grad-text')) { w.classList.add('grad-text'); t.push(w); }
              else t.push(...w.querySelectorAll('.cg-ch'));
            });
            return run(t);
          }
        });
      });

// 4. CONTACT - GESTION DES ANIMATIONS HERO
      gsap.from('[data-hero]', { y: 30, opacity: 0, duration: .9, ease: 'power3.out', stagger: .1, delay: .5 });
      gsap.from('[data-hero-photo] img', { clipPath: 'inset(100% 0 0 0)', scale: 1.15, duration: 1.4, ease: 'power4.out', delay: .3 });
      gsap.from('.cg-chip[data-float]', { scale: 0, opacity: 0, duration: .8, ease: 'back.out(2)', stagger: .15, delay: 1.2 });
      gsap.utils.toArray('[data-float]').forEach((c, i) =>
        gsap.to(c, { y: i ? 10 : -10, duration: 2.4 + i * .5, ease: 'sine.inOut', yoyo: true, repeat: -1 }));
      gsap.to('[data-hero-photo]', { yPercent: -6, ease: 'none',
        scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom top', scrub: true } });

// 5. BANDEAU MARQUEE
      const track = document.getElementById('cg-track');
      if (track) {
        const loop = gsap.to(track, { xPercent: -50, duration: 28, ease: 'none', repeat: -1 });
        ScrollTrigger.create({ onUpdate: s => gsap.timeline({ overwrite: true })
          .to(loop, { timeScale: 1 + Math.abs(s.getVelocity()) / 400, duration: .3 })
          .to(loop, { timeScale: 1, duration: 1 }) });
      }

// 6. GESTION DES CARTES 
      gsap.set('[data-card]', { opacity: 0, y: 70 });   // cachées d'emblée, pas de flash
      ScrollTrigger.batch('[data-card]', {
        start: 'top 88%', once: true,
        onEnter: els => gsap.to(els, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: .12 })
      });
  // Tilt 3D
      if (fine) {
        document.querySelectorAll('.cg-card:not(.cg-notilt):not(.cg-step), .cg-rev').forEach(c => {
          const rx = gsap.quickTo(c, 'rotateX', { duration: .5, ease: 'power3' });
          const ry = gsap.quickTo(c, 'rotateY', { duration: .5, ease: 'power3' });
          gsap.set(c, { transformPerspective: 900 });
          c.addEventListener('pointermove', e => {
            const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
            c.style.setProperty('--mx', x * 100 + '%'); c.style.setProperty('--my', y * 100 + '%');
            ry((x - .5) * 8); rx((.5 - y) * 8);
          });
          c.addEventListener('pointerleave', () => { rx(0); ry(0); });
        });
        document.querySelectorAll('.cg-magnet').forEach(b => {
          const mx = gsap.quickTo(b, 'x', { duration: .4, ease: 'power3' }), my = gsap.quickTo(b, 'y', { duration: .4, ease: 'power3' });
          b.addEventListener('pointermove', e => { const r = b.getBoundingClientRect(); mx((e.clientX - r.left - r.width / 2) * .25); my((e.clientY - r.top - r.height / 2) * .35); });
          b.addEventListener('pointerleave', () => { mx(0); my(0); });
        });
      }

// 7. CONTACT - GESTION DU MOCKUP WHATSAPP 
  const wa = document.querySelector('[data-wa]');
  const waBaseUrl = "https://wa.me/message/UAHGQCLAFQF7L1"; 
  if (wa) {
    const msg = wa.dataset.waMsg;
    const url = t => waBaseUrl + (t ? '?text=' + encodeURIComponent(t) : '');
  // Lien personnalisé en bas du mockup
    const customLink = document.getElementById('wa-custom');
    if (customLink) customLink.href = url();
  // Bouton copier et ouvrir
    const btn = document.getElementById('wa-copy');
    if (btn) {
      btn.addEventListener('click', () => {
        (navigator.clipboard ? navigator.clipboard.writeText(msg) : Promise.reject()).catch(() => {});
        btn.querySelector('span').textContent = 'Copié ✓'; 
        window.open(url(msg), '_blank', 'noopener');
      });
    }
  // Animation Typing 
    const txt = document.getElementById('wa-text');
    if (txt && window.gsap) {
    const full = txt.textContent, o = { n: 0 };
    txt.textContent = ''; // Vide le texte dès le chargement du script
  // Prépare les états initiaux instantanément
    gsap.set('.wa-note', { y: -10, opacity: 0, visibility: 'visible' });
    gsap.set('#wa-bubble', { scale: .5, opacity: 0, visibility: 'visible' });
    gsap.set('#wa-copy', { autoAlpha: 0, y: 8 });
  // Lancement de la timeline au scroll
    gsap.timeline({ scrollTrigger: { trigger: '#wa-phone', start: 'top 70%', once: true } })
      .to('.wa-note', { y: 0, opacity: 1, duration: .5 })
      .to('#wa-bubble', { scale: 1, opacity: 1, duration: .5, ease: 'back.out(1.8)' }, '+=.2')
      .to(o, { n: full.length, duration: 1.6, ease: 'none', onUpdate: () => { txt.textContent = full.slice(0, Math.round(o.n)); } })
      .to('#wa-copy', { autoAlpha: 1, y: 0, duration: .5, ease: 'back.out(2)' });
  }

// 8. GESTION DES AVIS
  const reviewCards = document.querySelectorAll('.cg-rev');
  if (reviewCards.length > 0 && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle('is-in', e.isIntersecting)),
      { rootMargin: '-30% 0px -30% 0px' });
    reviewCards.forEach(c => io.observe(c));
  } else {
    reviewCards.forEach(c => c.classList.add('is-in'));
  }
}


// ------------------------------------  PORTFOLIO  ------------------------------------


(() => {
  if (!window.gsap || !document.getElementById('pf')) return;
  gsap.registerPlugin(ScrollTrigger, window.SplitText);
  const pf = document.getElementById('pf');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  pf.classList.add('pf-anim');

// 1. GESTION DE LA HERO
 document.querySelectorAll('[data-pf-title]').forEach(el => {
  const run = t => { 
    gsap.set(el, { perspective: 700 });
    return gsap.from(t, { 
      yPercent: () => gsap.utils.random(90, 160), 
      x: () => gsap.utils.random(-40, 40), 
      rotationX: -80,
      rotate: () => gsap.utils.random(-12, 12), 
      opacity: 0, 
      filter: 'blur(10px)', 
      ease: 'power3.out', 
      duration: 1,
      stagger: { each: .03, from: 'random' },
      scrollTrigger: { trigger: el.closest('.pf-sec'), start: 'top 65%', toggleActions: 'play none none reverse' } 
    }); 
  };
  if (!window.SplitText) return run(el);
  SplitText.create(el, { 
    type: 'words,chars', 
    charsClass: 'cg-ch', 
    autoSplit: true, 
    onSplit(s) {
      const t = []; 
      s.words.forEach(w => { 
        if (w.closest('.grad-text')) { 
          w.classList.add('grad-text'); 
          t.push(w); 
        } else t.push(...w.querySelectorAll('.cg-ch')); 
      });
      return run(t); 
    } 
  });
});
gsap.from('.pf-crumb, .pf-collage img, .pf-lede-card, .pf-ticker', { 
  y: 40, 
  opacity: 0, 
  duration: 1, 
  ease: 'power3.out', 
  stagger: .1, 
  delay: .4 
});
gsap.matchMedia().add('(min-width: 768px)', () => {
  gsap.utils.toArray('.pf-collage img[data-depth]').forEach(i => gsap.to(i, { 
    yPercent: +i.dataset.depth * 60, 
    ease: 'none',
    scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom top', scrub: true } 
  }));
});
// Bandeau défilant
const pfTicker = document.getElementById('pf-ticker-track');
if (pfTicker) {
  const pfLoop = gsap.to(pfTicker, { xPercent: -50, duration: 28, ease: 'none', repeat: -1 });
  ScrollTrigger.create({ 
    onUpdate: s => gsap.timeline({ overwrite: true })
      .to(pfLoop, { timeScale: 1 + Math.abs(s.getVelocity()) / 400, duration: .3 })
      .to(pfLoop, { timeScale: 1, duration: 1 }) 
  });
}

// 2. GESTION DE LA SECTION SITES WEB
  const mm = gsap.matchMedia();
// Desktop 
  mm.add('(min-width: 768px)', () => {
    const play = trigger => ({ trigger, start: 'top 85%', toggleActions: 'play none none reverse' });
    gsap.from('.pf-site, .pf-ctile, .pf-soon', { clipPath: 'inset(100% 0 0 0)', duration: 1.1, stagger: .1, ease: 'power4.out', scrollTrigger: play('.pf-quad') });
    gsap.from('.pf-panel, .pf-strip-info', { y: 40, opacity: 0, duration: .9, stagger: .15, ease: 'power3.out', scrollTrigger: play('.pf-quad') });
    gsap.from('.pf-tile', { clipPath: 'inset(100% 0 0 0)', duration: 1.1, stagger: .12, ease: 'power4.out',
      scrollTrigger: { trigger: '.pf-bento', start: 'top 80%', toggleActions: 'play none none reverse' } });
  });
// Mobile 
  mm.add('(max-width: 767px)', () => {
    gsap.utils.toArray('.pf-stk').forEach(s => {
      const img = s.querySelector('img'), kids = s.querySelectorAll('.pf-txt > *, .pf-cap > *, .pf-offer-in > *');
      if (img) gsap.fromTo(img, { scale: 1.25 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: s, start: 'top bottom', end: 'top top', scrub: true } });
      gsap.from(kids, { y: 40, opacity: 0, duration: .7, stagger: .08, ease: 'power3.out',
        scrollTrigger: { trigger: s, start: 'top 55%', toggleActions: 'play none none reverse' } });
    });
  });

// 3. GESTION DE LA SECTION LINKEDIN
  const imgs = gsap.utils.toArray('.pf-li-img'), txt = gsap.utils.toArray('.pf-li-item'), n = imgs.length, cnt = document.getElementById('pf-li-n');
  if (imgs.length > 0) {
    gsap.set(imgs.slice(1), { autoAlpha: 0, yPercent: 14, scale: .9 }); 
    gsap.set(txt.slice(1), { autoAlpha: 0, y: 24 });
    const li = gsap.timeline({ defaults: { ease: 'power2.inOut' }, scrollTrigger: { trigger: '.pf-stage', start: 'top top',
      end: () => '+=' + innerHeight * n * .75, pin: true, scrub: .5, anticipatePin: 1,
      onUpdate: s => { if (cnt) cnt.textContent = '0' + (Math.min(n - 1, Math.round(s.progress * (n - 1))) + 1); } } });
    for (let i = 1; i < n; i++) { 
      const t = (i - 1) * 2;
      li.to(imgs[i - 1], { autoAlpha: 0, yPercent: -14, scale: .9, duration: .8 }, t)
        .to(txt[i - 1], { autoAlpha: 0, y: -24, duration: .6 }, t)
        .to(imgs[i], { autoAlpha: 1, yPercent: 0, scale: 1, duration: .8 }, t + .5)
        .to(txt[i], { autoAlpha: 1, y: 0, duration: .6 }, t + .7); 
    }
    li.to({}, { duration: .6 });
  }

// GESTION DES CARROUSELS INSTAGRAM : défilement au scroll + drag manuel (souris, tactile, trackpad)
(() => {
  if (!window.gsap) return;
  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FRAME = 16.667;

  // Dojo : 2e ligne = copie de la 1re, sens inverse, décalée (affichée desktop uniquement via le CSS)
  document.querySelectorAll('.pf-row-wrap[data-mirror]').forEach(w => {
    const c = w.cloneNode(true);
    c.removeAttribute('data-mirror');
    c.dataset.dir = String(-(+w.dataset.dir || 1));
    c.dataset.offset = '0.5';
    c.classList.add('pf-row-wrap--desk');
    c.setAttribute('aria-hidden', 'true');
    w.after(c);
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { en.target._pf.inView = en.isIntersecting; });
  }, { rootMargin: '100px' });

  const rows = [...document.querySelectorAll('.pf-row-wrap')].map(el => {
    const track = el.querySelector('.pf-row');
    const originals = [...track.children];
    const r = {
      el, track, originals,
      dir: +el.dataset.dir || 1,
      offset: +el.dataset.offset || 0,
      setX: gsap.quickSetter(track, 'x', 'px'),
      W: 0, p: 0, target: 0, drag: 0, vel: 0, dragging: false, inView: false
    };
    el._pf = r;

    // Mesure la largeur d'un lot d'images et duplique de quoi couvrir l'écran
    r.measure = () => {
      track.querySelectorAll('[data-clone]').forEach(n => n.remove());
      const first = originals[0];
      const probe = first.cloneNode(true);
      track.appendChild(probe);
      const W = probe.getBoundingClientRect().left - first.getBoundingClientRect().left;
      probe.remove();
      r.W = W > 10 ? W : 0;          // 0 = ligne masquée (ex. 2e ligne Dojo sur mobile)
      if (!r.W) return;
      const copies = Math.ceil(el.clientWidth / r.W) + 1;
      const frag = document.createDocumentFragment();
      for (let i = 0; i < copies; i++) {
        originals.forEach(o => {
          const n = o.cloneNode(true);
          n.dataset.clone = '';
          n.setAttribute('aria-hidden', 'true');
          frag.appendChild(n);
        });
      }
      track.appendChild(frag);
    };
    r.measure();
    new ResizeObserver(() => r.measure()).observe(el);
    io.observe(el);

    // Progression au scroll de la section
    if (window.ScrollTrigger) {
      const st = ScrollTrigger.create({
        trigger: el.closest('.pf-sec') || el,
        start: 'top bottom', end: 'bottom top',
        onUpdate: s => { if (!reduce) r.target = s.progress; },
        onRefresh: s => { if (!reduce) r.target = r.p = s.progress; }
      });
      if (!reduce) r.target = r.p = st.progress;
    }

    // Drag manuel
    let startX = 0, startDrag = 0, lastX = 0, lastT = 0, moved = false, pid = null;

    el.addEventListener('pointerdown', e => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      r.dragging = true; moved = false; pid = e.pointerId;
      startX = lastX = e.clientX; startDrag = r.drag; r.vel = 0; lastT = e.timeStamp;
    });

    el.addEventListener('pointermove', e => {
      if (!r.dragging || e.pointerId !== pid) return;
      const dx = e.clientX - startX;
      if (!moved) {
        if (Math.abs(dx) < 5) return;           // seuil : laisse le scroll vertical tranquille
        moved = true;
        el.classList.add('is-drag');
        try { el.setPointerCapture(pid); } catch (_) {}
      }
      r.drag = startDrag - dx;
      const dt = Math.max(e.timeStamp - lastT, 1);
      r.vel = r.vel * .6 + (-(e.clientX - lastX) / dt) * .4;   // px/ms, pour l'inertie
      lastX = e.clientX; lastT = e.timeStamp;
    });

    const end = e => {
      if (!r.dragging || (e && e.pointerId !== pid)) return;
      r.dragging = false;
      el.classList.remove('is-drag');
      if (e && e.timeStamp - lastT > 80) r.vel = 0;
      try { el.releasePointerCapture(pid); } catch (_) {}
    };
    el.addEventListener('pointerup', end);
    el.addEventListener('pointercancel', end);

    // Trackpad / molette horizontale
    el.addEventListener('wheel', e => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        r.drag += e.deltaX;
      }
    }, { passive: false });

    return r;
  });

  // Rendu : scroll lissé + drag + inertie, bouclé sur la largeur d'un lot
  gsap.ticker.add((t, dtMs) => {
    const k = Math.min(dtMs, 50) / FRAME;
    rows.forEach(r => {
      if (!r.W) return;
      if (!r.inView) { r.p = r.target; return; }

      r.p += (r.target - r.p) * (1 - Math.pow(.9, k));

      if (!r.dragging && r.vel) {
        r.drag += r.vel * FRAME * k;
        r.vel *= Math.pow(.95, k);
        if (Math.abs(r.vel) < .004) r.vel = 0;
      }

      const pos = r.offset * r.W - r.dir * r.p * r.W + r.drag;
      r.setX(-(((pos % r.W) + r.W) % r.W));
    });
  });
})();

  /* Offres finales : entrée en cascade */
  gsap.from('.pf-offers li, .pf-end-foot', { y: 40, opacity: 0, duration: .8, stagger: .12, ease: 'power3.out',
    scrollTrigger: { trigger: '.pf-offers', start: 'top 85%', toggleActions: 'play none none reverse' } });

  addEventListener('load', () => ScrollTrigger.refresh());
})();






}}})




