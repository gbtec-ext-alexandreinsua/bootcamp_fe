/* ------------------------------------------------------
  EJERCICIO 4: Verificación de Número Primo

  Escribe un método que reciba un número entero positivo mayor que 1 y determine si es un número primo.
  Un número es primo si solo es divisible por 1 y por sí mismo.
  El método debe validar el tipo de dato y mostrar el resultado en la consola.
------------------------------------------------------ */

//OPCIÓN 1  ->  Ideal para un booleano sin console.log y return false / return true
function numeroPrimo(numero) {
    for(let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            console.log(numero + " no es primo.");
            return;
        }
    }
    console.log(numero + " es primo.");
}

numeroPrimo(6);
numeroPrimo(7);
numeroPrimo(9);



/* ------------------------------------------------------
  EJERCICIO 5: Calculadora Básica

  Escribe un método que reciba tres parámetros: dos números y una operación en formato de texto (suma, resta, multiplicación, división).
  El método debe realizar la operación indicada y mostrar el resultado en la consola.
  Debe validar que los dos primeros parámetros sean números y que la operación sea válida.
  Si la operación es una división, debe verificar que el segundo número no sea cero.
------------------------------------------------------ */

function calcular(num1, num2, operacion) {
  // Validar que num1 y num2 sean números
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      console.log("Error: Ambos parámetros deben ser números.");
      return;
  }

  // Validar que la operación sea válida
  if (!['suma', 'resta', 'multiplicación', 'division'].includes(operacion)) {
      console.log("Error: La operación debe ser 'suma', 'resta', 'multiplicación' o 'division'.");
      return;
  }

  // Realizar la operación
  let resultado;
  switch (operacion) {
      case 'suma':
          resultado = num1 + num2;
          break;
      case 'resta':
          resultado = num1 - num2;
          break;
      case 'multiplicación':
          resultado = num1 * num2;
          break;
      case 'division':
          // Validar que el segundo número no sea cero
          if (num2 === 0) {
            console.log("Error: No se puede dividir entre cero.");
        } else {
            resultado = num1 / num2;
        }
        break;
  }

  // Mostrar el resultado en la consola
  console.log("El resultado de " + operacion + " es: " + resultado);
}

// Ejemplo de uso
calcular(10, 5, 'suma');          // El resultado de la suma es: 15
calcular(10, 5, 'resta');         // El resultado de la resta es: 5
calcular(10, 5, 'multiplicación'); // El resultado de la multiplicación es: 50
calcular(10, 0, 'division');      // Error: No se puede dividir entre cero.
