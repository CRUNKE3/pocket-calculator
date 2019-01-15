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
  function numeroUno() {
    numero_uno = document.calc.display.value;
  };
  let additionStatus = true;
  document.calc.display.value = "";
}

function equals() {

  let numero_dos = document.calc.display.value;
  if (additionStatus=true) {
    let displayAnswer = numero_uno + numero_dos;
    document.calc.display = displayAnswer;
  }
}
