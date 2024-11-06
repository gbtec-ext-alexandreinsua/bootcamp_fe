// BUCLES E ITERACIONES 
/* Bucle for
Ejecuta un bloque de código un número específico de veces.
El bucle for se utiliza cuando conocemos de antemano 
cuántas veces queremos que se ejecute el bloque de código.

La inicializción define el valor de la variable de control.
La condición que se evalúa si el bucle se va a seguir ejecutándose.
Actualizacion de la variable de control

for(inicialización; condición; actualización){
    // sentencias que se ejecutan mientras se cumpla la condición
}
*/

// Ejemplo de bucle for
// i variable de control que se inicializa a cero
// i < 5 condición a ser true simpre que i sea menor que 5
// i++ actualizacion: con cada iteración i se incrementa en 1
for (let i = 0; i < 5; i++) {
    console.log("Valor de i en el bucle for: " + i);
}

/* Bucle while
Repite el bloque de código mientras se cumpla una condición.
El bucle while se usa cuando no sabemos cuántas veces se ejecutará el código, 
pero sí tenemos una condición que controla la ejecució

while(condición){
    // sentencias que se ejecutan mientras la condición sea verdadera
   }
*/

// Ejemplo de bucle while
// j variable de control que se inicializa a cero 
// j < 5 condición que va a ser true mientas i sea menor que 5
// j++ actualizacion: con cada iteración j se incrementa en 1
let j = 0;
while (j < 5) {
    console.log("Valor de j en el bucle while: " + j);
    j++;
}

/* Bucle do while
Similar al while, PERO garantiza al menos una ejecución del bloque de código.
El bucle do while es similar al while, pero ejecuta el bloque de código al menos una vez,
sin importar si la condición es verdadera o falsa al principio.

do {
    // sentencias que se ejecutan al menos una vez
} while(condición);
*/

// Ejemplo de bucle do while
// Realiza la primera interación, actualiza la variable de control
// k variable de control que se inicializa a cero 
// k < 5 condición que va a ser true mientas i sea menor que 5
// k++ actualizacion: con cada iteración j se incrementa en 1
let k = 0;
do {
    console.log("Valor de k en el bucle do while: " + k);
    k++;
} while (k < 5);

/* SENTENCIAS DE CONTROL  break y continue
Las sentencias break y continue son utilizadas para modificar el flujo de los bucles.

Sentencia break: se usa para salir de un bucle antes 
de que se cumpla la condición. Es útil cuando queremos detener un bucle 
bajo una condición específica.
*/

const numero = 10;
for (let l = 1; l < 10; l++) { // recorrido: 1,2,3
    if (l % 3 === 0) { // 3 % 3 = 0 entra en el if
        console.log("Primer número divisible por 3: " +l); 
        break; //rompe la ejecucion del bucle
    }
}

/*
Sentencia continue: se usa continue para omitir una iteración y continuar con la siguiente.
*/
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // Salta la iteración cuando i es igual a 5
    }
    console.log(i); // Se imprimen todos los valores menos el 5
    // 0, 1, 2, 3, 4, 6, 7, 8, 9
}