#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';

// Fonction pour lister les noms des invités dans le répertoire
async function listGuestNames(directoryPath) {
  try {
    // Liste les fichiers dans le répertoire
    const files = await fs.readdir(directoryPath);

    // Trie les noms de fichiers par ordre alphabétique
    const sortedFiles = files.sort();

    // Affiche les noms des invités dans le format demandé
    sortedFiles.forEach((filename, index) => {
      const [lastname, firstname] = filename.split('.');
      console.log(`${index + 1}. ${lastname} ${firstname}`);
    });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

// Récupère le chemin du répertoire à partir des arguments de la ligne de commande
const directoryPath = process.argv[2] || process.cwd(); // Utilise le répertoire courant si aucun argument n'est passé

// Appelle la fonction pour lister les noms des invités dans le répertoire
listGuestNames(directoryPath);
