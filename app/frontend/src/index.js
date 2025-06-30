import { Calculator } from "../wailsjs/go/main/App.js";
import { $, getLatexValues, getValues, setValues } from "./util.js";
import katex from "katex";
const equal = document.querySelector("#equal");
const inputValues = document.querySelector("#input-display");
const Display = document.querySelector("#display-answer");

// Render KaTeX on the input display
function updateMath() {
  const latex = getLatexValues();
  katex.render(latex, inputValues, {
    throwOnError: false,
    output: "html",
  });
}

// Perform the calculation
const Calculate = function (expression) {
  Calculator(expression)
    .then((result) => {
      Display.innerHTML = result;
      localStorage.setItem("result", result);
    })
    .catch((err) => {
      Display.innerHTML = "Error";
      console.error(err);
    });
};

// Clear everything
export const clearInput = () => {
  localStorage.setItem("input", "");
  localStorage.setItem("latex", "");
  updateMath();
  Display.innerHTML = "";
};

// Listen for button clicks
const getButtonValues = () => {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const newValue = event.target.value;
      const latexValue = event.target.dataset.latex || newValue;

      const currentInput = getValues();
      const updatedInput = currentInput + newValue;
      localStorage.setItem("input", updatedInput);

      const currentLatex = getLatexValues();
      const updatedLatex = currentLatex + latexValue;
      localStorage.setItem("latex", updatedLatex);

      updateMath();
    });
  });
};

// Equal button
equal.addEventListener("click", () => {
  const expression = getValues();
  if (expression.trim() !== "") {
    Calculate(expression);
  }
});

// Setup event listeners
$("#CE").addEventListener("click", clearInput);
getButtonValues();

// Initialize
updateMath();
Display.innerHTML = localStorage.getItem("result") || "";
