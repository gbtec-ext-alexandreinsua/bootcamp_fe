/*
  Ejercicio 4: Verificación de Número Primo
  Escribe un método que reciba un número entero positivo mayor que 1 y determine si es un número primo.
  Un número es primo si solo es divisible por 1 y por sí mismo.
  El método debe validar el tipo de dato y mostrar el resultado en la consola.
*/
function esNumeroPrimo(numero) {
  if (numero <= 1) {
      console.log("Por favor, ingresa un número mayor que 1.");
      return false;
    }

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      console.log(`${numero} no es un número primo.`);
      return;
    }
  }
  console.log(`${numero} es un número primo.`);
  return;
}

esNumeroPrimo(9); 
esNumeroPrimo(18); 

/*
  Ejercicio 5: Calculadora Básica
  Escribe un método que reciba tres parámetros: dos números y una operación en formato de texto (suma, resta, multiplicación, división).
  El método debe realizar la operación indicada y mostrar el resultado en la consola.
  Debe validar que los dos primeros parámetros sean números y que la operación sea válida.
  Si la operación es una división, debe verificar que el segundo número no sea cero.
*/


function calculadora(num1, num2, operacion) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      console.log("Error: Los primeros dos parámetros deben ser números.");
      return;
  }

  let resultado;

  switch (operacion) {
    case 'suma':
      resultado = num1 + num2;
      break;
    case 'resta':
      resultado = num1 - num2;
      break;
    case 'multiplicacion':
      resultado = num1 * num2;
      break;
    case 'division':
      if (num2 === 0) {
        console.log("No se puede dividir por cero.");
        
      }else
      resultado = num1 / num2;
      break;
    default:
      console.log("Error: Operación no válida. Usa 'suma', 'resta', 'multiplicación' o 'división'.");
  }
     
  }
  if(resutlado || resultado === 0){
      console.log(`El resultado de la ${operacion} es: ${resultado}`);
  }else{
      console.log("Error: la operacion")
  }
calculadora(31, 52, 'suma'); 
calculadora(31, 52, 'suma');
calculadora(105, 14, 'resta');
calculadora(6, 5, 'multiplicacion');
calculadora(30, 5, 'division');     
calculadora(10, 0, 'division');     
