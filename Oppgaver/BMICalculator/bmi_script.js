let bmiHistory = [];

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function toggleUnits() {
    const unit = document.getElementById('unit').value;
    const heightLabel = document.getElementById('height-label');
    const weightLabel = document.getElementById('weight-label');
    
    if (unit === "imperial") {
        heightLabel.innerHTML = "Height (inches):";
        weightLabel.innerHTML = "Weight (lbs):";
        document.getElementById('height').placeholder = "Enter height in inches";
        document.getElementById('weight').placeholder = "Enter weight in pounds";
    } else {
        heightLabel.innerHTML = "Height (cm):";
        weightLabel.innerHTML = "Weight (kg):";
        document.getElementById('height').placeholder = "Enter height in centimeters";
        document.getElementById('weight').placeholder = "Enter weight in kilograms";
    }
}

function validateInput(value) {
    return value > 0; 
}

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (!validateInput(weight) || !validateInput(height)) {
        alert('Please enter valid, positive numbers for height and weight.');
        return;
    }

    const unit = document.getElementById('unit').value;
    let bmi;

    if (unit === "imperial") {
        const heightM = height * 0.0254;
        const weightKg = weight * 0.453592;
        if (weightKg > 0 && heightM > 0) {
            bmi = (weightKg / (heightM * heightM)).toFixed(2);
        }
    } else {
        const heightM = height / 100;
        if (weight > 0 && heightM > 0) {
            bmi = (weight / (heightM * heightM)).toFixed(2);
        }
    }

    const resultDiv = document.getElementById('result');

    if (bmi) {
        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        resultDiv.innerHTML = `Your BMI is ${bmi} (${category})`;
        resultDiv.style.display = 'block';

        
        bmiHistory.push(`BMI: ${bmi} (${category})`);
        displayHistory();
    } else {
        resultDiv.innerHTML = 'Please enter valid weight and height.';
        resultDiv.style.display = 'block';
    }
}

function displayHistory() {
    const historyDiv = document.getElementById('bmi-history');
    historyDiv.innerHTML = bmiHistory.map(entry => `<p>${entry}</p>`).join('');
}

function clearFields() {
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('bmi-history').innerHTML = '';
    resultDiv.style.display = 'none';
}
