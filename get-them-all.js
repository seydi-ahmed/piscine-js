// Sélectionne tous les liens (a) et tous les éléments span dans le corps du document.
function getArchitects() {
    return [
        document.querySelectorAll("body a"),
        document.querySelectorAll("body span"),
    ]
}

// Sélectionne tous les liens (a) avec la classe "classical" et tous les liens sans la classe "classical".
function getClassical() {
    return [
        document.querySelectorAll("a.classical"),
        document.querySelectorAll("a:not(.classical)"),
    ]
}

// Sélectionne tous les liens (a) avec les classes "classical" et "active", et tous les liens (a) avec la classe "classical" mais sans la classe "active".
function getActive() {
    return [
        document.querySelectorAll("a.classical.active"),
        document.querySelectorAll("a.classical:not(.active)"),
    ]
}

// Sélectionne l'élément avec l'ID "BonannoPisano" et tous les liens (a) avec les classes "classical" et "active".
function getBonannoPisano() {
    return [
        document.getElementById("BonannoPisano"),
        document.querySelectorAll("a.classical.active"),
    ]
}

// Exporte ces fonctions pour les utiliser ailleurs dans votre code.
export { getArchitects, getClassical, getActive, getBonannoPisano }
