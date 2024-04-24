const measureRain = (inches) => {
  if (inches === 0 ){
    console.log('drought')
  } else if (inches < 2 ){
console.log('dry')
  } else if (inches < 4 ){
console.log('average')
  } else if (inches < 6 ){
console.log('rainy') 
}  else if (inches >= 6){
  console.log('flood')
}  
};

// measureRain(1)

const happyBirthdayPet = (breed , age ) => {
if (breed === "snake"){
  console.log('Hiss hiss!')
} else if (breed === 'cat' && age < 5 ){
  console.log('Mew mew!')
} else if (breed === 'cat' && age >= 5 ){
  console.log('Meow meow!')
} else if (breed === 'dog' && age < 5 ){
  console.log('Arf arf!')
}else if (breed === 'dog' && age >= 5 && age < 10 ){
  console.log( 'Woof woof!')
} else if (breed === 'dog' && age >= 10 ){
  console.log('Boof!')
} else console.log('Happy birthday!')
};
// happyBirthdayPet( 'bunny' , 4)

const funTypes = (jsType) => {
  if (typeof jsType === 'string'){
    console.log("That's just some text.")
  }
  if (typeof jsType === 'NaN'){
    console.log("Well, now you're just showing off.")
  }
  if (typeof jsType === 'number'){
    console.log("That's a good number.")
  }
  if (typeof jsType === 'undefined'){
    console.log("Nothing, but I didn't set that.")
  }
  if (typeof jsType === 'boolean'){
    console.log("To bool, or not to bool?")
  }
  if (typeof jsType === 'object'){
    console.log("Anybody got the key?")
  }
  if (typeof jsType === 'array'){
    console.log('I order you to be indexed.')
  }
  if (typeof jsType === 'null'){
    console.log( "Nothing, and I did set that.")
  }
  
};
// funTypes()

//Inputs: Number (float), String
//Output: Number (int)
const rounder = (float , roundingSetting ) => {
  if(roundingSetting === 'up') {
    //Round Up
    return Math.ceil(float)
  } else if(roundingSetting === 'down') {
    //Round Down
    return Math.floor(float)
  } else if(roundingSetting === "honest") {
    //Round Proper - 5.5 = 6, 5.7 = 6, 5.3 = 5.
    return Math.round(float)
    
  }
};
// console.log(rounder(5.3,'honest'));

const fizzBuzzish = (num) => {
  if (num % 3 === 0 && num % 5 === 0){
    console.log("fizzBuzz!")
  } else if (num % 5 === 0){
    console.log('buzz')
  } else if ( num % 3 === 0 ){
    console.log('fizz')
  } else {
    console.log(num)
  }
};

// fizzBuzzish(9)
// fizzBuzzish(25)
// fizzBuzzish(30)
// fizzBuzzish(2)
module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};
