// // Fonction "retry" avec des commentaires
// function retry(count, callback) {
//     // Retourne une fonction qui invoque la fonction "callback"
//     return async function (...args) {
//       // Initialisation d'un compteur pour suivre le nombre de tentatives
//       let attempts = 0;
  
//       // Boucle tant que nous n'avons pas atteint le nombre maximum de tentatives
//       while (attempts < count) {
//         try {
//           // Appelle la fonction "callback" avec les arguments fournis
//           const result = await callback(...args);
  
//           // Retourne le résultat de "callback" si tout se passe bien
//           return result;
//         } catch (error) {
//           // Incrémente le compteur de tentatives en cas d'erreur
//           attempts++;
  
//           // Si nous avons atteint le nombre maximum de tentatives, lance une erreur
//           if (attempts >= count) {
//             throw new Error('Nombre maximum de tentatives atteint.');
//           }
//         }
//       }
//     };
//   }
  
//   // Fonction "timeout" avec des commentaires
//   function timeout(delay, callback) {
//     // Retourne une fonction qui invoque la fonction "callback"
//     return async function (...args) {
//         // Crée une promesse qui résoudra ou rejettera après le délai spécifié
//         const timeoutPromise = new Promise(
//             (resolve, reject) => {
//                 setTimeout(
//                     () => {
//                         reject(new Error('timeout')); // Rejette la promesse avec une erreur de "timeout"
//                     },
//                     delay);
//             }
//         );
    
//         try {
//             // Utilise "Promise.race" pour attendre la première promesse résolue
//             const result = await Promise.race([timeoutPromise, callback(...args)]);
    
//             // Retourne le résultat de "callback" si tout se passe bien
//             return result;
//         } catch (error) {
//             // Si "timeoutPromise" se résout en premier, cette partie sera exécutée
//             throw error; // Lance l'erreur de "timeout"
//         }
//     };
// }
  

function retry(count, callback) {
    return async function (...args) {
        try {
            const res = await callback(...args);
            return res;
        } catch (e) {
            if (count > 0) {
                return retry(count - 1, callback)(...args);
            } else {
                throw e;
            }
        }
    };
}

function timeout(delay, callback) {
    return async function (...args) {
        const timeout = new Promise((resolve) =>
            setTimeout(resolve, delay, Error('timeout'))
        );
        const functionCall = new Promise((resolve) =>
            resolve(callback(...args))
        );
        const res = await Promise.race([timeout, functionCall]).then(
            (res) => res
        );
        if (res instanceof Error) {
            throw res;
        }
        return res;
    };
}