import { Calculator } from "../wailsjs/go/main/App.js";
import { $ } from "./util.js";
const equal = document.querySelector("#equal");
const inputValues = document.querySelector("#input-display");
const Display = document.querySelector("#display-answer");
//this function requiers and ecpressions as sn arguement and itut the result in the localstorage

const Calculate = function (expression) {
  const result = Calculator(expression);
  result.then((result) => {
    localStorage.setItem("result", `${result}`);
  });
};
const updateInputToDisplay = () => {
  inputValues.value = getValues();
};
const clearInput = () => {
  localStorage.removeItem("input");
  updateInputToDisplay();
};
//this is a helper function to get values from input
const getValues = () => {
  return localStorage.getItem("input") || "";
};
const setValues = () => {
  localStorage.setItem("input", `${inputValues.value}`);
};

const getButtonValues = () => {
  const buttons = document.querySelectorAll(`button`);
  setValues();

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const newValue = event.target.value;
      const current = getValues();
      const updated = current + newValue;
      localStorage.setItem("input", `${updated}`);
      updateInputToDisplay();
    });
  });
};
//this displays to the output
equal.addEventListener("click", () => {
  setValues();
  const expression = getValues();

  console.log(expression);
  if (expression.trim() != "") {
    Calculate(`${expression}`);
    Display.innerHTML = localStorage.getItem("result");
  }
});
//setup event listeners//
getButtonValues();
$("#CE").addEventListener("click", clearInput);
