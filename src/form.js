const form = document.getElementById('formulaireRecommandation');
const modal = document.getElementById('modalConfirmation');
const submitButton = document.getElementById('submitButton');

// Écouteur d'événement pour la soumission du formulaire
form.addEventListener('submit', async (e) => {
    e.preventDefault(); 
    
    // Afficher un état de chargement/désactiver le bouton
    submitButton.textContent = 'Envoi en cours...';
    submitButton.disabled = true;

    const formData = new FormData(form);
    
    // 💡 MODIFICATION CRUCIALE POUR NETLIFY : 
    // Ajouter explicitement le champ 'form-name' à FormData pour la soumission AJAX.
    // Cela permet à Netlify de lier les données au formulaire 'recommandation'.
    formData.append('form-name', 'recommandation'); 

    // --- Soumission Asynchrone (AJAX) à Netlify ---
    try {
        // La cible du POST est la page actuelle (ou la racine '/').
        const response = await fetch('/', { 
            method: 'POST',
            body: formData,
            // ATTENTION : Ne pas définir manuellement Content-Type; FormData s'en charge.
        });

        if (response.ok) {
            // ✅ Succès : Formulaire soumis avec succès à Netlify
            
            // 1. Réinitialiser le formulaire
            form.reset(); 
            
            // 2. Afficher la modale de confirmation
            if (modal) {
                modal.classList.remove('hidden'); 
            } else {
                // Ce message apparaît si 'modalConfirmation' est manquant dans votre HTML
                console.warn("L'élément modalConfirmation n'a pas été trouvé. Soumission réussie.");
            }
            
        } else {
            // ❌ Échec de la soumission (ex: erreur de validation par Netlify)
            console.error('Erreur de soumission Netlify, Statut:', response.status);
            alert("❌ Erreur lors de l'envoi du formulaire. Netlify a retourné une erreur. Veuillez réessayer.");
        }

    } catch (error) {
        // 🛑 Échec réseau ou autre erreur critique
        console.error('Erreur de soumission réseau:', error);
        alert("❌ Échec de la connexion. Veuillez vérifier votre réseau.");

    } finally {
        // Quoi qu'il arrive, réactiver le bouton
        submitButton.textContent = 'Envoyer la recommandation';
        submitButton.disabled = false;
    }
});

// Optionnel : Fermer la modale si l'utilisateur clique en dehors de la boîte
// Cette partie n'a pas été modifiée car elle est déjà correcte.
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});