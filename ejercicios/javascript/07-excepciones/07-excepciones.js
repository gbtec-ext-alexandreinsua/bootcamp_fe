/* EJERCICIO 28.-
Crea un formulario para que el usuario pueda introducir dos números enteros.
Debe tener dos inputs y un botón "dividir" (dale estilos, que se vea bien).
El mensaje de no haber introducido nada en un campo debe ser diferente de un número invalido.
Cuando haga click en el botón debe realizar el cálculo y mostrarlo en
un div. 
Crea una función espedífica  que divida dos números y lanza una excepción si el divisor es cero.
Usa try-catch para manejar el error en otra función. 
 */

function dividirNumeros(num1, num2) {
    if (!num2) {
        throw new Error("El divisor no puede ser cero.");
    }
    return num1 / num2;
}


function manejarDivision() {
    const resultadoDiv = document.getElementById("resultado");
    const num1 = document.getElementById("num1").value.trim();
    const num2 = document.getElementById("num2").value.trim();

    resultadoDiv.innerHTML = "";
    resultadoDiv.classList.remove("error");
    try {
        if (num1 === "" || num2 === "") {
            throw new Error("Por favor, complete ambos campos.");
        }

        const numero1 = Math.round(num1);
        const numero2 = Math.round(num2);

        if (isNaN(numero1) || isNaN(numero2)) {
            throw new Error("Ingrese valores numéricos válidos.");
        }

        let resultado = dividirNumeros(numero1, numero2);
        resultado = Math.round(resultado)
        resultadoDiv.textContent = `Resultado: ${resultado}`;
    } catch (error) {
        resultadoDiv.textContent = error.message;
        resultadoDiv.classList.add("error");
    }
}
document.getElementById("dividirBtn").addEventListener("click", manejarDivision);
  
/* EJERCICIO 29.-
Crea un formulario para que el usuario pueda introducir un array de números enteros.
Hay que validar que todos los valores sean números válidos.
El mensaje de no haber introducido nada debe ser diferente de un números inválido.
Escribe una función que acepte un array y lance una excepción de tipo RangeError si el tamaño del array es mayor que 10.
Debe mostar la media de la lista,
*/
function calcularMedia(array) {
    if (array.length > 10) {
        throw new RangeError("El tamaño del array no puede ser mayor que 10.");
    }
    const suma = array.reduce((a, b) => a + b, 0);
    return suma / array.length;
}

// Función para manejar el cálculo de la media
function manejarCalculoMedia() {
    const resultadoDiv = document.getElementById("resultadoArray");
    const arrayInput = document.getElementById("arrayInput").value.trim();

    
    resultadoDiv.innerHTML = "";
    resultadoDiv.classList.remove("error");

    try {
        if (arrayInput === "") {
            throw new Error("Por favor, ingrese un array.");
        }

        
        const array = arrayInput.split(",").map(num => {
            const parsed = Math.round(num.trim());
            if (isNaN(parsed)) {
                throw new Error(`"${num}" no es un número válido.`);
            }
            return parsed;
        });

        
        let media = calcularMedia(array);
        media = Math.round(media)

        
        resultadoDiv.textContent = `Media: ${media}`;
    } catch (error) {
        resultadoDiv.textContent = error.message;
        resultadoDiv.classList.add("error");
    }
}
document.getElementById("calcularMediaBtn").addEventListener("click", manejarCalculoMedia);
  
/* EJERCICIO 30.- 
Crea una web que solicite al usuario un valor numérico. 
La app debe devolver el cuadrado de ese número y su factorial si el número es menor de 10.
Si es mayor de 10, solo se muestra el resultado.
El mensaje de no haber introducido nada debe ser diferente de haber ingresado un número inválido.
Si el valor ingresado no es un número, lanza una excepción personalizada y manéjala en un bloque try-catch.
*/
