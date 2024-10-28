// DECLARACION DE VARIABLES 

// palabra reservada  y nombre de la variable

// 1ª forma de declaración de variables. Con var. NO USAR.
var numero1; 

// 2ª forma de declaración de variables. Con let. 
let numero2;

// 3ª forma de declaración de variables. Con const. 
// constantes
// necesita inicialización
const numero3 = 5;  

// ASIGNAR VALORES
// numero1 = 234;
numero2 = 355;

// REASIGNAR VALORES
// numero1 = 34;
numero2 = 333;

// REDECLARAR VARIABLE
// NO HACER NUNCA
// var numero1; 

// TIPOS PRINCIPALES EN JAVASCRPT
// undefined 
// null
// number
// string
// BigInt
// Symbol 
// Object 
// Function 


// typeof -> muestra el tipo de una variable
let variableDePrueba; 
console.log(typeof variableDePrueba); //undefined
variableDePrueba = 3;
console.log(typeof variableDePrueba); // number
variableDePrueba = "alexandre";
console.log(typeof variableDePrueba); // string


// OPERADORES
let variable = 2; // = operador de asignación
console.log("Alexandre" + " " + "Insua") // Alexandre Insua //operador de concatenación

// operadores aritméticos
console.log(1 + 1); // suma 2 
console.log(1 - 1); // resta 0 
console.log(2 * 2); //  multiplicación 4
console.log(10 / 2); // division 5
console.log(10 % 2); // 0 resto de una división

// operador de asignación compuestos
let numeroDescansos = 3
console.log("descansos ", numeroDescansos);

console.log(numeroDescansos += 1 ); // 4
console.log(numeroDescansos -= 1); // 3
console.log(numeroDescansos *= 2); // 6
console.log(numeroDescansos /= 2); // 3
console.log(numeroDescansos %= 2); // 1

// operadores de incremento
console.log("incremento",);
console.log("descansos", numeroDescansos++);
console.log("descansos", numeroDescansos);
console.log("descansos", numeroDescansos);
console.log("descansos", numeroDescansos--);
console.log("descansos", numeroDescansos);

// operadores de comparación
console.log(""); // distinto
console.log(2 > 1) // true > mayor que
console.log(1 < 2) // < menor que 
console.log(5 >= 5) // >= mayor o igual 
console.log(5 <= 5) // true <= menor o igual
console.log(2 == "2") // true == comparación laxa compara valor
console.log(2 == "3") // false == comparación laxa
console.log(2 === "2") // false === comparación estricta copara valor y tipo

// operadores lógicos
console.log(!true); // false negación aplica el valor opuesto
console.log(true && true); // true y lógico AND
console.log(false && true); // false y lógico AND
console.log(true && false); // false y lógico AND
console.log(false && false);  // false y lógico AND
console.log(true || true);  // true o lógico OR
console.log(false || true);  // true o lógico OR
console.log(true || false);  // true o lógico OR
console.log(false || false);  // false o lógico OR

