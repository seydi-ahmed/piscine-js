function dayOfTheYear(date) {
    let days = 1

    // Vérifie si la date est le 1er janvier (premier jour de l'année)
    if (date.getDate() === 1 && date.getMonth() === 0) {
        return days // Si c'est le 1er janvier, retourne 1 (premier jour de l'année)
    }

    while (true) {
        date.setDate(date.getDate() - 1)
        days++

        // Vérifie à chaque itération si la date est devenue le 1er janvier
        if (date.getDate() === 1 && date.getMonth() === 0) {
            return days // Si c'est le 1er janvier, retourne le nombre de jours accumulés
        }
    }
}