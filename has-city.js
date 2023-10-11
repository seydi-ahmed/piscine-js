function hasCity(country, villes) {
    return function (city) {
        if (villes.indexOf(city) === -1) {
            return city + " is not a city from " + country
        }
        return city + " is a city from " + country
    }
}