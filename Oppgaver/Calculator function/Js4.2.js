function Calculate() {
  let Number1 = parseFloat(document.getElementById("Number1").value);
  let Number2 = parseFloat(document.getElementById("Number2").value);
  let answer = 0;
  let Method = document.getElementById("Method").value;

  if (Method === "Add") {
    answer = Number1 + Number2;
  } else if (Method === "Subtract") {
    answer = Number1 - Number2;
  } else if (Method === "Multiply") {
    answer = Number1 * Number2;
  } else if (Method === "Divide") {
    answer = Number1 / Number2;
  } else {
    answer = "Invalid operation";
  }

  document.getElementById(
    "Output"
  ).innerHTML = `${Number1} ${Method} ${Number2} = ${answer}`;
}
