/*
EJERCICIO 21.- 
Dado el siguiente array
/* Dado el siguiente array

const myArray = [42, "hola", 3, true, 76, 19, false, "JavaScript", 88, 15,null, 34, 53, 91, 12, "mundo", 27, 64, 82, 39 ];
 1. Halla la suma de los numeros que contiene e múestrala por consola.
 2. Si el elemento es un string, muéstralo por pantalla.
 3. Si el elemento no es un número o un string, ignóralo */

 const myArray = [42, "hola", 3, true, 76, 19, false, "JavaScript", 88, 15,null, 34, 53, 91, 12, "mundo", 27, 64, 82, 39 ];

1. Halla la suma de los numeros que contiene e múestrala por consola.

2. Si el elemento es un string, muéstralo por pantalla.

3. Si el elemento no es un número o un string, ignóralo */
 
const myArray = [42, "hola", 3, true, 76, 19, false, "JavaScript", 88, 15, null, 34, 53, 91, 12, "mundo", 27, 64, 82, 39];

let suma = 0;
for (let i = 0; i < myArray.length; i++) {
  if (typeof myArray[i] === "string") {
    console.log(myArray[i]);
  }

  if (typeof myArray[i] === "number") {
    suma += myArray[i];
  }
}
let suma = 0;
//element => es una función flecha que se utiliza para definir 
//una función que se ejecutará para cada elemento de myArray cuando se llama a forEach.

myArray.forEach(elemento => {
    
    if (typeof elemento === 'number') {
        suma += elemento;
        
    }
    else if (typeof elemento ==='string') {
        console.log(elemento); 
    }else{}
    
});

console.log("La suma de los números es:", suma);


//Ejemplo 2
let suma2 = 0;
function array2(array2){
    for(let i =0 ; i < array2.length; i++){
        if (typeof array2[i] === 'number'){
            suma2 += array2[i]
            
        
        }else if( typeof array2[i] === 'string'){
            console.log(array2[i])
        } 
    }
    console.log("La suma de los numeros dentro del array es : ",suma2)
}
array2(myArray)

console.log("La suma del array es ", suma);
