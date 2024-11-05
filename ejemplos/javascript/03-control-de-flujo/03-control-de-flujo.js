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
