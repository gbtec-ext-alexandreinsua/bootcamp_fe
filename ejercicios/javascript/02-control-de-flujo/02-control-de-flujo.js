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

/*
EJERCICIO 9.- 
Crea un método que le pida al usuario que introduzca dos números.
Debe imprimir el resultado de restar el menor al mayor
Por ejemplo si introduce 5 y 8 ó 8 y 5 debe mostrar por consola 
"El resultado de restarle 5 a 8 es 3".
 */

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
//restaNum();

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
/*
function calcularCosteViaje() {
  let medioTransporte = window.prompt("Introduce el medio de transporte (Bicicleta, Coche, Tren, Autobus):").toLowerCase().trim();
  if (medioTransporte === "bicicleta") {
      window.alert("¡Buen viaje!");

  } else if (medioTransporte === "coche") {   // Si es coche, pedimos los kilómetros y el combustible
     
      let kilometros = window.prompt("Introduce los kilómetros que vas a recorrer:");
      let combustible = window.prompt("Introduce el número de litros de combustible aproximados:");
     

       // Calculamos el coste del viaje en coche
      let coste = kilometros * combustible * 0.32;
      window.alert(`El coste del viaje es ${coste.toFixed(2)}€`);

  }else if (medioTransporte === "tren"){  // Si es en Tren, pedimos "Es costo del viaje es ( kilómetros *  precio )"
     
    let kilometros = window.prompt("Introduce los kilómetros que vas a recorrer en Tren:");

    let precioTren = 10; // cada 15 km 
    let costeTren = Math (kilometros / 15) * precioTren;
    window.alert(`El coste del viaje es ${costeTren.toFixed(2)}€`);


  }else if (medioTransporte === "Autobus") { 
     // Si es en Bus, pedimos "Es costo del viaje es ( kilómetros *  precio )"

     let kilometros = window.prompt("Introduce los kilómetros que vas a recorrer:");

     let precioBus = 4.5; // cada 25 km 
     let costeBus = Math (kilometros / 25) * precioBus;
     window.alert(`El coste del viaje es ${costeBus.toFixed(2)}€`);
  
  }
  

}

//calcularCosteViaje();

/*
TODO
EJERCICIO 11.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar por consola su cuadrado,
pero si es una cadena de caracteres debe trasformarla a mayúsculas.
*/




let dato = window.prompt("Introduce un dato (puede ser un número o una cadena):");
let numero = parseInt(dato);
if (!isNaN(numero)) {
  // Si es un número, mostramos su cuadrado
  console.log("El cuadrado del número es: " + (numero * numero));
} else {
  // Si no es un número, lo convertimos a mayúsculas
  console.log("La cadena en mayúsculas es: " + dato.toUpperCase());
}

// Llamar a la función
//procesarDato();




/*
TODO
EJERCICIO 12.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero múltiplo de 3 debe mostrar por consola
su descomposición en factores, p. ej. 12 = 3 x 4 (primero el factor menor, no quiero la descomposición en factores
primos completa). Si no, lo debe mostrar tal cual y decir que es primo)
Si es una cadena con una longitud mayor que 5 debe mostrarla por consola recortada. en caso contrario debe mostrarla
tal cual.
*/



/*let dato = pedirDatoPrompt("Introduce un dato :");
let numero = Number(dato):


if (!isNaN(numero)) {
  // Si es un número
  if (numero % 3 === 0) { // Si es múltiplo de 3, mostramos su descomposición en factores
         for (let i = 2; i <= Math.sqrt(numero); i++) {
          if (numero % i === 0) {
              console.log(`${numero} = ${i} x ${numero / i}`);
              return; // Salimos después de encontrar la primera descomposición
          }
      }
      console.log(`${numero} es primo`);
  } else {
      console.log(`${numero} es primo`);
  }


} else {
  // Si no es un número, tratamos como una cadena
  if (dato.length > 5) {
      console.log(dato.slice(0, 5) + '...');
  } else {
      console.log(dato);
  }
}


// Llamar a la función





   




/*
TODO
EJERCICIO 13.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar su doble. Si es un string,
Debe mostrarla en mayúsculas.
*/


function pedirDatos(){
  let datoValido = false;

  do{
  let dato = pedirDatoPrompt("Introduzca un dato");
  dato = dato.replace(",",".");
  let number = Number(dato);

  if (Number.isInteger(number)){
    window.alert(`El doble de ${number} es ${number * 2}`);
  }else if (Number.isNaN(number)) {
    window.alert(
      `${dato} transformado a mayusculas es ${dato.toUpperCase()} `
    );
    datoValido = true;
  }else{
    window.alert(`El dato introduciso (${dato}) no es ni un entero ni un string`);
  }
  } while(!datoValido);
}
//pedirDatos();


/*
TODO
EJERCICIO 14.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar el resto de dividirlo
entre 5. Si es un string, debe mostrar en mayúsculas o minúsculas.
*/




function pedirDatos(){
  let datoValido = false;

  do{
  let dato = pedirDatoPrompt("Introduzca un dato");
  let number = Number(dato);

  if (Number.isInteger(number)){
    window.alert(`El resto de dividir entre 5 es  ${number % 5}`);
  }else if (Number.isNaN(number)) {
    window.alert(
      `${dato} transformado a minúsculas es ${dato.toLowerCase()} `
    );
    datoValido = true;
  }else{
    window.alert(`El dato introducido (${dato}) no es ni un entero ni un string`);
  }
  } while(!datoValido);
}
//pedirDatos();







/*
TODO
EJERCICIO 15.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrarlo al cubo, si tiene decimales, debe mostrarlo
al cuadrado. Si es un string debe cambiar la primera "a" por un asterisco. TIP: La clase String tiene un método replace(). 
*/



function pedirDatos(){
  let datoValido = false;

    do{
    let dato = pedirDatoPrompt("Introduzca un dato");
    let number = Number(dato);

     if (Number.isInteger(dato)){ 
      window.alert(`El ${number} al cubo  ${number ** 3}`);
      datoValido = true;

      }else if(!number){ 
      window.alert(`${number} al cuadrado es ${number ** 2 }`);
      datoValido = true;

     }else {
      window.alert(`${dato.replace("a","*")}`);
      datoValido = true;
    }
  } while(!datoValido);
 } 


pedirDatos();







// Funciones de utilidades
function pedirDatoPrompt(mensaje) {
  let datoValido = false;
  let result = "";

  do {
    result = window.prompt(mensaje).trim();
    if (!result) {
      window.alert(
        "La cadena no puede estar vacía o sólo con espacios en blanco."
      );
    } else {
      datoValido = true;
    }
  } while (!datoValido);

  return result;
}
