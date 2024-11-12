let numbers = [34, 53, 2, -3, 34, 26, -26, 85, 3, 4, 98, 2, -12];

function analyzeArray() {
    let sum = 0;
    let negativeCount = 0;
    let smallest = numbers[0];
    let evenSum = 0;
    
    for (let num of numbers) {
        sum += num;
        if (num < 0) {
            negativeCount++;
        }
        if (num < smallest) {
            smallest = num;
        }
        if (num % 2 === 0) {
            evenSum += num;
        }
    }
    
    let average = sum / numbers.length;
    
    document.getElementById("output").innerHTML = `
        <p>Sum of numbers: ${sum}</p>
        <p>Number of negative numbers: ${negativeCount}</p>
        <p>Average of numbers: ${average.toFixed(2)}</p>
        <p>Smallest number: ${smallest}</p>
        <p>Sum of even numbers: ${evenSum}</p>
    `;
}