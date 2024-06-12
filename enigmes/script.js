// script.js
let currentEnigmeNum = 1; // Commencer par la première énigme
const enigmes = [
    {
        "numéro": 1,
        "bonne_réponse": "937",
        "contenu": "ok MAINTENANT POUR PASSER A LA SUITE CLIQUE SUR LE BOUTON SUIVANT",
        "question": "Félicitation, première enigme passée,clique sur Valider pour passer à l'énigme suivante",
        "type": "texte",
        "next": 2
    },
    {
        "numéro": 2,
        "bonne_réponse": "14000 cm",
        "contenu": "",
        "question": "Quelle est la hauteur moyenne du jet d'eau à Genève? Donne la réponse en centimètre, avec l'unité",
        "type": "texte",
        "next": 3
    },
    {
        "numéro": 3,
        "bonne_réponse": "Une somme",
        "contenu": " ",
        "question": "Comment s'appelle le résultat d'une addition ?",        
        "type": "texte",
        "next": 4
    },
    {
        "numéro": 4,
        "bonne_réponse": "1602",
        "contenu": " ",
        "question": "En quelle année a- t - on vu la bataille de l'escalade à Genève?",
        "type": "texte",
        "next": 5
    },
    {
        "numéro": 5,
        "bonne_réponse": "Tang",
        "contenu": " ",
        "question": "Quel est le  nom de famille d'Emma?",
        "type": "texte",
        "next": 6
    },
    {
        "numéro": 6,
        "bonne_réponse": "87",
        "lien": "../img/parking.png",
        "question": "Trouve le numéro de place de parking caché par la voiture",
        "type": "image",
        "next": 7
    },
    {
        "numéro": 7,
        "bonne_réponse": "153",
        "lien": "../img/operation.png",
        "question": "Résous cette opération bien particulière....",
        "type": "image",
        "next": 8
    },
    {
        "numéro": 8,
        "bonne_réponse": "Catherine de Médicis",
        "lien": "../img/cat.jpg",
        "question": "Trouve le personnage cachée dans ce rébus",
        "type": "image",
        "next": 9
    },
    {
        "numéro": 9,
        "bonne_réponse": "Tondeuses naturelles",
        "lien": "../img/tondeuse.jpg",
        "question": "Retrouve ce panneau dans le park.Quels mots se cache sur l'image?",
        "type": "image",
        "next": 10
    },
    {
        "numéro": 10,
        "bonne_réponse": "Monde",
        "contenu": "https://youtube.com/embed/cLEMWYQCjlU?si=92dqFSOQatpj7E9D",
        "question": "Le prochaine mot à trouver se trouve dans le lieu de la vidéo. A toi de retrouver cet endroit dans le park",
        "type": "video",
        "next": 11
    },
    {
        "numéro": 11,
        "bonne_réponse": "Harry Potter",
        "contenu": " ",
        "question": "Trouve le personnage fictif caché dans ce rebus",
        "lien": "../img/HP.webp",
        "type": "image",
        "next": 12
    },
    {
        "numéro": 12,
        "bonne_réponse": "Shakespeare",
        "contenu": "Qui a écrit Roméo et Juliette?",
        "question": "Trouve le code secret caché avec l'image--TODO",
        "type": "texte",
        "next": 13
    },
    {
        "numéro": 13,
        "bonne_réponse": "Une abeille",
        "lien": "../img/abeille.jpg",
        "question": "Rend toi à cet endroit pour trouver l'animal dessiné dans le buisson",
        "type": "image",
        "next": 14
    },
    {
        "numéro": 14,
        "bonne_réponse": "Berlin",
        "contenu": "localisation_berlin.png",
        "question": "TODO",
        "type": "localisation",
        "next": 15
    },
    {
        "numéro": 15,
        "bonne_réponse": "Jeckyll",
        "lien": "../img/gertrude.jpg",
        "question": "Retrouve cette fleur dans le parc, pour trouver le mot manquant",
        "type": "image",
        "next": 16
    },
    {
        "numéro": 16,
        "bonne_réponse": "Naruto",
        "contenu": "https://www.youtube.com/embed/FXdShmxPYmA?si=lkH2cNnIczdazIeI",
        "question": "Peut etre faut il retrouver l'endroit de la vidéo?",
        "type": "video",
        "next": 17
    },
    {
        "numéro": 17,
        "bonne_réponse": "Valorant",
        "lien": "../img/arbre.jpg",
        "question": "Retrouve cet endroit dans le parc pour trouver le mot secret",
        "type": "image",
        "next": 18
    },
    {
        "numéro": 18,
        "bonne_réponse": "WC",
        "lien": "../img/panneau.jpg",
        "question": "Retrouve ce panneau  dans le parc pour trouver le mot secret flouté",
        "type": "localisation",
        "next": 19
    },
    {
        "numéro": 19,
        "bonne_réponse": "Menhirs",
        "lien": "../img/obelix.jpg",
        "question": "Retrouve cet endroit dans le parc pour trouver le mot secret",
        "type": "localisation",
        "next": 20
    },
    {
        "numéro": 20,
        "bonne_réponse": "terrasse",
        "lien": "../img/theatre.jpg",
        "question": "Retrouve cet endroit dans le parc pour trouver le mot secret",
        "type": "localisation",
        "next": 21
    },
    {
        "numéro": 21,
        "bonne_réponse": "Foron",
        "lien": "../img/fin.jpg",
        "question": "Retrouve cet endroit dans le parc pour trouver le secret final",
        "type": "texte",
        "next": null
    }
]

function checkCode() {
    const userInput = document.getElementById('userInput').value.toLowerCase();
    const enigmeTrouvee = enigmes.find(e => e.numéro === currentEnigmeNum && e.bonne_réponse.toLowerCase() === userInput);

    if (enigmeTrouvee) {
        currentEnigmeNum = enigmeTrouvee.next; // Mettre à jour pour la prochaine énigme
        displayEnigme(enigmeTrouvee);
        updateCurrentEnigmeNumDisplay(); // Mettre à jour l'affichage du numéro de l'énigme actuelle
        document.getElementById('responseStatus').innerText = 'Bonne réponse!';
    } else {
        //document.getElementById('responseMessage').innerText = 'Code incorrect, veuillez réessayer.';
        document.getElementById('responseStatus').innerText = 'Mauvaise réponse';
    }
}

function displayEnigme(enigme) {
    const responseMessage = document.getElementById('responseMessage');
    const responseImage = document.getElementById('responseImage');
    const responseVideo = document.getElementById('responseVideo');
    const nextEnigmeButton = document.getElementById('nextEnigmeButton');

    responseMessage.innerText = enigme.question;

    // Mettre à jour le tableau avec les informations de l'énigme
    document.getElementById('enigmeType').innerText = enigme.type;
    if (enigme.type === 'image' || enigme.type === 'video') {
        document.getElementById('enigmeContent').innerText = '';
    } else {
        document.getElementById('enigmeContent').innerText = enigme.contenu;
    }

    if (enigme.type === 'image') {
        responseImage.src = enigme.lien;
        responseImage.style.display = 'block';
        responseVideo.style.display = 'none';
    } else if (enigme.type === 'video') {
        responseVideo.src = enigme.contenu;
        responseVideo.style.display = 'block';
        responseImage.style.display = 'none';
    } else if (enigme.type === 'localisation') {
        responseImage.src = enigme.lien;
        responseImage.style.display = 'block';
        responseVideo.style.display = 'none';
    }
    else {
        responseImage.style.display = 'none';
        responseVideo.style.display = 'none';
    }

    // Préparer pour la prochaine question
    if (enigme.next !== null) {
        nextEnigmeButton.dataset.nextEnigme = enigme.next;
        nextEnigmeButton.style.display = 'block';
    } else {
        nextEnigmeButton.style.display = 'none';
    }

    // Réinitialiser le statut de la réponse
    document.getElementById('responseStatus').innerText = '';
}

function loadNextEnigme() {
    const nextEnigmeButton = document.getElementById('nextEnigmeButton');
    document.getElementById('userInput').value = '';
    if (currentEnigmeNum) {
        const nextEnigme = enigmes.find(e => e.numéro === currentEnigmeNum);
        if (nextEnigme) {
            displayEnigme(nextEnigme);
            updateCurrentEnigmeNumDisplay(); // Mettre à jour l'affichage du numéro de l'énigme actuelle
        }
    }
    nextEnigmeButton.style.display = 'none'; // Cacher le bouton après avoir cliqué dessus
}

function updateCurrentEnigmeNumDisplay() {
    const currentEnigmeNumDisplay = document.getElementById('currentEnigmeNumDisplay');
    currentEnigmeNumDisplay.innerText = `Énigme actuelle : ${currentEnigmeNum}`;
}
