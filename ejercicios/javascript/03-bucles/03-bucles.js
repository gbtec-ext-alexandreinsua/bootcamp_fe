/*

  Ejercicio 4: Verificación de Número Primo

  Escribe un método que reciba un número entero positivo mayor que 1 y determine si es un número primo.

  Un número es primo si solo es divisible por 1 y por sí mismo.

  El método debe validar el tipo de dato y mostrar el resultado en la consola.

*/
 
function isPrimeNumber(number){
    if (!number || number <= 1 || !Number.isInteger(number)){
        console.log("Número no válido")
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

//console.log(isPrimeNumber(window.prompt("Introduce un número")));

/*

  Ejercicio 5: Calculadora Básica

  Escribe un método que reciba tres parámetros: dos números y una operación en formato de texto (suma, resta, multiplicación, división).

  El método debe realizar la operación indicada y mostrar el resultado en la consola.

  Debe validar que los dos primeros parámetros sean números y que la operación sea válida.

  Si la operación es una división, debe verificar que el segundo número no sea cero.

*/


function calculadora(num1, num2, operacion){
    if(typeof Number.num1 === "undefined" || typeof Number.num2 === "undefined"){
        console.log("Números no válidos");
        return;
    }
    if(operacion === "suma" || operacion === "resta" || operacion === "multiplicacion" || operacion === "division") {
        if (operacion === "division" && num2 === 0) {
            console.log("No se puede dividir entre 0");
            return;
        } else {
            let total;
            switch (operacion) {
                case "suma":
                    total = Number(num1) + Number(num2);
                    break;
                case "resta":
                    total = num1 - num2;
                    break;
                case "multiplicacion":
                    total = num1 * num2;
                    break;
                case "division":
                    total = num1 / num2;
                    break;
                default:
                    console.log("Operacion no valida!");
            }
            console.log(`La ${operacion} de ${num1} y ${num2} es igual a ${total}`);
        }
    } else {
        console.log("Operacion no valida. Ej: (suma, resta, multiplicación, division)");
    }
}

calculadora(window.prompt("Escribe un numero"), window.prompt("Escribe otro numero"), window.prompt("Escribe una operacion. Ej:(suma, resta, multiplicacion, division)"))
 