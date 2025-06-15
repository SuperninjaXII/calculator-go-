import { Calculator } from "../wailsjs/go/main/App.js";

const equal = document.querySelector("#equal");
const inputValues = document.querySelector("#display-1");
const Display = document.querySelector("#display-2");
let answer = "";
const Calculate = function (expression) {
  const result = Calculator(expression);
  result.then((result) => {
    console.log(result);
    answer = `${result}`;
  });
};
const getValues = (data) => {
  localStorage.setItem("input", `${data}`);
  return localStorage.getItem("input");
};
equal.addEventListener("click", () => {
  let data = getValues(inputValues.value);
  Calculate(`${data}`);
  console.log("this is answer" + answer);
  Display.value = answer;
});
