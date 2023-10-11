// Fonction asynchrone "isWinner" qui accepte le nom d'un pays
async function isWinner(countryName) {
    try {
        // Utilise la fonction asynchrone "db.getWinner" pour obtenir les données du pays
        countryName = await db.getWinner(countryName);

        // Vérifie si le pays ne se trouve pas sur le continent européen
        if (countryName.continent !== 'Europe') {
            return `${countryName.name} is not what we are looking for because of the continent`;
        }

        // Utilise la fonction asynchrone "db.getResults" pour obtenir les résultats du pays
        let results = await db.getResults(countryName.id);

        // Vérifie si la réponse est une erreur indiquant que les résultats n'ont pas été trouvés
        if (results === Error('Results Not Found')) {
            return `${countryName.name} never was a winner`;
        }

        // Vérifie si le pays a gagné la Coupe du Monde moins de 3 fois
        if (results.length < 3) {
            return `${countryName.name} is not what we are looking for because of the number of times it was champion`;
        }

        // Construit la phrase de réussite avec les années et les résultats
        return (
            `${countryName.name} won the FIFA World Cup in ` +
            results.map((result) => result.year).join(', ') +
            ' winning by ' +
            results.map((result) => result.score).join(', ')
        );
    } catch (e) {
        // Gère les erreurs potentielles, notamment celle indiquant que le pays n'a pas été trouvé
        if (e.message === 'Country Not Found') {
            return `${countryName} never was a winner`;
        }
    }
}

/*

const db = (() => {
    //countries that won the FIFA World Cup
    const countries = [
      { id: 1, name: 'Brazil', continent: 'South America' },
      { id: 2, name: 'Germany', continent: 'Europe' },
      { id: 3, name: 'Italy', continent: 'Europe' },
      { id: 4, name: 'Argentina', continent: 'South America' },
      { id: 5, name: 'France', continent: 'Europe' },
      { id: 6, name: 'Uruguay', continent: 'South America' },
      { id: 7, name: 'England', continent: 'Europe' },
      { id: 8, name: 'Spain', continent: 'Europe' },
    ]
  
    //Information about the wins
    const results = [
      { id: 1, countryId: 6, year: 1930, score: '4-2' },
      { id: 2, countryId: 3, year: 1934, score: '2-1' },
      { id: 3, countryId: 3, year: 1938, score: '4-2' },
      { id: 4, countryId: 6, year: 1950, score: '2-1' },
      { id: 5, countryId: 2, year: 1954, score: '3-2' },
      { id: 6, countryId: 1, year: 1958, score: '5-2' },
      { id: 7, countryId: 1, year: 1962, score: '3-1' },
      { id: 8, countryId: 7, year: 1966, score: '4-2' },
      { id: 9, countryId: 1, year: 1970, score: '4-1' },
      { id: 10, countryId: 2, year: 1974, score: '2-1' },
      { id: 11, countryId: 4, year: 1978, score: '3-1' },
      { id: 12, countryId: 3, year: 1982, score: '3-1' },
      { id: 13, countryId: 4, year: 1986, score: '3-2' },
      { id: 14, countryId: 2, year: 1990, score: '1-0' },
      { id: 15, countryId: 1, year: 1994, score: '3-2p' },
      { id: 16, countryId: 5, year: 1998, score: '3-0' },
      { id: 17, countryId: 1, year: 2002, score: '2-0' },
      { id: 18, countryId: 3, year: 2006, score: '5-3p' },
      { id: 19, countryId: 8, year: 2010, score: '1-0' },
      { id: 20, countryId: 2, year: 2014, score: '1-0' },
      { id: 21, countryId: 5, year: 2018, score: '4-2' },
    ]
  
    return {
      //returns the information of the country
      getWinner: async (countryName) => {
        const match = countries.find((country) => country.name === countryName)
        if (!match) throw Error('Country Not Found')
        return match
      },
      //returns the information of the wins of that country
      getResults: async (countryId) => {
        const match = results.filter((result) => result.countryId === countryId)
        if (!match.length) throw Error('Results Not Found')
        return match
      },
      addCountry: (country) => countries.push(country),
      addResults: (result) => results.push(result),
    }
  })()
  

*/


// Utilisation de la fonction isWinner avec le nom du pays "France"
isWinner('Spain')
    .then((result) => {
        console.log(result); // Affiche le résultat de la fonction
    })
    .catch((error) => {
        console.error(error); // En cas d'erreur, affiche l'erreur
    });
