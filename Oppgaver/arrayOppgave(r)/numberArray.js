
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

/**
 * Tests if a number is a prime.
 * @param {Number} num A natural number (integer greater than 1).
 * @returns True if the number is prime, false otherwise.
 */
function isPrime(num) {
    if (num <= 1 || !Number.isInteger(num)) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

/**
 * Reverse order of an array.
 * @template T Type of elements in the array.
 * @param {T[]} arr An array.
 * @returns {T[]} A new array whose elements is the original array in reverse order.
 */
function reverse(arr) {
    if (!Array.isArray(arr)) {
        console.log("Input is not an array!");
        return [];
    }
    return [...arr].reverse();
}

/**
 * Every other element of an array starting with the first element (element at index zero).
 * @template T Type of elements in the array.
 * @param {T[]} arr An array.
 * @returns {T[]} A new array containing every other element of the original array.
 */
function everyOther(arr) {
    if (!Array.isArray(arr)) {
        console.log("Input is not an array!");
        return [];
    }
    return arr.filter((_, i) => i % 2 == 0);
}

/**
 * Every number less than 10.
 * @param {Number[]} numbers An array.
 * @returns {Number[]} A new array containing every element of the original array that is less than 10.
 */
function lessThanTen(numbers) {
    if (!Array.isArray(numbers)) {
        console.log("Input is not an array!");
        return [];
    }
    return numbers.filter(n => n < 10);
}

/**
 * Every even number in an array.
 * @param {Number[]} numbers An array of numbers.
 * @returns {Number[]} An array containing all even numbers of the original array.
 */
function even(numbers) {
    if (!Array.isArray(numbers)) {
        console.log("Input is not an array!");
        return [];
    }
    return numbers.filter(n => n % 2 == 0);
}

/**
 * Sum
 * @param {Number[]} numbers An array of numbers.
 * @returns {Number} The sum of all numbers in the array.
 */
function sum(numbers) {
    if (!Array.isArray(numbers)) {
        console.log("Input is not an array!");
        return 0;
    }
    return numbers.reduce((sum, n) => sum + n, 0);
}

/**
 * Every prime number in an array.
 * @param {Number[]} numbers An array of numbers.
 * @returns {Number[]} An array containing all prime numbers of the original array.
 */
function primes(numbers) {
    if (!Array.isArray(numbers)) {
        console.log("Input is not an array!");
        return [];
    }
    return numbers.filter(isPrime);
}

/**
 * Finds the maximum in an array of numbers
 * @param {Number[]} numbers An array of numbers
 * @returns {Number} The largest number in the array
 */
function max(numbers) {
    if (!Array.isArray(numbers)) {
        console.log("Input is not an array!");
        return -Infinity;
    }
    return Math.max(...numbers);
}

/**
 * Finds the minimum in an array of numbers
 * @param {Number[]} numbers An array of numbers
 * @returns {Number} The smallest number in the array.
 */
function min(numbers) {
    if (!Array.isArray(numbers)) {
        console.log("Input is not an array!");
        return Infinity;
    }
    return Math.min(...numbers);
}

/**
 * The set of unique elements in an array.
 * @template T Type of elements in the array.
 * @param {T[]} arr An array.
 * @returns {T[]} A new array with no duplicates containing all the elements from the original array.
 */
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log("Input is not an array!");
        return [];
    }
    return [...new Set(arr)];
}

/**
 * A shuffled array.
 * @template T Type of elements in the array.
 * @param {T[]} arr An array.
 * @return A new array with the elements of the original array in random order.
 */
function shuffle(arr) {
    if (!Array.isArray(arr)) {
        console.log("Input is not an array!");
        return [];
    }
    arr = [...arr];
    let result = [];
    while (arr.length > 0) {
        let i = Math.floor(Math.random() * arr.length);
        let [elem] = arr.splice(i, 1);
        result.push(elem);
    }
    return result;
}

/**
 * Sorts the array.
 * @param {Number[]} numbers An array of numbers.
 * @returns A new array with the sorted elements.
 */
function sort(numbers) {
    if (!Array.isArray(numbers)) {
        console.log("Input is not an array!");
        return [];
    }
    return [...numbers].sort((a, b) => a - b);
}

/**
 * Multiplies all numbers by 69.
 * @param {Number[]} numbers An array of numbers.
 * @returns A new array containing all numbers of the original array multiplied by 69.
 */
function mult69(numbers) {
    if (!Array.isArray(numbers)) {
        console.log("Input is not an array!");
        return [];
    }
    return numbers.map(n => n * 69);
}

/**
 * Multiplies all numbers in an array.
 * @param {Number[]} numbers An array of numbers.
 * @returns {Number} The product of all numbers in the array.
 */
function product(numbers) {
    if (!Array.isArray(numbers)) {
        console.log("Input is not an array!");
        return 1;
    }
    return numbers.reduce((prod, n) => prod * n, 1);
}

/**
 * Length of an array.
 * @template T Type of elements in the array.
 * @param {T[]} arr An array.
 * @returns {Number} The length of the array.
 */
function length(arr) {
    if (!Array.isArray(arr)) {
        console.log("Input is not an array!");
        return 0;
    }
    return arr.length;
}

/**
 * Converts all values to absolute values.
 * @param {Number[]} numbers An array of numbers.
 * @returns {Number[]} A new array containing the absolute values of the original array.
 */
function absoluteValues(numbers) {
    if (!Array.isArray(numbers)) {
        console.log("Input is not an array!");
        return [];
    }
    return numbers.map(n => Math.abs(n));
}

/**
 * Parse a string of numbers (including decimals) separated by anything that is not a number.
 * @param {String} str A string of numbers separated by non-numeric characters.
 * @return {Number[]} An array of numbers.
 */
function parseNumbers(str) {
    return str.split(/[^\d.-]/).filter(x => x !== '' && !isNaN(x)).map(n => parseFloat(n));
}

let result = {
    "Numbers": (i => i),
    "Reversed": reverse,
    "Every other": everyOther,
    "Less than 10": lessThanTen,
    "Even": even,
    "Sum": sum,
    "Primes": primes,
    "Max": max,
    "Min": min,
    "Unique": unique,
    "Shuffle": shuffle,
    "Sort": sort,
    "Multiply by 69": mult69,
    "Product": product,
    "Length": length,
    "Absolute Values": absoluteValues
};

let option = "Numbers";

// update the html elements
function update() {
    let f = result[option];
    let inputString = document.getElementById("input").value;
    let numbers = parseNumbers(inputString);
    if (!Array.isArray(numbers)) {
        console.log("Parsed input is not an array!");
        return;
    }
    numbers.push(92);  // Adding 92 to the array
    numbers.shift();  // Removes the first number of the array
    document.getElementById("option").innerText = option;
    let r = f(numbers);
    if (r instanceof Array)
        r = r.join(", ");
    document.getElementById("result").innerText = r;
}

// generate html buttons
for (let [name, f] of Object.entries(result)) {
    let btn = document.createElement("BUTTON");
    btn.innerHTML = name;
    btn.onclick = () => {
        option = name;
        update();
    }
    document.getElementById("buttons").appendChild(btn);
}
