#!/usr/bin/env node
// Cette ligne permet d'exécuter le script en tant que fichier exécutable Node.js

import fs from 'fs/promises';
// Importe le module fs/promises pour gérer les opérations de lecture/écriture de fichiers de manière asynchrone.

async function loadShoppingList(fileName) {
  try {
    const data = await fs.readFile(fileName, 'utf-8');
    // Lit le contenu du fichier spécifié en tant qu'UTF-8 et stocke le résultat dans la variable 'data'.
    return JSON.parse(data);
    // Parse le contenu JSON du fichier en JavaScript et retourne l'objet correspondant.
  } catch (error) {
    if (error.code === 'ENOENT') {
      return {};
      // Si le fichier n'existe pas, retourne un objet vide.
    }
    console.error(`Une erreur s'est produite lors du chargement de la liste : ${error.message}`);
    process.exit(1);
    // En cas d'erreur, affiche un message d'erreur et quitte le processus avec le code d'erreur 1.
  }
}

async function saveShoppingList(fileName, list) {
  try {
    await fs.writeFile(fileName, JSON.stringify(list, null, 2));
    // Écrit le contenu de l'objet 'list' dans le fichier spécifié au format JSON avec une indentation de 2 espaces.
  } catch (error) {
    console.error(`Une erreur s'est produite lors de l'enregistrement de la liste : ${error.message}`);
    process.exit(1);
  }
}

async function createShoppingList(fileName) {
  const list = {};
  // Crée un objet vide pour représenter la liste de courses.
  await saveShoppingList(fileName, list);
  // Appelle la fonction 'saveShoppingList' pour enregistrer la liste vide dans le fichier spécifié.
  console.log(`La liste de courses a été créée dans le fichier ${fileName}.`);
}

async function deleteShoppingList(fileName) {
  try {
    await fs.unlink(fileName);
    // Supprime le fichier spécifié.
    console.log(`La liste de courses dans le fichier ${fileName} a été supprimée.`);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(`Le fichier ${fileName} n'existe pas.`);
    } else {
      console.error(`Une erreur s'est produite lors de la suppression du fichier : ${error.message}`);
    }
    process.exit(1);
  }
}

async function addShoppingItem(fileName, item, quantity) {
  const shoppingList = await loadShoppingList(fileName);

  if (quantity == null || isNaN(quantity)) {
    quantity = 1;
  }

  if (quantity < 0) {
    // Si la quantité est négative, il faut la traiter comme une suppression.
    await removeShoppingItem(fileName, item, Math.abs(quantity));
    return shoppingList;
  }

  shoppingList[item] = (shoppingList[item] || 0) + quantity;
  await saveShoppingList(fileName, shoppingList);
  console.log(`"${item}" a été ajouté à la liste de courses.`);
  return shoppingList;
}


async function removeShoppingItem(fileName, item, quantity) {
  const shoppingList = await loadShoppingList(fileName);

  if (quantity == null || isNaN(quantity)) {
    quantity = 1;
  }

  if (quantity < 0) {
    await addShoppingItem(fileName, item, Math.abs(quantity));
    return shoppingList
  } else {
    if (shoppingList[item] <= quantity) {
      delete shoppingList[item];
    } else {
      shoppingList[item] -= quantity;
    }
  }

  if (shoppingList[item] === undefined) {
    console.log(`"${item}" n'est pas dans la liste.`);
    //return {};
  }

  await saveShoppingList(fileName, shoppingList);
  console.log(`"${item}" a été modifié dans la liste de courses.`);
  return shoppingList;
}


async function listShoppingItems(fileName) {
  const shoppingList = await loadShoppingList(fileName);
  // Charge la liste de courses actuelle à partir du fichier.
  if (Object.keys(shoppingList).length === 0) {
    console.log('Liste vide.');
    return;
    // Si la liste est vide, affiche un message et quitte la fonction.
  }

  let index = 1;
  for (const item in shoppingList) {
    console.log(`- ${item} (${shoppingList[item]})`);
    // Affiche chaque élément de la liste avec sa quantité.
    index++;
  }
}

async function printHelp() {
  console.log('Commandes :');
  console.log('- create: prend un nom de fichier en argument et le crée (doit avoir l\'extension `.json` spécifiée)');
  console.log('- delete: prend un nom de fichier en argument et le supprime');
  console.log('- add: ajoute un nouvel élément à la liste dans le fichier');
  console.log('  - Ce ligne de commande doit prendre un troisième argument qui est le nom de la nouvelle entrée dans votre liste.');
  console.log('  - Si aucun troisième argument n\'est passé, la console doit afficher cette erreur : No elem specified.');
  console.log('  - Cette ligne de commande peut prendre un quatrième argument qui est le nombre d\'éléments que vous souhaitez pour cette nouvelle entrée.');
  console.log('  - Si aucun quatrième argument n\'est spécifié ou si le quatrième argument est NaN, 1 sera la valeur par défaut.');
  console.log('  - Si l\'entrée existe déjà, elle ajoutera 1 ou plus à la valeur d\'origine.');
  console.log('  - L\'utilisation d\'un nombre négatif doit se comporter comme la commande "rm".');
  console.log('- rm: supprime un élément de la liste dans le fichier');
  console.log('  - Cette ligne de commande doit prendre un troisième argument qui est le nom de l\'entrée à supprimer de la liste.');
  console.log('  - Si aucun troisième argument n\'est passé, la console doit afficher cette erreur : No elem specified.');
  console.log('  - Si l\'entrée n\'existe pas, rien ne se passe.');
  console.log('  - Cette ligne de commande peut prendre un quatrième argument qui est le nombre d\'éléments que vous souhaitez supprimer de cette entrée.');
  console.log('  - S\'il n\'y a pas de quatrième argument : l\'entrée est supprimée.');
  console.log('  - Si le quatrième argument est NaN, rien n\'est supprimé et la console doit afficher cette erreur : Demande inattendue : rien n\'a été supprimé.');
  console.log('  - Si le quatrième argument est un nombre, il soustraira ce nombre de la valeur d\'origine (si la nouvelle valeur est <= 0, l\'entrée sera supprimée).');
  console.log('  - L\'utilisation d\'un nombre négatif doit se comporter comme la commande "add".');
  console.log('- help: affiche toutes les commandes disponibles dans la console.');
  console.log('- ls ou sans arguments supplémentaires: affiche la liste dans la console.');
  console.log('  - Chaque ligne est formatée comme suit : - élément (nombre)');
  console.log('  - Si la liste est vide, ce message doit apparaître dans la console : Empty list.');
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length < 2 || args[0].endsWith('.json') === false) {
    console.error('Usage: personal-shopper.mjs <inputFileName> <create|delete|add|rm|help|ls> [itemName] [quantity]');
    process.exit(1);
    // Affiche un message d'erreur et quitte le processus si les arguments sont incorrects.
  }

  const fileName = args[0];
  const operation = args[1];

  switch (operation) {
    case 'create':
      await createShoppingList(fileName);
      break;
    case 'delete':
      await deleteShoppingList(fileName);
      break;
      case 'add':
        if (args.length < 3) {
          console.error('No elem specified.');
          // Affiche un message d'erreur si l'argument "elem" est manquant.
          break; // Ajoutez cette ligne pour sortir du cas "add" sans exécuter le reste du code.
        }
        const item = args[2];
        const quantity = args[3] ? Number(args[3]) || 1 : 1;
        await addShoppingItem(fileName, item, quantity);
        break;          
      case 'rm':
        if (args.length < 3) {
          console.error("No elem specified.");
          break
          //process.exit(1);
        }
        const itemToRemove = args[2];
        const quantityToRemove = args[3] ? Number(args[3]) : undefined;
        await removeShoppingItem(fileName, itemToRemove, quantityToRemove);
        break;        
    case 'help':
      printHelp();
      break;
    case 'ls':
      await listShoppingItems(fileName);
      break;
    default:
      console.error('Invalid operation. Use "create", "delete", "add", "rm", "help", or "ls".');
      process.exit(1);
      // Affiche un message d'erreur et quitte le processus si l'opération est invalide.
  }
}

main();
// Appelle la fonction principale pour exécuter le script.
