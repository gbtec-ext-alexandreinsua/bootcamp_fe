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


/* EJERCICIO 29.-
Crea un formulario para que el usuario pueda introducir un array de números enteros.
Hay que validar que todos los valores sean números válidos.
El mensaje de no haber introducido nada debe ser diferente de un números inválido.
Escribe una función que acepte un array y lance una excepción de tipo RangeError si el tamaño del array es mayor que 10.
Debe mostar la media de la lista,
*/

//1,2,3,4,5

//separar la cadena por un separador (,)
const $calcularMediaBtn = document.getElementById("calcularMediaBtn");

$calcularMediaBtn.addEventListener("click", function () {
    const $resultado29 = document.getElementById("media");

    // Recuperar el dato del formulario
    const $arrayInput = document.getElementById("array");
    const arrayString = $arrayInput.value.trim(); // "1,2,3,4,5"

    let media = 0;

    try {
        const numbersArray = transformStringIntoArray(arrayString);
        media = handleArray(numbersArray);
        $resultado29.textContent = `La media es ${media}`;
    } catch (e) {
        $resultado29.textContent = `Error: ${e.message}`;
        console.error(e);
    }
});

// Convertir el string en array de números
function transformStringIntoArray(string) {
    if (!string) {
        throw new Error("El input no puede estar vacío");
    }

    const array = string.split(",").map((n) => {
        const parsedNumber = Number.parseInt(n, 10);
        if (isNaN(parsedNumber)) {
            throw new Error("El input contiene valores no numéricos");
        }
        return parsedNumber;
    });

    return array;
}

// Procesar el array
function handleArray(numbers) {
    const maxNumbers = 10; // No se pueden introducir más de 10 números

    if (numbers.length > maxNumbers) {
        throw new RangeError("El tamaño del array es demasiado grande");
    }

    if (numbers.length === 0) {
        throw new Error("El array no puede estar vacío");
    }

    return numbers.reduce((suma, numero) => suma + numero, 0) / numbers.length;
}


/* EJERCICIO 30.- 
Crea una web que solicite al usuario un valor numérico. 
La app debe devolver el cuadrado de ese número y su factorial si el número es menor de 10.
Si es mayor de 10, solo se muestra el resultado.
El mensaje de no haber introducido nada debe ser diferente de haber ingresado un número inválido.
Si el valor ingresado no es un número, lanza una excepción personalizada y manéjala en un bloque try-catch.
*/

