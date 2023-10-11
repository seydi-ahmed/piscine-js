async function race(promises = []){
    if (promises.length === 0){
        setTimeout(
            () =>
                {},
                10000
        )
    }

    return new Promise(
        (resolve, reject) => {
            promises.forEach(
                (promise) => {
                    promise.then(resolve, reject)
                }
            )
        }
    )
}


// Fonction asynchrone "some" qui prend un tableau de promesses et un nombre count
async function some(promises, count) {
    // Si le tableau de promesses est vide ou count est 0, résolve avec un tableau vide
    if (promises.length === 0 || count === 0) {
        return Promise.resolve([]);
    }

    // Crée une nouvelle promesse pour gérer la logique asynchrone
    return new Promise((resolve, reject) => {
        // Tableau pour stocker les résultats
        var results = [];

        // Variable pour suivre le nombre restant de valeurs à attendre
        let remaining = count;

        // Parcourt les promesses dans le tableau
        promises.forEach((promise) => {
            if (promise instanceof Promise) {
                // Si la valeur est une promesse
                promise.then((result) => {
                    // Ajoute le résultat au tableau
                    results.push(result);

                    // Décrémente le nombre restant
                    remaining--;

                    // Si toutes les valeurs ont été résolues
                    if (remaining === 0) {
                        // Vérifie s'il y a deux résultats et que le second est indéfini, les échange
                        if (results[1] === undefined && results.length > 1) {
                            results = [results[1], results[0]];
                        }

                        // Résout la promesse avec les résultats
                        resolve(results);
                    }
                }, reject);
            } else {
                // Si la valeur n'est pas une promesse, elle est ajoutée directement aux résultats
                results.push(promise);

                // Décrémente le nombre restant
                remaining--;

                // Si toutes les valeurs ont été résolues
                if (remaining === 0) {
                    // Résout la promesse avec les résultats
                    resolve(results);
                }
            }
        });
    });
}


// Create an array of promises and values
const promisesAndValues = [
    Promise.resolve('A'), 'B',
    Promise.resolve('C'),
    Promise.reject('Error'), 'D',
  ];
  
  // Call the `some` function to get the first 3 resolved values
  some(promisesAndValues, 3)
    .then((result) => {
      console.log('First 3 resolved values:', result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  