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

function letraUsuario() {

  let letraCorrecta = false;

  do {
    const letraIntroducida = window.prompt("Introduzca una letra:");

    if (letraIntroducida.toUpperCase() == 'A' ||letraIntroducida.toUpperCase() == 'B') {
      window.alert("Ha acertado");
    } else if (letraIntroducida.toUpperCase() == 'C' ||letraIntroducida.toLowerCase() == 'd') {
      window.alert("Casi ha acertado");
    } else {
      window.alert("Está equivocado");
    }
  } while (!letraCorrecta);
}

//letraUsuario();


/*
TODO
EJERCICIO 9.- 
Crea un método que le pida al usuario que introduzca dos números.
Debe imprimir el resultado de restar el menor al mayor
Por ejmplo si introduce 5 y 8 ó 8 y 5 debe mostrar por consola 
"El resultado de restarle 5 a 8 es 3".
 */

  function dosNumeros() {
    const num1 = Number(window.prompt("Introduzca un numero:"));
    const num2 = Number(window.prompt("Introduzca otro numero:"));
    
    if (isNaN(num1) || isNaN(num2)){
      window.alert("Introduzca solo números");
      return;
    }

    if (num1 > num2) {
      console.log("El resultado de restarle " + num2 + " a " + num1 + " es " + (num1 - num2));
    } else {
      console.log("El resultado de restarle " + num1 + " a " + num2 + " es " + (num2 - num1));
    }
  }

  //dosNumeros();



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

function viaje() {

  const transporte = window.prompt("Introduzca un medio de transporte:");
  const kmViaje = Number(window.prompt("Introduzca los km del viaje:"));

  const precioCoche = 0.21;
  
  const precioTren = 10;
  const viajeTren = (kmViaje * precioTren) / 15;

  const precioBus = 4.5;
  const viajeBus = (kmViaje * precioBus) / 25;
  
  if (isNaN(kmViaje) || kmViaje <= 0) {
    window.alert("Por favor, introduzca un valor válido para los kilómetros.");
  }

  if (transporte == "bicicleta") {
    window.alert("Buen viaje!");

  } else if (transporte == "coche") {
    const litrosViaje = Number(window.prompt("Introduzca los litros de combustible que va a consumir:"));

    const viajeCoche = litrosViaje * precioCoche; 

    if (isNaN(litrosViaje) || litrosViaje <= 0) {
      window.alert("Por favor, introduzca un valor válido para los litros de combustible.");
      
    } else {
      window.alert("Es costo del viaje es: " + viajeCoche + "€");
    }

  } else if (transporte == "tren") {
    window.alert("Es costo del viaje es: " + viajeTren + "€");

  } else if (transporte == "autobús") {
    window.alert("Es costo del viaje es: " + viajeBus + "€");
  
  } else {
    window.alert("La opción que has presentado " + transporte + ", no es válida")
  }

}

// viaje();


/*
TODO
EJERCICIO 11.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar por consola su cuadrado,
pero si es una cadena de caracteres debe trasformarla a mayúsculas.
*/

function datoCualquiera() {
  const dato = window.prompt("Introduce cualquier tipo de dato:");

  const cuadrado = dato * dato;

  if (!isNaN(dato) && Number.isInteger(Number(dato))) {
    console.log("El cuadrado de " + dato + " es " + cuadrado);
  } else {
    console.log(dato.toUpperCase());
  }

}

//datoCualquiera()


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
