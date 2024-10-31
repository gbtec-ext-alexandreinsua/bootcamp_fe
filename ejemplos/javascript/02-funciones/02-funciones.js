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