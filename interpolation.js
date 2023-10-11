function interpolation({ step = 0, start = 0, end = 0, callback = () => {}, duration = 0,} = {}) {
    // Calcul du delta entre le début et la fin divisé par le nombre d'étapes
    const delta = (end - start) / step;

    // Initialisation des variables
    let current = start;
    let i = 0;

    // Configuration de l'intervalle pour appeler le callback à des intervalles réguliers
    const timer = setInterval(
        () => {
            if (i < step) {
                // Appel du callback avec le point d'interpolation actuel [x, y]
                //callback([current, current + delta]);
                callback([current, (duration / step) * (i + 1)]);

                // Mise à jour du point courant et de l'index
                current += delta;
                i++;
            } else {
                // Si nous avons atteint le nombre d'étapes, arrêtez l'intervalle
                clearInterval(timer);
            }
        }, 
        duration / step
    ); // Le délai entre les appels est calculé en fonction de la durée totale et du nombre d'étapes
}
