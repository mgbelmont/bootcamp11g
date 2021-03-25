/*
-Crear una función que pida al usuario el número de koders a registrar
    -tantas veces como koders se deseen registrar:
        -Pedir el nombre del koder
        -Pedir el apellido del koder
        -Imprimir el nombre completo del koder
*/
/*
var numKoders = prompt("Ingresa el número de Koders a registrar");

for (let i = 0; i < numKoders; i++) {
  dataKoders();
}

function dataKoders() {
  let firstName = prompt("Ingresa el nombre del Koder");
  let lastName = prompt("Ingresa el apellido del Koder");
  console.log(`${firstName} ${lastName}`)
}*/
/*
let musicians = ["Gustavo Cerati", "Juan Valdivia", "Enrique Bumbury", "Roy Orbison"];
let painters = ["Vincent Van Gogh", "Pablo Picasso", "Frida Kahlo"];
let writers = ["Gabriel García Márquez", "William Shakespeare", "Franz Kafka"];

printInitials(musicians);
printInitials(painters);
printInitials(writers);

function printInitials(namesArray) {
  for (let i = 0; i < namesArray.length; i++) {
    iniciales(namesArray[i]);
  }
}

function iniciales(palabra) {
  let miPalabra = palabra.split(" ");
  let iniciales = "";
  for (let j = 0; j < miPalabra.length; j++) {
    iniciales += miPalabra[j].charAt(0) + ".";
  }
  console.log(iniciales);
}
*/
/*
    -pedir al usuario la cantidad de koders a guardar
    -pedir nombre y apellido de cada koder
    -guardar cada koder en un array 
    -imprimir cada uno de los koders
*/
/*
    permitir guardar koders adicionales
    permitir borrar un koder aleatorio de la lista
*/

var numKoders = parseInt(prompt("Ingresa el número de Koders a registrar"));
var arrayKoders = [];

function main() {
  for (let i = 0; i < numKoders; i++) {
    addKoder();
  
  }
  printKoders();

  var askAddKoder = confirm("¿Deseas agregar un nuevo Koder?");
  if (askAddKoder) {
    addKoder();
    printKoders();
  }
  
  var askDeleteKoder = confirm("¿Deseas eliminar aleatoriamente un Koder?");
  if (askDeleteKoder) {
    deleteKoder();
    printKoders();
  }

}


function addKoder() {
  let fullName = prompt("Ingresa el nombre y apellido del Koder");
  arrayKoders.push(fullName);
}

function deleteKoder() {
  let numRandom = getNumRandom(arrayKoders.length-1);
  arrayKoders.splice(numRandom, 1)
}

function printKoders() {
  console.log(arrayKoders);
}

function getNumRandom(max) {
  return  Math.round(Math.random()*max);
}

main();



