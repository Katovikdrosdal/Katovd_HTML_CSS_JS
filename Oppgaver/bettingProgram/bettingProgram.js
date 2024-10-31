function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function checkBet() {
      
    const bet = document.getElementById("betInput").value.trim().toUpperCase();
    const resultElement = document.getElementById("result");

    if (bet === "H") {
      resultElement.textContent = "Home";
    } else if (bet === "D") {
      resultElement.textContent = "Draw";
    } else if (bet === "A") {
      resultElement.textContent = "Away";
    } else {
      resultElement.textContent = "Invalid input. Please enter 'H' for Home, 'D' for Draw, or 'A' for Away.";
    }
  }