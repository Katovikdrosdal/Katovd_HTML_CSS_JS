function Calculate() {
    let Number = document.getElementById("Number").value;

    if (Number === "") {
        document.getElementById("output").innerHTML = "Please enter a valid number.";
        return;
    }

    Number = parseFloat(Number);

    let Half = Number / 2;
    let Double = Number * 2;
    let Triple = Number * 3;
    let Squared = Number * Number;

    let Answer = `Number is ${Number}.
    <br/>
    Half is ${Half},
    <br/>
    Double is ${Double},
    <br/>
    Triple is ${Triple},
    <br/>
    Squared is ${Squared}.`;

    document.getElementById("output").innerHTML = Answer;
}
