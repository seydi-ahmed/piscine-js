// Objets d'assistance pour vérifier le type de valeurs
var is = {};

// Vérifie si une valeur est un tableau
is.arr = (n) => Array.isArray(n);

// Vérifie si une valeur est un objet (et non une fonction, un tableau, null ou une instance de RegExp)
is.obj = (n) =>
    typeof n === 'object' &&
    !is.fun(n) &&
    !is.arr(n) &&
    n !== null &&
    !(n instanceof RegExp);

// Vérifie si une valeur est une fonction
is.fun = (n) => typeof n === 'function';

// Fonction "replica" pour fusionner plusieurs objets en un seul
function replica(target, ...sources) {
    // Parcours de chaque source passée en argument
    sources.forEach((source) => {
        // Parcours de chaque clé de la source
        Object.keys(source).forEach((key) => {
            if (is.obj(source[key])) {
                // Si la valeur est un objet, vérifie si elle existe dans la cible
                // ou si elle est un objet, sinon crée un objet vide
                if (!target.hasOwnProperty(key) || !is.obj(target[key])) {
                    target[key] = {};
                }
                // Effectue une récursion si la valeur est un objet
                replica(target[key], source[key]);
            } else {
                // Si la valeur n'est pas un objet, assigne la valeur à la clé correspondante
                target[key] = source[key];
            }
        });
    });
    // Renvoie l'objet cible fusionné
    return target;
}



// Exemple d'objets à fusionner
const obj1 = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
    },
};

const obj2 = {
    name: 'Alice',
    hobbies: ['Reading', 'Gaming'],
};

// Fusionner les objets en un seul
const mergedObject = replica({}, obj1, obj2);

console.log(mergedObject);
