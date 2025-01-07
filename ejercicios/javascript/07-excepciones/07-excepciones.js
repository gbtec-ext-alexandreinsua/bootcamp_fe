/* EJERCICIO 28.-
Crea un formulario para que el usuario pueda introducir dos números enteros.
Debe tener dos inputs y un botón "dividir" (dale estilos, que se vea bien).
El mensaje de no haber introducido nada en un campo debe ser diferente de un número invalido.
Cuando haga click en el botón debe realizar el cálculo y mostrarlo en
un div. 
Crea una función espedífica  que divida dos números y lanza una excepción si el divisor es cero.
Usa try-catch para manejar el error en otra función. 
 */

const $dividend = document.getElementById("dividend");
const $divisor = document.getElementById("divisor");
const $divide = document.getElementById("divide");
const $divideAnswer = document.getElementById("divideAnswer");
const $p = document.createElement("p");

$divide.addEventListener("click", function () {
  try {
    $p.innerText = divideNumbers($dividend.value, $divisor.value);
    $divideAnswer.appendChild($p);
  } catch (error) {
    $p.innerText = "Indefinido. Has dividido entre cero";
    $divideAnswer.appendChild($p);
    console.error("Ha ocurrido un error: " + error.message);
  }
});

function divideNumbers(dividend, divisor) {
  if (Number(divisor) === 0) {
    throw new Error("No se puede dividir entre 0");
  }
  console.log(dividend / divisor);

  return dividend / divisor;
}



/* EJERCICIO 29.-
Crea un formulario para que el usuario pueda introducir un array de números enteros.
Hay que validar que todos los valores sean números válidos.
El mensaje de no haber introducido nada debe ser diferente de un números inválido.
Escribe una función que acepte un array y lance una excepción de tipo RangeError si el tamaño del array es mayor que 10.
Debe mostar la media de la lista,
*/

// const $array = document.getElementById("dividend");
// const $median = document.getElementById("divide");
// const $medianAnswer = document.getElementById("divideAnswer");

// $divide.addEventListener("click", function () {
//   try {
//     $p.innerText = medianOfNumbers($array.value);
//     $medianAnswer.appendChild($p);
//   } catch (error) {
//     $p.innerText = "Indefinido. Has dividido entre cero";
//     $medianAnswer.appendChild($p);
//     console.error("Ha ocurrido un error: " + error.message);
//   }
// });

// function medianOfNumbers(numbers) {
//   const numArray = numbers.split(',');
//   let total;
//   for (const num of numArray) {
//     total += num;
//   }
//   return total / numArray.length;
// }

/* EJERCICIO 30.- 
Crea una web que solicite al usuario un valor numérico. 
La app debe devolver el cuadrado de ese número y su factorial si el número es menor de 10.
Si es mayor de 10, solo se muestra el resultado.
El mensaje de no haber introducido nada debe ser diferente de haber ingresado un número inválido.
Si el valor ingresado no es un número, lanza una excepción personalizada y manéjala en un bloque try-catch.
*/
