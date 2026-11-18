document.addEventListener('DOMContentLoaded', () => {

// CONFIG --------------------------------------------------------------
  const WA_BASE_URL = 'https://wa.me/message/UAHGQCLAFQF7L1';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const hasGsap = !!window.gsap;
  const canAnimate = hasGsap && !!window.ScrollTrigger;
  if (hasGsap) {
    gsap.registerPlugin(...[window.ScrollTrigger, window.SplitText].filter(Boolean));
  }

// INIT --------------------------------------------------------------
// Sans GSAP 
  initScrollProgress();
  initPaintDrops();
  initCustomCursor();
  initHeaderScroll();
  const updateActiveSection = initScrollspy();
  initMobileMenu(updateActiveSection);
  initReveal();
  initRealisations();
  initFaq();
  initWhatsappModal();
  initProtectedEmail();
  initClockAndYear();
  initContactHeroShape();
  initWhatsappMockup();
// Animations GSAP
  if (canAnimate && !reduce) {
    initSplitTitles();
    initMarquee();
    initCards();
    initContactHeroAnimations();
  }
  if (hasGsap && document.getElementById('pf')) {
    initPortfolio();
  }

// GLOBAL --------------------------------------------------------------
// Barre de progression du scroll
  function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    window.addEventListener('scroll', () => {
      const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      bar.style.width = total > 0 ? `${(window.scrollY / total) * 100}%` : '0%';
    }, { passive: true });
  }

// Effet de souris
  function initPaintDrops() {
    let lastX = 0, lastY = 0, throttle = 0;
    const colors = ['#ff66c4', '#5ce1e6', '#ffffff'];
    function createDrop(x, y) {
      const drop = document.createElement('div');
      const size = Math.random() * 8 + 4;
      const color = colors[Math.floor(Math.random() * colors.length)];
      drop.classList.add('paint-drop');
      drop.style.left = `${x + (Math.random() - 0.5) * 20}px`;
      drop.style.top = `${y + (Math.random() - 0.5) * 20}px`;
      drop.style.width = `${size}px`;
      drop.style.height = `${size}px`;
      drop.style.backgroundColor = color;
      drop.style.boxShadow = `0 0 6px ${color}`;
      document.body.appendChild(drop);
      setTimeout(() => drop.remove(), 600);
    }
    window.addEventListener('mousemove', e => {
      throttle++;
      if (throttle % 2 !== 0) return;
      const speed = Math.hypot(e.clientX - lastX, e.clientY - lastY);
      lastX = e.clientX;
      lastY = e.clientY;
      const count = Math.min(Math.floor(speed / 4) + 1, 4);
      for (let i = 0; i < count; i++) createDrop(e.clientX, e.clientY);
    });
  }

// Curseur personnalisé
  function initCustomCursor() {
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    if (!cursor || !ring) return;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    window.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    });
    (function animateRing() {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      requestAnimationFrame(animateRing);
    })();
    document.querySelectorAll('a, button, input, textarea, select').forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

// Header au scroll
  function initHeaderScroll() {
    const header = document.getElementById('main-header');
    if (!header) return;
    const scrolledClasses = ['bg-[#f8fbff]', 'backdrop-blur-md', 'border-b-2', 'border-[#2e3d59]/10', 'shadow-sm'];
    const update = () => {
      const scrolled = window.scrollY > 24;
      header.classList.toggle('bg-transparent', !scrolled);
      scrolledClasses.forEach(c => header.classList.toggle(c, scrolled));
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

// Scrollspy (menu desktop + mobile)
  function initScrollspy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('header nav a[href^="#"], #mobile-menu a[href^="#"]');
    if (!sections.length || !navLinks.length) return () => {};
    const getOffsetTop = el => {
      let top = 0;
      while (el) { top += el.offsetTop; el = el.offsetParent; }
      return top;
    };
    function update() {
      const pos = window.scrollY + window.innerHeight * 0.25;
      let activeId = '';
      sections.forEach(section => {
        const top = getOffsetTop(section);
        if (pos >= top && pos < top + section.offsetHeight) activeId = section.id;
      });
    // Tout en bas de page : dernière section présente dans le menu
      if (!activeId && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        for (let i = sections.length - 1; i >= 0; i--) {
          if (document.querySelector(`a[href="#${sections[i].id}"]`)) {
            activeId = sections[i].id;
            break;
          }
        }
      }
      if (!activeId) return;
      navLinks.forEach(link => {
        link.classList.toggle('active-section', link.getAttribute('href').substring(1) === activeId);
      });
    }
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
    return update;
  }

// Menu mobile
  function initMobileMenu(onOpen) {
    const btn = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');
    const burger = document.getElementById('icon-burger');
    const cross = document.getElementById('icon-cross');
    if (!btn || !menu) return;
    let isOpen = false;
    btn.addEventListener('click', () => {
      isOpen = !isOpen;
      menu.classList.toggle('max-h-0', !isOpen);
      menu.classList.toggle('opacity-0', !isOpen);
      menu.classList.toggle('max-h-[500px]', isOpen);
      menu.classList.toggle('opacity-100', isOpen);
      if (isOpen) onOpen();
      if (burger && cross) {
        burger.classList.toggle('opacity-0', isOpen);
        burger.classList.toggle('scale-75', isOpen);
        burger.classList.toggle('rotate-90', isOpen);
        cross.classList.toggle('opacity-0', !isOpen);
        cross.classList.toggle('scale-75', !isOpen);
        cross.classList.toggle('opacity-100', isOpen);
        cross.classList.toggle('scale-100', isOpen);
        cross.classList.toggle('rotate-0', isOpen);
      }
    });
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => { if (isOpen) btn.click(); });
    });
  }

// Apparition au scroll (.reveal)
  function initReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));
  }

// Titres animés [data-split]
  function initSplitTitles() {
    document.querySelectorAll('[data-split]').forEach(el => {
      const hero = el.tagName === 'H1';
      const run = targets => {
        gsap.set(el, { perspective: 700 });
        return gsap.from(targets, {
          yPercent: () => gsap.utils.random(90, 160),
          x: () => gsap.utils.random(-40, 40),
          rotationX: -80,
          rotate: () => gsap.utils.random(-12, 12),
          opacity: 0,
          filter: 'blur(10px)',
          ease: hero ? 'expo.out' : 'power3.out',
          duration: hero ? 1.3 : 1,
          stagger: { each: .03, from: hero ? 'start' : 'random' },
          delay: hero ? .2 : 0,
          scrollTrigger: hero ? null : { trigger: el, start: 'top 88%', end: 'top 45%', scrub: .7 }
        });
      };
      if (!window.SplitText) return run(el);
      SplitText.create(el, {
        type: 'words,chars',
        charsClass: 'cg-ch',
        autoSplit: true,
        onSplit(self) {
          const targets = [];
          self.words.forEach(w => {
            if (w.closest('.grad-text')) { w.classList.add('grad-text'); targets.push(w); }
            else targets.push(...w.querySelectorAll('.cg-ch'));
          });
          return run(targets);
        }
      });
    });
  }

// Bandeaux marquee 
  function initMarquee() {
    const tracks = document.querySelectorAll('.cg-track');
    if (!tracks.length) return;
    const loops = Array.from(tracks).map(track =>
      gsap.to(track, { xPercent: -50, duration: 28, ease: 'none', repeat: -1 })
    );
    ScrollTrigger.create({
      onUpdate: s => {
        const targetScale = 1 + Math.abs(s.getVelocity()) / 400;
        loops.forEach(loop => {
          gsap.timeline({ overwrite: true })
            .to(loop, { timeScale: targetScale, duration: 0.3 })
            .to(loop, { timeScale: 1, duration: 1 });
        });
      }
    });
  }

// Cartes 
  function initCards() {
    gsap.set('[data-card]', { opacity: 0, y: 70 });
    ScrollTrigger.batch('[data-card]', {
      start: 'top 88%',
      once: true,
      onEnter: els => gsap.to(els, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: .12 })
    });
    if (!fine) return;
    document.querySelectorAll('.cg-card:not(.cg-notilt):not(.cg-step), .cg-rev').forEach(c => {
      const rx = gsap.quickTo(c, 'rotateX', { duration: .5, ease: 'power3' });
      const ry = gsap.quickTo(c, 'rotateY', { duration: .5, ease: 'power3' });
      gsap.set(c, { transformPerspective: 900 });
      c.addEventListener('pointermove', e => {
        const r = c.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        c.style.setProperty('--mx', x * 100 + '%');
        c.style.setProperty('--my', y * 100 + '%');
        ry((x - .5) * 8);
        rx((.5 - y) * 8);
      });
      c.addEventListener('pointerleave', () => { rx(0); ry(0); });
    });

// CTA magnétiques
    document.querySelectorAll('.cg-magnet').forEach(b => {
      const mx = gsap.quickTo(b, 'x', { duration: .4, ease: 'power3' });
      const my = gsap.quickTo(b, 'y', { duration: .4, ease: 'power3' });
      b.addEventListener('pointermove', e => {
        const r = b.getBoundingClientRect();
        mx((e.clientX - r.left - r.width / 2) * .25);
        my((e.clientY - r.top - r.height / 2) * .35);
      });
      b.addEventListener('pointerleave', () => { mx(0); my(0); });
    });
  }

// Protection mail base64
  function initProtectedEmail() {
    document.querySelectorAll('a.protected-mail, #protected-email').forEach(link => {
      const u = link.dataset.u;
      const d = link.dataset.d;

      const email = (u && d)
        ? `${atob(u)}@${atob(d)}`
        : atob('Y29udGFjdEBhbTIwLmZy');

      link.href = 'mailto:' + email;

      const targetText = link.querySelector('.mail-text') || link;
      targetText.textContent = email;
    });
  }

// Heure mockup whatsapp
  function initClockAndYear() {
    const now = new Date();
    const time = now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0');
    document.querySelectorAll('#wa-time, .wa-modal-time, #wa-clock, .wa-modal-clock')
      .forEach(el => { el.textContent = time; });

// Année copy footer
    const year = document.getElementById('current-year');
    if (year) year.textContent = now.getFullYear();
  }



// REALISATIONS --------------------------------------------------------------
  function initRealisations() {
    initRealisationsShowcase();
    initPixelReveal();
  }
  function initRealisationsShowcase() {
    const root = document.querySelector('#realisations .of-quad');
    if (!root) return;
    const items = [...root.querySelectorAll('.of-item')];
    const imgs = [...root.querySelectorAll('.of-img')];
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const DURATION = 5000; // durée de la barre de progression (ms)
    let current = 0, anim = null, paused = false, visible = false;
    const stop = () => { anim?.cancel(); anim = null; };
  // La bordure se dessine ; quand elle est complète, on passe à la carte suivante
    const play = () => {
      stop();
      if (reduce || paused || !visible || document.hidden) return;
      const bar = items[current].querySelector('.of-bar');
      anim = bar.animate(
        [{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }],
        { duration: DURATION, easing: 'linear', fill: 'forwards' }
      );
      anim.onfinish = () => go((current + 1) % items.length);
    };
    const go = i => {
      current = i;
      items.forEach((el, k) => el.dataset.active = k === i);
      imgs.forEach((el, k) => el.dataset.active = k === i);
      play();
    };
  // Hover / focus / clic : même rendu que l'autoplay, mais on met l'autoplay en pause
    items.forEach((el, i) => {
      el.addEventListener('pointerenter', () => go(i));
      el.addEventListener('focus', () => go(i));
      el.addEventListener('click', () => go(i));
    });
    const pause = () => { paused = true; stop(); };
    const resume = () => { paused = false; play(); };
    root.addEventListener('pointerenter', pause);
    root.addEventListener('pointerleave', resume);
    root.addEventListener('focusin', pause);
    root.addEventListener('focusout', resume);
  // Autoplay seulement quand la zone est visible et l'onglet actif
    new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      visible ? play() : stop();
    }, { threshold: 0.35 }).observe(root);
    document.addEventListener('visibilitychange', play);
    go(0); // état initial : « Sites web » ouvert
  }

// Pixel reveal des images (mobile uniquement)
  function initPixelReveal() {
    if (!matchMedia('(max-width: 1023px)').matches) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const STEPS = [6, 12, 24, 48, 96, 192]; 
    const STEP_MS = 110;
    document.querySelectorAll('#realisations .px-reveal').forEach(box => {
      const img = box.querySelector('img');
      const cv = document.createElement('canvas');
      cv.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;background:#2e3d59;image-rendering:pixelated;transition:opacity .3s';
      box.appendChild(cv);
      const ctx = cv.getContext('2d');
      const off = document.createElement('canvas');
      const draw = cols => {
        const w = cv.width, h = cv.height;
        off.width = cols;
        off.height = Math.max(1, Math.round(cols * h / w));
        off.getContext('2d').drawImage(img, 0, 0, off.width, off.height);
        ctx.imageSmoothingEnabled = false;
        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(off, 0, 0, off.width, off.height, 0, 0, w, h);
      };
      const ready = (img.decode ? img.decode() : Promise.resolve()).catch(() => {});
      const run = () => ready.then(() => {
        cv.width = box.clientWidth;
        cv.height = box.clientHeight;
        STEPS.forEach((cols, k) => setTimeout(() => draw(cols), k * STEP_MS));
        setTimeout(() => {
          cv.style.opacity = '0';
          setTimeout(() => cv.remove(), 320);
        }, STEPS.length * STEP_MS);
      });
      const io = new IntersectionObserver(([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        run();
      }, { threshold: 0.25 });
      io.observe(box);
    });
  }

// AVIS CLIENTS --------------------------------------------------------------
  function initAvis() {
    const root = document.getElementById('avAvis');
    if (!root) return;
    const rows   = [...root.querySelectorAll('.av-row')];
    const tracks = rows.map(r => r.querySelector('.av-track'));
    const home   = tracks.map(t => [...t.children]);                        
    const all    = home.flat().sort((a, b) => a.dataset.i - b.dataset.i);   
    const desk   = matchMedia('(min-width:1024px)');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)');
    const SPEED  = 38;                                                      
// Un état par ligne : position, vitesse d'inertie, survol, drag 
    const S = rows.map((row, k) => ({
      row, track: tracks[k], dir: k === 0 ? 1 : -1,       
      on: true, W: 1, o: 0, v: 0, hover: false, drag: false, resume: 0
    }));
    let ios = [], last = 0;
// Interactions : survol = pause, glisser = déplacement manuel + inertie 
    S.forEach(s => {
      let id = null, lx = 0, lt = 0;
      s.row.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') s.hover = true; });
      s.row.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') s.hover = false; });
      s.row.addEventListener('pointerdown', e => {
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        id = e.pointerId; lx = e.clientX; lt = performance.now();
        s.drag = true; s.v = 0;
        if (e.pointerType === 'mouse') s.row.setPointerCapture(id);
      });
      s.row.addEventListener('pointermove', e => {
        if (!s.drag || e.pointerId !== id) return;
        const now = performance.now(), dx = e.clientX - lx, dt = Math.max(1, now - lt);
        s.o -= dx;
        s.v = s.v * 0.7 + (-dx / dt) * 0.3;                
        lx = e.clientX; lt = now;
      });
      const end = e => {
        if (e.pointerId !== id) return;
        s.drag = false; id = null;
        if (performance.now() - lt > 80) s.v = 0;         
        s.resume = performance.now() + (e.pointerType === 'mouse' ? 0 : 1500);
      };
      s.row.addEventListener('pointerup', end);
      s.row.addEventListener('pointercancel', end);
    });
  // Boucle d'animation 
    function frame(t) {
      const dt = Math.min(50, t - (last || t)); last = t;
      S.forEach(s => {
        if (!s.on) return;
        if (!s.drag) {
          s.o += s.v * dt;
          s.v *= Math.pow(0.94, dt / 16.7);
          if (Math.abs(s.v) < 0.01) s.v = 0;
          if (!reduce.matches && !s.hover && s.v === 0 && t >= s.resume) s.o += s.dir * SPEED * dt / 1000;
        }
        s.o = ((s.o % s.W) + s.W) % s.W;                   
        s.track.style.transform = 'translate3d(' + (-s.o) + 'px,0,0)';
      });
      requestAnimationFrame(frame);
    }
  // Noir & blanc aux bords, couleur dans la zone centrale 
    function watch(s, margin) {
      const io = new IntersectionObserver(
        es => es.forEach(e => e.target.classList.toggle('is-in', e.intersectionRatio >= 0.5)),
        { root: s.row, rootMargin: margin, threshold: [0, 0.5, 1] }
      );
      [...s.track.children].forEach(c => io.observe(c));
      ios.push(io);
    }
  // (Re)configuration desktop / mobile 
    function setup() {
      ios.forEach(o => o.disconnect()); ios = [];
      root.querySelectorAll('[data-clone]').forEach(n => n.remove());
      root.querySelectorAll('.av-card').forEach(c => c.classList.remove('is-in'));
      const isDesk = desk.matches;
      if (isDesk) home.forEach((cs, k) => cs.forEach(c => tracks[k].appendChild(c)));
      else        all.forEach(c => tracks[0].appendChild(c));         
      S.forEach((s, k) => {
        s.on = isDesk || k === 0;
        s.o = 0; s.v = 0;
        if (!s.on) return;
        s.W = Math.max(1, s.track.scrollWidth);                         
        const originals = [...s.track.children];
        const n = Math.ceil(s.row.clientWidth / s.W);                   
        for (let i = 0; i < n; i++) {
          originals.forEach(c => {
            const x = c.cloneNode(true);
            x.dataset.clone = '1';
            x.setAttribute('aria-hidden', 'true');
            s.track.appendChild(x);
          });
        }
        watch(s, isDesk ? '0px -12% 0px -12%' : '0px -10% 0px -10%');
      });
    }
    let lastW = innerWidth, tm;
    setup();
    requestAnimationFrame(frame);
    desk.addEventListener('change', setup);
    addEventListener('resize', () => {
      clearTimeout(tm);
      tm = setTimeout(() => { if (innerWidth !== lastW) { lastW = innerWidth; setup(); } }, 200);
    });
  }
  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', initAvis)
    : initAvis();


// FAQ --------------------------------------------------------------
  function initFaq() {
    const items = document.querySelectorAll('.faq-item');
    if (!items.length) return;
  // Classes écrites en toutes lettres pour que Tailwind les détecte
    const BORDERS = {
      pink: { on: 'border-[#ff66c4]', off: 'border-[#ff66c4]/40' },
      cyan: { on: 'border-[#22b8c2]', off: 'border-[#22b8c2]/40' }
    };
    function setOpen(item, open) {
      const btn = item.querySelector('.faq-toggle');
      const content = item.querySelector('.faq-content');
      const chevron = item.querySelector('.icon-chevron');
      const cross = item.querySelector('.icon-cross');
      const b = BORDERS[item.getAttribute('data-border-color') === 'pink' ? 'pink' : 'cyan'];
      content.classList.toggle('hidden', !open);
      btn.setAttribute('aria-expanded', String(open));
      item.classList.remove(open ? b.off : b.on);
      item.classList.add(open ? b.on : b.off);
      if (chevron && cross) {
        chevron.classList.toggle('opacity-0', open);
        chevron.classList.toggle('scale-75', open);
        chevron.classList.toggle('opacity-100', !open);
        chevron.classList.toggle('scale-100', !open);
        cross.classList.toggle('opacity-0', !open);
        cross.classList.toggle('scale-75', !open);
        cross.classList.toggle('opacity-100', open);
        cross.classList.toggle('scale-100', open);
      }
    }
    items.forEach(item => {
      const btn = item.querySelector('.faq-toggle');
      const content = item.querySelector('.faq-content');
      if (!btn || !content) return;
      btn.addEventListener('click', () => {
        const wasOpen = !content.classList.contains('hidden');
        items.forEach(other => {
          if (other !== item && other.querySelector('.faq-content')) setOpen(other, false);
        });
        setOpen(item, !wasOpen);
      });
    });
  }


// MODALE WHATSAPP --------------------------------------------------------------
  function initWhatsappModal() {
    const modal = document.getElementById('wa-modal');
    const card = document.getElementById('wa-modal-card');
    const closeBtn = document.getElementById('wa-modal-close');
    const textEl = document.getElementById('wa-modal-text');
    const copyBtn = document.getElementById('wa-modal-copy-btn');
    const rawBtn = document.getElementById('wa-raw-btn');
    const triggers = document.querySelectorAll('.btn-wa-trigger');
    if (!modal || !triggers.length) return;
    let currentMessage = '';
    function openModal() {
      modal.classList.remove('opacity-0', 'pointer-events-none');
      if (card) {
        card.classList.remove('scale-90');
        card.classList.add('scale-100');
      }
    // Typing effect
      if (window.gsap && textEl) {
        const note = modal.querySelector('.wa-note');
        const bubble = modal.querySelector('.wa-out');
        const copyInModal = modal.querySelector('#wa-modal-copy-btn');
        const obj = { n: 0 };
        if (copyInModal) gsap.set(copyInModal, { autoAlpha: 0, y: 8 });
        textEl.textContent = '';
        if (note) gsap.set(note, { y: 0, opacity: 1 });
        if (bubble) gsap.set(bubble, { scale: 1, opacity: 1 });
        const tl = gsap.timeline();
        if (note) tl.from(note, { y: -10, opacity: 0, duration: .4 });
        if (bubble) tl.from(bubble, { scale: .5, opacity: 0, duration: .4, ease: 'back.out(1.8)' }, '+=.1');
        tl.to(obj, {
          n: currentMessage.length,
          duration: 1.2,
          ease: 'none',
          onUpdate: () => { textEl.textContent = currentMessage.slice(0, Math.round(obj.n)); }
        });
        if (copyInModal) tl.to(copyInModal, { autoAlpha: 1, y: 0, duration: .4, ease: 'back.out(2)' });
      } else if (textEl) {
        textEl.textContent = currentMessage;
      }
      if (rawBtn) rawBtn.href = WA_BASE_URL;
    }
    function closeModal(e) {
      if (e) e.preventDefault();
      modal.classList.add('opacity-0', 'pointer-events-none');
      if (card) {
        card.classList.remove('scale-100');
        card.classList.add('scale-90');
      }
    }
    triggers.forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        currentMessage = btn.getAttribute('data-wa-msg') || 'Bonjour, je souhaiterais échanger sur mon projet.';
        openModal();
      });
    });
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
      closeBtn.addEventListener('touchend', closeModal);
    }
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(currentMessage).then(() => {
          const original = copyBtn.innerHTML;
          copyBtn.innerHTML = '<span class="text-white font-semibold">Texte copié ! Redirection...</span>';
          setTimeout(() => {
            window.open(`${WA_BASE_URL}?text=${encodeURIComponent(currentMessage)}`, '_blank');
            closeModal();
            copyBtn.innerHTML = original;
          }, 600);
        }).catch(err => console.error('Erreur lors de la copie :', err));
      });
    }
    if (rawBtn) rawBtn.addEventListener('click', () => setTimeout(closeModal, 500));
  }


// PAGE CONTACT --------------------------------------------------------------
// Hero mobile - le texte fit avec l'image
  function initContactHeroShape() {
    const fig = document.querySelector('.cg-mob');
    const im = fig && fig.querySelector('img');
    if (!im) return;
    const shape = () => {
      try {
        const w = im.naturalWidth, h = im.naturalHeight;
        if (!w) return;
        fig.style.aspectRatio = w + '/' + h;
        const N = 40;
        const c = document.createElement('canvas');
        c.width = 200;
        c.height = Math.round(200 * h / w);
        const g = c.getContext('2d', { willReadFrequently: true });
        g.drawImage(im, 0, 0, c.width, c.height);
        const d = g.getImageData(0, 0, c.width, c.height).data;
        const pts = ['100% 0%'];

        for (let i = 0; i <= N; i++) {
          const y = Math.min(c.height - 1, Math.round(i / N * (c.height - 1)));
          let x = c.width;
          for (let k = 0; k < c.width; k++) {
            if (d[(y * c.width + k) * 4 + 3] > 24) { x = k; break; }
          }
          pts.push((x / c.width * 100).toFixed(1) + '% ' + (i / N * 100).toFixed(1) + '%');
        }
        pts.push('100% 100%');
        fig.style.shapeOutside = 'polygon(' + pts.join(',') + ')';
      } catch (e) {}
    };
    im.naturalWidth ? shape() : im.addEventListener('load', shape);
  }

// Hero de la page contact
  function initContactHeroAnimations() {
    if (document.querySelector('[data-hero]')) {
      gsap.from('[data-hero]', { y: 30, opacity: 0, duration: .9, ease: 'power3.out', stagger: .1, delay: .5 });
    }
    if (document.querySelector('[data-hero-photo] img')) {
      gsap.from('[data-hero-photo] img', { clipPath: 'inset(100% 0 0 0)', scale: 1.15, duration: 1.4, ease: 'power4.out', delay: .3 });
    }
    if (document.querySelector('.cg-chip[data-float]')) {
      gsap.from('.cg-chip[data-float]', { scale: 0, opacity: 0, duration: .8, ease: 'back.out(2)', stagger: .15, delay: 1.2 });
    }
    gsap.utils.toArray('[data-float]').forEach((c, i) =>
      gsap.to(c, { y: i ? 10 : -10, duration: 2.4 + i * .5, ease: 'sine.inOut', yoyo: true, repeat: -1 })
    );
    if (document.querySelector('[data-hero-photo]') && document.getElementById('top')) {
      gsap.to('[data-hero-photo]', {
        yPercent: -6, ease: 'none',
        scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom top', scrub: true }
      });
    }
  }

// Mockup WhatsApp 
  function initWhatsappMockup() {
    const wa = document.querySelector('[data-wa]');
    if (!wa) return;
    const msg = wa.dataset.waMsg;
    const url = t => WA_BASE_URL + (t ? '?text=' + encodeURIComponent(t) : '');
    const customLink = document.getElementById('wa-custom');
    if (customLink) customLink.href = url();
    const btn = document.getElementById('wa-copy');
    if (btn) {
      btn.addEventListener('click', () => {
        (navigator.clipboard ? navigator.clipboard.writeText(msg) : Promise.reject()).catch(() => {});
        btn.querySelector('span').textContent = 'Copié ✓';
        window.open(url(msg), '_blank', 'noopener');
      });
    }
    const txt = document.getElementById('wa-text');
    if (txt && canAnimate && !reduce) {
      const full = txt.textContent;
      const o = { n: 0 };
      txt.textContent = '';
      gsap.set('.wa-note', { y: -10, opacity: 0, visibility: 'visible' });
      gsap.set('#wa-bubble', { scale: .5, opacity: 0, visibility: 'visible' });
      gsap.set('#wa-copy', { autoAlpha: 0, y: 8 });

      gsap.timeline({ scrollTrigger: { trigger: '#wa-phone', start: 'top 70%', once: true } })
        .to('.wa-note', { y: 0, opacity: 1, duration: .5 })
        .to('#wa-bubble', { scale: 1, opacity: 1, duration: .5, ease: 'back.out(1.8)' }, '+=.2')
        .to(o, { n: full.length, duration: 1.6, ease: 'none', onUpdate: () => { txt.textContent = full.slice(0, Math.round(o.n)); } })
        .to('#wa-copy', { autoAlpha: 1, y: 0, duration: .5, ease: 'back.out(2)' });
    }
  }


// PAGE PORTFOLIO --------------------------------------------------------------
  function initPortfolio() {
    const pf = document.getElementById('pf');
    const animate = canAnimate && !reduce;
    if (animate) {
      pf.classList.add('pf-anim');
      pfHero();
      pfTicker();
      pfSites();
      pfLinkedin();
    }
    pfInstagramCarousels();
    pfReels();
    if (animate) pfOffers();

// Hero
  function pfHero() {
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
            if (w.closest('.grad-text')) { w.classList.add('grad-text'); t.push(w); }
            else t.push(...w.querySelectorAll('.cg-ch'));
          });
          return run(t);
        }
      });
    });
    gsap.from('.pf-crumb, .pf-lede-card, .pf-ticker', {
      y: 40, opacity: 0, duration: 1, ease: 'power3.out', stagger: .1, delay: .4
    });
  }

// Bandeau bannières défilant
  function pfTicker() {
    const track = document.getElementById('pf-ticker-track');
    if (!track) return;
    const loop = gsap.to(track, { xPercent: -50, duration: 28, ease: 'none', repeat: -1 });
    ScrollTrigger.create({
      onUpdate: s => gsap.timeline({ overwrite: true })
        .to(loop, { timeScale: 1 + Math.abs(s.getVelocity()) / 400, duration: .3 })
        .to(loop, { timeScale: 1, duration: 1 })
    });
  }

// Section Sites web
  function pfSites() {
    const mm = gsap.matchMedia();
  // Desktop
    mm.add('(min-width: 768px)', () => {
      const play = trigger => ({ trigger, start: 'top 85%', toggleActions: 'play none none reverse' });
      gsap.from('.pf-site, .pf-ctile, .pf-soon', { clipPath: 'inset(100% 0 0 0)', duration: 1.1, stagger: .1, ease: 'power4.out', scrollTrigger: play('.pf-quad') });
      gsap.from('.pf-panel, .pf-strip-info', { y: 40, opacity: 0, duration: .9, stagger: .15, ease: 'power3.out', scrollTrigger: play('.pf-quad') });
      gsap.from('.pf-tile', {
        clipPath: 'inset(100% 0 0 0)', duration: 1.1, stagger: .12, ease: 'power4.out',
        scrollTrigger: { trigger: '.pf-bento', start: 'top 80%', toggleActions: 'play none none reverse' }
      });
    });
  // Mobile
    mm.add('(max-width: 767px)', () => {
      gsap.utils.toArray('.pf-stk').forEach(s => {
        const img = s.querySelector('img');
        const kids = s.querySelectorAll('.pf-txt > *, .pf-cap > *, .pf-offer-in > *');
        if (img) {
          gsap.fromTo(img, { scale: 1.25 }, {
            scale: 1, ease: 'none',
            scrollTrigger: { trigger: s, start: 'top bottom', end: 'top top', scrub: true }
          });
        }
        gsap.from(kids, {
          y: 40, opacity: 0, duration: .7, stagger: .08, ease: 'power3.out',
          scrollTrigger: { trigger: s, start: 'top 55%', toggleActions: 'play none none reverse' }
        });
      });
    });
  }

// Section LinkedIn 
  function pfLinkedin() {
    const imgs = gsap.utils.toArray('.pf-li-img');
    const txts = gsap.utils.toArray('.pf-li-item');
    const n = imgs.length;
    const cnt = document.getElementById('pf-li-n');
    if (!n) return;
    gsap.matchMedia().add('(min-width: 768px)', () => {
      gsap.set(imgs.slice(1), { autoAlpha: 0, yPercent: 14, scale: .9 });
      gsap.set(txts.slice(1), { autoAlpha: 0, y: 24 });
      const li = gsap.timeline({
        defaults: { ease: 'power2.inOut' },
        scrollTrigger: {
          trigger: '.pf-stage',
          start: 'top top',
          end: () => '+=' + innerHeight * n * .75,
          pin: true,
          scrub: .5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: s => {
            if (cnt) cnt.textContent = '0' + (Math.min(n - 1, Math.round(s.progress * (n - 1))) + 1);
          }
        }
      });
      for (let i = 1; i < n; i++) {
        const t = (i - 1) * 2;
        li.to(imgs[i - 1], { autoAlpha: 0, yPercent: -14, scale: .9, duration: .8 }, t)
          .to(txts[i - 1], { autoAlpha: 0, y: -24, duration: .6 }, t)
          .to(imgs[i], { autoAlpha: 1, yPercent: 0, scale: 1, duration: .8 }, t + .5)
          .to(txts[i], { autoAlpha: 1, y: 0, duration: .6 }, t + .7);
      }
      li.to({}, { duration: .6 });
    });
  }

// Carrousels Instagram 
  function pfInstagramCarousels() {
    const FRAME = 16.667;
  // Dojo : 2e ligne
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
  // Mesure un lot d'images et duplique de quoi couvrir l'écran
      r.measure = () => {
        track.querySelectorAll('[data-clone]').forEach(n => n.remove());
        const first = originals[0];
        const probe = first.cloneNode(true);
        track.appendChild(probe);
        const W = probe.getBoundingClientRect().left - first.getBoundingClientRect().left;
        probe.remove();
        r.W = W > 10 ? W : 0; 
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
          start: 'top bottom',
          end: 'bottom top',
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
          if (Math.abs(dx) < 5) return;  
          moved = true;
          el.classList.add('is-drag');
          try { el.setPointerCapture(pid); } catch (_) {}
        }
        r.drag = startDrag - dx;
        const dt = Math.max(e.timeStamp - lastT, 1);
        r.vel = r.vel * .6 + (-(e.clientX - lastX) / dt) * .4;   
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
  }

// Bouton play shimmer sur la vidéo 
  function pfReels() {
    document.querySelectorAll('[data-reel]').forEach(w => {
      const v = w.querySelector('video');
      w.querySelector('[data-reel-play]').addEventListener('click', () => {
        v.controls = true;
        w.classList.add('is-playing');
        v.play().catch(() => { w.classList.remove('is-playing'); v.controls = false; });
      });
    });
  }

// CTA Offres finales 
    function pfOffers() {
      gsap.from('.pf-offers li, .pf-end-foot', {
        y: 40, opacity: 0, duration: .8, stagger: .12, ease: 'power3.out',
        scrollTrigger: { trigger: '.pf-offers', start: 'top 85%', toggleActions: 'play none none reverse' }
      });
    }
  }
});