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

function comprobarLetras() {

const letra = window.prompt("Introduzca una letra por favor: ").trim().toUpperCase(); // pedimos al usuario la letra y con el toUpperCase convertimos esa letra en mayuzculas si la puso en minuscula y trim los espacios

  if (letra === "A" || letra === "B") { // verificamos que sea exactamente A B
    window.alert("Ha acertado");
  } else if (letra === "C" || letra === "D") { // si no es A B pasa por aqui a ver si es C D
    window.alert("Casi ha acertado");
  } else {
    window.alert("Está equivocado"); // en el resto de casos le muestra esto
  }
}
comprobarLetras(); 

/*
EJERCICIO 9.- 
Crea un método que le pida al usuario que introduzca dos números.
Debe imprimir el resultado de restar el menor al mayor
Por ejemplo si introduce 5 y 8 ó 8 y 5 debe mostrar por consola 
"El resultado de restarle 5 a 8 es 3".
 */

function restaNum() {
  const num1 = parseFloat(window.prompt("Introduce el primer número:")); // pedimos el primero
  const num2 = parseFloat(window.prompt("Introduce el segundo número:"));  // ahora el segundo

  if (isNaN(num1) || isNaN(num2)) { // verifico si son numeros
    window.alert("Error: Debes introducir dos números válidos."); // Lanzamos error si no son números lo que introducen
    return;  // Terminamos la función si no son validos
  }
}

  if (num1 === "" || num2 === "") {
    window.alert("Error: Debes introducir dos números."); //lanzamos este error si el usuario no ingresa nada
    return;
  } else if (num1 > num2) { //si el primer numero es mayor que el segundo calculamos la resta del primero con el segundo
    let resultado = num1 - num2;
    window.alert(`El resultado de restar ${num2} a ${num1} es: ${resultado}`);
  } else if (num1 < num2) { // l primer número es menor que el segundo,calcula la resta del segundo número menos el primero y muestra el resultado
    let resultado = num2 - num1;
    window.alert(`El resultado de restar ${num1} a ${num2} es: ${resultado}`);
  } else 
    window.alert("Ambos números son iguales, el resultado de restarlos es 0"); 
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




/*
TODO
EJERCICIO 11.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar por consola su cuadrado,
pero si es una cadena de caracteres debe trasformarla a mayúsculas.
*/

function comprobarDatos(params) {

  const dato = window.prompt("Ingrese cualquier dato");

  if (dato === null || dato.trim() === "") {
    window.alert("El dato ingresado no es válido.");
  } else if (!isNaN(dato) && Number.isInteger(Number(dato))) {
    const num = Number(dato);
    window.alert(`El cuadrado de ${num} es ${num ** 2}.`);
  }else if (isNaN(dato)) {
    window.alert(`La cadena en mayúsculas es: "${dato.toUpperCase()}".`);
  } else {
    window.alert("El dato que ingreso no es valido");
  }
}

comprobarDatos();
/*
EJERCICIO 12.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero múltiplo de 3 debe mostrar por consola
su descomposición en factores, p. ej. 12 = 3 x 4 (primero el factor menor, no quiero la descomposición en factores
primos completa). Si no, lo debe mostrar tal cual y decir que es primo)
Si es una cadena con una longitud mayor que 5 debe mostrarla por consola recortada. en caso contrario debe mostrarla
tal cual.
*/

function comprobarDato2() {
  const dato2 = window.prompt("Ingrese cualquier dato: ");

  if (!isNaN(dato2) && Number.isInteger(Number(dato2))) { // compruebo que lo que introduce el usuario sea un numero entero
    const num2 = Number(dato2);  // convierte el dato a numero
    if (num2 % 3 === 0) {
      // Si es múltiplo de 3 busca los factores distintos a 1 usando este buble
      let factor = null;

      for (let i = 2; i <= Math.sqrt(num2); i++) { // en el bucle excluimos el numero 1
        if (num2 % i === 0) {
          factor = i; // encontramos el factor menor
          break;
        }
      }
      if (factor) { // si encontramos un factor antes, calculamos el otro y lo mostramos
        const otroFactor = num2 / factor;
        window.alert(`${num2} = ${factor} x ${otroFactor}`);
      } else {
        window.alert(`${num2} es múltiplo de 3 pero no tiene otros factores.`); // si no tiene muestra esto por pantalla
      }
    } else {
      // Si no es múltiplo de 3, verifica si es primo
      if (num2 > 1 && esPrimo(num2)) {
        window.alert(`${num2} es un número primo.`);
      } else { // Si no es múltiplo de 3 ni primo, indica que no cumple las condiciones
        window.alert(`${num2} no es múltiplo de 3 ni primo.`);
      }
    } // si es un dato que ingresa es una cadena de caracteres: 
  } else if (typeof dato2 === "string") {
    // Si es una cadena
    if (dato2.length > 5) { // Si la longitud de la cadena es mas que 5, recorta los primeros 5 caracteres
      window.alert(dato2.slice(0, 5));
    } else { // y si tiene menos de 5 lo muestra tal cual
      window.alert(dato2);
    }
  } else { // en cualquier otro caso mostramos esto 
    window.alert("El dato ingresado no es válido.");
  }
}
// ahora hacemos una funcion para el caso que sea primo 
function esPrimo(n) {
  if (n <= 1) return false;  // los menores o iguales a 1 no son primos
  // hacemos un bucle para verificar de divisores desde dos hasta la raiz cuadrada del numero
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false; // no seria primo si tiene un divisor
  }
  return true; // si no encontramos divisores si seria primo
}

comprobarDato2();


/*
EJERCICIO 13.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar su doble. Si es un string,
Debe mostrarla en mayúsculas.
*/

function otroDatito(params) {
  const datito = window.prompt("Por favor ingresa oootro dato más :) ");

  if (!isNaN(datito) && Number.isInteger(Number(datito))) {  // comprobamos si es un numero y luego que sea entero
    const numerito = Number(datito); // si es asi 
    window.alert(`El doble de ${numerito} es ${numerito * 2}.`); // calcula y muestra el doble del numero
  } else if (typeof datito === "string" && datito.trim() !== "") { // comprueba que el dato no sea vacio
    window.alert(`La cadena en mayúsculas es: "${datito.toUpperCase()}".`); // lo convertimos en mayusaculas 
  } else { // si no es valido ninguno de los otros le muestra esto por pantalla al usuario 
    window.alert("El dato ingresado no es valido -.- ");
  }
}

otroDatito();

/*
EJERCICIO 14.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar el resto de dividirlo
entre 5. Si es un string, debe mostrar en mayúsculas o minúsculas.
*/

function otroDatoMas() {
  const datos = window.prompt("Ingresa otro dato cualquiera:");

  if (!isNaN(datos) && Number.isInteger(Number(datos))) { // comprobamos si es numero y entero
    // Si es un número entero, calculamos el resto de dividirlo entre 5
    const nume = Number(datos);
    window.alert(`El resto de dividir ${nume} entre 5 es ${nume % 5}.`); // si cumple las condiciones anteriores calcula el resto de dividir entre 5 con el %
  } else if (typeof datos === "string" && datos.trim() !== "") {
    // Si es una cadena válida (no vacía), muestra opciones para convertir a mayúsculas o minúsculas
    const opcion = window.prompt( 
      `¿Quieres convertir "${datos}" a:\n1. Mayúsculas\n2. Minúsculas\nIngresa 1 o 2:` // el usuario tiene que elegir si mayuscula o minuscula 
    );

    if (opcion === "1") {
      window.alert(`La cadena en mayúsculas es: "${datos.toUpperCase()}".`); 
    } else if (opcion === "2") {
      window.alert(`La cadena en minúsculas es: "${datos.toLowerCase()}".`);
    } else {
      window.alert("Opción no válida.");
    }
  } else {
    window.alert("El dato ingresado no es válido.");
  }
}

otroDatoMas();

/*
EJERCICIO 15.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrarlo al cubo, si tiene decimales, debe mostrarlo
al cuadrado. Si es un string debe cambiar la primera "a" por un asterisco. TIP: La clase String tiene un método replace(). 
*/

function procesarDato2000() {
  const dato = window.prompt("Ingresa un dato cualquiera:");

  if (!isNaN(dato)) {
    // Si el dato es numérico: 
    const num = Number(dato);

    if (Number.isInteger(num)) {
      // Si es un entero, mostrarmos el numero al cubo
      window.alert(`El cubo de ${num} es ${num ** 3}.`); // calculamos el cuadrado usando el **3
    } else {
      // Si tiene decimales, mostrarlo al cuadrado
      window.alert(`El cuadrado de ${num} es ${num ** 2}.`);
    }
  } else if (typeof dato === "string" && dato.trim() !== "") {
    // Si es una cadena no vacía
    const resultado = dato.replace("a", "*"); // Reemplaza la primera "a" por "*"
    window.alert(`La cadena modificada es: "${resultado}".`);
  } else {
    // Si no es válido
    window.alert("El dato ingresado no es válido.");
  }
}
procesarDato2000();
