function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function checkBet() {
    const bet = document.getElementById("betInput").value.trim().toUpperCase();
    const resultElement = document.getElementById("result");

    switch (bet) {
        case "H":
            resultElement.textContent = "Home";
            break;
        case "D":
            resultElement.textContent = "Draw";
            break;
        case "A":
            resultElement.textContent = "Away";
            break;
        default:
            resultElement.textContent = "Invalid input. Please enter 'H' for Home, 'D' for Draw, or 'A' for Away.";
            break;
    }
}
