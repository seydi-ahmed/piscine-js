#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';

// Fonction pour compter les entrées dans un répertoire
async function countEntriesInDirectory(directoryPath) {
  try {
    const entries = await fs.readdir(directoryPath);
    return entries.length;
  } catch (error) {
    console.error(`Erreur lors de la lecture du répertoire : ${error.message}`);
    process.exit(1);
  }
}

// Récupère le chemin du répertoire à partir des arguments de la ligne de commande
const directoryPath = process.argv[2] || process.cwd(); // Utilise le répertoire courant si aucun argument n'est passé

// Appelle la fonction pour compter les entrées dans le répertoire
countEntriesInDirectory(directoryPath)
  .then((count) => {
    console.log(`${count}`);
  })
  .catch((error) => {
    console.error(`${error.message}`);
    process.exit(1);
  });
