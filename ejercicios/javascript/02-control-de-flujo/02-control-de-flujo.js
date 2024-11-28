/*
EJERCICIO 7.-  Crea un método que le pida al usuario un número
y imprima por consola si es par o impar 
Por ejemplo
"Introduzca un número:"
2
"2 es un número par."
*/

// function showIsEvenOrOdd() {
//   // validamos que el usuario haya una cadena de texto con contenido
//   const numberString = window.prompt("Introduzca un número entero:");

//   // si introduce una cadena vacía
//   // mostramos un error
//   if (!numberString) {
//     console.error("No has introducido nada");
//   } else {
//     // tranformarmos esa cadena a un número
//     // puede dar como resultado Number | NaN
//     let number = Number(numberString);

//     // comprobamos que el número sea un entero
//     // si no es entero mostramos un error
//     if (!Number.isInteger(number)) {
//       console.error(`${number} no es un entero`);
//     } else {
//       // si es un entero
//       // calculamos si es par o impar
//       // y mostramos el mensaje correspondiente
//       if (number % 2 === 0) {
//         console.log(`${number} es un número par`);
//       } else {
//         console.log(`${number} es un número impar`);
//       }
//     }
//   }
// }

/*
EJERCICIO 8.-
Crea un método que le pida al usuario que introduza una letra
Si la letra es A o B debe mostrar por consola que que ha acertado
si la letra es C o d debe mostrar por consola que está cerca de acertar
en caso caso contrario debe mostrar por consola que est equivocado.
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

function calcularCosteViaje() {
  const transporte = prompt("Introduce el medio de transporte (coche, tren, bicicleta, autobus):").toLowerCase();
  let precioTren = 10;
  let precioBus = 4.5;
  const kilometros = 0;
  switch (transporte){
    case "bicicleta":
      console.log("Buen viaje");
      break;
    case "coche":
      kilometros = prompt("Cuantos kilometros harás en tu viaje?");
      let consumo = 4.5;
      const coste = kilometros * 0.32;
      const litros = kilometros * consumo; 
      console.log(`El costo del viaje es ${coste.toFixed(2)} € y el consumo es ${litros} litros (${kilometros} km a 0.32)`);
      break;
    case "tren":
      kilometros = prompt("Cuantos kilometros harás en tu viaje?");
      if(kilometros % 15 === 0) {
        const coste = (kilometros / 15) * precioTren;
        console.log(`El costo del viaje es ${coste.toFixed(2)} (${kilometros} km a ${precioTren})`);
      }else if (kilometros % 15 != 0) {
        const coste = (Math.trunc(kilometros / 15) + 1) * precioTren;
        console.log(`El costo del viaje es ${coste.toFixed(2)} (${kilometros} km a ${precioTren})`);
      }
      break;
    case "autobus":
      kilometros = prompt("Cuantos kilometros harás en tu viaje?");
      if(kilometros % 25 === 0) {
        const coste = (kilometros / 25) * precioBus;
        console.log(`El costo del viaje es ${coste.toFixed(2)} (${kilometros} km a ${precioBus})`);
      }else if (kilometros % 25 != 0) {
        const coste = (Math.trunc(kilometros / 25)) * precioBus;
        console.log(`El costo del viaje es ${coste.toFixed(2)} (${kilometros} km a ${precioBus})`);
      }
      break;    
    default:
      console.log(`La opción que has presentado (${transporte}) no es válida`);
      break;

  }
}

// function calcularCosteViaje() {
//   const transporte = prompt("Introduce el medio de transporte (coche, tren, bicicleta, autobus):").toLowerCase();

//   if (transporte === "bicicleta") {
//     console.log("Buen viaje");
//   } else if (transporte === "coche") {
//     let consumo = 4.5;
//     const kilometros = prompt("Cuantos kilometros harás en tu viaje?")
//     const coste = kilometros * 0.32;
//     const litros = kilometros * consumo; 
//     console.log(`El costo del viaje es ${coste.toFixed(2)} € y el consumo es ${litros} litros (${kilometros} km a 0.32)`);
//   } else if (transporte === "tren" || transporte === "autobus") {
//       if (transporte === "tren") {
//         let precio = 10;
//         const kilometros = prompt("Cuantos kilometros harás en tu viaje?");
//         if(kilometros % 15 === 0) {
//           const coste = (kilometros / 15) * precio;
//           console.log(`El costo del viaje es ${coste.toFixed(2)} (${kilometros} km a ${precio})`);
//         }else if (kilometros % 15 != 0) {
//           const coste = (Math.trunc(kilometros / 15) + 1) * precio;
//           console.log(`El costo del viaje es ${coste.toFixed(2)} (${kilometros} km a ${precio})`);
//         }
//       }else {
//         let precio = 4.5;
//         const kilometros = prompt("Cuantos kilometros harás en tu viaje?");
//         if(kilometros % 25 === 0) {
//           const coste = (kilometros / 25) * precio;
//           console.log(`El costo del viaje es ${coste.toFixed(2)} (${kilometros} km a ${precio})`);
//         }else if (kilometros % 25 != 0) {
//           const coste = (Math.trunc(kilometros / 25)) * precio;
//           console.log(`El costo del viaje es ${coste.toFixed(2)} (${kilometros} km a ${precio})`);
//         }
//       }   
//   } else {
//     console.log(`La opción que has presentado (${transporte}) no es válida`);
//   }
// }

calcularCosteViaje();  

/*
EJERCICIO 11.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar por consola su cuadrado,
pero si es una cadena de caracteres debe trasformarla a mayúsculas.
*/

// function procesarDato() {
  
//   const input = prompt("Introduce un dato cualquiera:");
//   const numero = Number(input);

//   // Verificación
//   if (Number.isInteger(numero)) {
//     console.log(`El cuadrado del número es: ${numero ** 2}`);
//   } else if (typeof input === 'string') {
//     console.log(`La cadena en mayúsculas es: ${input.toUpperCase()}`);
//   } else {
//     console.log("Error: El dato ingresado no es ni un número ni una cadena de texto válida.");
//   }
// }

// Llamamos a la función para ejecutar el proceso
// procesarDato();

/*
TODO
EJERCICIO 12.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero múltiplo de 3 debe mostrar por consola
su descomposición en factores, p. ej. 12 = 3 x 4 (primero el factor menor, no quiero la descomposición en factores
primos completa). Si no, lo debe mostrar tal cual y decir que es primo)
Si es una cadena con una longitud mayor que 5 debe mostrarla por consola recortada. en caso contrario debe mostrarla
tal cual.
*/
// function descomponerNumeros() {
//   const input = prompt("Introduce un dato cualquiera:");
//   const numero = Number(input);
//   const cadena = input;
  
//   //Verificación
//   if (Number.isInteger(numero) && ((numero % 3) === 0)) {
//     console.log(`${numero} = 3 x ${numero / 3}`)
//   } else if (Number.isInteger(numero) && ((numero % 3) != 0)) {
//     console.log(`${numero} es primo`);
//   } else if (typeof input === 'string') {
//       if (cadena.length > 5) {
//         console.log(cadena.slice(0, 5));
//       } else{
//         console.log(cadena)
//       }
//   }
// }
//  descomponerNumeros();


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
