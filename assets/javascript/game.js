//array for computer to randomly choose from for winning guess//
var alphabet = ["a", 
				"b", 
				"c", 
				"d", 
				"e", 
				"f", 
				"g", 
				"h", 
				"i", 
				"j", 
				"k", 
				"l", 
				"m", 
				"n", 
				"o", 
				"p", 
				"q", 
				"r", 
				"s", 
				"t", 
				"u", 
				"v", 
				"x", 
				"y", 
                "z"];
// var to hold value of wins
var wins = 0;
// var to hold value of losses
var losses = 0;
//var to hold value of the number of guess left. will require use of '--' instead of '++' because it is counting down not up
var left = 9;
// var to hold an array to display what guesses have been chosen already
var guessesSoFar = [];
// value to hold the computer's guess
var winningLetter;

// var function setting pyschic letter == a random letter from alphabet array
var newLetter = function() {
    winningLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
};

// var function grabs id of p "guesses" and use .innerHTML to add text showing value of keyup (add ',')
var soFar = function() {
    document.getElementById("guesses").innerHTML = "Guesses so far: " + guessesSoFar.join(",");
};

// var function grabs .innerHTML using id 'left' to display a number value of guesses left
var guessesLeft = function() {
    document.getElementById("left").innerHTML = "Guesses Left: " + left;
};

// var function to reset the game when over so that the guesses/counter reset
var newGame = function() {
	guessesSoFar = [];
    left = 9;
    newLetter();
    guessesLeft();
    soFar();
}

//key event 
document.onkeyup = function(event) {
	var userGuess = event.key;
    left--;
    guessesSoFar.push(userGuess);
    soFar();
	guessesLeft();
	//conditions statement for win/lose
    if (left > 0 && userGuess == winningLetter){
        wins++
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        newGame();
    }else if ( left == 0){
        losses++;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        newGame();
    }
     };