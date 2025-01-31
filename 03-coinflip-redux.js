// Declare the coinFlip variable (no value yet)
let coinFlip;

// Loop 10 times to simulate 10 coin flips
for (let i = 0; i < 10; i++) {
    // Generate a random number (0 or 1) for the coin flip
    coinFlip = Math.floor(Math.random() * 2);  // This gives either 0 (Heads) or 1 (Tails)

    // Conditional to check the coin flip result
    if (coinFlip === 0) {
        console.log("Heads");
    } else {
        console.log("Tails");
    }
}
