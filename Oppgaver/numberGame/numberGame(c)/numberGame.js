

const rightNumber = Math.floor(Math.random() * 101);

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    const message = document.getElementById('message');


    message.classList.remove('win', 'loss');

    if (isNaN(guess) || guess < 0 || guess > 100) {
        message.textContent = "Please enter a valid number between 0 and 100.";
    } else if (guess < rightNumber) {
        message.textContent = `You guessed ${guess}. This is too low. Try again!`;
        message.classList.add('loss');
    } else if (guess > rightNumber) {
        message.textContent = `You guessed ${guess}. This is too high. Try again!`;
        message.classList.add('loss');
    } else {
        message.textContent = `You guessed right! The correct number is ${guess}!`;
        message.classList.add('win');
    }
}
