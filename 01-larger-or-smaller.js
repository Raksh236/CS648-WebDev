// Ask the user to input two integers
let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));

// Check which number is larger, or if they are equal
if (num1 > num2) {
    document.write("The larger number is: " + num1);
} else if (num2 > num1) {
    document.write("The larger number is: " + num2);
} else {
    document.write("Both numbers are equal.");
}
