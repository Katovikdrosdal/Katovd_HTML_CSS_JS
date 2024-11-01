

function checkNumber() {
    let number = parseInt(document.getElementById("numberInput").value);

    if (isNaN(number)) {
        document.getElementById("output").innerHTML = "Please enter a valid number.";
        return;
    }

    let result = `${number} is `;
    

    result += (number % 2 === 0) ? "even" : "odd";

    if (isPrime(number)) {
        result += " and prime.";
    } else {
        result += " and not prime.";
    }

    document.getElementById("output").innerHTML = result;
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}
