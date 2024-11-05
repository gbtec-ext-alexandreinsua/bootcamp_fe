/* Dado el siguiente array
const myArray = [42, "hola", 3, true, 76, 19, false, "JavaScript", 88, 15,null, 34, 53, 91, 12, "mundo", 27, 64, 82, 39 ];
1. Halla la suma de los numeros que contiene e múestrala por consola.*/



const myArray = [42, "hola", 3, true, 76, 19, false, "JavaScript", 88, 15,null, 34, 53, 91, 12, "mundo", 27, 64, 82, 39 ];

let sumNumber = 0;

myArray.forEach(Element => {
    if (typeof element === 'number'){
        sumNumber += element;
    }
});

console.log( "suma de los numeros es", sumNumber);

//2. Si el elemento es un string, muéstralo por pantalla.

myArray.forEach (element =>{
    if (typeof element === 'string'){
        console.log("elemento es un string", element);
    }

});

// 3. Si el elemento no es un número o un string, ignóralo */



 