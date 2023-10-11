// Fonction asynchrone "getJSON" avec des commentaires
async function getJSON(path, params = {}) {
    // Construit l'URL en ajoutant les paramètres de requête à la fin du chemin
    const url =
        path +
        '?' +
        Object.keys(params)
            .map(
                (key) => {
                    // Remplace les espaces par des '+' dans la clé et la valeur du paramètre
                    return (
                        key.replace(' ', '+') +
                        '=' +
                        params[key].toString().replace(' ', '+')
                    );
                }
            )
            .join('&'); // Joindre les paramètres avec "&" pour former l'URL finale

    // Effectue une requête HTTP en utilisant l'URL construite
    const res = await fetch(url).then(
        (response) => {
            if (response.ok) {
                // Si la réponse est OK (statut 200-299), analyse la réponse JSON
                return response.json();
            } else {
                // Si la réponse n'est pas OK, lance une erreur avec le texte de statut de la réponse
                throw new Error(response.statusText);
            }
        }
    );

    // Vérifie si la réponse JSON contient une propriété "error"
    if (res.error) {
        // Si une propriété "error" est présente, lance une erreur avec le message d'erreur
        throw new Error(res.error);
    }

    // Si tout s'est bien passé, retourne la propriété "data" de la réponse JSON
    return res.data;
}

  
  

// Exemple d'utilisation de la fonction getJSON

// Définition de l'URL de l'API
const apiUrl = 'https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json';

// Paramètres de requête (optionnels)
const queryParams = {
  param1: 'valeur 1',
  param2: 'valeur 2',
};

// Appel à la fonction getJSON pour récupérer les données JSON
getJSON(apiUrl, queryParams)
  .then((data) => {
    // Réussite : les données JSON ont été récupérées avec succès
    console.log('Données JSON récupérées :', data);
  })
  .catch((error) => {
    // Erreur : une erreur s'est produite lors de la récupération des données
    console.error('Erreur lors de la récupération des données JSON :', error.message);
  });
