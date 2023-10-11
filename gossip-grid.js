import { gossips } from "./gossip-grid.data.js";

// Fonction principale pour créer la grille de gossips.
function grid() {
    // Gestion des plages de réglage.
    ranges();

    // Crée la première carte de gossip avec un formulaire pour ajouter de nouveaux gossips.
    let form = document.createElement("form");
    form.classList.add("gossip");
    let textarea = document.createElement("textarea");
    let button = document.createElement("button");
    button.innerHTML = "Share gossip!";
    button.type = "submit";
    
    // Écoute l'événement "click" du bouton pour ajouter un gossip.
    button.addEventListener("click", (e) => {
        e.preventDefault();
        let gossip = textarea.value;
        if (gossip.length > 0) {
            gossips.unshift(gossip); // Ajoute le nouveau gossip au début du tableau.
            document.querySelectorAll(".gossip").forEach((card, i) => {
                if (i > 0) card.remove(); // Supprime toutes les cartes de gossip sauf la première.
            });
            textarea.value = ""; // Réinitialise le champ de texte.
            renderGossips(); // Affiche tous les gossips.
        }
    });

    form.appendChild(textarea);
    form.appendChild(button);
    document.body.appendChild(form);

    // Affiche tous les autres gossips.
    renderGossips();
}

// Fonction pour afficher tous les gossips dans des cartes.
function renderGossips() {
    gossips.forEach((gossip) => {
        let div = document.createElement("div");
        div.classList.add("gossip");
        div.innerHTML = gossip;
        document.body.appendChild(div);
    });
}

// Fonction pour créer les plages de réglage.
function ranges() {
    // Crée un conteneur pour les plages de réglage.
    let ranges = document.createElement("div");
    ranges.classList.add("ranges");

    // Plage de réglage pour la largeur des cartes de gossip.
    let widthRange = document.createElement("input");
    widthRange.type = "range";
    widthRange.id = "width";
    widthRange.min = "200";
    widthRange.max = "800";
    widthRange.value = "400";
    widthRange.addEventListener("input", (e) => {
        let cards = document.querySelectorAll(".gossip");
        cards.forEach((card) => {
            card.style.width = e.target.value + "px";
        });
    });

    // Plage de réglage pour la taille de la police des cartes de gossip.
    let fontSizeRange = document.createElement("input");
    fontSizeRange.type = "range";
    fontSizeRange.id = "fontSize";
    fontSizeRange.min = "20";
    fontSizeRange.max = "40";
    fontSizeRange.value = "30";
    fontSizeRange.addEventListener("input", (e) => {
        let cards = document.querySelectorAll(".gossip");
        cards.forEach((card) => {
            card.style.fontSize = e.target.value + "px";
        });
    });

    // Plage de réglage pour la couleur de fond des cartes de gossip (luminosité).
    let backgroundColorRange = document.createElement("input");
    backgroundColorRange.type = "range";
    backgroundColorRange.id = "background";
    backgroundColorRange.min = "20";
    backgroundColorRange.max = "75";
    backgroundColorRange.value = "50";
    backgroundColorRange.addEventListener("input", (e) => {
        let cards = document.querySelectorAll(".gossip");
        cards.forEach((card) => {
            card.style.backgroundColor = `hsl(280, 50%, ${e.target.value}%)`;
        });
    });

    // Ajoute les plages de réglage au conteneur.
    ranges.appendChild(widthRange);
    ranges.appendChild(fontSizeRange);
    ranges.appendChild(backgroundColorRange);

    // Ajoute le conteneur des plages de réglage au corps du document.
    document.body.appendChild(ranges);
}

// Exporte la fonction "grid" pour la rendre disponible dans d'autres fichiers.
export { grid };
