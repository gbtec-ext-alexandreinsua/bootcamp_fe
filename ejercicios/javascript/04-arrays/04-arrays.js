/* Dado el siguiente array
const myArray = [42, "hola", 3, true, 76, 19, false, "JavaScript", 88, 15,null, 34, 53, 91, 12, "mundo", 27, 64, 82, 39 ];
1. Halla la suma de los numeros que contiene y múestrala por consola.
2. Si el elemento es un string, muéstralo por pantalla.
3. Si el elemento no es un número o un string, ignóralo. */
// Dado el siguiente array
const myArray = [42, "hola", 3, true, 76, 19, false, "JavaScript", 88, 15, null, 34, 53, 91, 12, "mundo", 27, 64, 82, 39];

let suma = 0;

for (let i = 0; i < myArray.length; i++) {
    const elemento = myArray[i]; // Obtener el elemento actual

    if (typeof elemento === "number") {
        suma += elemento;
    }
    else if (typeof elemento === "string") {
        console.log("String encontrado:", elemento);
    }
}

// Mostramos la suma de los números por consola
console.log("La suma de los números es:", suma);
