function findLength() {
    const input = document.getElementById('textInput').value;
    const length = input.length;
    document.getElementById('print').innerText = `Length: ${length}`;
}

function convertToUpper() {
    const input = document.getElementById('textInput').value;
    const upperCase = input.toUpperCase();
    document.getElementById('print').innerText = `Uppercase: ${upperCase}`;
}

function convertToLower() {
    const input = document.getElementById('textInput').value;
    const lowerCase = input.toLowerCase();
    document.getElementById('print').innerText = `Lowercase: ${lowerCase}`;
}
