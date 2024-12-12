/* EJERCICIO 28.-
Crea un formulario para que el usuario pueda introducir dos números enteros.
Debe tener dos inputs y un botón "dividir" (dale estilos, que se vea bien).
El mensaje de no haber introducido nada en un campo debe ser diferente de un número invalido.
Cuando haga click en el botón debe realizar el cálculo y mostrarlo en
un div. 
Crea una función espedífica  que divida dos números y lanza una excepción si el divisor es cero.
Usa try-catch para manejar el error en otra función. 
 */

const $dividir = document.getElementById("dividir");


function dividir(num1, num2){
    if(!Number(num2)){
        throw new Error("No se puede dividir entre 0");
    }
    return (num1 / num2).toFixed(2);
}

$dividir.addEventListener("click", function(event){
    event.preventDefault();
    
    function getDatosFormulario(){
        num1 = $dividendo.value.trim();
        num2 = $divisor.value.trim();
        num1Int = Number(num1);
        num2Int = Number(num2);
        if (!num1 || !num2){
            return {
                correcto: false,
                mensaje: "Error. Introduce ambos inputs."
            };
        } else if(Number.isNaN(num1) ||Number.isNaN(num2)){
            return {
                correcto: false,
                mensaje: "Error. Los campos deben ser números."
            };
        } else{
            return {
                correcto: true,
                dividendo: num1Int,
                divisor: num2Int
            };
        }
    }

    const $dividendo = document.getElementById("dividendo");
    const $divisor = document.getElementById("divisor");
    const $respuesta = document.getElementById("respuesta");
    const datosFormulario = getDatosFormulario();
    console.log(datosFormulario);
    if (datosFormulario.correcto){
        try {
            $respuesta.innerText = `La division de ${datosFormulario.dividendo} entre ${datosFormulario.divisor} es igual a ${dividir(datosFormulario.dividendo, datosFormulario.divisor)}.`;
        } catch (error) {
            $respuesta.innerText = error;
        }
    } else{
        $respuesta.innerText = datosFormulario.mensaje;
    }

});



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
