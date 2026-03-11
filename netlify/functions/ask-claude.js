const Anthropic = require('@anthropic-ai/sdk');

exports.handler = async (event, context) => {
    console.log("Function ask-claude appelée");

    // Configuration des Headers (CORS)
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
        const style = userData.style || "convaincant, clair et persuasif";
        const contact = userData.contact || "contact";
        const diffValue = userData.differenciation || "élément différenciateur";

        if (!email.includes("@")) {
            return { 
                statusCode: 403, 
                headers,
                body: JSON.stringify({ error: "Accès refusé : Email invalide." }) 
            };
        }

        // --- 2. Préparation des instructions ---
        const servicesText = servicesFournis.length ? servicesFournis.join(', ') : "aucun service fourni";
        
        const faqInstruction = (userData.doutes === "UNKNOWN")
            ? `Génère 5 questions/réponses probables pour lever les freins à l'achat pour un ${expertise}.`
            : `Rédige 5 questions/réponses basées sur : ${Array.isArray(userData.doutes) ? userData.doutes.join(', ') : userData.doutes}.`;

        const servicesInstruction = `IMPORTANT : Génère 3 items de services. Si l'utilisateur n'en a qu'un ("${servicesText}"), décline-le en 3 offres ou étapes distinctes.`;
        
        const diffInstruction = (diffValue === "UNKNOWN") 
            ? `Analyse son métier (${expertise}) pour déduire un avantage concurrentiel unique.` 
            : `Utilise cet élément : "${diffValue}".`;

        // --- 3. Construction du System Prompt ---
        const systemPrompt = `Tu es un expert Copywriter CRO. Client : ${expertise}. Valeur : ${benefice}.
        DIRECTIVES : Style ${style}, pas de tirets cadratins, pas d'émojis. 
        RÉPONDS UNIQUEMENT EN JSON.
        
        Structure attendue :
        {
          "hero": { "title": "...", "desc": "...", "ctaLabel": "..." },
          "services": { "title": "...", "items": [{ "h3": "...", "p": "..." }, { "h3": "...", "p": "..." }, { "h3": "...", "p": "..." }] },
          "testimonials": { "title": "Avis Clients" },
          "gallery": { "title": "Réalisations" },
          "about": { "title": "...", "desc": "..." },
          "faq": { "title": "Questions Fréquentes", "items": [{ "q": "...", "a": "..." }, { "q": "...", "a": "..." }, { "q": "...", "a": "..." }, { "q": "...", "a": "..." }, { "q": "...", "a": "..." }] },
          "contact": { "title": "...", "desc": "...", "ctaLabel": "...", "value": "" },
          "seo": { "title": "...", "description": "..." },
          "linkedin": { "bannerTitle": "...", "points": ["...", "...", "..."], "vignette1Title": "...", "vignette2Title": "...", "vignette1Cta": "...", "vignette2Cta": "..." }
        }
        Si mode='web', 'linkedin' est null. Si mode='linkedin', 'hero' et 'seo' sont null.`;

        // --- 4. Appel API ---
        const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
        
        const msg = await anthropic.messages.create({
            model: "claude-3-5-sonnet-20241022",
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
        
        // On extrait strictement le JSON entre la première et la dernière accolade
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