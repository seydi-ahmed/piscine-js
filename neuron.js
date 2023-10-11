function neuron(arr) {
    var res = {}; // Crée un objet pour stocker les informations analysées.

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i].split(' '); // Divise chaque chaîne de caractères en un tableau de mots.

        // Vérifie le type d'information (questions, orders, affirmations).
        if (/questions:/i.test(str[0])) {
            res['questions'] ||= {}; // Crée un objet 'questions' s'il n'existe pas déjà.

            // Utilise la fonction 'parseQuestionOrder' pour extraire la question et la réponse.
            let [question, response] = parseQuestionOrder(str);
            let questionKey = question
                .replaceAll(' ', '_')
                .replace('?', '')
                .toLowerCase();

            // Crée un sous-objet pour stocker la question et les réponses associées.
            res['questions'][questionKey] ||= {};
            res['questions'][questionKey]['question'] = question;
            res['questions'][questionKey]['responses'] ||= [];
            res['questions'][questionKey]['responses'].push(response);
        } else if (/orders:/i.test(str[0])) {
            // Gère les informations de type 'orders' de manière similaire à 'questions'.
            let [order, response] = parseQuestionOrder(str);
            res['orders'] ||= {};
            let orderKey = order
                .replaceAll(' ', '_')
                .replace('!', '')
                .toLowerCase();
            res['orders'][orderKey] ||= {};
            res['orders'][orderKey]['order'] = order;
            res['orders'][orderKey]['responses'] ||= [];
            res['orders'][orderKey]['responses'].push(response);
        } else if (/affirmations:/i.test(str[0])) {
            // Gère les informations de type 'affirmations' de manière similaire à 'questions'.
            let [affirmation, response] = parseAffirmations(str);
            res['affirmations'] ||= {};
            let affirmationKey = affirmation.replaceAll(' ', '_').toLowerCase();
            res['affirmations'][affirmationKey] ||= {};
            res['affirmations'][affirmationKey]['affirmation'] = affirmation;
            res['affirmations'][affirmationKey]['responses'] ||= [];
            res['affirmations'][affirmationKey]['responses'].push(response);
        }
    }
    return res; // Renvoie l'objet résultant avec les informations organisées.
}

// Fonction pour extraire une déclaration et une réponse à partir d'un tableau de mots.
function parseQuestionOrder(arr) {
    let statement = arr.slice(1).join(' ').split('-')[0].slice(0, -1);
    let response = arr
        .join(' ')
        .split('-')
        .slice(1)
        .join('-')
        .slice(1)
        .split(' ')
        .slice(1)
        .join(' ');
    return [statement, response];
}

// Fonction pour extraire une affirmation et une réponse à partir d'un tableau de mots.
function parseAffirmations(arr) {
    let statement = arr.slice(1).join(' ').split('-')[0].slice(0, -1);
    let response = arr
        .join(' ')
        .split('-')[1]
        .slice(1)
        .split(' ')
        .slice(1)
        .join(' ');
    return [statement, response];
}

const input = [
    'questions: How are you? -I am fine.',
    'questions: What is your name? -My name is John.',
    'orders: Stand up! -I will stand up.',
    'affirmations: I like ice cream. -That is great!',
];

const result = neuron(input);
console.log(result);
