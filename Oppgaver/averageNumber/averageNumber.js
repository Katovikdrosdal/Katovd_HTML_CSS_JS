let numbers = [];

function addNumber() {
    const numberInput = document.getElementById('numberInput');
    const number = parseFloat(numberInput.value);

    if (!isNaN(number)) {
        numbers.push(number);
        numberInput.value = '';
        updateOutput();
    }
}

function updateOutput() {
    const total = numbers.reduce((sum, num) => sum + num, 0);
    const average = (numbers.length > 0) ? (total / numbers.length).toFixed(2) : 'N/A';
    document.getElementById('averageValue').innerText = `Average: ${average}`;
    document.getElementById('individualNumbers').innerText = `Numbers: ${numbers.join(', ')}`;
}