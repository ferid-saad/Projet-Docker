const API_URL = window.API_URL || 'http://localhost:3000';

// Charger les contacts au démarrage
document.addEventListener('DOMContentLoaded', loadContacts);

// Gestionnaire du formulaire
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const contact = {
        nom: document.getElementById('nom').value,
        email: document.getElementById('email').value,
        telephone: document.getElementById('telephone').value
    };

    try {
        const response = await fetch(`${API_URL}/api/contacts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contact)
        });

        if (response.ok) {
            document.getElementById('contactForm').reset();
            loadContacts();
        }
    } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur lors de l\'ajout du contact');
    }
});

// Charger tous les contacts
async function loadContacts() {
    try {
        const response = await fetch(`${API_URL}/api/contacts`);
        const contacts = await response.json();
        displayContacts(contacts);
    } catch (error) {
        console.error('Erreur:', error);
    }
}

// Afficher les contacts
function displayContacts(contacts) {
    const container = document.getElementById('contactsList');
    
    if (contacts.length === 0) {
        container.innerHTML = '<p>Aucun contact trouvé</p>';
        return;
    }

    container.innerHTML = contacts.map(contact => `
        <div class="contact-card" data-id="${contact.id}">
            <div class="contact-info">
                <h3>${contact.nom}</h3>
                <p>📧 ${contact.email}</p>
                <p>📞 ${contact.telephone}</p>
            </div>
            <div class="contact-actions">
                <button class="edit" onclick="editContact(${contact.id})">Modifier</button>
                <button class="delete" onclick="deleteContact(${contact.id})">Supprimer</button>
            </div>
        </div>
    `).join('');
}

// Supprimer un contact
async function deleteContact(id) {
    if (!confirm('Voulez-vous vraiment supprimer ce contact ?')) return;

    try {
        const response = await fetch(`${API_URL}/api/contacts/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            loadContacts();
        }
    } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur lors de la suppression');
    }
}

// Modifier un contact (version simple)
async function editContact(id) {
    const nouveauNom = prompt('Nouveau nom:');
    if (!nouveauNom) return;
    
    const nouvelEmail = prompt('Nouvel email:');
    if (!nouvelEmail) return;
    
    const nouveauTel = prompt('Nouveau téléphone:');
    if (!nouveauTel) return;

    try {
        const response = await fetch(`${API_URL}/api/contacts/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nom: nouveauNom,
                email: nouvelEmail,
                telephone: nouveauTel
            })
        });

        if (response.ok) {
            loadContacts();
        }
    } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur lors de la modification');
    }
}