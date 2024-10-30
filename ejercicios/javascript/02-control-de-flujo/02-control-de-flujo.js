/* Crea un método que le pida al usuario un número
y imprima por consola si es par o impar 
Por ejemplo
"Introduzca un número:"
2
"2 es un número par."
*/


function esPar(){
    const number = Number.parseInt(window.prompt("Introduce un número: "));
    if(number % 2 === 0){
        console.log(`${number} es un número par.`)
    }else{
        console.log(`${number} es un número impar.`)
    }
}

esPar();
