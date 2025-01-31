// Generate a random number for the coin flip (0 or 1)
let coinFlip = Math.floor(Math.random() * 2);  // 0 represents heads, 1 represents tails

// Prompt the user to select "Heads" or "Tails"
let choice = prompt("Choose Heads or Tails:").toLowerCase(); // Convert to lowercase for easier comparison

// Determine if the coin flip is heads or tails based on the generated number
let flipResult = coinFlip === 0 ? "heads" : "tails";

// Compare the user's choice with the coin flip result
if (choice === flipResult) {
    alert(`The flip was ${flipResult} and you chose ${flipResult}...you win!`);
} else {
    alert(`The flip was ${flipResult} but you chose ${choice}...you lose!`);
}
