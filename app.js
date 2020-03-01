const formNumber = document.getElementById('number');
const formAdd = document.getElementById('add');
const formFormula = document.getElementById('formula');
const formResult = document.getElementById('result');
const defaultResult = 4;
let currentResult = defaultResult;

formAdd.addEventListener('click', add);

function add() {
  const getFormNumberShow = parseInt(formNumber.value);
  const initialResult = currentResult;
  currentResult += getFormNumberShow;
  showFormula( initialResult, '+', getFormNumberShow, currentResult);
}

function showFormula(initialResult, operator, getFormNumberShow, currentResult) {
  const outFormula = `${initialResult} ${operator} ${getFormNumberShow}`;
  formFormula.textContent = outFormula;
  formResult.textContent = currentResult;
}



