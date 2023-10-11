import fs from 'fs/promises';
import path from 'path';

async function listVIPGuests(directoryPath) {
  try {
    const files = await fs.readdir(directoryPath);

    const vipGuests = [];

    for (const file of files) {
      if (file.endsWith('.json')) {
        const filePath = path.join(directoryPath, file);
        const data = JSON.parse(await fs.readFile(filePath, 'utf8'));

        if (data.answer === 'yes') {
          const [firstname, lastname] = file.replace('.json', '').split('_');
          vipGuests.push(`${lastname} ${firstname}`);
        }
      }
    }

    vipGuests.sort();
    const vipText = vipGuests.map((guest, index) => `${index + 1}. ${guest}`).join('\n');

    await fs.writeFile('vip.txt', vipText);

    console.log('Liste VIP générée avec succès dans le fichier "vip.txt".');
  } catch (error) {
    console.error('Une erreur s\'est produite :', error);
  }
}

// Récupère le chemin du répertoire à partir des arguments de la ligne de commande
const directoryPath = process.argv[2] || process.cwd(); // Utilise le répertoire courant si aucun argument n'est passé

listVIPGuests(directoryPath);
