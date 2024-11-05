/* Dado el siguiente array
const myArray = [42, "hola", 3, true, 76, 19, false, "JavaScript", 88, 15,null, 34, 53, 91, 12, "mundo", 27, 64, 82, 39 ];
1. Halla la suma de los numeros que contiene y múestrala por consola.
2. Si el elemento es un string, muéstralo por pantalla.
3. Si el elemento no es un número o un string, ignóralo. */

const myArray = [42, "hola", 3, true, 76, 19, false, "JavaScript", 88, 15, null, 34, 53, 91, 12, "mundo", 27, 64, 82, 39];

function arrayData(array) {
    let incremento = 0;

    for (let i = 0; i < array.length; i++) {
        if(typeof array[i] === 'number') {
            incremento += array[i];
        }

        if(typeof array[i] === 'string') {
            console.log(array[i]);
        }
    }

    console.log("la suma de todos los números del array es:" + incremento)
}

arrayData(myArray);


