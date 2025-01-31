// Prompt the user to enter a number
let startNumber = parseInt(prompt("Enter a number to start the countdown:"));

// Loop to count down from the entered number to 0
for (let i = startNumber; i >= 0; i--) {
    console.log(i); // Output the current number in the countdown
}