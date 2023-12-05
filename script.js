function performCalculation() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    const result = num1 + num2;

    document.getElementById("result").innerHTML = `Result: ${result}`;
}

const movingO = document.getElementById("movingO");
let currentPosition = 0;

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    currentPosition -= 10;
    movingO.style.left = currentPosition + "px";
  } else if (event.key === "ArrowRight") {
    currentPosition += 10;
    movingO.style.left = currentPosition + "px";
  }
});