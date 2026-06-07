document.addEventListener('DOMContentLoaded', () => {
// 1. PARAMÈTRES URL & ANCHORS
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
// 2. ÉLÉMENTS COMMUNS (MODALE & FOOTER)
    const successModal = document.getElementById('success-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalContent = document.getElementById('modal-content');
    const btnCloseModal = document.getElementById('btn-close-modal');
    const currentYearElement = document.getElementById('current-year');
// Année dynamique du footer
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
// Fonctions de la modale avec transitions CSS
    function openModal() {
        if (!successModal) return;
        successModal.classList.remove('hidden');
        setTimeout(() => {
            if (modalBackdrop) modalBackdrop.classList.remove('opacity-0');
            if (modalContent) modalContent.classList.remove('opacity-0', 'scale-95');
        }, 10);
    }
    function closeModal() {
        if (!successModal) return;
        if (modalBackdrop) modalBackdrop.classList.add('opacity-0');
        if (modalContent) modalContent.classList.add('opacity-0', 'scale-95');
        setTimeout(() => {
            successModal.classList.add('hidden');
        }, 300);
    }
    if (btnCloseModal) btnCloseModal.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
// 3. LOGIQUE DU FORMULAIRE "DIAGNOSTIC"
    const diagForm = document.getElementById('diagnostic-form');
// Éléments spécifiques Diagnostic
    const badgeTitle = document.getElementById('badge-title');
    const mainTitle = document.getElementById('main-title');
    const introTexts = document.getElementById('intro-texts');
    const btnShowAll = document.getElementById('btn-show-all-channels');
    const submitBtnText = document.getElementById('submit-btn-text');
    const hiddenSource = document.getElementById('form-source-type');
    const rgpdText = document.getElementById('rgpd-text');
    const wfTitle = document.getElementById('workflow-title');
    const wfStep1 = document.getElementById('wf-step1');
    const wfStep2 = document.getElementById('wf-step2');
    const wfStep3 = document.getElementById('wf-step3'); 
    
    const chkLinkedin = document.getElementById('chk-linkedin');
    const chkWeb = document.getElementById('chk-web');
    const chkInstagram = document.getElementById('chk-instagram');
    const chkAutre = document.getElementById('chk-autre');
    
    const wrapLinkedin = document.getElementById('channel-linkedin');
    const wrapWeb = document.getElementById('channel-web');
    const wrapInstagram = document.getElementById('channel-instagram');
    const wrapAutre = document.getElementById('channel-autre');
    
    const sectionLinks = document.getElementById('section-links');
    const linkFields = {
        linkedin: document.getElementById('field-link-linkedin'),
        web: document.getElementById('field-link-web'),
        instagram: document.getElementById('field-link-instagram'),
        autre: document.getElementById('field-link-autre')
    };
// Fonction de visibilité dynamique des URLs
    function updateLinksVisibility() {
        if (!sectionLinks) return; 
        let anyChecked = false;
// LinkedIn
        if (chkLinkedin && chkLinkedin.checked && wrapLinkedin && !wrapLinkedin.classList.contains('hidden')) {
            if (linkFields.linkedin) {
                linkFields.linkedin.classList.remove('hidden');
                linkFields.linkedin.querySelector('input').setAttribute('required', 'true');
            }
            anyChecked = true;
        } else if (linkFields.linkedin) {
            linkFields.linkedin.classList.add('hidden');
            if (linkFields.linkedin.querySelector('input')) linkFields.linkedin.querySelector('input').removeAttribute('required');
        }
// Web
        if (chkWeb && chkWeb.checked && wrapWeb && !wrapWeb.classList.contains('hidden')) {
            if (linkFields.web) {
                linkFields.web.classList.remove('hidden');
                linkFields.web.querySelector('input').setAttribute('required', 'true');
            }
            anyChecked = true;
        } else if (linkFields.web) {
            linkFields.web.classList.add('hidden');
            if (linkFields.web.querySelector('input')) linkFields.web.querySelector('input').removeAttribute('required');
        }
// Instagram
        if (chkInstagram && chkInstagram.checked && wrapInstagram && !wrapInstagram.classList.contains('hidden')) {
            if (linkFields.instagram) {
                linkFields.instagram.classList.remove('hidden');
                linkFields.instagram.querySelector('input').setAttribute('required', 'true');
            }
            const instaAlert = document.getElementById('insta-alert');
            if (instaAlert) instaAlert.classList.remove('hidden');
            anyChecked = true;
        } else if (linkFields.instagram) {
            linkFields.instagram.classList.add('hidden');
            if (linkFields.instagram.querySelector('input')) linkFields.instagram.querySelector('input').removeAttribute('required');
            const instaAlert = document.getElementById('insta-alert');
            if (instaAlert) instaAlert.classList.add('hidden');
        }
// Autre
        if (chkAutre && chkAutre.checked && wrapAutre && !wrapAutre.classList.contains('hidden')) {
            if (linkFields.autre) linkFields.autre.classList.remove('hidden');
            const inputAutre = document.getElementById('input-autre-precision');
            if (inputAutre) {
                inputAutre.classList.remove('hidden');
                inputAutre.setAttribute('required', 'true');
            }
            anyChecked = true;
        } else if (linkFields.autre) {
            linkFields.autre.classList.add('hidden');
            const inputAutre = document.getElementById('input-autre-precision');
            if (inputAutre) {
                inputAutre.classList.add('hidden');
                inputAutre.removeAttribute('required');
            }
        }
        if (anyChecked) {
            sectionLinks.classList.remove('hidden');
        } else {
            sectionLinks.classList.add('hidden');
        }
    }
// Exécution de la partie "Diagnostic" uniquement si ce formulaire existe
    if (diagForm) {
// Écouteurs sur les changements de cases à cocher
        [chkLinkedin, chkWeb, chkInstagram, chkAutre].forEach(cb => {
            if (cb) cb.addEventListener('change', updateLinksVisibility);
        });
// Clic sur le bouton de réaffichage de tous les canaux cachés
        if (btnShowAll) {
            btnShowAll.addEventListener('click', () => {
                if (wrapLinkedin) wrapLinkedin.classList.remove('hidden');
                if (wrapWeb) wrapWeb.classList.remove('hidden');
                if (wrapInstagram) wrapInstagram.classList.remove('hidden');
                if (wrapAutre) wrapAutre.classList.remove('hidden');
                btnShowAll.classList.add('hidden');
                btnShowAll.classList.remove('inline-flex');
                updateLinksVisibility();
            });
        }
// Soumission asynchrone (Netlify) + Modale
        diagForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const checkedChannels = diagForm.querySelectorAll('input[name="canaux[]"]:checked');
            if (checkedChannels.length === 0) {
                alert("S'il te plaît, sélectionne au moins un canal à faire analyser.");
                return;
            }
            const formData = new FormData(diagForm);
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            })
            .then((response) => {
                if (response.ok) {
                    openModal();
                    diagForm.reset();
                    updateLinksVisibility();
                } else {
                    alert("Une erreur est survenue lors de l'envoi. Merci de réessayer.");
                }
            })
            .catch((error) => alert("Erreur de connexion : " + error));
        });
// ADAPTATION DU CONTEXTE VIA URL 
        if (hiddenSource) {
            if (type === 'linkedin' || type === 'web') {
                hiddenSource.value = type;
                if (badgeTitle) badgeTitle.innerText = "Diagnostic Offert";
                
                // AJOUT DU DEGRADE SUR DIAGNOSTIC
                if (mainTitle) mainTitle.innerHTML = 'Demande ton <span class="bg-gradient-to-r from-[#8449d9] to-cyan-400 bg-clip-text text-transparent italic">diagnostic</span> personnalisé';
                
                if (introTexts) introTexts.classList.add('hidden');
                if (submitBtnText) submitBtnText.innerText = "Recevoir mon diagnostic";
                if (wfTitle) wfTitle.innerText = "Comment se déroule le diagnostic ?";
                if (wfStep1) wfStep1.innerText = "J'étudie les canaux sélectionnés et identifie les principaux points d'amélioration.";
                if (wfStep2) wfStep2.innerText = "Nous échangeons lors d'une visio afin de faire le point sur les constats observés.";
                if (wfStep3) wfStep3.innerText = "Je te présente les opportunités d'amélioration les plus pertinentes pour atteindre tes objectifs.";
                
                const optCredibilite = document.getElementById('opt-credibilite');
                if (optCredibilite) optCredibilite.classList.add('hidden');
                if (btnShowAll) {
                    btnShowAll.classList.remove('hidden');
                    btnShowAll.classList.add('inline-flex');
                }
                if (chkLinkedin) chkLinkedin.checked = false;
                if (chkWeb) chkWeb.checked = false;

                if (type === 'linkedin') {
                    if (chkLinkedin) chkLinkedin.checked = true; 
                    if (wrapWeb) wrapWeb.classList.add('hidden');
                    if (wrapInstagram) wrapInstagram.classList.add('hidden');
                    if (wrapAutre) wrapAutre.classList.add('hidden');
                } else if (type === 'web') {
                    if (chkWeb) chkWeb.checked = true; 
                    if (wrapLinkedin) wrapLinkedin.classList.add('hidden');
                    if (wrapInstagram) wrapInstagram.classList.add('hidden');
                    if (wrapAutre) wrapAutre.classList.add('hidden');
                }
            } else if (type === 'plan-action') {
                hiddenSource.value = 'plan-action';
                if (badgeTitle) badgeTitle.innerText = "Pré-diagnostic Offert";
                
                if (mainTitle) mainTitle.innerHTML = 'Demande ton <span class="bg-gradient-to-r from-[#8449d9] to-cyan-400 bg-clip-text text-transparent italic">pré-diagnostic</span>';
                
                if (introTexts) introTexts.classList.remove('hidden');
                if (submitBtnText) submitBtnText.innerText = "Demander mon pré-diagnostic";
                if (wfTitle) wfTitle.innerText = "Comment se déroule le pré-diagnostic ?";
                if (wfStep1) wfStep1.innerText = "J'étudie les canaux et supports sélectionnés.";
                if (wfStep2) wfStep2.innerText = "Nous échangeons lors d'une visio afin de faire le point sur les constats observés.";
                if (wfStep3) wfStep3.innerText = "Je t'indique les opportunités d'amélioration les plus pertinentes pour atteindre tes objectifs.";
                if (rgpdText) rgpdText.innerHTML = "J'accepte que les données saisies dans ce formulaire soient exclusivement exploitées pour analyser ma situation digitale et encadrer la restitution de mon <strong>pré-diagnostic offert</strong> (aucun usage publicitaire ou marketing ultérieur). <span class=\"text-cyan-400\">*</span>";
                
                if (chkLinkedin) chkLinkedin.checked = false;
                if (chkWeb) chkWeb.checked = false;
                if (chkInstagram) chkInstagram.checked = false;
                if (chkAutre) chkAutre.checked = false;
            } else {
                hiddenSource.value = 'global';
                if (badgeTitle) badgeTitle.innerText = "Diagnostic Offert";
                
                if (mainTitle) mainTitle.innerHTML = 'Demande ton <span class="bg-gradient-to-r from-[#8449d9] to-cyan-400 bg-clip-text text-transparent italic">diagnostic</span> personnalisé';
                
                if (introTexts) introTexts.classList.remove('hidden');
                if (submitBtnText) submitBtnText.innerText = "Demander mon diagnostic";  
                if (wfTitle) wfTitle.innerText = "Comment se déroule le diagnostic ?";  
                
                if (chkLinkedin) chkLinkedin.checked = false;
                if (chkWeb) chkWeb.checked = false;
                if (chkInstagram) chkInstagram.checked = false;
                if (chkAutre) chkAutre.checked = false;
            }
        }
// Premier calcul des visibilités au rafraîchissement
        updateLinksVisibility();
// Gestion du champ de précision de l'objectif "Autre"
        const radObjAutre = document.getElementById('rad-obj-autre');
        const inputObjPrecision = document.getElementById('input-obj-precision');
        document.querySelectorAll('input[name="objectif"]').forEach(radio => {
            radio.addEventListener('change', () => {
                if (radObjAutre && radObjAutre.checked) {
                    if (inputObjPrecision) {
                        inputObjPrecision.classList.remove('hidden');
                        inputObjPrecision.setAttribute('required', 'true');
                    }
                } else if (inputObjPrecision) {
                    inputObjPrecision.classList.add('hidden');
                    inputObjPrecision.removeAttribute('required');
                }
            });
        });
    }
// 4. LOGIQUE DU FORMULAIRE "INSTAGRAM"
    const instaForm = document.querySelector('form[name="candidature-instagram"]');
    const radInstaAutre = document.getElementById('rad-insta-autre');
    const inputInstaPrecision = document.getElementById('input-insta-precision');
    if (instaForm) {
        instaForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(instaForm);
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            })
            .then((response) => {
                if (response.ok) {
                    openModal();
                    instaForm.reset();
                    if (inputInstaPrecision) {
                        inputInstaPrecision.classList.add('hidden');
                        inputInstaPrecision.removeAttribute('required');
                    }
                } else {
                    alert("Une erreur est survenue lors de l'envoi de ta candidature. Merci de réessayer.");
                }
            })
            .catch((error) => alert("Erreur de connexion : " + error));
        });
// Gestion du champ dynamique "Autre"
        document.querySelectorAll('input[name="objectif-insta"]').forEach(radio => {
            radio.addEventListener('change', () => {
                if (radInstaAutre && radInstaAutre.checked) {
                    if (inputInstaPrecision) {
                        inputInstaPrecision.classList.remove('hidden');
                        inputInstaPrecision.setAttribute('required', 'true');
                    }
                } else if (inputInstaPrecision) {
                    inputInstaPrecision.classList.add('hidden');
                    inputInstaPrecision.removeAttribute('required');
                }
            });
        });
    }
});