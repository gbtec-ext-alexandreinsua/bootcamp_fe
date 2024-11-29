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
function pideLetra() {
  let letraCorrecta = false;
  do {
    let letraString = window.prompt("Introduzca una letra:").trim();
    let letra = letraString.charAt(0).toUpperCase();
    if (letra === 'A' || letra === 'B') {
      letraCorrecta = true;
      alert("Ha acertado");
    }
    else if (letra === 'C' || letra === 'D') {
      alert("Casi ha acertado");
    }
    else {
      alert("Está equivocado");
    }
  } while (!letraCorrecta);
}

//pideLetra()

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
restaNum();

function dosNumerosResta() {
  let numString1 = window.prompt("Introduzca un número entero:").trim();
  let numString2 = window.prompt("Introduzca un número entero:").trim();
  if (!numString1) {
    alert("No has introducido nada en el primer número");
    return;
  }
  if (!numString2) {
    alert("No has introducido nada en el segundo número");
    return;
  }

  let num1 = Number(numString1);
  let num2 = Number(numString2);

  if (!Number.isInteger(num1)) {
    alert(num1 + " no es un entero");
    return;
  }
  if (!Number.isInteger(num2)) {
    alert(num2 + " no es un entero");
    return;
  }
  if (num1 > num2) {
    let numTotal = num1 - num2;
    alert("El resultado de restarle " + num2 + " a " + num1 + " es " + numTotal)
  }
  if (num1 < num2) {
    let numTotal = num2 - num1;
    alert("El resultado de restarle " + num1 + " a " + num2 + " es " + numTotal)
  }
  else {
    "El resultado de restarle " + num1 + " a " + num2 + " es 0"
  }
}
//dosNumerosResta()

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
function medioTrasporte() {
  let coste;
  let valorVálido = false;
  let litros;
  do {
    let vehiculo = window.prompt("Introduzca tu medio de trasporte:").trim();
    let kilometros = window.prompt("Introduce los km que vas a recorrer:").trim();
    if (!vehiculo) {
      alert("No has introducido el vehiculo");
      return;
    }
    if (!kilometros) {
      alert("No has introducido los kilometros");
      return;
    }

    let kilometros2 = Number(kilometros);
    if (!Number.isInteger(kilometros2)) {
      alert(kilometros2 + " no es un numero entero. Introduce números enteros");
      return;
    }
    if (vehiculo === "Coche") {
      litros = window.prompt("Introduce los litros aproximados de combustible a usar:").trim();
      let litros2 = Number(litros);
      coste = (kilometros2 * litros2) * 0.32;
      alert("El coste de tu viaje será de: " + coste)
    }
    if (vehiculo === "Bicicleta") {
      alert("Buen viaje");
    }
    if (vehiculo === "Tren") {
      const precioXbloque = 10;
      const kmXbloque = 15;
      let bloques = parseInt(kilometros2 / kmXbloque);
      if (kilometros2 % kmXbloque != 0) {
        bloques++;
      }
      coste = bloques * precioXbloque;
      alert("El coste de tu viaje será de " + coste);
    }

    if (vehiculo === "autobus") {
      const billete = 4.5;
      const kmBloque = 25;
      const bloques = Math.floor(kilometros2 / kmBloque);
      coste = bloques * billete;
      alert("El coste de tu viaje será de " + coste)
    }
    valorVálido = true;
  }
  while (!valorVálido)
}

//medioTrasporte()
/*
TODO
EJERCICIO 11.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar por consola su cuadrado,
pero si es una cadena de caracteres debe trasformarla a mayúsculas.
*/
function dameDatos() {
  let datoValido = false;
  let datoInt;

  do {
    let datoString = window.prompt("Dime un dato");

    if (datoString === null) {
      alert("Has cancelado la operación");
      return;
    }
    datoString = datoString.trim();
    if (datoString === "") {
      alert("No has introducido ningún dato");
    }

    datoInt = Number(datoString);

    if (Number.isInteger(datoInt)) {
      datoValido = true;
      alert("El cuadrado de este número es: " + (datoInt * datoInt));
    } else {
      alert(datoString)
      datoValido = true;
    }
  } while (!datoValido);
}
// dameDatos();

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
function dameDatos2() {
  let datoValido = false;
  let datoInt;

  do {
    let datoString = window.prompt("Dime un dato");

    if (datoString === null) {
      alert("Has cancelado la operación");
      return;
    }
    datoString = datoString.trim();
    if (datoString === "") {
      alert("No has introducido ningún dato");
    }

    datoInt = Number(datoString);

    if (Number.isInteger(datoInt)) {
      datoValido = true;
      alert("El doble de este número es: " + (datoInt * 2));
    } else {
      alert("Has introducido: " + datoString.toUpperCase())
      datoValido = true;
    }
  } while (!datoValido);
}
// dameDatos2()
/*
TODO
EJERCICIO 14.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar el resto de dividirlo
entre 5. Si es un string, debe mostrar en mayúsculas o minúsculas.
*/
function dameDatos3() {
  let datoValido = false;
  let datoInt;

  do {
    let datoString = window.prompt("Dime un dato");

    if (datoString === null) {
      alert("Has cancelado la operación");
      return;
    }
    datoString = datoString.trim();
    if (datoString === "") {
      alert("No has introducido ningún dato");
    }

    datoInt = Number(datoString);

    if (Number.isInteger(datoInt)) {
      datoValido = true;
      alert("El resto de dividir entre 5 este número es: " + (datoInt));
    } else {
      const pedro = "Has introducido: " + datoString.toUpperCase();
      const lio = "Has introducido: " + datoString.toLowerCase()
      let juan = [pedro, lio];
      let jose = Math.round((Math.random() * juan.length));
      const david = (juan[jose]);
      alert(david);
      datoValido = true;
    }
  } while (!datoValido);
}
// dameDatos3()
/*
TODO
EJERCICIO 15.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrarlo al cubo, si tiene decimales, debe mostrarlo
al cuadrado. Si es un string debe cambiar la primera "a" por un asterisco. TIP: La clase String tiene un método replace(). 
*/
function dameDatos4() {
  let datoValido = false;
  let datoInt;
  let datoString

  do {
    datoString = window.prompt("Dime un dato");

    if (datoString === null) {
      alert("Has cancelado la operación");
      return;
    }
    datoString = datoString.trim();

    if (datoString === "") {
      alert("No has introducido ningún dato");
    }

    datoInt = Number(datoString);

    if (Number.isInteger(datoInt) && !isNaN(datoInt)) {
      datoValido = true;
      alert("El cubo de este número es: " + (datoInt * datoInt * datoInt));
    }
    else if (!Number.isInteger(datoInt) && !isNaN(datoInt)) {
      datoValido = true;
      alert("El cuadrado de este número es: " + (datoInt * datoInt));
    } 
    else{
      datoString.toLowerCase();
      let textoCambiado = datoString.replace('a' || 'A', '*');
      alert("Has introducido: " + textoCambiado)
      datoValido = true;
    }
  } while (!datoValido);
}
dameDatos4()
