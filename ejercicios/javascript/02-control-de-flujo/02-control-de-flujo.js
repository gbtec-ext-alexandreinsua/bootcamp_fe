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
si la letra es C o d debe mostrar por consola que está cerca de acertar
en caso caso contrario debe mostrar por consola que est equivocado.
"Ha acertado", "Casi ha acertado", "Está equivocado"
*/
function procesarLetra() {
  const response = window.prompt("Dime una letra: ").trim().toUpperCase();

  switch (response) {
    case "A":
    case "B":
      window.alert("Ha acertado");
      break;
    case "C":
      window.alert("Casi ha acertado");
      break;
    default:
      window.alert("Está equivocado");
      break;
  }
}

function procesarLetraBucle() {
  let opcionValida = true;
  let response = window.prompt("Dime una letra: ").trim().toUpperCase();

  do {
    if (!opcionValida) {
      response = window
        .prompt("Esa opción no es válida. Introduzca otra: ")
        .trim()
        .toUpperCase();
    }

    switch (response) {
      case "A":
      case "B":
        opcionValida = true;
        window.alert("Ha acertado");
        break;
      case "C":
        opcionValida = true;
        window.alert("Casi ha acertado");
        break;
      default:
        opcionValida = false;
        break;
    }
  } while (!opcionValida);
}


// function checkLetter(){
//   const input = prompt("escribe una letra")
//   if (!input || !input.length == 1){
//     console.log("escribe una sola letra")
//   }

//   const letter = input.charAt(0).toLowerCase();
//   if(letter === 'A' || letter === 'B'){
//     console.log("Ha acertado")
//   }
//   if(letter === 'B' || letter === 'C'){
//     console.log("Casi ha acertado")
//   }
//   else{
//     console.log("Esta equivocado")
//   }
// }

// checkLetter();

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
TODO
EJERCICIO 9.- 
Crea un método que le pida al usuario que introduzca dos números.
Debe imprimir el resultado de restar el menor al mayor
Por ejmplo si introduce 5 y 8 ó 8 y 5 debe mostrar por consola 
"El resultado de restarle 5 a 8 es 3".
 */


function checkNumber() {
  const input = prompt("Introduce dos números separados por un espacio:");
  
  if (!input || input.trim().length === 0) {
    console.log("Escribe dos números.");
    return; // Detener ejecución si no hay entrada válida
  }

  const numbers = input.trim().split(" ");

  if (numbers.length !== 2) {
    console.log("Por favor, introduce exactamente dos números separados por un espacio.");
    return;
  }

  const num1 = parseFloat(numbers[0]);
  const num2 = parseFloat(numbers[1]);

  if (isNaN(num1) || isNaN(num2)) {
    console.log("Ambos valores deben ser números.");
    return;
  }

  const mayor = Math.max(num1, num2);
  const menor = Math.min(num1, num2);
  const resultado = mayor - menor;

  console.log(`El resultado de restarle ${menor} a ${mayor} es ${resultado}.`);
}

checkNumber();


/*
TODO
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


function calcularCostoViaje() {
  const transporte = prompt("Introduce tu medio de transporte: Bicicleta, Coche, Tren o Autobús").trim().toLowerCase();
  let kilometros, litros, coste;

  switch (transporte) {
    case "bicicleta":
      alert("¡Buen viaje!");
      break;
    case "coche":
      kilometros = parseFloat(prompt("Introduce los kilómetros que vas a recorrer:"));
      litros = parseFloat(prompt("Introduce el número de litros de combustible que vas a consumir:"));
      if (isNaN(kilometros) || isNaN(litros)) {
        alert("Introduce valores numéricos válidos.");
        return;
      }
      coste = kilometros * litros * 0.32;
      alert(`El costo del viaje es ${coste.toFixed(2)}€.`);
      break;
    case "tren":
      kilometros = parseFloat(prompt("Introduce los kilómetros que vas a recorrer:"));
      if (isNaN(kilometros)) {
        alert("Introduce un valor numérico válido.");
        return;
      }
      coste = Math.ceil(kilometros / 15) * 10;
      alert(`El costo del viaje en tren es ${coste}€.`);
      break;
    case "autobús":
      kilometros = parseFloat(prompt("Introduce los kilómetros que vas a recorrer:"));
      if (isNaN(kilometros)) {
        alert("Introduce un valor numérico válido.");
        return;
      }
      coste = Math.ceil(kilometros / 25) * 4.5;
      alert(`El costo del viaje en autobús es ${coste.toFixed(2)}€.`);
      break;
    default:
      alert(`La opción que has presentado (${transporte}) no es válida.`);
  }
}
calcularCostoViaje();




/*
TODO
EJERCICIO 11.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar por consola su cuadrado,
pero si es una cadena de caracteres debe trasformarla a mayúsculas.
*/


function procesarDato() {
  const dato = prompt("Introduce un dato:");

  if (!isNaN(dato) && Number.isInteger(parseFloat(dato))) {
    const cuadrado = Math.pow(parseInt(dato), 2);
    console.log(`El cuadrado de ${dato} es ${cuadrado}.`);
  } else {
    console.log(`La cadena "${dato}" en mayúsculas es: ${dato.toUpperCase()}`);
  }
}
procesarDato();




/*
TODO
EJERCICIO 12.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero múltiplo de 3 debe mostrar por consola
su descomposición en factores, p. ej. 12 = 3 x 4 (primero el factor menor, no quiero la descomposición en factores
primos completa). Si no, lo debe mostrar tal cual y decir que es primo)
Si es una cadena con una longitud mayor que 5 debe mostrarla por consola recortada. en caso contrario debe mostrarla
tal cual.
*/


function analizarDato() {
  const dato = prompt("Introduce un dato:");

  if (!isNaN(dato) && Number.isInteger(parseFloat(dato))) {
    const numero = parseInt(dato);
    if (numero % 3 === 0) {
      const factor = numero / 3;
      console.log(`${numero} = 3 x ${factor}`);
    } else {
      console.log(`${numero} no es múltiplo de 3.`);
    }
  } else if (typeof dato === "string" && dato.length > 5) {
    console.log(`La cadena recortada es: ${dato.slice(0, 5)}`);
  } else {
    console.log(`La cadena es: ${dato}`);
  }
}
analizarDato();




/*
TODO
EJERCICIO 13.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar su doble. Si es un string,
Debe mostrarla en mayúsculas.
*/


function procesarDato13() {
  const dato = prompt("Introduce un dato:");

  if (!isNaN(dato) && Number.isInteger(parseFloat(dato))) {
    console.log(`El doble de ${dato} es ${dato * 2}.`);
  } else {
    console.log(`La cadena "${dato}" en mayúsculas es: ${dato.toUpperCase()}`);
  }
}
procesarDato13();




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


