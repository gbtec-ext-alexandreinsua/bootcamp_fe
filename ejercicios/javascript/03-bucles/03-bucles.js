/*
 Ejercicio 4: Verificación de Número Primo
 Escribe un método que reciba un número entero positivo mayor que 1 y determine si es un número primo.
 Un número es primo si solo es divisible por 1 y por sí mismo.
 El método debe validar el tipo de dato y mostrar el resultado en la consola.
*/

function numeroPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            console.log(numero, "no es primo");
            break;
        } else {
            console.log(numero, "sí es primo");
            break;
        }
    }
}

numeroPrimo(6);
numeroPrimo(7);
numeroPrimo(9);
