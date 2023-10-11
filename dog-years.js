const orbitalPeriods = {
    earth: 31557600,
    mercury: 31557600 * 0.2408467,
    venus: 31557600 * 0.61519726,
    mars: 31557600 * 1.8808158,
    jupiter: 31557600 * 11.862615,
    saturn: 31557600 * 29.447498,
    uranus: 31557600 * 84.016846,
    neptune: 31557600 * 164.79132,
};

function dogYears(planet, ageInSeconds) {
    const result = (ageInSeconds / orbitalPeriods[planet])*7
    return parseFloat(result.toFixed(2));
}
  
// const dogAgeOnEarth = dogYears('earth', 1000000000);
// console.log(dogAgeOnEarth);
  