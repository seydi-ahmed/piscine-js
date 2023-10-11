import { places } from "./where-do-we-go.data.js";

// Variable pour suivre la position de défilement (scroll) de la fenêtre.
var scroll = window.scrollY;

// Crée un élément <a> pour afficher la position actuelle.
const location = document.createElement("a");
location.classList.add("location");
document.body.appendChild(location);

// Écoute l'événement "DOMContentLoaded" lorsque la page est chargée.
document.addEventListener("DOMContentLoaded", () => {
    selectPlace(); // Sélectionne la place actuelle lors du chargement de la page.
});

// Écoute l'événement "scroll" lorsque l'utilisateur fait défiler la page.
document.addEventListener("scroll", () => {
    selectPlace(); // Sélectionne la place actuelle en fonction de la position de défilement.
    
    // Affiche la direction du défilement (Nord ou Sud).
    scroll > window.scrollY
        ? (document.querySelector(".direction").innerHTML = "N")
        : (document.querySelector(".direction").innerHTML = "S");
    
    // Met à jour la position de défilement.
    scroll = window.scrollY;
});

// Fonction principale pour explorer les places.
function explore() {
    // Places/sections
    places.sort(compareCoordinates); // Trie les places en fonction de leurs coordonnées.
    console.log(places);
    places.forEach((place) => {
        createSection(place); // Crée une section pour chaque place.
    });
    
    // Boussole
    const compass = document.createElement("div");
    compass.classList.add("direction");
    document.body.appendChild(compass);
}

// Fonction pour créer une section avec une image de fond pour une place donnée.
function createSection(place) {
    let section = document.createElement("section");
    section.style.background = `url('./where-do-we-go_images/${
        place.name.toLowerCase().replaceAll(/ /g, "-").split(",")[0]
    }.jpg')`;
    section.style.backgroundSize = "cover";
    section.style.backgroundPosition = "center";
    section.style.backgroundRepeat = "no-repeat";
    section.style.width = "100%";
    section.style.height = "100vh";
    document.body.appendChild(section);
}

// Fonction pour sélectionner la place en fonction de la position de défilement.
function selectPlace() {
    const sectionHeight = window.innerHeight;
    const scroll = window.scrollY + sectionHeight / 2;
    const sectionIndex = Math.floor(scroll / sectionHeight);
    const place = places[sectionIndex];
    
    // Met à jour le texte et le lien de l'élément <a> affichant la position actuelle.
    location.textContent = `${place.name}\n${place.coordinates}`;
    location.href = `https://www.google.com/maps/place/${urlEncodeCoordinates(
        place.coordinates
    )}/`;
    console.log(
        location.href
            .split("%C2%B0")
            .join("°")
            .split("%22")
            .join('"')
            .split("%20")
            .join(" ")
    );
    location.target = "_blank";
    location.style.color = place.color;
}

// Fonction pour encoder les coordonnées dans un format de lien URL.
function urlEncodeCoordinates(coordinates) {
    return coordinates
        .replaceAll(" ", "%20")
        .replaceAll("°", "%C2%B0")
        .replaceAll('"', "%22");
}

// Fonction de comparaison pour trier les places en fonction de leurs coordonnées.
function compareCoordinates(a, b) {
    // Découpe les coordonnées pour extraire la direction (Nord ou Sud).
    const aDirection = a.coordinates.split(" ")[0].split('"')[1];
    const bDirection = b.coordinates.split(" ")[0].split('"')[1];
    
    // Sépare les coordonnées en degrés, minutes et secondes.
    const aLat = a.coordinates.split(" ")[0];
    const bLat = b.coordinates.split(" ")[0];
    let aLatDeg = parseInt(aLat.split("°")[0]);
    let aLatMin = parseInt(aLat.split("°")[1].split("'")[0]);
    let aLatSec = parseInt(aLat.split("°")[1].split("'")[1].split('"')[0]);
    let bLatDeg = parseInt(bLat.split("°")[0]);
    let bLatMin = parseInt(bLat.split("°")[1].split("'")[0]);
    let bLatSec = parseInt(bLat.split("°")[1].split("'")[1].split('"')[0]);
    
    // Inverse les valeurs si la direction est "Sud".
    if (aDirection === "S") {
        aLatDeg = -aLatDeg;
        aLatMin = -aLatMin;
        aLatSec = -aLatSec;
    }
    if (bDirection === "S") {
        bLatDeg = -bLatDeg;
        bLatMin = -bLatMin;
        bLatSec = -bLatSec;
    }
    
    // Compare les coordonnées en fonction de leurs valeurs.
    if (aLatDeg > bLatDeg) {
        return -1;
    }
    if (aLatDeg < bLatDeg) {
        return 1;
    }
    if (aLatDeg === bLatDeg) {
        if (aLatMin > bLatMin) {
            return -1;
        }
        if (aLatMin < bLatMin) {
            return 1;
        }
        if (aLatMin === bLatMin) {
            if (aLatSec > bLatSec) {
                return 1;
            }
            if (aLatSec < bLatSec) {
                return -1;
            }
            if (aLatSec === bLatSec) {
                return 0;
            }
        }
    }
}

// Exporte la fonction "explore" pour la rendre disponible dans d'autres fichiers.
export { explore };
