/* EJERCICIO 28.-
Crea un formulario para que el usuario pueda introducir dos números enteros.
Debe tener dos inputs y un botón "dividir" (dale estilos, que se vea bien).
El mensaje de no haber introducido nada en un campo debe ser diferente de un número invalido.
Cuando haga click en el botón debe realizar el cálculo y mostrarlo en
un div. 
Crea una función espedífica  que divida dos números y lanza una excepción si el divisor es cero.
Usa try-catch para manejar el error en otra función. 
 */
function procesarEjercicio28() {
  try {
    const divEjercicio28 = document.getElementById("ejercicio28");
    const dividendo = Math.floor(
      Number(document.getElementById("dividendo").value)
    );
    const divisor = Math.floor(
      Number(document.getElementById("divisor").value)
    );

    if (isNaN(dividendo) || isNaN(divisor)) {
      throw new Error("Por favor, ingresa valores numéricos.");
    }

    if (!divisor) {
      throw new Error("El divisor no puede ser 0.");
    }

    const resultado = dividendo / divisor;

    console.log(
      `Dividendo: ${dividendo}, Divisor: ${divisor}, Resultado: ${resultado}`
    );
    window.alert(
      `Dividendo: ${dividendo}, Divisor: ${divisor}, Resultado: ${resultado}`
    );
    const resultadoFinal =  `${dividendo} / ${divisor} = Resultado: ${resultado}`;
    window.alert(resultado);
    const $p = document.createElement("p");
    $p.textContent = resultadoFinal;
    $p.style.color = "green";
    divEjercicio28.appendChild($p);
  } catch (error) {
    window.alert(error.message);
    console.error(error.message);
    
  }
}

// Asociar el evento click al botón
const $enviar28 = document.getElementById("enviar28");
$enviar28.addEventListener("click", procesarEjercicio28);

/* EJERCICIO 29.-
Crea un formulario para que el usuario pueda introducir un array de números enteros.
Hay que validar que todos los valores sean números válidos.
El mensaje de no haber introducido nada debe ser diferente de un números inválido.
Escribe una función que acepte un array y lance una excepción de tipo RangeError si el tamaño del array es mayor que 10.
Debe mostar la media de la lista,
*/

let $enviar29 = document.getElementById("enviar29");
console.log($enviar29);
$enviar29.addEventListener("click", procesarEjercicio29);

function procesarEjercicio29() {
  const $valorString = document.getElementById("myArray"); //element del dom
  const valorString2 = $valorString.value.trim(); // //cogemos el valor y sacamos los espacios
  console.log($valorString);
  console.log(valorString2);
  const myArrayDeNumeros = transformarStringEnArray(valorString2);
  console.log(myArrayDeNumeros)

}

function transformarStringEnArray(string){
  const myArrayDeStrings = string.split(","); //de una cadena creamos un array cortando la cadena por las ","
  return myArrayDeStrings.map((value) => Number.parseInt(value));//Convertimos un array de strings a un array de tipo enteros
  //parseando los valores

}

/* EJERCICIO 30.- 
Crea una web que solicite al usuario un valor numérico. 
La app debe devolver el cuadrado de ese número y su factorial si el número es menor de 10.
Si es mayor de 10, solo se muestra el cuadrado
El mensaje de no haber introducido nada debe ser diferente de haber ingresado un número inválido.
Si el valor ingresado no es un número, lanza una excepción personalizada y manéjala en un bloque try-catch.
*/


function calcularCuadrado(number){
  return number * number;
};

function calcularFactorial(number){

  if(number === 1){
    return 1;
  }

  return number * calcularFactorial(number - 1)
}
const $enviar30 = document.getElementById("enviar30");

$enviar30.addEventListener("click", procesarEjercicio30);

function procesarEjercicio30(){
  const $p = document.getElementById("p30");
  const stringValue = document.getElementById("numero").value.trim();
  
  try{  
    if(!stringValue){
      window.alert("meta un numero válido, una cadena vacia no sirve");
      throw new Error("peta");
    }else{
      const number = Number(stringValue);
      console.log(number);

      if(10 < number){
        alert("es mayor que 10");
        console.log(`El cuadrado de ${calcularCuadrado(number)}`);
        $p.textContent(`El cuadrado de ${calcularCuadrado(number)}\n`);
        
      }else{
        
        console.log(`El cuadrado de ${calcularCuadrado(number)}`);
        console.log(`El factorial de ${calcularFactorial(number)}`);
        $p.innerHTML = `El cuadrado de ${number} es ${calcularCuadrado(number)} <br>El factorial de ${(number)} es ${calcularFactorial(number)}\n`;
      }
    }
  } catch (error){
    console.error(error.message);
  }

}