/*Ejercicio 1 */
/*
var sideOne = parseInt(prompt("Ingresa el lado 1: "));
var sideTwo = parseInt(prompt("Ingresa el lado 2: "));
var sideThree = parseInt(prompt("Ingresa el lado 3: "));

if (!Number.isNaN(sideOne) && !Number.isNaN(sideTwo) && !Number.isNaN(sideThree)) {//si existe la variable
  if (sideOne != 0 && sideTwo != 0 && sideThree != 0) {
    if ((sideOne == sideTwo) && (sideTwo == sideThree)) {
      area = (sideOne + sideTwo + sideThree) / 2;
      alert("El triángulo es Equilátero");
    } else {
      if ((sideOne == sideTwo) || (sideOne == sideThree) || (sideTwo == sideThree)) {
        alert("El triángulo es Isósceles y su área es: " );
      } else {
        alert("El triángulo es Escaleno");
      }
    }
  }
} else {
  alert("Escribe un valor numérico");
}*/

/*2do ejercicio y 2.1*/
/*
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
*/
/*Ejercicio 3*/
var base = parseInt(prompt("Ingresa la base del triángulo: "));
var height = parseInt(prompt("Ingresa la altura del triángulo: "));
var area = 0;
if (!Number.isNaN(base) && !Number.isNaN(height)) {
  if (base != 0 && height != 0) {
    area = base * height / 2;
    alert("El área del triángulo es: " + area);
  } else {
    alert("No se aceptan valores de 0");
  }  
} else {
  alert("");
}