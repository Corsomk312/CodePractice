var nonsense = function(string){

  var blab = function(){
    alert(string)
  };

  return blab
};

var blabLater = nonsense("Take it outside, buddy!")
blabLater();

var lastNameTrier = function(lastName){
  var lastName = lastName;

  var firstNameTrier = function(firstName){
    var firstName = firstName
    console.log("You're name is " + firstName + " " + lastName);
  }

  return firstNameTrier;

}

var whatsYourName = lastNameTrier("Momo")

var storyWriter = function(){
  var story = "";

  var addWords = function(string){
    story = story + " " + string;
    console.log(story)
  };

  var erase = function(){
    story = ""
  }

  return {
    addWords: addWords,
    erase: erase
  };
};


var basicStory = storyWriter();

var Toaster = function(){
    var wet = false


    var burning = function(setting){
      if (setting < 4){
        console.log('Setting is: ' + setting)
        console.log('Why even bother toasting it?')
      } else if(setting < 7){
        console.log('Setting is: ' + setting)
        console.log('I mean, what did that bread ever do to you?')
      } else{
        console.log('Setting is: ' + setting)
        console.log('Congrats you burned the house down like your mother said you would when you moved out. Just give up on your dreams and go home.')
      }
    };

    var broken = function(){
      if (wet === true){
        console.log('Well who said that was a good idea? Go buy a new toaster')
      } else{
        console.log('No. It\'s not wet, it\'s a toaster you goofus')
      }
    };

    return {
      burning: burning,
      broken: broken
    };
};