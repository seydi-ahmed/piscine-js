// Écoute l'événement "mousemove" sur tout le document et déclenche la fonction "pick" lors du mouvement de la souris.
document.addEventListener("mousemove", (e) => {
    pick(e);
});

// Écoute l'événement "click" sur tout le document et déclenche la fonction "pick" pour récupérer la couleur HSL et "copyHSL" pour copier la valeur HSL dans le presse-papiers.
document.addEventListener("click", (e) => {
    pick(e);
    copyHSL();
});

// Crée un élément <div> pour afficher la valeur HSL et l'ajoute au corps du document.
const hslDiv = document.createElement("div");
hslDiv.classList.add("hsl");
document.body.appendChild(hslDiv);

// Crée un élément <div> pour afficher la valeur de la teinte (hue) et l'ajoute au corps du document.
const hueDiv = document.createElement("div");
hueDiv.classList.add("hue", "text");
document.body.appendChild(hueDiv);

// Crée un élément <div> pour afficher la valeur de la luminosité (luminosity) et l'ajoute au corps du document.
const luminosityDiv = document.createElement("div");
luminosityDiv.classList.add("luminosity", "text");
document.body.appendChild(luminosityDiv);

// Namespace SVG pour créer des éléments SVG.
const svgns = "http://www.w3.org/2000/svg";

// Crée un élément <svg> pour afficher les lignes indicatrices et l'ajoute au corps du document.
const svg = document.createElement("svg");
svg.id = "svg";
svg.setAttribute("width", "100%");
svg.setAttribute("height", "100%");
svg.setAttribute("viewBox", "0 0 100% 100%");
svg.setAttribute("preserveAspectRatio", "none");

// Crée une ligne horizontale rouge (axe X) et l'ajoute à l'élément SVG.
const axisX = document.createElementNS(svgns, "line");
axisX.id = "axisX";
axisX.setAttribute("x1", "0");
axisX.setAttribute("y1", "0");
axisX.setAttribute("x2", "0");
axisX.setAttribute("y2", "100%");
axisX.setAttribute("stroke", "red");
axisX.setAttribute("stroke-width", "3");
svg.appendChild(axisX);

// Crée une ligne verticale rouge (axe Y) et l'ajoute à l'élément SVG.
const axisY = document.createElementNS(svgns, "line");
axisY.id = "axisY";
axisY.setAttribute("x1", "0");
axisY.setAttribute("y1", "0");
axisY.setAttribute("x2", "100%");
axisY.setAttribute("y2", "0");
axisY.setAttribute("stroke", "red");
axisY.setAttribute("stroke-width", "3");
svg.appendChild(axisY);

// Ajoute l'élément SVG au corps du document.
document.body.appendChild(svg);

// Fonction pour récupérer la couleur HSL en fonction de la position de la souris.
function pick(e) {
    if (e === undefined) return;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const hue = Math.round((mouseX / window.innerWidth) * 360);
    const luminosity = Math.round((mouseY / window.innerHeight) * 100);
    const hsl = `hsl(${hue}, 100%, ${luminosity}%)`;
    document.body.style.background = hsl; // Applique la couleur HSL comme couleur de fond du document.
    hslDiv.innerHTML = hsl; // Affiche la valeur HSL.
    hueDiv.innerHTML = `${hue}`; // Affiche la valeur de la teinte (hue).
    luminosityDiv.innerHTML = `${luminosity}`; // Affiche la valeur de la luminosité (luminosity).
    drawLines(mouseX, mouseY); // Dessine les lignes indicatrices.
}

// Fonction pour dessiner les lignes indicatrices à la position de la souris.
function drawLines(x, y) {
    axisX.setAttribute("x1", x);
    axisX.setAttribute("x2", x);
    axisY.setAttribute("y1", y);
    axisY.setAttribute("y2", y);
}

// Fonction pour copier la valeur HSL dans le presse-papiers.
async function copyHSL() {
    try {
        await navigator.clipboard.writeText(hslDiv.innerHTML);
    } catch (err) {
        console.error("Échec de la copie : ", err);
    }
}

// Exporte la fonction "pick" pour la rendre disponible dans d'autres fichiers.
export { pick };
