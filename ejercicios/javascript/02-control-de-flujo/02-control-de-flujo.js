// /* Crea un método que le pida al usuario un número
// y imprima por consola si es par o impar 
// Por ejemplo
// "Introduzca un número:"
// 2
// "2 es un número par."
// */

// function showIsEvenOrOdd(){
//     // validamos que el usuario haya una cadena de texto con contenido
//     const numberString = window.prompt("Introduzca un número entero:");
    
//     // si introduce una cadena vacía
//     // mostramos un error
//     if (!numberString ){
//         console.error("No has introducido nada");
//         return ;
//     }
//   }
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
//      const number = Number(numberString);}

//     // comprobamos que el número sea un entero
//     // si no es entero mostramos un error
//     if (!Number.isInteger(number)) {
//       console.error(`${number} no es un entero`);
//     } else {
//       // tranformarmos esa cadena a un número
//       // puede dar como resultado Number | NaN
//          const number = Number(numberString); } 

//   // comprobamos que el número sea un entero
//   // si no es entero mostramos un error
//   if (!Number.isInteger(number)) {
//     console.error(`${number} no es un entero`);
//     return;
//   }

//   // si es un entero
//   // calculamos si es par o impar
//   // y mostramos el mensaje correspondiente
//   if (number % 2 === 0) {
//     console.log(`${number} es un número par`);
//   } else {
//     console.log(`${number} es un número impar`);
//   }
// }



// // showIsEvenOrOdd();

// /*
// EJERCICIO 8.-
// Crea un método que le pida al usuario que introduza una  constra
// Si la  constra es A o B debe mostrar por consola que que ha acertado
// si la  constra es C o D debe mostrar por consola que está cerca de acertar
// en caso caso contrario debe mostrar por consola que está equivocado.
// "Ha acertado", "Casi ha acertado", "Está equivocado"
// */
// function comproba  constra() {
//     const input = prompt("Por favor, introduce una constra:");
    
//     if (!input) {
//         console.error("No has introducido nada.");
//         return;
//     }

//     if (!isNaN(input)) {
//         console.error("Has introducido un número. Por favor, introduce una constra.");
//         return;
//     }

//     const  constra = input.trim().toUpperCase(); // Eliminamos espacios y normalizamos a mayúsculas

//     if   constra === "A" || constra === "B") {
//         console.log("¡Ha acertado!");
//     } else if  constra === "C" ||  constra === "D") {
//         console.log("Casi ha acertado.");
//     } else {
//         console.log("Está equivocado.");
//     }
// }

// comproba constra();

// /*
// EJERCICIO 9.- 
// Crea un método que le pida al usuario que introduzca dos números.
// Debe imprimir el resultado de restar el menor al mayor
// Por ejemplo si introduce 5 y 8 ó 8 y 5 debe mostrar por consola 
// "El resultado de restarle 5 a 8 es 3".
//  */
// function pedirNumerosYRestar() {
//      const num1, num2;

//     do {
//         num1 = window.prompt("Introduce el primer número:");
//         num2 = window.prompt("Introduce el segundo número:");

       
//         if (isNaN(num1) || isNaN(num2)) {
//             alert("Por favor, introduce solo números.");
//         } else {
//             num1 = Number(num1);
//             num2 = Number(num2);
//             break;
//         }
//     } while (true);

    
//      const mayor = Math.max(num1, num2);
//      const menor = Math.min(num1, num2);
//      const resultado = mayor - menor;

    
//     console.log(`El resultado de restarle ${menor} a ${mayor} es ${resultado}.`);
// }

// pedirNumerosYRestar();

// function higherMinusLower() {
//   const firstNum = window.prompt("Introduce un número positivo");
//   const secondNum = window.prompt("Introduce otro número positivo");
//   if (
//     !isNaN(firstNum) &&
//     firstNum >= 0 &&
//     firstNum != "" &&
//     !isNaN(secondNum) &&
//     secondNum >= 0 &&
//     secondNum != ""
//   ) {
//     console.log(
//       Math.max(firstNum, secondNum) +
//         " - " +
//         Math.min(firstNum, secondNum) +
//         " = " +
//         (Math.max(firstNum, secondNum) - Math.min(firstNum, secondNum))
//     );
//   } else {
//     console.log("Debes introducir dos números positivos");
//   }
// }

// function restarDosNumeros() {
//   const num1 = Number(prompt("Introduce el primer número:").trim());
//   const num2 = Number(prompt("Introduce el segundo número:").trim());

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

// function restaNum() {
//   // .trim() elimina los espaciones en blanco alrededor del input del usuario
//    const num1 = window.prompt("Introduce el primer número:").trim(); // pedimos el primero
//    const num2 = window.prompt("Introduce el segundo número:").trim(); // ahora el segundo

//   // validamos que no haya introducido nada o que haya ingresado un espacio en blanco
//   if (!num1 || !num2) {
//     window.alert("Error: Debes introducir dos números."); // lanzamos este error si el usuario no ingresa nada
//   } else {
//     // los parseo a un número
//     num1 = parseFloat(num1);
//     num2 = parseFloat(num2);

//     if (isNaN(num1) || isNaN(num2)) {
//       // verifico si son numeros
//       window.alert("Error: Debes introducir dos números válidos."); // Lanzamos error si no son números lo que introducen
//     } else if (num1 > num2) {
//       // si el primer numero es mayor que el segundo calculamos la resta del primero con el segundo
//        const resultado = num1 - num2;
//       window.alert(`El resultado de restar ${num2} a ${num1} es: ${resultado}`);
//     } else if (num1 < num2) {
//       // l primer número es menor que el segundo, calcula la resta del segundo número menos el primero y muestra el resultado
//        const resultado = num2 - num1;
//       window.alert(`El resultado de restar ${num1} a ${num2} es: ${resultado}`);
//     } else {
//       window.alert("Ambos números son iguales, el resultado de restarlos es 0");
//     }
//   }
// }
// // restaNum();

// /*
// EJERCICIO 10.-
// Crea un método que le pida al usuario el medio de transporte y los kilómetros que va a recorrer.
// Debe calcular el coste del viaje y mostrar el resultado con un popup.
// El primer dato es una cadena de caracteres que puede ser "Bici consta", "Coche", "Tren" o "Autobús".
// A continuación, si ha elegido el coche debe pedir el número de kilometros del viaje que va a realizar
// y el número de litros aproximado que va a consumir;

// Los viajes en tren valen 10€ cada 15km o fracción (un viaje de 16km cuesta 20€)
// Los viajes en autobús valen 4,5€ cada 25km  (un viaje de 26km cuesta 4,5€)
// El coste del viaje en coche es distancia * combustible * 0,32€.
 
// Si la opción es bici consta debe mostrar "Buen viaje!"
// Si la opción es coche debe mostrar "El costo del viaje es ( combustible * kilómetros * 0,32€  )" 10 x 10 x 0.32 = 32
// Si la opción es tren o autobús mostrar "El costo del viaje es ( kilómetros *  precio )"
// Si introduce otra cosa, de mostrar "La opción que has presentado (transporte), no es válida" 
// */

// function calcularCosteViaje() {
//   // Solicitar al usuario el medio de transporte
//   const transporte = prompt("¿Qué medio de transporte vas a utilizar? (Bici  consta, Coche, Tren, Autobus)").toLowerCase();

//   // Validar si el transporte es uno de los permitidos
//   if (transporte === "bici consta") {
//     alert("¡Buen viaje!");
//   } else if (transporte === "coche") {
//     // Si es coche, pedir los kilómetros y los litros de combustible
//     const kilometros = parseFloat(prompt("¿Cuántos kilómetros vas a recorrer?"));
//     const combustible = parseFloat(prompt("¿Cuántos litros de combustible aproximadamente vas a consumir?"));

//     // Calcular el coste del viaje en coche
//     const costeCoche = kilometros * combustible * 0.32;
//     alert(`El coste del viaje en coche es: ${costeCoche.toFixed(2)}€`);
//   } else if (transporte === "tren") {
//     // Si es tren, calcular el coste según los kilómetros
//     const kilometros = parseFloat(prompt("¿Cuántos kilómetros vas a recorrer?"));
//     const costeTren = Math.ceil(kilometros / 15) * 10;
//     alert(`El coste del viaje en tren es: ${costeTren}€`);
//   } else if (transporte === "autobus") {
//     // Si es autobús, calcular el coste según los kilómetros
//     const kilometros = parseFloat(prompt("¿Cuántos kilómetros vas a recorrer?"));
//     const costeAutobus = Math.ceil(kilometros / 25) * 4.5;
//     alert(`El coste del viaje en autobús es: ${costeAutobus.toFixed(2)}€`);
//   } else {
//     // Si la opción no es válida
//     alert(`La opción que has presentado (${transporte}), no es válida.`);
//   }
// }
// calcularCosteViaje();


// /*
//  Esta función contiene la lógica que satisface los requisitos pero tiene varios problemas:
//   1. Es una función muy larga: tiene 107 líneas de código sin contar comentarios. Una función debería ser de unas 20 líneas..
//   2. Es muy compleja: tiene bucles anidados unos dentro de otros. 
//   3. LO PEOR: esta repitiendo código igual o muy parecido.
// */
// function mostrarCosteViaje() {
//   // Creo un array con los valores válidos
//   // así cuando haga comparaciones usaré este array para referenciarlas
//   const mediosValidos = ["bici consta", "coche", "tren", "autobus", "autobús"];
//   // Establezco en constantes los valores fijos
//   const factorCVC = 0.32;
//   const precioTramoAutobus = 4.5;
//   const kmTramoAutobus = 25;
//   const precioTramoTren = 10;
//   const kmTramoTren = 15;

//   // variables para controlar los bucles
//    const medioValido = false;
//    const kilometrosValido = false;
//    const litrosValidos = false;

//    const medioTransporte = "";
//    const km = 0;
//    const lt = 0;
//    const costoViaje = 0;
//    const mensajeCostoViaje = "";

//   do {
//     // pido el medio de transporte
//     medioTransporte = window
//       .prompt(
//         "Introduzca un medio de transporte\n(las opciones validas son Bici consta, coche, tren y autobús)"
//       )
//       .trim()
//       .toLowerCase();

//     if (!medioTransporte) {
//       window.alert("Debes introducir un medio de transporte");
//     }

//     // si la opción introducida por el usuaario es válida,saldrá del bucle
//     if (mediosValidos.includes(medioTransporte)) {
//       medioValido = true;
//     }

//     // si la opción no válida, mostrará el mensaje y seguirá en el bucle
//     if (!medioValido) {
//       window.alert(
//         `La opción que has presentado (${medioTransporte}), no es válida.`
//       );
//     }
//   } while (!medioValido);

//   // Si el medio de transporte es diferente de bici  consta
//   // pido el núemro de kilométros que va a recorrer
//   if (mediosValidos[0] !== medioTransporte) {
//     do {
//       const kilometrosString = window
//         .prompt(
//           "introduzca en número de kilómetros que va a realizar (puede tener decimales):"
//         )
//         .trim();
//       // si no introduce nada, se muestra un mensaje
//       // y vuelve a pedir los km
//       if (!kilometrosString) {
//         window.alert("Debes introducir los kilómetros");
//       } else {
//         // si introduce algo que no se puede convertir a un número decimal
//         // muestra el mensaje
//         km = Number.parseFloat(kilometrosString);
//         if (Number.isNaN(km)) {
//           window.alert("Debes introducir un número de kilometros válido.");
//           // comprueba el los km sean mayor que cero
//         } else if (!km || 0 > km) {
//           window.alert("El número de km tiene que ser mayor que cero.");
//         } else {
//           // si pasa las validaciones, sale de bucle
//           kilometrosValido = true;
//         }
//       }
//     } while (!kilometrosValido);
//   }

//   // si el medio de transporte es coche pedir los litros
//   if (mediosValidos[1] === medioTransporte) {
//     do {
//       const litros = window
//         .prompt(
//           "introduzca en número de litros que va a realizar (puede tener decimales):"
//         )
//         .trim();
//       // si introduce una cadena vacía, muestra un mensaje
//       if (!litros) {
//         window.alert("Debes introducir los litros");
//       } else {
//         // convierto el string a un numero decimal
//         lt = Number.parseFloat(litros);
//         // si no es un número, le muestra un mensaje
//         if (Number.isNaN(lt)) {
//           window.alert("Debes introducir un número de litros válido.");
//           // si el número es cero o menor que cero muestra un mensaje
//         } else if (!lt || 0 > lt) {
//           window.alert("El número de litros tiene que ser mayor que cero.");
//         } else {
//           // si es un numero válido, sale del bucle
//           litrosValidos = true;
//         }
//       }
//     } while (!litrosValidos);
//   }

//   // const mediosValidos = ["bici  consta", "coche", "tren", "autobus", "autobús"];
//   switch (medioTransporte) {
//     case mediosValidos[0]: // bi consta
//       mensajeCostoViaje = "Buen viaje!";
//       break;
//     case mediosValidos[1]: // coche
//       costoViaje = lt * km * factorCVC; // esto
//       mensajeCostoViaje = `El costo del viaje es ${costoViaje}€`;
//       break;
//     case mediosValidos[2]: // tren
//       costoViaje = Math.floor(km / kmTramoTren) * precioTramoTren;
//       // si los km no son un múltiplo  del tramo
//       // la división tendrá un resto
//       // y se agrega un el precio
//       if (km % kmTramoTren) {
//         costoViaje += precioTramoTren;
//       }
//       mensajeCostoViaje = `El costo del viaje es ${costoViaje}€`;
//       break;
//     case mediosValidos[3]: // autobus
//     case mediosValidos[4]: // autobús
//       costoViaje = Math.floor(km / kmTramoAutobus) * precioTramoAutobus;
//       mensajeCostoViaje = `El costo del viaje es ${costoViaje}€`;
//       break;
//   }
//   // mostramos al usuario el coste del viaje
//   alert(mensajeCostoViaje);
// }

// // mostrarCosteViaje();

// /* 
// Refactorizamos la funcion anterior
// Extraemos toda la lógica que podamos a funciones auxiliares
// */
// function mostrarCosteViajeRefactorizado() {
//   const mediosValidos = ["bici consta", "coche", "tren", "autobus", "autobús"];
//   const factorCVC = 0.32;
//   const precioTramoAutobus = 4.5;
//   const kmTramoAutobus = 25;
//   const precioTramoTren = 10;
//   const kmTramoTren = 15;

//    const medioTransporte = "";
//    const km = 0;
//    const litros = 0;
//    const costoViaje = 0;
//    const mensajeCostoViaje = "";

//   // las funciones pedirOpcion y pedirNumero deberían fusinarse
//   // en otra pedirDato()
//   medioTransporte = pedirOpcionConArray(
//     "Introduzca un medio de transporte\n(las opciones validas son Bici consta, coche, tren y autobús)",
//     "Debes introducir un medio de transporte",
//     mediosValidos
//   );

//   if (mediosValidos[0] !== medioTransporte) {
//     km = pedirNumero("kilómetros", "que va a realizar");
//   }

//   if (mediosValidos[1] === medioTransporte) {
//     litros = pedirNumero("litros", "que va consumir");
//   }

//   // este switch se podría eliminar aplicando Poo
//   switch (medioTransporte) {
//     case mediosValidos[0]:
//       mensajeCostoViaje = "Buen viaje!";
//       break;
//     case mediosValidos[1]:
//       costoViaje = litros * km * factorCVC;
//       mensajeCostoViaje = `El costo del viaje es ${costoViaje}€`;
//       break;
//     case mediosValidos[2]:
//       costoViaje = Math.floor(km / kmTramoTren) * precioTramoTren;
//       if (km % kmTramoTren) {
//         costoViaje += precioTramoTren;
//       }
//       mensajeCostoViaje = `El costo del viaje es ${costoViaje}€`;
//       break;
//     case mediosValidos[3]:
//     case mediosValidos[4]:
//       costoViaje = Math.floor(km / kmTramoAutobus) * precioTramoAutobus;

//       mensajeCostoViaje = `El costo del viaje es ${costoViaje}€`;
//       break;
//   }

//   alert(mensajeCostoViaje);
// }

// // función devuelve un número que se pide por popup
// // le voy mandar por parámetro el mensaje que va a mostrar y las unidades
// function pedirNumero(unidad, mensaje) {
//   const numeroMinimo = 0;
//    const condition = false;
//    const numero = numeroMinimo;
//   do {
//     const result = window
//       .prompt(
//         `Introduzca el número de ${unidad} ${mensaje} (puede tener decimales):`
//       )
//       .trim();

//     if (!result) {
//       window.alert(`Debes introducir los ${unidad}`);
//     } else {
//       numero = Number.parseFloat(result);
//       if (Number.isNaN(numero)) {
//         window.alert(`Debes introducir un número de ${unidad} válido.`);
//       } else if (numeroMinimo >= numero) {
//         window.alert(`El número de ${unidad} tiene que ser mayor que cero.`);
//       } else {
//         condition = true;
//       }
//     }
//   } while (!condition);

//   return numero;
// }

// function pedirOpcionConArray(mensaje, mensaje2, mediosValidos) {
//    const opcionValida = false;
//    const opcion = "";
//   do {
//     opcion = window.prompt(mensaje).trim().toLowerCase();

//     if (!opcion) {
//       window.alert(mensaje2);
//     }

//     opcionValida = comprobarOpcion(mediosValidos, opcion);

//     if (!opcionValida) {
//       window.alert(
//         `La opción que has presentado (${medioTransporte}), no es válida.`
//       );
//     } else {
//       opcionValida = true;
//     }
//   } while (!opcionValida);
//   return opcion;
// }

// function comprobarOpcion(array, option) {
//   return array.includes(option);
// }

// // mostrarCosteViajeRefactorizado();

// /*
// EJERCICIO 11.- 
// Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar por consola su cuadrado,
// pero si es una cadena de caracteres debe trasformarla a mayúsculas.
// Para hacerlo más usable voy a usar un pop up

// */
// function procesarDato() {
//   const dato = prompt("Introduce un dato (puede ser un número entero o texto):");
 
 
  // if (dato === null || dato.trim() === "") {
  //   console.log("El dato introducido no es válido. Por favor, introduce un número entero o texto no vacío.");
  //   return;
  // }

  // if (dato === null || dato.trim() === "") {
  //   console.log("El dato introducido no es válido. Por favor, introduce un número entero o texto no vacío.");
  //   return;
  // }
 
//   if (dato === null || dato.trim() === "") {
//     console.log("El dato introducido no es válido. Por favor, introduce un número entero o texto no vacío.");
//     return;
//   }

//   if (!isNaN(dato) && Number.isInteger(Number(dato))) {
//     const numero = Number(dato);
//     console.log(`El cuadrado de ${numero} es: ${numero ** 2}`);
//   } 
//   else {
//     console.log(`El texto en mayúsculas es: ${dato.toUpperCase()}`);
//   }
// }

// procesarDato();
// function transformarACuadradoOMayusculas() {
//   // pedir dato
//    const datoValido = false;
//   do {
//      const dato = pedirDatoPrompt("Introduzca un dato:");

//      const number = Number(dato);

//     // es entero o string
//     if (Number.isInteger(number)) {
//       window.alert(`El cuadrado de ${number} es ${number * number}.`);
//       datoValido = true;
//     } else if (Number.isNaN(number)) {
//       window.alert(dato.toUpperCase());
//       datoValido = true;
//       // u otra opción
//     } else {
//       window.alert(
//         `El dato introducido (${dato}) no es ni un entero ni un string`
//       );
//     }
//   } while (!datoValido);
// }

// // transformarACuadradoOMayusculas();

// /*
// EJERCICIO 12.- 
// Crea un método que le pida al usuario un dato cualquiera. Si es un entero múltiplo de 3 debe mostrar por consola
// su descomposición en factores, p. ej. 12 = 3 x 4 (primero el factor menor, no quiero la descomposición en factores
// primos com consta). Si no, lo debe mostrar tal cual y decir si es primo)
// Si es una cadena con una longitud mayor que 5 debe mostrarla por consola recortada. en caso contrario debe mostrarla
// tal cual.
// */
// function procesarDato2() {
//   const dato = prompt("Introduce un dato (puede ser un número entero o una cadena de texto):");

//   if (!isNaN(dato) && Number.isInteger(Number(dato))) {
//       const numero = Number(dato);

//       if (numero % 3 === 0) {
//           for  const i = 3; i <= Math.floor(numero ** 0.5); i++) { 
//               if (numero % i === 0) {
//                   const factor1 = i;
//                   const factor2 = numero / i;
//                   console.log(`${numero} = ${factor1} x ${factor2}`);
//                   return; 
//               }
//           }
//           console.log(`${numero} no tiene una descomposición menor (es divisible solo por 3 y el propio número).`);
//       } else {
//           console.log(`${numero} no es múltiplo de 3 y se considera primo.`);
//       }
//   } 

//   else if (typeof dato === "string" && dato.trim().length > 0) {
//       if (dato.length > 5) {
//           console.log(`Texto recortado: ${dato.slice(0, 5)}`);
//       } else {
//           console.log(`Texto tal cual: ${dato}`);
//       }
//   } 
//   else {
//       console.log("El dato introducido no es válido. Por favor, introduce un número entero o texto no vacío.");
//   }
// }

// procesarDato2();

// function transformarMultiploTresCadena() {
//    const dato = pedirDatoPrompt("Introduzca un dato:");
//   if (Number.isInteger(number)) {
//     // entra en el if cuando el número es diferente de cero y es múltiplo de tres
//     if (0 !== number && number % 3 === 0) {
//       alert(`La descomposición en factores de ${number} es 3 x ${number / 3}.`);
//       // determino si es primo o en una función parte
//     } else if (esPrimoOptimizada(number)) {
//       alert(`El número ${number} es primo`);
//     } else {
//       alert(`El número ${number} es no primo`);
//     }
//   } else if (Number.isNaN(number)) {
//     // recorto la cadena sólo cuando tiene una longitud mayor a cinco
//     if (dato.length > 5) {
//       window.alert(dato.substring(0, 5));
//     } else {
//       window.alert(dato);
//     }
//   } else {
//     window.alert(
//       `El dato introducido (${dato}) no es ni un entero ni un string.`
//     );
//   }
// }

// // transformarMultiploTresCadena();

/*
TODO
EJERCICIO 13.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar su doble. Si es un string,
Debe mostrarla en mayúsculas.
*/
// function procesarDato3() {
//   const dato = prompt("Introduce un dato cualquiera:");

//   // Validar si el dato está vacío o el usuario lo canceló
//   if (dato === null || dato.trim() === "") {
//     console.log("El dato introducido no es válido. Por favor, introduce un dato no vacío.");
//     return;
//   }

//   const numero = Number(dato);

//   if (!isNaN(numero) && Number.isInteger(numero)) { 
//     console.log(`El doble del número ${numero} es: ${numero * 2}`);

//   } else if (typeof dato === "string") {
//     console.log(`El texto en mayúsculas es: ${dato.toUpperCase()}`);

//   } else {
//     console.log("El dato introducido no es válido.");
//   }
// }
// procesarDato3();



// function procesarDato33() {
//   let dato;
//   let numero;

//   do {
//     dato = prompt("Introduce un dato cualquiera:");

//     if (dato === null || dato.trim() === "") {
//       console.log("El dato introducido no es válido. Por favor, introduce un dato no vacío.");
//       continue; // Volver a iniciar el bucle para pedir otro dato
//     }

//     numero = Number(dato);

//     // Verificar si el dato es un número entero
//     if (!isNaN(numero) && Number.isInteger(numero)) { 
//       console.log(`El doble del número ${numero} es: ${numero * 2}`);
//       break; // Salir del bucle si el dato es un número válido

//     } else if (typeof dato === "string") {
//       console.log(`El texto en mayúsculas es: ${dato.toUpperCase()}`);
//       break; 

//     } else {
//       console.log("El dato introducido no es válido.");
//     }
    
//   } while (true); 
// }

// procesarDato33();
/*
TODO
EJERCICIO 14.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar el resto de dividirlo
entre 5. Si es un string, debe mostrar en  minúsculas.
*/
function procesarDato4() {
  let dato;
  do {
    dato = prompt("Introduce un dato cualquiera:");

    if (dato === null) {
      console.log("Operación cancelada. No se introdujo ningún dato.");
      return; 
    }
  } while (dato.trim() === "");

  const numero = Number(dato);

  if (!isNaN(numero) && Number.isInteger(numero)) {
    console.log(`El resto de dividir ${numero} entre 5 es: ${numero % 5}`);
  } else if (typeof dato === "string") {
    let opcion;

    do {
      opcion = prompt("¿Quieres convertir el texto a mayúsculas (M) o minúsculas (m)?");
      if (opcion === null) {
        console.log("Operación cancelada. No se realizó ninguna conversión.");
        return;
      }
    } while (opcion !== "M" && opcion !== "m");

    if (opcion === "m") {
      console.log(`El texto en minúsculas es: ${dato.toLowerCase()}`);
    } else if (opcion === "M") {
      console.log(`El texto en mayúsculas es: ${dato.toUpperCase()}`);
    }
  } else {
    
    console.log("El dato introducido no es válido.");
  }
}

procesarDato4();

/*
TODO
EJERCICIO 15.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrarlo al cubo, si tiene decimales, debe mostrarlo
al cuadrado. Si es un string debe cambiar la primera "a" por un asterisco. TIP: La clase String tiene un método replace(). 
*/

function procesarDato() {
  const obtenerDato = () => {
    const entrada = prompt("Introduce un dato cualquiera (o presiona Cancelar para salir):");
    if (entrada !== null && entrada.trim() !== "") {
      return entrada;
    } else {
      return null;
    }
  };
  while (true) {
    const dato = obtenerDato();
    if (dato === null) {
      console.log("Operación cancelada. ¡Hasta luego!");
      break; 
    }
    const numero = Number(dato);
    if (!isNaN(numero)) {
      if (Number.isInteger(numero)) {
        console.log(`El cubo del número ${numero} es: ${numero ** 3}`);
        break;
      } else {
        console.log(`El cuadrado del número ${numero} es: ${numero ** 2}`);
        break;
      }
    } else {
      console.log(`Texto modificado: ${dato.replace("a", "*")}`);
      break;
    }
  }
}

procesarDato();


