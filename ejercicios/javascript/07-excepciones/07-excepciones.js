/* EJERCICIO 28.-
Crea un formulario para que el usuario pueda introducir dos números enteros.
Debe tener dos inputs y un botón "dividir" (dale estilos, que se vea bien).
El mensaje de no haber introducido nada en un campo debe ser diferente de un número invalido.
Cuando haga click en el botón debe realizar el cálculo y mostrarlo en
un div. 
Crea una función espedífica  que divida dos números y lanza una excepción si el divisor es cero.
Usa try-catch para manejar el error en otra función. 
 */

const dividirBtn = document.getElementById('dividirBtn');
dividirBtn.addEventListener("click",calculadora);

function dividirNumeros(num1, num2) {
    if (num2 === 0) {
        throw new Error("No se puede dividir entre cero.");
    }
    return num1 / num2;
}
function calculadora() {
    // Obtenemos los valores de los inputs
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const resultDiv = document.getElementById('resultDiv');

    // Validamos si ambos campos están llenos
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.className = 'result error';
        resultDiv.textContent = "Por favor, ingresa dos números válidos.";
        return;
    }

    // Intentamos realizar la división
    try {
        const resultado = dividirNumeros(num1, num2);
        resultDiv.className = 'result success';
        resultDiv.textContent = `El resultado de la división es: ${resultado}`;
    } catch (error) {
        resultDiv.className = 'result error';
        resultDiv.textContent = error.message;
    }
};






/* EJERCICIO 29.-
Crea un formulario para que el usuario pueda introducir un array de números enteros.
Hay que validar que todos los valores sean números válidos.
El mensaje de no haber introducido nada debe ser diferente de un números inválido.
Escribe una función que acepte un array y lance una excepción de tipo RangeError si el tamaño del array es mayor que 10.
Debe mostar la media de la lista,
*/

validarBtn.addEventListener("click",validar);

function validar() {

    // Obtener el valor 
    const input = document.getElementById('num3').value;
    
    // Validar que no esté vacío
    if (input.trim() === '') {
        alert('Por favor, ingresa una lista de números.');
        return false;
    }

    // Convertir el string de números a un array
    const numeros = input.split(',').map(num => num.trim());

    // Validar que todos los valores sean números válidos
    for (let i = 0; i < numeros.length; i++) {
        if (isNaN(numeros[i]) || numeros[i] === '') {
            alert(`El valor "${numeros[i]}" no es un número válido.`);
            return false;
        }
    }

    // Convertir todos los valores a enteros
    const numerosArray = numeros.map(num => parseInt(num, 10));

    try {
        // Verificar el tamaño del array
        if (numerosArray.length > 10) {
            throw new RangeError('El tamaño del array no puede ser mayor que 10.');
        }

        // Calcular la media
        const suma = numerosArray.reduce((acc, curr) => acc + curr, 0);
        const media = suma / numerosArray.length;

        // Mostrar la media
        document.getElementById('resultValidar').innerHTML = `LA MEDIA ES: ${media}`;

    } catch (error) {
        if (error instanceof RangeError) {
            alert(error.message);
        } else {
            alert('Se produjo un error inesperado.');
        }
    }
}



/* EJERCICIO 30.- 
Crea una web que solicite al usuario un valor numérico. 
La app debe devolver el cuadrado de ese número y su factorial si el número es menor de 10.
Si es mayor de 10, solo se muestra el resultado.
El mensaje de no haber introducido nada debe ser diferente de haber ingresado un número inválido.
Si el valor ingresado no es un número, lanza una excepción personalizada y manéjala en un bloque try-catch.
*/


