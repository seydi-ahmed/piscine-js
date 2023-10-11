// Fonction asynchrone "all" qui prend un objet contenant des promesses
async function all(obj) {
    // Crée un objet vide pour stocker les résultats
    var results = {};
    
    // Si l'objet d'entrée est vide, retourne immédiatement un objet vide
    if (Object.keys(obj).length === 0) return {};
    
    // Parcourt toutes les clés de l'objet d'entrée
    for (let key in obj) {
        // Attend la résolution de la promesse associée à la clé et assigne la valeur au résultat
        results[key] = await obj[key];
    }
    
    // Retourne l'objet résultant avec les clés et les valeurs des promesses résolues
    return results;
}
