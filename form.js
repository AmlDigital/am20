document.addEventListener('DOMContentLoaded', () => {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) currentYearElement.textContent = new Date().getFullYear();
    const PROGRESS_LEVELS = {
        construction: {
            label: "En construction",
            key: "construction",
            description: "Tu poses les premières bases de ton activité. L'objectif est avant tout de clarifier tes fondations."
        },
        developpement: {
            label: "En développement",
            key: "developpement",
            description: "Tu as déjà commencé à construire ta présence en ligne. Plusieurs éléments sont en place mais ils manquent encore de cohérence."
        },
        progression: {
            label: "En progression",
            key: "progression",
            description: "Tes fondations sont solides. Quelques optimisations ciblées peuvent désormais produire davantage de résultats."
        }
    };
// NIVEAU DE PROGRESSION 
    const LEVEL_LOCK_CONSTRUCTION_Q1 = 'Je me lance.';
    const LEVEL_LOCK_CONSTRUCTION_Q2 = 'Je ne sais pas par quoi commencer.';
    const Q1_LEVEL_BASE = {
        'Je me lance.': 0, 
        'J’ai déjà quelques clients.': 1,
        'Le bouche-à-oreille m’apporte la plupart de mes clients.': 2,
        'Je communique régulièrement.': 2,
        'Je suis visible, mais ça ne se transforme pas assez en clients.': 2
    };
    const Q2_LEVEL_ADJUST = {
        'Je ne sais pas expliquer clairement ce que je fais.': -3,
        'J’ai du mal à me faire connaître.': -1,
        'Des personnes regardent mon profil mais me contactent rarement.': 0,
        'J’ai des contacts mais peu deviennent clients.': 0,
        'Je ne sais pas par quoi commencer.': 0 
    };
    const Q3_LEVEL_ADJUST = {
        'Il comprend tout de suite ce que je fais.': 2,
        'Il comprend l’idée, mais ce n’est pas toujours très clair.': 0,
        'On me demande souvent : "Tu fais quoi exactement ?"': 0
    };
    const Q5_LEVEL_ADJUST = {
        'Il sait facilement comment prendre rendez-vous.': 2,
        'Il m’envoie un message directement.': 0,
        'Il hésite souvent avant de me contacter.': 0,
        'Je n’ai pas vraiment de parcours défini.': 0,
        'Ça dépend des situations.': 0
    };
    const Q6_LEVEL_ADJUST = {
        'Les échanges débouchent très souvent sur une collaboration.': 3,
        'Les échanges se passent bien, mais beaucoup préfèrent réfléchir avant de décider.': 0,
        'J’ai souvent du mal à convaincre malgré l’intérêt du prospect.': 0,
        'Je n’ai pas encore suffisamment de rendez-vous pour le savoir.': -3,
        'Ça dépend des situations.': 0
    };
    function getProgressLevel(answers) {
        if (answers.q1 === LEVEL_LOCK_CONSTRUCTION_Q1 || answers.q2 === LEVEL_LOCK_CONSTRUCTION_Q2) {
            return PROGRESS_LEVELS.construction;
        }
        const total =
            (Q1_LEVEL_BASE[answers.q1] ?? 0) +
            (Q2_LEVEL_ADJUST[answers.q2] ?? 0) +
            (Q3_LEVEL_ADJUST[answers.q3] ?? 0) +
            (Q5_LEVEL_ADJUST[answers.q5] ?? 0) +
            (Q6_LEVEL_ADJUST[answers.q6] ?? 0);
        let key;
        if (total <= 1) key = 'construction';
        else if (total <= 5) key = 'developpement';
        else key = 'progression';
        return PROGRESS_LEVELS[key];
    }
// SCORE DE FRICTION PAR PILIER 
    const Q1_PILLAR_ADJUST = {
        'Je me lance.': {},
        'J’ai déjà quelques clients.': {},
        'Le bouche-à-oreille m’apporte la plupart de mes clients.': {},
        'Je communique régulièrement.': {},
        'Je suis visible, mais ça ne se transforme pas assez en clients.': { conversion: 2 }
    };
    const Q2_PILLAR_ADJUST = {
        'Je ne sais pas expliquer clairement ce que je fais.': { message: 3 },
        'J’ai du mal à me faire connaître.': { message: 1, parcours: 1 },
        'Des personnes regardent mon profil mais me contactent rarement.': { message: 1, parcours: 2 },
        'J’ai des contacts mais peu deviennent clients.': { conversion: 3 },
        'Je ne sais pas par quoi commencer.': { message: 1, parcours: 1, conversion: 1 }
    };
    const Q3_PILLAR_ADJUST = {
        'Il comprend tout de suite ce que je fais.': { message: -2 },
        'Il comprend l’idée, mais ce n’est pas toujours très clair.': { message: 2 },
        'On me demande souvent : "Tu fais quoi exactement ?"': { message: 4 }
    };
    const Q5_PILLAR_ADJUST = {
        'Il sait facilement comment prendre rendez-vous.': { parcours: -3 },
        'Il m’envoie un message directement.': { message: -2, parcours: 1 },
        'Il hésite souvent avant de me contacter.': { message: 1, parcours: 2 },
        'Je n’ai pas vraiment de parcours défini.': { parcours: 3 },
        'Ça dépend des situations.': { parcours: 2 }
    };
    const Q6_PILLAR_ADJUST = {
        'Les échanges débouchent très souvent sur une collaboration.': { conversion: -4 },
        'Les échanges se passent bien, mais beaucoup préfèrent réfléchir avant de décider.': { conversion: 2 },
        'J’ai souvent du mal à convaincre malgré l’intérêt du prospect.': { message: 2, conversion: 3 },
        'Je n’ai pas encore suffisamment de rendez-vous pour le savoir.': {},
        'Ça dépend des situations.': { message: 1, conversion: 2 }
    };
    const PILLAR_MAX = { message: 10, parcours: 5, conversion: 8 };
    function calculatePillarScores(answers) {
        const q1adj = Q1_PILLAR_ADJUST[answers.q1] || {};
        const q2adj = Q2_PILLAR_ADJUST[answers.q2] || {};
        const q3adj = Q3_PILLAR_ADJUST[answers.q3] || {};
        const q5adj = Q5_PILLAR_ADJUST[answers.q5] || {};
        const q6adj = Q6_PILLAR_ADJUST[answers.q6] || {};
        const frictionRaw = {
            message: (q2adj.message || 0) + (q3adj.message || 0) + (q5adj.message || 0) + (q6adj.message || 0),
            parcours: (q2adj.parcours || 0) + (q5adj.parcours || 0),
            conversion: (q1adj.conversion || 0) + (q2adj.conversion || 0) + (q6adj.conversion || 0)
        };
        frictionRaw.message = Math.max(0, frictionRaw.message);
        frictionRaw.parcours = Math.max(0, frictionRaw.parcours);
        frictionRaw.conversion = Math.max(0, frictionRaw.conversion);
        const frictionNorm = {
            message: Math.min(1, frictionRaw.message / PILLAR_MAX.message),
            parcours: Math.min(1, frictionRaw.parcours / PILLAR_MAX.parcours),
            conversion: Math.min(1, frictionRaw.conversion / PILLAR_MAX.conversion)
        };
        let total = frictionNorm.message + frictionNorm.parcours + frictionNorm.conversion;
        if (total === 0) {
            frictionNorm.message = frictionNorm.parcours = frictionNorm.conversion = 1;
            total = 3;
        }
        const order = ['message', 'parcours', 'conversion'];
        const rawPct = order.map(k => (frictionNorm[k] / total) * 100);
        const floors = rawPct.map(Math.floor);
        let remainder = 100 - floors.reduce((s, v) => s + v, 0);
        const remainders = order
            .map((k, i) => ({ k, r: rawPct[i] - floors[i] }))
            .sort((a, b) => b.r - a.r);
        const percents = { message: floors[0], parcours: floors[1], conversion: floors[2] };
        for (let i = 0; i < remainder; i++) percents[remainders[i].k] += 1;

        return percents;
    }
    const WEAKNESSES = {
        message: {
            title: "Message",
            text: "Tu sembles avoir une activité intéressante, mais ton offre n'est probablement pas encore suffisamment claire pour une personne qui découvre ton activité. Lorsque ton message manque de clarté, il devient difficile pour un prospect de comprendre rapidement ce que tu proposes et pourquoi il devrait te choisir.",
            priorities: [
                "Clarifier ton positionnement",
                "Reformuler ta promesse",
                "Simplifier la présentation de ton activité"
            ]
        },
        parcours: {
            title: "Parcours client",
            text: "Tu arrives probablement à attirer l'attention, mais ton parcours ne guide pas encore suffisamment tes visiteurs vers la prise de contact. Chaque étape doit rassurer et faciliter la décision.",
            priorities: [
                "Simplifier le parcours",
                "Ajouter des éléments de réassurance",
                "Faciliter la prise de rendez-vous"
            ]
        },
        conversion: {
            title: "Conversion",
            text: "Tu sembles déjà attirer des prospects, mais ils ne deviennent pas encore clients. Le problème ne vient pas forcément de ta visibilité, mais plutôt de la façon dont tu transformes tes échanges en relation commerciale.",
            priorities: [
                "Structurer ton rendez-vous découverte",
                "Identifier les vrais besoins avant de proposer ton offre",
                "Mieux conclure et annoncer les prochaines étapes"
            ]
        }
    };
    const STRENGTHS = {
        message: [
            "Ton activité semble facile à comprendre.",
            "Ton positionnement paraît clair.",
            "Ta proposition de valeur ressort naturellement."
        ],
        parcours: [
            "Ton parcours semble simple à suivre.",
            "La prise de contact paraît fluide.",
            "Les prochaines étapes sont faciles à comprendre."
        ],
        conversion: [
            "Tu sembles instaurer facilement une relation de confiance.",
            "Ton processus commercial paraît rassurant.",
            "Tes prospects semblent bien accompagnés jusqu'à la prise de décision."
        ]
    };
    const TESTIMONIALS = {
        construction: {
            authorName: "Anne-Gaëlle B.",
            authorRole: "Assistante administrative",
            beforeQuote: "« J'avais énormément d'idées mais je ne savais pas par où commencer. »",
            duringProgram: [
                "Clarification du positionnement",
                "Construction du message",
                "Mise en place du parcours client"
            ],
            afterResult: "1er client signé pendant l'accompagnement",
            finalQuote: "« L'accompagnement m'a permis de poser des bases solides. »"
        },
        developpement: {
            authorName: "Jacques M.",
            authorRole: "Gérant centre culturel",
            beforeQuote: "« Nous avions déjà une présence en ligne, mais elle manquait de cohérence. »",
            duringProgram: [
                "Refonte du message",
                "Simplification du parcours client",
                "Optimisation des points de contact"
            ],
            afterResult: "+ 30 adhérents les 3 premiers mois",
            finalQuote: "« Aujourd'hui, notre communication est beaucoup plus claire et les prises de contact sont plus nombreuses. »"
        },
        progression: {
            authorName: "Mickaël B.",
            authorRole: "Gérant atelier automobile",
            beforeQuote: "« J'avais déjà des résultats, mais plusieurs points freinaient encore mon développement. »",
            duringProgram: [
                "Clarification de la proposition de valeur",
                "Optimisation du parcours client",
                "Simplification des points de conversion"
            ],
            afterResult: "+ 25% de prise de RDV dès le premier mois",
            finalQuote: "« Quelques ajustements ont complètement changé la dynamique. »"
        }
    };
    const ctaData = {
        message: {
            title: "Ton activité mérite d'être comprise en quelques secondes.",
            p1: "Si tes prospects ne comprennent pas immédiatement ce que tu fais, ils repartiront avant même de découvrir la valeur de ton offre.",
            p2: "Ensemble, identifions les ajustements qui te permettront de transformer davantage de visiteurs en prises de contact.",
            ctaText: "Je veux clarifier mon message"
        },
        parcours: {
            title: "Chaque étape de ton parcours peut te faire gagner… ou perdre un client.",
            p1: "Un parcours confus, incomplet ou peu rassurant suffit parfois à faire abandonner un prospect pourtant intéressé.",
            p2: "Voyons ensemble comment fluidifier ton parcours pour convertir davantage de visiteurs en rendez-vous.",
            ctaText: "Je veux optimiser mon parcours client"
        },
        conversion: {
            title: "Attirer des prospects, c'est bien. Les transformer en clients, c'est mieux.",
            p1: "Si tes échanges débouchent rarement sur une collaboration, quelques ajustements peuvent faire toute la différence.",
            p2: "Ensemble, identifions les leviers qui t'aideront à signer plus de clients.",
            ctaText: "Je veux convertir plus de prospects"
        }
    };
    const steps = [
        {
            id: 'intro',
            badge: 'Diagnostic Offert',
            title: "Découvre ce qui freine vraiment tes résultats",
            type: 'intro',
            textIntro: "En seulement 2 minutes, découvre lequel de ces trois leviers mérite aujourd'hui ton attention : ton message, ton parcours client ou ta conversion.",
            outcomes: [
                "Tes points forts",
                "Les points à améliorer",
                "3 actions concrètes pour avancer",
                "Des recommandations rien que pour toi"
            ]
        },
        {
            id: 'q1',
            badge: 'Ta situation',
            title: '1. Où en es-tu aujourd’hui ?',
            subtitle: 'Choisis la phrase qui ressemble le plus à ta situation actuelle.',
            type: 'single',
            options: [
                'Je me lance.',
                'J’ai déjà quelques clients.',
                'Le bouche-à-oreille m’apporte la plupart de mes clients.',
                'Je communique régulièrement.',
                'Je suis visible, mais ça ne se transforme pas assez en clients.'
            ]
        },
        {
            id: 'q2',
            badge: 'Ton défi',
            title: '2. Quel est ton plus gros défi aujourd’hui ?',
            subtitle: 'Choisis la situation qui te parle le plus.',
            type: 'single',
            options: [
                'Je ne sais pas expliquer clairement ce que je fais.',
                'J’ai du mal à me faire connaître.',
                'Des personnes regardent mon profil mais me contactent rarement.',
                'J’ai des contacts mais peu deviennent clients.',
                'Je ne sais pas par quoi commencer.'
            ]
        },
        {
            id: 'q3',
            badge: 'Ton Message',
            title: '3. Quand quelqu’un découvre ton activité...',
            subtitle: 'Quelle est sa réaction la plupart du temps ?',
            type: 'single',
            options: [
                'Il comprend tout de suite ce que je fais.',
                'Il comprend l’idée, mais ce n’est pas toujours très clair.',
                'On me demande souvent : "Tu fais quoi exactement ?"'
            ]
        },
        {
            id: 'q4',
            badge: 'Ta Présence',
            title: '4. Où les gens te trouvent-ils aujourd’hui ?',
            subtitle: 'Sélectionne jusqu\'à 3 réponses.',
            type: 'multiple',
            maxChoices: 3,
            options: [
                'Bouche-à-oreille',
                'LinkedIn',
                'Google',
                'Instagram',
                'Mon site web',
                'Je ne sais pas vraiment'
            ]
        },
        {
            id: 'q5',
            badge: 'Ta porte d’entrée',
            title: '5. Quand quelqu’un veut faire appel à toi...',
            subtitle: 'Comment ça se passe aujourd’hui ?',
            type: 'single',
            options: [
                'Il sait facilement comment prendre rendez-vous.',
                'Il m’envoie un message directement.',
                'Il hésite souvent avant de me contacter.',
                'Je n’ai pas vraiment de parcours défini.',
                'Ça dépend des situations.'
            ]
        },
        {
            id: 'q6',
            badge: 'Tes rendez-vous',
            title: '6. Lorsque tu échanges avec un prospect intéressé...',
            subtitle: 'Quelle situation ressemble le plus à ce qui se passe aujourd’hui ?',
            type: 'single',
            options: [
                'Les échanges débouchent très souvent sur une collaboration.',
                'Les échanges se passent bien, mais beaucoup préfèrent réfléchir avant de décider.',
                'J’ai souvent du mal à convaincre malgré l’intérêt du prospect.',
                'Je n’ai pas encore suffisamment de rendez-vous pour le savoir.',
                'Ça dépend des situations.'
            ]
        },
        {
            id: 'final',
            badge: 'Ton diagnostic',
            title: 'Prêt(e) à découvrir ton profil ?',
            subtitle: 'Renseigne tes informations pour obtenir ton résultat personnalisé. Ton diagnostic s’affichera juste après.',
            type: 'form',
            fields: [
                {
                    id: 'statut',
                    label: 'Tu exerces en tant que...',
                    type: 'radio',
                    options: [
                        'Indépendant(e) / Freelance',
                        'Artisan(e) / Commerçant(e)',
                        'Dirigeant(e) d’entreprise'
                    ]
                },
                { id: 'prenom', label: 'Ton prénom', type: 'text', placeholder: 'Ex: Jean' },
                { id: 'email', label: 'Ton adresse e-mail', type: 'email', placeholder: 'Ex: jean@exemple.fr' }
            ]
        }
    ];
    let currentStepIndex = 0;
    const userAnswers = {};
    const userProfile = { prenom: '', email: '', statut: '', optin: false };
    const cardBadge = document.getElementById('card-badge');
    const cardTitle = document.getElementById('card-title');
    const cardSubtitle = document.getElementById('card-subtitle');
    const cardContent = document.getElementById('card-content');
    const cardFooter = document.getElementById('card-footer');
    const btnBack = document.getElementById('btn-back');
    const btnNext = document.getElementById('btn-next');
    const progressCircle = document.getElementById('progress-circle');
    const progressPercentage = document.getElementById('progress-percentage');
    const stepIndicatorDesktop = document.getElementById('step-indicator-desktop');
    const mobileScrollHint = document.getElementById('mobile-scroll-hint');
    const mobileProgressBar = document.getElementById('mobile-progress-bar');
    const mobileProgressPercentage = document.getElementById('mobile-progress-percentage');
    const mobileStepLabel = document.getElementById('mobile-step-label');
    function getMainWeakness(pillars) {
        let worstPillar = 'message';
        let worstScore = pillars.message;
        Object.keys(pillars).forEach(pillar => {
            if (pillars[pillar] > worstScore) {
                worstScore = pillars[pillar];
                worstPillar = pillar;
            }
        });
        return {
            pillar: worstPillar,
            details: WEAKNESSES[worstPillar]
        };
    }
    function getStrengths(pillars) {
        const STRENGTH_THRESHOLD = 30; 
        const sortedPillars = Object.keys(pillars).sort((a, b) => pillars[a] - pillars[b]);
        const results = [];
        for (const pillar of sortedPillars) {
            if (pillars[pillar] > STRENGTH_THRESHOLD) continue;
            const pool = STRENGTHS[pillar];
            if (pool) {
                for (const text of pool) {
                    if (results.length < 3 && !results.includes(text)) {
                        results.push(text);
                    }
                }
            }
            if (results.length >= 3) break;
        }
        if (results.length < 3) {
            for (const pillar of sortedPillars) {
                const pool = STRENGTHS[pillar];
                if (pool) {
                    for (const text of pool) {
                        if (results.length < 3 && !results.includes(text)) {
                            results.push(text);
                        }
                    }
                }
                if (results.length >= 3) break;
            }
        }
        return results;
    }
    function checkScrollHint() {
        if (!mobileScrollHint) return;
        const isScrollable = cardContent.scrollHeight > cardContent.clientHeight + 10;
        mobileScrollHint.classList.toggle('hidden', !isScrollable);
    }
    cardContent.addEventListener('scroll', () => {
        if (!mobileScrollHint) return;
        const isAtBottom = cardContent.scrollHeight - cardContent.scrollTop <= cardContent.clientHeight + 15;
        mobileScrollHint.classList.toggle('hidden', isAtBottom);
    });
    function updateProgress() {
        const totalSteps = steps.length;
        const progressRatio = currentStepIndex / (totalSteps - 1);
        const percentage = Math.round(progressRatio * 100);
        if (progressCircle) {
            progressCircle.style.strokeDashoffset = 263.89 - (263.89 * progressRatio);
        }
        if (progressPercentage) progressPercentage.textContent = `${percentage}%`;
        if (mobileProgressBar) mobileProgressBar.style.width = `${percentage}%`;
        if (mobileProgressPercentage) mobileProgressPercentage.textContent = `${percentage}%`;
    }
    function renderStep() {
        const step = steps[currentStepIndex];
        cardBadge.textContent = step.badge;
        cardTitle.textContent = step.title; 
        cardSubtitle.textContent = step.subtitle;
        cardContent.scrollTop = 0;

        const labelText = step.type === 'intro' 
            ? "Présentation" 
            : `Étape ${currentStepIndex} sur ${steps.length - 1}`;     

        if (stepIndicatorDesktop) stepIndicatorDesktop.textContent = labelText;
        if (mobileStepLabel) mobileStepLabel.textContent = labelText;
        cardContent.innerHTML = '';
        if (currentStepIndex > 0) {
            btnBack.classList.remove('hidden');
            if (step.type === 'form') {
                btnBack.textContent = '← Vérifier mes réponses';
                btnNext.classList.remove('ml-auto');
            } else {
                btnBack.textContent = '← Précédent';
                btnNext.classList.add('ml-auto');
            }
        } else {
            btnBack.classList.add('hidden');
            btnNext.classList.add('ml-auto');
        }
        if (step.type === 'intro') {
        const div = document.createElement('div');
        div.className = 'space-y-4';
        div.innerHTML = `
            <p class="text-slate-800 text-base sm:text-lg leading-relaxed font-medium">${step.textIntro}</p>
            <div class="rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
                <div class="rounded-[15px] bg-white p-5 sm:p-6 backdrop-blur-xl">
                    <div class="flex flex-col gap-4">
                        ${step.outcomes.map(item => `
                            <div class="flex items-center gap-4">
                                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 font-bold text-lg shrink-0">
                                    ✓
                                </div>
                                <p class="text-base font-medium text-slate-800 leading-snug">
                                    ${item}
                                </p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
            cardContent.appendChild(div);
            btnNext.innerHTML = `
                <span class="inline-flex items-center justify-center gap-2 whitespace-nowrap">
                    Identifier ma priorité
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </span>
            `;
            btnNext.disabled = false;
            }
            else if (step.type === 'single') {
                step.options.forEach((optLabel) => {
                    const isSelected = userAnswers[step.id] === optLabel;
                    const btn = document.createElement('button');
                    btn.type = 'button';
                    btn.className = `w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 text-base ${
                        isSelected 
                            ? 'border-[#29c6dc] bg-cyan-50/70 font-semibold text-slate-900 shadow-sm' 
                            : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50/50'
                    }`;
                    btn.innerHTML = `
                        <span class="flex-1 leading-snug">${optLabel}</span>
                        <span class="flex-shrink-0 w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center transition-all text-sm ${isSelected ? 'border-[#29c6dc] bg-[#29c6dc] text-white font-bold' : ''}">
                            ${isSelected ? '✓' : ''}
                        </span>
                    `;
                btn.addEventListener('click', () => {
                    userAnswers[step.id] = optLabel;
                    renderStep();
                });
                cardContent.appendChild(btn);
            });
            btnNext.textContent = 'Continuer';
            btnNext.disabled = !userAnswers[step.id];
        }
        else if (step.type === 'multiple') {
            if (!userAnswers[step.id]) userAnswers[step.id] = [];
            step.options.forEach((optLabel) => {
                const isSelected = userAnswers[step.id].includes(optLabel);
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = `w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 text-base ${
                    isSelected 
                        ? 'border-[#29c6dc] bg-cyan-50/70 font-semibold text-slate-900 shadow-sm' 
                        : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50/50'
                }`;
                btn.innerHTML = `
                    <span class="flex-1 leading-snug">${optLabel}</span>
                    <span class="flex-shrink-0 w-6 h-6 rounded-lg border border-slate-300 flex items-center justify-center transition-all text-sm ${isSelected ? 'border-[#29c6dc] bg-[#29c6dc] text-white font-bold' : ''}">
                        ${isSelected ? '✓' : ''}
                    </span>
                `;
                btn.addEventListener('click', () => {
                    const idx = userAnswers[step.id].indexOf(optLabel);
                    if (idx > -1) {
                        userAnswers[step.id].splice(idx, 1);
                    } else {
                        if (userAnswers[step.id].length < step.maxChoices) {
                            userAnswers[step.id].push(optLabel);
                        } else {
                            alert(`Tu peux sélectionner jusqu'à ${step.maxChoices} choix maximum.`);
                        }
                    }
                    renderStep();
                });
                cardContent.appendChild(btn);
            });
            btnNext.textContent = 'Continuer';
            btnNext.disabled = userAnswers[step.id].length === 0;
        }
        else if (step.type === 'form') {
            step.fields.forEach(field => {
                const div = document.createElement('div');
                div.className = 'flex flex-col gap-1.5 mb-4';
                if (field.type === 'radio') {
                    let optionsHTML = field.options.map(opt => {
                        const isSelected = userProfile[field.id] === opt;
                        return `
                            <label class="flex items-center gap-3 p-3 rounded-xl border ${isSelected ? 'border-[#29c6dc] bg-cyan-50/60 font-semibold' : 'border-slate-200 bg-white'} cursor-pointer hover:border-slate-300 transition-all text-sm text-slate-800">
                                <input type="radio" name="${field.id}" value="${opt}" ${isSelected ? 'checked' : ''} class="w-4 h-4 text-[#29c6dc] focus:ring-[#29c6dc]" />
                                <span>${opt}</span>
                            </label>
                        `;
                    }).join('');
                    div.innerHTML = `
                        <label class="text-sm mb-1">${field.label} *</label>
                        <div class="flex flex-col gap-2">${optionsHTML}</div>
                    `;
                } else {
                    div.innerHTML = `
                        <label for="${field.id}" class="text-sm">${field.label} *</label>
                        <input type="${field.type}" id="${field.id}" value="${userProfile[field.id] || ''}" placeholder="${field.placeholder}" 
                            class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-base focus:outline-none focus:ring-2 focus:ring-[#29c6dc]/50 focus:border-[#29c6dc] transition-all" />
                    `;
                }
            cardContent.appendChild(div);
        });
        const optinDiv = document.createElement('div');
        optinDiv.className = 'flex items-start gap-3 pt-2 text-left';
        optinDiv.innerHTML = `
            <input type="checkbox" id="newsletter-optin" ${userProfile.optin ? 'checked' : ''} class="mt-1 h-5 w-5 rounded border-slate-300 text-[#29c6dc] focus:ring-[#29c6dc] cursor-pointer flex-shrink-0" />
            <label for="newsletter-optin" class="text-sm text-slate-700 leading-relaxed cursor-pointer select-none">
                J'accepte de recevoir des conseils et actualités sur la présence en ligne et les accompagnements d'AM 2.0.
            </label>
        `;
        cardContent.appendChild(optinDiv);
        btnNext.textContent = 'Découvrir mon diagnostic';
        const prenomInput = document.getElementById('prenom');
        const emailInput = document.getElementById('email');
        const radioStatuts = document.querySelectorAll('input[name="statut"]');
        const optinInput = document.getElementById('newsletter-optin');
        const validateFormInputs = () => {
            const fnVal = prenomInput ? prenomInput.value.trim() : '';
            const emailVal = emailInput ? emailInput.value.trim() : '';
            const selectedRadio = document.querySelector('input[name="statut"]:checked');
            const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
            userProfile.prenom = fnVal;
            userProfile.email = emailVal;
            userProfile.statut = selectedRadio ? selectedRadio.value : '';
            if (optinInput) userProfile.optin = optinInput.checked;

            btnNext.disabled = !(fnVal.length > 0 && isEmailValid && userProfile.statut !== '');
        };
        if (prenomInput) prenomInput.addEventListener('input', validateFormInputs);
        if (emailInput) emailInput.addEventListener('input', validateFormInputs);
        radioStatuts.forEach(radio => radio.addEventListener('change', validateFormInputs));
        if (optinInput) optinInput.addEventListener('change', validateFormInputs);
        validateFormInputs();
    }
    setTimeout(checkScrollHint, 50);
    updateProgress();
}
    function showResults() {
        cardContent.scrollTop = 0;
        const mainCard = document.getElementById('card-content')?.parentElement;
        if (mainCard) {
            mainCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        const pillars = calculatePillarScores(userAnswers);
        const progressLevel = getProgressLevel(userAnswers);
        const weakness = getMainWeakness(pillars);
        const currentCta = ctaData[weakness.pillar] || ctaData.message;
        const strengthsList = getStrengths(pillars);
        const testimonial = TESTIMONIALS[progressLevel.key];
        if (progressCircle) progressCircle.style.strokeDashoffset = 0;
        if (progressPercentage) progressPercentage.textContent = '100%';
        if (mobileProgressBar) mobileProgressBar.style.width = '100%';
        if (mobileProgressPercentage) mobileProgressPercentage.textContent = '100%';
        const sideInfoBox = document.getElementById('side-info-box');
        if (sideInfoBox) {
            sideInfoBox.innerHTML = `
                <p class="text-base text-slate-600 font-medium">Bravo, ton bilan est prêt !</p>
                <p class="text-base font-semibold text-purple-700">Découvre tes résultats et tes axes prioritaires.</p>
            `;
        }
        cardFooter.classList.add('hidden');
        if (mobileScrollHint) mobileScrollHint.classList.add('hidden');
        cardBadge.textContent = 'Ton résultat';
        cardTitle.textContent = `Ce que révèle ton diagnostic`.toUpperCase();
        cardSubtitle.textContent = `Bilan personnalisé de ${(userProfile.prenom || '').toUpperCase()}`;
        let html = `
            <div class="w-full rounded-2xl bg-gradient-to-r from-purple-700 to-[#29c6dc] p-[1px] shadow-xl">
                    <div class="rounded-[15px] bg-white px-6 py-8 sm:px-8 sm:py-10 backdrop-blur-xl text-center space-y-3">
                        <h3 class="font-impact-title text-3xl md:text-5xl leading-tight">
                            <span class="bg-gradient-to-r from-purple-700 to-[#29c6dc] bg-clip-text text-transparent">
                                ${progressLevel.label}
                            </span>
                        </h3>
                        <p class="text-base text-slate-700 leading-relaxed max-w-md mx-auto pt-1">
                            ${progressLevel.description}
                        </p>
                    </div>
                </div>
     
                <div class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
                    <h4 class="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Tes 3 leviers de progression</h4>
                    ${renderBar('Message', pillars.message)}
                    ${renderBar('Parcours client', pillars.parcours)}
                    ${renderBar('Conversion', pillars.conversion)}
                </div>
                <div class="bg-amber-50/60 border border-amber-200 p-5 sm:p-6 rounded-2xl space-y-3">
                    <h4 class="text-xs sm:text-sm font-bold text-amber-900 uppercase tracking-wider">
                        Ton principal axe d'amélioration : ${weakness.details.title}
                    </h4>
                    <p class="text-base text-slate-800 leading-relaxed">${weakness.details.text}</p>
                    <div class="pt-2">
                        <p class="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2">Tes priorités :</p>
                        <ul class="space-y-2 text-base text-slate-800 font-medium">
                            ${weakness.details.priorities.map(p => `<li class="flex items-center gap-2"><span class="text-amber-600 font-bold">✓</span> ${p}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="bg-emerald-50/60 border border-emerald-200 p-5 sm:p-6 rounded-2xl space-y-2">
                    <h4 class="text-xs sm:text-sm font-bold text-emerald-900 uppercase tracking-wider mb-1">Tes points forts</h4>
                    <ul class="space-y-2 text-base text-emerald-950 font-medium">
                        ${strengthsList.map(s => `<li class="flex items-start gap-2"><span class="text-emerald-600 font-bold">✓</span> ${s}</li>`).join('')}
                    </ul>
                </div>
        `;
        if (testimonial) {
            html += `
                <div class="relative w-full rounded-3xl border border-slate-200 bg-white/90 backdrop-blur-sm p-6 sm:p-8 flex flex-col justify-between shadow-lg">
                    <div class="space-y-4">
                        <div class="pb-3 border-b border-slate-100 space-y-2">
                            <h4 class="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">
                                Exemple de transformation
                            </h4>
                            <div>
                                <p class="text-lg font-bold text-slate-900">${testimonial.authorName}</p>
                                <p class="text-sm font-medium text-slate-500">${testimonial.authorRole}</p>
                            </div>
                        </div>
                        <div class="relative space-y-4 before:absolute before:left-[11px] before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-purple-300 before:via-purple-400 before:to-[#29c6dc]"> 
                            <div class="flex items-start gap-3 relative z-10">
                                <div class="w-6 h-6 rounded-full bg-purple-100 border-2 border-purple-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                    <span class="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                                </div>
                                <div class="space-y-1">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 text-purple-700 border border-purple-100">
                                        AVANT L'ACCOMPAGNEMENT
                                    </span>
                                    <p class="text-sm sm:text-base italic text-slate-600 leading-snug">
                                        ${testimonial.beforeQuote}
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3 relative z-10">
                                <div class="w-6 h-6 rounded-full bg-indigo-100 border-2 border-indigo-500 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                    <span class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                                </div>
                                <div class="space-y-1.5">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-100">
                                        CE QU'ON A TRAVAILLÉ
                                    </span>
                                    <ul class="space-y-1 text-slate-700 font-medium text-sm sm:text-base">
                                        ${testimonial.duringProgram.map(item => `
                                            <li class="flex items-center gap-2">
                                                <span class="flex h-4 w-4 items-center justify-center rounded-full bg-cyan-100 text-[#29c6dc] text-[10px] font-bold shrink-0">✓</span>
                                                <span>${item}</span>
                                            </li>
                                        `).join('')}
                                    </ul>
                                </div>
                            </div>
                            <div class="flex items-start gap-3 relative z-10">
                                <div class="w-6 h-6 rounded-full bg-cyan-100 border-2 border-[#29c6dc] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                    <span class="w-1.5 h-1.5 rounded-full bg-[#29c6dc]"></span>
                                </div>
                                <div class="space-y-1 w-full">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-50 text-cyan-800 border border-cyan-100">
                                        RÉSULTAT OBTENU
                                    </span>
                                    <div class="p-2.5 rounded-xl bg-gradient-to-r from-purple-50/50 to-cyan-50/50 border border-cyan-100 text-slate-900 font-bold text-sm sm:text-base">
                                        ${testimonial.afterResult}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="text-sm sm:text-base italic text-slate-600 leading-snug pt-2 border-t border-slate-100">
                            ${testimonial.finalQuote}
                        </p>
                    </div>
                </div>
            `;
        }
        html += `
                <div class="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl text-center space-y-4 shadow-xl text-white">
                    <p class="text-lg text-white font-bold leading-snug">
                        ${currentCta.title}
                    </p>
                    <p class="text-base text-slate-300 leading-relaxed">
                        ${currentCta.p1}
                    </p>
                    <p class="text-base text-slate-200 leading-relaxed font-medium">
                        ${currentCta.p2}
                    </p>
                    <div class="pt-3">
                        <a href="https://calendly.com/rdv-aurore-am20/1er-clic" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        class="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-[#29c6dc] text-white font-bold text-base shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 text-center">
                            <span>${currentCta.ctaText}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="pt-2 text-center">
                    <p class="text-xs text-slate-400 leading-relaxed max-w-lg mx-auto">
                        <strong>Note :</strong> Cet auto-diagnostic gratuit donne une première tendance indicative de tes leviers prioritaires. Il sert de base de réflexion pour préparer notre rendez-vous Premier clic AM 2.0.
                    </p>
                </div>
            </div>
        `;
        cardContent.innerHTML = html;
        sendNetlifyFormData({
            prenom: userProfile.prenom,
            email: userProfile.email,
            statut: userProfile.statut,
            accepte_newsletter: userProfile.optin ? 'Oui' : 'Non',
            score_message: `${pillars.message}%`,
            score_parcours: `${pillars.parcours}%`,
            score_conversion: `${pillars.conversion}%`,
            niveau: progressLevel.label,
            frein_principal: weakness.details.title,
            reponses_details: JSON.stringify(userAnswers)
        });
    }
    function renderBar(label, pct) {
        return `
            <div>
                <div class="flex justify-between text-sm font-semibold text-slate-700 mb-1">
                    <span>${label}</span>
                    <span>${pct} %</span>
                </div>
                <div class="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                    <div class="bg-gradient-to-r from-purple-600 to-[#29c6dc] h-2.5 rounded-full transition-all duration-500" style="width: ${pct}%"></div>
                </div>
            </div>
        `;
    }
    function sendNetlifyFormData(data) {
        const params = new URLSearchParams();
        params.append('form-name', 'diagnostic-presence');
        Object.keys(data).forEach(key => {
            params.append(key, data[key] || '');
        });
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params.toString()
        })
        .then(res => {
            if (res.ok) console.log('✅ Diagnostic transmis avec succès');
            else console.error('❌ Erreur lors de la transmission', res.status);
        })
        .catch(err => console.error('❌ Erreur réseau:', err));
    }
    btnNext.addEventListener('click', () => {
        if (currentStepIndex < steps.length - 1) {
            currentStepIndex++;
            renderStep();
        } else {
            showResults();
        }
    });
    btnBack.addEventListener('click', () => {
        if (currentStepIndex > 0) {
            currentStepIndex--;
            renderStep();
        }
    });
    renderStep();
});