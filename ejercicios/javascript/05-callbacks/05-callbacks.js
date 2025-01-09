/* EJERCICIO 26.- 
Tienes una lista de nombres en un array que están en diferentes formatos (algunos están en mayúsculas, otros en minúsculas, otros con espacios adicionales). Queremos normalizar estos nombres aplicándoles diferentes formatos usando una función de procesamiento con callback.

1. Crea una función `procesarNombres` que reciba dos parámetros:
   - `nombres`: un array de strings que contiene nombres desordenados.
   - `callback`: una función que manipule cada nombre en el array.

2. Usa `procesarNombres` con dos callbacks diferentes para:
   - `callback1`: Quitar los espacios adicionales al inicio y final de cada nombre, y convertirlos en minúsculas. Usa los métodos `trim()` y `toLowerCase()`.
   - `callback2`: Convertir cada nombre en "Formato Título", es decir, con la primera letra en mayúscula y el resto en minúsculas.

3. Imprime en la consola los resultados de cada callback.
*/

// Función principal
function procesarNombres(nombres, callback) {
  const resultado = [];
  for (let nombre of nombres) {
    resultado.push(callback(nombre));
  }
  return resultado;
}

// Array de nombres desordenados
const nombres = [
  "  ana LÓPEZ ",
  "JOSE garcia ",
  "MARIA  PEREZ",
  " carlos MEJIA ",
];

// Callback 1: Quitar espacios y convertir a minúsculas
function formatearMinusculas(nombre) {
  // Completa esta función usando trim() y toLowerCase()
  return nombre.trim().toLowerCase();
}

// Callback 2: Formato Título
// la aproximación es generar un array a partir del los nombres y manupularla
// crea un array con el nombre y el apellido
function formatoTitulo(nombre) {
  // charAt(indice) -> función de string que devuelve el caracter que corresponde a ese índice
  // replace(patrón, reemplazo) -> función de string que devuelve una nueva cadena con patrón reemplazado
  // split(delimitador) -> función de string que crea un array en base al delimitador especificado, en este caso un espacio -> split(' ')
  // substring(inicio, fin) -> funcion de string que devuelve una porción del string original
  // trim() -> función de string que elimina los espacios en blanco en ambos extremos del string
  // toLowerCase() -> función de string que toma una cadena y convierten todos sus caracteres a minúscula
  // toUpperCase() -> función de string que toma una cadena y convierten todos sus caracteres a mayúscula

  // join(delimitador) -> función de Array que une los elementos de un array en un cadena separados por un delimitador
  // // slice(inicio, fin) -> funcion de Array que devuelve una copia del array desde el inicio hasta el fin (fin excluído)

  // para cada nombre 1) re recorta los espacions en blanco, 2) lo paasa a minúsculas,
  // 3) reemplaza el doble espacion en blanco y 4) crea un array dividiendo el estring por el espacio en blanco
  // '  ana LÓPEZ ' pasa a ser ["ana", "lópez"]
  const nombreApellidoArray = nombre
    .trim()
    .toLowerCase()
    .replace("  ", " ")
    .split(" ");

  // recorre en array, p.ej ["ana", "lópez"]
  for (let i = 0; i < nombreApellidoArray.length; i++) {
    // para cada elemento del array
    // 1) toma la primera letra y la transforma a mayúsculas - para "ana" -> A
    // 2) toma el resto de la cadena - para "ana" -> na
    // 3) concatena el resultado y lo guarda en el array A+na -> Ana
    // 4) después de la primera iteración el array es ["Ana", "lópez"]
    // 5) despues de la segunda iteración el array es ["Ana", "López"]
    nombreApellidoArray[i] =
      nombreApellidoArray[i].charAt(0).toUpperCase() +
      nombreApellidoArray[i].substring(1);
  }

  // Une los elementos de un array y devuelve una cadena
  // ["Ana", "López"] pasa a ser "Ana López"
  return nombreApellidoArray.join(" ");
}

// crea un array con todas las letras del nombre
function formatoTitulo2(nombre) {
  // Aquí cambia lo que se obtiene en el primer paso
  // como el delimitador de split es una cadena vacía
  // se obtiene un array formado por cada letra
  // '  ana LÓPEZ '  pasa a ser ['a', 'n', 'a', ' ', 'l', 'ó', 'p', 'e', 'z']
  const letrasArray = nombre.trim().toLowerCase().split("");

  // recorre el array
  for (let i = 0; i < letrasArray.length; i++) {
    // si es la primera letra la pasa a mayúsculas
    if (i === 0) {
      letrasArray[i] = letrasArray[i].toUpperCase();
      // si es un espacion en blanco y está seguido de algo que no sea un espacio en blanco
      // también la pasa a mayúsculas
    } else if (letrasArray[i] === " " && letrasArray[i + 1] != " ") {
      letrasArray[i + 1] = letrasArray[i + 1].toUpperCase();
    }
  }
  // Al salir del bucle en array es:  ['A', 'n', 'a', ' ', 'L', 'ó', 'p', 'e', 'z']
  // se unen los elementos del array y se devuelve
  return letrasArray.join("");
}

// recorre el nombre como si fuera un array y manipula carácter a carácter
function formatoTitulo3(nombre) {
  // procesa el nombre
  // '  ana LÓPEZ ' pasa a ser ["ana", "lópez"]
  nombre = nombre.trim().toLowerCase().replace("  ", " ");
  // establece una variable auxiliar
  let resultado = "";

  // recorre la string com si fuera un string usando la función charAt()
  for (let i = 0; i < nombre.length; i++) {
    // crea otra variable auxiliar  para almacenar el carácter según el índice
    let char = nombre.charAt(i);
    // si el caracter el el primero o el anterior es un espacio en blanco, lo cambia a mayúscula
    // y lo concatena al resulto
    // en caso contrario, simplemente lo concatena
    if (i === 0 || nombre.indexOf(" ", i - 1) === i - 1) {
      resultado += char.toUpperCase();
    } else {
      resultado += char;
    }
  }
  return resultado;
}

// recorre un array con un bucle for of
function formatoTitulo4(nombre) {
  // crea un array con nombre y apellido
  const nombreApellidoArray = nombre
    .trim()
    .toLowerCase()
    .replace("  ", " ")
    .split(" ");
  // como el elemento del bucle for no modifica el array
  // necesitamos un nuevo array para almacenar los resultados
  const nombreProcesadoArray = [];
  // recorremos array
  for (let element of nombreApellidoArray) {
    // para cada iteración le añadimos en nombre / apellido procesado al array
    nombreProcesadoArray.push(
      element.charAt(0).toUpperCase() + element.substring(1)
    );
  }
  return nombreProcesadoArray.join(" ");
}

// alternativa con oneliner
function formatoTitulo5(nombre) {
  // proceso la cadena  // '  ana LÓPEZ ' pasa a ser ["ana", "lópez"]
  nombre = nombre.trim().toLowerCase();
  // la estrategia es concatenar los fragmentos que me interesan
  return (
    // capitalizo la primera letra, índice 0
    nombre.charAt(0).toUpperCase() +
    // tomo el fragmento desde la posición 2 hasta el primer espacio vacío
    nombre.slice(1, nombre.indexOf(" ")) +
    // añado el espacio
    " " +
    // captura de el siguiente caracter a la última aparicion de espacion vacío
    nombre.charAt(nombre.lastIndexOf(" ") + 1).toUpperCase() +
    // tomo el fragmento hasta el final
    nombre.slice(nombre.lastIndexOf(" ") + 2)
  );
}

// Ejemplo de uso
console.log("Array inicial:", nombres);
const resultadoMinusculas = procesarNombres(nombres, formatearMinusculas);
console.log("Nombres en minúsculas:", resultadoMinusculas);

const resultadoTitulo = procesarNombres(nombres, formatoTitulo5);
console.log("Nombres en Formato Título:", resultadoTitulo);
