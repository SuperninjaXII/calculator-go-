import { Calculator } from "../wailsjs/go/main/App.js";
import { $, getValues, setValues } from "./util.js";

const equal = document.querySelector("#equal");
const inputValues = document.querySelector("#input-display");
const Display = document.querySelector("#display-answer");

// Calculate expression and update display
const Calculate = function (expression) {
  const result = Calculator(expression);
  result.then((result) => {
    Display.innerHTML = result;
    localStorage.setItem("result", `${result}`);
  }).catch((err) => {
    Display.innerHTML = "Error";
    console.error(err);
  });
};

const updateInputToDisplay = () => {
  inputValues.value = getValues();
};

export const clearInput = () => {
  localStorage.setItem("input", "");
  localStorage.setItem("result", "");
  updateInputToDisplay();
  Display.innerHTML = "";
};

const getButtonValues = () => {
  const buttons = document.querySelectorAll(`button`);

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const newValue = event.target.value;

      const current = getValues();
      const updated = current + newValue;
      localStorage.setItem("input", updated);
      updateInputToDisplay();
    });
  });
};

// Equal button click event
equal.addEventListener("click", () => {
  setValues(inputValues.value);
  const expression = getValues();

  if (expression.trim() !== "") {
    Calculate(expression);
  }
});

// Setup event listeners
$("#CE").addEventListener("click", clearInput);
getButtonValues();

updateInputToDisplay();
Display.innerHTML = localStorage.getItem("result") || "";