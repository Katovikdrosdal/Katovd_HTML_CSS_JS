function convertDate() {
    const dateInput = document.getElementById("dateInput").value;
    
    
    const day = dateInput.slice(0, 2);
    const month = dateInput.slice(3, 5);
    let monthText = "";

    if ((month < 8 && month % 2 != 0 && day > 31) ||
        (month > 7 && month % 2 == 0 && day > 31) ||
        (month < 8 && month % 2 == 0 && day > 30) ||
        (month > 7 && month % 2 != 0 && day > 30) ||
        (month == 2 && day > 28)) {
            console.log("Feil");
        }

    
    switch(month) {
        case "01":
            monthText = "January";
            break;
        case "02":
            monthText = "February";
            break;
        case "03":
            monthText = "March";
            break;
        case "04":
            monthText = "April";
            break;
        case "05":
            monthText = "May";
            break;
        case "06":
            monthText = "June";
            break;
        case "07":
            monthText = "July";
            break;
        case "08":
            monthText = "August";
            break;
        case "09":
            monthText = "September";
            break;
        case "10":
            monthText = "October";
            break;
        case "11":
            monthText = "November";
            break;
        case "12":
            monthText = "December";
            break;
        default:
            monthText = "Invalid month";
            break;
    }

    
    if(monthText !== "Invalid month") {
        document.getElementById("result").innerText = `You entered ${monthText} ${day}.`;
    } else {
        document.getElementById("result").innerText = "Please enter a valid date in the format dd.mm.";
    }
}