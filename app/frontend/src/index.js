import { Calculator } from "../wailsjs/go/main/App.js";
import { $, getValues, setValues } from "./util.js";
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
export const clearInput = () => {
  localStorage.setItem("input", "");
  localStorage.setItem("result", "");
  updateInputToDisplay();
  Display.innerHTML = localStorage.getItem("result");
};
const getButtonValues = () => {
  const buttons = document.querySelectorAll(`button`);
  

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const newValue = event.target.value;

      const current = getValues();
      const updated = current + newValue;
      localStorage.setItem("input", `${updated}`);
      console.log("click");
      console.log(getValues());
      updateInputToDisplay();
    });
    updateInputToDisplay();
  });
};
//this displays to the output
equal.addEventListener("click", () => {
  setValues(`${inputValues.value}`);
  const expression = getValues();

  console.log(expression);
  if (expression.trim() !== "") {
    Calculate(`${expression}`);
    Display.innerHTML = localStorage.getItem("result");
  }
});
//setup event listeners//

$("#CE").addEventListener("click", clearInput);
getButtonValues();
