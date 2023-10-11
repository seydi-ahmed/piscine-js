#!/usr/bin/env node
import fs from 'fs';
//const fs = require('fs');

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

  // Écrit le résultat dans le fichier verydisco-forever.txt
  fs.writeFile('verydisco-forever.txt', result, (err) => {
    if (err) {
      console.error('Erreur lors de l\'écriture dans le fichier :', err);
    } else {
      console.log('Résultat écrit dans verydisco-forever.txt.');
    }
  });
} else {
  // Si l'entrée est un mot unique
  const result = makeWordVeryDisco(input);

  // Écrit le résultat dans le fichier verydisco-forever.txt
  fs.writeFile('verydisco-forever.txt', result, (err) => {
    if (err) {
      console.error('Erreur lors de l\'écriture dans le fichier :', err);
    } else {
      console.log('Résultat écrit dans verydisco-forever.txt.');
    }
  });
}
