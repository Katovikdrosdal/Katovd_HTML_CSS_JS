/**
 * Tests is a number is a prime.
 * @param {Number} num A natural number.
 * @returns True is the number is prime, false otherwise.
 */
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++)
        if (num % i === 0)
            return false;
    return true;
}

/**
 * Reverse order of an array.
 * @template T Type of elements in the array.
 * @param {T[]} arr An array.
 * @returns {T[]} A new array whose elements is the original array in reverse order.
 */
function reverse(arr) {
    return [...arr].reverse();
}

/**
 * Every other element of an array starting with the first element (element at index zero).
 * @template T Type of elements in the array.
 * @param {T[]} arr An array.
 * @returns {T[]} A new array containing every other element of the original array.
 */
function everyOther(arr) {
    return arr.filter((_, i) => i % 2 == 0);
}
/**
 * Every number less than 10.
 * @param {Number[]} numbers An array.
 * @returns {TNumber[]} A new array containing every element of the original array that is less than 10.
 */
function lessThanTen(numbers) {
    return numbers.filter(n => n < 10);
}

/**
 * Every even number in an array.
 * @param {Number[]} numbers An array of numbers.
 * @returns {Number} An array containing all even numbers of the original array.
 */
function even(numbers) {
    return numbers.filter(n => n % 2 == 0);
}

/**
 * Sum
 * @param {Number[]} numbers An array of numbers.
 * @returns {Number} The sum of all numbers in the array.
 */
function sum(numbers) {
    return numbers.reduce((sum, n) => sum + n, 0);
}

/**
 * Every prime number in an array.
 * @param {Number[]} numbers An array of numbers.
 * @returns {Number} An array containing all prime numbers of the original array.
 */
function primes(numbers) {
    return numbers.filter(isPrime);
}

/**
 * Finds the maximum in an array of numbers
 * @param {Number[]} numbers An array of numbers
 * @returns {Number} The largest number in the array
 */
function max(numbers) {
    // TODO
}

/**
 * Finds the minimum in an array of numbers
 * @param {Number[]} numbers An array of numbers
 * @returns {Number} The smallest number in the array.
 */
function min(numbers) {
    // TODO
}

/**
 * The set of unique elements in an array.
 * @template T Type of elements in the array.
 * @param {T[]} arr An array.
 * @returns {T[]} A new array with no duplicates containing all the elements from the original array.
 */
function unique(arr) {
    // TODO
}

/**
 * A shuffled array.
 * @template T Type of elements in the array.
 * @param {T[]} arr An array.
 * @return A new array with the elements of the original array in random order.
 */
function shuffle(arr) {
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
    // TODO
}

/**
 * Multiplies all numbers by 69.
 * @param {Number[]} numbers An array of numbers.
 * @returns A new array containing all numbers of the original array multiplied by 69.
 */
function mult69(arr) {
    // TODO
}

/**
 * Multiplies all numbers in an array.
 * @param {Number[]} numbers An array of numbers.
 * @returns {Number} The product of all numbers in the array.
 */
function product(numbers) {
    // TODO
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
}

let option = "Numbers";

// update the html elements
function update() {
    let f = result[option];
    let inputString = document.getElementById("input").value;
    let numbers = parseNumbers(inputString);
    document.getElementById("option").innerText = option;
    document.getElementById("result").innerText = f(numbers);
}

/**
 * Parse a string of integers separated by anything that is not a digit.
 * @param {String} str A string of numbers separated by comma.
 * @return {Number[]} An array of numbers.
 */
function parseNumbers(str) {
    return str.split(/[^\d]/).filter(x => x != '' && !isNaN(x)).map(n => parseInt(n));
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

