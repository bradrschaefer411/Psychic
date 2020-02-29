var letters = ["a","b","c","d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuess;
var randomLetter;
var wins = 0;
var losses = 0;
var guessesLeftInit = 9;
var guessesLeft = 0;    

var userGuessEl = document.getElementById('userGuess');
var winsEl = document.getElementById('wins');
var lossesEl = document.getElementById('losses');
var guessesLeftEl = document.getElementById('guessesLeft');


var resetGame = function() {
  
  guessesLeft = guessesLeftInit;

  
  userGuessEl.textContent = '';
  winsEl.textContent = wins;
  lossesEl.textContent = losses;
  guessesLeftEl.textContent = guessesLeft;
  console.log(guessesLeft);

  pickLetter();
}

var pickLetter = function() {
 
  randomLetter = letters[Math.floor(Math.random() * letters.length)];
  console.log("Random Letter: " + randomLetter);
}

var userWins = function() {
  
  alert("You've guessed correctly!");
  console.log("USER WINS");

  wins++;
  winsEl.textContent = wins;
  resetGame();
}

var userLoses = function() {
 
  alert("You've guessed incorrectly!");
  console.log("USER LOSES");

  losses++;
  lossesEl.textContent = losses;
  resetGame();
}

var userGuessed = function() {
  guessesLeft--;
  guessesLeftEl.textContent = guessesLeft;
  console.log("Guesses left: " + guessesLeft);
}

var userEnteredInvalidInput = function() {
 
  alert("Try using a letter.");
}

var compareLetter = function() {




  document.addEventListener('keypress', function(e) {

    
    if (guessesLeft == 0) {
      resetGame();
    }

    
    if (97 <= e.which && e.which <= 122) {

      
      userGuess = String.fromCharCode(e.which);
      console.log(userGuess);

      
      userGuessEl.textContent += userGuess + " ";

      
      if (userGuess == randomLetter) {
        userWins();
      } else {
        userGuessed();
        
        if (guessesLeft < 1) {
          userLoses();
        }
      }
    } else {
      userEnteredInvalidInput();
    }
  });
}


window.onload = function() {
  guessesLeftEl.textContent = guessesLeftInit;
  compareLetter();
}