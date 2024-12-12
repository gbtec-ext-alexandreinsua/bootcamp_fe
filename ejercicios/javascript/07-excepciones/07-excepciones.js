/* EJERCICIO 28.-
Crea un formulario para que el usuario pueda introducir dos números enteros.
Debe tener dos inputs y un botón "dividir" (dale estilos, que se vea bien).
El mensaje de no haber introducido nada en un campo debe ser diferente de un número invalido.
Cuando haga click en el botón debe realizar el cálculo y mostrarlo en
un div. 
Crea una función espedífica  que divida dos números y lanza una excepción si el divisor es cero.
Usa try-catch para manejar el error en otra función. 
 */

const botonDividir = document.getElementById('dividir');
botonDividir.addEventListener("click", dividirExcepcion);

function dividir(dividendo, divisor) {
    if (divisor === 0) {
        throw new Error("El divisor no puede ser 0")
    }
    return dividendo / divisor;
}

function dividirExcepcion() {
    const primerNumero = document.getElementById('numero1');
    const segundoNumero = document.getElementById('numero2');

    const resultadoDivision = document.getElementById('resultado');

    let numero1;
    let numero2;
    
    resultado.textContent = " ";

    try {
        if (!primerNumero.value || !segundoNumero.value) {
            window.alert("Los campos no pueden estar vacíos");
            throw new Error("Los campos no pueden estar vacíos");
        }

        numero1 = parseFloat(primerNumero.value);
        numero2 = parseFloat(segundoNumero.value);

        const resultadoDivision = dividir(numero1, numero2);
        resultado.textContent = `El resultado es ${resultadoDivision}`; 

    } catch (error) {
        console.error(error.message);

        if (error.message === "El divisor no puede ser 0") {
            window.alert("No se puede dividir entre 0");
        }
    }

}

// dividirExcepcion();


/* EJERCICIO 29.-
Crea un formulario para que el usuario pueda introducir un array de números enteros.
Hay que validar que todos los valores sean números válidos.
El mensaje de no haber introducido nada debe ser diferente de un números inválido.
Escribe una función que acepte un array y lance una excepción de tipo RangeError si el tamaño del array es mayor que 10.
Debe mostar la media de la lista,
*/

/* EJERCICIO 30.- 
Crea una web que solicite al usuario un valor numérico. 
La app debe devolver el cuadrado de ese número y su factorial si el número es menor de 10.
Si es mayor de 10, solo se muestra el resultado.
El mensaje de no haber introducido nada debe ser diferente de haber ingresado un número inválido.
Si el valor ingresado no es un número, lanza una excepción personalizada y manéjala en un bloque try-catch.
*/
