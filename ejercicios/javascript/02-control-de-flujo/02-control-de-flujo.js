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
// 

// showIsEvenOrOdd();
}
