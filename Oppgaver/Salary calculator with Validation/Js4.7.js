function calculateSalary() {
    const hourlyRate = document.getElementById('hourlyRate').value;
    const hoursWorked = document.getElementById('hoursWorked').value;
    const hourlyRateError = document.getElementById('hourlyRateError');
    const hoursWorkedError = document.getElementById('hoursWorkedError');
    const resultElement = document.getElementById('result');

    hourlyRateError.textContent = '';
    hoursWorkedError.textContent = '';
    resultElement.textContent = '';

    if (isNaN(hourlyRate) || hourlyRate === '') {
        hourlyRateError.textContent = 'Please enter a valid hourly rate';
        return;
    }

    if (hourlyRate < 0) {
        hourlyRateError.textContent = 'Hourly rate cannot be negative';
        return;
    }

    if (isNaN(hoursWorked) || hoursWorked === '') {
        hoursWorkedError.textContent = 'Please enter a valid number of hours worked';
        return;
    }

    const salary = hourlyRate * hoursWorked;
    resultElement.textContent = `Salary: $${salary.toFixed(2)}`;
}
