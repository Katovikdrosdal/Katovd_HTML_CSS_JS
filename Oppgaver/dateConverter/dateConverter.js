function convertDate() {
	const dateInput = document.getElementById("dateInput").value;

	const day = parseInt(dateInput.slice(0, 2), 10);
	const month = parseInt(dateInput.slice(3, 5), 10);
	let monthText = "";

	const isInvalidDate =
		(month < 8 && month % 2 !== 0 && day > 31) ||
		(month > 7 && month % 2 === 0 && day > 31) ||
		(month < 8 && month % 2 === 0 && day > 30) ||
		(month > 7 && month % 2 !== 0 && day > 30) ||
		(month === 2 && day > 28);

	if (isInvalidDate || day < 1 || month < 1 || month > 12) {
		document.getElementById("result").innerText =
			"Invalid date! Please enter a valid day and month.";
		return;
	}

	switch (month) {
		case 1:
			monthText = "January";
			break;
		case 2:
			monthText = "February";
			break;
		case 3:
			monthText = "March";
			break;
		case 4:
			monthText = "April";
			break;
		case 5:
			monthText = "May";
			break;
		case 6:
			monthText = "June";
			break;
		case 7:
			monthText = "July";
			break;
		case 8:
			monthText = "August";
			break;
		case 9:
			monthText = "September";
			break;
		case 10:
			monthText = "October";
			break;
		case 11:
			monthText = "November";
			break;
		case 12:
			monthText = "December";
			break;
		default:
			monthText = "Invalid month";
			break;
	}

	if (monthText !== "Invalid month") {
		document.getElementById(
			"result"
		).innerText = `You entered ${monthText} ${day}.`;
	} else {
		document.getElementById("result").innerText =
			"Please enter a valid date in the format dd.mm.";
	}
}
