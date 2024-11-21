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
si la letra es C o d debe mostrar por consola que está cerca de acertar
en caso caso contrario debe mostrar por consola que est equivocado.
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
TODO
EJERCICIO 9.- 
Crea un método que le pida al usuario que introduzca dos números.
Debe imprimir el resultado de restar el menor al mayor
Por ejmplo si introduce 5 y 8 ó 8 y 5 debe mostrar por consola 
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
    let transporte;
    
    do {
        transporte = prompt("Introduce el medio de transporte: Bicicleta, Coche, Tren o Autobus").toLowerCase();
        
        
        if (["bicicleta", "coche", "tren", "autobus"].includes(transporte)) {
            break;
        } else {
            alert(`La opción que has presentado (${transporte}) no es válida.`);
        }
        
    } while (true); 

    
    switch (transporte) {
        case "bicicleta":
            alert("¡Buen viaje!");
            break;

        case "coche":
            
            const kmCoche = parseFloat(prompt("Introduce los kilómetros del viaje:"));
            const litros = parseFloat(prompt("Introduce los litros aproximados que va a consumir:"));

            if (!isNaN(kmCoche) && kmCoche > 0 && !isNaN(litros) && litros > 0) {
                let costeCoche = kmCoche * litros * 0.21; 
                alert(`El coste del viaje en coche es: ${costeCoche.toFixed(2)}€`);
            } else {
                alert("Por favor, introduce valores válidos para kilómetros y litros.");
            }
            break;

        case "tren":
            const kmTren = parseInt(prompt("Introduce los kilómetros del viaje:"));

            if (!isNaN(kmTren) && kmTren > 0) {
                let bloquesTren = Math.ceil(kmTren / 15);
                let costeTren = bloquesTren * 10;
                alert(`El coste del viaje en tren es: ${costeTren.toFixed(2)}€`);
            } else {
                alert("Por favor, introduce un número válido de kilómetros.");
            }
            break;

        case "autobus":
            const kmBus = parseInt(prompt("Introduce los kilómetros del viaje:"));

            if (!isNaN(kmBus) && kmBus > 0) {
                let bloquesBus = Math.ceil(kmBus / 25);
                let costeBus = bloquesBus * 4.5;
                alert(`El coste del viaje en autobús es: ${costeBus.toFixed(2)}€`);
            } else {
                alert("Por favor, introduce un número válido de kilómetros.");
            }
            break;
    }
}

// Llamar a la función para calcular el costo del viaje
calcularCosteViaje();


/*
TODO
EJERCICIO 11.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar por consola su cuadrado,
pero si es una cadena de caracteres debe trasformarla a mayúsculas.
*/

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
