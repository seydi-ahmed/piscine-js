// Fonction pour effectuer une copie profonde d'un objet ou d'un tableau
function deepCopy(input) {
    if (Array.isArray(input)) { // Si l'entrée est un tableau
        var output = []; // Crée un tableau de sortie
        for (var i = 0; i < input.length; i++) {
            output[i] = deepCopy(input[i]); // Effectue une copie profonde récursive des éléments du tableau
        }
        return output; // Retourne le tableau copié en profondeur
    } else if (isDefenitelyAnObject(input)) { // Si l'entrée est un objet
        var output = {}; // Crée un objet de sortie
        for (var key in input) {
            output[key] = deepCopy(input[key]); // Effectue une copie profonde récursive des propriétés de l'objet
        }
        return output; // Retourne l'objet copié en profondeur
    } else {
        return input; // Si l'entrée est de type simple, retourne-la telle quelle
    }
}

// Fonction d'assistance pour vérifier si une valeur est définitivement un objet (et non une fonction, un tableau, null ou une instance de RegExp)
function isDefenitelyAnObject(input) {
    return (
        typeof input === "object" && // Vérifie que l'entrée est de type "object"
        !(typeof input === "function") && // Exclut les fonctions
        !Array.isArray(input) && // Exclut les tableaux
        input !== null && // Exclut les valeurs nulles
        !(input instanceof RegExp) // Exclut les instances de RegExp
    );
}

// Exemple d'objet complexe à copier en profondeur
const originalObject = {
    name: "John",
    age: 30,
    hobbies: ["Reading", "Gaming"],
    address: {
        street: "123 Main St",
        city: "Anytown",
    },
};

// Effectuer une copie en profondeur de l'objet
const copiedObject = deepCopy(originalObject);

// Modifier la copie
copiedObject.name = "Alice";
copiedObject.hobbies.push("Hiking");
copiedObject.address.city = "New City";

console.log("Original Object:", originalObject);
console.log("Copied Object:", copiedObject);
