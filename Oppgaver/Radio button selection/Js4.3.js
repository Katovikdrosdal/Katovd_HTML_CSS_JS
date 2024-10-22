function Click() {
  let selectedcolor;
  let output = document.getElementById("Output");

  if (document.getElementById("Red").checked) {
    selectedcolor = "Red";
  } else if (document.getElementById("Green").checked) {
    selectedcolor = "Green";
  } else {
    selectedcolor = "Blue";
  }

  output.innerHTML = `You have selected ${selectedcolor}`;
}
