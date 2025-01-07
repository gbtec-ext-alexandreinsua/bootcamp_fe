import { esPrimo } from "../../../js/math-utils.js";

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

<<<<<<< HEAD
const numbers = [50, 93, 62, 2, 66, 17, 94, 46, 32, 83, 52, 10, 86, 72, 11, 68, 9, 37, 26, 20];

function obtenerNumerosPares(array) {
    const pares = [];
    for (const numero of array) {
        if (numero % 2 === 0) {
            pares.push(numero);
        }
    }
    return pares;
}

console.log(obtenerNumerosPares(numbers));

=======
function filtrarPares(numeros) {
  const pares = new Array();
  for (const numero of numeros) {
    if (numero % 2 === 0) {
      pares.push(numero);
    }
  }
  return pares;
}
// const numbers = [
//   50, 93, 62, 2, 66, 17, 94, 46, 32, 83, 52, 10, 86, 72, 11, 68, 9, 37, 26, 20,
// ];

function filtrarParesFuncional(numeros) {
  return numeros.filter((n) => !(n % 2));
}

// console.log(filtrarPares(numbers));
// console.log(filtrarParesFuncional(numbers));
>>>>>>> development

/* EJERCICIO 23.-
Dado el siguiente array =
const numbers = [50,93,62,2,66,17,94,46,32,83,52,10,86,72,11,68,9,37,26,20]
crea una función que devuelva otro con el doble de cada número primo de la primera
Se puede usar un bucle for o un bucle for-of.
*/
const numbers = [
  50, 93, 62, 2, 66, 17, 94, 46, 32, 83, 52, 10, 86, 72, 11, 68, 9, 37, 26, 20,
];

function duplicarPrimo(numeros) {
  const primosDuplicados = new Array();

  for (const numero of numeros) {
    if (esPrimo(numero)) {
      primosDuplicados.push(numero * 2);
    }
  }
  return primosDuplicados;
}

function duplicarPrimoFuncional(numeros) {
  return numeros.filter(esPrimo).map((numero) => numero * 2);
}
// console.log(duplicarPrimo(numbers));
// console.log(duplicarPrimoFuncional(numbers));

const numbers1 = [50, 93, 62, 2, 66, 17, 94, 46, 32, 83, 52, 10, 86, 72, 11, 68, 9, 37, 26, 20];

// Función para verificar si un num es primo
function esPrimo(numero) {
    if (numero <= 1) return false; // Los números menores o iguales a 1 no son primos
    for (let i = 2; i <= Math.sqrt(numero); i++) {     // Iteramos desde 2 hasta la raíz cuadrada del número.
        if (numero % i === 0) return false;    // Si el número es divisible por i, no es primo.
    }
    return true;  // si no encontramos ningun divisor el num es primo.
}

// Función principal para obtener el doble de los nums primos:
function dobleDePrimos(array) {
    const resultado = [];            // array donde guardaremos los resultados
    for (const numero of array) {
        if (esPrimo(numero)) {       // Verificamos si el número actual es primo usando la función (esPrimo).
            resultado.push(numero * 2); // Doblamos el número primo
        }
    }
    return resultado;
}

console.log(dobleDePrimos(numbers1)); // llamo a la funcion (dobleDePrimos) con el array numbers1 


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

<<<<<<< HEAD

=======
function descubrirSecreto(array) {
  let secreto = "";
  for (const palabra of array) {
    secreto += palabra.charAt(0);
  }
  return secreto;
}

function descubrirSecretoFuncional(array) {
  return array.reduce((secreto, palabra) => {
    secreto += palabra.charAt(0);
    return secreto;
  }, "");
}

const palabras = [
  "Yate",
  " ",
  "tigre",
  "elefante",
  "nube",
  "elección",
  "montaña",
  "oso",
  "sol",
  " ",
  "agua",
  "quijote",
  "uva",
  "ícara",
  ",",
  " ",
  "mango",
  "esfera",
  ",",
  " ",
  "dado",
  "iguana",
  "sol",
  "cisne",
  "ulises",
  "luna",
  "pato",
  "oso",
  " ",
  "magnolia",
  "agua",
  "granizo",
  "nieve",
  "oso",
  "llama",
  "icono",
  "agua",
  "sapo",
  " ",
  "quijote",
  "uva",
  "eucalipto",
  " ",
  "diamante",
  "enano",
  "viento",
  "osa",
  "río",
  "agua",
  "nilo",
  " ",
  "isla",
  "nada",
  "serpiente",
  "espacio",
  "cuerda",
  "tarde",
  "oso",
  "sándalo",
  " ",
  "cisne",
  "oso",
  "nube",
  " ",
  "sol",
  "urna",
  "sierra",
  " ",
  "llama",
  "enigma",
  "nube",
  "granizo",
  "urna",
  "alondra",
  "sol",
  ".",
];
// console.log(descubrirSecreto(palabras));
// console.log(descubrirSecretoFuncional(palabras));
>>>>>>> development

/* EJERCICIO 25.- 
Usuarios de una biblioteca.
Necesitamos tener en una lista aquellos usuarios de la biblioteca que devuelven sus préstamos a tiempo
porque queremos premiarlos.
Crea un método que muestre la lista usando el punto medio (·) como viñeta y el salto de línea \n.
Aquí tienes la lista de todos los usuarios.
*/
<<<<<<< HEAD

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

function listarUsuariosSinSancion(socios) {
  const usuariosPremiados = socios
    .filter(socio => !socio.sancionado) //método .filter() para iterar sobre cada elemento del array socios
    .map(socio => `· ${socio.nombre} ${socio.apellido}`); // Crear la lista con las viñetas despues de filtrar a los usuarios

  return usuariosPremiados.join('\n'); // Uniremos con los saltos de linea en una sola cadena y su salto de linea con el /n
}

console.log(listarUsuariosSinSancion(socios));

=======
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
  { nombre: "Sandra", apellido: "Jiménez", sancionado: true },
];

// versión imperativa
// recibe un array inicial por parámetro
// todos los socios
function filtrarUsuariosPuntuales(usuarios) {
  // creamos un array auxiliar para devolver los resultados filtrados
  const usuariosPuntuales = new Array();

  // recorremos el array inicial
  // recorremos todos los socios
  for (const usuario of usuarios) {
    // verificamos la condición en cada elemento
    if (!usuario.sancionado) {
      // si elemento cumple la codición,
      // lo agregamos al array auxiliar
      // si el socio no está sancionado, se agrega
      usuariosPuntuales.push(usuario);
    }
  }

  // devolvemos el array auxiliar
  // solo tenemos usuarios no sancionados
  return usuariosPuntuales;
}

function mostrarUsuarios(usuarios) {
  let result = "";
  for (const usuario of usuarios) {
    result += `· ${usuario.nombre} ${usuario.apellido} \n`;
  }
  return result;
}

function mostrarUsuariosPuntuales(usuarios) {
  window.alert(
    `LOS USUARIOS PUNTUALES SON: \n` +
      mostrarUsuarios(filtrarUsuariosPuntuales(usuarios))
  );
}

// versión funcional
function filtrarUsuariosPuntualesFuncional(usuarios) {
  return usuarios.filter((usuario) => !usuario.sancionado);
}

function mostrarUsuariosFuncional(usuarios) {
  return usuarios.reduce(
    (string, usuario) =>
      (string += `· ${usuario.nombre} ${usuario.apellido} \n`),
    ""
  );
}

function mostrarUsuariosPuntualesFuncional(usuarios) {
  window.alert(
    `LOS USUARIOS PUNTUALES SON: \n` +
      mostrarUsuariosFuncional(filtrarUsuariosPuntualesFuncional(usuarios))
  );
}

// invocación de las funciones
mostrarUsuariosPuntuales(socios);
mostrarUsuariosPuntualesFuncional(socios);
>>>>>>> development
