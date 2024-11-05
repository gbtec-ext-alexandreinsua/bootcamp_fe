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
}
 
// Array de nombres desordenados
const nombres = ["  ana LÓPEZ ", "JOSE garcia ", "MARIA  PEREZ", " carlos MEJIA "];
 
// Callback 1: Quitar espacios y convertir a minúsculas
function formatearMinusculas(nombre) {
    // Completa esta función usando trim() y toLowerCase()
    return nombre.trim().toLowerCase().replace("  ", " ");
}
 
// Callback 2: Formato Título
function formatoTitulo(nombre) {
    // Completa esta función para que cada nombre esté en "Formato Título"
    // usar charAt() y indexOf() y toUpperCase()
    let newArray = nombre.trim().toLowerCase().replace("  ", " ").split(" ");
    let finalArray = []
    for(let element of newArray){
        element = element.charAt(0).toUpperCase() + element.substring(1);
        finalArray.push(element);
    }
    return finalArray.join(" ");
    
    
    //Slice corta un string desde el primer indice que se le pasa hasta el segundo indice que se le pasa.
    //return nombre.charAt().toUpperCase() + nombre.slice(1, nombre.indexOf(" ")) + " " + nombre.charAt(nombre.indexOf(" ")+1).toUpperCase() + nombre.slice(nombre.indexOf(" ")+2);
}
 
// Ejemplo de uso
const resultadoMinusculas = procesarNombres(nombres, formatearMinusculas);
console.log("Nombres en minúsculas:", resultadoMinusculas);
 
const resultadoTitulo = procesarNombres(nombres, formatoTitulo);
console.log("Nombres en Formato Título:", resultadoTitulo);
