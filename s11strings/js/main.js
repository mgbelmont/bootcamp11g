/*var mivariable = "Garcia"
console.log(`Hola Mary mariana ${mivariable}`)
*/
/*
1.Saber la cantidad de palabras
2. Saber la cantidad de "a"
3. Crear una nueva frase usando sólo los caracteres que estén en posiciones  nones
4. Crear una nueva frase usando sólo los caracteres que estén en posiciones pares
 */
/*
console.log(`La cantidad letras a es de : ${phrase.split(/a/).length}`)
*/
/*
var phrase = "La mejor forma de predecir el futuro es creándolo";
var res = phrase.split(" ").length;
var numberOfCharacteres = phrase.length;
var phraseNon="";
var phrasePar = "";
var numberOfa = phrase.match(/[AaÁá]/g).length;

for (var i = 0; i < numberOfCharacteres; i++) {
  if (i % 2 === 0) { //es par
   phrasePar += phrase.charAt(i);
  } else {//es non
    phraseNon += phrase.charAt(i);
  }
}


console.log(`1. Cantidad de palabras es ${res}`);
console.log(`2. Cantidad de a es ${numberOfa}`);
console.log(`3. Frase Nones ${phraseNon}`);
console.log(`4. Frase Par ${phrasePar}`);
*/

/*************************************************** 
 * PRÁCTICA STRINGS
 */

/*Ejercicio 1
Mostrar la misma frase en snake_case
*/
var phrase = "La mejor forma de predecir el futuro es creándolo";
var numberOfCharacteres = phrase.length;
var phraseOutAccent = phrase.replace(/[áÁ]/g, "a");
var lowerPhrase = phraseOutAccent.toLowerCase();
var phraseSnakeCase = lowerPhrase.replace(/ /g, "_");

console.log(`1. Frase en snake_case: ${phraseSnakeCase}`);

/*Ejercicio 2
Mostrar la misma frase en kebab-case
*/

var phraseKebabCase = lowerPhrase.replace(/ /g, "-");

console.log(`2. Frase en kebab-case: ${phraseKebabCase}`);

/*Ejercicio 3
Mostrar la misma frase con todas las vocales en mayúscula
*/
var phraseCapitalLetter = phrase.replace(/a/g, "A").replace(/á/g, "Á").replace(/e/g, "E").replace(/i/g, "I").replace(/o/g, "O").replace(/u/g, "U");

console.log(`3. Frase con vocales en mayúsculas: ${phraseCapitalLetter}`);

/*Ejercicio 4
Mostrar los primeros 10 caracteres de la frase
*/

var firstTenCaracters = phrase.slice(0, 10);
console.log(`4. Primeros 10 caracteres: ${firstTenCaracters}`);

/*Ejercicio 5
Mostrar los últimos 10 caracteres de la frase
*/

var firstTenCaracters = phrase.slice(numberOfCharacteres - 10, numberOfCharacteres);
console.log(`5. Últimos 10 caracteres: ${firstTenCaracters}`);