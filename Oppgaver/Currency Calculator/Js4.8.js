function convertCurrency() {
    let amount = document.getElementById('amount').value;
    let fromCurrency = document.getElementById('fromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;
    let resultElement = document.getElementById('result');
    
    if (isNaN(amount) || amount <= 0) {
        resultElement.innerText = "Please enter a valid number";
        return;
    }

    let exchangeRates = {
        USD: { USD: 1, EUR: 0.95, NOK: 11 },
        EUR: { USD: 1.05, EUR: 1, NOK: 11.58 },
        NOK: { USD: 0.091, EUR: 0.086, NOK: 1 }
    };

    let convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    resultElement.innerText = `${amount} ${fromCurrency} is ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
