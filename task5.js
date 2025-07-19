// Function to check the guess (Topic 04: Functions)
function checkGuess() {
  let randomNumber = Math.floor(Math.random() * 10) + 1; // Random number 1-10
  let userGuess = parseInt(prompt("Guess a number between 1 and 10:")); // User input

  // Conditions to compare (Topic 03: Operators & Conditions)
  if (userGuess === randomNumber) {
    alert("Congratulations! You guessed " + randomNumber + " correctly!");
  } else {
    alert("Sorry, the number was " + randomNumber + ". Try again!");
  }
}

// Run the game
checkGuess();

let gameStats = { attempts: 0, wins: 0 }; // Topic 05: Objects

function checkGuess() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let userGuess;

    // Topic 06: Loops
    while (true) {
        userGuess = parseInt(prompt("Guess a number between 1 and 10 (or -1 to quit):"));
        gameStats.attempts++;

        if (userGuess === -1) break; // Quit condition
        if (userGuess === randomNumber) {
        gameStats.wins++;
        alert("Congratulations! You guessed " + randomNumber + " correctly! Attempts: " + gameStats.attempts);
        break;
        } else if (userGuess > randomNumber) {
        alert("Too high! Try again.");
        } else {
        alert("Too low! Try again.");
        }
    }
    alert("Game Over. Wins: " + gameStats.wins + ", Total Attempts: " + gameStats.attempts);
    }

checkGuess();