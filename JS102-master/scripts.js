//Use this file to implement Part One of your project

var animal = {}

animal.username = 'Daffy'
animal['tagline'] = 'What\'s up doc?'
var noises = []
animal['noises'] = noises
var count = 0

for (var key in animal){
  count++;
  if (animal[key] === animal.username) {
    console.log("Hi my name is " + animal.username);
  } else if (animal[key] === animal.tagline) {
    console.log("HI my tagline is " + animal.tagline)
  }
}