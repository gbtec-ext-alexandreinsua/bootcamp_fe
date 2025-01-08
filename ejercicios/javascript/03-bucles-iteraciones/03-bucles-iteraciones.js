/*
 EJERCICIO 16.-
 Verificación de Número Primo
  Escribe un método que reciba un número entero positivo mayor que 1 y determine si es un número primo.
  Un número es primo si solo es divisible por 1 y por sí mismo.
  El método debe validar el tipo de dato y mostrar el resultado en la consola.
*/

function showIsPrimeNumber(number) {
  // validación
  // comprobamos que se envíe un número válido con el constructor (Number())
  // comprobamos que el numero sea un entero ()

  if (!Number.isInteger(Number(number)) || !Boolean(number) || number < 1) {
    console.log("El valor introducido no es válido. Debe ser un número entro");
  } else {
    // establecemos una bandera, flag
    let isPrime = true;

    // recorremos todos los números comprendidos entre 2 y el anterior al número
    // p. ej. para 10 recorrerá de 2 a 9
    for (let i = 2; i < number; i++) {
      // si el número que se recibe por parámetro es divisible entre entre i
      // no será primo
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`El número ${number} es primo`);
    } else {
      console.log(`El número ${number} no es primo`);
    }
  }
}

// alternativa con el bucle que va de más a menos
function showIsPrimeNumber2(number) {
  // validación
  if (!Number.isInteger(Number(number)) || number < 1) {
    console.log("El valor introducido no es válido. Debe ser un número entero");
  } else {
    // establecemos una bandera, flag

    let isPrime = true;

    // recorremos todos los números comprendidos entre 2 y el anterior al número
    // p. ej. para 10 recorrerá de 9 a 2
    for (let i = number - 1; i > 2; i--) {
      // si el número que se recibe por parámetro es divisible entre entre i
      // no será primo
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`El número ${number} es primo`);
    } else {
      console.log(`El número ${number} no es primo`);
    }
  }
}

// alternativa con función auxiliar de validación
function isInvalidNumber(number) {
  return !Number.isInteger(Number(number)) || number < 1;
}

function showIsPrimeNumber3(number) {
  // validación a través una función auxiliar
  if (isInvalidNumber(number)) {
    console.log("El valor introducido no es válido. Debe ser un número entero");
  } else {
    for (let i = number - 1; i > 2; i--) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}

/*
EJERCICIO 17.- 
Calculadora Básica
  Escribe un método que reciba tres parámetros: dos números y una operación en formato de texto (suma, resta, multiplicación, división).
  El método debe realizar la operación indicada y mostrar el resultado en la consola.
  Debe validar que los dos primeros parámetros sean números y que la operación sea válida.
  Si la operación es una división, debe verificar que el segundo número no sea cero.
*/

function calculadora(numero1, numero2, operacion) {
  let resultado = 0;
  if (typeof numero1 !== "number" || typeof numero2 !== "number") {
    console.log("Los dos primeros parámetros deben ser números.");
  } else if (typeof operacion !== "string") {
    console.log("La operación debe ser una cadena de texto.");
  } else {
    switch (operacion.toLowerCase()) {
      case "suma":
        resultado = numero1 + numero2;
        break;
      case "resta":
        resultado = numero1 - numero2;
        break;
      case "multiplicacion":
      case "multiplicación":
        resultado = numero1 * numero2;
        break;
      case "division":
      case "división":
        if (numero2 === 0) {
          console.log("Error: No es posible dividir un número entre cero.");
        } else {
          resultado = numero1 / numero2;
        }
        break;
      default:
        console.log(
          "Operación no válida. Usa suma, resta, multiplicacion o division."
        );
    }

    if (resultado || resultado === 0) {
      console.log("El resultado de la operación es: " + resultado);
    }
  }
}

// Alternativa con callbacks

/*
EJERCICIO 18.-
Dado el siguente array 
const numeros = [11, 22, 34, 45, 66, 78, 99, 44, 55, 23, 21, 32, 12, 33, 88, 67, 76, 45, 90, 43];
escribe un método reciba como parámetro el array y compruebe si el número es capicúa o no y muestre 
el resultado por consola.
*/


function capicuaOrNot(numeros){

for (let i = 0; i < numeros.length; i++) {
  capicuaOrNot(numeros[i]);
}

}


const numeros = [11, 22, 34, 45, 66, 78, 99, 44, 55, 23, 21, 32, 12, 33, 88, 67, 76, 45, 90, 43];
capicuaOrNot(numeros);

/* 
EJERCICIO 19.-
Escribe un método que le pida al usuario que introduzca un número entero que también puede ser cero.
Podra introducir todos los números que quiera hasta que introduzca la letra A (o a);
En caso de que introduzca otra cosa debe mostrar un error.
Después de introducir los números debe mostrar por consola el mayor, el menor y la media de ellos. 
Por ejemplo para los números del 0 al 10 mostrará 
Números introducidos: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
Número mayor: 10
Número menor: 0
Media: 5
*/
function numeroUsuario(){
  let Arraynumeros = [];//Este array vacío almacenará os numeros que lle pasemos mediante o input
  let datoIntroducido;

  while(true){//Bucle infinito que sigue pedindo números ata que o usuario introduce A ou a
    datoIntroducido = window.prompt("Introduce un numero entero o 0 (Introduzca A para finalizar)");

    if(datoIntroducido.toLowerCase() === 'a'){//se o usuario introduce A ou a finalizamos o bucle
      break;
    }
    let numero = parseInt(datoIntroducido);//convertimos o input a un entero

    if(isNaN(numero)){//comrpobación que o dato introducido non sexa un numero
      window.alert("Debes introducir un numero valido.");
    }else{
      Arraynumeros.push(numero);//Añadimos numeros ao array vacío
    }
 }

 if(Arraynumeros.length > 0){//comprobación de si o array está vacío
  const mayor = Math.max(...Arraynumeros);//cálculo do numero max
  const menor = Math.min(...Arraynumeros);//calculo do numero min
  const media = Arraynumeros.reduce((a, b) => a + b, 0) / Arraynumeros.length;//calculamos a media

  //mostramos por consola os datos introducidos
  console.log(`Numeros introducidos: ${Arraynumeros.join(", ")}`);
  console.log(`Numero mayor: ${mayor}`);
  console.log(`numero menor: ${menor}`);
  console.log(`Media: ${media}`)
 }else{
 //si o array está vacío sale a seguinte mensaxe
 window.alert("Array vacío ou numeros introducidos non válidos");
 }
}

// numeroUsuario();






/* 
EJERCICIO 20.-
Dado el siguiente array
const numeros = [101, 234, 567, 890, 123, 456, 789, 101, 202, 303, 404, 505, 606, 707, 808, 909, 345, 678, 901, 234];
Escribe un método que muestre por consola los múltiplos de 7 y de 11, los números primos y que cuente los pares y los impares. 
*/
const arrayNumeros = [101, 234, 567, 890, 123, 456, 789, 101, 202, 303, 404, 505, 606, 707, 808, 909, 345, 678, 901, 234];

function esPrimo(num){
  if(num <= 1)
    return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0)
      return false;
    }
    return true;
}

function comprobarNumeros(arrayNumeros){
  let multiploDe7 = [];
  let multiploDe11 = [];
  let numerosPrimos = [];
  let pares = 0;
  let impares = 0;

  arrayNumeros.forEach(num => {
    if (num % 7 === 0){
      multiploDe7.push(num);
    }
    if (num % 11 === 0){
      multiploDe11.push(num);
    }
    if (esPrimo(num)){
      numerosPrimos.push(num);
    }
    if(num % 2 === 0){
      pares++;
    }else{
      impares++;
    }
    
  });

  console.log(`Múltiplos de 7: `, multiploDe7);
  console.log(`Múltiplos de 11: `, multiploDe11);
  console.log(`Numeros Primos: `, numerosPrimos);
  console.log(`Cantidad de números pares:`, pares);
  console.log(`Cantidad de números impares:`, impares);

}
comprobarNumeros(arrayNumeros);


