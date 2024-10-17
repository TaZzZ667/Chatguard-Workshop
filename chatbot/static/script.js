const chatbotPrompt = `
You are a chatbot designed to help users on the following topics:

- Scams
- Identity theft
- Blackmail
- Information theft
- Cyberbullying
- Disinformation
- Defamation
- Addictions

Your goal is to answer users' questions and guide them as best as possible to solve their problems. You can redirect them to freephone help lines, give them recommendations for their case, or provide additional resources.
the aim is for you to appear as human as possible, you have to be seen as a professional to help the person who is going to communicate with you and they have to feel that they are communicating with a human being and that they are being understood in a real exchange.

Useful information:
Scams
Freephone number: 0805 805 817
Available from Monday to Friday, 9am to 6:30pm
This number is used to report scams and get advice on how to react.

Identity theft
Contact number: 0800 200 000
This number is dedicated to fighting identity theft and provides information on what steps to take in case of fraud.

Blackmail
Contact number: 3919
This number is for victims of violence, including blackmail. It offers personalized support and advice.

Information theft
Contact number: 0800 200 000
This number can also be used to report theft of personal information or identity fraud.

Cyberbullying
Contact number: 3018
This number is dedicated to cyberbullying and offers assistance to victims, guiding them through their procedures.

Disinformation
Contact number: 3939
This number is useful for reporting disinformation or getting advice on how to verify information.

Defamation
Contact number: 0800 100 700
For legal advice on defamation and other reputation issues.

Addictions
Freephone number: 0 800 235 236
This number is for people facing addiction issues (alcohol, drugs, etc.) and offers support and advice.

You have to be clear, precise and to the point, don't make long speeches.
`;


const responses = {
    1: {
        title: "Escroquerie",
        sousCategories: [
            {
                name: "Signes d'une escroquerie",
                advice: [
                    "Les messages demandant des informations personnelles soudaines.",
                    "Ne partagez jamais de données bancaires par e-mail.",
                    "Vérifiez l'adresse e-mail de l'expéditeur."
                ]
            },
            {
                name: "Que faire en cas d'escroquerie",
                advice: [
                    "Contactez votre banque immédiatement.",
                    "Signalez l'escroquerie sur la plateforme.",
                    "Portez plainte à la police si nécessaire."
                ]
            }
        ]
    },
    2: {
        title: "Usurpation d'identité",
        sousCategories: [
            {
                name: "Actions immédiates",
                advice: [
                    "Changez immédiatement vos mots de passe.",
                    "Signalez l'usurpation sur le site FranceConnect.",
                    "Contactez les services concernés (banque, réseaux sociaux)."
                ]
            },
            {
                name: "Prévention contre l'usurpation",
                advice: [
                    "Utilisez des mots de passe forts et uniques.",
                    "Activez l'authentification à deux facteurs.",
                    "Ne partagez jamais d'informations sensibles en ligne."
                ]
            }
        ]
    },
    3: {
        title: "Chantage",
        sousCategories: [
            {
                name: "Comment reconnaître un chantage",
                advice: [
                    "Demandes soudaines d'argent ou de faveurs en échange de ne pas révéler des informations.",
                    "Pression psychologique ou menaces pour obtenir quelque chose."
                ]
            },
            {
                name: "Que faire en cas de chantage",
                advice: [
                    "Ne cédez pas aux demandes.",
                    "Collectez des preuves (captures d'écran, enregistrements).",
                    "Signalez le chantage aux autorités compétentes."
                ]
            }
        ]
    },
    4: {
        title: "Vol d'informations",
        sousCategories: [
            {
                name: "Signes d'un vol d'informations",
                advice: [
                    "Des activités suspectes sur vos comptes en ligne.",
                    "Des changements dans vos informations personnelles sans votre autorisation.",
                    "Des transactions inconnues sur votre compte bancaire."
                ]
            },
            {
                name: "Que faire après un vol d'informations",
                advice: [
                    "Changez vos mots de passe immédiatement.",
                    "Activez l'authentification à deux facteurs sur tous vos comptes.",
                    "Signalez le vol à la CNIL ou à la police."
                ]
            }
        ]
    },
    5: {
        title: "Cyberharcèlement",
        sousCategories: [
            {
                name: "Reconnaître le cyberharcèlement",
                advice: [
                    "Insultes ou menaces répétées sur les réseaux sociaux.",
                    "Diffusion de rumeurs ou d'informations privées sans consentement.",
                    "Pression constante par messages ou commentaires."
                ]
            },
            {
                name: "Comment réagir face au cyberharcèlement",
                advice: [
                    "Bloquez et signalez les comptes responsables.",
                    "Conservez des preuves (messages, captures d'écran).",
                    "Contactez le numéro vert 3018 (en France) ou d'autres services d'assistance."
                ]
            }
        ]
    },
    6: {
        title: "Désinformation",
        sousCategories: [
            {
                name: "Comment reconnaître la désinformation",
                advice: [
                    "Vérifiez toujours les sources des informations.",
                    "Méfiez-vous des titres sensationnalistes ou exagérés.",
                    "Comparez les informations avec des sources fiables."
                ]
            },
            {
                name: "Lutter contre la désinformation",
                advice: [
                    "Signalez les contenus trompeurs sur les réseaux sociaux.",
                    "Utilisez des outils de fact-checking comme Les Décodeurs ou Snopes.",
                    "Éduquez-vous sur les pratiques de vérification des informations."
                ]
            }
        ]
    },
    7: {
        title: "Diffamation",
        sousCategories: [
            {
                name: "Qu'est-ce que la diffamation",
                advice: [
                    "Accusations ou fausses informations visant à nuire à votre réputation.",
                    "Publications sans preuve visant à ternir votre image."
                ]
            },
            {
                name: "Comment agir contre la diffamation",
                advice: [
                    "Conservez toutes les preuves des propos diffamatoires.",
                    "Demandez le retrait des contenus via la plateforme concernée.",
                    "Consultez un avocat pour des actions en justice si nécessaire."
                ]
            }
        ]
    },
    8: {
        title: "Addiction aux réseaux sociaux",
        sousCategories: [
            {
                name: "Signes d'une addiction aux réseaux sociaux",
                advice: [
                    "Difficulté à passer du temps sans consulter vos réseaux.",
                    "Interruption de vos activités quotidiennes pour vérifier les notifications.",
                    "Troubles du sommeil dus à l'utilisation excessive des réseaux."
                ]
            },
            {
                name: "Comment gérer l'addiction aux réseaux sociaux",
                advice: [
                    "Utilisez des applications comme Forest ou StayFocusd pour limiter l'usage.",
                    "Définissez des périodes sans écran dans votre journée.",
                    "Consultez un psychologue spécialisé si nécessaire."
                ]
            }
        ]
    }
};

function handleOption(option) {
    const chatbox = document.getElementById("chatbox");
    chatbox.innerHTML = `<h4>${responses[option].title}</h4>`;

    responses[option].sousCategories.forEach((sousCategorie, index) => {
        const p = document.createElement("p");
        p.className = "botText";
        p.innerHTML = `<strong>${sousCategorie.name}</strong><br>${sousCategorie.advice.join('<br>')}`;
        chatbox.appendChild(p);
    });

    // Ajout de la question de satisfaction avec des boutons radio
    const p = document.createElement("p");
    p.className = "botText";
    p.innerHTML = "Avez-vous trouvé cette information utile ?";
    chatbox.appendChild(p);

    const form = document.createElement("form");
    form.innerHTML = `
        <div class="form-check">
            <input class="form-check-input" type="radio" name="useful" id="usefulYes" value="yes">
            <label class="form-check-label" for="usefulYes">Oui</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="useful" id="usefulNo" value="no">
            <label class="form-check-label" for="usefulNo">Non</label>
        </div>
        <button type="button" class="btn btn-primary" onclick="submitFeedback()">Valider</button>
    `;
    chatbox.appendChild(form);

    // Espace pour la réponse de satisfaction
    const feedbackResponse = document.createElement("div");
    feedbackResponse.id = "feedbackResponse";
    chatbox.appendChild(feedbackResponse);
}

function submitFeedback() {
    const feedbackYes = document.getElementById("usefulYes").checked;
    const feedbackNo = document.getElementById("usefulNo").checked;
    const feedbackResponse = document.getElementById("feedbackResponse");
    const chatInputArea = document.getElementById("chatInputArea");

    // Effacer la réponse précédente avant d'ajouter la nouvelle
    feedbackResponse.innerHTML = '';

    // Vérifier le choix de l'utilisateur et afficher la réponse correspondante
    if (feedbackYes) {
        feedbackResponse.innerHTML = "<p class='botText'>Ravi de vous avoir aidé !</p>";
        chatInputArea.style.display = 'none';  // Masquer la zone de saisie si Oui est sélectionné
    } else if (feedbackNo) {
        feedbackResponse.innerHTML = "<p class='botText'>Posez votre question ci-dessous pour une assistance personnalisée.</p>";
        chatInputArea.style.display = 'block';  // Afficher la zone de saisie si Non est sélectionné
    } else {
        alert("Veuillez choisir une option.");
    }

    // Faire défiler automatiquement vers le bas après l'affichage de la réponse
    scrollToBottom();

    // Afficher le bouton "Terminer la conversation"
    document.getElementById("endConversationArea").style.display = 'block';
}




// Fonction pour gérer l'envoi de message utilisateur
async function handleUserInput() {
    const userInput = document.getElementById("userInput").value;
    const chatbox = document.getElementById("chatbox");

    // Ajouter le message de l'utilisateur dans la chatbox
    chatbox.innerHTML += `<p class="userText">Vous: ${userInput}</p>`;
    document.getElementById("userInput").value = '';  // Effacer le texte après envoi

    // Faire défiler automatiquement vers le bas
    scrollToBottom();

    // Afficher un indicateur de chargement (facultatif)
    chatbox.innerHTML += `<p id="loading" class="botText">ChatGuard: Réflexion en cours...</p>`;
    
    // Faire défiler automatiquement vers le bas
    scrollToBottom();

    try {
        // Appel à l'API ou autre traitement
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {  
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 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'  // Remplace avec ta clé API Groq
            },
            body: JSON.stringify({
                messages: [
                    { role: 'system', content: chatbotPrompt },
                    { role: 'user', content: userInput }
                ],
                model: 'llama-3.1-70b-versatile',
                temperature: 1,
                max_tokens: 1024,
                top_p: 1,
                stream: false,
                stop: null
            })
        });

        const data = await response.json();

        // Retirer l'indicateur de chargement
        document.getElementById("loading").remove();

        // Ajouter la réponse du chatbot
        if (data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
            chatbox.innerHTML += `<p class="botText">ChatGuard: ${data.choices[0].message.content}</p>`;
        } else {
            chatbox.innerHTML += `<p class="botText">ChatGuard: Désolé, je n'ai pas de réponse appropriée pour le moment.</p>`;
        }

        // Faire défiler automatiquement vers le bas
        scrollToBottom();

    } catch (error) {
        document.getElementById("loading").remove();
        chatbox.innerHTML += `<p class="botText">ChatGuard: Désolé, je n'ai pas pu traiter votre demande pour le moment.</p>`;
        console.error("Erreur avec l'API :", error);

        // Faire défiler automatiquement vers le bas
        scrollToBottom();
    }
}


function endConversation() {
    const chatbox = document.getElementById("chatbox");
    const chatInputArea = document.getElementById("chatInputArea");
    const endConversationArea = document.getElementById("endConversationArea");
    const ratingArea = document.getElementById("ratingArea");

    // Cacher la zone de saisie et le bouton "Terminer la conversation"
    chatInputArea.style.display = 'none';
    endConversationArea.style.display = 'none';

    // Afficher la section pour la notation et le commentaire
    ratingArea.style.display = 'block';

    // Ajouter un message de fin de conversation dans la chatbox
    chatbox.innerHTML += "<p class='botText'>Merci pour la conversation ! Veuillez laisser un commentaire et évaluer cette conversation.</p>";

    // Faire défiler automatiquement vers le bas
    scrollToBottom();
}


// Fonction pour gérer la notation (5 étoiles)
const stars = document.querySelectorAll('.rating a');
stars.forEach(star => {
    star.addEventListener('click', function (event) {
        event.preventDefault(); // Empêcher le comportement par défaut du lien

        const rating = this.getAttribute('href').substring(1); // Récupère le numéro d'étoile cliquée
        submitRating(rating); // Envoyer la note
    });
});

// Fonction pour envoyer la note et la sauvegarder dans le fichier
function submitRating(rating) {
    const chatbox = document.getElementById("chatbox");
    const comment = document.getElementById("ratingComment").value;  // Récupère le commentaire

    // Affichage visuel immédiat de la note et du commentaire
    chatbox.innerHTML += `<p class='botText'>Merci pour votre commentaire : "${comment}". Vous avez noté cette conversation ${rating} étoile(s).</p>`;

    // Faire défiler automatiquement vers le bas après affichage
    scrollToBottom();

    // Envoyer la note et le commentaire au serveur pour l'enregistrer
    fetch('/save-rating', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rating: rating, comment: comment })  // Envoyer la note et le commentaire en JSON
    })
    .then(response => response.json())
    .then(data => {
        console.log('Note et commentaire sauvegardés:', data);
    })
    .catch((error) => {
        console.error('Erreur lors de la sauvegarde de la note et du commentaire:', error);
    });
}

// Fonction pour faire défiler automatiquement le chatbox vers le bas
function scrollToBottom() {
    const chatbox = document.getElementById("chatbox");
    chatbox.scrollTop = chatbox.scrollHeight;
}

