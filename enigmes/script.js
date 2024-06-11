// script.js
let currentEnigmeNum = 1; // Commencer par la première énigme
const enigmes = [
    {
        "numéro": 1,
        "bonne_réponse": "937",
        "contenu": "Bienvenu, pour afficher la prochaine enigme, clic sur le bouton Suivant",
        "type": "texte",
        "next": 2
    },
    {
        "numéro": 2,
        "bonne_réponse": "b",
        "contenu": "Quelle est la célèbre équation d'Einstein?",
        "type": "texte",
        "next": 3
    },
    {
        "numéro": 3,
        "bonne_réponse": "La Joconde",
        "contenu": "Trouve le mot caché",
        "lien": "../img/HP.webp",
        "type": "image",
        "next": 4
    },
    {
        "numéro": 4,
        "bonne_réponse": "Tour Eiffel",
        "contenu": "trouve la place de parking",
        "lien": "../img/parking.png",
        "type": "image",
        "next": 5
    },
    {
        "numéro": 5,
        "bonne_réponse": "Pythagore",
        "contenu": "Qui a formulé le théorème a^2 + b^2 = c^2?",
        "type": "texte",
        "next": 6
    },
    {
        "numéro": 6,
        "bonne_réponse": "Leonardo da Vinci",
        "contenu": "video_da_vinci.mp4",
        "type": "video",
        "next": 7
    },
    {
        "numéro": 7,
        "bonne_réponse": "Newton",
        "contenu": "Qui a découvert la gravité en observant une pomme tomber?",
        "type": "texte",
        "next": 8
    },
    {
        "numéro": 8,
        "bonne_réponse": "H2O",
        "contenu": "Quelle est la formule chimique de l'eau?",
        "type": "texte",
        "next": 9
    },
    {
        "numéro": 9,
        "bonne_réponse": "Paris",
        "contenu": "image_paris.jpg",
        "type": "image",
        "next": 10
    },
    {
        "numéro": 10,
        "bonne_réponse": "Monde",
        "contenu": "video_monde.mp4",
        "type": "video",
        "next": 11
    },
    {
        "numéro": 11,
        "bonne_réponse": "Mozart",
        "contenu": "Qui a composé La Flûte Enchantée?",
        "type": "texte",
        "next": 12
    },
    {
        "numéro": 12,
        "bonne_réponse": "Shakespeare",
        "contenu": "Qui a écrit Roméo et Juliette?",
        "type": "texte",
        "next": 13
    },
    {
        "numéro": 13,
        "bonne_réponse": "Lune",
        "contenu": "image_lune.jpg",
        "type": "image",
        "next": 14
    },
    {
        "numéro": 14,
        "bonne_réponse": "Berlin",
        "contenu": "localisation_berlin.png",
        "type": "localisation",
        "next": 15
    },
    {
        "numéro": 15,
        "bonne_réponse": "Tesla",
        "contenu": "video_tesla.mp4",
        "type": "video",
        "next": 16
    },
    {
        "numéro": 16,
        "bonne_réponse": "Amazon",
        "contenu": "Quelle est la plus grande forêt tropicale du monde?",
        "type": "texte",
        "next": 17
    },
    {
        "numéro": 17,
        "bonne_réponse": "Everest",
        "contenu": "Quel est le sommet le plus haut du monde?",
        "type": "texte",
        "next": 18
    },
    {
        "numéro": 18,
        "bonne_réponse": "Colisée",
        "contenu": "image_colisee.jpg",
        "type": "image",
        "next": 19
    },
    {
        "numéro": 19,
        "bonne_réponse": "Mont Blanc",
        "contenu": "localisation_mont_blanc.png",
        "type": "localisation",
        "next": 20
    },
    {
        "numéro": 20,
        "bonne_réponse": "Nobel",
        "contenu": "Qui a inventé la dynamite et donné son nom à un célèbre prix?",
        "type": "texte",
        "next": null
    }
];

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

    responseMessage.innerText = enigme.contenu;

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
    } else {
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
