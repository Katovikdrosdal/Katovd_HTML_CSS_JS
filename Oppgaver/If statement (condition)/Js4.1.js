function Output() {
    let inputname = document.getElementById("inputname").value;
    let output = document.getElementById("output");

    if (inputname) {
        output.innerHTML = `Welcome, ${inputname}`;
    } else {
        output.innerHTML = `Please enter your name`;
    }
}
