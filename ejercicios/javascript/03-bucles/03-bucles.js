/*
  Ejercicio 4: Verificación de Número Primo
  Escribe un método que reciba un número entero positivo mayor que 1 y determine si es un número primo.
  Un número es primo si solo es divisible por 1 y por sí mismo.
  El método debe validar el tipo de dato y mostrar el resultado en la consola.
*/

function checkPrimeNumber(num) {
  if ((!Boolean(num) || Number.isNaN(num) || !Number.isInteger(num)) && num > 0) {
    console.log("El valor introducido no es válido. Debe ser un número natural.")
  } else {
    let isPrime = true;
    for (let i = num - 1; i > 1; i--) {
      if ((num % i) === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log("El número " + num + " es primo.")
    } else {
      console.log("El número " + num + " no es primo.")
    }
  }
}

function esNumeroPrimo(num) {
  // Validación del tipo de dato y valor
  if (typeof num !== 'number' || !Number.isInteger(num) || num <= 1) {
    console.log("Por favor, ingresa un número entero positivo mayor que 1.");
    return;
  }


  // Verificar si el número es primo
  // Un numero no es primo cuando dividido por los numeros a partir del 2 
  // hasta el numero dado, su resto es 0
  
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

/*
  Ejercicio 5: Calculadora Básica
  Escribe un método que reciba tres parámetros: dos números y una operación en formato de texto (suma, resta, multiplicación, división).
  El método debe realizar la operación indicada y mostrar el resultado en la consola.
  Debe validar que los dos primeros parámetros sean números y que la operación sea válida.
  Si la operación es una división, debe verificar que el segundo número no sea cero.
*/

function calculator(numA, numB, operation) {
  if ((Boolean(numA) && !Number.isNaN(numA)) && (Boolean(numB) && !Number.isNaN(numB))) {
    switch (operation) {
      case "/":
        if (numB) {
          console.log(numA / numB);
        } else {
          console.log("No se puede dividir entre cero")
        }
        break;
      case "*":
        console.log(numA * numB);
        break;
      case "+":
        console.log(numA + numB);
        break;
      case "-":
        console.log(numA - numB);
        break;
      default:
        console.log("El símbolo \"" + operation + "\" no se reconoce. Debe ser uno de los siguientes: \"+\", \"-\", \"*\" o \"/\".");
    }
  } else {
    console.log("Los valores introducidos no son válidos")
  }
}