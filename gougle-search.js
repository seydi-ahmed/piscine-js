// Fonction asynchrone "queryServers" qui prend le nom du serveur et la requête utilisateur
async function queryServers(serverName, q) {
    // Construit l'URL principale en utilisant le nom du serveur et la requête
    var url = '/' + serverName + '?q=' + q;
    
    // Construit l'URL de secours (backup) en ajoutant "_backup" au nom du serveur
    var backupUrl = '/' + serverName + '_backup?q=' + q;

    // Lance deux requêtes asynchrones pour obtenir les données des serveurs principal et de secours
    const req1 = getJSON(url);       // Requête vers le serveur principal
    const req2 = getJSON(backupUrl); // Requête vers le serveur de secours

    // Utilise Promise.race pour obtenir la première réponse (la plus rapide)
    const res = await Promise.race([req1, req2]);

    // Retourne la réponse obtenue (soit du serveur principal, soit du serveur de secours)
    return res;
}

// Fonction asynchrone "gougleSearch" qui prend une requête utilisateur
async function gougleSearch(q) {
    // Crée une promesse de timeout de 80 millisecondes
    var timeout = new Promise((resolve) =>
        setTimeout(resolve, 80, Error('timeout'))
    );

    // Lance trois requêtes simultanément vers les serveurs "web", "image" et "video"
    var web = queryServers('web', q);       // Requête vers le serveur "web"
    var image = queryServers('image', q);   // Requête vers le serveur "image"
    var video = queryServers('video', q);   // Requête vers le serveur "video"

    // Utilise Promise.race pour obtenir la première réponse (ou le timeout)
    const res = await Promise.race([timeout, Promise.all([web, image, video])]);

    // Vérifie si la réponse est une instance de l'erreur "timeout"
    if (res instanceof Error) {
        // Si c'est le cas, lance l'erreur "timeout"
        throw res;
    }

    // Si tout s'est bien passé, retourne un objet contenant les réponses des serveurs
    return { image: res[1], video: res[2], web: res[0] };
}
