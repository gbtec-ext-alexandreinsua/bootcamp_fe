/* Crea un método que le pida al usuario un número
y imprima por consola si es par o impar 
Por ejemplo
"Introduzca un número:"
2
"2 es un número par."
*/

function showIsEvenOrOdd(){
    // validamos que el usuario haya una cadena de texto con contenido
    const numberString = window.prompt("Introduzca un número entero:");
    
    // si introduce una cadena vacía
    // mostramos un error
    if (!numberString ){
        console.error("No has introducido nada");
        return ;
    }
  }
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
    let number = Number(numberString);}

    // comprobamos que el número sea un entero
    // si no es entero mostramos un error
    if (!Number.isInteger(number)) {
      console.error(`${number} no es un entero`);
    } else {
      // tranformarmos esa cadena a un número
      // puede dar como resultado Number | NaN
        let number = Number(numberString); } 

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
si la letra es C o D debe mostrar por consola que está cerca de acertar
en caso caso contrario debe mostrar por consola que está equivocado.
"Ha acertado", "Casi ha acertado", "Está equivocado"
*/
function comprobarLetra() {
    const input = prompt("Por favor, introduce una letra:");
    
    if (!input) {
        console.error("No has introducido nada.");
        return;
    }

    if (!isNaN(input)) {
        console.error("Has introducido un número. Por favor, introduce una letra.");
        return;
    }

    const letra = input.trim().toUpperCase(); // Eliminamos espacios y normalizamos a mayúsculas

    if (letra === "A" || letra === "B") {
        console.log("¡Ha acertado!");
    } else if (letra === "C" || letra === "D") {
        console.log("Casi ha acertado.");
    } else {
        console.log("Está equivocado.");
    }
}

comprobarLetra();

/*
EJERCICIO 9.- 
Crea un método que le pida al usuario que introduzca dos números.
Debe imprimir el resultado de restar el menor al mayor
Por ejemplo si introduce 5 y 8 ó 8 y 5 debe mostrar por consola 
"El resultado de restarle 5 a 8 es 3".
 */
function pedirNumerosYRestar() {
    let num1, num2;

    do {
        num1 = window.prompt("Introduce el primer número:");
        num2 = window.prompt("Introduce el segundo número:");

       
        if (isNaN(num1) || isNaN(num2)) {
            alert("Por favor, introduce solo números.");
        } else {
            num1 = Number(num1);
            num2 = Number(num2);
            break;
        }
    } while (true);

    
    let mayor = Math.max(num1, num2);
    let menor = Math.min(num1, num2);
    let resultado = mayor - menor;

    
    console.log(`El resultado de restarle ${menor} a ${mayor} es ${resultado}.`);
}

pedirNumerosYRestar();

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

function calcularCosteViaje() {
  // Solicitar al usuario el medio de transporte
  const transporte = prompt("¿Qué medio de transporte vas a utilizar? (Bicicleta, Coche, Tren, Autobus)").toLowerCase();

  // Validar si el transporte es uno de los permitidos
  if (transporte === "bicicleta") {
    alert("¡Buen viaje!");
  } else if (transporte === "coche") {
    // Si es coche, pedir los kilómetros y los litros de combustible
    const kilometros = parseFloat(prompt("¿Cuántos kilómetros vas a recorrer?"));
    const combustible = parseFloat(prompt("¿Cuántos litros de combustible aproximadamente vas a consumir?"));

    // Calcular el coste del viaje en coche
    const costeCoche = kilometros * combustible * 0.32;
    alert(`El coste del viaje en coche es: ${costeCoche.toFixed(2)}€`);
  } else if (transporte === "tren") {
    // Si es tren, calcular el coste según los kilómetros
    const kilometros = parseFloat(prompt("¿Cuántos kilómetros vas a recorrer?"));
    const costeTren = Math.ceil(kilometros / 15) * 10;
    alert(`El coste del viaje en tren es: ${costeTren}€`);
  } else if (transporte === "autobus") {
    // Si es autobús, calcular el coste según los kilómetros
    const kilometros = parseFloat(prompt("¿Cuántos kilómetros vas a recorrer?"));
    const costeAutobus = Math.ceil(kilometros / 25) * 4.5;
    alert(`El coste del viaje en autobús es: ${costeAutobus.toFixed(2)}€`);
  } else {
    // Si la opción no es válida
    alert(`La opción que has presentado (${transporte}), no es válida.`);
  }
}
calcularCosteViaje();


/*
TODO
EJERCICIO 11.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar por consola su cuadrado,
pero si es una cadena de caracteres debe trasformarla a mayúsculas.
*/
function procesarDato() {
  const dato = prompt("Introduce un dato (puede ser un número entero o texto):");

 
  if (dato === null || dato.trim() === "") {
    console.log("El dato introducido no es válido. Por favor, introduce un número entero o texto no vacío.");
    return;
  }

  if (!isNaN(dato) && Number.isInteger(Number(dato))) {
    const numero = Number(dato);
    console.log(`El cuadrado de ${numero} es: ${numero ** 2}`);
  } 
  else {
    console.log(`El texto en mayúsculas es: ${dato.toUpperCase()}`);
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
function procesarDato2() {
  const dato = prompt("Introduce un dato (puede ser un número entero o una cadena de texto):");


  if (!isNaN(dato) && Number.isInteger(Number(dato))) {
      const numero = Number(dato);

      if (numero % 3 === 0) {
          for (let i = 3; i <= Math.floor(numero ** 0.5); i++) { 
              if (numero % i === 0) {
                  const factor1 = i;
                  const factor2 = numero / i;
                  console.log(`${numero} = ${factor1} x ${factor2}`);
                  return; 
              }
          }
          console.log(`${numero} no tiene una descomposición menor (es divisible solo por 3 y el propio número).`);
      } else {
          console.log(`${numero} no es múltiplo de 3 y se considera primo.`);
      }
  } 

  else if (typeof dato === "string" && dato.trim().length > 0) {
      if (dato.length > 5) {
          console.log(`Texto recortado: ${dato.slice(0, 5)}`);
      } else {
          console.log(`Texto tal cual: ${dato}`);
      }
  } 
  else {
      console.log("El dato introducido no es válido. Por favor, introduce un número entero o texto no vacío.");
  }
}

procesarDato2();


/*
TODO
EJERCICIO 13.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar su doble. Si es un string,
Debe mostrarla en mayúsculas.
*/
function procesarDato3() {
  const dato = prompt("Introduce un dato cualquiera:");

  // Validar si el dato está vacío o el usuario lo canceló
  if (dato === null || dato.trim() === "") {
    console.log("El dato introducido no es válido. Por favor, introduce un dato no vacío.");
    return;
  }

  const numero = Number(dato);

  if (!isNaN(numero) && Number.isInteger(numero)) { 
    console.log(`El doble del número ${numero} es: ${numero * 2}`);

  } else if (typeof dato === "string") {
    console.log(`El texto en mayúsculas es: ${dato.toUpperCase()}`);

  } else {
    console.log("El dato introducido no es válido.");
  }
}
procesarDato3();
/*
TODO
EJERCICIO 14.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar el resto de dividirlo
entre 5. Si es un string, debe mostrar en mayúsculas o minúsculas.
*/
function procesarDato4() {
  const dato = prompt("Introduce un dato cualquiera:");

  if (dato === null || dato.trim() === "") {
    console.log("El dato introducido no es válido. Por favor, introduce un dato no vacío.");
    return;
  }

  // Intentar convertir el dato a un número
  const numero = Number(dato);

  if (!isNaN(numero) && Number.isInteger(numero)) {
    // Si es un número entero, mostrar el resto de dividirlo entre 5
    console.log(`El resto de dividir ${numero} entre 5 es: ${numero % 5}`);
  } else if (typeof dato === "string") {
    // Si es un string, preguntar si quiere en mayúsculas o minúsculas
    const opcion = prompt("¿Quieres convertir el texto a mayúsculas (M) o minúsculas (m)?");

    if (opcion === "m") {
      console.log(`El texto en minúsculas es: ${dato.toLowerCase()}`);
    } else if (opcion === "M") {
      console.log(`El texto en mayúsculas es: ${dato.toUpperCase()}`);
    } else {
      console.log("Opción no válida. No se realizó ninguna conversión.");
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
