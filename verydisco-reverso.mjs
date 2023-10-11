#!/usr/bin/env node

import fs from 'fs';

// Vérifie si un argument de nom de fichier a été passé en ligne de commande
if (process.argv.length <= 2) {
  console.error('Veuillez fournir le nom d\'un fichier en tant qu\'argument.');
  process.exit(1);
}

// Récupère le nom du fichier à décrypter depuis les arguments de la ligne de commande
const fileName = process.argv[2];

// Fonction pour inverser le mode "very disco" d'un mot
function reverseWordVeryDisco(word) {
  const length = word.length;
  const middle = Math.floor(length / 2);
  const firstHalf = word.slice(0, middle);
  const secondHalf = word.slice(middle);
  return secondHalf + firstHalf;
}

// Fonction pour décrypter une phrase inversée
function decipherSentence(sentence) {
  const words = sentence.split(' ');
  const reversedWords = words.map((word) => reverseWordVeryDisco(word));
  return reversedWords.join(' ');
}

// Lit le contenu du fichier spécifié
fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.error(`Erreur lors de la lecture du fichier ${fileName} :`, err);
    process.exit(1);
  }

  // Décrypte le contenu inversé du fichier
  const decryptedContent = decipherSentence(data);

  // Affiche le résultat dans la console
  console.log(decryptedContent);
});
