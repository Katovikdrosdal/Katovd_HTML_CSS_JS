function calculateSpeed() {
    let speedKmH = document.getElementById("speedInput").value;
    let speedMPH = speedKmH / 1.609;
    let answer = `KM/H: ${speedKmH}.<br/>MPH: ${speedMPH.toFixed(2)}.`;
    document.getElementById("output").innerHTML = answer;
}

function calculateSpeedMPH() {
    let speedMPH = document.getElementById("speedInputMPH").value;
    let speedKmH = speedMPH * 1.609;
    let answerMPH = `MPH: ${speedMPH}.<br/>KM/H: ${speedKmH.toFixed(2)}.`;
    document.getElementById("outputMPH").innerHTML = answerMPH;
}
