function Calculate() {
    let Number = document.getElementById("Number").value;
    
    let MPH = Number / 1.609


    let Answer = `KM/H ${Number}.
    <br/>
    MPH is ${MPH}.`

    document.getElementById("output").innerHTML = Answer;
}