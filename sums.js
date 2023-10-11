function sums(n) {
    if (n < 2) return []; // Si n est inférieur à 2, il n'y a pas de partitions possibles, donc on retourne un tableau vide.
    const partitions = []; // Crée un tableau pour stocker les partitions.
    const current = []; // Crée un tableau pour stocker la partition en cours de construction.

    // Cette fonction récursive génère les partitions.
    function findPartitions(start, remaining) {
        if (remaining === 0) {
            // Si la somme de la partition en cours est égale à n, nous avons trouvé une partition valide.
            partitions.push([...current]); // Ajoute une copie de la partition actuelle au tableau des partitions.
            return;
        }

        for (let i = start; i <= remaining; i++) {
            // Parcourt les nombres de "start" à "remaining".
            current.push(i); // Ajoute le nombre à la partition en cours.
            findPartitions(i, remaining - i); // Appelle récursivement la fonction avec la nouvelle somme restante.
            current.pop(); // Retire le dernier nombre ajouté pour essayer d'autres combinaisons.
        }
    }

    findPartitions(1, n); // Appelle la fonction de génération de partitions avec les valeurs initiales.

    partitions.pop()
    return partitions; // Retourne le tableau des partitions générées.
}


console.log(sums(2))