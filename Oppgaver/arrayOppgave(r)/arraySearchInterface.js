        // Array of integers
        const numbersArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

        // Function to check if the number exists in the array
        function checkNumber() {
            const input = document.getElementById('numberInput').value;
            const number = parseInt(input);
            const resultElement = document.getElementById('result');

            if (isNaN(number)) {
                resultElement.textContent = 'Please enter a valid number.';
                return;
            }

            if (numbersArray.includes(number)) {
                resultElement.textContent = `The number ${number} exists in the array.`;
            } else {
                resultElement.textContent = `The number ${number} does not exist in the array.`;
            }
        }