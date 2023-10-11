// Fonction asynchrone "series" qui prend un tableau de fonctions asynchrones
async function series(asyncFunctions) {
    // Crée un tableau pour stocker les résultats dans l'ordre
    const results = [];

    // Parcourt le tableau de fonctions asynchrones
    for (const func of asyncFunctions) {
        // Attend l'exécution de la fonction asynchrone et stocke le résultat
        const result = await func();
        
        // Ajoute le résultat au tableau des résultats
        results.push(result);
    }

    // Retourne le tableau des résultats dans l'ordre
    return results;
}


// Fonction asynchrone qui simule une tâche avec un délai
async function task1() {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Attend 1 seconde
    return 'Task 1 Done';
}

// Fonction asynchrone qui simule une autre tâche avec un délai différent
async function task2() {
    await new Promise((resolve) => setTimeout(resolve, 500)); // Attend 0.5 seconde
    return 'Task 2 Done';
}

// Fonction asynchrone qui simule une troisième tâche
async function task3() {
    return 'Task 3 Done';
}

// Appel de la fonction "series" avec un tableau de fonctions asynchrones
const asyncFunctions = [task1, task2, task3];
series(asyncFunctions)
    .then((results) => {
        console.log(results);
        // Output: ['Task 1 Done', 'Task 2 Done', 'Task 3 Done']
    })
    .catch((error) => {
        console.error(error);
    });
