let additionStatus = false;
let subtractionStatus = false;
let multiplicationStatus = false;
let divisionStatus = false;
let operationPlusStatus = false;
let operationPlus2Status = false;
let operationMinusStatus = false;
let operationTimesStatus = false;
let operationDividedByStatus = false;

function number(num) {
  document.calc.display.value = document.calc.display.value + num;
}

function clearButton() {
  document.calc.display.value = "";
  additionStatus = false;
  subtractionStatus = false;
  multiplicationStatus = false;
  divisionStatus = false;
  operationPlusStatus = false;
  operationPlus2Status = false;
  numeroUno=0;
  numeroDos=0;
  numeroTres=0;
  numeroCuatro=0;
}

let numeroTres = 0;
let numeroUno = 0;
let numeroDos = 0;
let numeroCuatro = 0;

function addition() {
  if (operationPlus2Status === true) {
    numeroCuatro = Number(document.calc.display.value)+Number(numeroDos);
    numeroTres = Number(numeroUno)+Number(numeroCuatro);
    operationPlus2Status = true;
    document.calc.display.value = "";
    operationStatus === false;
  } else if (operationPlusStatus === true || operationMinusStatus === true || operationTimesStatus === true || operationDividedByStatus === true) {
    numeroDos = Number(numeroTres)-Number(numeroUno)+Number(document.calc.display.value);
    numeroTres = Number(numeroUno)+Number(numeroDos);
    operationPlus2Status = true;
    document.calc.display.value = "";
  } else if (additionStatus === true) {
    numeroDos = document.calc.display.value;
    numeroTres = Number(numeroUno)+Number(numeroDos);
    document.calc.display.value = "";
    operationPlusStatus = true;
  } else {
  numeroUno = document.calc.display.value;
  additionStatus = true;
  document.calc.display.value = "";
  }
}
function subtraction() {
  numeroUno = document.calc.display.value;
  subtractionStatus = true;
  document.calc.display.value = "";
}
function multiplication() {
  numeroUno = document.calc.display.value;
    multiplicationStatus = true;
    document.calc.display.value = "";
}
function division() {
	numeroUno = document.calc.display.value;
    divisionStatus = true;
    document.calc.display.value = "";
}
function squared() {
	numeroUno = Number(document.calc.display.value)*Number(document.calc.display.value)
	document.calc.display.value = numeroUno;
}
function negative() {
	numeroUno = Number(document.calc.display.value)*-1;
	document.calc.display.value = numeroUno;
}
function decimalPoint() {
  numeroUno = document.calc.display.value;
  document.calc.display.value = numeroUno + ".";

}

function equals() {
  if (additionStatus === true) {
    if (operationPlusStatus === true){
      document.calc.display.value = Number(numeroTres)+Number(document.calc.display.value);
      if (operationPlus2Status === true){
        document.calc.display.value = Number(numeroTres)+Number(document.calc.display.value);
      }
    } else {
    numeroDos = document.calc.display.value;
    document.calc.display.value = "";
    document.calc.display.value = Number(numeroUno)+Number(numeroDos);
    additionStatus = false;
  }
  } else if (subtractionStatus === true) {
    numeroDos = document.calc.display.value;
    document.calc.display.value = "";
    document.calc.display.value = Number(numeroUno)-Number(numeroDos);
    subtractionStatus = false;
  } else if (multiplicationStatus === true) {
	numeroDos = document.calc.display.value;
    document.calc.display.value = "";
    document.calc.display.value = Number(numeroUno)*Number(numeroDos);
    multiplicationStatus = false;
  } else if (divisionStatus === true) {
  	numeroDos = document.calc.display.value;
    document.calc.display.value = "";
    document.calc.display.value = Number(numeroUno)/Number(numeroDos);
    divisionStatus = false;
  }
}
