#!/usr/bin/env node
import fs from 'fs/promises';

async function encodeFileToBase64(inputFileName, outputFileName) {
  try {
    // Lire le contenu du fichier d'entrée
    const inputData = await fs.readFile(inputFileName);

    // Convertir le contenu en base64
    const base64Data = Buffer.from(inputData).toString('base64');

    // Écrire le résultat dans le fichier de sortie
    await fs.writeFile(outputFileName, base64Data);

    console.log(`Le fichier ${inputFileName} a été encodé en base64 et enregistré dans ${outputFileName}.`);
  } catch (error) {
    console.error(`Une erreur s'est produite : ${error.message}`);
    process.exit(1);
  }
}

async function decodeBase64File(inputFileName, outputFileName) {
  try {
    // Lire le contenu du fichier d'entrée (en base64)
    const base64Data = await fs.readFile(inputFileName, 'utf8');

    // Convertir le contenu base64 en binaire
    const binaryData = Buffer.from(base64Data, 'base64');

    // Écrire le résultat dans le fichier de sortie
    await fs.writeFile(outputFileName, binaryData);

    console.log(`Le fichier ${inputFileName} a été décodé depuis base64 et enregistré dans ${outputFileName}.`);
  } catch (error) {
    console.error(`Une erreur s'est produite : ${error.message}`);
    process.exit(1);
  }
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.error('Usage: tell-it-cypher.mjs <inputFileName> <encode|decode> [outputFileName]');
    process.exit(1);
  }

  const inputFileName = args[0];
  const operation = args[1];

  if (operation === 'encode') {
    const outputFileName = args[2] || 'cypher.txt';
    await encodeFileToBase64(inputFileName, outputFileName);
  } else if (operation === 'decode') {
    const outputFileName = args[2] || 'clear.txt';
    await decodeBase64File(inputFileName, outputFileName);
  } else {
    console.error('Operation should be "encode" or "decode".');
    process.exit(1);
  }
}

main();
