let localConfig = {
    selectedMode: "",
    template:"moderne",
    colors: { accent: "#8449d9", dark: "#0E1B2A", bgLight: "#F8FAFC" },
    meta: { title: "", description: "" },
    header: { logo: "", companyName: "Logo ou Nom", useTextOnly: false },
    hero: {
        title: "Ton titre principal",
        desc: "Explique en une phrase ce que tu fais, pour qui, et le bénéfice principal. Simple, concret, sans jargon technique. Si on ne comprend pas en 5 secondes, simplifie.",
        ctaLabel: "Voir nos services",
        img: "",
        showFigures: true,
        figures: [
            { num: "999+", label: "Ta réalisation" },
            { num: "999", label: "Ton expérience" },
            { num: "999%", label: "Tes clients" }
        ]
    },
    services: {
    title: "Nos solutions",
    items: [

        { h3: "Service 1", p: "Présente ici un service clé ou un bénéfice majeur. Explique ce que tu fais, pour qui, et ce que ça change pour ton client.", price: "", prefix: "", showPrice: true, showPrefix: true },
        { h3: "Service 2", p: "Présente ici un service clé ou un bénéfice majeur. Explique ce que tu fais, pour qui, et ce que ça change pour ton client.", price: "", prefix: "", showPrice: true, showPrefix: true },
        { h3: "Service 3", p: "Présente ici un service clé ou un bénéfice majeur. Explique ce que tu fais, pour qui, et ce que ça change pour ton client.", price: "", prefix: "", showPrice: true, showPrefix: true }
    ]
},
    testimonials: {
    show: true,
    title: "Ce que nos clients disent",
    ctaText: "Et si vous étiez le prochain ?",
    items: [
        { stars: "5", text: "Copie ici une phrase réelle d’un client (avis Google, message, email…). Idéalement : le problème qu’il avait + ce que ton service lui a apporté. Court et authentique.", name: "Prénom du client", role: "Métier / activité" },
        { stars: "5", text: "Avant de travailler avec [ton activité], je [problème ou situation]. Aujourd’hui, je [résultat ou bénéfice concret].", name: "Prénom", role: "Statut ou secteur" },
        { stars: "5", text: "Ce que j’ai le plus apprécié : [point fort de ton accompagnement ou de ta prestation]. Je recommande à [type de client].", name: "Prénom", role: "Métier / entreprise" }
    ]
},
    gallery: {
        show: true,
        title: "Des résultats concrets",
        images: [
            { src: "", cap: "Témoignage client : [Prénom], [métier/statut] : ‘[Phrase courte sur ce qu’ils ont aimé ou le résultat]" },
            { src: "", cap: "Projet / réalisation : [Nom du projet] pour [client/secteur] – [bénéfice principal ou usage]" },
            { src: "", cap: "Bénéfice / avant‑après : [Produit/service réalisé] – aide [client/secteur] à [résultat principal]" }
        ]
    },
    about: {
        title: "Qui sommes nous",
        desc: "Racontez en quelques phrases qui vous êtes et ce que vous faites. Vous pouvez : vous présenter individuellement (votre rôle, votre approche, vos forces) ; présenter votre équipe (qui fait quoi, vos expertises) ; ou expliquer votre concept / votre société (mission, valeur ajoutée, bénéfices pour vos clients). Soyez clair, simple et engageant : l’objectif est que quelqu’un comprenne votre activité en 5 secondes.",
        img: ""
    },
    practical: {
        show: false,
        title: "Infos Pratiques",
        locationTitle: "Notre Emplacement",
        hoursTitle: "Nos Horaires",
        mapBtnLabel: "Voir l'itinéraire",
        address: "123 Rue de la Réussite, 75000 Paris",
        mapsLink: "https://goo.gl/maps/...",
        displayMode: "text",
        hoursImg: "",
        hoursItems: [
            { label: "Lun - Ven", time: "09:00 - 18:00" },
            { label: "Samedi", time: "10:00 - 14:00" },
            { label: "Dimanche", time: "10:00 - 14:00" }
        ]
    },
    faq: {
        show: true,
        title: "Questions fréquentes",
        items: [
            {
            q: "Est-ce que cette offre est faite pour moi ?",
            a: "Explique à qui s’adresse ton service (type de client, situation, besoin principal) et dans quels cas c’est idéal. Tu peux aussi préciser pour qui ce n’est pas forcément adapté."
            },
            {
            q: "Comment se passe la collaboration / la prestation ?",
            a: "Décris les grandes étapes simplement : premier contact, échange ou diagnostic, réalisation, livraison ou suivi. Rassure sur la clarté et la simplicité du process."
            },
            {
            q: "En combien de temps puis-je avoir des résultats ?",
            a: "Indique un délai réaliste : mise en place, livraison, premiers effets visibles. Si ça dépend de certains facteurs, précise lesquels sans entrer dans le technique."
            },
            {
            q: "Puis-je adapter ou faire évoluer la prestation plus tard ?",
            a: "Explique ce qui est modifiable, évolutif ou personnalisable dans le temps, et dans quelles conditions (ajustements, options, accompagnement, etc.)."
            },
            {
            q: "Comment démarrer / prendre contact ?",
            a: "Explique clairement l’action à faire ensuite : prise de rendez-vous, formulaire, appel, message. Rassure sur le fait que le premier échange est simple et sans engagement."
            }
        ]
    },
    contact: {
        title: "Parlons de votre projet",
        desc: "Explique ici comment on te contacte et ce que la personne va obtenir. Dis s’il s’agit d’un appel, d’un mail ou d’un rendez-vous, et à quoi ça sert (questions, devis, projet).En une lecture, on doit savoir ce qui se passe après le clic.",
        ctaLabel: "Prendre RDV",
        type: "RDV",
        value: "https://votre-url-ici"
    },
    socials: {
        title: "Suivez-nous",
        linkedin: "https://linkedin.com/",  
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/"
    },
    legal: {
        editor: "[NOM PRÉNOM]",
        legalName: "[RAISON SOCIALE]",
        address: "[ADRESSE COMPLÈTE]",
        siren: "[VOTRE SIREN]",
        siret: "[VOTRE SIRET]",
        contactType: "EMAIL",
        contactValue: "Y29udGFjdEBkb21haW5lLmNvbQ==",
        hostMode: "Netlify Inc. 610 22nd Street, San Francisco, CA 94107, USA"
    },
    linkedinKit: {
        bannerTitle: "Explique quelle est ton offre unique et le bénéfice pour tes futurs clients",
        figures: [
            { label: "Point clé 1" },
            { label: "Point clé 2" },
            { label: "Point clé 3" }
        ],
        vignette1Title: "Echangeons sur votre projet",
        vignette1Cta: "Sélectionner",
        vignette2Title: "Découvrir mon univers",
        vignette2Cta: "Sélectionner"
    },
};
const frame = document.getElementById('preview-frame');
if (frame) {
    frame.onload = () => {
        sync();
    };
} else {
    console.warn("Ligne 130 : 'preview-frame' introuvable. On continue sans sync.");
}
// VERIFICATION ADMIN
let IS_ADMIN = false; 
async function verifyAccess() {
    const params = new URLSearchParams(window.location.search);
    const pass = params.get('adm');
    const SECRET_HASH = "1a10705c240715d8c19d0dad3c5a59c9d18afc9a9d60c0755c46dd3fbb8c8360";
    let hashHex = "";
    if (pass) {
        const hashBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(pass));
        hashHex = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
    }
    if (hashHex === SECRET_HASH || localStorage.getItem('_vxe_node') === SECRET_HASH) {
        localStorage.setItem('_vxe_node', SECRET_HASH);
        IS_ADMIN = true; 
        document.getElementById('payment-loader')?.remove();
        const card = document.getElementById('success-card');
        if (card) {
            card.style.display = "block";
            card.classList.remove('hidden', 'opacity-0');
        }
        return true;
    }
    return false;
}
// --- LIENS VERS PAIEMENT ---
window.handleFinalAction = function() {
// Vérification de sécurité pour localConfig
    if (typeof localConfig === 'undefined') {
        console.error("Erreur : localConfig n'est pas défini.");
        return;
    }
// ON SAUVEGARDE UNE DERNIÈRE FOIS SOUS TA CLÉ HABITUELLE
    localStorage.setItem('vitrine_express_progression', JSON.stringify(localConfig));
    const mode = localConfig.selectedMode;
    let stripeUrl = "";
    console.log("Mode sélectionné avant redirection :", mode);
    switch (mode) {
        case 'web':
            stripeUrl = "https://buy.stripe.com/test_aFacN46iOgsj2pIgl3frW03";
            break;
        case 'linkedin':
            stripeUrl = "https://buy.stripe.com/test_bJedR8fTo1xp9Sa4ClfrW05";
            break;
        case 'full':
            stripeUrl = "https://buy.stripe.com/test_bJe8wOfTob7Z8O67OxfrW04";
            break;
        default:
            alert("Merci de sélectionner un format (Web, LinkedIn ou Combo) avant de continuer.");
            return;
    }
    const finalText = document.getElementById('final-cta-text');
    if (finalText) {
        finalText.innerText = "Redirection vers Stripe...";
    }
    setTimeout(() => {
        console.log("Redirection vers :", stripeUrl);
        window.location.href = stripeUrl;
    }, 600);
};
// --- FONCTIONS DEDIEES A LA MODIF ---
function toggleModifierModule() {
    const section = document.getElementById('section-rechargement');
    if (section) {
        const isHidden = section.classList.contains('hidden');
        section.classList.toggle('hidden');
        if (isHidden) { 
            section.scrollIntoView({ behavior: 'smooth', block: 'center' });
            localStorage.setItem('showRechargement', 'true');
        } else {
            localStorage.removeItem('showRechargement');
        }
    }
}
// --- LOGIQUE DE RECHARGEMENT ---
function handleHtmlDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) processImportedFile(file);
}
function handleHtmlImport(input) {
    const file = input.files[0];
    if (file) processImportedFile(file);
}
function lockImportedInputs() {
    const companyNameInput = document.querySelector('input[oninput*="header"][oninput*="companyName"]');
    if (companyNameInput) {
        companyNameInput.readOnly = true;
        companyNameInput.classList.add('bg-slate-50', 'text-slate-500', 'cursor-not-allowed');
        companyNameInput.title = "Non modifiable sur un fichier importé";
    }
    const legalToLock = [
        'input[oninput*="legal"][oninput*="editor"]',
        'input[oninput*="legal"][oninput*="legalName"]',
    ];
    legalToLock.forEach(selector => {
        const input = document.querySelector(selector);
        if (input) {
            input.readOnly = true;
            input.classList.add('bg-slate-50', 'text-slate-500', 'cursor-not-allowed');
        }
    });
}
async function processImportedFile(file) {
    const reader = new FileReader();
    reader.onload = async (e) => {
        try {
            const content = e.target.result;
            const parser = new DOMParser();
            const doc = parser.parseFromString(content, 'text/html');
            const jsonConfig = doc.getElementById('export-data')?.textContent;
            if (!jsonConfig) throw new Error("Ce fichier n'est pas valide.");
            localConfig = JSON.parse(jsonConfig);
        // ---  FILTRE DE SÉCURITÉ  ---
            if (localConfig.meta?.origin !== 'vitrine-express-branding') {
                throw new Error("Ce fichier n'est pas compatible avec Vitrine Express.");
            }
            const hasSiteId = !!localConfig.meta?.netlifySiteId;
            const mode = localConfig.selectedMode;
        // --- LOGIQUE ADMIN BYPASS  ---
            const isAdmin = localStorage.getItem('_vxe_node') === "1a10705c240715d8c19d0dad3c5a59c9d18afc9a9d60c0755c46dd3fbb8c8360";
            if ((mode === 'web' || mode === 'full') && !hasSiteId && !isAdmin) {
                throw new Error("Ce fichier n'est pas compatible. Utilise le configurateur vitrine-express pour créer ta vitrine.");
            }
        // Sécurité supplémentaire pour les utilisateurs normaux sur le kit LinkedIn
            if (mode === 'linkedin' && !localConfig.linkedinKit && !isAdmin) {
                throw new Error("Ce fichier ne contient pas de configuration LinkedIn valide.");
            }
        // --- PERSISTANCE & ÉTAT DE MODIFICATION ---
            localStorage.setItem('modeModificationActive', 'true');
            localStorage.setItem('showRechargement', 'true');
        // --- MASQUAGE DES SECTIONS EN MODE MODIF ---
            const sectionsToHide = ['section-finale', 'section-ia'];
            sectionsToHide.forEach(id => {
                const el = document.getElementById(id);
                if (el) el.style.setProperty('display', 'none', 'important');
            });
        // --- ON VERROUILLE LES INPUTS ---
            lockImportedInputs();
        // 1. On récupère le mode enregistré (web, full, ou linkedin)
            const savedMode = localConfig.selectedMode || 'web'; 
        // 2. On coche visuellement le radio bouton correspondant
            const radio = document.querySelector(`input[name="config-type"][value="${savedMode}"]`);
            if (radio) {
                radio.checked = true;
        // 3. On appelle ta fonction qui affiche les sections et la preview
                switchConfigMode(savedMode); 
            }
        // 4. On considère la section "Choisis ta vitrine" comme validée et on la verrouille
            const sectionVitrine = document.getElementById('section-vitrine');
            if (sectionVitrine) {
                sectionVitrine.classList.add('opacity-50', 'pointer-events-none');
                sectionVitrine.querySelector('.btn-save-step').classList.add('hidden');
            }
        // 5. On remplit le reste et on synchronise
            applyConfigToInputs(); 
            showImportStatus('success');
        } catch (err) {
            console.error(err);
            showImportStatus('error');
        }
    };
    reader.readAsText(file);
}
function showImportStatus(status) {
    const success = document.getElementById('import-success-msg');
    const error = document.getElementById('import-error-msg');
    const action = document.getElementById('update-action-container');
    success.classList.add('hidden');
    error.classList.add('hidden');
    action.classList.add('hidden');
    if (status === 'success') {
        success.classList.remove('hidden');
        action.classList.remove('hidden');
    } else {
        error.classList.remove('hidden');
    }
}
function applyConfigToInputs() {
    if (!localConfig) return;
// --- 1. MODÈLE & COULEURS ---
if (localConfig.template) {
    const selectedTemplateId = localConfig.template;
// 1. Récupérer les infos du template dans la base
    const templateData = TEMPLATES_DB.find(t => t.id === selectedTemplateId);
    if (templateData) {
// 2️. Sélectionner la catégorie correspondante et filtrer les modèles
        const catButtons = document.querySelectorAll('.cat-btn');
        const targetCatBtn = Array.from(catButtons).find(btn =>
            btn.innerText.toUpperCase().includes(templateData.cat.toUpperCase())
        );
        if (targetCatBtn) {
            filterTemplates(templateData.cat, targetCatBtn); 
        }
// 3️. Appliquer le template dans l'UI
        adaptUIForTemplate(selectedTemplateId);
// 4️. Mettre à jour les frames (preview web et LinkedIn)
        if (frame) frame.src = `template-${selectedTemplateId}.html`;
        const liFrame = document.getElementById('linkedin-frame');
        if (liFrame) {
            liFrame.src = `template-linkedin-${selectedTemplateId}.html`;
            liFrame.onload = () => sync();
        }
    }
}
    if (localConfig.colors) {
        Object.keys(localConfig.colors).forEach(key => {
            const input = document.getElementById(`cp-${key}`);
            if (input) {
                input.value = localConfig.colors[key];
                updateColorSync(key, localConfig.colors[key]);
            }
        });
    }
// --- 2. IDENTITÉ (LOGO & NOM) ---
    if (localConfig.header) {
        const nameInput = document.querySelector('input[oninput*="header"][oninput*="companyName"]');
        if (nameInput) nameInput.value = localConfig.header.companyName || "";
        if (localConfig.header.useTextOnly !== undefined) {
            const toggleLogo = document.getElementById('toggle-logo-mode'); 
            if (toggleLogo) toggleLogo.checked = localConfig.header.useTextOnly;
            toggleLogoMode(localConfig.header.useTextOnly);
        }
        updateDynamicFavicon();
    }
// --- 3. ACCUEIL (HERO) ---
if (localConfig.hero) {
    const h = localConfig.hero;
    const hTitle = document.querySelector('input[oninput*="hero"][oninput*="title"]');
    if (hTitle) hTitle.value = h.title || "";
    const hDesc = document.querySelector('textarea[oninput*="hero"][oninput*="desc"]');
    if (hDesc) hDesc.value = h.desc || "";
    const hCta = document.querySelector('input[oninput*="hero"][oninput*="ctaLabel"]');
    if (hCta) hCta.value = h.ctaLabel || "";
    const showFigsToggle = document.getElementById('toggle-figures'); 
    if (showFigsToggle) {
        const shouldShow = h.showFigures !== false;
        showFigsToggle.checked = shouldShow;
        if (typeof updateHeroToggle === 'function') updateHeroToggle('showFigures', shouldShow);
    }
    if (h.figures && Array.isArray(h.figures)) {
        h.figures.forEach((fig, i) => {
            const valInput = document.querySelector(`input[oninput*="updateFigure(${i}, 'num'"]`);
            if (valInput) valInput.value = fig.num || "";
            const labelSel = document.getElementById(`fig-label-sel-${i}`);
            if (labelSel) {
                const knownLabels = ["Projets", "Clients", "Années"];
                const isCustom = fig.label && !knownLabels.includes(fig.label);
                labelSel.value = isCustom ? "CUSTOM" : (fig.label || "Projets");
                if (typeof handleLabelSelectChange === 'function') handleLabelSelectChange(i, labelSel.value);
                if (isCustom) {
                    const customIn = document.getElementById(`fig-custom-${i}`);
                    if (customIn) customIn.value = fig.label || "";
                }
            }
        });
    }
    const heroInputs = document.querySelectorAll('#section-hero input, #section-hero textarea');
    heroInputs.forEach(inp => inp.dispatchEvent(new Event('input', { bubbles: true })));
}
// --- 4. SERVICES ---
if (localConfig.services) {
    const s = localConfig.services;
    const servicesTitleIn = document.querySelector('input[oninput*="services"][oninput*="title"]');
    if (servicesTitleIn) servicesTitleIn.value = s.title || "";
    if (s.items && Array.isArray(s.items)) {
        s.items.forEach((svc, i) => {
            const titleInput = document.querySelector(`input[oninput*="updateServiceCard(${i}, 'h3'"]`);
            const descInput = document.querySelector(`textarea[oninput*="updateServiceCard(${i}, 'p'"]`);
            const priceInput = document.querySelector(`input[oninput*="updateServiceCard(${i}, 'price'"]`);
            const prefixSel = document.querySelector(`select[onchange*="handleIndicationChange(${i}"]`);
            if (titleInput) titleInput.value = svc.h3 || svc.title || "";
            if (descInput) descInput.value = svc.p || svc.desc || "";
            if (priceInput) priceInput.value = svc.price || "";
            if (prefixSel) {
                const knownPrefixes = ["Dès", "À partir de", "Sur devis"];
                const currentPrefix = svc.prefix || "";
                const isCustom = currentPrefix && !knownPrefixes.includes(currentPrefix) && currentPrefix !== "";
                prefixSel.value = isCustom ? "Saisie libre" : currentPrefix;
                if (typeof handleIndicationChange === 'function') {
                    handleIndicationChange(i, prefixSel.value);
                }
                if (isCustom) {
                    const customIn = document.getElementById(`custom-prefix-${i}`);
                    if (customIn) customIn.value = currentPrefix;
                }
            }
        });
    }
    const servicesInputs = document.querySelectorAll('#section-services input, #section-services textarea');
    servicesInputs.forEach(inp => inp.dispatchEvent(new Event('input', { bubbles: true })));
}
// --- 5. AVIS ---
if (localConfig.testimonials) {
    const tSection = localConfig.testimonials;
    const testToggle = document.getElementById('toggle-testimonials');
    if (testToggle) {
        testToggle.checked = tSection.show !== false;
        if (typeof toggleSectionVisibility === 'function') {
            toggleSectionVisibility('testimonials', tSection.show !== false);
        }
    }
    const testTitleIn = document.querySelector('input[oninput*="testimonials"][oninput*="title"]');
    if (testTitleIn) testTitleIn.value = tSection.title || "";
    if (tSection.items && Array.isArray(tSection.items)) {
        tSection.items.forEach((t, i) => {
            const txt = document.querySelector(`textarea[oninput*="updateTestimonial(${i}, 'text'"]`);
            const name = document.querySelector(`input[oninput*="updateTestimonial(${i}, 'name'"]`);
            const role = document.querySelector(`input[oninput*="updateTestimonial(${i}, 'role'"]`); 
            const stars = document.querySelector(`select[onchange*="updateTestimonial(${i}, 'stars'"]`);
            if (txt) txt.value = t.text || "";
            if (name) name.value = t.name || "";
            if (role) role.value = t.role || "";
            if (stars) stars.value = t.stars || 5;
        });
    }
    const testCtaTextIn = document.querySelector('input[oninput*="testimonials"][oninput*="ctaText"]');
    if (testCtaTextIn) testCtaTextIn.value = tSection.ctaText || "";
    const avisInputs = document.querySelectorAll('#section-avis input, #section-avis textarea');
    avisInputs.forEach(inp => inp.dispatchEvent(new Event('input', { bubbles: true })));
}
// --- 6. GALERIE ---
if (localConfig.gallery) {
    const g = localConfig.gallery;
    const galToggle = document.getElementById('toggle-gallery');
    if (galToggle) {
        galToggle.checked = g.show !== false;

        if (typeof toggleSectionVisibility === "function") {
            toggleSectionVisibility('gallery', g.show !== false);
        }
    }
    const galTitleIn = document.querySelector('input[oninput*="gallery"][oninput*="title"]');
    if (galTitleIn) galTitleIn.value = g.title || "";
    const count = (g.images && Array.isArray(g.images)) ? g.images.length : 0;
    const galSelect = document.querySelector('select[onchange*="updateGalleryGrid"]');
    if (galSelect) {
        const selectValue = count <= 3 ? "3" : "6";
        galSelect.value = selectValue;
        if (typeof updateGalleryGrid === 'function') {
            updateGalleryGrid(selectValue);
        }
    }
    if (count > 0) {
        g.images.forEach((img, i) => {
            if (typeof updateGalleryImageUI === 'function') {
                updateGalleryImageUI(i, img.src || "");
            }
            const capInput = document.querySelector(`textarea[oninput*="updateGalleryCaption(${i}"]`);
            if (capInput) {
                capInput.value = img.cap || img.caption || "";
            }
        });
    }
    const galleryInputs = document.querySelectorAll('#section-gallery input, #section-gallery textarea');
    galleryInputs.forEach(inp =>
        inp.dispatchEvent(new Event('input', { bubbles: true }))
    );
}
// --- 7. A PROPOS  ---
if (localConfig.about) {
    const a = localConfig.about;
    updateAboutImageUI(a.img || "");
    const aboutTitle = document.querySelector('input[oninput*="about"][oninput*="title"]');
    const aboutDesc = document.querySelector('textarea[oninput*="about"][oninput*="desc"]');
    if (aboutTitle) aboutTitle.value = a.title || "";
    if (aboutDesc) aboutDesc.value = a.desc || "";
}
// --- 8. INFOS PRATIQUES  ---
if (localConfig.practical) {
    const p = localConfig.practical;
    const mainToggle = document.getElementById('toggle-practical');
    if (mainToggle) mainToggle.checked = !!p.show;
    togglePracticalSectionVisibility(!!p.show);
    const mode = p.displayMode || 'text';
    setPracticalMode(mode);
    if (p.hoursImg) {
        const preview = document.getElementById('preview-img-practical');
        const placeholder = document.getElementById('upload-placeholder-practical');
        const trashBtn = document.getElementById('trash-btn-practical');
        if (preview) { preview.src = p.hoursImg; preview.classList.remove('hidden'); }
        if (placeholder) placeholder.classList.add('hidden');
        if (trashBtn) trashBtn.classList.remove('hidden');
    }
    if (p.address) {
        const parts = p.address.split(',');
        const street = parts[0] || "";
        const remaining = parts[1] ? parts[1].trim().split(' ') : [];
        const zip = remaining[0] || "";
        const city = remaining.slice(1).join(' ') || "";
        const inStreet = document.querySelector('input[oninput*="updateAddressPart(\'street\'"]');
        const inZip = document.querySelector('input[oninput*="updateAddressPart(\'zip\'"]');
        const inCity = document.querySelector('input[oninput*="updateAddressPart(\'city\'"]');
        if (inStreet) inStreet.value = street;
        if (inZip) inZip.value = zip;
        if (inCity) inCity.value = city;
        window.currentAddr = { street, zip, city };
    }
    const mapToggle = document.querySelector('input[onchange*="updatePracticalCta"]');
    if (mapToggle) mapToggle.checked = p.showMapBtn !== false;
    if (p.hoursItems && p.hoursItems.length > 0) {
        p.hoursItems.forEach((item, i) => {
            const timeStr = item.time || "";
            if (timeStr === "Fermé" || timeStr === "—") {
                toggleDayOpen(i, false);
                const radioFerme = document.querySelector(`.day-block[data-index="${i}"] input[onchange*="toggleDayOpen(${i}, false)"]`);
                if (radioFerme) radioFerme.checked = true;
            } else {
                toggleDayOpen(i, true);
                const radioOuvert = document.querySelector(`.day-block[data-index="${i}"] input[onchange*="toggleDayOpen(${i}, true)"]`);
                if (radioOuvert) radioOuvert.checked = true;
                const isContinuous = !timeStr.includes('/');
                toggleContinuous(i, isContinuous);
                const checkCont = document.querySelector(`.day-block[data-index="${i}"] input[onchange*="toggleContinuous(${i}"]`);
                if (checkCont) checkCont.checked = isContinuous;
                const times = timeStr.match(/\d{2}:\d{2}/g) || [];
                if (isContinuous) {
                    hoursState[i].start = times[0] || "";
                    hoursState[i].end = times[1] || "";
                    const inS = document.querySelector(`.day-block[data-index="${i}"] input[oninput*="updateContinuous(${i}, 'start'"]`);
                    const inE = document.querySelector(`.day-block[data-index="${i}"] input[oninput*="updateContinuous(${i}, 'end'"]`);
                    if (inS) inS.value = hoursState[i].start;
                    if (inE) inE.value = hoursState[i].end;
                } else {
                    hoursState[i].mStart = times[0] || "";
                    hoursState[i].mEnd = times[1] || "";
                    hoursState[i].aStart = times[2] || "";
                    hoursState[i].aEnd = times[3] || "";
                    const fields = ['mStart', 'mEnd', 'aStart', 'aEnd'];
                    fields.forEach(f => {
                        const inp = document.querySelector(`.day-block[data-index="${i}"] input[oninput*="updateSplit(${i}, '${f}'"]`);
                        if (inp) inp.value = hoursState[i][f];
                    });
                }
            }
        });
    }
}
// --- 9. FAQ ---
if (localConfig.faq && localConfig.faq.items) {
    const faqTitleIn = document.querySelector('input[oninput*="faq"][oninput*="title"]');
    if (faqTitleIn) faqTitleIn.value = localConfig.faq.title || "";
    localConfig.faq.items.forEach((item, i) => {
        const qIn = document.querySelector(`input[oninput*="updateFAQ(${i}, 'q'"]`);
        const aIn = document.querySelector(`textarea[oninput*="updateFAQ(${i}, 'a'"]`);
        
        if (qIn) qIn.value = item.q || "";
        if (aIn) aIn.value = item.a || "";
    });
}
// --- 10. CONTACT ---
if (localConfig.contact) {
    const c = localConfig.contact;
    const contactTitleIn = document.querySelector('input[oninput*="updateContactData(\'title\'"]');
    if (contactTitleIn) contactTitleIn.value = c.title || "";
    const contactDescIn = document.querySelector('textarea[oninput*="updateContactData(\'desc\'"]');
    if (contactDescIn) contactDescIn.value = c.desc || "";
    const ctaLabelSelect = document.querySelector('select[onchange*="handleCtaLabelChange"]');
    if (ctaLabelSelect) {
        const knownLabels = ["Prendre RDV", "Nous contacter"];
        const isCustom = c.ctaLabel && !knownLabels.includes(c.ctaLabel);
        ctaLabelSelect.value = isCustom ? "custom" : (c.ctaLabel || "Prendre RDV");
        if (typeof handleCtaLabelChange === 'function') handleCtaLabelChange(ctaLabelSelect.value);
        if (isCustom) {
            const customIn = document.getElementById('custom-cta-label');
            if (customIn) customIn.value = c.ctaLabel;
        }
    }
    const typeSelect = document.querySelector('select[onchange*="handleCtaTypeChange"]');
    if (typeSelect) {
        typeSelect.value = c.type || "link";
        if (typeof handleCtaTypeChange === 'function') handleCtaTypeChange(typeSelect.value); 
    }
    if (c.type === 'tel' && c.countryIso && typeof handleCountryChange === 'function') {
        handleCountryChange(c.countryIso); 
    }
    const valInput = document.getElementById('cta-value-input');
    if (valInput) valInput.value = c.value || "";
    const contactInputs = document.querySelectorAll('#section-contact input, #section-contact textarea');
    contactInputs.forEach(inp => {
        inp.dispatchEvent(new Event('input', { bubbles: true }));
    });
}
// --- 11. SEO  ---
if (localConfig.meta) {
    const m = localConfig.meta;
    const seoTitleIn = document.querySelector('#section-seo input[oninput*="updateMeta(\'title\'"]');
    const seoDescIn = document.querySelector('#section-seo textarea[oninput*="updateMeta(\'description\'"]');
    if (m.title && m.title !== "") {
        if (seoTitleIn) {
            seoTitleIn.value = m.title;
            if (typeof updateMeta === 'function') {
                updateMeta('title', m.title);
            }
        }
    }
    if (m.description && m.description !== "") {
        if (seoDescIn) {
            seoDescIn.value = m.description;
            if (typeof updateMeta === 'function') {
                updateMeta('description', m.description);
            }
        }
    }
    if (typeof checkMetaValidity === 'function') {
        checkMetaValidity();
    }
}
// --- 12. RÉSEAUX SOCIAUX (CORRIGÉ) ---
if (localConfig.socials) {
    const s = localConfig.socials;
    const socialTitleIn = document.getElementById('social-title-input');
    if (socialTitleIn) {
        socialTitleIn.value = s.title || "";
    }
    const platforms = ['linkedin', 'facebook', 'instagram'];
    platforms.forEach(key => {
        const val = s[key]; 
        const input = document.getElementById(`input-social-${key}`);
        const toggle = document.getElementById(`toggle-social-${key}`);
        if (input) {
            input.value = val || "";
        }
        if (toggle) {
            const shouldShow = (val && val.trim() !== "");
            toggle.checked = shouldShow;
            if (typeof handleSocialToggle === 'function') {
                handleSocialToggle(key, shouldShow);
            }
        }
    });
    if (socialTitleIn) {
        socialTitleIn.dispatchEvent(new Event('input', { bubbles: true }));
    }
}
// --- 13. INFOS LÉGALES ---
if (localConfig.legal) {
    const L = localConfig.legal;
// 1. Pays (MODIFIABLE)
    const countrySel = document.querySelector('#section-legale select');
    if (countrySel) {
        countrySel.value = L.country || "FR";
        handleLegalCountryChange(L.country || "FR");
    }
// 2. Type d'entité (VERROUILLÉ)
    const entityRadios = document.querySelectorAll('input[name="entity-type"]');
    entityRadios.forEach(r => {
        if (r.value === (L.entityType || 'pro')) r.checked = true;
        r.disabled = true; 
        r.parentElement.classList.add('opacity-60', 'cursor-not-allowed');
    });
// 3. Prénom et Nom (REMPLIS ET VERROUILLÉS)
    const firstNameIn = document.querySelector('input[oninput*="firstName"]');
    const lastNameIn = document.querySelector('input[oninput*="lastName"]');
    if (firstNameIn) {
        firstNameIn.value = L.firstName || "";
        firstNameIn.readOnly = true;
        firstNameIn.classList.add('bg-slate-50', 'text-slate-400', 'cursor-not-allowed');
    }
    if (lastNameIn) {
        lastNameIn.value = L.lastName || "";
        lastNameIn.readOnly = true;
        lastNameIn.classList.add('bg-slate-50', 'text-slate-400', 'cursor-not-allowed');
    }
// 4. Raison Sociale (REMPLIE ET VERROUILLÉE)
    const legalNameIn = document.getElementById('id-company-name');
    if (legalNameIn) {
        legalNameIn.value = L.legalName || "";
        legalNameIn.readOnly = true;
        legalNameIn.classList.add('bg-slate-50', 'text-slate-400', 'cursor-not-allowed');
    }
// 5. Adresse (MODIFIABLE)
    if (L.address) {
        const parts = L.address.split(',');
        const street = parts[0] || "";
        const rest = parts[1] ? parts[1].trim().split(' ') : [];
        const zip = rest[0] || "";
        const city = rest.slice(1).join(' ') || "";
        const inStreet = document.getElementById('legal-street');
        const inZip = document.getElementById('legal-zip');
        const inCity = document.getElementById('legal-city');
        if (inStreet) inStreet.value = street.trim();
        if (inZip) inZip.value = zip.trim();
        if (inCity) inCity.value = city.trim();
    }
// 6. Email & IDs (MODIFIABLES)
    const emailIn = document.querySelector('input[oninput*="email"]');
    if (emailIn && L.contactValue) {
        try { emailIn.value = atob(L.contactValue); } 
        catch(e) { emailIn.value = L.contactValue; }
    }
    const id1In = document.getElementById('id-1');
    const id2In = document.getElementById('id-2');
    if (id1In) id1In.value = L.id1 || ""; 
    if (id2In) id2In.value = L.id2 || ""; 
}
// --- 14. KIT LINKEDIN ---
    if (localConfig.linkedinKit) {
        const lk = localConfig.linkedinKit;
    // Gestion du type d'entité et affichage de la section
        if (lk.entityType) handleLinkedinEntity(lk.entityType);
    // Bandeau
        const bannerIn = document.querySelector('[oninput*="updateLinkedinKit(\'bannerTitle\'"]');
        if (bannerIn) bannerIn.value = lk.bannerTitle || "";
    // Chiffres clés LinkedIn
        if (lk.figures) {
            lk.figures.forEach((fig, i) => {
                const figIn = document.querySelector(`input[oninput*="updateLinkedinFigure(${i}"]`);
                if (figIn) figIn.value = fig.label || "";
            });
        }
    // Vignettes 
        const v1Title = document.querySelector('input[oninput*="updateLinkedinKit(\'vignette1Title\'"]');
        const v2Title = document.querySelector('input[oninput*="updateLinkedinKit(\'vignette2Title\'"]');
        if (v1Title) v1Title.value = lk.vignette1Title || "";
        if (v2Title) v2Title.value = lk.vignette2Title || "";
        const v1Cta = document.querySelector('select[onchange*="handleLinkedinCtaChange(\'v1\'"]');
        const v2Cta = document.querySelector('select[onchange*="handleLinkedinCtaChange(\'v2\'"]');
        if (v1Cta) v1Cta.value = lk.vignette1Cta || "Sélectionner";
        if (v2Cta) v2Cta.value = lk.vignette2Cta || "Sélectionner";
        checkLinkedinValidity();
    }
    sync(); 
}
// HELPER : SUPPRIMER LE SCALE CSS POUR UNE CAPTURE EXACTE
function disableIframeScaling(doc) {
    const ids = ['linkedin-banner','v1','v2'];
    const previous = {};
    ids.forEach(id => {
        const el = doc.getElementById(id);
        if (!el) return;
        previous[id] = el.style.transform;
        if(id === 'linkedin-banner') {
            el.style.height = '396px'; 
        }
        el.style.transform = 'none';
    });
    return () => {
        ids.forEach(id => {
            const el = doc.getElementById(id);
            if (!el) return;
            el.style.transform = previous[id] || '';
        });
    };
}
async function triggerQuickUpdate() {
    const btn = document.querySelector('#update-action-container button');
    if (!btn) return;
    const originalContent = btn.innerHTML;
    let deployUrl = null;
// --- 1. LOGIQUE ADMIN BYPASS ---
    const SECRET_HASH = "1a10705c240715d8c19d0dad3c5a59c9d18afc9a9d60c0755c46dd3fbb8c8360";
    const isAdmin = (typeof IS_ADMIN !== 'undefined' && IS_ADMIN === true) || (localStorage.getItem('_vxe_node') === SECRET_HASH);
// --- LIMITE DE DÉPLOIEMENT 72H (Ignorée si ADMIN) ---
    const mode = localConfig.selectedMode;
    const isPushingToNetlify = (mode === 'web' || mode === 'full');
    const siteId = localConfig.meta?.netlifySiteId;
// On n'applique la restriction QUE si l'utilisateur n'est pas Admin
    if (isPushingToNetlify && siteId && !isAdmin) { 
        const lastDeploy = localStorage.getItem(`last_deploy_${siteId}`);
        const now = Date.now();
        const delay = 72 * 60 * 60 * 1000; 
        if (lastDeploy && (now - lastDeploy) < delay) {
            const remainingTime = delay - (now - lastDeploy);
            const hoursLeft = Math.ceil(remainingTime / (1000 * 60 * 60));
            alert(`⌛ Limite de 3 jours active.\n\nEncore environ ${hoursLeft}h d'attente.`);
            return;
        }
    }
// 1. UI Feedback
    btn.innerHTML = `<span>⏳ ${isAdmin ? 'MODE ADMIN : GÉNÉRATION...' : 'MISE À JOUR EN COURS...'}</span>`;
    btn.classList.add('pointer-events-none', 'opacity-80');
    try {
        const companyName = (localConfig.header?.companyName || "Ma-Vitrine").toUpperCase().replace(/\s+/g, '-');
// --- ÉTAPE 1 : LE VERSIONING WEB (Prioritaire) ---
        if (siteId && isPushingToNetlify && !isAdmin) { 
            const tempHtml = await buildClientSite(localConfig); 
            const netlifyResponse = await fetch('/.netlify/functions/deploy-client-site', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ html: tempHtml, config: localConfig })
            });
            if (!netlifyResponse.ok) throw new Error("Erreur Netlify");
            const result = await netlifyResponse.json();
// On met à jour localConfig avec les infos confirmées
            localConfig.meta.netlifySiteId = result.siteId;
            localConfig.meta.deployUrl = result.deployUrl;
            deployUrl = result.deployUrl;
// Persistance locale
            localStorage.setItem('vitrine_express_progression', JSON.stringify(localConfig));
            localStorage.setItem(`last_deploy_${result.siteId}`, Date.now());
        }
// --- ÉTAPE 2 : TÉLÉCHARGEMENT DE LA SAUVEGARDE (Fichier HTML) ---
        const finalHtml = await buildClientSite(localConfig); 
        downloadFile(finalHtml, `SAUVEGARDE-VITRINE-EXPRESS-${companyName}.html`, 'text/html');
// --- ÉTAPE C : GÉNÉRATION DES IMAGES ---
        if (mode === 'linkedin' || mode === 'full') { 
            const iframe = document.createElement('iframe');
            iframe.style.position = 'absolute';
            iframe.style.left = '-9999px';
            iframe.style.width = '1400px'; 
            iframe.style.height = '2000px';
            document.body.appendChild(iframe);
            const templateId = localConfig.template || 'moderne';
            iframe.src = `template-linkedin-${templateId}.html`;
            iframe.onload = async () => {
                iframe.contentWindow.postMessage({ type: 'UPDATE_CONFIG', config: localConfig }, '*');     
                setTimeout(async () => {
                    const doc = iframe.contentWindow.document;
                    doc.body.classList.remove('is-preview');
                    const restoreScaling = disableIframeScaling(doc);        
                    const assets = [
                        { id: 'linkedin-banner', name: `01-BANNIERE-${companyName}.jpg` },
                        { id: 'v1', name: `02-VIGNETTE-CONTACT-${companyName}.jpg` },
                        { id: 'v2', name: `03-VIGNETTE-OFFRE-${companyName}.jpg` }
                    ];
                    for (const asset of assets) {
                        const el = doc.getElementById(asset.id);
                        if (el) {
                            const rect = el.getBoundingClientRect();
                            const canvas = await html2canvas(el, {
                                scale: 1,
                                useCORS: true,
                                backgroundColor: '#ffffff',
                                width: rect.width,
                                height: rect.height
                            });
                            downloadFile(canvas.toDataURL("image/jpeg", 0.92), asset.name, 'image/jpeg', true);
                        }
                    }
                    restoreScaling();
                    document.body.removeChild(iframe);
        // --- FINALISATION LOGIQUE ---
                    if (isAdmin) {
                        finalizeStatus(btn, originalContent, "✨ TERMINÉ (ADMIN : NO PUSH)");
                    } else if (mode === 'full') {
                        finalizeWithRedirect(btn, "✨ VITRINE À JOUR ! REDIRECTION...", deployUrl);
                    } else {
                        finalizeStatus(btn, originalContent, "✨ KIT MIS À JOUR !");
                    }
                }, 1000); 
            };
        } else {
    // Mode Web uniquement
            if (isAdmin) {
                finalizeStatus(btn, originalContent, "✨ HTML GÉNÉRÉ (MODE ADMIN)");
            } else {
                finalizeWithRedirect(btn, "✨ VITRINE MISE À JOUR ! REDIRECTION...", deployUrl);
            }
        }
    } catch (error) {
        console.error("Erreur :", error);
        btn.innerHTML = originalContent;
        btn.classList.remove('pointer-events-none', 'opacity-80');
    }
}
// On garde le bouton désactivé pour confirmer que c'est fini
function finalizeStatus(btn, originalContent, successMessage) {
    btn.innerHTML = successMessage;
    btn.classList.replace('from-[#8449d9]', 'from-green-500');
    btn.classList.replace('to-[#4d0fa5]', 'to-green-600');
    btn.style.background = "linear-gradient(to right, #22c55e, #16a34a)";
    btn.classList.add('pointer-events-none');
}
function finalizeWithRedirect(btn, message, url) {
    btn.innerHTML = message;
    btn.classList.replace('from-[#8449d9]', 'from-green-500');
    btn.classList.replace('to-[#4d0fa5]', 'to-green-600');
    btn.style.background = "linear-gradient(to right, #22c55e, #16a34a)";
// Redirection après 4.5 secondes 
    setTimeout(() => {
        if (url) {
            window.location.href = url;
        } else {
// Fail-safe si l'URL est manquante
            location.reload(); 
        }
    }, 4500);
}
function downloadFile(content, filename, type, isDataURL = false) {
    const a = document.createElement('a');
    a.href = isDataURL ? content : window.URL.createObjectURL(new Blob([content], { type: type }));
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
async function buildClientSite(config) {
    try {
// --- RÉCUPÉRATION DES VARIABLES MANQUANTES ---
        const mode = config.selectedMode || 'web'; 
        const companyName = (config.header?.companyName || "Ma-Vitrine").toUpperCase().replace(/\s+/g, '-');
// 1. Détermination du template source
        const templateId = config.template || 'moderne';
        const isLinkedIn = config.meta?.type === 'linkedin-kit';
        const templatePath = isLinkedIn ? `template-linkedin-${templateId}.html` : `template-${templateId}.html`;
// 2. Récupération du code vierge
        const response = await fetch(templatePath);
        if (!response.ok) throw new Error("Impossible de charger le template source");
        let html = await response.text();
// 3. NETTOYAGE 
        html = html.replace(/<script src="config\.js"><\/script>/g, '');
// 4. INJECTION DES DONNÉES 
        const configJson = JSON.stringify(config);
        if (html.includes('/*CONFIG_EXPORT*/')) {
            html = html.replace('/*CONFIG_EXPORT*/', configJson);
        } else {
// Sécurité : si le commentaire n'est pas là, on remplace la balise entière
            const newTag = `<script id="export-data" type="application/json">${configJson}<\/script>`;
            html = html.replace(/<script id="export-data".*?<\/script>/s, newTag);
        }
// --- 5. GÉNÉRATION DU JSON-LD "EN DUR"  ---
        if (mode !== 'linkedin') {
            const leg = config.legal || {};
            const fullAddr = leg.address || "";
            const countryCode = leg.country || "FR"; 
            let street = fullAddr, zip = "", city = "";
            const cpMatch = fullAddr.match(/(?:\s|^)(\d{4,5})(?:\s|$)/);
            if (cpMatch) {
                zip = cpMatch[1];
                const pos = fullAddr.indexOf(zip);
                street = fullAddr.substring(0, pos).trim().replace(/,$/, ''); 
                city = fullAddr.substring(pos + zip.length).trim().replace(/^,/, '').trim();
            }
            const schemaData = {
                "@context": "https://schema.org",
                "@type": leg.entityType === 'asso' ? "Organization" : "LocalBusiness",
                "name": leg.legalName || companyName,
                "description": config.meta?.description || "",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": street,
                    "addressLocality": city,
                    "postalCode": zip,
                    "addressCountry": countryCode 
                }
            };
            const jsonString = JSON.stringify(schemaData, null, 2);
            const scriptTag = `<script id="schema-site" type="application/ld+json">\n${jsonString}\n<\/script>`;
            const pattern = /<script id="schema-site" type="application\/ld\+json">[\s\S]*?<\/script>/;
            if (html.match(pattern)) {
                html = html.replace(pattern, scriptTag);
            } else {
                html = html.replace('</head>', `${scriptTag}\n</head>`);
            }
        }
// --- 4. AJOUT : Balises Open Graph  ---
        const ogImageUrl = "https://www.vitrine-express.net/assets/og-img-ve.jpg"; 
        const ogTags = `
        <meta property="og:title" content="${config.meta?.title || companyName}" />
        <meta property="og:description" content="${config.meta?.description || ''}" />
        <meta property="og:site_name" content="${companyName}" />
        <meta property="og:image" content="${ogImageUrl}" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:image" content="${ogImageUrl}">
        <meta name="twitter:title" content="${config.meta?.title || companyName}">
        <meta name="twitter:description" content="${config.meta?.description || ''}">
        `;
        html = html.replace('<!-- og -->', ogTags);
// 5. REMPLACEMENT DYNAMIQUE DES CONTENUS (Sync config -> HTML)
        const kit = config.linkedinKit || {};
// On utilise des regex pour cibler le contenu entre les balises avec les IDs spécifiques
        html = html.replace(/(id="li-title">)(.*?)(<\/h1>)/, `$1${config.hero?.title || ''}$3`);
        html = html.replace(/(id="v1-title">)(.*?)(<\/h2>)/, `$1${kit.vignette1Title || ''}$3`);
        html = html.replace(/(id="v1-cta">)(.*?)(<\/div>)/, `$1${config.contact?.ctaLabel || ''}$3`);
        html = html.replace(/(id="v2-title">)(.*?)(<\/h2>)/, `$1${kit.vignette2Title || ''}$3`);
        html = html.replace(/(id="v2-cta">)(.*?)(<\/div>)/, `$1${kit.vignette2Cta || ''}$3`);
// 6. INJECTION DU STYLE (Couleurs personnalisées)
        if (config.colors) {
            const customStyles = `
            <style id="custom-theme-vars">
                :root {
                    --color-accent: ${config.colors.accent} !important;
                    --color-dark: ${config.colors.dark} !important;
                    --color-background-light: ${config.colors.bgLight} !important;
                }
            </style>`;
            html = html.replace('</head>', `${customStyles}\n</head>`);
        }
// 5. FIX DU RENDU : On s'assure que CONFIG est bien défini avant renderTemplate
        const configInit = `
        <script>
            window.localConfig = JSON.parse(document.getElementById('export-data').textContent);
            window.CONFIG = window.localConfig;
        </script>`;
        html = html.replace('<script>', `${configInit}\n<script>`);
        html = html.replace(/<title id="meta-title">.*?<\/title>/, `<title>${config.meta.title}</title>`);
        html = html.replace(/id="meta-desc" content=".*?"/, `content="${config.meta.description}"`);
        html = html.replace(/<meta name="robots" content=".*?"\s*\/?>/i, '<meta name="robots" content="index, follow" />');
        return html;
    } catch (error) {
        console.error("Erreur lors de la génération du fichier :", error);
        throw error;
    }
}
// --- TRACKING MAIL & AFFICHAGE CONDITIONNEL ---
    const emailInput = document.getElementById("lead-email");
    const validateBtn = document.getElementById("lead-email-validate");
    const iaSection = document.getElementById("section-ia");
    const iaContainer = iaSection?.querySelector(".space-y-6");
    const btnGenerateAI = document.getElementById("btn-generate-ai");
    const aiButtonText = document.getElementById("ai-button-text");
    let iaElements = [];
// Masquer tous les éléments IA (sauf input email)
    if (iaContainer) {
        iaElements = Array.from(iaContainer.children).filter(el => !el.classList.contains("input-group"));
        iaElements.forEach(el => (el.style.display = "none"));
    }
// --- MESSAGE D'ERREUR EMAIL ---
    let errorMsg = document.createElement("p");
    errorMsg.className = "text-xs text-red-400 mt-1";
    errorMsg.style.display = "none";
    errorMsg.innerText = "Merci de renseigner un email valide.";
    emailInput?.closest("div.flex")?.insertAdjacentElement("afterend", errorMsg);
// --- VALIDATION EMAIL ---
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    function markButtonValidated() {
        if (!validateBtn) return;
        validateBtn.style.background = "#10B981";
        validateBtn.innerHTML = '<span style="color:white; font-weight:bold; font-size:1.2rem;">✓</span>';
        validateBtn.disabled = true;
    }
    function showIASection() {
        iaElements.forEach(el => (el.style.display = "block"));
        iaSection.dataset.sent = "true";
    }
// --- STOCKAGE EMAIL ---
    function saveEmailLocally(email) {
        localStorage.setItem("lead_email", email);
    }
// --- ENVOI A NETLIFY ---
    function sendProgressToNetlify(isFinal = false) {
        const email = localStorage.getItem("lead_email");
        if (!email) return;
// Si déjà envoyé
    if (isFinal && sessionStorage.getItem('lead_sent_final')) return;
    if (!isFinal && sessionStorage.getItem('lead_sent_progress')) return;
    const lastStep = localConfig?.lastStep || "section-ia";
    const SEQUENCE = [
        'section-vitrine','section-model','section-couleurs','section-identite',
        'section-ia','section-accueil','section-services','section-avis',
        'section-gallery','section-about','section-practical','section-faq',
        'section-contact','section-social','section-seo','section-legale',
        'section-hebergement','section-linkedin-kit','section-finale'
    ];
    const stepIndex = SEQUENCE.indexOf(lastStep);
    const progress = Math.round(((stepIndex + 1) / SEQUENCE.length) * 100);
    const formData = new FormData();
    formData.append("form-name", "lead-vitrine");
    formData.append("email", email);
    formData.append("status", isFinal ? "TERMINE" : "EN_COURS_OU_ABANDON");
    formData.append("step", lastStep);
    formData.append("progress", progress + "%");
    if (isFinal) {
        sessionStorage.setItem('lead_sent_final', 'true');
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        });
    } else {
        sessionStorage.setItem('lead_sent_progress', 'true');
        const params = new URLSearchParams(formData).toString();
        navigator.sendBeacon("/", params);
    }
}
// --- SI EMAIL DÉJÀ STOCKÉ ---
    const storedEmail = localStorage.getItem("lead_email");
    if (storedEmail && isValidEmail(storedEmail)) {
        if (emailInput) emailInput.value = storedEmail;
        markButtonValidated();
        showIASection();
        saveEmailLocally(storedEmail);
        sendProgressToNetlify(false); 
    }
// --- BOUTON VALIDATION EMAIL ---
    validateBtn?.addEventListener("click", () => {
        const email = emailInput?.value.trim() || "";
        if (!isValidEmail(email)) {
            errorMsg.style.display = "block";
            return;
    }
        errorMsg.style.display = "none";
        markButtonValidated();
        showIASection();
        saveEmailLocally(email);
        sendProgressToNetlify(false); 
    });
// --- OVERLAY PENDANT LA GENERATION IA ---
function createAIOverlay() {
    if (document.getElementById('ai-loading-overlay')) return;
    const overlay = document.createElement('div');
    overlay.id = 'ai-loading-overlay';
    overlay.className = "fixed inset-0 z-[9999] flex items-center justify-center bg-white/90 backdrop-blur-sm";
    overlay.style.display = "none"; 
    overlay.innerHTML = `
        <div class="flex flex-col items-center p-8 text-center bg-white rounded-3xl shadow-2xl border border-slate-100">
            <div class="w-24 h-24 mb-6 bg-white rounded-full shadow-xl shadow-violet-200/50 flex items-center justify-center animate-bounce">
                <svg class="w-14 h-14" viewBox="0 0 640 640" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="gradient-sparkle-wand" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#8449d9" />
                            <stop offset="100%" stop-color="#22c55e" />
                        </linearGradient>
                    </defs>
                    <path d="M295.4 37L310.2 73.8L347 88.6C350 89.8 352 92.8 352 96C352 99.2 350 102.2 347 103.4L310.2 118.2L295.4 155C294.2 158 291.2 160 288 160C284.8 160 281.8 158 280.6 155L265.8 118.2L229 103.4C226 102.2 224 99.2 224 96C224 92.8 226 89.8 229 88.6L265.8 73.8L280.6 37C281.8 34 284.8 32 288 32C291.2 32 294.2 34 295.4 37zM142.7 105.7L164.2 155.8L214.3 177.3C220.2 179.8 224 185.6 224 192C224 198.4 220.2 204.2 214.3 206.7L164.2 228.2L142.7 278.3C140.2 284.2 134.4 288 128 288C121.6 288 115.8 284.2 113.3 278.3L91.8 228.2L41.7 206.7C35.8 204.2 32 198.4 32 192C32 185.6 35.8 179.8 41.7 177.3L91.8 155.8L113.3 105.7C115.8 99.8 121.6 96 128 96C134.4 96 140.2 99.8 142.7 105.7zM496 368C502.4 368 508.2 371.8 510.7 377.7L532.2 427.8L582.3 449.3C588.2 451.8 592 457.6 592 464C592 470.4 588.2 476.2 582.3 478.7L532.2 500.2L510.7 550.3C508.2 556.2 502.4 560 496 560C489.6 560 483.8 556.2 481.3 550.3L459.8 500.2L409.7 478.7C403.8 476.2 400 470.4 400 464C400 457.6 403.8 451.8 409.7 449.3L459.8 427.8L481.3 377.7C483.8 371.8 489.6 368 496 368zM492 64C503 64 513.6 68.4 521.5 76.2L563.8 118.5C571.6 126.4 576 137 576 148C576 159 571.6 169.6 563.8 177.5L475.6 265.7L374.3 164.4L462.5 76.2C470.4 68.4 481 64 492 64zM76.2 462.5L340.4 198.3L441.7 299.6L177.5 563.8C169.6 571.6 159 576 148 576C137 576 126.4 571.6 118.5 563.8L76.2 521.5C68.4 513.6 64 503 64 492C64 481 68.4 470.4 76.2 462.5z" 
                    fill="url(#gradient-sparkle-wand)" />
                </svg>
            </div>
            <h3 class="text-xl font-black uppercase tracking-tight text-[#8449d9] mb-2">Rédaction en cours...</h3>
            <p class="text-slate-500 max-w-xs text-sm leading-relaxed">
                L'intelligence artificielle prépare tes textes personnalisés. <br>
                <span class="font-semibold text-[#8449d9]">Ne ferme pas cette fenêtre.</span>
            </p>
        </div>
    `;
    document.body.appendChild(overlay);
}
function showAIOverlay() {
    createAIOverlay(); 
    const ov = document.getElementById('ai-loading-overlay');
    if (ov) ov.style.display = 'flex';
}
function hideAIOverlay() {
    const ov = document.getElementById('ai-loading-overlay');
    if (ov) {
        ov.style.display = 'none';
        ov.remove(); 
    }
}
// --- FONCTIONS DEDIEES A LA GENERATION IA  ---
async function generateWithAI() {
    const botTrap = document.getElementById('ai-bot-catcher')?.value || "";
    if (botTrap) return; 
// --- LIMITE QUOTIDIENNE ---
    const today = new Date().toLocaleDateString();
    let usage = JSON.parse(localStorage.getItem('ai_usage')) || { date: today, count: 0 };
    if (usage.date !== today) {
        usage = { date: today, count: 0 };
    }
    const btnText = document.getElementById('ai-button-text');
    const originalContent = btnText.innerHTML;
    const overlay = document.getElementById('ai-loading-overlay');
// --- GESTION DES LIMITES ---
    if (usage.count >= 2) {
        showAlerteIA(
            "Limite atteinte",
            "Tu as utilisé toutes tes tentatives pour l'assistance à la rédaction.<br>Si le rendu ne te convient pas, tu peux compléter ta vitrine en t'aidant des instructions affichées à l'écran."
        );
        return;
    } else if (usage.count === 1) {
        showAlerteIA(
            "Une tentative restante",
            "Tu as utilisé une tentative pour la génération de tes textes, il ne t'en reste plus qu'une."
        );
    }
// --- VERIF MAIL ---
    const email = document.getElementById('lead-email').value.trim();
    if (!email || !email.includes('@')) {
        showAlerteIA(
            "Email invalide",
            "Merci de renseigner un email valide pour activer l'aide à la rédaction."
        );
        document.getElementById('lead-email').focus();
        return;
    }
// --- VERIF EXPERTISE / MÉTIER ---
    const expertise = document.getElementById('ai-expertise').value.trim();
    if (!expertise) {
        showAlerteIA(
            "Expertise manquante",
            "Merci d'indiquer ton métier ou ton expertise (ex: Photographe)."
        );
        document.getElementById('ai-expertise').focus();
        return;
    }
// --- VERIF PROBLÈME (Question 1) ---
    const probleme = document.getElementById('ai-question-1').value.trim();
    if (probleme.length < 10) {
        showAlerteIA("Précise le problème", "Dis-nous en un peu plus sur le problème que tu résous (min. 10 caractères).");
        document.getElementById('ai-question-1').focus();
        return;
    }
// --- VERIF SERVICES (MINIMUM 1) ---
    const service1 = document.getElementById('ai-service-1').value.trim();
    if (!service1) {
        showAlerteIA(
            "Service requis",
            "Merci d'indiquer au moins ton service principal (Service 1) pour que l'IA puisse travailler."
        );
        document.getElementById('ai-service-1').focus();
        return;
    }
// --- VERIF BÉNÉFICES (Question 2) ---
    const benefice = document.getElementById('ai-question-2').value.trim();
    if (benefice.length < 10) {
        showAlerteIA("Bénéfices manquants", "Décris ce que gagne ton client après ton intervention.");
        document.getElementById('ai-question-2').focus();
        return;
    }
// --- VERIF DIFFÉRENCIATION (Question 3) ---
    const diffUnknown = document.getElementById('ai-diff-unknown').checked;
    const diffValue = document.getElementById('ai-question-3').value.trim();
    if (!diffUnknown && diffValue.length < 5) {
        showAlerteIA("Différenciation", "Précise ce qui te rend unique ou coche 'Je ne sais pas'.");
        document.getElementById('ai-question-3').focus();
        return;
    }
// PREPARATION DES DONNEES ---
    const userData = {
        email: email,
        expertise: expertise,
        mode: (window.localConfig && localConfig.selectedMode) ? localConfig.selectedMode : 'full',
        probleme: document.getElementById('ai-question-1').value,
        services: [
            document.getElementById('ai-service-1').value,
            document.getElementById('ai-service-2').value,
            document.getElementById('ai-service-3').value
        ].filter(v => v.trim() !== ""),  
// On utilise 'benefice' pour correspondre à la fonction Netlify
        benefice: document.getElementById('ai-question-2').value,
        differenciation: diffUnknown ? "UNKNOWN" : diffValue,
// Logique Checkbox "Je ne sais pas"
        doutes: document.getElementById('ai-doubt-unknown').checked 
            ? "UNKNOWN" 
            : [
                document.getElementById('ai-doubt-1').value,
                document.getElementById('ai-doubt-2').value,
                document.getElementById('ai-doubt-3').value
            ].filter(v => v.trim() !== ""),    
        style: document.getElementById('ai-style-select').value,
        contact: document.getElementById('ai-contact-select').value
    };
    try {
// --- ETAT VISUEL "EN COURS" ---
        btnText.innerHTML = "🪄 RÉDACTION EN COURS...";
        btnText.parentElement.disabled = true;
        if (overlay) overlay.style.display = 'flex';
        const response = await fetch('/.netlify/functions/ask-claude', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        const result = await response.json();
// --- Gestion erreurs serveur ou IA ---
        if (!response.ok || result.error) {
            if (result.error === "SOLDE_EPUISE") {
                showAlerteIA(
                    "Service temporairement indisponible",
                    "L'assistance IA est momentanément saturée. Tu peux compléter ta vitrine en t'aidant des instructions affichées à l'écran ou réessayer plus tard."
                );
            } else {
                console.warn("Détails technique de l'erreur :", result.error || "Erreur réseau");
                showAlerteIA(
                    "Service momentanément indisponible", 
                    "Désolé, l'assistance est momentanément indisponible.<br>Tu peux compléter ta vitrine en t'aidant des instructions affichées à l'écran ou revenir plus tard."
                );
            }
            btnText.innerHTML = originalContent;
            btnText.parentElement.disabled = false;
            return;
        }
// --- INCRÉMENTATION DU COMPTEUR ---
        usage.count++;
        localStorage.setItem('ai_usage', JSON.stringify(usage)); 
// 5. Remplissage des champs et synchronisation
        fillFieldsFromAI(result); 
        if (typeof sync === 'function') sync();
        sendProgressToNetlify(true);
// 6. État visuel "Succès"
        btnText.innerHTML = "✨ TES TEXTES ONT ÉTÉ CRÉÉS !";
        btnText.parentElement.disabled = false;
        if (overlay) overlay.style.display = 'none';
        setTimeout(() => { btnText.innerHTML = originalContent; }, 3000);
    } catch (error) {
        console.error("Erreur IA:", error);
        if (overlay) overlay.style.display = 'none';
        showAlerteIA(
            "Erreur",
            "Désolé, l'assistance est momentanément indisponible.<br>Tu peux compléter ta vitrine en t'aidant des instructions affichées à l'écran ou revenir plus tard."
        );
        btnText.innerHTML = originalContent;
        btnText.parentElement.disabled = false;
    }
}
document.getElementById("btn-generate-ai")?.addEventListener("click", generateWithAI);
// Masquage des inputs doutes / différenciation si unknown coché
function toggleDoubtInputs(isDisabled) {
    const container = document.getElementById('ai-doubts-container');
    const inputs = [
        document.getElementById('ai-doubt-1'),
        document.getElementById('ai-doubt-2'),
        document.getElementById('ai-doubt-3')
    ];
    inputs.forEach(input => {
        if (input) {
            input.disabled = isDisabled;
            input.style.opacity = isDisabled ? "0.5" : "1";
            if (isDisabled) input.value = "";
        }
    });
}
function toggleDiffInput(isDisabled) {
    const input = document.getElementById('ai-question-3');
    input.disabled = isDisabled;
    input.style.opacity = isDisabled ? "0.5" : "1";
    if (isDisabled) input.value = "";
}
function fillFieldsFromAI(data) {
    if (!data) return;
// --- 1. HERO ---
    if (data.hero) {
        const h = data.hero;
        const hTitle = document.querySelector('input[oninput*="hero"][oninput*="title"]');
        const hDesc = document.querySelector('textarea[oninput*="hero"][oninput*="desc"]');
        const hCta = document.querySelector('input[oninput*="hero"][oninput*="ctaLabel"]');
        if (hTitle) hTitle.value = h.title || "";
        if (hDesc) hDesc.value = h.desc || "";
        if (hCta) hCta.value = h.ctaLabel || "";
    }
// --- 2. SERVICES ---
    if (data.services) {
        const s = data.services;
        const servicesTitleIn = document.querySelector('input[oninput*="services"][oninput*="title"]');
        if (servicesTitleIn) servicesTitleIn.value = s.title || "";
        if (s.items && Array.isArray(s.items)) {
            s.items.forEach((svc, i) => {
                const titleInput = document.querySelector(`input[oninput*="updateServiceCard(${i}, 'h3'"]`);
                const descInput = document.querySelector(`textarea[oninput*="updateServiceCard(${i}, 'p'"]`);
                if (titleInput) titleInput.value = svc.h3 || svc.title || "";
                if (descInput) descInput.value = svc.p || svc.desc || "";
            });
        }
    }
// --- 3. AVIS & GALERIE (Titres uniquement) ---
    const testTitleIn = document.querySelector('input[oninput*="testimonials"][oninput*="title"]');
    if (testTitleIn && data.testimonials) testTitleIn.value = data.testimonials.title || "";
    const galTitleIn = document.querySelector('input[oninput*="gallery"][oninput*="title"]');
    if (galTitleIn && data.gallery) galTitleIn.value = data.gallery.title || "";
// --- 4. A PROPOS ---
    if (data.about) {
        const a = data.about;
        const aboutTitle = document.querySelector('input[oninput*="about"][oninput*="title"]');
        const aboutDesc = document.querySelector('textarea[oninput*="about"][oninput*="desc"]');
        if (aboutTitle) aboutTitle.value = a.title || "";
        if (aboutDesc) aboutDesc.value = a.desc || "";
    }
// --- 5. FAQ ---
    if (data.faq) {
        const faqTitleIn = document.querySelector('input[oninput*="faq"][oninput*="title"]');
        if (faqTitleIn) faqTitleIn.value = data.faq.title || "";

        if (data.faq.items && Array.isArray(data.faq.items)) {
            data.faq.items.forEach((item, i) => {
                const qIn = document.querySelector(`input[oninput*="updateFAQ(${i}, 'q'"]`);
                const aIn = document.querySelector(`textarea[oninput*="updateFAQ(${i}, 'a'"]`);
                if (qIn) qIn.value = item.q || "";
                if (aIn) aIn.value = item.a || "";
            });
        }
    }
// --- 6. CONTACT ---
    if (data.contact) {
        const c = data.contact;
        const contactTitleIn = document.querySelector('input[oninput*="updateContactData(\'title\'"]');
        const contactDescIn = document.querySelector('textarea[oninput*="updateContactData(\'desc\'"]');
        const valInput = document.getElementById('cta-value-input');
        
        if (contactTitleIn) contactTitleIn.value = c.title || "";
        if (contactDescIn) contactDescIn.value = c.desc || "";
        if (valInput) valInput.value = c.value || "";
    }
// --- 7. SEO ---
    if (data.seo) {
        const m = data.seo;
        const seoTitleIn = document.querySelector('#section-seo input[oninput*="updateMeta(\'title\'"]');
        const seoDescIn = document.querySelector('#section-seo textarea[oninput*="updateMeta(\'description\'"]');
        if (seoTitleIn) seoTitleIn.value = m.title || "";
        if (seoDescIn) seoDescIn.value = m.description || "";
    }
// --- 8. KIT LINKEDIN ---
    if (data.linkedin) {
        const lk = data.linkedin;
        const bannerIn = document.querySelector('[oninput*="updateLinkedinKit(\'bannerTitle\'"]');
        if (bannerIn) bannerIn.value = lk.bannerTitle || "";
        if (lk.points && Array.isArray(lk.points)) {
        lk.points.forEach((p, i) => {
            const figIn = document.querySelector(`input[oninput*="updateLinkedinFigure(${i}"]`);
            if (figIn) figIn.value = p || "";
        });
    }
        const v1Title = document.querySelector('input[oninput*="updateLinkedinKit(\'vignette1Title\'"]');
        const v2Title = document.querySelector('input[oninput*="updateLinkedinKit(\'vignette2Title\'"]');
        if (v1Title) v1Title.value = lk.vignette1Title || "";
        if (v2Title) v2Title.value = lk.vignette2Title || "";
        const v1Cta = document.querySelector('select[onchange*="handleLinkedinCtaChange(\'v1\'"]');
        const v2Cta = document.querySelector('select[onchange*="handleLinkedinCtaChange(\'v2\'"]');
        if (v1Cta) v1Cta.value = lk.vignette1Cta || "Sélectionner";
        if (v2Cta) v2Cta.value = lk.vignette2Cta || "Sélectionner";
    }
// --- DÉCLENCHER LA MISE À JOUR VISUELLE ---
    const allInputs = document.querySelectorAll('input, textarea, select');
    allInputs.forEach(inp => inp.dispatchEvent(new Event('input', { bubbles: true })));
}
// --- CONFIGURATION DES VALEURS FIXES (NON MODIFIABLES) ---
function applyPracticalDefaults() {
    if (!localConfig.practical) localConfig.practical = {};
    localConfig.practical.locationTitle = "Notre Emplacement";
    localConfig.practical.hoursTitle = "Nos Horaires";
    localConfig.practical.mapBtnLabel = "Voir l'itinéraire";
    const fixedLabels = ["Lun - Ven", "Samedi", "Dimanche"];
    if (!localConfig.practical.hoursItems) {
        localConfig.practical.hoursItems = fixedLabels.map(l => ({ label: l, time: "" }));
    } else {
        localConfig.practical.hoursItems.forEach((item, index) => {
            if (fixedLabels[index]) item.label = fixedLabels[index];
        });
    }
}
// --- SELECTION DE LA VITRINE ---
function switchConfigMode(mode, isAuto = false) {
    const placeholder = document.getElementById('preview-placeholder');
    const previewWrapper = document.getElementById('preview-wrapper');
    const previewMainHeader = document.querySelector('main .absolute.top-0'); 
    if (!mode || mode === "") {
        if (placeholder) placeholder.classList.remove('hidden');
        if (previewWrapper) previewWrapper.classList.add('opacity-0');
        if (previewMainHeader) previewMainHeader.classList.add('hidden');
        document.querySelectorAll('.mode-web, .mode-linkedin, .mode-core').forEach(s => s.style.display = 'none');
        const sectionFinale = document.getElementById('section-finale');
        if(sectionFinale) sectionFinale.style.display = 'none';
        return; 
    }
    localConfig.selectedMode = mode;
    if (placeholder) placeholder.classList.add('hidden');
    if (previewWrapper) previewWrapper.classList.remove('opacity-0');
    if (previewMainHeader) previewMainHeader.classList.remove('hidden');
    if (!isAuto) {
        const btnVitrine = document.querySelector('#section-vitrine .btn-save-step');
        if (btnVitrine && localConfig.steps?.['section-vitrine'] === true) {
            localConfig.steps['section-vitrine'] = false;
            btnVitrine.classList.remove('btn-validated-status');
            btnVitrine.innerText = "Valider ma vitrine";
        }
        localStorage.setItem('vitrine_express_progression', JSON.stringify(localConfig));
    }
    const webBtn = document.getElementById('toggle-web-btn');
    const liBtn = document.getElementById('toggle-li-btn');
    const webSections = document.querySelectorAll('.mode-web');
    const linkedinSections = document.querySelectorAll('.mode-linkedin');
    const coreSections = document.querySelectorAll('.mode-core');
    const liContainer = document.getElementById('container-linkedin-global');
    const sectionFinale = document.getElementById('section-finale');
    webSections.forEach(s => s.style.display = 'none');
    linkedinSections.forEach(s => s.style.display = 'none');
    coreSections.forEach(s => s.style.display = 'none');
    if(liContainer) liContainer.style.display = 'none';
    if(sectionFinale) sectionFinale.style.display = 'none';
    if (mode === 'web') {
        coreSections.forEach(s => s.style.display = 'block');
        webSections.forEach(s => s.style.display = 'block');
        if(sectionFinale) sectionFinale.style.display = 'block';
        webBtn?.classList.add('hidden');
        liBtn?.classList.add('hidden');
        switchPreview('web');
    } 
    else if (mode === 'linkedin') {
        coreSections.forEach(s => s.style.display = 'block'); 
        linkedinSections.forEach(s => s.style.display = 'block');
        if(liContainer) liContainer.style.display = 'block'; 
        if(sectionFinale) sectionFinale.style.display = 'block'; 
        webBtn?.classList.add('hidden');
        liBtn?.classList.add('hidden');
        switchPreview('linkedin');
    } 
    else if (mode === 'full') {
        coreSections.forEach(s => s.style.display = 'block');
        webSections.forEach(s => s.style.display = 'block');
        linkedinSections.forEach(s => s.style.display = 'block');
        if(liContainer) liContainer.style.display = 'block';
        if(sectionFinale) sectionFinale.style.display = 'block';
        webBtn?.classList.remove('hidden');
        liBtn?.classList.remove('hidden');
        switchPreview('web');
    }
    checkGlobalValidation();
}
function switchPreview(mode) {
    const webFrame = document.getElementById('preview-frame');
    const liFrame = document.getElementById('linkedin-frame');
    const protector = document.getElementById('linkedin-protector');
    const webBtn = document.getElementById('toggle-web-btn');
    const liBtn = document.getElementById('toggle-li-btn');
    if (!webFrame || !liFrame) {
        console.warn("Une des iframes est manquante dans le HTML.");
        return; 
    }
    const activeClasses = ['bg-white', 'shadow-sm', 'border-slate-200', 'text-[#8449d9]'];
    const inactiveClasses = ['bg-slate-50/50', 'border-transparent', 'text-slate-500'];
    if (mode === 'web') {
        webFrame.classList.remove('hidden');
        liFrame.classList.add('hidden');
        if(protector) protector.classList.add('hidden');
        if(webBtn) {
            webBtn.classList.add(...activeClasses);
            webBtn.classList.remove(...inactiveClasses);
        }
        if(liBtn) {
            liBtn.classList.add(...inactiveClasses);
            liBtn.classList.remove(...activeClasses);
        }
    } 
    else if (mode === 'linkedin') {
        webFrame.classList.add('hidden');
        liFrame.classList.remove('hidden');
        if(protector) protector.classList.remove('hidden'); 
        if(liBtn) {
            liBtn.classList.add(...activeClasses);
            liBtn.classList.remove(...inactiveClasses);
        }
        if(webBtn) {
            webBtn.classList.add(...inactiveClasses);
            webBtn.classList.remove(...activeClasses);
        }
    }
    localConfig.selectedPreview = mode;
}
// --- INITIALISATION ---
    window.onload = () => {
        const saved = localStorage.getItem('vitrine_express_progression');
        if (saved) {
            try {
                Object.assign(localConfig, JSON.parse(saved));
                applyPracticalDefaults();
// --- SYNCHRO MODÈLE & CATÉGORIE ---
            const selectedTemplateId = localConfig.meta?.template || localConfig.template;
        if (selectedTemplateId) {
            const frame = document.getElementById('preview-frame');
            if (frame) frame.src = `template-${selectedTemplateId}.html`;
            const liFrame = document.getElementById('linkedin-frame');
            if (liFrame) {
                liFrame.src = `template-linkedin-${selectedTemplateId}.html`;
                liFrame.onload = () => sync(); 
            }
            adaptUIForTemplate(selectedTemplateId);
            const templateData = TEMPLATES_DB.find(t => t.id === selectedTemplateId);
            if (templateData) {
                const catButtons = document.querySelectorAll('.cat-btn');
                const targetCatBtn = Array.from(catButtons).find(btn => 
                    btn.innerText.toUpperCase().includes(templateData.cat.toUpperCase())
                );
                if (targetCatBtn) {
                    filterTemplates(templateData.cat, targetCatBtn);
                }
            } else {
                const firstCatBtn = document.querySelector('.cat-btn');
                if (firstCatBtn) filterTemplates('Corporate', firstCatBtn);
                console.log("Mode Custom détecté au chargement :", selectedTemplateId);
            }
        }
// --- SYNCHRO VISUELLE DES COULEURS ---
            if (localConfig.colors) {
                Object.entries(localConfig.colors).forEach(([key, colorVal]) => {
                    const input = document.getElementById(`cp-${key}`);
                    if (input) input.value = colorVal;
                    const label = document.getElementById(`label-hex-${key}`);
                    if (label) label.innerText = colorVal.toUpperCase();
                    const previewSquare = document.getElementById(`pv-${key}`);
                    if (previewSquare) previewSquare.style.backgroundColor = colorVal;
                });
            }
// --- SYNCHRO LOGO / NOM ENTREPRISE ---
            if (localConfig.header) {
                const useTextOnly = localConfig.header.useTextOnly;
                const toggle = document.getElementById('no-logo-toggle');
                if (toggle) toggle.checked = useTextOnly;
                toggleLogoMode(useTextOnly);
                const nameInput = document.getElementById('input-company-name');
                if (nameInput) nameInput.value = localConfig.header.companyName || "";
            }
// --- SYNCHRO IMAGES ---
            if (localConfig.header?.logo) updateImageUI('header', 'logo', localConfig.header.logo);
            if (localConfig.hero?.img) updateImageUI('hero', 'img', localConfig.hero.img);
            if (localConfig.about?.img) updateImageUI('about', 'img', localConfig.about.img);
            if (localConfig.practical?.hoursImg) updateImageUI('practical', 'hoursImg', localConfig.practical.hoursImg);
// --- SYNCHRO GALERIE ---
            const g = localConfig.gallery || {};
            const galToggle = document.getElementById('toggle-gallery');
            const galFields = document.getElementById('gallery-editor-content');
            if (galToggle) galToggle.checked = g.show !== false;
            if (galFields) {
                const visible = g.show !== false;
                galFields.style.opacity = visible ? "1" : "0.3";
                galFields.style.pointerEvents = visible ? "auto" : "none";
            }
            localConfig.gallery?.images?.forEach((imgObj, index) => {
                if (imgObj.src) updateGalleryImageUI(index, imgObj.src);
            });
// --- SYNCHRO INFOS PRATIQUES ---
            if (localConfig.practical) {
                const p = localConfig.practical;
                const isEnabled = p.show === true;
                const mainToggle = document.getElementById('toggle-practical');
                if (mainToggle) mainToggle.checked = isEnabled;
                const infoCard = document.getElementById('practical-info-card');
                const fieldsContainer = document.getElementById('practical-content');
                if (isEnabled) {
                    infoCard?.classList.add('hidden');
                    fieldsContainer?.classList.remove('hidden');
                } else {
                    infoCard?.classList.remove('hidden');
                    fieldsContainer?.classList.add('hidden');
                }
                const ctaToggle = document.querySelector('input[onchange="updatePracticalCta(this.checked)"]');
                if (ctaToggle) ctaToggle.checked = p.showMapBtn !== false;
                setPracticalMode(p.displayMode || 'text');
            }
// --- SYNCHRO TOGGLE FIGURES ---
            const toggleFigures = document.getElementById('toggle-figures');
            if (toggleFigures) toggleFigures.checked = localConfig.hero?.showFigures !== false;
// --- SYNCHRO FAQ propre  ---
            const toggleFaq = document.getElementById('toggle-faq');
            const fieldsFaq = document.getElementById('faq-editor-content');
            if (!localConfig.faq) localConfig.faq = { show: true, title: "Questions fréquentes", items: [] };
            const isFaqEnabled = localConfig.faq.show !== false; 
            if (toggleFaq) toggleFaq.checked = isFaqEnabled;
            if (fieldsFaq) {
                fieldsFaq.style.opacity = isFaqEnabled ? "1" : "0.3";
                fieldsFaq.style.pointerEvents = isFaqEnabled ? "auto" : "none";
            }
// --- SYNCHRO AVIS ---
            if (localConfig.testimonials) {
                const isAvisEnabled = localConfig.testimonials.show !== false;
                const toggleAvis = document.getElementById('toggle-testimonials');
                const fieldsAvis = document.getElementById('testimonials-editor-content');
                if (toggleAvis) toggleAvis.checked = isAvisEnabled;
                if (fieldsAvis) {
                    fieldsAvis.style.opacity = isAvisEnabled ? "1" : "0.3";
                    fieldsAvis.style.pointerEvents = isAvisEnabled ? "auto" : "none";
                }
            }
// --- FORCE LE CHECK VISUEL DES RADIOS ---
            if (localConfig.selectedMode) {
                const radio = document.querySelector(`input[name="config-type"][value="${localConfig.selectedMode}"]`);
                if (radio) radio.checked = true;
            }
// --- SYNCHRO BARRE DE PROGRESSION ---
            if (localConfig.lastStep) updateProgressBar(localConfig.lastStep);
// --- RESTAURATION DES BOUTONS "VALIDÉ" ---
            if (localConfig.steps) {
                Object.keys(localConfig.steps).forEach(sectionId => {
                    if (localConfig.steps[sectionId] === true) {
                         const btn = document.querySelector(`#${sectionId} .btn-save-step`);
                    if (btn) {
                        btn.classList.add('btn-validated-status');
                        btn.innerText = "✓ Validé";
                        btn.disabled = false;
                        btn.style.opacity = "1";
                        btn.style.pointerEvents = "auto";
                    }
                }
            });
        }
        } catch(e) {
            console.error("Erreur chargement local", e);
        }
    } else {
// --- PREMIÈRE VISITE RÉELLE ---
        applyPracticalDefaults();
        if (!localConfig.meta) localConfig.meta = {};
        localConfig.meta.template = 'moderne'; 
        localConfig.services?.items?.forEach(item => {
            item.showPrice = true;
            item.showPrefix = true;
        });
        const firstCatBtn = document.querySelector('.cat-btn');
        if (firstCatBtn) filterTemplates('Corporate', firstCatBtn);
    }
// --- FINALISATION ---
    initPracticalDefaults();
    switchConfigMode(localConfig.selectedMode, true);
// Checks de validité UI
    checkPracticalValidity();
    checkAccueilValidity(); 
    checkIdentiteValidity();
    checkServicesValidity();
    checkTestimonialsValidity();
    checkFaqValidity();
    checkLegalValidity();
    checkLinkedinValidity();
    checkGlobalValidation();
// --- FORCE LE MASQUAGE GALERIE AU DEMARRAGE ---
    const currentGalCount = localConfig.gallery?.displayCount || 3;
    const galSelectMenu = document.querySelector('select[onchange*="updateGalleryGrid"]');
    if (galSelectMenu) galSelectMenu.value = currentGalCount;
    updateGalleryGrid(currentGalCount);
// --- FORCE LE MASQUAGE FAQ AU DEMARRAGE ---
    const currentFaqCount = localConfig.faq?.displayCount || 3;
    const faqSelectMenu = document.querySelector('select[onchange*="updateFaqDisplayCount"]');
    if (faqSelectMenu) faqSelectMenu.value = currentFaqCount;
    updateFaqDisplayCount(currentFaqCount);
// --- TRACKING MAIL ---
    const finalBtn = document.getElementById('final-cta-button');
    if (finalBtn) {
        finalBtn.addEventListener('click', () => {
            if (!finalBtn.classList.contains('cursor-not-allowed')) {
                sendProgressToNetlify(true); 
                console.log("Envoi final Netlify effectué.");
            }
        });
    }
};
// --- ENVOI DES DONNEES ---
function sync() {
// --- FORCE LE MASQUAGE DU BLOC FINA SI ON EST EN MODIF ---
    if (localStorage.getItem('modeModificationActive') === 'true') {
        const sectionsToHide = ['section-finale', 'section-ia'];
        sectionsToHide.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.style.setProperty('display', 'none', 'important');
                el.classList.add('hidden');
            }
        });
        document.getElementById('update-action-container')?.classList.remove('hidden');
    }
    const mode = localConfig.selectedMode || 'web';
// Web
    if (frame && frame.contentWindow) {
        frame.contentWindow.postMessage({ type: 'UPDATE_CONFIG', config: localConfig, viewMode: mode }, '*');
    }
// LinkedIn
    const liFrame = document.getElementById('linkedin-frame');
    if (liFrame && liFrame.contentWindow) {
        const kit = localConfig.linkedinKit || {};
        const dataForLinkedin = {
            colors: localConfig.colors,
            header: localConfig.header,
            template : localConfig.template || 'moderne',
            linkedinKit: kit,
            hero: {
                title: kit.bannerTitle, 
                figures: kit.figures,
                showFigures: localConfig.hero?.showFigures !== false
            },
            vignette1Title: kit.vignette1Title,
            vignette1Cta: kit.vignette1Cta || "Contact",
            vignette2Title: kit.vignette2Title,
            vignette2Cta: kit.vignette2Cta || "Voir l'offre",
            contact: { ctaLabel: kit.vignette1Cta || "Contact" }
        };
        liFrame.contentWindow.postMessage({ type: 'UPDATE_CONFIG', config: dataForLinkedin }, '*');
    }
}
// --- PROTECTION ANTIVOL IFRAME LINKEDIN  ---
document.addEventListener('contextmenu', (e) => {
    if (localConfig.selectedPreview === 'linkedin') {
        const isInsidePreview = e.target.closest('#preview-wrapper');
        if (isInsidePreview) {
            e.preventDefault();
            console.log("Protection active : Clic droit bloqué.");
            return false;
        }
    }
});
document.addEventListener('dragstart', (e) => {
    if (localConfig.selectedPreview === 'linkedin' && e.target.closest('#preview-wrapper')) {
        e.preventDefault();
    }
});
// --- GESTION DES IMAGES  ---
function processFile(file, callback, isLogo = false) {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const MAX_WIDTH = isLogo ? 400 : 800;
            let width = img.width;
            let height = img.height;
            if (width > MAX_WIDTH) { height *= MAX_WIDTH / width; width = MAX_WIDTH; }
            canvas.width = width; canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            const webpData = canvas.toDataURL('image/webp', 0.7);
            callback(webpData);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}
function handleImage(input, section, key) {
    const isLogo = (key === 'logo');
    processFile(input.files[0], (webpData) => {
        localConfig[section][key] = webpData;
        updateImageUI(section, key, webpData); 
        sync();
    }, isLogo);
}
function handleDrop(event, section, key) {
    event.preventDefault();
    const dropZone = document.getElementById(`drop-zone-${section}`);
    dropZone.classList.remove('bg-slate-100', 'border-[#8449d9]');
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
        const isLogo = (key === 'logo');
        processFile(event.dataTransfer.files[0], (webpData) => {
            localConfig[section][key] = webpData;
            updateImageUI(section, key, webpData); 
            sync();
        }, isLogo);
    }
}
function updateImageUI(section, key, data) {
    const preview = document.getElementById(`preview-img-${section}`);
    const placeholder = document.getElementById(`upload-placeholder-${section}`);
    const trashBtn = document.getElementById(`trash-btn-${section}`);
    const dropZone = document.getElementById(`drop-zone-${section}`);
    if (data && data !== "") {
        if (preview) preview.src = data, preview.classList.remove('hidden');
        if (placeholder) placeholder.classList.add('hidden');
        if (trashBtn) trashBtn.classList.remove('hidden');
        if (dropZone) dropZone.classList.add('border-green-400', 'border-solid');
    } else {
        if (preview) preview.src = "", preview.classList.add('hidden');
        if (placeholder) placeholder.classList.remove('hidden');
        if (trashBtn) trashBtn.classList.add('hidden');
        if (dropZone) dropZone.classList.remove('border-green-400', 'border-solid');
    }
    if (section === 'hero') {
        checkAccueilValidity();
        markSectionDirty('section-accueil', "Valider l'accueil");
    }
    if (section === 'header' && key === 'logo') {
        markSectionDirty('section-identite', "Valider l'identité visuelle");
    }
}
function clearImage(section, key) {
    localConfig[section][key] = "";
    updateImageUI(section, key, "");
    sync();
}
// --- NAVIGATION & PROGRESSION ---
function validateStep(nextSectionSelector) {
    const currentBtn = event ? event.currentTarget : null; 
    const parentSection = currentBtn ? currentBtn.closest('[id]') : null;
    const parentId = parentSection ? parentSection.id : null;
// --- SÉCURITÉ SPÉCIFIQUE À LA PREMIÈRE ÉTAPE Si on valide la section-vitrine et qu'aucun mode n'est enregistré ---
    if (parentId === 'section-vitrine' && !localConfig.selectedMode) {
        const defaultRadio = document.querySelector('input[name="config-type"]:checked');
        if (defaultRadio) {
    // On enregistre physiquement le mode (ex: 'full')
            localConfig.selectedMode = defaultRadio.value;
    // On déclenche l'affichage des sections cachées (isAuto=false pour forcer l'action)
            switchConfigMode(localConfig.selectedMode, false);
        }
    }
// Gestion du style du bouton
    if (currentBtn) {
        currentBtn.classList.add('btn-validated-status');
        currentBtn.innerText = "✓ Validé";
    }
    const cleanId = nextSectionSelector.replace('#', ''); 
    if (!localConfig.steps) localConfig.steps = {};
// Enregistrement de la validation de l'étape actuelle
    if (parentId) {
        localConfig.steps[parentId] = true;
    }
// Sauvegarde locale
    localConfig.lastStep = cleanId; 
    localStorage.setItem('vitrine_express_progression', JSON.stringify(localConfig));
    currentActiveSectionId = cleanId;
// Scroll vers la section suivante dans le configurateur (gauche)
    const nextSection = document.getElementById(cleanId);
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        nextSection.classList.add('ring-2', 'ring-[#8449d9]/30', 'rounded-2xl');
        setTimeout(() => nextSection.classList.remove('ring-2'), 2000);
    }
// Mapping pour le scroll automatique dans la preview (droite)
    const scrollMapping = { 
        'section-accueil': 'hero', 
        'section-services': 'services', 
        'section-avis': 'testimonials', 
        'section-gallery': 'social-proof', 
        'section-about': 'about', 
        'section-practical': 'practical', 
        'section-faq': 'faq', 
        'section-contact': 'contact', 
        'section-social': 'social-links', 
        'section-legale': 'footer-credit' 
    };
    const targetSection = scrollMapping[cleanId];
    if (targetSection && frame && frame.contentWindow) {
        frame.contentWindow.postMessage({ type: 'SCROLL_TO', section: targetSection }, '*');
    }
    updateProgressBar(cleanId);
    checkGlobalValidation();
}
function updateProgressBar(currentSectionId) {
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const SEQUENCE = [
        'section-vitrine','section-model', 'section-couleurs', 'section-identite', 'section-ia',
        'section-accueil', 'section-services', 'section-avis', 
        'section-gallery', 'section-about', 'section-practical', 
        'section-faq', 'section-contact', 'section-social', 'section-seo',
        'section-legale', 'section-hebergement', 'section-linkedin-kit', 'section-finale'
    ];
    const stepIndex = SEQUENCE.indexOf(currentSectionId);
    let percentage = 0;

    if (stepIndex !== -1) {
        percentage = Math.round(((stepIndex + 1) / SEQUENCE.length) * 100);
    } else {
        percentage = 5; 
    }
    if (progressFill) {
        progressFill.style.width = percentage + '%';

        if (percentage >= 100) {
            progressFill.style.background = "linear-gradient(90deg, #10B981, #059669)";
        } else {
            progressFill.style.background = "linear-gradient(90deg, #8449d9, #059669)";
        }
    }
    if (progressText) {
        progressText.innerText = percentage + '% configuré';
    }
}
// --- LOGIQUE MÉTIER & CONFIGURATION ---
const TEMPLATES_DB = [
    { id: 'moderne',   name: 'Moderne',   cat: 'Corporate', hasHeroImg: true },
    { id: 'bento',     name: 'Bento',     cat: 'Corporate', hasHeroImg: true },
    { id: 'techy',     name: 'Techy',     cat: 'Corporate', hasHeroImg: false }, 
    { id: 'pure',      name: 'Pure',      cat: 'Harmonie',  hasHeroImg: false }, 
    { id: 'leaf',      name: 'Leaf',      cat: 'Harmonie',  hasHeroImg: true },
    { id: 'pop',       name: 'Pop',       cat: 'Audace',    hasHeroImg: true },
    { id: 'audacieux', name: 'Impact',    cat: 'Audace',    hasHeroImg: false } 
];
// --- SPECIFIQUE MODELE SUR MESURE ---
document.getElementById('custom-template-code').addEventListener('input', function(e) {
    const btn = document.getElementById('btn-apply-custom');
    const val = e.target.value.trim();
    if (val.length > 0) {
        btn.classList.remove('border-slate-200', 'text-slate-200');
        btn.classList.add('border-violet-500', 'text-violet-500', 'shadow-sm');
    } else {
        btn.classList.add('border-slate-200', 'text-slate-200');
        btn.classList.remove('border-violet-500', 'text-violet-500', 'shadow-sm');
    }
});
function applyCustomTemplate() {
    const input = document.getElementById('custom-template-code');
    const type = input.value.trim().toLowerCase();
    if (!type) return;
    document.querySelectorAll('.model-card').forEach(c => {
        c.classList.remove('active', 'border-[#8449d9]', 'ring-1', 'ring-[#8449d9]');
    });
    if (!localConfig.meta) localConfig.meta = {};
    localConfig.meta.template = type;
    localConfig.template = type;
    localStorage.setItem('vitrine_express_progression', JSON.stringify(localConfig));
    const frame = document.getElementById('preview-frame'); 
    if (frame) {
        frame.src = `template-${type}.html`;
        frame.onload = () => sync();
    }
    const liFrame = document.getElementById('linkedin-frame');
    if (liFrame) {
        liFrame.src = `template-linkedin-${type}.html`;
        liFrame.onload = () => sync();
    }
    adaptUIForTemplate(type);
    input.value = "";
    const btn = document.getElementById('btn-apply-custom');
    btn.classList.add('border-slate-200', 'text-slate-200');
    btn.classList.remove('border-violet-500', 'text-violet-500', 'shadow-sm');
}
// --- MODELES STANDARDS ---
function filterTemplates(category, btn) {
    document.querySelectorAll('.cat-btn').forEach(b => {
        b.classList.remove('active', 'border-[#8449d9]', 'bg-violet-50/50');
    });
    btn.classList.add('active', 'border-[#8449d9]', 'bg-violet-50/50');
    const grid = document.getElementById('grid-templates');
    if (!grid) return;
    grid.innerHTML = '';
    const filtered = TEMPLATES_DB.filter(t => t.cat === category);
    filtered.forEach(tmpl => {
        const card = document.createElement('div');
        const isCurrent = localConfig.meta && localConfig.meta.template === tmpl.id;
        card.className = `model-card ${isCurrent ? 'active border-[#8449d9] ring-1 ring-[#8449d9]' : 'border-slate-100'} cursor-pointer p-6 rounded-xl border-2 bg-slate-50 hover:border-[#8449d9] transition-all flex items-center justify-center group relative`;
        if (isCurrent) {
            card.innerHTML = `<span class="absolute top-2 right-2 text-[#8449d9] text-xs">●</span>`;
        }
        card.onclick = () => selectModel(tmpl.id, card);
        const nameLabel = document.createElement('p');
        nameLabel.className = "font-bold text-xs uppercase tracking-widest text-slate-600 group-[.active]:text-[#8449d9]";
        nameLabel.textContent = tmpl.name;
        card.appendChild(nameLabel);
        grid.appendChild(card);
    });
}
function selectModel(type, el) {
    document.querySelectorAll('.model-card').forEach(c => {
        c.classList.remove('active', 'border-[#8449d9]', 'ring-1', 'ring-[#8449d9]');
    });
    el.classList.add('active', 'border-[#8449d9]', 'ring-1', 'ring-[#8449d9]');
    if (!localConfig.meta) localConfig.meta = {};
    localConfig.meta.template = type;
    localConfig.template = type;
    adaptUIForTemplate(type);
    frame.src = `template-${type}.html`;
    frame.onload = () => sync();
    const liFrame = document.getElementById('linkedin-frame');
    if (liFrame) {
        liFrame.src = `template-linkedin-${type}.html`;
        liFrame.onload = () => sync(); 
    }
    const btn = document.querySelector('#section-model .btn-save-step');
    if (btn && localConfig.steps?.['section-model'] === true) {
        localConfig.steps['section-model'] = false; 
        btn.classList.remove('btn-validated-status');
        btn.innerText = "Valider ce modèle";
    }
}
function updateColorSync(key, value) {
    localConfig.colors[key] = value;
    const label = document.getElementById(`label-hex-${key}`);
    if (label) label.textContent = value.toUpperCase();
    const preview = document.getElementById(`pv-${key}`);
    if (preview) preview.style.backgroundColor = value;
    localConfig.steps['section-couleurs'] = false;
    const btn = document.querySelector('#section-couleurs .btn-save-step');
    if (btn) {
        btn.classList.remove('btn-validated-status');
        btn.innerText = "Valider mes couleurs";
        btn.disabled = false;
    }
    sync();
}
function updateText(section, key, value) { 
    if (!localConfig[section]) {
        localConfig[section] = (section === 'faq' || section === 'about') ? { show: true } : {};
    }
    if (section === 'header' && key === 'companyName') {
        markSectionDirty('section-identite', "Valider l'identité visuelle");
        checkIdentiteValidity();  
    }
    localConfig[section][key] = value;
    if (section === 'hero') {
        markSectionDirty('section-accueil', "Valider l'accueil");
    }
    if (section === 'services') {
        markSectionDirty('section-services', "Valider les services");
        checkServicesValidity();
    } 
    if (section === 'testimonials') {
    markSectionDirty('section-avis', "Valider les avis");
    checkTestimonialsValidity();
    }
    if (section === 'about') {
    markSectionDirty('section-about', "Valider l'à propos");
    checkAboutValidity();
    }
    if (section === 'practical') {
    markSectionDirty('section-practical', "Valider les infos");
    }
    if (section === 'faq') {
    markSectionDirty('section-faq', "Valider la faq");
    checkFaqValidity();
    }
    if (section === 'contact') {
    markSectionDirty('section-contact', "Valider le contact'");
    checkContactValidity();
    }
    sync(); 
}
function updateServiceCard(index, key, value) {
    if (localConfig.services && localConfig.services.items[index]) {
        localConfig.services.items[index][key] = value;
        markSectionDirty('section-services', "Valider les services");
        checkServicesValidity();
        sync();
    }
}
// --- LOGIQUE D'AFFICHAGE LOGO ---
function toggleLogoMode(noLogo) {
    const uploadZone = document.getElementById('container-logo-upload');
    localConfig.header.useTextOnly = noLogo;
    if (noLogo) {
        uploadZone.style.opacity = "0.5";
        uploadZone.style.pointerEvents = "none";
    } else {
        uploadZone.style.opacity = "1";
        uploadZone.style.pointerEvents = "auto";
    }
    checkIdentiteValidity();
    sync(); 
}
// ---  GÉNÉRATION DU FAVICON DYNAMIQUE ---
function updateDynamicFavicon() {
    const fav = document.getElementById('favicon');
    const favApple = document.getElementById('favicon-apple');
    const accentColor = localConfig.colors?.accent || '#1ECAD3';
    const companyName = localConfig.header?.companyName || "Entreprise";
    const logo = localConfig.header?.logo;
    if (logo && logo.trim() !== "" && !localConfig.header.useTextOnly) {
        if (fav) fav.href = logo;
        if (favApple) favApple.href = logo;
    } else {
        const canvas = document.createElement('canvas');
        canvas.width = 64; canvas.height = 64;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = accentColor;
        ctx.beginPath(); ctx.arc(32, 32, 32, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 38px sans-serif";
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText(companyName.charAt(0).toUpperCase(), 32, 32);
        const dataUrl = canvas.toDataURL('image/png');
        if (fav) fav.href = dataUrl;
        if (favApple) favApple.href = dataUrl;
    }
}
// --- LOGIQUE DÉDIÉE À LA SECTION ACCUEIL ---
function updateHeroToggle(key, value) {
    localConfig.hero[key] = value;
    const container = document.getElementById('figures-container');
    if (container) {
        container.style.opacity = value ? "1" : "0.4";
        container.style.pointerEvents = value ? "auto" : "none";
    }
   markSectionDirty('section-accueil', "Valider l'accueil");
    sync();
}
function updateFigure(index, key, value) {
    if (!localConfig.hero.figures) {
        localConfig.hero.figures = [
            { num: '', label: '' },
            { num: '', label: '' },
            { num: '', label: '' }
        ];
    }
    if (localConfig.hero.figures[index]) {
        localConfig.hero.figures[index][key] = value;
    }
    markSectionDirty('section-accueil', "Valider l'accueil");
    sync();
}
function handleLabelSelectChange(index, value) {
    const customInput = document.getElementById(`fig-custom-${index}`);
        markSectionDirty('section-accueil', "Valider l'accueil");
    if (value === 'CUSTOM') {
        if (customInput) customInput.classList.remove('hidden');
    } else {
        if (customInput) customInput.classList.add('hidden');
        updateFigure(index, 'label', value);
    }
}
function handleCTASelect(value) {
    const customInput = document.getElementById('hero-cta-custom');
    if (value === 'CUSTOM') {
        customInput.classList.remove('hidden');
    } else {
        customInput.classList.add('hidden');
        updateText('hero', 'ctaLabel', value);
    }
    markSectionDirty('section-accueil', "Valider l'accueil");
}
// --- LOGIQUE DÉDIÉE À LA SECTION SERVICES ---
function handleIndicationChange(index, value) {
    const customInput = document.getElementById(`custom-prefix-${index}`);
    if (value === 'Saisie libre') {
        customInput.classList.remove('hidden');
    } else {
        customInput.classList.add('hidden');
        customInput.value = ""; 
        updateServiceCard(index, 'prefix', value);
    }
}
function toggleServiceFeature(index, key, isChecked) {
    if (localConfig.services && localConfig.services.items[index]) {
        localConfig.services.items[index][key] = isChecked;
        markSectionDirty('section-services', "Valider les services");
        checkServicesValidity();
        sync();
    }
}
function updateServiceCard(index, key, value) {
    if (localConfig.services && localConfig.services.items[index]) {
        localConfig.services.items[index][key] = value;
        if (key === 'price' && value.trim() !== "") localConfig.services.items[index].showPrice = true;
        if (key === 'prefix' && value.trim() !== "") localConfig.services.items[index].showPrefix = true;
        markSectionDirty('section-services', "Valider les services");
        checkServicesValidity();
        sync();
    }
}
// --- LOGIQUE DÉDIÉE À LA SECTION AVIS ---
function updateTestimonial(index, key, value) {
    if (!localConfig.testimonials.items[index]) {
        localConfig.testimonials.items[index] = {
            stars: 5, 
            text: "",
            name: "",
            role: ""
        };
    }
    if (key === 'stars') {
        localConfig.testimonials.items[index][key] = parseInt(value) || 5;
    } else {
        localConfig.testimonials.items[index][key] = value;
    }
    markSectionDirty('section-avis', "Valider les avis");
    checkTestimonialsValidity();
    sync();
}
// --- LOGIQUE DÉDIÉE À LA SECTION GALERIE ---
function updateGalleryGrid(count) {
    const num = parseInt(count);
    if (!num) return;
    if (!localConfig.gallery) localConfig.gallery = {};
    localConfig.gallery.displayCount = num;
    const items = document.querySelectorAll('.gal-item');
    items.forEach((item, index) => {
        if (index < num) {
            item.classList.remove('hidden');
            item.style.display = ""; 
        } else {
            item.classList.add('hidden');
            item.style.display = "none"; 
        }
    });
    if (!localConfig.gallery.images) localConfig.gallery.images = [];
    if (num > localConfig.gallery.images.length) {
        for (let i = localConfig.gallery.images.length; i < num; i++) {
            localConfig.gallery.images.push({ src: "", cap: "" });
        }
    } else {
        localConfig.gallery.images = localConfig.gallery.images.slice(0, num);
    }
    markSectionDirty('section-gallery', "Valider la galerie");
    checkGalleryValidity();
    sync();
}
function handleGalleryImage(input, index) {
    if (input.files && input.files[0]) processGalleryFile(input.files[0], index);
}
function handleGalleryDrop(event, index) {
    event.preventDefault();
    const dropZone = document.getElementById(`drop-zone-gal-${index}`);
    if (dropZone) dropZone.classList.remove('border-[#8449d9]', 'bg-slate-50');
    if (event.dataTransfer.files && event.dataTransfer.files[0]) processGalleryFile(event.dataTransfer.files[0], index);
}
function processGalleryFile(file, index) {
    processFile(file, (webpData) => {
        if (!localConfig.gallery.images[index]) localConfig.gallery.images[index] = { src: "", cap: "" };
        localConfig.gallery.images[index].src = webpData;
        updateGalleryImageUI(index, webpData);
        markSectionDirty('section-gallery', "Valider la galerie");
        checkGalleryValidity();
        sync();
    });
}
function updateGalleryImageUI(index, data) {
    const preview = document.getElementById(`preview-img-gal-${index}`);
    const placeholder = document.getElementById(`upload-placeholder-gal-${index}`);
    const trashBtn = document.getElementById(`trash-btn-gal-${index}`);
    const dropZone = document.getElementById(`drop-zone-gal-${index}`);
    if (data && data !== "") {
        if (preview) { preview.src = data; preview.classList.remove('hidden'); }
        if (placeholder) placeholder.classList.add('hidden');
        if (trashBtn) trashBtn.classList.remove('hidden');
        if (dropZone) dropZone.classList.add('border-green-400', 'border-solid');
    } else {
        if (preview) { preview.src = ""; preview.classList.add('hidden'); }
        if (placeholder) placeholder.classList.remove('hidden');
        if (trashBtn) trashBtn.classList.add('hidden');
        if (dropZone) dropZone.classList.remove('border-green-400', 'border-solid');
    }
}
function clearGalleryImage(index) {
    if (localConfig.gallery.images[index]) localConfig.gallery.images[index].src = "";
    updateGalleryImageUI(index, "");
    markSectionDirty('section-gallery', "Valider la galerie");
    checkGalleryValidity();
    sync();
}
function updateGalleryCaption(index, value) {
    if (localConfig.gallery.images[index]) { localConfig.gallery.images[index].cap = value; 
        markSectionDirty('section-gallery', "Valider la galerie");
        checkGalleryValidity();
        sync(); }
}
// --- LOGIQUE DÉDIÉE À LA SECTION A PROPOS ---
function handleAboutDrop(event) {
    event.preventDefault();
    document.getElementById('drop-zone-about')?.classList.remove('border-[#8449d9]', 'bg-slate-50');
    if (event.dataTransfer.files && event.dataTransfer.files[0]) processAboutFile(event.dataTransfer.files[0]);
}
function handleAboutImage(input) {
    if (input.files && input.files[0]) processAboutFile(input.files[0]);
}
function processAboutFile(file) {
    processFile(file, (webpData) => {
        if (!localConfig.about) localConfig.about = {};
        localConfig.about.img = webpData; 
        updateAboutImageUI(webpData);
        markSectionDirty('section-about', "Valider l'à propos");
        checkAboutValidity();
        sync(); 
    });
}
function updateAboutImageUI(data) {
    const preview = document.getElementById('preview-img-about');
    const placeholder = document.getElementById('upload-placeholder-about');
    const trashBtn = document.getElementById('trash-btn-about');
    if (data && data !== "") {
        if (preview) { preview.src = data; preview.classList.remove('hidden'); }
        if (placeholder) placeholder.classList.add('hidden');
        if (trashBtn) trashBtn.classList.remove('hidden');
    } else {
        if (preview) { preview.src = ""; preview.classList.add('hidden'); }
        if (placeholder) placeholder.classList.remove('hidden');
        if (trashBtn) trashBtn.classList.add('hidden');
    }
}
function clearAboutImage() {
    if (localConfig.about) localConfig.about.img = ""; 
    document.getElementById('about-img-upload').value = "";
    updateAboutImageUI("");
    markSectionDirty('section-about', "Valider l'à propos'");
    checkAboutValidity();
    sync();
}
// --- LOGIQUE DÉDIÉE À LA SECTION INFOS PRATIQUES ---
function handlePracticalImage(input) {
    if (input.files && input.files[0]) {
        processFile(input.files[0], (webpData) => {
            const preview = document.getElementById('preview-img-practical');
            const placeholder = document.getElementById('upload-placeholder-practical');
            const trashBtn = document.getElementById('trash-btn-practical');
            if(preview) { preview.src = webpData; preview.classList.remove('hidden'); }
            if(placeholder) placeholder.classList.add('hidden');
            if(trashBtn) trashBtn.classList.remove('hidden');
            localConfig.practical.hoursImg = webpData;
            markSectionDirty('section-practical', "Valider les infos"); 
            checkPracticalValidity(); 
            sync();
        });
    }
}
function handlePracticalDrop(e) {
    e.preventDefault();
    document.getElementById('drop-zone-practical')?.classList.remove('border-[#8449d9]', 'bg-slate-50');
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        const input = document.getElementById('hours-img-up');
        const dt = new DataTransfer();
        dt.items.add(e.dataTransfer.files[0]);
        if(input) { input.files = dt.files; handlePracticalImage(input); }
    }
}
function clearPracticalImage() {
    const preview = document.getElementById('preview-img-practical');
    const placeholder = document.getElementById('upload-placeholder-practical');
    const trashBtn = document.getElementById('trash-btn-practical');
    if(preview) { preview.src = ""; preview.classList.add('hidden'); }
    if(placeholder) placeholder.classList.remove('hidden');
    if(trashBtn) trashBtn.classList.add('hidden');
    document.getElementById('hours-img-up').value = "";
    localConfig.practical.hoursImg = "";
    markSectionDirty('section-practical', "Valider les infos"); 
    checkPracticalValidity(); 
    sync();
}
// --- INFOS ---
const fixedLabels = ["Lun - Ven", "Samedi", "Dimanche"];
const hoursState = [
    { open: true, continuous: false, mStart: '', mEnd: '', aStart: '', aEnd: '', start: '', end: '' },
    { open: true, continuous: false, mStart: '', mEnd: '', aStart: '', aEnd: '', start: '', end: '' },
    { open: true, continuous: false, mStart: '', mEnd: '', aStart: '', aEnd: '', start: '', end: '' }
];
function initPracticalDefaults() {
    if (!localConfig.practical) localConfig.practical = {};
    
    if (localConfig.practical.show === undefined) {
        localConfig.practical.show = false;
    }
    localConfig.practical.title = "Infos Pratiques";
    localConfig.practical.locationTitle = "Notre Emplacement";
    localConfig.practical.hoursTitle = "Nos Horaires";
    localConfig.practical.mapBtnLabel = "Voir l'itinéraire";
    localConfig.practical.displayMode = localConfig.practical.displayMode || 'text';
    localConfig.practical.showMapBtn = localConfig.practical.showMapBtn !== undefined ? localConfig.practical.showMapBtn : true;
    if (!localConfig.practical.hoursItems) {
        localConfig.practical.hoursItems = fixedLabels.map(l => ({ label: l, time: "—" }));
    }
    const isEnabled = localConfig.practical.show;
    const mainToggle = document.getElementById('toggle-practical');
    if (mainToggle) mainToggle.checked = isEnabled;
    const infoCard = document.getElementById('practical-info-card');
    const fieldsContainer = document.getElementById('practical-content'); 
    if (isEnabled) {
        infoCard?.classList.add('hidden');
        fieldsContainer?.classList.remove('hidden');
    } else {
        infoCard?.classList.remove('hidden');
        fieldsContainer?.classList.add('hidden');
    }
    if (typeof toggleSectionVisibility === "function") {
        toggleSectionVisibility('practical', isEnabled);
    }
}
function togglePracticalSectionVisibility(isEnabled) {
    localConfig.practical.show = isEnabled;
    const infoCard = document.getElementById('practical-info-card');
    const fieldsContainer = document.getElementById('practical-content');

    if (isEnabled) {
        infoCard?.classList.add('hidden');
        fieldsContainer?.classList.remove('hidden');
    } else {
        infoCard?.classList.remove('hidden');
        fieldsContainer?.classList.add('hidden');
    }
    if (typeof toggleSectionVisibility === "function") {
        toggleSectionVisibility('practical', isEnabled);
    }
    markSectionDirty('section-practical', "Valider les infos"); 
    checkPracticalValidity(); 
    sync();
}
function formatHour(input) {
    let v = input.value.replace(/\D/g, '').slice(0, 4);
    if (v.length >= 3) v = v.slice(0, 2) + ":" + v.slice(2);
    input.value = v;
}
function toggleDayOpen(i, isOpen) {
    hoursState[i].open = isOpen;
    const block = document.querySelector(`.day-block[data-index="${i}"]`);
    if(!block) return;
    const splitView = block.querySelector(".day-split");
    const contView = block.querySelector(".day-continuous");
    const closedView = block.querySelector(".day-closed");
    if (!isOpen) {
        splitView?.classList.add("hidden");
        contView?.classList.add("hidden");
        closedView?.classList.remove("hidden");
    } else {
        closedView?.classList.add("hidden");
        if (hoursState[i].continuous) {
            contView?.classList.remove("hidden");
            splitView?.classList.add("hidden");
        } else {
            splitView?.classList.remove("hidden");
            contView?.classList.add("hidden");
        }
    }
    syncHours(i);
}
function toggleContinuous(i, isContinuous) {
    hoursState[i].continuous = isContinuous;
    const block = document.querySelector(`.day-block[data-index="${i}"]`);
    if(!block) return;
    const splitView = block.querySelector(".day-split");
    const contView = block.querySelector(".day-continuous");
    if (isContinuous) {
        splitView?.classList.add("hidden");
        contView?.classList.remove("hidden");
    } else {
        splitView?.classList.remove("hidden");
        contView?.classList.add("hidden");
    }
    syncHours(i);
}
function updateSplit(i, key, val) {
    hoursState[i][key] = val;
    syncHours(i);
}
function updateContinuous(i, key, val) {
    hoursState[i][key] = val;
    syncHours(i);
}
function syncHours(i) {
    const d = hoursState[i];
    let display = "Fermé";
    if (d.open) {
        if (d.continuous) {
            display = (d.start && d.end) ? `${d.start} - ${d.end}` : "—";
        } else {
            const matin = (d.mStart && d.mEnd) ? `${d.mStart} - ${d.mEnd}` : "";
            const aprem = (d.aStart && d.aEnd) ? `${d.aStart} - ${d.aEnd}` : "";
            if (matin && aprem) {
                display = `${matin} / ${aprem}`;
            } else {
                display = "—";
            }
        }
    }
    localConfig.practical.hoursItems[i] = {
        label: fixedLabels[i],
        time: display
    };
    markSectionDirty('section-practical', "Valider les infos");
    checkPracticalValidity();
    sync(); 
}
function updateAddressPart(part, value) {
    if (!window.currentAddr) window.currentAddr = { street: "", zip: "", city: "" };
    window.currentAddr[part] = value;
    const { street, zip, city } = window.currentAddr;
    localConfig.practical.address = `${street}, ${zip} ${city}`.trim().replace(/^, /, "").replace(/\s+/g, ' ');
    markSectionDirty('section-practical', "Valider les infos");
    checkPracticalValidity();
    sync();
}
function updatePracticalCta(show) {
    localConfig.practical.showMapBtn = show;
    markSectionDirty('section-practical', "Valider les infos");
    checkPracticalValidity();
    sync();
}
function setPracticalMode(mode) {
    localConfig.practical.displayMode = mode;
    const btnText = document.getElementById('btn-practical-text');
    const btnImg = document.getElementById('btn-practical-image');
    const textZone = document.getElementById('hours-text-inputs');
    const imageZone = document.getElementById('hours-image-upload');
    if (mode === 'text') {
        btnText?.classList.add('bg-white', 'shadow-sm', 'text-[#8449d9]');
        btnImg?.classList.remove('bg-white', 'shadow-sm', 'text-[#8449d9]');
        textZone?.classList.remove('hidden');
        imageZone?.classList.add('hidden');
    } else {
        btnImg?.classList.add('bg-white', 'shadow-sm', 'text-[#8449d9]');
        btnText?.classList.remove('bg-white', 'shadow-sm', 'text-[#8449d9]');
        imageZone?.classList.remove('hidden');
        textZone?.classList.add('hidden');
    }
    markSectionDirty('section-practical', "Valider les infos"); 
    checkPracticalValidity(); 
    sync();
}
// --- LOGIQUE DÉDIÉE AUX TOGGLE MONTRER / MASQUER ---
function toggleSectionVisibility(section, isVisible) {
    let configKey, fieldsId, sectionId, label;
    if (section === 'avis' || section === 'testimonials') {
        configKey = 'testimonials';
        fieldsId  = 'testimonials-editor-content';
        sectionId = 'section-avis';
        label     = "Valider les avis";
    } 
    else if (section === 'faq') {
        configKey = 'faq';
        fieldsId  = 'faq-editor-content'; 
        sectionId = 'section-faq';
        label     = "Valider la FAQ";
    }
    else if (section === 'gallery') {
    configKey = 'gallery';
    fieldsId  = 'gallery-editor-content';
    sectionId = 'section-gallery';
    label     = "Valider la galerie";
    }
    if (!localConfig[configKey]) localConfig[configKey] = {};
    localConfig[configKey].show = isVisible;
    const fieldsEl = document.getElementById(fieldsId);
    if (fieldsEl) {
        fieldsEl.style.opacity = isVisible ? "1" : "0.3";
        fieldsEl.style.pointerEvents = isVisible ? "auto" : "none";
    }
    if (isVisible && localConfig.steps) {
        localConfig.steps[sectionId] = false;
    }
    markSectionDirty(sectionId, label);
    if (section === 'faq') {
    checkFaqValidity();
    } else if (section === 'avis' || section === 'testimonials') {
        checkTestimonialsValidity();
    } else if (section === 'gallery') {
        checkGalleryValidity();
    }
    sync();
}
// --- LOGIQUE DÉDIÉE A LA FAQ ---
function updateFaqDisplayCount(count) {
    const selectedCount = parseInt(count);
    if (!selectedCount) return;
    if (!localConfig.faq) localConfig.faq = { show: true, title: "Questions fréquentes", items: [] };
    localConfig.faq.displayCount = selectedCount;
    for (let i = 0; i < 5; i++) {
        const el = document.getElementById(`faq-item-${i}`);
        if (!el) continue;  
        if (i < selectedCount) {
            el.classList.remove('hidden');
            el.style.display = ""; 
        } else {
            el.classList.add('hidden');
            el.style.display = "none";
        }
    }
    markSectionDirty('section-faq', "Valider la faq");
    if (localConfig.steps) localConfig.steps['section-faq'] = false;
    checkFaqValidity();
    sync();
}
function updateFAQ(index, key, value) {
    if (!localConfig.faq) localConfig.faq = { show: true, title: "Questions fréquentes", items: [] };
    if (!localConfig.faq.items) localConfig.faq.items = [];
    if (!localConfig.faq.items[index]) localConfig.faq.items[index] = { q: "", a: "" };
    localConfig.faq.items[index][key] = value;
    checkFaqValidity(); 
    markSectionDirty('section-faq', "Valider la faq");
    sync();
}
// --- LOGIQUE DÉDIÉE À LA SECTION CONTACT ---
const COUNTRY_DATA = {
    "FR": { prefix: "+33", label: "Numéro français (+33)", placeholder: "06 12 34 56 78", img: "https://flagcdn.com/w40/fr.png" },
    "BE": { prefix: "+32", label: "Numéro belge (+32)", placeholder: "0470 12 34 56", img: "https://flagcdn.com/w40/be.png" },
    "LU": { prefix: "+352", label: "Numéro luxembourgeois (+352)", placeholder: "621 123 456", img: "https://flagcdn.com/w40/lu.png" }
};
function updateContactData(key, value) {
    if (!localConfig.contact) localConfig.contact = {};
    localConfig.contact[key] = value;
    if (key === 'ctaLabel') {
        if (!localConfig.header) localConfig.header = {};
    }
    checkContactValidity(); 
    markSectionDirty('section-contact', "Valider le contact");
    sync();
}
function handleCtaLabelChange(val) {
    const customInput = document.getElementById('custom-cta-label');
    if (val === 'custom') {
        customInput.classList.remove('hidden');
        updateContactData('ctaLabel', customInput.value);
    } else {
        customInput.classList.add('hidden');
        updateContactData('ctaLabel', val);
    }
}
function toggleFlagDropdown() {
    document.getElementById('flag-dropdown-list').classList.toggle('hidden');
}
function handleCountryChange(iso) {
    if (!localConfig.contact) localConfig.contact = {};
    const data = COUNTRY_DATA[iso];
    localConfig.contact.countryPrefix = data.prefix;
    localConfig.contact.countryIso = iso;
    document.getElementById('selected-flag-img').src = data.img;
    const label = document.getElementById('label-cta-value');
    const input = document.getElementById('cta-value-input');
    if (localConfig.contact.type === 'tel') {
        label.innerText = data.label;
        input.placeholder = data.placeholder;
    }
    document.getElementById('flag-dropdown-list').classList.add('hidden');
    sync();
}
function handleCtaTypeChange(type) {
    const input = document.getElementById('cta-value-input');
    const label = document.getElementById('label-cta-value');
    const combo = document.getElementById('tel-flag-combo');
    if (!localConfig.contact) localConfig.contact = {};
    localConfig.contact.type = type;
    if (type === 'tel') {
        combo.classList.remove('hidden');
        input.classList.add('!rounded-l-none');
        const currentIso = localConfig.contact.countryIso || 'FR';
        handleCountryChange(currentIso);
    } else {
        combo.classList.add('hidden');
        input.classList.remove('!rounded-l-none');
        label.innerText = type === 'email' ? "Adresse Email" : "Lien du bouton";
        input.placeholder = type === 'email' ? "contact@exemple.com" : "https://...";
    }
    checkContactValidity(); 
    markSectionDirty('section-contact', "Valider le contact");
    sync();
}
window.addEventListener('click', function(e) {
    const combo = document.getElementById('tel-flag-combo');
    const list = document.getElementById('flag-dropdown-list');
    if (combo && !combo.contains(e.target)) {
        list?.classList.add('hidden');
    }
});
// --- LOGIQUE DEDIEE AUX METADATA ---
function updateMeta(key, value) {
    if (!localConfig.meta) localConfig.meta = {};
    localConfig.meta[key] = value;
    if (key === 'title') {
        const previewTitle = document.getElementById('preview-google-title');
        if (previewTitle) {
            previewTitle.textContent = value || "Vitrine pop - Votre Nom";
        }
    }
    if (key === 'description') {
        const previewDesc = document.getElementById('preview-google-desc');
        if (previewDesc) {
            previewDesc.textContent = value || "La meta description (160 caractères max) sert à donner envie de cliquer sur ton site depuis Google...";
        }
    }
    markSectionDirty('section-seo', "Valider le seo");
    checkMetaValidity(); 
    sync();
}
// --- LOGIQUE FOOTER, LEGAL & HÉBERGEMENT ---
const LEGAL_LABELS = {
    "FR": { pro: ["SIREN", "SIRET"], asso: ["Numéro RNA", "SIREN (facultatif)"] },
    "BE": { pro: ["Numéro BCE", "TVA (si diff.)"], asso: ["Numéro BCE", "N° d'unité"] },
    "LU": { pro: ["Numéro RCS", "Numéro de matricule"], asso: ["Numéro RCS", "N° d'inscription"] }
};
let tempSocialLinks = {
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/"
};
let currentLegalCountry = "FR";
let currentEntityType = "pro";
// --- GESTION DES RESEAUX SOCIAUX ---
function updateSocials(key, value) {
    if (!localConfig.socials) localConfig.socials = {};
    localConfig.socials[key] = value;
    if (key !== 'title') tempSocialLinks[key] = value;
    markSectionDirty('section-social', "Valider mes réseaux");
    checkSocialsValidity(); 
    sync();
}
function handleSocialToggle(key, isVisible) {
    if (!localConfig.socials) localConfig.socials = {};
    const input = document.getElementById(`input-social-${key}`);
    localConfig.socials[key] = isVisible ? (input.value || tempSocialLinks[key] || "https://") : "";
    localConfig.socials[key] = isVisible ? (input.value || "https://") : "";
    markSectionDirty('section-social', "Valider mes réseaux");
    if (localConfig.steps) {
        localConfig.steps['section-social'] = false; 
    }
    checkSocialsValidity(); 
    sync();
}
// --- GESTION DES INFOS LEGALES ---
function handleEntityType(type) {
    if (!localConfig.legal) localConfig.legal = {};
    localConfig.legal.entityType = type;
    const warning = document.getElementById('warning-particulier');
    const fieldsContainer = document.getElementById('legal-fields-container');
    const companyInput = document.getElementById('id-company-name');
    const btnValidate = document.querySelector('#section-legale .btn-save-step');
    if (type === 'particulier') {
        if (warning) {
            warning.querySelector('p').textContent =
            "La création d'une Vitrine Express est réservée aux professionnels et aux associations.";
            warning.classList.remove('hidden');
        }
        if (fieldsContainer) fieldsContainer.classList.add('hidden');
        if (btnValidate) btnValidate.classList.add('hidden');
    } else {
        if (warning) warning.classList.add('hidden');
        if (fieldsContainer) fieldsContainer.classList.remove('hidden');
        if (btnValidate) btnValidate.classList.remove('hidden');
        if (companyInput) {
            companyInput.placeholder =
                (type === 'asso') ? "Nom de l'association" : "Raison Sociale";
        }
        handleLegalCountryChange(localConfig.legal.country || 'FR');
    }
    if (localConfig.steps) localConfig.steps['section-legale'] = false;
    markSectionDirty('section-legale', "Valider les informations");
    checkLegalValidity();
    sync();
}
function handleLegalCountryChange(countryCode) {
    if (!localConfig.legal) localConfig.legal = {};
    localConfig.legal.country = countryCode;
    const flagImg = document.getElementById('legal-flag-img');
    if (flagImg) {
        flagImg.src = `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`;
    }
    const id1 = document.getElementById('id-1');
    const id2 = document.getElementById('id-2');
    const type = localConfig.legal.entityType || 'pro';
    if (countryCode === 'FR') {
        if (id1) id1.placeholder = (type === 'asso') ? "N° RNA" : "SIRET";
        if (id2) id2.placeholder = (type === 'pro') ? "SIREN" : "SIRET (si applicable)";
    } else if (countryCode === 'BE') {
        if (id1) id1.placeholder = "BCE - N° d'entreprise";
        if (id2) id2.placeholder = "N° de TVA";
    } else if (countryCode === 'LU') {
        if (id1) id1.placeholder = "N° RCS";
        if (id2) id2.placeholder = "N° Matricule";
    }
    if (localConfig.steps) localConfig.steps['section-legale'] = false;
    markSectionDirty('section-legale', "Valider les informations");
    checkLegalValidity();
    sync();
}
function updateLegal(key, val) {
    if (!localConfig.legal) {
        localConfig.legal = {
            firstName: "",
            lastName: "",
            legalName: "",
            address: "",
            id1: "",
            id2: "",
            contactValue: ""
        };
    }
    if (!localConfig.steps) localConfig.steps = {};
    localConfig.steps['section-legale'] = false;
    localConfig.legal[key] = val;
    if (key === 'email') {
        try {
            localConfig.legal.contactValue = btoa(val);
        } catch(e) {
            localConfig.legal.contactValue = val;
        }
    }
    markSectionDirty('section-legale', "Valider les informations");
    checkLegalValidity();
    sync();
}
function recomposeAddress() {
    const street = document.getElementById('legal-street').value.trim();
    const zip = document.getElementById('legal-zip').value.trim();
    const city = document.getElementById('legal-city').value.trim();
    const full = `${street}${street ? ',' : ''} ${zip} ${city}`.trim();
    updateLegal('address', full);
}
// --- UPDATE LINKEDIN KIT ---
function updateLinkedinKit(key, value) {
    if (!localConfig.linkedinKit) localConfig.linkedinKit = {};
    localConfig.linkedinKit[key] = value;
    checkLinkedinValidity();
    markSectionDirty('section-linkedin-kit', "Valider mon kit linkedin");
    sync();
}
// --- UPDATE FIGURE ---
function updateLinkedinFigure(index, value) {
    if (!localConfig.linkedinKit) localConfig.linkedinKit = {};
    if (!localConfig.linkedinKit.figures) localConfig.linkedinKit.figures = [{label:""},{label:""},{label:""}];
    localConfig.linkedinKit.figures[index] = { label: value };
    markSectionDirty('section-linkedin-kit', "Valider mon kit linkedin");
    checkLinkedinValidity();
    sync();
}
function handleLinkedinCtaChange(vignette, val) {
    const field = (vignette === 'v1') ? 'vignette1Cta' : 'vignette2Cta';
    const customInput = document.getElementById(`li-${vignette}-cta-custom`);
    if (val === 'custom') {
        if (customInput) customInput.classList.remove('hidden');
    } else {
        if (customInput) customInput.classList.add('hidden');
        updateLinkedinKit(field, val);
    }
    markSectionDirty('section-linkedin-kit', "Valider mon kit linkedin");
    checkLinkedinValidity();
    sync();
}
function handleLinkedinEntity(type) {
    if (!localConfig.linkedinKit) localConfig.linkedinKit = {};
    localConfig.linkedinKit.entityType = type;
    const warning = document.getElementById('warning-linkedin-particulier');
    const fullSection = document.getElementById('section-linkedin-kit'); 
    if (type === 'particulier') {
        if (warning) warning.classList.remove('hidden');
        if (fullSection) fullSection.classList.add('hidden');
    } else {
        if (warning) warning.classList.add('hidden');
        if (fullSection) fullSection.classList.remove('hidden');
    }
    markSectionDirty('section-linkedin-kit', "Valider mon kit linkedin");
    sync();
}
// ----------- LOGIQUE DE VALIDATION ET ADAPTATION -------------
// --- MARQUE UNE SECTION COMME GRISE OU A VALIDER ---
function checkSectionValidity(sectionId, isValid) {
    const btn = document.querySelector(`#${sectionId} .btn-save-step`);
    if (!btn) return;
    if (isValid) {
        btn.disabled = false;
        btn.classList.remove('opacity-50', 'cursor-not-allowed');
        btn.style.pointerEvents = "auto";
    } else {
        btn.disabled = true;
        btn.classList.add('opacity-50', 'cursor-not-allowed');
        btn.style.pointerEvents = "none";
    }
}
// --- MARQUE UNE SECTION COMME MODIFIÉE ---
function markSectionDirty(sectionId, defaultLabel) {
    const btn = document.querySelector(`#${sectionId} .btn-save-step`);
    if (btn) {
        btn.classList.remove('btn-validated-status'); 
        btn.innerText = defaultLabel;                                  
    }
}
// --- IDENTITE VISUELLE ---
function checkIdentiteValidity() {
    const btn = document.querySelector(`#section-identite .btn-save-step`);
    if (!btn) return;
    const companyName = (localConfig.header?.companyName || "").trim();
    const noLogo = localConfig.header?.useTextOnly;
    const hasLogoImg = !!localConfig.header?.logo;
    const isAlreadyValidated = btn.classList.contains('btn-validated-status');
    let isValid = false;
    if (companyName.length >= 2) {
        if (noLogo || hasLogoImg) {
            isValid = true;
        }
    }
    if (isValid) {
        btn.disabled = false;
        btn.classList.remove('opacity-40', 'pointer-events-none');
    } else {
        if (!isAlreadyValidated) {
            btn.disabled = true;
            btn.classList.add('opacity-40', 'pointer-events-none');
        }
    }
}
function resetIdentiteValidation() {
    const btn = getIdentiteBtn();
    if (!btn) return;
    const validated = localConfig.steps?.['header'];
    const dirty = localConfig.header?.dirty;
    if (validated && !dirty) {
// Vert
        btn.classList.add('btn-validated-status');
        btn.innerText = "✓ Validé";
    } else {
// Violet
        btn.classList.remove('btn-validated-status');
        btn.innerText = "Valider l'identité visuelle";
    }
}
function validateIdentite() {
    if (!localConfig.steps) localConfig.steps = {};
    localConfig.steps['section-identite'] = true;
    if (!localConfig.header) localConfig.header = {};
    localConfig.header.dirty = false;
    localStorage.setItem('vitrine_express_progression', JSON.stringify(localConfig));
    resetIdentiteValidation();
}
// --- ACCUEIL ---
function adaptUIForTemplate(templateId) {
    const tmpl = TEMPLATES_DB.find(t => t.id === templateId);
    if (!tmpl) return;
    const dropZone = document.getElementById('drop-zone-hero');
    if (!dropZone) return;
    const existingOverlay = dropZone.querySelector('.no-image-overlay');
    if (existingOverlay) existingOverlay.remove();
    if (tmpl.hasHeroImg) {
        dropZone.style.opacity = "1";
        dropZone.style.pointerEvents = "auto";
        dropZone.classList.remove('cursor-not-allowed');
    } else {
// Mode SANS IMAGE : on crée l'overlay
        dropZone.style.pointerEvents = "none";
        dropZone.classList.add('cursor-not-allowed');
        const overlay = document.createElement('div');
        overlay.className = 'no-image-overlay animate-fadeIn';
        overlay.innerHTML = `
            <svg class="w-12 h-12 text-slate-300 mb-2" viewBox="0 0 640 640" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M431.2 476.5L163.5 208.8C141.1 240.2 128 278.6 128 320C128 426 214 512 320 512C361.5 512 399.9 498.9 431.2 476.5zM476.5 431.2C498.9 399.8 512 361.4 512 320C512 214 426 128 320 128C278.5 128 240.1 141.1 208.8 163.5L476.5 431.2zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z"/>
            </svg>
            <p class="text-[10px] font-bold uppercase tracking-wider text-slate-500">Modèle "${tmpl.name}"</p>
            <p class="text-xs text-slate-400 italic">Cette mise en page n'utilise pas d'image en accueil.</p>
        `;
        dropZone.appendChild(overlay);
    }
    checkAccueilValidity();
}
function checkAccueilValidity() {
    const btn = document.querySelector('#section-accueil .btn-save-step');
    if (!btn) return;
    const h = localConfig.hero || {};
    const steps = localConfig.steps || {};
    if (steps['section-accueil'] === true) {
        btn.disabled = false;
        btn.classList.add('btn-validated-status');
        btn.classList.remove('opacity-50', 'cursor-not-allowed');
        btn.innerText = "✓ Validé";
        btn.style.opacity = "1";
        btn.style.pointerEvents = "auto";
        return;
    }
// --- DEFAULTS ---
    const defaults = {
        title: "Ton titre principal",
        desc: "Explique en une phrase ce que tu fais, pour qui, et le bénéfice principal. Simple, concret, sans jargon technique. Si on ne comprend pas en 5 secondes, simplifie.",
        nums: ["999+", "999", "999%"],
        labels: ["Ta réalisation", "Ton expérience", "Tes clients"]
    };
// --- CHAMPS TEXTE ---
    const titleOk = h.title && h.title.trim().length > 2; 
    const descOk  = h.desc && h.desc.trim().length > 3;  
    const ctaOk   = h.ctaLabel && h.ctaLabel.trim() !== "";
// --- FIGURES  ---
    let figuresOk = true;
    const toggleEl = document.getElementById('toggle-figures');
    if (toggleEl && toggleEl.checked) {
        if (!h.figures || h.figures.length < 3) {
            figuresOk = false;
        } else {
            figuresOk = h.figures.every((f) => {
                const n = f.num ? f.num.toString().trim() : "";
                const l = f.label ? f.label.toString().trim() : "";
                return n.length > 0 && l.length > 0;
            });
        }
    }
// --- IMAGE HERO ---
    const tmpl = TEMPLATES_DB.find(t => t.id === localConfig.meta?.template);
    const needsHeroImg = tmpl ? tmpl.hasHeroImg : true;
    const imgOk = !needsHeroImg || (h.img && h.img !== "");
// --- DÉCISION FINALE ---
    if (titleOk && descOk && ctaOk && figuresOk && imgOk) {
        btn.disabled = false;
        btn.classList.remove('opacity-50', 'cursor-not-allowed', 'btn-validated-status');
        btn.innerText = "Valider l'accueil";
        btn.style.opacity = "1";
        btn.style.pointerEvents = "auto";
    } else {
        btn.disabled = true;
        btn.classList.add('opacity-50', 'cursor-not-allowed');
        btn.classList.remove('btn-validated-status');
        btn.innerText = "Valider l'accueil";
        btn.style.opacity = "0.5";
        btn.style.pointerEvents = "none";
    }
}
// --- RESET / UPDATE VISUEL DU BOUTON HERO ---
function resetAccueilValidation() {
    const btn = document.querySelector('#section-accueil .btn-save-step');
    if (!btn) return;
    const validated = localConfig.steps?.['section-accueil'];
    const dirty = localConfig.hero?.dirty;
    if (validated && !dirty) {
        btn.classList.add('btn-validated-status');
        btn.classList.remove('bg-[#8449d9]');
        btn.innerText = '✓ Validé';
    } else {
        btn.classList.remove('btn-validated-status');
        btn.classList.add('bg-[#8449d9]');
        btn.innerText = 'Valider laccueil';
    }
}
// --- VALIDATION DE LA SECTION HERO ---
function validateHero() {
    if (!localConfig.steps) localConfig.steps = {};
    localConfig.steps['section-accueil'] = true;
    if (!localConfig.hero) localConfig.hero = {};
    localConfig.hero.dirty = false; 
    localStorage.setItem('vitrine_express_progression', JSON.stringify(localConfig));
    resetAccueilValidation();
}
// --- SERVICES ---
const SERVICES_DEFAULTS = {
    title: "Nos solutions",
    items: [
        {
        h3: "Service 1",
        p: "Présente ici un service clé ou un bénéfice majeur. Explique ce que tu fais, pour qui, et ce que ça change pour ton client."
        },
        {
        h3: "Service 2",
        p: "Présente ici un service clé ou un bénéfice majeur. Explique ce que tu fais, pour qui, et ce que ça change pour ton client."
        },
        {
        h3: "Service 3",
        p: "Présente ici un service clé ou un bénéfice majeur. Explique ce que tu fais, pour qui, et ce que ça change pour ton client."
        }
    ]
};
function checkServicesValidity() {
    const s = localConfig.services || {};
    const items = s.items || [];
    let isValid = true;
    if (!s.title || s.title.trim() === "" || s.title === SERVICES_DEFAULTS.title) {
        isValid = false;
    }
    items.forEach((item, i) => {
        const def = SERVICES_DEFAULTS.items[i];
        if (
            !item.h3 || item.h3.trim() === "" || item.h3 === def.h3 ||
            !item.p  || item.p.trim()  === "" || item.p  === def.p
        ) {
            isValid = false;
        }
        if (item.showPrice && (!item.price || item.price.trim() === "")) {
            isValid = false;
        }

        if (item.showPrefix && (!item.prefix || item.prefix.trim() === "")) {
            isValid = false;
        }
    });
    checkSectionValidity('section-services', isValid);
}
// --- AVIS ---
const TESTIMONIALS_DEFAULTS = {
    title: "Ce que nos xxxxxxxxxxxxx",
    ctaText: "Et si xxxxxxxxxx ?",
    items: [
        { stars: "5", text: "", name: "", role: "" },
        { stars: "5", text: "", name: "", role: "" },
        { stars: "5", text: "", name: "", role: "" }
    ]
};
function checkTestimonialsValidity() {
    const t = localConfig.testimonials || {};
    const items = t.items || [];
    if (t.show === false) {
        checkSectionValidity('section-avis', true);
        return;
    }
    let isValid = true;
    if (!t.title || t.title.trim() === "" || t.title === TESTIMONIALS_DEFAULTS.title) {
        isValid = false;
    }
    if (!t.ctaText || t.ctaText.trim() === "" || t.ctaText === TESTIMONIALS_DEFAULTS.ctaText) {
        isValid = false;
    }
    items.forEach((item) => {
        if (
            !item.text || item.text.trim() === "" ||
            !item.name || item.name.trim() === "" ||
            !item.role || item.role.trim() === ""
        ) {
            isValid = false;
        }
    });
    checkSectionValidity('section-avis', isValid);
}
// --- GALLERY ---
const GALLERY_DEFAULTS = {
    title: "Des résulxxxxxxxxxxxx",
    images: [
        { src: "", cap: "Témoignage client : [Prénom], [métier/statut] : ‘[Phrase courte sur ce qu’ils ont aimé ou le résultat]" },
        { src: "", cap: "Projet / réalisation : [Nom du projet] pour [client/secteur] – [bénéfice principal ou usage]" },
        { src: "", cap: "Bénéfice / avant‑après : [Produit/service réalisé] – aide [client/secteur] à [résultat principal]" }
    ]
};
function checkGalleryValidity() {
    const g = localConfig.gallery || {};
    const items = g.images || [];
    if (g.show === false) {
        checkSectionValidity('section-gallery', true);
        return;
    }
    let isValid = true;
    if (!g.title || g.title.trim() === "" || g.title === GALLERY_DEFAULTS.title) {
        isValid = false;
    }
    items.forEach((item, i) => {
        if (
            !item.src || item.src.trim() === "" ||
            !item.cap || item.cap.trim() === "" ||
            (GALLERY_DEFAULTS.images[i] && item.cap.trim() === GALLERY_DEFAULTS.images[i].cap)
        ) {
            isValid = false;
        }

    });
    checkSectionValidity('section-gallery', isValid);
}
// --- ABOUT ---
const ABOUT_DEFAULTS = {
    title: "Qui sommes nous",
    desc: "Racontez en quelques phrases qui vous êtes et ce que vous faites. Vous pouvez : vous présenter individuellement (votre rôle, votre approche, vos forces) ; présenter votre équipe (qui fait quoi, vos expertises) ; ou expliquer votre concept / votre société (mission, valeur ajoutée, bénéfices pour vos clients). Soyez clair, simple et engageant : l’objectif est que quelqu’un comprenne votre activité en 5 secondes.",
    img: ""
};
function checkAboutValidity() {
    const a = localConfig.about || {};
    let isValid = true;
    if (!a.title || a.title.trim() === "" || a.title === ABOUT_DEFAULTS.title) isValid = false;
    if (!a.desc  || a.desc.trim()  === "" || a.desc  === ABOUT_DEFAULTS.desc)  isValid = false;
    if (!a.img || a.img.trim() === "") isValid = false;
    checkSectionValidity('section-about', isValid);
}
// --- PRACTICAL ---
function checkPracticalValidity() {
    const p = localConfig.practical || {};
    const btn = document.querySelector('#section-practical .btn-save-step');
    if (!btn) return;
    if (localConfig.steps && localConfig.steps['section-practical'] === true) return;
    if (p.show === false) {
        checkSectionValidity('section-practical', true);
        return;
    }
    let isValid = true;
    const defaultAddr = "123 Rue de la Réussite, 75000 Paris";
    if (!p.address || p.address.trim() === "" || p.address === defaultAddr) {
        isValid = false;
    }
    if (p.showMapBtn !== false) {
        const defaultMap = "https://goo.gl/maps/...";
        if (!p.mapsLink || p.mapsLink.trim() === "" || p.mapsLink === defaultMap) {
            isValid = false;
        }
    }
    if (p.displayMode === 'text') {
        const forbiddenDefaults = ["09:00 - 18:00", "10:00 - 14:00"]; 
        if (!p.hoursItems || p.hoursItems.length < 3) {
            isValid = false;
        } else {
            const allItemsFilled = p.hoursItems.every((item) => {
                const t = (item.time || "").trim();
                if (t === "—" || t === "") return false;
                if (forbiddenDefaults.includes(t)) return false;
                return true;
            });

            if (!allItemsFilled) isValid = false;
        }
    } else {
        if (!p.hoursImg || p.hoursImg.trim() === "") isValid = false;
    }
    checkSectionValidity('section-practical', isValid);
}
// --- FAQ ---
function checkFaqValidity() {
    const btn = document.querySelector('#section-faq .btn-save-step');
    if (!btn) return;
    const f = localConfig.faq || {};
    if (f.show === false) {
        checkSectionValidity('section-faq', true);
        return; 
    }
    if (localConfig.steps && localConfig.steps['section-faq'] === true) return;
    const defaultQs = [
        "Est-ce que ooooooooooooooooooooooo ?",
        "Comment ooooooooooooooooooooooooooo ?",
        "En combien de temps ooooooooooooooooooooo ?",
        "Puis-je adapter oooooooooooooooooooo ?",
        "Comment ooooooooooooooooooooooooooo ?"
    ];
    const defaultAs = [
        "Explique à qui s’adresse ton service (type de client, situation, besoin principal) et dans quels cas c’est idéal. Tu peux aussi préciser pour qui ce n’est pas forcément adapté.",
        "Décris les grandes étapes simplement : premier contact, échange ou diagnostic, réalisation, livraison ou suivi. Rassure sur la clarté et la simplicité du process.",
        "Indique un délai réaliste : mise en place, livraison, premiers effets visibles. Si ça dépend de certains facteurs, précise lesquels sans entrer dans le technique.",
        "Explique ce qui est modifiable, évolutif ou personnalisable dans le temps, et dans quelles conditions (ajustements, options, accompagnement, etc.).",
        "Explique clairement l’action à faire ensuite : prise de rendez-vous, formulaire, appel, message. Rassure sur le fait que le premier échange est simple et sans engagement."
    ];
    let isValid = true;
    if (!f.title || f.title.trim() === "" || f.title === "Questions fréquentes") {
        isValid = false;
    }
    const countToDisplay = parseInt(f.displayCount || 3);
    for (let i = 0; i < countToDisplay; i++) {
        const item = (f.items && f.items[i]) ? f.items[i] : null;
        if (!item || !item.q || !item.a) {
            isValid = false;
            break;
        }
        const qVal = item.q.trim();
        const aVal = item.a.trim();
        if (qVal === "" || aVal === "" || qVal === defaultQs[i] || aVal === defaultAs[i]) {
            isValid = false;
            break; 
        }
    }
    checkSectionValidity('section-faq', isValid);
}
// --- CONTACT ---
function checkContactValidity() {
    const c = localConfig.contact || {};
    const btn = document.querySelector('#section-contact .btn-save-step');
    if (!btn) return;
    if (localConfig.steps && localConfig.steps['section-contact'] === true) return;
    const defaults = {
        title: "Parlons de votre projet",
        desc: "Explique ici comment on te contacte", 
        value: "https://votre-url-ici"
    };
    let isValid = true;
    if (!c.title || c.title.trim() === "" || c.title === defaults.title) {
        isValid = false;
    }
    if (!c.desc || c.desc.trim() === "" || c.desc.includes(defaults.desc)) {
        isValid = false;
    }
    if (!c.ctaLabel || c.ctaLabel.trim() === "" || c.ctaLabel === "Saisir") {
        isValid = false;
    }
    if (!c.value || c.value.trim() === "" || c.value === defaults.value) {
        isValid = false;
    }
    if (!c.type || c.type.trim() === "") {
        isValid = false;
    }
    checkSectionValidity('section-contact', isValid);
}
// --- SOCIALS ---
function checkSocialsValidity() {
    const s = localConfig.socials || {};
    const btn = document.querySelector('#section-social .btn-save-step');
    if (!btn) return;
    if (localConfig.steps && localConfig.steps['section-social'] === true) return;
    const fbOn = document.getElementById('toggle-social-facebook')?.checked;
    const liOn = document.getElementById('toggle-social-linkedin')?.checked;
    const igOn = document.getElementById('toggle-social-instagram')?.checked;
    const anyOn = fbOn || liOn || igOn;
    const defaults = {
        title: "Suivez-nous",
        fb: "https://facebook.com/",
        li: "https://linkedin.com/",
        ig: "https://instagram.com/"
    };
    let isValid = true;
    if (!anyOn) {
        isValid = true;
    } else {
        if (!s.title || s.title.trim() === "" || s.title === defaults.title) {
            isValid = false;
        }
        if (fbOn && (!s.facebook || s.facebook.trim() === "" || s.facebook === defaults.fb || s.facebook === "https://")) {
            isValid = false;
        }
        if (liOn && (!s.linkedin || s.linkedin.trim() === "" || s.linkedin === defaults.li || s.linkedin === "https://")) {
            isValid = false;
        }
        if (igOn && (!s.instagram || s.instagram.trim() === "" || s.instagram === defaults.ig || s.instagram === "https://")) {
            isValid = false;
        }
    }
    checkSectionValidity('section-social', isValid);
}
// --- METADATA ---
function checkMetaValidity() {
    const m = localConfig.meta || {};
    const btn = document.querySelector('#section-seo .btn-save-step');
    if (!btn) return;
    if (localConfig.steps && localConfig.steps['section-seo'] === true) return;
    const defaultTitle = "Vitrine pop - Votre Nom";
    const defaultDesc = "La meta description (160 caractères max)";
    let isValid = true;
    if (!m.title || m.title.trim() === "" || m.title === defaultTitle) {
        isValid = false;
    }
    if (!m.description || m.description.trim() === "" || m.description.includes(defaultDesc)) {
        isValid = false;
    }
    checkSectionValidity('section-seo', isValid);
}
// --- LEGAL ---
function checkLegalValidity() {
    const l = localConfig.legal || {};
    const btn = document.querySelector('#section-legale .btn-save-step');
    if (!btn) return;
    if (localConfig.steps && localConfig.steps['section-legale'] === true) {
        return;
    }
    const country = l.country || "FR";
    const zipRegex = (country === "FR") ? /\d{5}/ : /\d{4}/;
    const hasZip = zipRegex.test(l.address || "");
    let isValid = true;
    if (!l.firstName || l.firstName.trim().length <= 1) isValid = false;
    if (!l.lastName || l.lastName.trim().length <= 1) isValid = false;
    if (!l.legalName || l.legalName.trim().length <= 1) isValid = false;
    if (!l.address || l.address.trim().length <= 8 || !hasZip) isValid = false;
    if (!l.id1 || l.id1.trim().length <= 3) isValid = false;
    if (!l.contactValue || l.contactValue.trim().length <= 5) isValid = false;
    if (isValid) {
        if (!localConfig.steps) localConfig.steps = {};
        localConfig.steps['section-legale'] = true;
    }
    checkSectionValidity('section-legale', isValid);
}
// --- CHECK LINKEDIN KIT VALIDITY ---
function checkLinkedinValidity() {
    const li = localConfig.linkedinKit || {};
    const btn = document.querySelector('#section-linkedin-kit .btn-save-step'); 
    if (!btn) return;
    const defaults = {
        bannerTitle: "Explique quelle est ton offre unique et le bénéfice pour tes futurs clients",
        vignette1Title: "Echangeons sur votre projet",
        vignette1Cta: "Sélectionner",
        vignette2Title: "Découvrir mon univers",
        vignette2Cta: "Sélectionner"
    };
    let isValid = true;
    if (!li.bannerTitle || li.bannerTitle.trim() === "" || li.bannerTitle === defaults.bannerTitle) {
        isValid = false;
    }
    if (!li.figures || li.figures.length < 3 || !li.figures.every(f => f.label && f.label.trim() !== "")) {
        isValid = false;
    }    
    if (!li.vignette1Title || li.vignette1Title.trim() === "" || li.vignette1Title === defaults.vignette1Title) {
        isValid = false;
    }
    if (!li.vignette1Cta || li.vignette1Cta.trim() === "" || li.vignette1Cta === defaults.vignette1Cta) {
        isValid = false;
    }
    if (!li.vignette2Title || li.vignette2Title.trim() === "" || li.vignette2Title === defaults.vignette2Title) {
        isValid = false;
    }
    if (!li.vignette2Cta || li.vignette2Cta.trim() === "" || li.vignette2Cta === defaults.vignette2Cta) {
        isValid = false;
    }
    if (isValid && (!localConfig.steps || localConfig.steps['section-linkedin-kit'] !== true)) {
        if (!localConfig.steps) localConfig.steps = {};
        localConfig.steps['section-linkedin-kit'] = true;
        sync(); 
    } else {
        checkSectionValidity('section-linkedin-kit', isValid);
    }
}
// --- FONCTION DEDIEE A LA FINALISATION ---
function checkGlobalValidation() {
    const mode = localConfig.selectedMode;
    const finalSection = document.getElementById('section-finale');
    const finalBtn = document.getElementById('final-cta-button');
    const finalText = document.getElementById('final-cta-text');
    const finalTitle = document.getElementById('final-title');
    const finalDesc = document.getElementById('final-desc');
    const legalCheckbox = document.getElementById('legal-checkbox');
// Les icônes du cercle du haut
    const iconCross = document.getElementById('icon-cross');
    const iconCheck = document.getElementById('icon-check');
// 1. Définition des sections requises selon le mode
    let requiredSections = ['section-vitrine', 'section-model', 'section-couleurs', 'section-identite']; 
    if (mode === 'web') {
        requiredSections = requiredSections.concat([
            'section-accueil', 'section-services', 'section-avis', 'section-gallery', 
            'section-about', 'section-practical', 'section-faq', 'section-contact', 
            'section-social', 'section-seo', 'section-legale'
        ]);
        finalText.innerText = "Mettre ma vitrine en ligne";
    } else if (mode === 'linkedin') {
        requiredSections.push('section-linkedin-kit');
        finalText.innerText = "Télécharger mon kit LinkedIn";
    } else if (mode === 'full') {
        requiredSections = requiredSections.concat([
            'section-accueil', 'section-services', 'section-avis', 'section-gallery', 
            'section-about', 'section-practical', 'section-faq', 'section-contact', 
            'section-social', 'section-seo', 'section-legale', 'section-linkedin-kit'
        ]);
        finalText.innerText = "Mettre ma vitrine en ligne";
    }
// 2. Vérifications (On garde "allValid")
    const allValid = requiredSections.every(id => localConfig.steps && localConfig.steps[id] === true);
    const isLegalAccepted = legalCheckbox && legalCheckbox.checked;
// 3. Gestion des états visuels
    if (allValid && isLegalAccepted) {
// --- ÉTAT : VALIDATION TOTALE ---
        finalSection.classList.remove('opacity-50', 'pointer-events-none', 'border-slate-200');
        finalSection.classList.add('border-[#22c55e]', 'shadow-2xl', 'shadow-violet-100');
        finalSection.classList.remove('border-violet-400');
        if (iconCross) iconCross.classList.add('hidden');
        if (iconCheck) iconCheck.classList.remove('hidden');
        finalBtn.classList.remove('grayscale', 'cursor-not-allowed');
        finalBtn.classList.add('hover:scale-[1.02]');
        finalTitle.innerText = "Tout est prêt !";
        finalTitle.className = "text-lg font-bold text-validate transition-colors";
        finalDesc.innerText = "Vérifie une dernière fois ta vitrine, puis valide ci-dessous pour la rendre visible à tous.";
        finalDesc.className = "text-sm text-slate-500 mt-2 max-w-sm mx-auto leading-relaxed mb-10";
    } else if (allValid && !isLegalAccepted) {
// --- ÉTAT : ÉTAPES OK MAIS CHECKBOX MANQUANTE ---
        finalSection.classList.remove('opacity-50', 'pointer-events-none'); 
        finalSection.classList.add('border-violet-400'); 
        finalSection.classList.remove('border-[#22c55e]', 'shadow-2xl');
        if (iconCross) iconCross.classList.remove('hidden');
        if (iconCheck) iconCheck.classList.add('hidden');
        finalBtn.classList.add('grayscale', 'cursor-not-allowed');
        finalBtn.classList.remove('hover:scale-[1.02]');
        finalTitle.innerText = "Certification requise";
        finalTitle.className = "text-lg font-bold text-gradient transition-colors";
        finalDesc.innerText = "Toutes les étapes sont validées ! Veuillez certifier votre statut professionnel pour débloquer la mise en ligne.";
        finalDesc.className = "text-sm text-accent mt-2 max-w-sm mx-auto leading-relaxed mb-10 font-medium";
    } else {
// --- ÉTAT : CONFIGURATION INCOMPLETE ---
        finalSection.classList.add('opacity-50', 'pointer-events-none', 'border-slate-200');
        finalSection.classList.remove('border-[#22c55e]', 'border-violet-400', 'shadow-2xl');
        if (iconCross) iconCross.classList.remove('hidden');
        if (iconCheck) iconCheck.classList.add('hidden');
        finalBtn.classList.add('grayscale', 'cursor-not-allowed');
        finalBtn.classList.remove('hover:scale-[1.02]');
        finalTitle.innerText = "Configuration incomplète";
        finalTitle.className = "text-lg font-bold text-slate-400 transition-colors";
        finalDesc.innerText = "Valide toutes les étapes pour débloquer la mise en ligne.";
        finalDesc.className = "text-sm text-slate-400 mt-2 max-w-sm mx-auto leading-relaxed mb-10";
    }
}
// --- GESTION PREVIEW (DESKTOP & MOBILE FULLSCREEN) ---
let isMobileView = false;
function toggleMobile() {
    const wrapper = document.getElementById('preview-wrapper');
    const toggleText = document.getElementById('toggle-text');
    const webFrame = document.getElementById('preview-frame');
    const liFrame = document.getElementById('linkedin-frame');
    isMobileView = !isMobileView;
    if (isMobileView) {
        wrapper.style.display = "flex";
        wrapper.style.alignItems = "center";
        wrapper.style.justifyContent = "center";
        wrapper.style.setProperty('padding-top', '0', 'important'); 
        wrapper.style.marginTop = "70px"; 
        wrapper.style.width = "375px";
        wrapper.style.height = "min(750px, calc(90vh - 80px))"; 
        wrapper.classList.add('shadow-2xl', 'border-[12px]', 'border-slate-800', 'rounded-[3rem]', 'overflow-hidden', 'bg-black', 'transition-all');
        [webFrame, liFrame].forEach(f => {
            if(f) {
                f.style.height = "100%";
                f.classList.add('rounded-[2rem]');
            }
        });
        toggleText.textContent = "Vue Desktop";
    } else {
        wrapper.style.marginTop = "24px"; 
        wrapper.style.width = "100%";
        wrapper.style.height = "100%";
        wrapper.style.setProperty('padding-top', '3.5rem', 'important'); 
        wrapper.classList.remove('border-[12px]', 'border-slate-800', 'rounded-[3rem]', 'overflow-hidden', 'bg-black');
        [webFrame, liFrame].forEach(f => {
            if(f) {
                f.classList.remove('rounded-[2rem]');
            }
        });
        toggleText.textContent = "Vue Mobile";
    }
}
let isFullPreviewOpen = false;
function handleMobilePreview() {
    const previewMain = document.querySelector('main');
    const previewWrapper = document.getElementById('preview-wrapper');
    const iconContainer = document.getElementById('mobile-toggle-icon');
    isFullPreviewOpen = !isFullPreviewOpen;
    if (isFullPreviewOpen) {
        previewMain.style.setProperty('display', 'flex', 'important');
        previewMain.className = "fixed inset-0 z-[9999] bg-white flex flex-col";
        previewWrapper.className = "relative w-full h-full pt-20 transition-all";
        previewWrapper.style.width = "100vw";
        previewWrapper.style.height = "100vh";
        iconContainer.innerHTML = `
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `;
        if (currentActiveSectionId && frame && frame.contentWindow) {
            const target = scrollMapping[currentActiveSectionId];
            frame.contentWindow.postMessage({
                type: 'SCROLL_TO',
                section: target
            }, '*');
        }
    } else {
        previewMain.style.display = "";
        previewMain.className = "hidden lg:flex flex-1 bg-slate-100 items-center justify-center relative overflow-hidden";
        previewWrapper.className = "w-full h-full flex items-center justify-center pt-14 transition-all duration-500";
        previewWrapper.style.width = "";
        previewWrapper.style.height = "";

        iconContainer.innerHTML = `
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
    }
    setTimeout(initScrollObserver, 300);
}
// --- SCROLL SYNCHRONE ---
const scrollContainer = document.querySelector('aside');
const scrollMapping = { 
    'section-accueil': 'hero', 
    'section-services': 'services', 
    'section-avis': 'testimonials', 
    'section-gallery': 'social-proof',  
    'section-about': 'about', 
    'section-practical': 'practical', 
    'section-faq': 'faq', 
    'section-contact': 'contact',
    'section-social': 'social-links', 
    'section-legale': 'footer-credit' 
};
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cleanId = entry.target.id;
            const targetSection = scrollMapping[cleanId];
            
            if (targetSection && currentActiveSectionId !== cleanId) {
                currentActiveSectionId = cleanId;
                
                if (frame && frame.contentWindow) { 
                    frame.contentWindow.postMessage({ 
                        type: 'SCROLL_TO', 
                        section: targetSection 
                    }, '*'); 
                }
            }
        }
    });
}, { 
    root: scrollContainer,
    threshold: 0, 
    rootMargin: "-20% 0px -60% 0px" 
});
function initScrollObserver() {
    document.querySelectorAll('[id^="section-"]').forEach(section => {
        scrollObserver.unobserve(section); 
        scrollObserver.observe(section);
    });
}
initScrollObserver();
// --- FONCTION DÉDIÉE À LA MODALE ALERTES IA ---
function showAlerteIA(title, message) {
    const modal = document.getElementById('alertes-ia-modal');
    const modalTitle = document.getElementById('alertes-ia-title');
    const modalMessage = document.getElementById('alertes-ia-message');
    if (!modal) {
        alert(title + "\n\n" + message.replace('<br>', '\n'));
        return;
    }
    modalTitle.innerText = title;
    modalMessage.innerHTML = message;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}
function closeAlerteIA() {
    const modal = document.getElementById('alertes-ia-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}
// --- FONCTION DÉDIÉE À LA MODALE DE GESTION DE L'AIDE ---
function openHelp() {
    const modal = document.getElementById('help-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    const form = document.getElementById('help-form');
    if (form) {
        form.reset();
        form.classList.remove('hidden');
    }
    const successMsg = document.getElementById('help-success');
    if (successMsg) successMsg.classList.add('hidden');
}
function closeHelp() {
    const modal = document.getElementById('help-modal');
    if (modal) modal.classList.add('hidden');
}
// --- INTERCEPTION SUBMIT POUR NETLIFY ---
function encode(data) {
  return Object.keys(data)
    .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}
document.getElementById("help-form")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const originalBtnText = btn.innerText;
  btn.disabled = true;
  btn.innerText = "Envoi en cours...";
  btn.style.opacity = "0.7";
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => (data[key] = value));
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode(data),
  })
  .then(res => {
    if (res.ok) {
      form.classList.add("hidden");
      document.getElementById("help-success").classList.remove("hidden");
    } else {
      throw new Error("Erreur serveur");
    }
  })
  .catch(err => {
    alert("Oups ! Une erreur est survenue lors de l'envoi. Merci de réessayer.");
    console.error("Erreur Netlify:", err);
  })
  .finally(() => {
    btn.disabled = false;
    btn.innerText = originalBtnText;
    btn.style.opacity = "1";
  });
});
// --- NEUTRALISATION EN MODE MODIF ---
document.addEventListener('DOMContentLoaded', () => {
    const isModifActive = localStorage.getItem('modeModificationActive') === 'true';
    if (isModifActive) {
        const sectionsToHide = ['section-finale', 'section-ia'];
        sectionsToHide.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
        // 1. On cache immédiatement
                el.style.setProperty('display', 'none', 'important');
        // 2. Le garde du corps (MutationObserver)
                const observer = new MutationObserver(() => {
                    if (el.style.display !== 'none') {
                        el.style.setProperty('display', 'none', 'important');
                    }
                });
                observer.observe(el, { attributes: true, attributeFilter: ['style', 'class'] });
            }
        });
        const sectionVitrine = document.getElementById('section-vitrine');
        if (sectionVitrine) {
            sectionVitrine.classList.add('opacity-50', 'pointer-events-none');
            sectionVitrine.querySelector('.btn-save-step')?.classList.add('hidden');
        }
        lockImportedInputs();
        document.getElementById('update-action-container')?.classList.remove('hidden');
    }
// Gestion de la zone drag&drop 
    if (localStorage.getItem('showRechargement') === 'true') {
        document.getElementById('section-rechargement')?.classList.remove('hidden');
    }
});
// --- GESTION DU TRACKING MAIL ---
window.addEventListener("visibilitychange", () => {
    if (document.visibilityState === 'hidden') {
        sendProgressToNetlify(false);
    }
});
// Exécution au chargement
window.addEventListener('DOMContentLoaded', () => {
    verifyAccess();
});