/*
  Ejercicio 4: Verificación de Número Primo
  Escribe un método que reciba un número entero positivo mayor que 1 y determine si es un número primo.
  Un número es primo si solo es divisible por 1 y por sí mismo.
  El método debe validar el tipo de dato y mostrar el resultado en la consola.
*/

function NumeroPrimo(num) {
    // aqui validamos si es un número y es mayor que 1:
    if (typeof num !== 'number' || num <= 1 || !Number.isInteger(num)) {
        console.log("Ingresa un número entero positivo mayor que 1.");
        return;
    }
    // Comprobar si el número es primo con un for 
    // va desde 2 hasta la raíz cuadrada de num (Math.sqrt(num)) Esto se hace porque, si un número (num) tiene un divisor mayor que su raíz cuadrada, 
    // el otro divisor debe ser menor que la raíz cuadrada. (función buscada): 

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(num + " no es un número primo.");
            return;
        }
    }
    console.log(num + " es un número primo.");
}

NumeroPrimo(11);  
NumeroPrimo(10);
NumeroPrimo(9);


/*
  Ejercicio 5: Calculadora Básica
  Escribe un método que reciba tres parámetros: dos números y una operación en formato de texto (suma, resta, multiplicación, división).
  El método debe realizar la operación indicada y mostrar el resultado en la consola.
  Debe validar que los dos primeros parámetros sean números y que la operación sea válida.
  Si la operación es una división, debe verificar que el segundo número no sea cero.
*/


function calculadora(numero1, numero2, operacion) {
    // Validar que los dos primeros parámetros sean números
    if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
        console.log("Los dos primeros parámetros deben ser números.");
        return;
    }

    // Realizar la operación según el tipo indicado
    if (operacion === 'suma') {
        console.log(`Resultado: ${numero1 + numero2}`);
    } else if (operacion === 'resta') {
        console.log(`Resultado: ${numero1 - numero2}`);
    } else if (operacion === 'multiplicación') {
        console.log(`Resultado: ${numero1 * numero2}`);
    } else if (operacion === 'división') {
        if (numero2 === 0) {
            console.log("Error: No se puede dividir entre cero.");
        } else {
            console.log(`Resultado: ${numero1 / numero2}`);
        }
    } else {
        console.log("Operación no válida. Usa: suma, resta, multiplicación, división.");
    }
}

calculadora(10, 5, 'suma');         
calculadora(10, 5, 'resta');         
calculadora(10, 5, 'multiplicación');
