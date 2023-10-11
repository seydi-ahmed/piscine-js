function generateLetters() {
    // Boucle de 0 à 119 (120 itérations au total).
    for (let i = 0; i < 120; i++) {
        // Crée un élément div pour représenter une lettre.
        let letter = document.createElement("div");

        // Définit la taille de la police de caractères de la lettre.
        letter.style.fontSize = `${11 + i}px`;

        // Génère une lettre aléatoire en utilisant le code ASCII (A = 65, Z = 90).
        letter.textContent = String.fromCharCode(
            65 + Math.floor(Math.random() * 26)
        );

        // Détermine le poids de la police de caractères en fonction de la position de la lettre.
        if (i < 40) {
            letter.style.fontWeight = "300"; // Léger
        } else if (i < 80) {
            letter.style.fontWeight = "400"; // Normal
        } else {
            letter.style.fontWeight = "600"; // Gras
        }

        // Ajoute la lettre au corps du document.
        document.getElementsByTagName("body")[0].appendChild(letter);
    }
}

// Exporte la fonction pour l'utiliser ailleurs dans votre code.
export { generateLetters };
