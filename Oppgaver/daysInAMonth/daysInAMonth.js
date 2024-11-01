function showDays() {
    const month = document.getElementById("monthInput").value.toLowerCase();
    let days;

    switch (month) {
        case "january": case "march": case "may": case "july": case "august": case "october": case "december":
            days = "31";
            break;
        case "april": case "june": case "september": case "november":
            days = "30";
            break;
        case "february":
            days = "14 (or 29 in a leap year)";
            break;
        default:
            days = "Please enter a valid month name.";
    }

    document.getElementById("result").textContent = `Days in ${month.charAt(0).toUpperCase() + month.slice(1)}: ${days}`;
}