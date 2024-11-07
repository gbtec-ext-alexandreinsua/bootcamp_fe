
/*
  Ejercicio 4: Verificación de Número Primo

  Escribe un método que reciba un número entero positivo mayor que 1 y determine si es un número primo.
  Un número es primo si solo es divisible por 1 y por sí mismo.
  El método debe validar el tipo de dato y mostrar el resultado en la consola.
*/

function promptprimo() {
  let n1 = prompt("Introduzca un número: ");
  while (isNaN(n1) || n1 < 0) {
    n1 = prompt("Introduzca un número válido: ");
  }
  primo(n1);
}

function primo(n) {
  let check = 0;
  for (i = n; i > 0; i--) {
    if (n % i == 0) {
      check++;
    }
  }
  if (check == 2) {
    alert("El número " + n + " es primo.");
  } else {
    alert("El número " + n + " NO es primo.");
  }
}

/*
  Ejercicio 5: Calculadora Básica

  Escribe un método que reciba tres parámetros: dos números y una operación en formato de texto (suma, resta, multiplicación, división).
  El método debe realizar la operación indicada y mostrar el resultado en la consola.
  Debe validar que los dos primeros parámetros sean números y que la operación sea válida.
  Si la operación es una división, debe verificar que el segundo número no sea cero.
*/

function promptcalculadora() {
  let operacion = prompt("Introduzca la operación que desea realizar (+ - * / %): ");
  while (operacion != "+" && operacion != "-" && operacion != "*" && operacion != "/" && operacion != "%") {
    operacion = prompt("Introduzca una operación válida (+ - * / %): ");
  }
  let num1 = parseFloat(prompt("Introduzca el primer número: "));
  let num2 = parseFloat(prompt("Introduzca el segundo número: "));
  while (isNaN(num1) || isNaN(num2)) {
    alert("Introduzca 2 números válidos.");
    num1 = parseFloat(prompt("Introduzca el primer número: "));
    num2 = parseFloat(prompt("Introduzca el segundo número: "));
  }
  calculadora(operacion, num1, num2);
}

function calculadora(op, n1, n2) {
  switch (op) {
    case "+":
      alert(n1 + " + " + n2 + " = " + (n1 + n2));
      break;
    case "-":
      alert(n1 + " - " + n2 + " = " + (n1 - n2));
      break;
    case "*":
      alert(n1 + " * " + n2 + " = " + (n1 * n2));
      break;
    case "/":
      alert(n1 + " / " + n2 + " = " + (n1 / n2));
      break;
    case "%":
      alert(n1 + " % " + n2 + " = " + (n1 % n2));
      break;
  }
}


/* Ejercicio 6: ARRAYS

Dado el siguiente myArray
const myArray = [42, "hola", 3, true, 76, 19, false, "JavaScript", 88, 15,null, 34, 53, 91, 12, "mundo", 27, 64, 82, 39 ];
1. Halla la suma de los numeros que contiene e múestrala por consola.
2. Si el elemento es un string, muéstralo por pantalla.
3. Si el elemento no es un número o un string, ignóralo */

function arrayCall() {
  const myArray = [42, "hola", 3, true, 76, 19, false, "JavaScript", 88, 15, null, 34, 53, 91, 12, "mundo", 27, 64, 82, 39];
  const myArrayStrings = ['STRINGS DEL ARRAY:',''];
  let incremento = 0;
  for (let i = 0; i < myArray.length; i++) {
    if (typeof(myArray[i]) === 'number') {
      incremento += myArray[i];
    }
    if (typeof(myArray[i]) === 'string') {
      myArrayStrings.push(myArray[i]);
    }
  }
  alert(myArrayStrings.join('\n'));
  alert('La suma de todos los números del myArray es: ' + incremento);
}

