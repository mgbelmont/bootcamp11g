/*
var sideOne = parseInt(prompt("Ingresa el lado 1: "));
var sideTwo = parseInt(prompt("Ingresa el lado 2: "));
var sideThree = parseInt(prompt("Ingresa el lado 3: "));

if (!Number.isNaN(sideOne) && !Number.isNaN(sideTwo) && !Number.isNaN(sideThree)) {//si existe la variable
  if (sideOne != 0 && sideTwo != 0 && sideThree != 0) {

    if ((sideOne == sideTwo) && (sideTwo == sideThree)) {
      alert("El triángulo es Equilátero");
    } else {
      if ((sideOne == sideTwo) || (sideOne == sideThree) || (sideTwo == sideThree)) {
        alert("El triángulo es Isósceles");
      } else {
        alert("El triángulo es Escaleno");
      }
    }
  }
} else {
  alert("Escribe un valor numérico");
}*/

/*2do ejercicio*/
var sideOne = parseInt(prompt("Ingresa el lado 1: "));
var sideTwo = parseInt(prompt("Ingresa el lado 2: "));

if (!Number.isNaN(sideOne) && !Number.isNaN(sideTwo)) {//si existe la variable
  var area = sideOne * sideTwo;
  if (sideOne == sideTwo) {
    alert("Es un cuadrado y su área es: " + area);

  } else {
    alert("Es un rectángulo y su área es: " + area);
  }
}else {
  alert("Escribe un valor numérico");
}