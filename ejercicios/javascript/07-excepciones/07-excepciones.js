/* EJERCICIO 28.-
Crea un formulario para que el usuario pueda introducir dos números enteros.
Debe tener dos inputs y un botón "dividir" (dale estilos, que se vea bien).
El mensaje de no haber introducido nada en un campo debe ser diferente de un número invalido.
Cuando haga click en el botón debe realizar el cálculo y mostrarlo en
un div. 
Crea una función espedífica  que divida dos números y lanza una excepción si el divisor es cero.
Usa try-catch para manejar el error en otra función. 
 */


// Función para realizar la división de los dos numeros introducidos por el usuario
function dividir(a, b) {
    if (b === 0) {
      throw new Error("El divisor no puede ser cero.");
    }
    return a / b;
  }
  
  // Función para la división con validaciones
  function handleDivision() {
    const num1Input = document.getElementById("num1").value;
    const num2Input = document.getElementById("num2").value;
    const resultDiv = document.getElementById("result");
    // Limpia el resultado anterior cuando refresquemos 
    resultDiv.textContent = "";
    resultDiv.classList.remove("error");
  
    try {
      if (num1Input === "" || num2Input === "") {
        throw new Error("Todos los campos deben estar llenos.");
      }
  
      // Validar si los valores son numeross
      const num1 = parseFloat(num1Input);
      const num2 = parseFloat(num2Input);
      if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Ambos valores deben ser números válidos!");
      }
  
      // Realizamos  la división
      const result = dividir(num1, num2);
      resultDiv.textContent = `Resultado: ${result}`;
    } catch (error) {
      // manejaremos los errores 
      resultDiv.textContent = error.message;
      resultDiv.classList.add("error");
    }
  }

  function resetForm() {
    // Reinicia los valores de los inputs al tocar de  nuevo para poner otro primer numero
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    // Limpia el resultado mostrado
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "";
    resultDiv.classList.remove("error");
  }
  


/* EJERCICIO 29.-
Crea un formulario para que el usuario pueda introducir un array de números enteros.
Hay que validar que todos los valores sean números válidos.
El mensaje de no haber introducido nada debe ser diferente de un números inválido.
Escribe una función que acepte un array y lance un RangeError si el tamaño del array es mayor que 10.
Usa una excepción personalizada para advertir al usuario de esto.
*/

// Función para validar y procesar el array
function processArray(inputArray) {
  const validPattern = /^[1-5]+$/; // Acepta solo números entre 1 y 5 (sin espacios)
  
  const numbers = inputArray.map(value => {
      if (value.trim() === "") {
          throw new Error("Uno o más campos están vacíos.");
      }
      // Eliminamos espacios y dividimos por comas
      const values = value.split(","); 

      // Validamos que todos los números sean válidos y estén dentro del patrón [1,2,3,4,5]
      for (let val of values) {
          if (!validPattern.test(val.trim())) {
              throw new Error(`El valor '${val}' no es válido. Solo se aceptan números entre 1 y 5.`);
          }
      }

      // Convertimos los valores a enteros y los devolvemos como un array
      return values.map(val => parseInt(val.trim()));
  });

  // Verificamos el tamaño del array
  if (numbers.length > 10) {
      throw new Error("El array no puede tener más de 10 elementos.");
  }

  // Aplanamos el array y devolvemos los números procesados
  return numbers.flat();
}

// Función que se ejecuta al enviar el formulario
function handleSubmit(event) {
  event.preventDefault(); // Prevenimos el envío del formulario por defecto

  const inputField = document.getElementById("arrayInput");
  const resultDiv = document.getElementById("result");

  // Limpiamos mensajes anteriores
  resultDiv.textContent = "";

  try {
      // Obtenemos los valores del input
      const userInput = inputField.value.split(","); // Dividimos por comas
      const validArray = processArray(userInput);
      resultDiv.textContent = `Array válido: [${validArray.join(", ")}]`;
  } catch (error) {
      // Mostramos el mensaje de error adecuado
      resultDiv.textContent = `Error: ${error.message}`;
  }
}

document.getElementById("numberForm").addEventListener("submit", handleSubmit);



/* EJERCICIO 30.- 
Crea una web que solicite al usuario un valor numérico. 
La app debe devolver el cuadrado de ese número y su factorial si el número es menor de 10.
El mensaje de no haber introducido nada debe ser diferente de haber ingresado un número inválido.
Si el valor ingresado no es un número, lanza una excepción personalizada y manéjala en un bloque try-catch.
*/

// Función para calcular el factorial de un número
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}


