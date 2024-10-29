const rightNumber = 42;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    const message = document.getElementById('message');

    if (isNaN(guess) || guess < 0 || guess > 100) {
        message.textContent = "Please enter a valid number between 0 and 100.";
    } else if (guess < rightNumber) {
        message.textContent = `You guessed ${guess}. This is too low. Try again!`;
    } else if (guess > rightNumber) {
        message.textContent = `You guessed ${guess}. This is too high. Try again!`;
    } else {
        message.textContent = `You guessed right! The correct number is ${guess}!`;
    }
}
