/*
  Ejercicio 4: Verificación de Número Primo
  Escribe un método que reciba un número entero positivo mayor que 1 y determine si es un número primo.
  Un número es primo si solo es divisible por 1 y por sí mismo.
  El método debe validar el tipo de dato y mostrar el resultado en la consola.
*/
function esNumValido(num) {  // Validación del tipo de dato y valor
  if (typeof num !== 'number' || !Number.isInteger(num) || num <= 1) {
    return false;
  } else {
    return true;
  }
}
function esNumeroPrimo(num) {
  if (esNumValido(num)) {
  // Verificar si el número es primo
  // Un numero no es primo cuando dividido por los numeros a partir del 2 
  // hasta el numero dado, su resto es 0
  
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          console.log(`${num} no es un número primo.`);
          return;
        }
      }
      console.log(`${num} es un número primo.`);
    } else {
      console.log("Por favor, ingresa un número entero positivo mayor que 1.");
    }
}

esNumeroPrimo(29);
esNumeroPrimo(10);  
esNumeroPrimo(1);   
esNumeroPrimo("23");

/*
  Ejercicio 5: Calculadora Básica
  Escribe un método que reciba tres parámetros: dos números y una operación en formato de texto (suma, resta, multiplicación, división).
  El método debe realizar la operación indicada y mostrar el resultado en la consola.
  Debe validar que los dos primeros parámetros sean números y que la operación sea válida.
  Si la operación es una división, debe verificar que el segundo número no sea cero.
*/

function calculadoraBasica(num1, num2, operacion) {
  // Validación de tipo de datos para num1 y num2
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.log("Error: Ambos parámetros deben ser números.");
    return;
  }

  // Validación de la operación
  if (!["suma", "resta", "multiplicacion", "division"].includes(operacion)) { 
    //creamos un array de operaciones, el metodo .includes verifica si el parametro operacion esta incluido en el array, es booleano devolvera true o false
    console.log("Error: La operación debe ser suma, resta, multiplicacion o division.");
    return;
  }

  // Realizar la operación según el tipo especificado
  let resultado;
  switch (operacion) {
    case "suma":
      resultado = num1 + num2;
      break;
    case "resta":
      resultado = num1 - num2;
      break;
    case "multiplicacion":
      resultado = num1 * num2;
      break;
    case "division":
      if (num2 === 0) {
        console.log("Error: No se puede dividir entre cero.");
      //  return;
      }else{
        resultado = num1 / num2;
      }
      break;
      
  }

  // Mostrar el resultado en la consola
  if(resultado || resultado === 0) {
    console.log(`El resultado de la ${operacion} es: ${resultado}`);
  }else {
    console.log(`No se ha podido hallar resultado`);
  }
    
}

// Ejemplos de uso
calculadoraBasica(10, 5, "suma");           
calculadoraBasica(10, 5, "resta");          
calculadoraBasica(10, 5, "multiplicacion"); 
calculadoraBasica(10, 5, "division");       
calculadoraBasica(10, 0, "division");       
calculadoraBasica(10, "5", "suma");         
calculadoraBasica(10, 5, "potencia");       