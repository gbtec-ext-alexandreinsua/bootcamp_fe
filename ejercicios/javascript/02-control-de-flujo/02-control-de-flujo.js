/*
EJERCICIO 7.-  Crea un método que le pida al usuario un número
y imprima por consola si es par o impar 
Por ejemplo
"Introduzca un número:"
2
"2 es un número par."
*/

function showIsEvenOrOdd() {
  // validamos que el usuario haya una cadena de texto con contenido
  const numberString = window.prompt("Introduzca un número entero:");

  // si introduce una cadena vacía
  // mostramos un error
  if (!numberString) {
    console.error("No has introducido nada");
  } else {
    // tranformarmos esa cadena a un número
    // puede dar como resultado Number | NaN
    let number = Number(numberString);

    // comprobamos que el número sea un entero
    // si no es entero mostramos un error
    if (!Number.isInteger(number)) {
      console.error(`${number} no es un entero`);
    } else {
      // si es un entero
      // calculamos si es par o impar
      // y mostramos el mensaje correspondiente
      if (number % 2 === 0) {
        console.log(`${number} es un número par`);
      } else {
        console.log(`${number} es un número impar`);
      }
    }
  }
}

/*
EJERCICIO 8.-
Crea un método que le pida al usuario que introduza una letra
Si la letra es A o B debe mostrar por consola que que ha acertado
si la letra es C o D debe mostrar por consola que está cerca de acertar
en caso caso contrario debe mostrar por consola que está equivocado.
"Ha acertado", "Casi ha acertado", "Está equivocado"
*/
// function procesarLetra() {
//   const response = window.prompt("Dime una letra: ").trim().toUpperCase();

//   switch (response) {
//     case "A":
//     case "B":
//       window.alert("Ha acertado");
//       break;
//     case "C":
//       window.alert("Casi ha acertado");
//       break;
//     default:
//       window.alert("Está equivocado");
//       break;
//   }
// }

// function procesarLetraBucle() {
//   let opcionValida = true;
//   let response = window.prompt("Dime una letra: ").trim().toUpperCase();

//   do {
//     if (!opcionValida) {
//       response = window
//         .prompt("Esa opción no es válida. Introduzca otra: ")
//         .trim()
//         .toUpperCase();
//     }

//     switch (response) {
//       case "A":
//       case "B":
//         opcionValida = true;
//         window.alert("Ha acertado");
//         break;
//       case "C":
//         opcionValida = true;
//         window.alert("Casi ha acertado");
//         break;
//       default:
//         opcionValida = false;
//         break;
//     }
//   } while (!opcionValida);
// }
// function adivinaLaletra(){
//   let letra = window.prompt("Introduce unha letriña, meu rey: ");

//   if(letra === "A" || letra == "B"){
//     console.log("Ha acertado");
//   }else if(letra === "C" || letra === "D"){
//     console.log("Casi ha acertado");
//   }else{
//     console.log("Está equivocado");
//   }
// }
//adivinaLaletra();
/*
EJERCICIO 9.- 
Crea un método que le pida al usuario que introduzca dos números.
Debe imprimir el resultado de restar el menor al mayor
Por ejemplo si introduce 5 y 8 ó 8 y 5 debe mostrar por consola 
"El resultado de restarle 5 a 8 es 3".
 */
function restaMayorMenor(){

const numberone = window.prompt("Introduce el primer número");
const numbertwo = window.prompt("Introduce el segundo número");


if(isNaN(numberone) || isNaN(numbertwo)){
  window.alert("Introduzca solo números ")
  return;
}

const mayor = Math.max(numberone,numbertwo);
const menor = Math.min(numberone, numbertwo);

const resultado = mayor - menor;

console.log(`El resultado de restarle ${menor} a ${mayor} es ${resultado}`);

}

restaMayorMenor();

function higherMinusLower() {
  const firstNum = window.prompt("Introduce un número positivo");
  const secondNum = window.prompt("Introduce otro número positivo");
  if (
    !isNaN(firstNum) &&
    firstNum >= 0 &&
    firstNum != "" &&
    !isNaN(secondNum) &&
    secondNum >= 0 &&
    secondNum != ""
  ) {
    console.log(
      Math.max(firstNum, secondNum) +
        " - " +
        Math.min(firstNum, secondNum) +
        " = " +
        (Math.max(firstNum, secondNum) - Math.min(firstNum, secondNum))
    );
  } else {
    console.log("Debes introducir dos números positivos");
  }
}

function restarDosNumeros() {
  const num1 = Number(prompt("Introduce el primer número:").trim());
  const num2 = Number(prompt("Introduce el segundo número:").trim());

  //Validación
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Error: Ambos valores deben ser números.");
    return; // Terminamos la función si hay un error
  }

  // Determinamos el mayor y el menor
  const mayor = Math.max(num1, num2);
  const menor = Math.min(num1, num2);

  const resultado = mayor - menor;

  console.log(`El resultado de restarle ${menor} a ${mayor} es ${resultado}`);
}

function restaNum() {
  // .trim() elimina los espaciones en blanco alrededor del input del usuario
  let num1 = window.prompt("Introduce el primer número:").trim(); // pedimos el primero
  let num2 = window.prompt("Introduce el segundo número:").trim(); // ahora el segundo

  // validamos que no haya introducido nada o que haya ingresado un espacio en blanco
  if (!num1 || !num2) {
    window.alert("Error: Debes introducir dos números."); // lanzamos este error si el usuario no ingresa nada
  } else {
    // los parseo a un número
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
      // verifico si son numeros
      window.alert("Error: Debes introducir dos números válidos."); // Lanzamos error si no son números lo que introducen
    } else if (num1 > num2) {
      // si el primer numero es mayor que el segundo calculamos la resta del primero con el segundo
      let resultado = num1 - num2;
      window.alert(`El resultado de restar ${num2} a ${num1} es: ${resultado}`);
    } else if (num1 < num2) {
      // l primer número es menor que el segundo, calcula la resta del segundo número menos el primero y muestra el resultado
      let resultado = num2 - num1;
      window.alert(`El resultado de restar ${num1} a ${num2} es: ${resultado}`);
    } else {
      window.alert("Ambos números son iguales, el resultado de restarlos es 0");
    }
  }
}
restaNum();

/*
EJERCICIO 10.-
Crea un método que le pida al usuario el medio de transporte y los kilómetros que va a recorrer.
Debe calcular el coste del viaje y mostrar el resultado con un popup.
El primer dato es una cadena de caracteres que puede ser "Bicicleta", "Coche", "Tren" o "autobus".
A continuación, si ha elegido el coche debe pedir el número de kilometros del viaje que va a realizar
y el número de litros aproximado que va a consumir;

Los viajes en tren valen 10€ cada 15km o fracción (un viaje de 16km cuesta 20€)
Los viajes en autobús valen 4,5€  cada 25km  (un viaje de 26km cuesta 4,5€)
El coste del viaje en coche es distancia * combustible * 0,32€.
 
Si la opción es bicicleta debe mostrar "Buen viaje!"
Si la opción es coche debe mostrar "Es costo del viaje es ( combustible * kilómetros *  0,32€  )"cal
Si la opción es tren o autobús mostrar "Es costo del viaje es ( kilómetros *  precio )"
Si introduce otra cosa, de mostrar "La opción que has presentado (transporte), no es válida" 
*/

function medioTransporteYKilometros(){

  let TipoTransporte = window.prompt("¿Qué medio de transporte vas a utilizar? ");
  let kilometros = window.prompt("Cuántos Km vas a recorrer");

  let Bicicleta = "Bicicleta";
  let Coche = "Coche";
  let Tren = "Tren ";
  let autobus = "autobus";

  const resultadoCoche = kilometros * 0.32;
  const resultadoTren = kilometros * 1.5; 

  if(TipoTransporte === Bicicleta){
    alert("Buen Viaje")
  }else if(TipoTransporte === tren && kilometros > 0){
    alert(`Es costo del viaje es  ${resultadoTren} `)
  }else if{
    
  }

  


}
//medioTransporteYKilometros();


/*
EJERCICIO 11.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar por consola su cuadrado,
pero si es una cadena de caracteres debe trasformarla a mayúsculas.
*/
function datoCualquiera(){
  let dato = window.prompt("Ingresa un dato, un numero entero o una cadena de texto");

  let numero = parseInt(dato);
  if(isNaN(numero) && Number.isInteger(numero)){
    console.log("El cuadrado del número es : " + numero * numero);
  }else if(typeof dato === "string"){
    console.log("La cadena de texto en mayus: " dato.toUpperCase());
  }else{
    console.log("El dato ingresado no es válido. ");
  }
}

//datoCualquiera();

/*
TODO
EJERCICIO 12.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero múltiplo de 3 debe mostrar por consola
su descomposición en factores, p. ej. 12 = 3 x 4 (primero el factor menor, no quiero la descomposición en factores
primos completa). Si no, lo debe mostrar tal cual y decir que es primo)
Si es una cadena con una longitud mayor que 5 debe mostrarla por consola recortada. en caso contrario debe mostrarla
tal cual.
*/

/*
TODO
EJERCICIO 13.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar su doble. Si es un string,
Debe mostrarla en mayúsculas.
*/

/*
TODO
EJERCICIO 14.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar el resto de dividirlo
entre 5. Si es un string, debe mostrar en mayúsculas o minúsculas.
*/

/*
TODO
EJERCICIO 15.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrarlo al cubo, si tiene decimales, debe mostrarlo
al cuadrado. Si es un string debe cambiar la primera "a" por un asterisco. TIP: La clase String tiene un método replace(). 
*/
