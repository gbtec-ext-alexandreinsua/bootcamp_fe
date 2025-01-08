// import { esPrimo } from "../../../js/math-utils.js";

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

function filtrarPares(numeros){
  const pares = new Array();
  for(const numero of numeros){
    if(numero % 2 === 0){
      pares.push(numero);
    }
  }
  return pares;
}
const numbers = [
  50,93,62,2,66,17,94,46,32,83,52,10,86,72,11,68,9,37,26,20
];

// console.log(filtrarPares(numbers));

/* EJERCICIO 23.-
Dado el siguiente array =
const numbers = [50,93,62,2,66,17,94,46,32,83,52,10,86,72,11,68,9,37,26,20]
crea una función que devuelva otro con el doble de cada número primo de la primera
Se puede usar un bucle for o un bucle for-of.
*/

const arrayNumbers = [50,93,62,2,66,17,94,46,32,83,52,10,86,72,11,68,9,37,26,20];

function esPrimo(num){
  if(num <= 1)
    return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0)
      return false;
    }
    return true;
}
function doblePrimos(arrayNumbers){
  let result = [];//Declaramos un array vacío o cal gardará o valor result desta función
  for (let i = 0; i < arrayNumbers.length; i++) {//recorremos o array
    if(esPrimo(arrayNumbers[i])){//Chamamos a funcion esPRimo() Si os numeros son primos
      result.push(arrayNumbers[i] * 2);//Agrego o resultado de multiplicar por 2 os números primos que hay no arrayNumbers
    }
    }
    return result;//Devolve o resultado ao array vacío que declaramos e inicializamos arriba
}
// let result = doblePrimos(arrayNumbers);
// console.log(result);

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
  "Yate"," ","tigre","elefante","nube","elección","montaña","oso","sol"," ","agua","quijote","uva","ícara",
  ","," ","mango","esfera",","," ","dado","iguana","sol","cisne","ulises","luna","pato","oso"," ","magnolia",
  "agua","granizo","nieve","oso","llama","icono","agua","sapo"," ","quijote","uva","eucalipto"," ","diamante","enano",
  "viento","osa","río","agua","nilo"," ","isla","nada","serpiente","espacio","cuerda","tarde","oso","sándalo"," ","cisne",
  "oso","nube"," ","sol","urna","sierra"," ","llama","enigma","nube","granizo","urna","alondra","sol","."
];

  function muestreaIniciales(palabras){

    let iniciales = "";
    for (let palabra of palabras){
      if(palabra.trim() !== ''){//ignoramos os espazos en blanco
        iniciales += palabra[0];//Palabra que non sexa vacía, agregarase a primeira letra da palabra palabra[0] a variable iniciales
      }
    }
    return iniciales;
}

// window.alert(muestreaIniciales(palabras));


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
