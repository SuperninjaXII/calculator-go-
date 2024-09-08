// Math.js Initialization

// Selectors
const resultScreen = document.querySelector('.results');
const operationDisplay = document.querySelector('.operation-display');

// State
let firstStorage = '';
let mode = "simple";

// Functions
const getValue = (value) => {
  firstStorage += value;
  operationDisplay.innerHTML = `${firstStorage}`;
};

const clearStorage = () => {
  firstStorage = '';
  operationDisplay.innerHTML = '';
  resultScreen.innerHTML = '';
};

const deleteCharacter = () => {
  firstStorage = firstStorage.slice(0, -1);
  operationDisplay.innerHTML = `${firstStorage}`;
};

const collectValue = (event) => {
  const value = event.target.value;
  getValue(value);
};

const performCalculation = () => {
  try {
    const result = math.evaluate(`${firstStorage}`);
    resultScreen.innerHTML = `${result}`;
    firstStorage = `${result}`;
  } catch (error) {
    resultScreen.innerHTML = 'Error';
  }
};

const SwitchMode = () => {
  if (mode === 'simple') {
    mode = "hand-note";
    document.querySelector('#secondSuper').classList.toggle('hide');
    document.querySelector('main').classList.toggle('hide');
    document.querySelector('.screen').classList.toggle('hide');
    document.querySelector('#editor').style.display = "block";
    document.querySelector('.hand-buttons').classList.toggle('hide');
    document.querySelectorAll('li').forEach(button => button.classList.toggle("hide"));
  } else {
    mode = "simple";
    document.querySelector('#secondSuper').classList.toggle('hide');
    document.querySelector('main').classList.toggle('hide');
    document.querySelector('.screen').classList.toggle('hide');
    document.querySelector('#editor').style.display = "none";
    document.querySelector('.hand-buttons').classList.toggle('hide');
    document.querySelectorAll('li').forEach(button => button.classList.toggle('hide'));
  }
};

// Event listeners
document.addEventListener('keydown', (event) => {
  const keyValue = event.key;
  if (!isNaN(keyValue) || ['+', '-', '*', '/'].includes(keyValue)) {
    collectValue({ target: { value: keyValue } });
  }
  if (keyValue === 'Enter') {
    performCalculation();
  }
  if (keyValue === 'Backspace') {
    deleteCharacter();
  }
  if (keyValue === 'c' || keyValue === 'C') {
    clearStorage();
  }
});

document.querySelector('.numbers-container').addEventListener('click', (event) => {
  if (event.target.classList.contains('number')) {
    collectValue(event);
  }
});

document.querySelectorAll('.operator').forEach(button => {
  button.addEventListener('click', collectValue);
});

document.querySelector('#clear').addEventListener('click', clearStorage);
document.querySelector('.equal').addEventListener('click', performCalculation);
document.querySelector('#delete').addEventListener('click', deleteCharacter);
document.querySelector('#super').addEventListener("click", SwitchMode);
document.querySelector('#secondSuper').addEventListener("click", SwitchMode);
