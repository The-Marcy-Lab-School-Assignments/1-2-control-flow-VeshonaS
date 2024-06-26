const getRandomIntInRange = (min, max) => {
  if (min > max) throw new Error('min must be less than max');
  return Math.floor(Math.random() * (max - min) + min);
}
// console.log(getRandomIntInRange(50 , 80))

const coolnessGauge = (numOfFridges) => {
  return numOfFridges <= 3 ? 'You need more fridges.' : 'You are downright chilly!';
};

// console.log(coolnessGauge(3))

const funkoPopAddictionLevel = (numOfFunkoPops) => {
  if (numOfFunkoPops === 0) {
    console.log('No pops? Maybe try one.');
  }  else if (numOfFunkoPops <= 10) {
    console.log('Only a few? Keep having fun!');
  } else if (numOfFunkoPops <= 20){
    console.log('You have a problem.')
  } else if (numOfFunkoPops <= 30){
    console.log('You need help!')
  } else {
    console.log('You need an intervention!!!')
  }
};
// funkoPopAddictionLevel(19)

const getWeatherReport = (temperature) => {
  let weatherReport = ''
  if (temperature >= 100) {
     weatherReport = "It's hot and gross out.";

  } else if (temperature >= 71) {
     weatherReport = "At least it's a dry heat.";

  } else if (temperature >= 32) {
    weatherReport = "It's not too bad!";

  } else if (temperature <= 31){
     weatherReport = "Wow, it's cold out."
   
  }
  console.log(weatherReport)
  console.log("And that's your report!");
  return weatherReport
};
getWeatherReport(100)

const returnPositiveNegativeZero = (num) => {
  if (num < 0) {return "Negative"}
  else if (num > 0){ return "Positive"}
  else {
    return "Zero"
  }
};
// console.log(returnPositiveNegativeZero(-3))

module.exports = {
  getRandomIntInRange,
  coolnessGauge,
  funkoPopAddictionLevel,
  getWeatherReport,
  returnPositiveNegativeZero,
};
