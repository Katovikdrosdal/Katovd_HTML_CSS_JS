function changeColor() {
    let R = document.getElementById("Red").value;
    let G = document.getElementById("Green").value;
    let B = document.getElementById("Blue").value;

    document.querySelector("body").style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
    updateValues(R, G, B);
}

function updateValues(R, G, B) {
    document.getElementById("redValue").textContent = R;
    document.getElementById("greenValue").textContent = G;
    document.getElementById("blueValue").textContent = B;
}
