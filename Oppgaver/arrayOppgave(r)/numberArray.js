let number = [34, 53, 2, 3, 34, 26, 26, 85, 3, 4, 98, 2, 12];

function printArray() {
    let result = "";

    for (let i = 0; i < number.length; i++) {
        result += `${number[i]}, `;
    }

    document.getElementById("result").innerText = result.slice(0, -2);
}

printArray();

let numberReverse = [34, 53, 2, 3, 34, 26, 26, 85, 3, 4, 98, 2, 12];

function printArrayReversed() {
    let result = "";

    for (let i = numberReverse.length - 1; i >= 0; i--) {
        result += `${numberReverse[i]}, `;
    }

    document.getElementById("result").innerText += "\n" + result.slice(0, -2);
}

printArrayReversed();

let everyOther = [34, 53, 2, 3, 34, 26, 26, 85, 3, 4, 98, 2, 12];

function printArrayEveryOther() {
    let result = "";

    for (let i = 0; i < everyOther.length; i+=2) {
        result += `${everyOther[i]}, `;
    }

    document.getElementById("result").innerText += "\n" + result.slice(0, -2);
}

printArrayEveryOther();


let lessThan10 = [34, 53, 2, 3, 34, 26, 26, 85, 3, 4, 98, 2, 12];

function printArrayLessThan10() {
    let result = "";

    for (let i = 0; i < lessThan10.length; i++) {
        if (lessThan10[i] < 10) {
            result += `${lessThan10[i]}, `;
        }
    }

    document.getElementById("result").innerText += "\n" + result.slice(0, -2);
}

printArrayLessThan10();

let wholeNumber = [34, 53, 2, 3, 34, 26, 26, 85, 3, 4, 98, 2, 12];

function printArrayWholeNumber() {
    let result = "";

    for (let i = 0; i < wholeNumber.length; i++) {
        if (wholeNumber[i] % 2==0) {
            result += `${wholeNumber[i]}, `;
        }
    }

    document.getElementById("result").innerText += "\n" + result.slice(0, -2);
}

printArrayWholeNumber();


let arraySum = [34, 53, 2, 3, 34, 26, 26, 85, 3, 4, 98, 2, 12];

function printArraySum() {
    let sum = 0;

    for (let i = 0; i < arraySum.length; i++) {
        sum += arraySum[i];
    }

    document.getElementById("result").innerText += "\nSum: " + sum;
}

printArraySum();

let arrayPrime = [34, 53, 2, 3, 34, 26, 26, 85, 3, 4, 98, 2, 12];

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function printArrayPrime() {
    let result = "";

    for (let i = 0; i < arrayPrime.length; i++) {
        if (isPrime(arrayPrime[i])) {
            result += `${arrayPrime[i]}, `;
        }
    }

    document.getElementById("result").innerText += "\n" + result.slice(0, -2);
}

printArrayPrime();


