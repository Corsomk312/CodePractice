//Use this file to implement Part One of your project

var tapeWorm = {}

tapeWorm.username = 'Daffy'
tapeWorm['tagline'] = 'What\'s up doc?'
var noises = []
tapeWorm['noises'] = noises
// var count = 0

// for (var key in tapeWorm){
//   count++;
//   if (tapeWorm[key] === tapeWorm.username) {
//     console.log("Hi my name is " + tapeWorm.username);
//   } else if (tapeWorm[key] === tapeWorm.tagline) {
//     console.log("HI my tagline is " + tapeWorm.tagline)
//   }
// }

noiseArray = []
noiseArray[0] = 'Mooo baby'
noiseArray.push('Quack Quack motha lover')
noiseArray.unshift('cluck cluck please')
tapeWorm['noises'] = noiseArray

animals = []
animals.push(tapeWorm)
var quackers = animals
animals.unshift(quackers)

var chicken = {
  username: 'Charlie',
  tagline: 'don\'t even thingabootit',
  noises: ['chicka chicka', 'who you lookin at?', 'tell me about your family']
}

var rattleSnake = {
  username: 'Chucky',
  tagline: 'Who do you think you are?',
  noises: ['Whats poppin?', 'Where am i?', 'tell me about your dreams']
}

animals.push(chicken, rattleSnake)

function AnimalMaker(name){
  return {
    speak: function(){
      console.log('Howdy, my name is', name)
    },
    name: name,
    owner: 'Kevin'
  }
};

var farm = []
var animalNames = ['susie', 'stevie', 'scarlett']

for (var i =0; i < animalNames.length; i++){
  farm.push(AnimalMaker(animalNames[i]))
};
