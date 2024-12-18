/* EJERCICIO 28.-
Crea un formulario para que el usuario pueda introducir dos números enteros.
Debe tener dos inputs y un botón "dividir" (dale estilos, que se vea bien).
El mensaje de no haber introducido nada en un campo debe ser diferente de un número invalido.
Cuando haga click en el botón debe realizar el cálculo y mostrarlo en
un div. 
Crea una función espedífica  que divida dos números y lanza una excepción si el divisor es cero.
Usa try-catch para manejar el error en otra función. 
 */

function divide(a, b) {
    if (b === 0) throw new Error("No se puede dividir por cero.");
    return a / b;
  }
  
  document.getElementById("divideBtn").addEventListener("click", () => {
    const num1 = document.getElementById("num1").value.trim();
    const num2 = document.getElementById("num2").value.trim();
    const resultDiv = document.getElementById("result");
  
    try {
      if (num1 === "" || num2 === "") {
        throw new Error("Todos los campos deben estar llenos.");
      }
      const a = parseFloat(num1);
      const b = parseFloat(num2);
  
      if (isNaN(a) || isNaN(b)) {
        throw new Error("Por favor, ingrese números válidos.");
      }
  
      const result = divide(a, b);
      resultDiv.textContent = `Resultado: ${result}`;
      resultDiv.style.color = "black";
    } catch (error) {
      resultDiv.textContent = `Error: ${error.message}`;
      resultDiv.style.color = "red";
    }
  });
  

/* EJERCICIO 29.-
Crea un formulario para que el usuario pueda introducir un array de números enteros.
Hay que validar que todos los valores sean números válidos.
El mensaje de no haber introducido nada debe ser diferente de un números inválido.
Escribe una función que acepte un array y lance un RangeError si el tamaño del array es mayor que 10.
Usa una excepción personalizada para advertir al usuario de esto.
*/
// 1,2,3,4,5
//separamos la cadena por un separador (,)



//recuperar el dato del formulario


//convertirlo a un array de numeros


//tratamos el array



/* EJERCICIO 30.- 
Crea una web que solicite al usuario un valor numérico. 
La app debe devolver el cuadrado de ese número y su factorial si el número es menor de 10.
El mensaje de no haber introducido nada debe ser diferente de haber ingresado un número inválido.
Si el valor ingresado no es un número, lanza una excepción personalizada y manéjala en un bloque try-catch.
*/
