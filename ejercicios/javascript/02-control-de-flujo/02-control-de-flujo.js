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

    // tranformarmos esa cadena a un número
    // puede dar como resultado Number | NaN
    let number = Number(numberString);  

    // comprobamos que el número sea un entero 
    // si no es entero mostramos un error 
    if (!Number.isInteger(number)){
        console.error(`${number} no es un entero`)
        return;
    }   

    // si es un entero 
    // calculamos si es par o impar 
    // y mostramos el mensaje correspondiente
    if ( number % 2 === 0){
        console.log(`${number} es un número par`);
    } else {
        console.log(`${number} es un número impar`);
    } 
}
 showIsEvenOrOdd();

/*
TODO
EJERCICIO 8.-
Crea un método que le pida al usuario que introduza una letra
Si la letra es A o B debe mostrar por consola que que ha acertado
si la letra es C o d debe mostrar por consola que está cerca de acertar
en caso caso contrario debe mostrar por consola que este equivocado.
"Ha acertado", "Casi ha acertado", "Está equivocado"
*/

/*
TODO
EJERCICIO 9.- 
 Crea un método que le pida al usuario que introduzca dos números.
Debe imprimir el resultado de restar el menor al mayor
Por ejmplo si introduce 5 y 8 ó 8 y 5 debe mostrar por consola 
"El resultado de restarle 5 a 8 es 3".
 */

/*
TODO
EJERCICIO 10.-
 Crea un método que le pida al usuario el medio de transporte que va a usar
 y que reciba dos parámetros de tipo numérico el precio del medio de transporte y los kilómetros que va a recorrer.
 Las opciones para los medios de transporte son coche, tren, bicicleta o autobus.
 Si la opción es bicicleta debe mostrar "Buen viaje"
 Si la opción es coche debe mostrar "Es costo del viaje es ( kilómetros por 0,21 )"
 Si la opción es tren o autobós mostrar "Es costo del viaje es ( kilómetros por precio"
 Si introduce otra cosa, de mostrar "La opción que has presentado (transporte), no válida es válida"
*/

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
su descomposición en factores, p. ej. 12 = 3 x 4 (no quiero la descomposición en factores primos completa). Si no,
lo debe mostrar tal cual
Si es una cadena con una longitud mayor que 5 debe mostrarla por consola recortada. en caso contrario debe mostrarla
tal cual.
*/

/*
TODO
EJERCICIO 13.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar su doble. Si es un string,
Debe mostrarla con la última letra en mayúsculas.
*/

/*
TODO
EJERCICIO 14.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar el resto de dividirlo
entre 5. Si es un string, debe mostrar la cadena alternando las letras en mayúsculas o minúsculas (p. ej.: palabra -> PaLaBrA)
*/

/*
TODO
EJERCICIO 15.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrarlo al cubo, si tiene decimales, debe mostrarlo
al cuadrado. Si es un string debe cambiar la primera "a" por un asterisco.*/