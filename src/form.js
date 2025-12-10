const form = document.getElementById('formulaireRecommandation');
const modal = document.getElementById('modalConfirmation');
const submitButton = document.getElementById('submitButton');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); 
    
    submitButton.textContent = 'Envoi en cours...';
    submitButton.disabled = true;

    const formData = new FormData(form);
    
    formData.append('form-name', 'recommandation'); 

    try {

        const response = await fetch('/', { 
            method: 'POST',
            body: formData,

        });

        if (response.ok) {

            form.reset(); 
            
            if (modal) {
                modal.classList.remove('hidden'); 
            } else {

                console.warn("L'élément modalConfirmation n'a pas été trouvé. Soumission réussie.");
            }
            
        } else {
            console.error('Erreur de soumission Netlify, Statut:', response.status);
            alert("❌ Erreur lors de l'envoi du formulaire. Netlify a retourné une erreur. Veuillez réessayer.");
        }

    } catch (error) {
        console.error('Erreur de soumission réseau:', error);
        alert("❌ Échec de la connexion. Veuillez vérifier votre réseau.");

    } finally {
        submitButton.textContent = 'Envoyer la recommandation';
        submitButton.disabled = false;
    }
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});