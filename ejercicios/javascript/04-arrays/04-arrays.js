/* Dado el siguiente array
const myArray = [42, "hola", 3, true, 76, 19, false, "JavaScript", 88, 15,null, 34, 53, 91, 12, "mundo", 27, 64, 82, 39 ];
<<<<<<< HEAD
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

//  HEAD
// Mostramos la suma de los números por consola
console.log("La suma de los números es:", suma);

console.log("La suma del array es ", suma);

 /*1. Halla la suma de los numeros que contiene y múestrala por consola.
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
//  development

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


const numbers = [50, 93, 62, 2, 66, 17, 94, 46, 32, 83, 52, 10, 86, 72, 11, 68, 9, 37, 26, 20];

function obtenerPares(array) {
  const pares = [];
  for (const num of array) {
    if (num % 2 === 0) {
      pares.push(num);
    }
  }
  return pares;
}

console.log("Números pares:", obtenerPares(numbers));





/* EJERCICIO 23.-
Dado el siguiente array =
const numbers = [50,93,62,2,66,17,94,46,32,83,52,10,86,72,11,68,9,37,26,20]
crea una función que devuelva otro con el doble de cada número primo de la primera
Se puede usar un bucle for o un bucle for-of.
*/


function esPrimo(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function obtenerDoblesDePrimos(array) {
  const doblesPrimos = [];
  for (const num of array) {
    if (esPrimo(num)) {
      doblesPrimos.push(num * 2);
    }
  }
  return doblesPrimos;
}

console.log("Dobles de números primos:", obtenerDoblesDePrimos(numbers));





//  HEAD
/* EJERCICIO 25.- */
//  development

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


const palabras = [
  "Yate", " ", "tigre", "elefante", "nube", "elección", "montaña", "oso", "sol", " ", 
  "agua", "quijote", "uva", "ícara", ",", " ", "mango", "esfera", ",", " ", "dado", 
  "iguana", "sol", "cisne", "ulises", "luna", "pato", "oso", " ", "magnolia", "agua", 
  "granizo", "nieve", "oso", "llama", "icono", "agua", "sapo", " ", "quijote", "uva", 
  "eucalipto", " ", "diamante", "enano", "viento", "osa", "río", "agua", "nilo", " ", 
  "isla", "nada", "serpiente", "espacio", "cuerda", "tarde", "oso", "sándalo", " ", 
  "cisne", "oso", "nube", " ", "sol", "urna", "sierra", " ", "llama", "enigma", 
  "nube", "granizo", "urna", "alondra", "sol", "."
];

function formarPalabra(array) {
  let resultado = "";
  for (const palabra of array) {
    if (palabra === " ") {
      resultado += " ";
    }
    else if (palabra.trim() && /^[a-zA-Z]/.test(palabra)) {
      resultado += palabra[0];
    }
  }
  return resultado.trim();
}

const secreto = formarPalabra(palabras);
console.log("Palabra formada:", secreto);
alert("Secreto: " + secreto);







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


const socios = [
  { nombre: "Juan", apellido: "Pérez", sancionado: false },
  { nombre: "María", apellido: "González", sancionado: true },
  { nombre: "Luis", apellido: "Rodríguez", sancionado: false },
  { nombre: "Ana", apellido: "Martínez", sancionado: true },
  { nombre: "Carlos", apellido: "López", sancionado: false },
  { nombre: "Laura", apellido: "Sánchez", sancionado: true },
  { nombre: "José", apellido: "García", sancionado: false },
  { nombre: "Elena", apellido: "Torres", sancionado: true },
  { nombre: "Pedro", apellido: "Vázquez", sancionado: false },
  { nombre: "Sandra", apellido: "Jiménez", sancionado: true }
];

function listaUsuariosNoSancionados(array) {
  let lista = "";
  for (const socio of array) {
    if (!socio.sancionado) {
      lista += `· ${socio.nombre} ${socio.apellido}\n`;
    }
  }
  return lista;
}

console.log("Usuarios no sancionados:\n" + listaUsuariosNoSancionados(socios));




//  development
