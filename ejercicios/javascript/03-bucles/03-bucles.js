/*
  Ejercicio 4: Verificación de Número Primo
  Escribe un método que reciba un número entero positivo mayor que 1 y determine si es un número primo.
  Un número es primo si solo es divisible por 1 y por sí mismo.
  El método debe validar el tipo de dato y mostrar el resultado en la consola.
*/
function esPrimo(number){
   
    if (number <= 1 || !Number.isInteger(number)){
        console.error("El número debe ser un entero mayor que 1");
        return;
    } 
    else{ 
        for (i= 2; i < number; i++) {
            if(number % i === 0){
                console.log(number + " no es un número primo");
                return;
            }
        }
        console.log(number + " es un número primo");
        return;
    }
    }
        
esPrimo(5.5);
esPrimo(-5);
esPrimo(5);
esPrimo(6);
esPrimo(9);
esPrimo(13);





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
let resultado;
switch(calculo){
case 1 (calculo ==="suma"):
    console.log(resultado = n1 + n2);
    break;
case 2 (calculo ==="resta"):
    console.log(resultado = n1 - n2);
    break;
case 3 (calculo === "multiplicacion" || "multiplicación"):
    console.log(resultado = n1 * n2);
    break;
case 4 (calculo === "division" || "división"):
    if (n2 === 0){
        console.log("No es posible dividir entre 0");
    } 
    else{ 
    console.log(resultado = n1/ n2);
}
default: console.prompt("El operador introducido no es correcto")
 }
}


calculadora(4, 5, "suma");
