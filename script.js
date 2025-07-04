let display = document.getElementById("display");
let currentInput = "";
let currentOperator = "";
let previousInput = "";

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".buttons button");
  buttons.forEach(function (button) {
    button.addEventListener("click", handleButtonClick);
  });
});

function handleButtonClick(event) {
  const value = event.target.textContent;

  if (value === "C") {
    currentInput = "";
    currentOperator = "";
    previousInput = "";
    updateDisplay();
  } else if (value === "=") {
    if (currentInput && currentOperator && previousInput) {
      currentInput = eval(`${previousInput}${currentOperator}${currentInput}`);
      currentOperator = "";
      previousInput = "";
      updateDisplay();
    }
  } else if (["+", "-", "*", "/"].includes(value)) {
    if (currentInput) {
      currentOperator = value;
      previousInput = currentInput;
      currentInput = "";
      updateDisplay();
    }
  } else {
    currentInput += value;
    updateDisplay();
  }
}

function updateDisplay() {
  if (currentInput !== "") {
    display.value = currentInput;
  } else if (previousInput !== "") {
    display.value = previousInput + " " + currentOperator;
  } else {
    display.value = "";
  }
}
