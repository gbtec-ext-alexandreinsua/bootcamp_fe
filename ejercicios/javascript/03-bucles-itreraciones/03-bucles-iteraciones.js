/*
  Ejercicio 4: Verificación de Número Primo
  Escribe un método que reciba un número entero positivo mayor que 1 y determine si es un número primo.
  Un número es primo si solo es divisible por 1 y por sí mismo.
  El método debe validar el tipo de dato y mostrar el resultado en la consola.
*/

function esPrimo(numero) {
  // Validación del tipo de dato
  if (typeof numero !== 'number' || !Number.isInteger(numero)) {
      console.log("El valor debe ser un número entero.");
      return;
  }
  if (numero <= 1) {
      console.log("El número debe ser mayor que 1.");
      return;
  }

  // Comprobación de si es primo
  for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
          console.log(`${numero} no es un número primo.`);
          return;
      }
  }

  console.log(`${numero} es un número primo.`);
}




/*
  Ejercicio 5: Calculadora Básica
  Escribe un método que reciba tres parámetros: dos números y una operación en formato de texto (suma, resta, multiplicación, división).
  El método debe realizar la operación indicada y mostrar el resultado en la consola.
  Debe validar que los dos primeros parámetros sean números y que la operación sea válida.
  Si la operación es una división, debe verificar que el segundo número no sea cero.
*/