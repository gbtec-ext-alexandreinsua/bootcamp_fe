/*
  Ejercicio 4: Verificación de Número Primo
  Escribe un método que reciba un número entero positivo mayor que 1 y determine si es un número primo.
  Un número es primo si solo es divisible por 1 y por sí mismo.
  El método debe validar el tipo de dato y mostrar el resultado en la consola.
*/

function showIsPrimeNumber(number){
  // validación  
  // comprobamos que se envíe un número válido con el constructor (Number())
  // comprobamos que el numero sea un entero ()

  if (!Number.isInteger(Number(number)) || !Boolean(number)  || number < 1){
    console.log("El valor introducido no es válido. Debe ser un número entro");
  } else {
    // establecemos una bandera, flag
      let isPrime = true;
    
    // recorremos todos los números comprendidos entre 2 y el anterior al número
    // p. ej. para 10 recorrerá de 2 a 9
    for (let i = 2; i < number; i++) {
      // si el número que se recibe por parámetro es divisible entre entre i
      // no será primo 
      if (number % i === 0){
        isPrime = false;
        break;
      }
    }

    if (isPrime){
      console.log(`El número ${number} es primo`);
    } else {
      console.log(`El número ${number} no es primo`);
    }
  }
}

// alternativa con el bucle que va de más a menos
function showIsPrimeNumber2(number){
  // validación  
  if (!Boolean(number) || !Number.isInteger(Number(number)) || number < 1){
    console.log("El valor introducido no es válido. Debe ser un número entero");
  } else {
    // establecemos una bandera, flag
    
    let isPrime = true;
    
    // recorremos todos los números comprendidos entre 2 y el anterior al número
    // p. ej. para 10 recorrerá de 9 a 2
    for (let i = number - 1; i > 2; i--) {
      // si el número que se recibe por parámetro es divisible entre entre i
      // no será primo 
      if (number % i === 0){
        isPrime = false;
        break;
      }
    }

    if (isPrime){
      console.log(`El número ${number} es primo`);
    } else {
      console.log(`El número ${number} no es primo`);
    }
  }
}

// alternativa con función auxiliar de validación
function isInvalidNumber(number){
  return !Boolean(number) || !Number.isInteger(Number(number)) || number < 1;
}

function showIsPrimeNumber3(number){
  // validación a través una función auxiliar
  if (isInvalidNumber(number)){
    console.log("El valor introducido no es válido. Debe ser un número entero");
  } else { 
    let isPrime = true;
    for (let i = number - 1; i > 2; i--) {
      if (number % i === 0){
        isPrime = false;
        return false;
      }
    }
  return true;
  }
}


/*
  Ejercicio 5: Calculadora Básica
  Escribe un método que reciba tres parámetros: dos números y una operación en formato de texto (suma, resta, multiplicación, división).
  El método debe realizar la operación indicada y mostrar el resultado en la consola.
  Debe validar que los dos primeros parámetros sean números y que la operación sea válida.
  Si la operación es una división, debe verificar que el segundo número no sea cero.
*/

function calculadora(numero1, numero2, operacion) {
  let resultado = 0;
  if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
    console.log("Los dos primeros parámetros deben ser números.");
  } else if (typeof operacion !== 'string') {
    console.log("La operación debe ser una cadena de texto.");
  }  else {
    switch (operacion.toLowerCase()) {
      case 'suma':
        resultado = numero1 + numero2;
        break;
      case 'resta':
        resultado = numero1 - numero2;
        break;
      case 'multiplicacion':
      case 'multiplicación':
        resultado = numero1 * numero2;
        break;
      case 'division':
      case 'división':
        if (numero2 === 0) {
          console.log("Error: No es posible dividir un número entre cero.");
        } else {
          resultado = numero1 / numero2;
        }
        break;
      default:
        console.log("Operación no válida. Usa suma, resta, multiplicacion o division.");
    }

    if (resultado || resultado === 0){
      console.log("El resultado de la operación es: " + resultado)
    }
  }
}
