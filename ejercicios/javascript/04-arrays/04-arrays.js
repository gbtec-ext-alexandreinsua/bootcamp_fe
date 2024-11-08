
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

function array(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      sum += array[i]; // Suma los números
    } else if (typeof array[i] === "string") {
      console.log(array[i]); // Muestra los strings
    }
    // Ignora los elementos que no son ni número ni string
  }

  console.log("La suma de los números es:", sum);
}
array(myArray);

function array2(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      sum += array[i]; // Suma los números
    } else if (typeof array[i] === "string") {
      console.log(array[i]); // Muestra los strings
    }
    // Ignora los elementos que no son ni número ni string
  }
  return sum;
}

function indiferente() {
  const arrayNum = [1, 2, 3, 4, 5, "lalala"];
  console.log(array2(arrayNum));
}
indiferente();
