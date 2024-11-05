// TODO: incorporar ejemplos de main.js

// 

const mensaje = function(){
    console.log("mensaje 1");
}

mensaje();

const mensaje2 = function(msg){
    console.log(msg);
}

mensaje2("mensaje 2");

/*

*/ 


function procesarNumeros(num1, num2, fn){
    return fn(num1, num2);
}

let resultado = procesarNumeros(1,2, function(n1, n2){
    return n1 + n2;
})

console.log("el resultado es: " + resultado)

const suma = function(n1,n2) {
    return n1 + n2;
}

const resta = function(n1,n2) {
    return n1 - n2;
}

const multiplicacion = function(n1,n2) {
    return n1 * n2;
}

const division = function(n1,n2) {
    return n1 / n2;
}

resultado = procesarNumeros(2, 5, suma);
console.log("el resultado es: " + resultado)

resultado = procesarNumeros(2, 5, resta);
console.log("el resultado es: " + resultado)

resultado = procesarNumeros(2, 5, multiplicacion);
console.log("el resultado es: " + resultado)

resultado = procesarNumeros(2, 5, division);
console.log("el resultado es: " + resultado)

// declaración de funcion incluye parámetros
function procesarArray(array, callback) {
    // creo un array nuevo
    const resultado = [];
    // recorro el array que recibo por parámetro

    for (let i = 0; i < array.length; i++) {
       resultado.push(callback(array[i]))
    }

    // for of para recorrer collecciones
    // for (const elemento of array) {
    //     resultado.push(callback(elemento));
    // }
    return resultado;
}

function convertirAMayusculas(str) {
    // comvierte un string a mayúsculas
    return str.toUpperCase();
}

function agregarPrefijo(str) {
    return "pre-" + str;
}

const frutas = ["manzana", "banana", "cereza"];

// invocación de función con argumentos
const resultadoMayusculas = procesarArray(frutas, convertirAMayusculas);
const resultadoPrefijo = procesarArray(frutas, agregarPrefijo);

console.log("Array original:", frutas);
console.log("Resultado con mayúsculas:", resultadoMayusculas);
console.log("Resultado con prefijo:", resultadoPrefijo);