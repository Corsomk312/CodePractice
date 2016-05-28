var AnimalTestUser = function(username){
  if(arguments.length > 1){
      var otherArgs = []
      for(var i = 1; i < arguments.length; i++){
        otherArgs.push(arguments[i]);
      }
  return {
    username: username,
    otherArgs: otherArgs
    }
  }
};

var testSheep = AnimalTestUser('CottonBall', {'loves dancing': true}, [1,2,3] );

function AnimalCreator(username, species, tagline, noises){
  return{
    username: username,
    species: species,
    tagline: tagline,
    noises: noises,
    friends: []
  }
};

var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);

var cow = AnimalCreator('Daisy', 'cow', 'Love cheesy humor', ['Moo', 'Yikes!', 'Give me back my son!']);

var dog = AnimalCreator('Reggie', 'yorkie', 'Make me better food', ['woof', 'fart', 'it wasn\'t me']);

// console.log(sheep);

var addFriend = function(animal, newFriend){
  animal.friends.push(newFriend.username)
};

addFriend(sheep, cow);
addFriend(sheep, dog);
addFriend(dog, cow);
addFriend(dog, sheep);
addFriend(cow, sheep);
addFriend(cow, dog);

var myFarm = []
myFarm.push(sheep, cow, dog);

var addMatchesArray = function(farm){
  for(var i = 0; i < farm.length; i++){
    matches = []
    farm[i]['matches'] = matches
  }
};

addMatchesArray(myFarm);

var giveMatches = function(farm){
  for(var i = 0; i < farm.length; i++){
    var random = Math.floor((Math.random() * farm[i].friends.length) + 1)
    farm[i].matches.push(farm[i].friends[random])
  }
};