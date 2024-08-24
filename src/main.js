let screen = document.querySelector('.screen');
let operationDisplay = document.querySelector('.operation-display');
let number = document.querySelector('.number');
let operators = document.querySelector(".operator");
let firstStorage = "";
let secondStorage = "";
let isOperatorClicked = false;

const getFirstValue = (value) => {
  firstStorage += parseFloat(value);
  operationDisplay.innerHTML = `${firstStorage}`;
  console.log(firstStorage);
}

const getSecondValue = (value) => {
  secondStorage += parseFloat(value);
}

const collectValue = (event) => {
  if (isOperatorClicked == false) {
      const value = event.target.value;
      getFirstValue(value);
      console.log(firstStorage);
    }
   if (isOperatorClicked == true) {
       const value = event.target.value;
       getSecondValue(value);
     }
}

const operatorClicked = (event) => {
  isOperatorClicked = true;
  const SelectedOperator = event.target.value;
  operationDisplay.innerHTML = `${firstStorage} ${SelectedOperator} ${secondStorage}`;
  collectValue(event);
}

document.querySelector('.numbers-container').addEventListener('click', (event) => {
  if (event.target.classList.contains('number')) {
      collectValue(event);
    }
});

operators.addEventListener("click", operatorClicked);
