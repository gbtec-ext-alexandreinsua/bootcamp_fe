/*
EJERCICIO 21.- 
Dado el siguiente array
const myArray = [42, "hola", 3, true, 76, 19, false, "JavaScript", 88, 15,null, 34, 53, 91, 12, "mundo", 27, 64, 82, 39 ];
 1. Halla la suma de los numeros que contiene y múestrala por consola.
 2. Si el elemento es un string, muéstralo por pantalla.
 3. Si el elemento no es un número o un string, ignóralo */

function procesarArray() {
  let suma = 0;
  for (let i = 0; i < myArray.length; i++) {
    if (typeof myArray[i] === "string") {
      console.log(myArray[i]);
    }

    if (typeof myArray[i] === "number") {
      suma += myArray[i];
    }
  }
  return suma;
}

function procesarArrayForOf() {
  let suma = 0;
  for (const element of myArray) {
    if (typeof element === "string") {
      console.log(element);
    }

    if (typeof element === "number") {
      suma += element;
    }
  }
  return suma;
}

// console.log("La suma del array es ", suma);

/* EJERCICIO 22.- 
Dado el siguiente array =
const numbers = [50,93,62,2,66,17,94,46,32,83,52,10,86,72,11,68,9,37,26,20]
crea una función que devuelva otro con los números pares. Se puede usar un 
bucle for o un bucle for-of.
*/

function arrayNumeroPar() {

  const numbers = [50,93,62,2,66,17,94,46,32,83,52,10,86,72,11,68,9,37,26,20];

  let arrayPares = [];

  for (let number of numbers) {

    if (number % 2 === 0) {

      arrayPares.push(number);

      window.alert(`Lo números pares del array son: ${arrayPares}`);
    }
    
  }
}

arrayNumeroPar();

/* EJERCICIO 23.-
Dado el siguiente array =
const numbers = [50,93,62,2,66,17,94,46,32,83,52,10,86,72,11,68,9,37,26,20]
crea una función que devuelva otro con el doble de cada número primo de la primera
Se puede usar un bucle for o un bucle for-of.
*/

/* EJERCICIO 24.- 
Descubre el secreto! 
Dado el siguiente array 
["Yate"," ","tigre","elefante","nube","elección","montaña","oso","sol"," ","agua","quijote","uva","ícara",
","," ","mango","esfera",","," ","dado","iguana","sol","cisne","ulises","luna","pato","oso"," ","magnolia",
"agua","granizo","nieve","oso","llama","icono","agua","sapo"," ","quijote","uva","eucalipto"," ","diamante","enano",
"viento","osa","río","agua","nilo"," ","isla","nada","serpiente","espacio","cuerda","tarde","oso","sándalo"," ","cisne",
"oso","nube"," ","sol","urna","sierra"," ","llama","enigma","nube","granizo","urna","alondra","sol","."]

Crea una función que devuelva formada con la inicial de cada una de las palabras del array y muestrea el resultado 
con un pop up.
Se puede usar un bucle for o un bucle for-of.
*/

/* EJERCICIO 25.- 
Usuarios de una biblioteca.
Necesitamos tener en una lista aquellos usuarios de la biblioteca que devuelven sus préstamos a tiempo
porque queremos premiarlos.
Crea un método que muestre la lista usando el punto medio (·) como viñeta y el salto de línea \n.
Aquí tienes la lista de todos los usuarios.

const socios = [
  { "nombre": "Juan", "apellido": "Pérez", "sancionado": false },
  { "nombre": "María", "apellido": "González", "sancionado": true },
  { "nombre": "Luis", "apellido": "Rodríguez", "sancionado": false },
  { "nombre": "Ana", "apellido": "Martínez", "sancionado": true },
  { "nombre": "Carlos", "apellido": "López", "sancionado": false },
  { "nombre": "Laura", "apellido": "Sánchez", "sancionado": true },
  { "nombre": "José", "apellido": "García", "sancionado": false },
  { "nombre": "Elena", "apellido": "Torres", "sancionado": true },
  { "nombre": "Pedro", "apellido": "Vázquez", "sancionado": false },
  { "nombre": "Sandra", "apellido": "Jiménez", "sancionado": true }
];
*/
