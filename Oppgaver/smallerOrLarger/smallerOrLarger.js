function checkNumber() {
    let number1 = parseInt(document.getElementById("numberInput1").value);
    let number2 = parseInt(document.getElementById("numberInput2").value);

    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById("output").innerHTML = "Please enter valid numbers.";
        return;
    }

    if (number1 > number2) {
        document.getElementById("output").innerHTML = `${number1} is larger than ${number2}`;
    } else if (number1 < number2) {
        document.getElementById("output").innerHTML = `${number1} is smaller than ${number2}`;
    } else {
        document.getElementById("output").innerHTML = `${number1} is equal to ${number2}`;
    }
}
