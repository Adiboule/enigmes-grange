// script.js
function checkCode() {
    const userInput = document.getElementById('userInput').value.trim();
    const responseMessage = document.getElementById('responseMessage');
    const responseImage = document.getElementById('responseImage');
    const responseVideo = document.getElementById('responseVideo');

    // Liste des mots/codes valides et les réponses correspondantes
    const validCodes = {
        'Coucou': 'Salut! Tu dois aller près du parc.',
        'Gandolfi': 'C\'est le meilleur!',
        'code1': 'Bravo! Vous avez trouvé le premier code!',
        'code2': 'Super! Voici le deuxième code!',
        'code3': 'Excellent! Vous avez atteint la dernière étape!',
        'image': 'Voici votre image!',
        'parking': 'Donne le numéro de la place de parking manquante',
        '87': 'Voici votre vidéo!'
    };

    // Vérification du code entré par l'utilisateur
    if (validCodes[userInput]) {
        responseMessage.textContent = validCodes[userInput];
        responseMessage.style.color = 'green';

        // Affichage de l'image si le code est "image"
        if (userInput === 'image') {
            responseImage.src = '../img/logique.png';  // Assurez-vous que le chemin est correct
            responseImage.style.display = 'block';
            responseVideo.style.display = 'none';
        }
        // Affichage de la vidéo si le code est "video"
        else if (userInput === '87') {
            responseVideo.src = 'https://www.youtube.com/watch?v=NfEp5l0UMBE';  // Remplacez YOUR_VIDEO_ID par l'ID de votre vidéo YouTube
            responseVideo.style.display = 'block';
            responseImage.style.display = 'none';
        }
        else if (userInput === 'parking') {
            responseImage.src = '../img/parking.png';  // Assurez-vous que le chemin est correct
            responseImage.style.display = 'block';
            responseVideo.style.display = 'none';
        }
        else {
            responseImage.style.display = 'none';
            responseVideo.style.display = 'none';
        }
    } else {
        responseMessage.textContent = 'Désolé, ce n\'est pas le bon code. Essayez encore!';
        responseMessage.style.color = 'red';
        //responseImage.style.display = 'none';
        //responseVideo.style.display = 'none';
    }
}