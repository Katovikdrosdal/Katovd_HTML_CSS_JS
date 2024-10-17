function Calculate() {
    let Number = document.getElementById("Number").value;
    
    let Celsius = Number -32 * 5/9
    let Kelvin = Number -32 * 5/9 + 273.15


    let Answer = `Number is ${Number}.
    <br/>
    Celsius is ${Celsius},
    <br/>
    Kelvin is ${Kelvin}.`

    document.getElementById("output").innerHTML = Answer;
}