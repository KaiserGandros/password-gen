// Assignment code here
var Criteria = {
  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  specialChar: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
    "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_",
    "`", "{", "}", "|", "~"],

  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var randomChar = function(fromArray) {
  return fromArray[Math.floor(Math.random() * fromArray.length)];

}


var generatePassword = function() {
  console.log ("HELLO!!!!!");
  

  var generated = '';
  var sum = [];
  var length;
  var lowercase;
  var uppercase;
  var specialChar;
  var numbers;


  
  

  length = prompt('How long do you want it to be? Only 8-128.');
    if (length >= 8 && length < 129) {

      numbers = window.confirm ('Would you like Numbers?');

     if (numbers) {
      generated += Criteria.numbers;
      sum.push(randomChar(Criteria.numbers));

      }

      specialChar = window.confirm('Would you like to have Special Characters?');
    
      if (specialChar) {
      generated += Criteria.specialChar;
      sum.push(randomChar(Criteria.specialChar));

    }

      uppercase = window.confirm('Would you like Uppercase Letters?');

      if (uppercase) {
        generated += Criteria.uppercase;
        sum.push(randomChar(Criteria.uppercase));

      }



      lowercase = window.confirm('Would you like Lowercase Letters?');

      if (lowercase) {
        generated += Criteria.lowercase;
        sum.push(randomChar(Criteria.lowercase));

      }

  

    if(!generated) {
    window.alert('You need to select one option, please try again.');
    return generatePassword();
    }  

    while(sum.length < length ){
      sum.push(randomChar(generated));
    }

    for (var i = 0; i < length; i++) {
      var random = Math.floor(Math.random() * sum.length);
      generated = generated + sum[random]
    }
  

    return sum.join('')


  }
  else {
    window.alert('You need to provide a valid length!');
    return initalState
  }
}




// Write password to the #password input
function questions() {
  var valid = false;
} 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
