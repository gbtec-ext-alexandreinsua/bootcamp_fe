// Ejecuta los ejemplos para mostrar resultados en la consola
console.log("=== Ejemplo de JSON.parse() con error de sintaxis ===");
try {
  const data = JSON.parse('{"nombre": "Juan", "edad": 30, }');
  console.log(data);
} catch (error) {
  console.log("Error en JSON.parse():", error.message);
}

console.log("\n=== Ejemplo de SyntaxError ===");
try {
  /*La función eval() evalúa un código JavaScript representado como una cadena de caracteres (string),
  sin referenciar a un objeto en particular.*/
  eval("console.log('Hola Mundo'");
} catch (error) {
  console.log("SyntaxError atrapado:", error.message);
}

console.log("\n=== Ejemplo de ReferenceError ===");
try {
  console.log(variableNoDefinida);
} catch (error) {
  console.log("ReferenceError atrapado:", error.message);
}

let usuario = {}; // object
try {
  usuario = JSON.parse('{"nombre": "Juan", "edad": 30, }'); // Coma extra al final
} catch (error) {
  console.error("Error en JSON.parse():", error);
  console.error("-->", error.message);
}

console.log({ usuario });

console.log("");

function esEdadValida(edad) {
  if (edad <= 0) {
    throw new Error("La edad no puede ser negativa");
  }
  return true;
}

function verificarDatosUsuario(datos) {
  try {
    if (esEdadValida(datos.edad)) {
      // continúa con el programa
      window.alert("la edad es válida");
    }
  } catch (error) {
    console.log("Excepción personalizada atrapada:", error.message);
  }
  console.log("fin de programa");
}
