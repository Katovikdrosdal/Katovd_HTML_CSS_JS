const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getDaysInMonth() {
    const month = parseInt(document.getElementById("monthInput").value);
    const resultDiv = document.getElementById("result");

    if (month >= 1 && month <= 12) {
        const days = daysInMonths[month - 1];
        const monthName = monthNames[month - 1];
        resultDiv.innerHTML = `${monthName} has ${days} days.`;
    } else {
        resultDiv.innerHTML = "Please enter a valid month number (1-12).";
    }
}