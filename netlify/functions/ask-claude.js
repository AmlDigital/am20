const Anthropic = require('@anthropic-ai/sdk');
exports.handler = async (event, context) => {
    console.log("Function ask-claude appelée");
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json"
    };
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, headers, body: "Method Not Allowed" };
    }
    try {
        const userData = JSON.parse(event.body);
// --- 1. Extraction et Valeurs par défaut ---
        const email = userData.email || "";
        const mode = userData.mode || "full";
        const expertise = userData.expertise || "Professionnel";
        const benefice = userData.benefice || "Offre de valeur unique";
        const probleme = userData.probleme || "Problème du client à résoudre";
        const servicesFournis = userData.services || [];
        const styleKey = userData.style || "expert";
        const contact = userData.contact || "contact";
        const diffValue = userData.differenciation || "UNKNOWN";
        if (!email.includes("@")) {
            return { 
                statusCode: 403, 
                headers,
                body: JSON.stringify({ error: "Accès refusé : Email invalide." }) 
            };
        }
// --- 2. Préparation des instructions ---
        const styleDefinitions = {
            "expert": "Ton professionnel, autoritaire et rassurant. Utilise impérativement le VOUVOIEMENT.",
            "humain": "Ton chaleureux, empathique et proche du client. Utilise impérativement le VOUVOIEMENT.",
            "chaleureux": "Ton chaleureux, empathique et proche du client. Utilise impérativement le TUTOIEMENT.",
            "direct": "Ton punchy, audacieux et sans détour. Utilise impérativement le TUTOIEMENT.",
            "premium": "Ton élégant, sobre et haut de gamme. Utilise impérativement le VOUVOIEMENT."
        };
        const styleInstruction = styleDefinitions[styleKey] || styleDefinitions["expert"];
        const servicesText = servicesFournis.length ? servicesFournis.join(', ') : "aucun service fourni";
        const faqInstruction = (userData.doutes === "UNKNOWN")
            ? `Génère 5 questions/réponses probables pour lever les freins à l'achat pour un ${expertise}.`
            : `Rédige 5 questions/réponses basées sur : ${Array.isArray(userData.doutes) ? userData.doutes.join(', ') : userData.doutes}.`;
        const diffInstruction = (diffValue === "UNKNOWN" || diffValue === "élément différenciateur") 
            ? `L'utilisateur n'a pas fourni de différenciation spécifique. Ne crée PAS de nouvel avantage. Concentre toute l'argumentation sur le bénéfice majeur ("${benefice}") et la résolution concrète du problème ("${probleme}").` 
            : `Utilise impérativement cet élément de différenciation : "${diffValue}".`;
// --- 3. Construction du System Prompt ---
        const systemPrompt = `Tu es un expert Copywriter CRO spécialisé en Tunnels de Vente et Profils LinkedIn. Tu génères du texte hautement convertible basé STRICTEMENT sur les données fournies. 

        DONNÉES CLIENT :
        - Expertise : ${expertise}
        - Problème cible : ${probleme}
        - Bénéfice majeur : ${benefice}
        - Différenciation : ${diffValue}
        - Services fournis : ${servicesText}
        - Préférence contact : ${contact}
        - Style et Ton : ${styleInstruction}

        STRATÉGIE DE DIFFÉRENCIATION : ${diffInstruction}  

        CONSIGNES DE RÉDACTION PAR SECTION (STRICT) :
        1. HERO : 
           - Title : H1 percutant. On doit comprendre l'offre en < 3 secondes. Pas de poésie, pas de flou.
           - Desc : Structure "Douleur / Bénéfice" utilisant "${probleme}" et "${benefice}".
           - ctaLabel : Inciter UNIQUEMENT à découvrir les services (ex: "Découvrir l'offre", "Voir les bénéfices"). Pas de "Je veux".
        2. SERVICES : 
           - Génère exactement 3 items. 
           - Si l'utilisateur a fourni des services, utilise-les en les tournant "Service + Bénéfice" via "${benefice}".
           - S'il y en a moins de 3, complète les cartes en créant des avantages/bénéfices basés sur "${benefice}" et "${probleme}".
        3 TESTIMONIALS : 
            - Title : Rédige un titre court qui valide la preuve sociale en lien avec "${expertise}" et "${benefice}" (ex: "Ils ont transformé leur activité", "Leurs retours sur notre expertise").
        4. GALLERY : 
            - Title : Rédige un titre court qui invite à voir le résultat concret du "${benefice}" (ex: "Le résultat en images", "Nos succès en ${expertise}").
        5. ABOUT : 
           - Title & Desc : Utilise "${benefice}", "${probleme}" et "${diffValue}".
           - Contenu : Un titre court et un paragraphe qui rappelle les avantages de choisir cette offre et qui rassure le client. Pas de CV, pas de bio.
        6. CONTACT : 
           - Title, Desc & ctaLabel : Basés sur "${contact}". Doit être rassurant et inciter au clic immédiat.
        7. FAQ : 
           - ${faqInstruction}
        8. SEO : 
           - Title & Description : Optimisés avec "${expertise}", "${benefice}" et "${diffValue}".
        9. LINKEDIN : 
           - bannerTitle : Court, percutant, compréhension en 3s. Zéro poésie. Focus bénéfice.
           - points : Exactement 3 points. 1 à 2 MOTS maximum chacun. Basés sur "${probleme}" et "${diffValue}".
           - vignette1 (Contact) : Titre court + CTA basés sur "${contact}". Inciter au clic.
           - vignette2 (Offre) : Titre court + CTA basés sur "${benefice}". Inciter à découvrir l'offre.

        LOGIQUE DE MODE :
        - Si mode='web' : linkedin = null.
        - Si mode='linkedin' : hero, services, testimonials, gallery, about, faq, contact et seo = null.
        - Si mode='full' : Remplis tout.

        INTERDICTION : Pas de tirets cadratins (—), pas d'émojis. RÉPONDS UNIQUEMENT EN JSON.
        
        Structure attendue :
        {
          "hero": { "title": "...", "desc": "...", "ctaLabel": "..." },
          "services": { "title": "...", "items": [{ "h3": "...", "p": "..." }, { "h3": "...", "p": "..." }, { "h3": "...", "p": "..." }] },
          "testimonials": { "title": "..." },
          "gallery": { "title": "..." },
          "about": { "title": "...", "desc": "..." },
          "faq": { "title": "Questions Fréquentes", "items": [{ "q": "...", "a": "..." }, { "q": "...", "a": "..." }, { "q": "...", "a": "..." }, { "q": "...", "a": "..." }, { "q": "...", "a": "..." }] },
          "contact": { "title": "...", "desc": "...", "ctaLabel": "...", "value": "" },
          "seo": { "title": "...", "description": "..." },
          "linkedin": { "bannerTitle": "...", "points": ["...", "...", "..."], "vignette1Title": "...", "vignette2Title": "...", "vignette1Cta": "...", "vignette2Cta": "..." }
        }`;
// --- 4. Appel API ---
        const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
        const msg = await anthropic.messages.create({
            model: "claude-sonnet-4-6",
            max_tokens: 2500,
            temperature: 0.7,
            system: systemPrompt,
            messages: [{
                role: "user",
                content: `Génère les textes pour un ${expertise}. Problème : ${probleme}. Services : ${servicesText}. Mode : ${mode}.`
            }]
        });
// --- 5. Nettoyage et Validation ---
        let aiResponse = msg.content[0].text.trim();
        const firstBracket = aiResponse.indexOf('{');
        const lastBracket = aiResponse.lastIndexOf('}');
        if (firstBracket === -1 || lastBracket === -1) {
            throw new Error("L'IA n'a pas renvoyé un format JSON valide.");
        }
        const cleanJson = aiResponse.substring(firstBracket, lastBracket + 1);
        const parsed = JSON.parse(cleanJson);
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(parsed)
        };

    } catch (error) {
        console.error("DÉTAIL API ANTHROPIC:", error.status, error.message);
        const message = error?.message || "";
        const isQuotaError = message.includes("over_quota") || message.includes("credit") || error?.status === 402;
        return {
            statusCode: error.status || 500,
            headers,
            body: JSON.stringify({
                error: isQuotaError ? "SOLDE_EPUISE" : "ERREUR_TECHNIQUE",
                details: message
            })
        };
    }
};