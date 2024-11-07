/* Dado el siguiente array
const myArray = [42, "hola", 3, true, 76, 19, false, "JavaScript", 88, 15,null, 34, 53, 91, 12, "mundo", 27, 64, 82, 39 ];
1. Halla la suma de los numeros que contiene e múestrala por consola.
2. Si el elemento es un string, muéstralo por pantalla.
3. Si el elemento no es un número o un string, ignóralo */

const myArray = [42, "hola", 3, true, 76, 19, false, "JavaScript", 88, 15, null, 34, 53, 91, 12, "mundo", 27, 64, 82, 39 ];

function arrayData(myArray){
    let sum = 0;
    for (let i = 0; i < myArray.length; i++) {
    if(typeof myArray[i] === 'number'){//validamos que sea un número
       sum += myArray[i];//suma los números
    }
    else if (typeof myArray[i] === 'string'){//validamos que sea un string
        console.log(myArray[i]);//muestra los strings
    }   
}
console.log('la suma de todos los números del array es: ' + sum);
//ignora los elementos que no son ni número ni string
}
arrayData(myArray);


