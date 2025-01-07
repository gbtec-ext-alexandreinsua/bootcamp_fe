/* EJERCICIO 28.-
Crea un formulario para que el usuario pueda introducir dos números enteros.
Debe tener dos inputs y un botón "dividir" (dale estilos, que se vea bien).
El mensaje de no haber introducido nada en un campo debe ser diferente de un número invalido.
Cuando haga click en el botón debe realizar el cálculo y mostrarlo en
un div. 
Crea una función espedífica  que divida dos números y lanza una excepción si el divisor es cero.
Usa try-catch para manejar el error en otra función. 
 */
const dividirBtn = document.getElementById('dividir');
dividirBtn.addEventListener("click", dividirException);

function dividir(dividendo, divisor){
    if (!divisor){
      throw new Error ("No se puede dividir entre 0")
    }
    return dividendo / divisor;
  }

function dividirException() {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const num1InputR = num1Input.value.trim();
    const num2InputR = num2Input.value.trim();
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    resultDiv.textContent = '';
    errorDiv.textContent = '';

    try {       
        if (!num1InputR || !num2InputR) {
            throw new Error('Ambos campos son obligatorios.');
        }
        const num1 = parseFloat(num1InputR);
        const num2 = parseFloat(num2InputR);
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Por favor, introduce números válidos.');
        }
        const result = dividir(num1, num2);
        resultDiv.textContent = `${num1InputR} / ${num2InputR} = ${result}`;
        
    } catch (error) {
        errorDiv.textContent = error.message;
    } 
    num1Input.value= '';
    num2Input.value= '';
}


/* EJERCICIO 29.-
Crea un formulario para que el usuario pueda introducir un array de números enteros.
Hay que validar que todos los valores sean números válidos.
El mensaje de no haber introducido nada debe ser diferente de un números inválido.
Escribe una función que acepte un array y lance una excepción de tipo RangeError si el tamaño del array es mayor que 10.
Debe mostar la media de la lista,
*/

const $calcularMediaBtn = document.getElementById("calcularMediaBtn");

$calcularMediaBtn.addEventListener("click", function() {
    const $result29 = document.getElementById("result29");
    // recuperar el dato del formulario
    const $arrayInput = document.getElementById("array");
    const arrayString = $arrayInput.value.trim(); // "1,2,3,4,5"
    let media = 0;

    try {
        media = handleArray(transformStringIntoArray(arrayString));
    } catch (e) {
        $result29.textContent = `Error`;
        console.error(e);
    }

    $result29.textContent = `La media es ${media}.`;
});

    // convertirlo a un array de numeros
function transformStringIntoArray(string) {
    return array = string.split(",").map((char) => {
        const num =Number.parseInt(char, 10));
}

function handleArray(numbers) {
    const maxNumbers = 10;
    if (maxNumbers < numbers.length) {
        throw new RangeError("El tamaño del array es demasiado grande");
    }
    return numbers.reduce((suma, numero)=> (suma += numero), 0)/ numbers.length;
}


/* EJERCICIO 30.- 
Crea una web que solicite al usuario un valor numérico. 
La app debe devolver el cuadrado de ese número y su factorial si el número es menor de 10.
Si es mayor de 10, solo se muestra el resultado.
El mensaje de no haber introducido nada debe ser diferente de haber ingresado un número inválido.
Si el valor ingresado no es un número, lanza una excepción personalizada y manéjala en un bloque try-catch.
*/
const $enviar30 = document.getElementById("enviar30");

$enviar30.addEventListener("click", procesarEj30);

function procesarEj30 () {
    const cuadOFact = 10;
    const stringValue = document.getElementById("numero").trim();
    if(!stringValue) {
        window.alert("No es valida una cadena vacia");
    } else {
        const number = Number(stringValue)
        console.log(number);
        
        if(number > cuadOFact) {
            window.alert("es mayor que 10");

        }
    }
}

function cuadrado (number) {
    return number * number
}

function factorial (number) {

    return
}
const numero = document.getElementById("numero").value;

