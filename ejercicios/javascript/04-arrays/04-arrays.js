/* Dado el siguiente array
const myArray = [42, "hola", 3, true, 76, 19, false, "JavaScript", 88, 15,null, 34, 53, 91, 12, "mundo", 27, 64, 82, 39 ];
1. Halla la suma de los numeros que contiene e múestrala por consola.
2. Si el elemento es un string, muéstralo por pantalla.
3. Si el elemento no es un número o un string, ignóralo */
const myArray = [42, "hola", 3, true, 76, 19, false, "JavaScript", 88, 15,null, 34, 53, 91, 12, "mundo", 27, 64, 82, 39 ];


function  arrayData(unArray){   
    let incremento = 0;
for (i = 0; i <= unArray.length; i++) {
   if(typeof myArray[i] === 'number') {
    incremento += unArray[i];
   }

else if(typeof unArray[i] === 'string'){
console.log(unArray[i]);
    }
}
console.log(incremento);
}
arrayData(myArray);




