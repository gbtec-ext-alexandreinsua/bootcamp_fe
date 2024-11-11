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
    return;
  }

  // tranformarmos esa cadena a un número
  // puede dar como resultado Number | NaN
  let number = Number(numberString);

  // comprobamos que el número sea un entero
  // si no es entero mostramos un error
  if (!Number.isInteger(number)) {
    console.error(`${number} no es un entero`);
    return;
  }

  // si es un entero
  // calculamos si es par o impar
  // y mostramos el mensaje correspondiente
  if (number % 2 === 0) {
    console.log(`${number} es un número par`);
  } else {
    console.log(`${number} es un número impar`);
  }
}

// showIsEvenOrOdd();

/*
EJERCICIO 8.-
Crea un método que le pida al usuario que introduza una letra
Si la letra es A o B debe mostrar por consola que que ha acertado
si la letra es C o d debe mostrar por consola que está cerca de acertar
en caso caso contrario debe mostrar por consola que este equivocado.
"Ha acertado", "Casi ha acertado", "Está equivocado"
*/
// function verificarLetra(){
  
//   const letra = prompt("Introduce una letra:").toUpperCase();

//   if (letra === 'A' || letra === 'B') {
//     console.log("Ha acertado");
//   }else if (letra === 'C' || letra === 'D') {
//     console.log("Casi ha acertado");
//   }else {
//     console.log("Está equivocado");
//   }
// }

// verificarLetra();



/*

EJERCICIO 9.- 
 Crea un método que le pida al usuario que introduzca dos números.
Debe imprimir el resultado de restar el menor al mayor
Por ejmplo si introduce 5 y 8 ó 8 y 5 debe mostrar por consola 
"El resultado de restarle 5 a 8 es 3".
 */
// function restarDosNumeros(){

//   const num1 = Number(prompt("Introduce el primer número:"));
//   const num2 = Number(prompt("Introduce el segundo número:"));
  
//   //Validación
//   if (isNaN(num1) || isNaN(num2)) {
//     console.log("Error: Ambos valores deben ser números.");
//     return; // Terminamos la función si hay un error
//   }

//   // Determinamos el mayor y el menor
//   const mayor = Math.max(num1, num2);
//   const menor = Math.min(num1, num2);

//   const resultado = mayor - menor;

//   console.log(`El resultado de restarle ${menor} a ${mayor} es ${resultado}`);
// }

// restarDosNumeros8();



/*
TODO
EJERCICIO 10.-
 Crea un método que le pida al usuario el medio de transporte que va a usar
 y que reciba dos parámetros de tipo numérico el precio del medio de transporte y los kilómetros que va a recorrer.
 Las opciones para los medios de transporte son coche, tren, bicicleta o autobus.
 Si la opción es bicicleta debe mostrar "Buen viaje"
 Si la opción es coche debe mostrar "Es costo del viaje es ( kilómetros por 0,21 )"
 Si la opción es tren o autobós mostrar "Es costo del viaje es ( kilómetros por precio"
 Si introduce otra cosa, de mostrar "La opción que has presentado (transporte), no válida es válida"
*/

// function calcularCosteViaje(precio, kilometros) {
//   const transporte = prompt("Introduce el medio de transporte (coche, tren, bicicleta, autobus):").toLowerCase();

//   // Validación
//   if (transporte === "bicicleta") {
//     console.log("Buen viaje");
//   } else if (transporte === "coche") {
//     const coste = kilometros * 0.21;
//     console.log(`El costo del viaje es ${coste.toFixed(2)} € (${kilometros} km a 0.21)`);
//   } else if (transporte === "tren" || transporte === "autobus") {
//     const coste = kilometros * precio;
//     console.log(`El costo del viaje es ${coste.toFixed(2)} (${kilometros} km a ${precio})`);
//   } else {
//     console.log(`La opción que has presentado (${transporte}) no es válida`);
//   }
// }


// calcularCosteViaje(0.5, 100);  

/*
EJERCICIO 11.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar por consola su cuadrado,
pero si es una cadena de caracteres debe trasformarla a mayúsculas.
*/

function procesarDato() {
  
  const input = prompt("Introduce un dato cualquiera:");
  const numero = Number(input);

  // Verificación
  if (Number.isInteger(numero)) {
    console.log(`El cuadrado del número es: ${numero ** 2}`);
  } else if (typeof input === 'string') {
    console.log(`La cadena en mayúsculas es: ${input.toUpperCase()}`);
  } else {
    console.log("Error: El dato ingresado no es ni un número ni una cadena de texto válida.");
  }
}

// Llamamos a la función para ejecutar el proceso
procesarDato();

/*
TODO
EJERCICIO 12.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero múltiplo de 3 debe mostrar por consola
su descomposición en factores, p. ej. 12 = 3 x 4 (no quiero la descomposición en factores primos completa). Si no,
lo debe mostrar tal cual
Si es una cadena con una longitud mayor que 5 debe mostrarla por consola recortada. en caso contrario debe mostrarla
tal cual.
*/

/*
TODO
EJERCICIO 13.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar su doble. Si es un string,
Debe mostrarla con la última letra en mayúsculas.
*/

/*
TODO
EJERCICIO 14.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar el resto de dividirlo
entre 5. Si es un string, debe mostrar la cadena alternando las letras en mayúsculas o minúsculas (p. ej.: palabra -> PaLaBrA)
*/

/*
TODO
EJERCICIO 15.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrarlo al cubo, si tiene decimales, debe mostrarlo
al cuadrado. Si es un string debe cambiar la primera "a" por un asterisco.
*/
