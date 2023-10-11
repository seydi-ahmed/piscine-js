#!/usr/bin/env node

// Vérifie si un argument a été passé en ligne de commande
if (process.argv.length <= 2) {
    console.error('Veuillez fournir un argument.');
    process.exit(1);
}
  
  // Récupère le premier argument de la ligne de commande
  const input = process.argv[2];
  
  // Fonction pour découper un mot en deux parties et inverser les syllabes
  function makeWordVeryDisco(word) {
    const length = word.length;
    const middle = Math.ceil(length / 2);
    const firstHalf = word.slice(0, middle);
    const secondHalf = word.slice(middle);
    return secondHalf + firstHalf;
  }
  
  // Fonction pour traiter une phrase et rendre chaque mot "very disco"
  function makeSentenceVeryDisco(sentence) {
    const words = sentence.split(' ');
    const veryDiscoWords = words.map((word) => makeWordVeryDisco(word));
    return veryDiscoWords.join(' ');
  }
  
  // Vérifie si l'entrée est une phrase (contient des espaces)
  if (input.includes(' ')) {
    const result = makeSentenceVeryDisco(input);
    console.log(result);
  } else {
    // Si l'entrée est un mot unique
    const result = makeWordVeryDisco(input);
    console.log(result);
  }
  