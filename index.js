// Initialize the array
const numbers = [10, 20, 30, 40, 50];

// Function to add a number to the array
function addNumber(array, number) {
    array.push(number);
    return array;
}

// Function to remove the first occurrence of a number from the array
function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index !== -1) {
        array.splice(index, 1);
    }
    return array;
}

// Function to sort the numbers in ascending order
function sortNumbers(array) {
    return array.slice().sort((a, b) => a - b); // Use slice to create a copy of the array
}

// Function to calculate the sum of the numbers in the array
function calculateSum(array) {
    return array.reduce((sum, num) => sum + num, 0);
}

// Function to calculate the average of the numbers in the array
function calculateAverage(array) {
    return calculateSum(array) / array.length;
}

// Main program
function main() {
    let output = document.getElementById('output');

    // Display initial array
    output.innerHTML += `<pre>Initial array: ${JSON.stringify(numbers)}</pre>`;

    // Add a number
    addNumber(numbers, 60);
    output.innerHTML += `<pre>After adding 60: ${JSON.stringify(numbers)}</pre>`;

    // Remove a number
    removeNumber(numbers, 30);
    output.innerHTML += `<pre>After removing 30: ${JSON.stringify(numbers)}</pre>`;

    // Sort the numbers
    const sortedNumbers = sortNumbers(numbers);
    output.innerHTML += `<pre>Sorted array: ${JSON.stringify(sortedNumbers)}</pre>`;

    // Calculate sum
    const sum = calculateSum(numbers);
    output.innerHTML += `<pre>Sum of numbers: ${sum}</pre>`;

    // Calculate average
    const average = calculateAverage(numbers);
    output.innerHTML += `<pre>Average of numbers: ${average.toFixed(2)}</pre>`;
}

// Run the main program
main();
