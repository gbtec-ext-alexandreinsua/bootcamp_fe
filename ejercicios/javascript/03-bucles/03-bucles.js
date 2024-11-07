/*
  Ejercicio 4: Verificación de Número Primo
  Escribe un método que reciba un número entero positivo mayor que 1 y determine si es un número primo.
  Un número es primo si solo es divisible por 1 y por sí mismo.
  El método debe validar el tipo de dato y mostrar el resultado en la consola.
*/


function esNumeroPrimo(num) {
// Validación del tipo de dato y valor

if (typeof num !== 'number' || !Number.isInteger(num) || num <= 1) {
console.log("Por favor, ingresa un número entero positivo mayor que 1.");
return;
}

// Verificar si el número es primo
// Un numero no es primo cuando dividido por los numeros a partir del 2 hasta el numero dado, su resto es 0

for (let i = 2; i < num; i++) {
if (num % i === 0) {
console.log(`${num} no es un número primo.`);
return;
}
}
console.log(`${num} es un número primo.`);
}


esNumeroPrimo(6);
esNumeroPrimo(7); 
esNumeroPrimo(9); 



/*
  Ejercicio 5: Calculadora Básica
  Escribe un método que reciba tres parámetros: dos números y una operación en formato de texto (suma, resta, multiplicación, división).
  El método debe realizar la operación indicada y mostrar el resultado en la consola.
  Debe validar que los dos primeros parámetros sean números y que la operación sea válida.
  Si la operación es una división, debe verificar que el segundo número no sea cero.
*/

function calculadoraBásica(num1, num2, operacionesBásicas) {
  
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {//Aqui compruebo que los parámetros introducidos son válidos  números enteros
      console.error('Los  dos parámetros deben ser números.'); //si uno de los 2 parámetros introducidos son inválidos, salta este mensaje.
      return;
  }

  
  switch (operacionesBásicas) {  //con el switch interpreto los diferentes casos de operaciones existentes
      case 'suma':
          console.log(`Resultado de la suma: ${num1 + num2}`);
          break;
      case 'resta':
          console.log(`Resultado de la resta: ${num1 - num2}`);
          break;
      case 'multiplicación':
          console.log(`Resultado de la multiplicación: ${num1 * num2}`);
          break;
      case 'división':
         
          if (num2 === 0) { //Si la división es entre 0, esto nos indica que es imposible dicha operación.
              console.error('Error: División entre cero no es posible.');
          } else {
              console.log(`Resultado de la división: ${num1 / num2}`);
          }
          break;
      default:
          console.error('Operación no válida. Usa suma, resta, multiplicación o división.'); //Si le indicamos cualquier parámetro que no sea suma, resta,multiplicación o división
  }
}

calculadoraBásica('25', 10, 'suma'); //debe mostrar que los valores no son válidos, puesto que le estoy poniendo un String
calculadoraBásica(25, 10, 'suma');         
calculadoraBásica(105, 45, 'resta');        
calculadoraBásica(50, 5, 'multiplicación'); 
calculadoraBásica(250, 0, 'división');     
calculadoraBásica(100, 10, 'división');
calculadoraBásica(100, 10, 'raíz cuadrada');
