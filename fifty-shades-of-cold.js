import { colors } from "./fifty-shades-of-cold.data.js";

// Génère des classes CSS dynamiquement en utilisant les couleurs du tableau 'colors'.
function generateClasses() {
    // Sélectionne la section 'head' du document.
    const head = document.getElementsByTagName("head")[0];

    // Crée un élément 'style' pour stocker les règles CSS générées.
    const style = document.createElement("style");

    // Parcourt le tableau 'colors'.
    colors.forEach((color) => {
        // Ajoute une règle CSS pour chaque couleur, définissant l'arrière-plan.
        style.innerHTML += `.${color} {\n  background: ${color};\n }\n\n`;
    });

    // Ajoute le bloc de styles générés à l'élément 'style'.
    console.log(style.innerHTML);

    // Ajoute l'élément 'style' à la section 'head' du document.
    head.appendChild(style);
}

// Génère des éléments <div> colorés pour les couleurs "froides" du tableau 'colors'.
function generateColdShades() {
    // Sélectionne le corps du document.
    const body = document.getElementsByTagName("body")[0];

    // Parcourt le tableau 'colors'.
    colors.forEach((color) => {
        // Vérifie si la couleur correspond à une teinte "froide".
        if (
            color.match(/(aqua|blue|turquoise|green|cyan|navy|purple)/) !== null
        ) {
            // Crée un élément <div>.
            const div = document.createElement("div");

            // Ajoute la classe de couleur à l'élément <div>.
            div.classList.add(color);

            // Affiche le nom de la couleur à l'intérieur de l'élément <div>.
            div.innerHTML = color;

            // Ajoute l'élément <div> au corps du document.
            body.appendChild(div);
        }
    });
}

// Change la classe de couleur de tous les éléments <div> du document.
function choseShade(shade) {
    // Sélectionne tous les éléments <div> du document.
    document.querySelectorAll("div").forEach((div) => {
        // Remplace la classe actuelle par la classe de couleur spécifiée.
        div.className = shade;
    });
}

// Exporte les fonctions pour les rendre disponibles dans d'autres fichiers.
export { generateClasses, generateColdShades, choseShade };
