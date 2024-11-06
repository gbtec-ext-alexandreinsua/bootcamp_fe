/*
  Ejercicio 4: Verificación de Número Primo
  Escribe un método que reciba un número entero positivo mayor que 1 y determine si es un número primo.
  Un número es primo si solo es divisible por 1 y por sí mismo.
  El método debe validar el tipo de dato y mostrar el resultado en la consola.
*/

function numeroPrimo(numeroPrimo) {
if (numeroPrimo % 2 == 0) {
    return false;
} else {
    for (let i = 3; i <= Math.sqrt(numeroPrimo); i += 2) {
        if (numeroPrimo % i == 0) {
            return false;
        }
    }
    return true;    

}}