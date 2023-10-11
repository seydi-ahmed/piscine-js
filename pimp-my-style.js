import { styles } from "./pimp-my-style.data.js";

// Déclaration d'une variable globale "counter" initialisée à 0.
var counter = 0;

// Fonction qui gère la stylisation du bouton.
function pimp() {
    // Sélectionne le bouton avec la classe "button" dans le document HTML.
    var button = document.querySelector("button.button");

    // Vérifie si le bouton n'a pas la classe "unpimp".
    if (!button.classList.contains("unpimp")) {
        // Ajoute la classe de style à partir du tableau "styles" à l'élément du bouton.
        button.classList.add(styles[counter]);
        // Incrémente le compteur.
        counter++;
    } else {
        // Décrémente le compteur.
        counter--;
        // Supprime la classe de style correspondante de l'élément du bouton.
        button.classList.remove(styles[counter]);
        // Vérifie si le compteur est revenu à 0, et si c'est le cas, ajoute la classe "unpimp".
        if (counter === 0) {
            button.classList.toggle("unpimp");
        }
    }

    // Vérifie si le compteur atteint la longueur du tableau "styles".
    if (counter === styles.length) {
        // Ajoute ou supprime la classe "unpimp" selon que le compteur atteint la fin du tableau.
        button.classList.toggle("unpimp");
    }
}

// Exporte la fonction pour l'utiliser ailleurs dans votre code.
export { pimp };
