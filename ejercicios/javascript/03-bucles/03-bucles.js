/*
  Ejercicio 4: Verificación de Número Primo
  Escribe un método que reciba un número entero positivo mayor que 1 y determine si es un número primo.
  Un número es primo si solo es divisible por 1 y por sí mismo.
  El método debe validar el tipo de dato y mostrar el resultado en la consola.
*/
function esPrimo(){
    const x = window.prompt("Introduce un número")

    // if (!x){
    //     console.error("No has introducido nada");
    //     return ;
    // }
    if (x <= 1){
        console.error("El número debe ser mayor que 1");
        return ;
    }
   const number = Number(x); 
    if (!Number.isInteger(number)){
        console.error(`${number} no es un entero`)
        return;
    }   
    else {
        for(i= 2; i< number, i++){
            number / i;
           switch case 1 (number % i == 0){
            console.log(`${number} es un número primo`);
           }
           switch case 2 (number % i != 0){
            console.log(`${number} no es un número primo`);
            break;
           }}}}
esPrimo();


    // if (number % number === 0 && number / 1 == number){
    //     console.log(`${number} es un número primo`);
    // } else {
    //     console.log(`${number} no es un número primo`);
    // }



/*
  Ejercicio 5: Calculadora Básica
  Escribe un método que reciba tres parámetros: dos números y una operación en formato de texto (suma, resta, multiplicación, división).
  El método debe realizar la operación indicada y mostrar el resultado en la consola.
  Debe validar que los dos primeros parámetros sean números y que la operación sea válida.
  Si la operación es una división, debe verificar que el segundo número no sea cero.
*/

function calculadora(n1, n2, calculo){
n1 = Number.parseInt(n1);
n2 = Number.parseInt(n2);
if (n1)
 switch{
case 1 (calculo ==="suma"):
    console.log(n1 + n2);
case 2 calculo ==="resta":
    console.log(n1 - n2);
    break;
case 3 calculo === "multiplicacion" || "multiplicación":
    console.log(n1 * n2);
case 4 calculo === "division" || "división":
    if (n2 === 0){
        "No es posible dividir entre 0"
    }   console.log(n1/ n2);
 }
else {
    console.prompt("El operador introducido no es correcto")
 }
}