<<<<<<< HEAD
=======
import { esPrimo } from "../../../js/math-utils.js";
>>>>>>> development

/*
EJERCICIO 21.- 
Dado el siguiente array
const myArray = [42, "hola", 3, true, 76, 19, false, "JavaScript", 88, 15,null, 34, 53, 91, 12, "mundo", 27, 64, 82, 39 ];
 1. Halla la suma de los numeros que contiene y múestrala por consola.
 2. Si el elemento es un string, muéstralo por pantalla.
 3. Si el elemento no es un número o un string, ignóralo */

// const myArray = [42, "hola", 3, true, 76, 19, false, "JavaScript", 88, 15,null, 34, 53, 91, 12, "mundo", 27, 64, 82, 39 ];
// function procesarArray() {
//   let suma = 0;
//   for (let i = 0; i < myArray.length; i++) {
//     if (typeof myArray[i] === "string") {
//       console.log(myArray[i]);
//     }

//     if (typeof myArray[i] === "number") {
//       suma += myArray[i];
//     }
//   }
//   return suma;
// }

// function procesarArrayForOf() {
//   let suma = 0;
//   for (const element of myArray) {
//     if (typeof element === "string") {
//       console.log(element);
//     }

// function array(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "number") {
//       sum += array[i]; // Suma los números
//     } else if (typeof array[i] === "string") {
//       console.log(array[i]); // Muestra los strings
//     }
    // Ignora los elementos que no son ni número ni string
  // }

//   console.log("La suma de los números es:", sum);
// }
// array(myArray);

// function array2(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "number") {
//       sum += array[i]; // Suma los números
//     } else if (typeof array[i] === "string") {
//       console.log(array[i]); // Muestra los strings
//     }
    // Ignora los elementos que no son ni número ni string
  // }
//   return sum;
// }

// function indiferente() {
//   const arrayNum = [1, 2, 3, 4, 5, "lalala"];
//   console.log(array2(arrayNum));
// }
// indiferente();
//     if (typeof element === "number") {
//       suma += element;
//     }
//   }
//   return suma;
// }

// console.log("La suma del array es ", suma);

/* EJERCICIO 22.- 
Dado el siguiente array =
const numbers = [50,93,62,2,66,17,94,46,32,83,52,10,86,72,11,68,9,37,26,20]
crea una función que devuelva otro con los números pares. Se puede usar un 
bucle for o un bucle for-of.
*/

<<<<<<< HEAD

// function soloPares(numbers) {

//   const pares = new Array();
//   for (const e of numbers) {
//     if (e % 2 === 0) {
//       pares.push(e);
//     }
//   }
//   return pares;
// }
// // const numbers = [50,93,62,2,66,17,94,46,32,83,52,10,86,72,11,68,9,37,26,20];

// function filtrarParesFuncional(numbers) {
//   return numbers.filter(n => !(n % 2));
// }

// console.log(soloPares(numbers));
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
>>>>>>> development
// console.log(filtrarParesFuncional(numbers));

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



// function esPrimoOptimizada(numero) {
//   let esPrimo = true;
//   if (numero != 2 && numero % 2 === 0) {
//     esPrimo = false;
//   } else {
//     for (let i = 3; i < numero / 2; i += 2) {
//       if (numero % i === 0) {
//         esPrimo = false;
//         break;
//       }
//     }
//   }
//   return esPrimo;
// }
// function doblePrimo(array) {
//   const dobleP = new Array();
//   for (const e of array) {
//     if (esPrimoOptimizada(e)) {
//       dobleP.push(e * 2);
//     }
//   }
//   return dobleP;
// }
// const numbers = [50,93,62,2,66,17,94,46,32,83,52,10,86,72,11,68,9,37,26,20];

// const dobleP = doblePrimo(numbers);
// console.log(dobleP);

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
const palabras = ["Yate"," ","tigre","elefante","nube","elección","montaña","oso","sol"," ","agua","quijote","uva","ícara",
  ","," ","mango","esfera",","," ","dado","iguana","sol","cisne","ulises","luna","pato","oso"," ","magnolia",
  "agua","granizo","nieve","oso","llama","icono","agua","sapo"," ","quijote","uva","eucalipto"," ","diamante","enano",
  "viento","osa","río","agua","nilo"," ","isla","nada","serpiente","espacio","cuerda","tarde","oso","sándalo"," ","cisne",
  "oso","nube"," ","sol","urna","sierra"," ","llama","enigma","nube","granizo","urna","alondra","sol","."];

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

  const result = descubrirSecreto(palabras);
  const result2 = descubrirSecretoFuncional(palabras);

  console.log(result);
  console.log(result2);


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

function mostrarUsuariosPremiados(socios) {
  const usuariosPremiados = socios
    .filter(socio => !socio.sancionado) 
    .map(socio => `· ${socio.nombre} ${socio.apellido} \n`); 
  
  return usuariosPremiados;
}

const listaPremiados = mostrarUsuariosPremiados(socios);
console.log(listaPremiados);
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

function filtrarUsuariosPuntuales(usuarios) {
  const usuariosPuntuales = new Array();

  for (const usuario of usuarios) {
    if (!usuario.sancionado) {
      usuariosPuntuales.push(usuario);
    }
  }
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

// mostrarUsuariosPuntuales(socios);
// mostrarUsuariosPuntualesFuncional(socios)
>>>>>>> development
