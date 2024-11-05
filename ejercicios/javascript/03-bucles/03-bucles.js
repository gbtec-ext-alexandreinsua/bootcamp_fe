/*
  Ejercicio 4: Verificación de Número Primo
  Escribe un método que reciba un número entero positivo mayor que 1 y determine si es un número primo.
  Un número es primo si solo es divisible por 1 y por sí mismo.
  El método debe validar el tipo de dato y mostrar el resultado en la consola.
*/

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
      console.log(`${num} no es un número primo.`);
      return;
    }
  }
  console.log(`${num} es un número primo.`);
}


esNumeroPrimo(29);
esNumeroPrimo(10);  
esNumeroPrimo(1);   
esNumeroPrimo("23");


/*EJEMPLO ALFONSO

function isPrimeNumber(number){
    if (!number || number <= 1){
        console.log("El número debe ser mayor que 1.")
        return;
    }


    let prime = true;


    for (let index=number-1; index > 1; index--) {
        if (number % index === 0){
            prime = false;
            break;
        }
    }


    return prime;
}

/*
  Ejercicio 5: Calculadora Básica
  Escribe un método que reciba tres parámetros: dos números y una operación en formato de texto (suma, resta, multiplicación, división).
  El método debe realizar la operación indicada y mostrar el resultado en la consola.
  Debe validar que los dos primeros parámetros sean números y que la operación sea válida.
  Si la operación es una división, debe verificar que el segundo número no sea cero.
*/


if (isNam(num1) || isNam (num2) ){
  }