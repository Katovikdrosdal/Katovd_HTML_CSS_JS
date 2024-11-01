document.getElementById('yearInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkLeapYear();
    }
});

function checkLeapYear() {
    const year = document.getElementById('yearInput').value;
    const result = document.getElementById('result');

    if (year === '') {
        result.textContent = 'Please enter a year.';
        return;
    }

    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    if (isLeapYear) {
        result.textContent = `${year} is a leap year.`;
    } else {
        result.textContent = `${year} is not a leap year.`;
    }
}
