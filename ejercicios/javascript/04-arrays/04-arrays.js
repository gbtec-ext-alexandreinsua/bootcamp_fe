<<<<<<< HEAD
/* Dado el siguiente array
const myArray = [42, "hola", 3, true, 76, 19, false, "JavaScript", 88, 15,null, 34, 53, 91, 12, "mundo", 27, 64, 82, 39 ];
1. Halla la suma de los numeros que contiene e múestrala por consola.
2. Si el elemento es un string, muéstralo por pantalla.
3. Si el elemento no es un número o un string, ignóralo */



const myArray = [42, "hola", 3, true, 76, 19, false, "JavaScript", 88, 15,null, 34, 53, 91, 12, "mundo", 27, 64, 82, 39 ];


let suma = 0;

for (let i = 0; i < myArray.length; i++) {
    if(typeof myArray[i] === "number"){
        suma += myArray[i];
    } else if (typeof myArray[i] === "string") {
        console.log(myArray[i]);
    }    
}

console.log(suma);





suma = 0;

myArray.forEach(element => {
    if(typeof element === "number"){
        suma += element;
    } else if (typeof element === "string") {
        console.log(element);
    }  
});

console.log(suma);


suma = 0;

for (const element in myArray){
    if(typeof element === "number"){
        suma += element;
    } else if (typeof element === "string") {
        console.log(element);
    }  
}

console.log(suma);






suma = 0;

myArray.forEach(element => {
    if(typeof element === "number" || typeof element === "string"){   
        if (typeof element === "string") {
            console.log(element);
        } else {
            suma += element;
        } 
    }
})

console.log(suma);
=======
/*
EJERCICIO 21.- 
Dado el siguiente array
const myArray = [42, "hola", 3, true, 76, 19, false, "JavaScript", 88, 15,null, 34, 53, 91, 12, "mundo", 27, 64, 82, 39 ];
 1. Halla la suma de los numeros que contiene e múestrala por consola.
 2. Si el elemento es un string, muéstralo por pantalla.
 3. Si el elemento no es un número o un string, ignóralo */

 const myArray = [42, "hola", 3, true, 76, 19, false, "JavaScript", 88, 15,null, 34, 53, 91, 12, "mundo", 27, 64, 82, 39 ];

let suma = 0;
for (let i = 0; i < myArray.length; i++) {
  if (typeof myArray[i] === "string") {
    console.log(myArray[i]);
  }

  if (typeof myArray[i] === "number") {
    suma += myArray[i];
  }
}

console.log("La suma del array es ", suma);
>>>>>>> development
