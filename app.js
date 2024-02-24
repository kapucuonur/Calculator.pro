let currentInput = '';
let currentOperation = null;
let currentTotal = null;

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperation(operation) {
  if (currentInput !== '') {
    if (currentTotal === null) {
      currentTotal = parseFloat(currentInput);
    } else {
      performOperation();
    }
    currentOperation = operation;
    currentInput = '';
    updateDisplay();
  }
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  currentOperation = null;
  currentTotal = null;
  updateDisplay();
}

function calculate() {
  if (currentOperation && currentInput !== '') {
    performOperation();
    currentOperation = null;
    currentInput = currentTotal.toString();
    updateDisplay();
    currentTotal = null;
  }
}

function performOperation() {
  const inputValue = parseFloat(currentInput);
  switch (currentOperation) {
    case '+':
      currentTotal += inputValue;
      break;
    case '-':
      currentTotal -= inputValue;
      break;
    case '*':
      currentTotal *= inputValue;
      break;
    case '/':
      currentTotal /= inputValue;
      break;
  }
}

function updateDisplay() {
  document.getElementById('display').value = currentInput || currentTotal || '0';
}
