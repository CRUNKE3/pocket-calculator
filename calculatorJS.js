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

let numeroUno = 0;

function addition() {
  numeroUno = document.calc.display.value;
  let additionStatus = true;
  document.calc.display.value = "";
    }
function equals() {
  if (additionStatus=true) {
    numeroDos = document.calc.display.value;
    document.calc.display.value = "";
    document.calc.display.value = Number(numeroUno)+Number(numeroDos);
  }
}
