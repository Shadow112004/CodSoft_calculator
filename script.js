let resultElement = document.getElementById('result');
let currentResult = '0';

function appendToResult(value) {
  if (currentResult === '0' && value !== '.') {
    currentResult = value;
  } else {
    currentResult += value;
  }
  updateResultDisplay();
}

function clearResult() {
  currentResult = '0';
  updateResultDisplay();
}

function calculate() {
  try {
    currentResult = eval(currentResult).toString();
    updateResultDisplay();
  } catch (error) {
    currentResult = 'Error';
    updateResultDisplay();
  }
}

function updateResultDisplay() {
  resultElement.value = currentResult;
}
