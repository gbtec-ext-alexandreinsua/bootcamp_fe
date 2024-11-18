
/*
EJERCICIO 21.- 
Dado el siguiente array
=======
/*
EJERCICIO 21.- 
Dado el siguiente array
>>>>>>> development
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


/* EJERCICIO 22.- */

/* EJERCICIO 23.- */

/* EJERCICIO 24.- */

/* EJERCICIO 25.- */
