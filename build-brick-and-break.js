// Fonction pour construire des briques et les ajouter au corps du document.
function build(n) {
    // Récupère le corps du document.
    let body = document.getElementsByTagName("body")[0];
    let bricks = 1;

    // Crée un intervalle pour ajouter des briques progressivement.
    let interval = setInterval(() => {
        // Crée un élément div pour représenter une brique.
        let brick = document.createElement("div");
        brick.setAttribute("id", "brick-" + bricks);
        
        // Ajoute un attribut "foundation" aux briques d'indice pair (2, 5, 8, etc.).
        bricks % 3 === 2 
            ? (brick.dataset.foundation = true)
            : null;
        
        // Ajoute la brique au corps du document.
        body.appendChild(brick);
        
        // Incrémente le compteur de briques.
        bricks++;

        // Arrête la construction une fois que le nombre souhaité de briques est atteint.
        if (bricks > n) {
            clearInterval(interval);
        }
    }, 100);
}

// Fonction pour réparer des briques en fonction de leurs IDs.
function repair(...ids) {
    ids.forEach((id) => {
        let brick = document.getElementById(id);
        
        // Vérifie si la brique a un attribut "foundation".
        brick.getAttribute("foundation")
            ? (brick.dataset.repaired = "in progress")
            : (brick.dataset.repaired = true);
    });
}

// Fonction pour détruire la dernière brique ajoutée.
function destroy() {
    let bricks = document.getElementsByTagName("div");
    
    // Supprime la dernière brique du document.
    bricks[bricks.length - 1].remove();
}

// Exporte ces fonctions pour les utiliser ailleurs dans votre code.
export { build, repair, destroy };
