import { Calculator } from "../wailsjs/go/main/App.js";

const equal = document.querySelector("#equal");
const inputValues = document.querySelector("#display-top");
const Display = document.querySelector("#display-bottom");
//this function requiers and ecpressions as sn arguement and itut the result in the localstorage
const Calculate = function (expression) {
  const result = Calculator(expression);
  result.then((result) => {
  localStorage.setItem("result", `${result}`);
  });
};
//this is a helper function to get values from input
const getValues = () => {
  return localStorage.getItem("input")||"";
};
const setValues =()=>{
  localStorage.setItem("input", `${inputValues.value}`);
}

const getButtonValues=()=>{
  const buttons = document.querySelectorAll(`.numbers`);
    setValues()

  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      const newValue = event.target.value;
      const current = getValues();
      let updated = current + newValue
      localStorage.setItem("input", `${updated}`);
    });
  });
}
  //this displays to the output
const DisplayAnswer=()=> {
  let expression = getValues();

if(expression.trim() != ""){
  Calculate(`${expression}`);
  localStorage.removeItem("input")
  Display.innerHTML = answer;
  }
});

equal.addEventListener("click", DisplayAnswer)
//setup event listeners
getButtonValues()
