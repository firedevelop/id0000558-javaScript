const formNumber = document.getElementById('number');
const formAdd = document.getElementById('add');
const formSubtract = document.getElementById('subtract');
const formMultiply = document.getElementById('multiply');
const formDivide = document.getElementById('divide');

const formFormula = document.getElementById('formula');
const formResult = document.getElementById('result');
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function outputResult(outputResult, outputFormula) {
  formResult.textContent = outputResult;
  formFormula.textContent = outputFormula;
}

// Gets input from input field
function getFormNumber() {
  return parseInt(formNumber.value);
}

// Generates and writes calculation log
function showFormula(resultBeforeCalc, operator, calcNumber) {
  const showFormulaString = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, showFormulaString); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const getFormNumberShow = getFormNumber();
  const initialResult = currentResult;
  currentResult += getFormNumberShow;
  showFormula( initialResult, '+', getFormNumberShow);
  writeToLog('ADD', initialResult, getFormNumberShow, currentResult);
}

function subtract() {
  const getFormNumberShow = getFormNumber();
  const initialResult = currentResult;
  currentResult -= getFormNumberShow;
  showFormula(initialResult, '-', getFormNumberShow);
  writeToLog('SUBTRACT', initialResult, getFormNumberShow, currentResult);
}

function multiply() {
  const getFormNumberShow = getFormNumber();
  const initialResult = currentResult;
  currentResult *= getFormNumberShow;
  showFormula(initialResult, '*', getFormNumberShow);
  writeToLog('MULTIPLY', initialResult, getFormNumberShow, currentResult);
}

function divide() {
  const getFormNumberShow = getFormNumber();
  const initialResult = currentResult;
  currentResult /= getFormNumberShow;
  showFormula(initialResult, '/', getFormNumberShow);
  writeToLog('DIVIDE', initialResult, getFormNumberShow, currentResult);
}

formAdd.addEventListener('click', add);
formSubtract.addEventListener('click', subtract);
formMultiply.addEventListener('click', multiply);
formDivide.addEventListener('click', divide);