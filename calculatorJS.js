let additionStatus = false;


function number(num) {
  document.calc.display.value = document.calc.display.value + num;
}

function clearButton() {
  document.calc.display.value = "";
  additionStatus = false;
  numer_ouno="";
  numero_dos="";
}

function addition() {
  numeroUno()
  let additionStatus = true;
  document.calc.display.value = "";
}

function equals() {
  let firstNumber = numeroUno();
  let numero_dos = document.calc.display.value;
  if (additionStatus=true) {
    document.calc.display.value = "";
    let displayAnswer = firstNumber + numero_dos;
    document.calc.display.value = displayAnswer;
  }
}

function numeroUno() {
	var numero_uno = document.calc.display.value;
	return numero_uno;
}
