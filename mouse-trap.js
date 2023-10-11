// Déclare un tableau vide pour stocker les cercles et une variable pour la boîte.
var circles = [];
var box;

// Définit une classe Circle pour représenter les cercles.
class Circle {
    // Constructeur pour créer une instance de cercle avec des coordonnées (x, y).
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.diameter = 50; // Diamètre du cercle.
        this.isTrapped = false; // Indique si le cercle est piégé dans la boîte.
        this.HTML = null; // Élément HTML correspondant au cercle.
        this.draw(); // Appelle la méthode "draw" pour créer et afficher le cercle.
        circles.push(this); // Ajoute ce cercle au tableau de cercles.
    }

    // Méthode pour "dessiner" le cercle en créant un élément <div> et en l'ajoutant au corps du document.
    draw() {
        this.HTML = document.createElement("div");
        this.HTML.classList.add("circle"); // Ajoute la classe "circle" à l'élément.
        this.HTML.style.position = "absolute";
        this.HTML.style.top = this.y + "px";
        this.HTML.style.left = this.x + "px";
        this.HTML.style.background = "white"; // Couleur de fond par défaut.
        this.trapped(); // Vérifie si le cercle est piégé.
        document.body.appendChild(this.HTML);
    }

    // Méthode pour déplacer le cercle aux coordonnées (x, y) spécifiées.
    move(x, y) {
        this.trapped(); // Vérifie à nouveau si le cercle est piégé.
        if (!this.isTrapped) {
            this.x = x;
            this.y = y;
            this.HTML.style.top = this.y + "px";
            this.HTML.style.left = this.x + "px";
        } else {
            if (this.inReactangle(x, y)) {
                this.x = x;
                this.y = y;
                this.HTML.style.top = this.y + "px";
                this.HTML.style.left = this.x + "px";
            } else {
                if (this.inReactangle(x, this.y)) {
                    this.x = x;
                    this.HTML.style.left = this.x + "px";
                } else if (this.inReactangle(this.x, y)) {
                    this.y = y;
                    this.HTML.style.top = this.y + "px";
                }
            }
        }
    }

    // Méthode pour vérifier si le cercle est piégé dans la boîte.
    trapped() {
        if (
            this.x > box.x &&
            this.x + this.diameter < box.x + box.width &&
            this.y > box.y &&
            this.y + this.diameter < box.y + box.height
        ) {
            this.isTrapped = true;
            this.HTML.style.background = "var(--purple)"; // Couleur de fond si piégé.
        } else {
            this.isTrapped = false;
            this.HTML.style.background = "white"; // Couleur de fond par défaut.
        }
    }

    // Méthode pour vérifier si les coordonnées spécifiées sont à l'intérieur de la boîte.
    inReactangle(x, y) {
        if (
            x > box.x &&
            x + this.diameter < box.x + box.width &&
            y > box.y &&
            y + this.diameter < box.y + box.height
        ) {
            return true;
        } else {
            return false;
        }
    }
}

// Définit une classe Box pour représenter la boîte.
class Box {
    constructor() {
        this.HTML = document.createElement("div");
        this.HTML.classList.add("box"); // Ajoute la classe "box" à l'élément.
        this.HTML.style.position = "absolute";
        this.HTML.style.top = "50%";
        this.HTML.style.left = "50%";
        this.HTML.style.transform = "translate(-50%, -50%)";
        document.body.appendChild(this.HTML); // Ajoute la boîte au corps du document.
        this.x = this.HTML.offsetLeft - this.HTML.offsetWidth / 2 - 1; // Coordonnées de la boîte.
        this.y = this.HTML.offsetTop - this.HTML.offsetHeight / 2 - 1;
        this.width = this.HTML.offsetWidth + 1;
        this.height = this.HTML.offsetHeight + 1;
    }
}

// Écoute l'événement "click" sur le corps du document et crée un cercle à l'emplacement du clic.
document.body.addEventListener("click", (e) => {
    createCircle(e);
});

// Écoute l'événement "mousemove" sur le corps du document et déplace le dernier cercle créé en suivant le curseur.
document.body.addEventListener("mousemove", (e) => {
    moveCircle(e);
});

// Fonction pour créer un cercle à une position spécifiée.
function createCircle(e) {
    if (e === undefined) return;
    new Circle(e.clientX - 25, e.clientY - 25); // Crée un cercle centré sur les coordonnées du clic.
}

// Fonction pour déplacer le dernier cercle créé en suivant le curseur.
function moveCircle(e) {
    if (e === undefined || circles.length === 0) return;
    circles[circles.length - 1].move(e.clientX - 25, e.clientY - 25); // Déplace le dernier cercle créé.
}

// Fonction pour initialiser la boîte.
function setBox() {
    box = new Box();
}

// Exporte les fonctions pour les rendre disponibles dans d'autres fichiers.
export { createCircle, moveCircle, setBox };
