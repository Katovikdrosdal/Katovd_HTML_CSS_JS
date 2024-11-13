let arr = ["Hans", "Ole", "Nils", "Olav", "Per", "Knut", "Kari", "Line", "Pia"];

function pickThreeRandomNames(arr) {
	let pickedNames = [];
	let arrCopy = [...arr];

	for (let i = 0; i < 3; i++) {
		let randomIndex = Math.floor(Math.random() * arrCopy.length);

		pickedNames.push(arrCopy[randomIndex]);

		arrCopy.splice(randomIndex, 1);
	}

	return pickedNames;
}

function pickThree() {
	let newArr = pickThreeRandomNames(arr);
	document.getElementById("result").innerText =
		"Picked Names: " + newArr.join(", ");
}
