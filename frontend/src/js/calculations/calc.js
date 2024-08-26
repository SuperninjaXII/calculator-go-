let resultScreen = document.querySelector('.results');
let operationDisplay = document.querySelector('.operation-display');
let number = document.querySelector('.number');
let operators = document.querySelector(".operator");
let firstStorage = "";
let secondStorage = "";
let isOperatorClicked = false;
let operatorSelected = "";

// Function to get the first value entered
const getFirstValue = (value) => {
  firstStorage += value; // No need to parseFloat here
  operationDisplay.innerHTML = `${firstStorage}`;
};

// Function to get the second value entered
const getSecondValue = (value) => {
  secondStorage += value; // No need to parseFloat here
  operationDisplay.innerHTML = `${firstStorage} ${operatorSelected} ${secondStorage}`;
};

// Function to clear the storage and reset the display
const clearStorage = () => {
  firstStorage = "";
  secondStorage = "";
  operatorSelected = "";
  isOperatorClicked = false;
  operationDisplay.innerHTML = "";
  resultScreen.innerHTML = "";
};

// Function to delete the last character
const deleteCharacter = () => {
  if (!isOperatorClicked) {
    // If deleting from the first number
    firstStorage = firstStorage.slice(0, -1);
    operationDisplay.innerHTML = `${firstStorage}`;
  } else {
    // If deleting from the second number
    secondStorage = secondStorage.slice(0, -1);
    operationDisplay.innerHTML = `${firstStorage} ${operatorSelected} ${secondStorage}`;
  }
};

// Function to handle the value collection based on whether an operator was clicked
const collectValue = (event) => {
  const value = event.target.value;
  if (!isOperatorClicked) {
    getFirstValue(value);
  } else {
    getSecondValue(value);
  }
};

// Function to handle the operator click and trigger the calculation
const operatorClicked = (event) => {
  if (!isOperatorClicked && firstStorage !== "") {
    isOperatorClicked = true;
    operatorSelected = event.target.value;
    operationDisplay.innerHTML = `${firstStorage} ${operatorSelected}`;
  } else if (secondStorage !== "") {
    performCalculation();
    operatorSelected = event.target.value;
    operationDisplay.innerHTML = `${firstStorage} ${operatorSelected}`;
  }
};

// Function to perform the calculation based on the selected operator
const performCalculation = () => {
  let result = 0;
  const firstValue = parseFloat(firstStorage);
  const secondValue = parseFloat(secondStorage);

  switch (operatorSelected) {
    case '+':
      result = firstValue + secondValue;
      break;
    case '-':
      result = firstValue - secondValue;
      break;
    case '*':
      result = firstValue * secondValue;
      break;
    case '/':
      result = secondValue !== 0 ? firstValue / secondValue : "can't divide by zero"; // Handle division by zero
      break;
    default:
      result = 'Error';
  }

  // Update the display with the result
  operationDisplay.innerHTML = result;
  resultScreen.innerHTML = result;

  // Store the result as the first value for any further operations
  firstStorage = result.toString();
  secondStorage = "";
  isOperatorClicked = false;
};

// Event listener for number buttons
document.querySelector('.numbers-container').addEventListener('click', (event) => {
  if (event.target.classList.contains('number')) {
    collectValue(event);
  }
});

// Event listener for operator buttons
document.querySelectorAll('.operator').forEach(button => {
  button.addEventListener('click', operatorClicked);
});
// Clear button functionality (if you have one)
document.querySelector('#clear').addEventListener('click', clearStorage);

// Event listener for the equals button to perform the calculation
document.querySelector('.equal').addEventListener('click', performCalculation);

// Event listener for the delete button
document.querySelector('#delete').addEventListener('click', deleteCharacter);

let mode = "simple";

const SwitchMode = () => {
  console.log("switv")
  if (mode === 'simple') {
    // Switch to 'hand-note' mode
    mode = "hand-note";

    let SecondSuperBtn = document.querySelector("#secondSuper");
    let keypad = document.querySelector("main");
    let screen = document.querySelector(".screen");
    let cvs = document.querySelector("#editor");
    let cvsButtons = document.querySelector(".hand-buttons");
    // Toggle visibility of elements
    keypad.classList.toggle("hide");
    document.querySelectorAll('li').forEach(button => button.classList.toggle("hide"));
    cvs.style.display = "block";
    screen.classList.toggle("hide")
    cvsButtons.classList.toggle("hide");
    SecondSuperBtn.classList.toggle("hide");
  } else {
    // Switch back to 'simple' mode
    mode = "simple";

    let SecondSuperBtn = document.querySelector("#secondSuper");
    let keypad = document.querySelector("main");
    let screen = document.querySelector(".screen");
    let cvs = document.querySelector("#editor");
    let cvsButtons = document.querySelector(".hand-buttons");

    // Revert visibility of elements
    keypad.classList.toggle("hide");
    document.querySelectorAll('li').forEach(button => button.classList.toggle("hide"));
    screen.classList.toggle("hide");  // Reset maxHeight to default

    cvs.style.display = "none";
    cvsButtons.classList.toggle("hide");
    SecondSuperBtn.classList.toggle("hide");
  }
};
document.querySelector('#super').addEventListener("click", SwitchMode)

document.querySelector('#secondSuper').addEventListener("click", SwitchMode)

