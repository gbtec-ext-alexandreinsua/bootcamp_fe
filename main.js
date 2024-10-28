/* FUNCIONES Y SCOPES 
/ MÉTODOS 
Un conjunto de instrucciones que pueden recibir algún parámetro
y pueden devolver valores.

Función es un método que siembre devuelve un valor.

Procedimiento es un método que no devuelve valor;

En Javascript las funciones devuelven undenfined siempre que 
no tenga una sentencia return, por eso hablamos siempre de funciones  

Scope = ámbito o dominio
*/

// SCOPE GLOBAL 
// De script

let minutos = 60;
console.log(minutos);

// DECLARACIÓN DE FUNCIÓN
// palabra reservada function  nombre (params) {}
// crea su propio scope
function nombre(){
    console.log(hora); // var está disponible como undefined antes de estar declarada
    // console.log(milisegundos);
    
    
    // scope local
    let segundos = 30;
    console.log("dentro de la funcion");
    
    console.log(minutos);
    console.log(segundos);
    
    // scope de bloque
    {
        var hora = 1; 
        let milisegundos = 1000;
        console.log("dentro del bloque");
    
    console.log(minutos);
    console.log(segundos);
    console.log(milisegundos);
    }
    
}
// console.log(milisegundos);
// console.log(segundos);

nombre();

// CONTROL DE FLUJO 
/* condicional If 
    if(condición){
        // sentencias que se ejecutan si se cumple la condición
    }
*/ 
let x = 10;
if(x > 5) {
    console.log("x es mayor que 5");
}

/* condicional if-else-if
   if(condición 1){
        // sentencias que se ejecutan si se cumple la condición 1
    } else if (condicion 2) {
        // sentencias que se ejecutan si NO se cumple la condición 2
    } else {
        // sentencias que se ejecutan si NO se cumple la condición
    }
*/
if(x > 10) {
    console.log("x es mayor que 10");
} else if (x <= 9 && x > 5) {
    console.log("x es comprendido entre 9 y 6");
} else {
    console.log("x es comprendido menor o igual que 5");
}

/* Estructura switch 
    switch(variable){
        case condicion:
            // sentencias que se ejecuta si se cumple la condición
            break;
        default:
            // sentencias que se ejecuta si no se cumple ninguna condicion
            
    }
*/
switch(x){
    case x >= 10:
        console.log("x es mayor o igual que 10");
        break;
    case x <= 9 && x >= 6:
        console.log("x es comprendido entre 9 y 6");
        break;
    default: 
        console.log("x es menor o igual que 5");
    break;
}
