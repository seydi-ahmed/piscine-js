// Fonction qui combine deux objets en un seul
function defaultCurry(obj1) {
    return function (obj2) {
        let res = {};
        for (let key in obj1) {
            res[key] = obj1[key]; // Copie les clés et valeurs de obj1
        }
        for (let key in obj2) {
            res[key] = obj2[key]; // Ajoute ou met à jour les clés et valeurs de obj2
        }
        return res; // Retourne l'objet résultant
    };
}

// Fonction qui applique une fonction de transformation à chaque entrée d'un objet
function mapCurry(func) {
    return function (obj2) {
        let res = {};
        for (let key in obj2) {
            const [newKey, newValue] = func([key, obj2[key]]);
            res[newKey] = newValue; // Applique la fonction func à chaque entrée et stocke les résultats dans un nouvel objet
        }
        return res; // Retourne l'objet résultant
    };
}

// Fonction qui réduit un objet à une seule valeur en utilisant une fonction réductrice et une valeur initiale
function reduceCurry(obj1) {
    return function (obj2, obj3) {
        let res = obj3; // Initialise le résultat avec obj3
        for (let key in obj2) {
            res = obj1(res, [key, obj2[key]]); // Applique la fonction réductrice obj1 itérativement
        }
        return res; // Retourne la valeur réduite finale
    };
}

// Fonction qui filtre les entrées d'un objet en utilisant une fonction de filtre
function filterCurry(obj1) {
    return function (obj2) {
        let res = {};
        for (let key in obj2) {
            if (obj1([key, obj2[key]])) { // Applique la fonction de filtre obj1 à chaque entrée
                res[key] = obj2[key]; // Ajoute les entrées qui passent le filtre à l'objet résultant
            }
        }
        return res; // Retourne l'objet résultant
    };
}

// Fonction qui réduit un objet en calculant le score total pour les utilisateurs de la Force
function reduceScore(obj1, obj2) {
    return reduceCurry((acc, [, v]) =>
        v.isForceUser ? acc + v.pilotingScore + v.shootingScore : acc
    )(obj1, obj2);
}

// Fonction qui filtre les utilisateurs de la Force avec un score de tir supérieur ou égal à 80
function filterForce(obj) {
    return filterCurry(([, v]) => v.isForceUser && v.shootingScore >= 80)(obj);
}

// Fonction qui calcule le score moyen (moyenne des scores de pilotage et de tir) pour chaque entrée
function mapAverage(obj) {
    let avgScores = mapCurry(([k, v]) => [
        k,
        (v.pilotingScore + v.shootingScore) / 2,
    ])(obj);
    for (let key in avgScores) {
        obj[key].averageScore = avgScores[key]; // Ajoute la propriété "averageScore" à chaque entrée
    }
    return obj; // Retourne l'objet modifié
}


// Exemple d'objet représentant des utilisateurs avec des scores de pilotage, de tir et des informations sur la Force
const users = {
    "user1": { pilotingScore: 90, shootingScore: 85, isForceUser: true },
    "user2": { pilotingScore: 75, shootingScore: 92, isForceUser: false },
    "user3": { pilotingScore: 88, shootingScore: 78, isForceUser: true },
};

// Exemple d'utilisation de ces fonctions
const combinedUsers = defaultCurry(users)({
    "user4": { pilotingScore: 95, shootingScore: 88, isForceUser: false },
});

const filteredForceUsers = filterForce(users);

const reducedTotalScore = reduceScore(users, 0);

const usersWithAverageScore = mapAverage(users);

console.log("Combined Users:", combinedUsers);
console.log("Filtered Force Users:", filteredForceUsers);
console.log("Reduced Total Score:", reducedTotalScore);
console.log("Users with Average Score:", usersWithAverageScore);
