// La fonction 'flags' prend un objet 'obj' en entrée, qui est supposé représenter des options de ligne de commande.

function flags(obj) {
    var res = { alias: { h: 'help' } }; // Crée un objet 'res' avec une alias par défaut pour 'help' (h: 'help').

    // Si l'objet 'obj' est vide, retourne l'objet 'res' par défaut.
    if (obj.length === 0) return res;

    // Sauvegarde la valeur de la propriété 'help' de 'obj' dans la variable 'help'.
    let help = obj.help;

    // Supprime la propriété 'help' de 'obj'.
    delete obj.help;

    // Parcourt chaque clé (option) dans 'obj'.
    for (let key in obj) {
        // Crée un alias pour chaque option en utilisant la première lettre de la clé.
        res.alias[key[0]] = key;
    }

    // Si la propriété 'help' existe dans 'obj', crée une description pour chaque option en utilisant 'help'.
    if (help) {
        res.description = help.map((key) => {
            let desc = obj[key];
            return `-${key[0]}, --${key}: ${desc}`;
        });
    } else {
        // Sinon, crée une description pour chaque option en utilisant les clés de 'obj'.
        res.description = Object.keys(obj).map((key) => {
            let desc = obj[key];
            return `-${key[0]}, --${key}: ${desc}`;
        });
    }

    // Formate la description en une seule chaîne de caractères ou la laisse vide si elle est vide.
    res.description.length === 0
        ? (res.description = '')
        : res.description.length === 1
        ? (res.description = res.description[0])
        : (res.description = res.description.join('\n'));

    // Renvoie l'objet 'res' avec les alias et la description des options.
    return res;
}
