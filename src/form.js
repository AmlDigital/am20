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
        
        // --- Soumission Asynchrone (AJAX) à Netlify ---
        try {
            // Pour Netlify Forms, la cible du POST est généralement la page actuelle (ou la racine '/').
            const response = await fetch('/', { 
                method: 'POST',
                // Netlify a besoin des données encodées correctement, FormData s'en charge.
                body: formData,
            });

            if (response.ok) {
                // Succès : afficher la pop-up et réinitialiser
                form.reset(); 
                modal.classList.remove('hidden'); // Afficher la modale
            } else {
                // Échec de la soumission (ex: erreurs Netlify ou mauvaise réponse)
                alert("❌ Erreur lors de l'envoi du formulaire. Veuillez vérifier vos champs et réessayer.");
            }

        } catch (error) {
            // Échec réseau (le serveur n'est pas joignable)
            console.error('Erreur de soumission:', error);
            alert("❌ Échec de la connexion. Veuillez vérifier votre réseau.");

        } finally {
            // Quoi qu'il arrive, réactiver le bouton
            submitButton.textContent = 'Envoyer la recommandation';
            submitButton.disabled = false;
        }
    });

    // Optionnel : Fermer la modale si l'utilisateur clique en dehors de la boîte
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });