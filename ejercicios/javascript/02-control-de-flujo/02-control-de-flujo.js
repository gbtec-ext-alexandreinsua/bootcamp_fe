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

function letraUsuario() {
  let letraCorrecta = false;

  do {
    const letraIntroducida = window.prompt("Introduzca una letra:");

    if (
      letraIntroducida.toUpperCase() == "A" ||
      letraIntroducida.toUpperCase() == "B"
    ) {
      window.alert("Ha acertado");
    } else if (
      letraIntroducida.toUpperCase() == "C" ||
      letraIntroducida.toLowerCase() == "d"
    ) {
      window.alert("Casi ha acertado");
    } else {
      window.alert("Está equivocado");
    }
  } while (!letraCorrecta);
}

//letraUsuario();

/*
EJERCICIO 9.- 
Crea un método que le pida al usuario que introduzca dos números.
Debe imprimir el resultado de restar el menor al mayor
Por ejemplo si introduce 5 y 8 ó 8 y 5 debe mostrar por consola 
"El resultado de restarle 5 a 8 es 3".
 */

function dosNumeros() {
  const num1 = Number(window.prompt("Introduzca un numero:"));
  const num2 = Number(window.prompt("Introduzca otro numero:"));

  if (isNaN(num1) || isNaN(num2)) {
    window.alert("Introduzca solo números");
    return;
  }

  if (num1 > num2) {
    console.log(
      "El resultado de restarle " + num2 + " a " + num1 + " es " + (num1 - num2)
    );
  } else {
    console.log(
      "El resultado de restarle " + num1 + " a " + num2 + " es " + (num2 - num1)
    );
  }
}

//dosNumeros();

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
// restaNum();

/*
EJERCICIO 10.-
Crea un método que le pida al usuario el medio de transporte y los kilómetros que va a recorrer.
Debe calcular el coste del viaje y mostrar el resultado con un popup.
El primer dato es una cadena de caracteres que puede ser "Bicicleta", "Coche", "Tren" o "Autobús".
A continuación, si ha elegido el coche debe pedir el número de kilometros del viaje que va a realizar
y el número de litros aproximado que va a consumir;

Los viajes en tren valen 10€ cada 15km o fracción (un viaje de 16km cuesta 20€)
Los viajes en autobús valen 4,5€ cada 25km  (un viaje de 26km cuesta 4,5€)
El coste del viaje en coche es distancia * combustible * 0,32€.
 
Si la opción es bicicleta debe mostrar "Buen viaje!"
Si la opción es coche debe mostrar "El costo del viaje es ( combustible * kilómetros * 0,32€  )" 10 x 10 x 0.32 = 32
Si la opción es tren o autobús mostrar "El costo del viaje es ( kilómetros *  precio )"
Si introduce otra cosa, de mostrar "La opción que has presentado (transporte), no es válida" 
*/

function viaje() {
  //Hecho sin las fracciones en los precios de autovús y tren

  const transporte = window
    .prompt(
      "Introduzca un medio de transporte: (bicicleta, coche, autobús o tren)"
    )
    .trim()
    .toLowerCase();
  const kmViaje = Number(window.prompt("Introduzca los km del viaje:"));

  const precioCoche = 0.32;

  const precioTren = 10;
  const viajeTren = (kmViaje * precioTren) / 15;

  const precioBus = 4.5;
  const viajeBus = (kmViaje * precioBus) / 25;

  if (isNaN(kmViaje) || kmViaje <= 0) {
    //CORREGIR
    window.alert("Por favor, introduzca un valor válido para los kilómetros.");
  }

  if (transporte == "bicicleta") {
    window.alert("Buen viaje!");
  } else if (transporte == "coche") {
    const litrosViaje = Number(
      window.prompt("Introduzca los litros de combustible que va a consumir:")
    );

    const viajeCoche = litrosViaje * precioCoche;

    if (isNaN(litrosViaje) || litrosViaje <= 0) {
      window.alert(
        "Por favor, introduzca un valor válido para los litros de combustible."
      );
    } else {
      window.alert("Es costo del viaje es: " + viajeCoche + "€");
    }
  } else if (transporte == "tren") {
    window.alert("Es costo del viaje es: " + viajeTren + "€");
  } else if (transporte == "autobús" || transporte == "autobus") {
    window.alert("Es costo del viaje es: " + viajeBus + "€");
  } else {
    window.alert(
      "La opción que has presentado " + transporte + ", no es válida"
    );
  }
}

//viaje();

/*
 Esta función contiene la lógica que satisface los requisitos pero tiene varios problemas:
  1. Es una función muy larga: tiene 107 líneas de código sin contar comentarios. Una función debería ser de unas 20 líneas..
  2. Es muy compleja: tiene bucles anidados unos dentro de otros. 
  3. LO PEOR: esta repitiendo código igual o muy parecido.
*/
function mostrarCosteViaje() {
  // Creo un array con los valores válidos
  // así cuando haga comparaciones usaré este array para referenciarlas
  const mediosValidos = ["bicicleta", "coche", "tren", "autobus", "autobús"];
  // Establezco en constantes los valores fijos
  const factorCVC = 0.32;
  const precioTramoAutobus = 4.5;
  const kmTramoAutobus = 25;
  const precioTramoTren = 10;
  const kmTramoTren = 15;

  // variables para controlar los bucles
  let medioValido = false;
  let kilometrosValido = false;
  let litrosValidos = false;

  let medioTransporte = "";
  let km = 0;
  let lt = 0;
  let costoViaje = 0;
  let mensajeCostoViaje = "";

  do {
    // pido el medio de transporte
    medioTransporte = window
      .prompt(
        "Introduzca un medio de transporte\n(las opciones validas son Bicicleta, coche, tren y autobús)"
      )
      .trim()
      .toLowerCase();

    if (!medioTransporte) {
      window.alert("Debes introducir un medio de transporte");
    }

    // si la opción introducida por el usuaario es válida,saldrá del bucle
    if (mediosValidos.includes(medioTransporte)) {
      medioValido = true;
    }

    // si la opción no válida, mostrará el mensaje y seguirá en el bucle
    if (!medioValido) {
      window.alert(
        `La opción que has presentado (${medioTransporte}), no es válida.`
      );
    }
  } while (!medioValido);

  // Si el medio de transporte es diferente de bicicleta
  // pido el núemro de kilométros que va a recorrer
  if (mediosValidos[0] !== medioTransporte) {
    do {
      const kilometrosString = window
        .prompt(
          "introduzca en número de kilómetros que va a realizar (puede tener decimales):"
        )
        .trim();
      // si no introduce nada, se muestra un mensaje
      // y vuelve a pedir los km
      if (!kilometrosString) {
        window.alert("Debes introducir los kilómetros");
      } else {
        // si introduce algo que no se puede convertir a un número decimal
        // muestra el mensaje
        km = Number.parseFloat(kilometrosString);
        if (Number.isNaN(km)) {
          window.alert("Debes introducir un número de kilometros válido.");
          // comprueba el los km sean mayor que cero
        } else if (!km || 0 > km) {
          window.alert("El número de km tiene que ser mayor que cero.");
        } else {
          // si pasa las validaciones, sale de bucle
          kilometrosValido = true;
        }
      }
    } while (!kilometrosValido);
  }

  // si el medio de transporte es coche pedir los litros
  if (mediosValidos[1] === medioTransporte) {
    do {
      const litros = window
        .prompt(
          "introduzca en número de litros que va a realizar (puede tener decimales):"
        )
        .trim();
      // si introduce una cadena vacía, muestra un mensaje
      if (!litros) {
        window.alert("Debes introducir los litros");
      } else {
        // convierto el string a un numero decimal
        lt = Number.parseFloat(litros);
        // si no es un número, le muestra un mensaje
        if (Number.isNaN(lt)) {
          window.alert("Debes introducir un número de litros válido.");
          // si el número es cero o menor que cero muestra un mensaje
        } else if (!lt || 0 > lt) {
          window.alert("El número de litros tiene que ser mayor que cero.");
        } else {
          // si es un numero válido, sale del bucle
          litrosValidos = true;
        }
      }
    } while (!litrosValidos);
  }

  // const mediosValidos = ["bicicleta", "coche", "tren", "autobus", "autobús"];
  switch (medioTransporte) {
    case mediosValidos[0]: // bicleta
      mensajeCostoViaje = "Buen viaje!";
      break;
    case mediosValidos[1]: // coche
      costoViaje = lt * km * factorCVC; // esto
      mensajeCostoViaje = `El costo del viaje es ${costoViaje}€`;
      break;
    case mediosValidos[2]: // tren
      costoViaje = Math.floor(km / kmTramoTren) * precioTramoTren;
      // si los km no son un múltiplo  del tramo
      // la división tendrá un resto
      // y se agrega un el precio
      if (km % kmTramoTren) {
        costoViaje += precioTramoTren;
      }
      mensajeCostoViaje = `El costo del viaje es ${costoViaje}€`;
      break;
    case mediosValidos[3]: // autobus
    case mediosValidos[4]: // autobús
      costoViaje = Math.floor(km / kmTramoAutobus) * precioTramoAutobus;
      mensajeCostoViaje = `El costo del viaje es ${costoViaje}€`;
      break;
  }
  // mostramos al usuario el coste del viaje
  alert(mensajeCostoViaje);
}

// mostrarCosteViaje();

/* 
Refactorizamos la funcion anterior
Extraemos toda la lógica que podamos a funciones auxiliares
*/
function mostrarCosteViajeRefactorizado() {
  const mediosValidos = ["bicicleta", "coche", "tren", "autobus", "autobús"];
  const factorCVC = 0.32;
  const precioTramoAutobus = 4.5;
  const kmTramoAutobus = 25;
  const precioTramoTren = 10;
  const kmTramoTren = 15;

  let medioTransporte = "";
  let km = 0;
  let litros = 0;
  let costoViaje = 0;
  let mensajeCostoViaje = "";

  // las funciones pedirOpcion y pedirNumero deberían fusinarse
  // en otra pedirDato()
  medioTransporte = pedirOpcionConArray(
    "Introduzca un medio de transporte\n(las opciones validas son Bicicleta, coche, tren y autobús)",
    "Debes introducir un medio de transporte",
    mediosValidos
  );

  if (mediosValidos[0] !== medioTransporte) {
    km = pedirNumero("kilómetros", "que va a realizar");
  }

  if (mediosValidos[1] === medioTransporte) {
    litros = pedirNumero("litros", "que va consumir");
  }

  // este switch se podría eliminar aplicando Poo
  switch (medioTransporte) {
    case mediosValidos[0]:
      mensajeCostoViaje = "Buen viaje!";
      break;
    case mediosValidos[1]:
      costoViaje = litros * km * factorCVC;
      mensajeCostoViaje = `El costo del viaje es ${costoViaje}€`;
      break;
    case mediosValidos[2]:
      costoViaje = Math.floor(km / kmTramoTren) * precioTramoTren;
      if (km % kmTramoTren) {
        costoViaje += precioTramoTren;
      }
      mensajeCostoViaje = `El costo del viaje es ${costoViaje}€`;
      break;
    case mediosValidos[3]:
    case mediosValidos[4]:
      costoViaje = Math.floor(km / kmTramoAutobus) * precioTramoAutobus;

      mensajeCostoViaje = `El costo del viaje es ${costoViaje}€`;
      break;
  }

  alert(mensajeCostoViaje);
}

// función devuelve un número que se pide por popup
// le voy mandar por parámetro el mensaje que va a mostrar y las unidades
function pedirNumero(unidad, mensaje) {
  const numeroMinimo = 0;
  let condition = false;
  let numero = numeroMinimo;
  do {
    const result = window
      .prompt(
        `Introduzca el número de ${unidad} ${mensaje} (puede tener decimales):`
      )
      .trim();

    if (!result) {
      window.alert(`Debes introducir los ${unidad}`);
    } else {
      numero = Number.parseFloat(result);
      if (Number.isNaN(numero)) {
        window.alert(`Debes introducir un número de ${unidad} válido.`);
      } else if (numeroMinimo >= numero) {
        window.alert(`El número de ${unidad} tiene que ser mayor que cero.`);
      } else {
        condition = true;
      }
    }
  } while (!condition);

  return numero;
}

function pedirOpcionConArray(mensaje, mensaje2, mediosValidos) {
  let opcionValida = false;
  let opcion = "";
  do {
    opcion = window.prompt(mensaje).trim().toLowerCase();

    if (!opcion) {
      window.alert(mensaje2);
    }

    opcionValida = comprobarOpcion(mediosValidos, opcion);

    if (!opcionValida) {
      window.alert(
        `La opción que has presentado (${medioTransporte}), no es válida.`
      );
    } else {
      opcionValida = true;
    }
  } while (!opcionValida);
  return opcion;
}

function comprobarOpcion(array, option) {
  return array.includes(option);
}

// mostrarCosteViajeRefactorizado();

/*
EJERCICIO 11.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar por consola su cuadrado,
pero si es una cadena de caracteres debe trasformarla a mayúsculas.
Para hacerlo más usable voy a usar un pop up

*/
function transformarACuadradoOMayusculas() {
  // pedir dato
  let datoValido = false;
  do {
    let dato = pedirDatoPrompt("Introduzca un dato:");

    let number = Number(dato);

    // es entero o string
    if (Number.isInteger(number)) {
      window.alert(`El cuadrado de ${number} es ${number * number}.`);
      datoValido = true;
    } else if (Number.isNaN(number)) {
      window.alert(dato.toUpperCase());
      datoValido = true;
      // u otra opción
    } else {
      window.alert(
        `El dato introducido (${dato}) no es ni un entero ni un string`
      );
    }
  } while (!datoValido);
}

// transformarACuadradoOMayusculas();

/*
EJERCICIO 12.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero múltiplo de 3 debe mostrar por consola
su descomposición en factores, p. ej. 12 = 3 x 4 (primero el factor menor, no quiero la descomposición en factores
primos completa). Si no, lo debe mostrar tal cual y decir si es primo)
Si es una cadena con una longitud mayor que 5 debe mostrarla por consola recortada. en caso contrario debe mostrarla
tal cual.
*/

//CORREGIR

function multiploCadena() {

  let dato = pedirDatoPrompt("Introduce cualquier tipo de dato:");

  let numero = Number(dato);

  if (Number.isInteger(numero)) {

    if (numero % 3 === 0 && number !== 0) {
      window.alert(numero + " = 3 x " + (numero / 3));
    } else if (numero % 1 === 0 && numero % numero === 0) {
      window.alert(numero + " es primo");
  } else if (dato.length > 0) {
    window.alert(dato.slice(0, 5));

  } else {
    window.warn("Dato no válido")
  }
}

multiploCadena();

/*
TODO
EJERCICIO 13.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar su doble. Si es un string,
Debe mostrarla en mayúsculas.
*/

function dobleMayuscula() {

}









/*
TODO
EJERCICIO 14.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar el resto de dividirlo
entre 5. Si es un string, debe mostrar en  minúsculas.
*/






/*
TODO
EJERCICIO 15.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrarlo al cubo, si tiene decimales, debe mostrarlo
al cuadrado. Si es un string debe cambiar la primera "a" por un asterisco. TIP: La clase String tiene un método replace(). 
*/







//////////////////////////// FUNCIÓN PARA PEDIR DATOS /////////////////////////////

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

// FUNCIONES DE UTILIDADES

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

function esPrimoOptimizada(numero) {
  let esPrimo = true;
  // si es par, no primo
  if (numero % 2 === 0) {
    esPrimo = false;
  } else {
    // recorro sólo numeros impares
    // hasta la mitad del número
    for (let i = 3; i < numero / 2; i += 2) {
      if (numero % i === 0) {
        esPrimo = false;
        break;
      }
    }
  }
  return esPrimo;
}
