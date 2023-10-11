#!/usr/bin/env node

import fs from 'fs/promises';

async function parseGuestDirectory(directoryPath) {
  try {
    const guests = await fs.readdir(directoryPath);
    const vipGuests = [];

    for (const guest of guests) {
      const guestResponse = await fs.readFile(`${directoryPath}/${guest}`, 'utf-8');
      const responseObj = JSON.parse(guestResponse);

      if (responseObj.answer === 'yes') {
        vipGuests.push(responseObj);
      }
    }

    return vipGuests;
  } catch (error) {
    console.error(`Error parsing guest directory: ${error.message}`);
    process.exit(1);
  }
}

function calculateQuantities(vipGuests) {
  const drinkCategories = ['Beers', 'Water', 'Wine', 'Softs'];
  const foodCategories = ['Veggies', 'Vegans', 'Carnivores', 'Fish lovers', 'Omnivores'];

  const quantities = {
    '6-packs-beers': 0,
    'wine-bottles': 0,
    'water-bottles': 0,
    'soft-bottles': 0,
    eggplants: 0,
    mushrooms: 0,
    hummus: 0,
    courgettes: 0,
    burgers: 0,
    sardines: 0,
    kebabs: 0,
    potatoes: 0,
  };

  vipGuests.forEach((guest) => {
    if (guest.answer === 'yes') {
      drinkCategories.forEach((category) => {
        if (guest.drink && guest.drink.toLowerCase() === category.toLowerCase()) {
          quantities[`${category.toLowerCase()}-bottles`] += 1;
        }
      });

      foodCategories.forEach((category) => {
        if (guest.food && guest.food.toLowerCase() === category.toLowerCase()) {
          quantities[category.toLowerCase()] += 1;
        }
      });
    }
  });

  quantities['potatoes'] = quantities['eggplants'] + quantities['mushrooms'] + quantities['hummus'] + quantities['courgettes'];

  return quantities;
}


async function updateShoppingList(shoppingListFile, quantities) {
  try {
    let shoppingList = {};

    // Check if the shopping list file exists, and if so, load its content
    try {
      const data = await fs.readFile(shoppingListFile, 'utf-8');
      shoppingList = JSON.parse(data);
    } catch (error) {
      // If the file doesn't exist, shoppingList remains an empty object
    }

    // Update the shopping list with calculated quantities
    for (const key in quantities) {
      if (quantities[key] > 0) {
        shoppingList[key] = quantities[key];
      }
    }

    // Write the updated shopping list to the file
    await fs.writeFile(shoppingListFile, JSON.stringify(shoppingList, null, 2));
    console.log('Shopping list updated successfully!');
  } catch (error) {
    console.error(`Error updating shopping list: ${error.message}`);
    process.exit(1);
  }
}

async function main() {
  if (process.argv.length !== 4) {
    console.error('Usage: happiness-manager.mjs <guestDirectory> <shoppingList.json>');
    process.exit(1);
  }

  const guestDirectory = process.argv[2];
  const shoppingListFile = process.argv[3];

  const vipGuests = await parseGuestDirectory(guestDirectory);
  if (vipGuests.length === 0) {
    console.log('No one is coming.');
    return;
  }

  const quantities = calculateQuantities(vipGuests);
  await updateShoppingList(shoppingListFile, quantities);
}

main();
