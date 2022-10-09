const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialresult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput("+", initialresult, enteredNumber )
    
  }

  function subtract() { 
    const enteredNumber = getUserNumberInput();
    const initialresult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput("-", initialresult, enteredNumber )  }

  function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialresult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput("*", initialresult, enteredNumber )  }

  function divide() {
    const enteredNumber = getUserNumberInput();
    const initialresult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput("/", initialresult, enteredNumber )  }

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);




