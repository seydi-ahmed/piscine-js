// Écoute l'événement "keydown" sur le document et appelle la fonction "compose" en passant l'événement en paramètre.
document.addEventListener("keydown", function (event) {
    compose(event);
});

// Fonction "compose" qui réagit aux touches du clavier.
function compose(e) {
    // Vérifie si l'événement est défini (non nul).
    if (e === undefined) {
        return; // Sort de la fonction si l'événement est indéfini.
    }

    // Vérifie si la touche pressée est une lettre de l'alphabet (a-z).
    if (
        [...Array(26).keys()].map((i) => i + 97).includes(e.key.charCodeAt(0))
    ) {
        // Crée un élément <div> pour afficher la note.
        let div = document.createElement("div");
        div.classList.add("note"); // Ajoute la classe "note" à l'élément <div>.

        // Définit la couleur de fond en fonction de la lettre pressée.
        div.style.backgroundColor = `rgb(${
            (255 / 26) * (e.key.charCodeAt(0) - 97)
        }, ${(255 / 26) * (e.key.charCodeAt(0) - 97)}, ${
            (255 / 26) * (e.key.charCodeAt(0) - 97)
        })`;

        div.innerHTML = e.key; // Affiche la lettre pressée à l'intérieur de l'élément <div>.
        document.body.appendChild(div); // Ajoute l'élément <div> au corps du document.
    } else if (e.key === "Backspace") {
        // Si la touche pressée est "Backspace", supprime la dernière note créée.
        let notes = document.getElementsByClassName("note");
        notes[notes.length - 1].remove();
    } else if (e.key === "Escape") {
        // Si la touche pressée est "Escape", supprime toutes les notes.
        let notes = document.getElementsByClassName("note");
        while (notes.length > 0) {
            notes[0].remove();
        }
    }
}

// Exporte la fonction "compose" pour la rendre disponible dans d'autres fichiers.
export { compose };
