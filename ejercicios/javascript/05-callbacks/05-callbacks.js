/*
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

    /* Otra manera
    for (let i = 0; i < nombres.lenght; i++) {
        resultado.push(callback(nombres[i]));
    }
    */
}
 
// Array de nombres desordenados
const nombres = ["  ana LÓPEZ ", "JOSE garcia ", "MARIA  PEREZ", " carlos MEJIA "];
 
// Callback 1: Quitar espacios y convertir a minúsculas
    // Completa esta función usando trim() y toLowerCase()
function formatearMinusculas(nombre) {
    //trim() -> elimina los espacios del comienzo y el final de la cadena de caracteres
    //toLowerCase() ->  pasa a minúsculas toda la cadena de caracteres
    //replace() ->  sustituye una cadena de caracteres por otra
    return nombre.trim().toLowerCase().replace("  "," ");
}
 
// Callback 2: Formato Título
    // Completa esta función para que cada nombre esté en "Formato Título"
    // usar charAt() y indexOf() y toUpperCase()
function formatoTitulo(nombre) {
    //split() -> string que crea array en base al delimitador especificado, en este caso un espacio -> split(" ")
    const nombreArray = nombre.trim().toLowerCase().replace("  "," ").split(" ");

    for (let i = 0; i < nombreArray.lenght; i++) {
        nombreArray[i] = nombreArray[i].chartAt(0).toUpperCase() + nombreArray[i].substring(1);
    }
    return nombreArray.join(" ");
}
 
// Ejemplo de uso
const resultadoMinusculas = procesarNombres(nombres, formatearMinusculas);
console.log("Nombres en minúsculas:", resultadoMinusculas);
 
const resultadoTitulo = procesarNombres(nombres, formatoTitulo);
console.log("Nombres en Formato Título:", resultadoTitulo);