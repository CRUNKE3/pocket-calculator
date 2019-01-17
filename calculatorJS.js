let additionStatus = false;
let subtractionStatus = false;
let multiplicationStatus = false;
let divisionStatus = false;
let operationStatus = false;

function number(num) {
  document.calc.display.value = document.calc.display.value + num;
}

function clearButton() {
  document.calc.display.value = "";
  additionStatus = false;
  subtractionStatus = false;
  multiplicationStatus = false;
  divisionStatus = false;
  operationStatus = false;
  numeroUno=0;
  numeroDos=0;
}

let numeroTres = 0;
let numeroUno = 0;
let numeroDos = 0;

function addition() {
  if (operationStatus === true) {
    numeroDos = document.calc.display.value;

  } else if (additionStatus === true) {
    numeroDos = document.calc.display.value;
    numeroTres = Number(numeroUno)+Number(numeroDos);
    document.calc.display.value = "";
    operationStatus = true
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
    if (operationStatus === true){
      document.calc.display.value = numeroTres;
    }
    numeroDos = document.calc.display.value;
    document.calc.display.value = "";
    document.calc.display.value = Number(numeroUno)+Number(numeroDos);
    additionStatus = false;
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
