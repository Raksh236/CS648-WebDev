// Declare the coinFlip variable (no value yet)
let coinFlip;
let streakCount = 0;  // To keep track of consecutive heads

// Do-while loop to keep flipping until Tails is flipped
do {
    // Generate a random number (0 or 1) for the coin flip
    coinFlip = Math.floor(Math.random() * 2);  // 0 represents Heads, 1 represents Tails

    // Check the result of the coin flip
    if (coinFlip === 0) {
        console.log("Heads");
        streakCount++;  // Increment the streak count when Heads appears
    } else {
        console.log("Tails");
    }
} while (coinFlip !== 1); // Loop continues until Tails (1) is flipped

// Output the streak count
console.log(`The streak of Heads was: ${streakCount}`);
