function convertFtoCAndK() {
    let inputValue = parseFloat(document.getElementById("fahrenheitInput").value);
    
    // Convert from Fahrenheit to Celsius and Kelvin
    let celsius = (inputValue - 32) * 5 / 9;
    let kelvin = (inputValue - 32) * 5 / 9 + 273.15;

    
    let answer = `Fahrenheit: ${inputValue.toFixed(2)}°F
    <br/>
    Celsius: ${celsius.toFixed(2)}°C
    <br/>
    Kelvin: ${kelvin.toFixed(2)}K`;

    
    document.getElementById("fahrenheitOutput").innerHTML = answer;
}

function convertCtoFAndK() {
    let inputValue = parseFloat(document.getElementById("celsiusInput").value);
    
    // Convert from Celsius to Fahrenheit and Kelvin
    let fahrenheit = (inputValue * 9 / 5) + 32;
    let kelvin = inputValue + 273.15;

    
    let answer = `Celsius: ${inputValue.toFixed(2)}°C
    <br/>
    Fahrenheit: ${fahrenheit.toFixed(2)}°F
    <br/>
    Kelvin: ${kelvin.toFixed(2)}K`;

    
    document.getElementById("celsiusOutput").innerHTML = answer;
}
