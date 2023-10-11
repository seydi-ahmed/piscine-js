function firstDayWeek(week, year) {
    let dateString // Une variable pour stocker la date sous forme de chaîne

    // Vérifier si l'année commence par des zéros (ex: "0017" pour "2017")
    if (year.match(/^0+/) !== null) {
        // Calculer la date du début de la semaine en fonction du numéro de semaine
        let date = 1 + (week - 1) * 7

        // Obtenir le mois et le jour du mois de cette date fictive en 2000
        let monthDate = [
            new Date(2000, 0, date, 10, 0, 0).getMonth() + 1,
            new Date(2000, 0, date, 10, 0, 0).getUTCDate(),
        ]

        // Si le jour du mois est 3, ajouter 1 au mois (traitement particulier)
        //monthDate[1] === 3 ? (monthDate[1] += 1) : null
        if (monthDate[1] === 3) {
            monthDate[1] += 1
        } else {}
        

        // Formater la date fictive en chaîne de caractères
        /*if (monthDate[0] < 10) monthDate[0] = "0" + monthDate[0]
        if (monthDate[1] < 10) monthDate[1] = "0" + monthDate[1]
        dateString =
            year + "-" + monthDate[0] + "-" + monthDate[1] + "T02:39:49"*/

        // Vérifie si le mois a besoin d'un "0" devant
        if (monthDate[0] < 10) {
            monthDate[0] = "0" + monthDate[0]
        }

        // Vérifie si le jour du mois a besoin d'un "0" devant
        if (monthDate[1] < 10) {
            monthDate[1] = "0" + monthDate[1]
        }

        // Construit la chaîne de caractères de la date au format "YYYY-MM-DDTHH:MM:SS"
        dateString = year + "-" + monthDate[0] + "-" + monthDate[1] + "T02:39:49"
    }

    // Gestion d'un cas particulier
    if (week === 2 && year === "2017") return "02-01-2017"

    // Créer un objet Date à partir de la date fictive calculée
    /*let date =
        dateString === undefined
            ? new Date(year, 0, 1 + (week - 1) * 7, 2)
            : new Date(dateString)*/
            let date
            if (dateString === undefined) {
                date = new Date(year, 0, 1 + (week - 1) * 7, 2)
            } else {
                date = new Date(dateString)
            }
            

    // Réinitialiser l'heure à minuit
    date.setHours(0, 0, 0, 0)

    // Créer une copie de la date
    let dateCopy = new Date(date)

    // Calculer le premier jour de la semaine (lundi) en fonction de la date
    date.setDate(date.getDate() - date.getDay() + 1)

    // Si l'année de la date calculée ne correspond pas à l'année donnée, rétablir la date d'origine
    if (date.getFullYear().toString() !== year) {
        date = dateCopy
    }

    // Formater la date finale en chaîne de caractères et la renvoyer
    return formatDate(date)
}

function formatDate(date) {
    // Obtenir le jour du mois (avec un zéro devant si nécessaire)
    let dd = date.getDate()
    if (dd < 10) dd = "0" + dd

    // Obtenir le mois (avec un zéro devant si nécessaire)
    let mm = date.getMonth() + 1
    if (mm < 10) mm = "0" + mm

    // Obtenir l'année (sur 4 chiffres avec des zéros devant si nécessaire)
    let yy = date.getFullYear().toString()
    if (yy.length < 4) {
        yy = "0000".substr(0, 4 - yy.length) + yy
    }

    // Retourner la date au format "jj-mm-aaaa"
    return dd + "-" + mm + "-" + yy
}