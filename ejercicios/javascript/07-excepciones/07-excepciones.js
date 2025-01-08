/* EJERCICIO 28.-
Crea un formulario para que el usuario pueda introducir dos números enteros.
Debe tener dos inputs y un botón "dividir" (dale estilos, que se vea bien).
El mensaje de no haber introducido nada en un campo debe ser diferente de un número invalido.
Cuando haga click en el botón debe realizar el cálculo y mostrarlo en
un div. 
Crea una función específica  que divida dos números y lanza una excepción si el divisor es cero.
Usa try-catch para manejar el error en otra función. 
 */

const $dividir = document.getElementById("dividir");

$dividir.addEventListener("click", function () {
  // SOLO CONSIDERO UN ERROR INTERNO
  // QUE HAY QUE MANEJAR CON UN TRY-CATCH
  // CUANDO EL PROGRAMA REALIZA UN CÁLCULO ERRÓNEO

  // SI EL USUARIO INTRODUCE DATOS NO VÁLIDOS
  // NO SE CAPTURAN CON TRY-CATCH

  const $primerNumero = document.getElementById("primerNumero");
  const $segundoNumero = document.getElementById("segundoNumero");
  const $resultado28 = document.getElementById("resultado-28");
  let primero;
  let segundo;
  let result = "";

  // recuperar valor de los  inputs
  primero = $primerNumero.value.trim();
  segundo = $segundoNumero.value.trim();

  // controla si es una cadena vacía
  if (!primero || !segundo) {
    result = "Debe introducir ambos números para realizar la operación.";
    resaltarError();
  } else {
    // tranforma la validación a números
    primero = Number(considerarE($primerNumero.value));
    segundo = Number(considerarE($segundoNumero.value));

    if (Number.isNaN(primero) || Number.isNaN(segundo)) {
      resaltarError();
      result = "Debe introducir números válidos en ambos campos del formulario";
    } else {
      try {
        ocultarError();
        // solo cuando dividirNumeros lanza una excepción
        // se captura y se muestra un mensaje
        result = dividirNumeros(primero, segundo).toFixed(2);
      } catch (e) {
        resaltarError();
        result = e.toString().substring(e.toString().indexOf(" ") + 1);
        console.error(e);
      }
    }
  }

  function resaltarError() {
    $primerNumero.classList.add("error");
    $segundoNumero.classList.add("error");
    $resultado28.style.color = "red";
  }

  function ocultarError() {
    $primerNumero.classList.remove("error");
    $segundoNumero.classList.remove("error");
    $resultado28.style.color = "#333";
  }

  // mostrar resultado
  $resultado28.textContent = result;
});

function dividirNumeros(dividendo, divisor) {
  if (!divisor) {
    throw new RangeError("No se puede dividir un número por cero.");
  }
  return dividendo / divisor;
}

function considerarE(value) {
  if (value === "e") {
    return Math.E;
  }
  return value;
}
const boton = document.getElementById("botonDividir");
const finalResult = document.querySelector(".resultInput");

boton.addEventListener('click', dividirDatosInput);



//funcion para dividir dos numeros
function dividir(dividendo, divisor){
    if (!divisor){
      throw new Error ("No se puede dividir entre 0")
    }
    return dividendo / divisor;
  }


  //funcion para mostrar estilos en mensajes
function mostrarMensaje(mensaje, tipoMensaje){
    finalResult.innerText = mensaje; 
    //colores para identificar tipos de mensajes
    if(tipoMensaje === "error"){
      finalResult.style.color = "red";
    } else if(tipoMensaje === "valido"){
      finalResult.style.color="green";
    }
  }
  

//funcion para recibir los datos y procesarlos
function dividirDatosInput(){

    //obtenemos los elementos del dom
    const valorA = document.getElementById("valorA");
    const valorB = document.getElementById("valorB");

    //convertimos a numeros los input
    const num1 = Number(valorA.value);
    const num2 = Number(valorB.value);

    try{

    //comprobamos los datos
    if((!num1) || (!num2)){
        throw new Error ("No se permite campos vacios");
    } else if(isNaN(num1) || isNaN(num2)){
        throw new Error ("Debes insertar valores numericos");
    }
    const calculoFinal = dividir(num1, num2); 
      console.log(`Resultado : ${calculoFinal}`)
      mostrarMensaje(`Resultado : ${calculoFinal.toFixed(1)}`, "valido");
   }
    catch (error){
      console.error(`Error : ${error.message}`);
      mostrarMensaje(`Error : ${error.message}`, "error");
    } 
  }

  ////dirDatosInput();









/* EJERCICIO 29.-
Crea un formulario para que el usuario pueda introducir un array de números enteros.
Hay que validar que todos los valores sean números válidos.
El mensaje de no haber introducido nada debe ser diferente de un números inválido.
Escribe una función que acepte un array y lance una excepción de tipo RangeError si el tamaño del array es mayor que 10.
Debe mostar la media de la lista.
*/

//  1 STRING;
// 1,2,3,4,5 -> pattern
// 1 , 2, 3, 5,
// [1,2,3,4,5]
// separamos la cadena por un separador (,)

const $calcularMediaBtn = document.getElementById("calcularMediaBtn");

$calcularMediaBtn.addEventListener("click", function () {
  const $resultado29 = document.getElementById("resultado-29");
  // recuperar el dato del formulario
  const $arrayInput = document.getElementById("array");
  const arrayString = $arrayInput.value.trim(); // "1,2,3,4,5,"
  let media = 0;

  // controlo que no introduzca nada
  if (!arrayString) {
    resaltarError();
    $resultado29.textContent = `Debes introducir algun valor.`;
  } else {
    try {
      media = handleArray(transformStringIntoArray(arrayString));
      ocultarError();
      $resultado29.textContent = `La media es ${media}.`;
    } catch (e) {
      resaltarError();
      $resultado29.textContent = `${e.message.substring(
        e.message.indexOf(" " + 1)
      )}`;
      console.error(e);
    }
  }

  function resaltarError() {
    $arrayInput.classList.add("error");
    $resultado29.style.color = "red";
  }
  function ocultarError() {
    $arrayInput.classList.remove("error");
    $resultado29.style.color = "#333";
  }
});

// convertirlo a un array de números
function transformStringIntoArray(string) {
  return string.split(",").map((char) => {
    const num = Number.parseInt(char, 10);
    if (Number.isNaN(num)) {
      throw new Error(
        `El elemento ${char} del valor introducido no es un entero.`
      );
    }
    return num;
  });
}

// tratamos el array
function handleArray(numbers) {
  const maxNumbers = 10;
  if (maxNumbers < numbers.length) {
    throw new RangeError("El tamaño del array es demasiado grande");
  }
  return numbers.reduce((suma, numero) => (suma += numero), 0) / numbers.length;
}


//obtenemos los elementos del dom
const botonArray = document.getElementById("addArray");
const arrayResult = document.querySelector (".arrayResult");




//manejar evento en el boton
botonArray.addEventListener("click", function(){

  //recuperar datos del formulario
  const inputArray = document.getElementById("array");
  const arrayString = $inputArray.value.trim(); // "1, 2, 3, ..."
  //recibimos un string y debemos transformarlo a numero

  let media = 0;

  try{

  //agrupamos todas las funciones
   media =  handleArray(transformStringIntoArray(arrayString));
  arrayResult.textContent = (`La media es ${media}.`); 
  } catch (e){
    console.error(e);
   mostrarMensaje(`Error: ${error.message}`);
  }

  

})

//convertimos a un array de numeros
function transformStringIntoArray(string){
return string.split(",").map(n => Number.parseInt(n, 10));
}


//sacamos la media 
function handleArray(numbers){
  const maxNumber = 10;
if(maxNumber > numbers.length){
throw new RangeError("El tamaño del array no puede ser mayor que 10");
}
return numbers.reduce((suma, numero) => (suma += numero), 0) / numbers.length;

}

/*
//funcion para el boton y procesar el array
  function agregarArray(){
    //obtenemos el input del usuario
    const inputArray = document.getElementById("array").value; 
    const elementos = inputArray.split(", "); //para separar los elementos

    try{
      const arrayValido = comprobarArray(elementos); //validamos
      mostrarMensaje(`Nueva coleccion: ${arrayValido}`, "valido");
      
    } catch(error){
      console.error(`Error : ${error.message}`);
      mostrarMensaje(`Error : ${error.message}`, "error");
    }
    
  }*/

//funcion para comprobar datos validos en el array
/*
function comprobarArray(datos){
  const newArray = new Array();

  for (const numero of datos){ //recorremos el array

  if(!numero.trim()){//cadena vacia
    throw new Error("No puedes insertar un elemento vacio" );
  }
   else if(isNaN(numero)){ //si es no es un numero
    throw new Error("Solo se permite valores numericos");
  } 
  //convertimos en numero dentro de la validacion
  //y ademas comprobamos si es un numero entero
  else if(!Number.isInteger(Number(numero))){ 
    throw new Error("Debes ingresar un numero entero");
  } 
  else{ newArray.push(numero);
    }

    if (newArray.length > 10) { //comprobamos si supera el tamano esperado
      throw new RangeError("El tamaño del array no puede ser mayor que 10");
    }
  } return newArray;
}*/


    //funcion para mostrar estilos de mensajes
    function mostrarMensaje(mensaje, tipoMensaje){
      arrayResult.innerText = mensaje; 
      //colores para identificar tipos de mensajes
      if(tipoMensaje === "error"){
        arrayResult.style.color = "red";
      } else if(tipoMensaje === "valido"){
        arrayResult.style.color="green";
      }
    }

    
//regarArray();








/* EJERCICIO 30.- 
Crea una web que solicite al usuario un valor numérico. 
La app debe devolver el cuadrado de ese número y su factorial si el número es menor de 10.
Si es mayor de 10, solo se muestra el cuadrado.
El mensaje de no haber introducido nada debe ser diferente de haber ingresado un número inválido.
Si el valor ingresado no es un número, lanza una excepción personalizada y manéjala en un bloque try-catch.
*/

// recupero el botón que lanza el cálculo
const $calcularNumero = document.getElementById("calcularNumero");

// añado el evento y le realizo la lógica dentro
$calcularNumero.addEventListener("click", function () {
  // recupero el imput
  const $numberInput = document.getElementById("number");
  // recupero el valor del input
  const numberString = $numberInput.value.trim();
  // recupero el espacio
  const $resultado30 = document.getElementById("resultado-30");

  // la estrategia que sigo es
  // 1.- recuperar el numero y transformarlo a string
  // 2.- realizar los cálculos
  // 3.- Mostralos por pantalla

  // para cada caso creo una función pequeña que recibe un parámetro
  // y devuelve un dato que reutilizo  en la siguiente

  try {
    $numberInput.classList.remove("error");
    $resultado30.style.color = "#333";
    // transformStringToNumber lanza una excepción cuando la cadena está vacía
    showResult(
      calculateSquareAndFactorial(transformStringToNumber(numberString)),
      $resultado30
    );
  } catch (e) {
    $numberInput.classList.add("error");
    $resultado30.style.color = "red";
    $resultado30.textContent = `${e.message.substring(
      e.message.indexOf(" " + 1)
    )}`;
  }
});

// transforma el string a un número
// o lanza una excepción
function transformStringToNumber(string) {
  if (!string) {
    throw new Error("No has introducido nada!");
  }

  const number = Number(string);

  if (Number.isNaN(number)) {
    throw new Error(`${string} no es un número.`);
  }

  return number;
}

// el nombre es autoexplicativo
// devuelve un objeto complejo para almaceanar los resultados
function calculateSquareAndFactorial(number) {
  const limit = 10;
  if (limit > number) {
    return {
      number,
      square: number * number,
      factorial: calculateFactorial(number),
    };
  }
  return { number, square: number * number };
}

// el nombre es autoexplicativo
function calculateFactorial(number) {
  if (!number) {
    return 1;
  }
  return number * calculateFactorial(number - 1);
}

// el nombre es autoexplicativo
// recibe como parámetros el resultado de los cálculos
// y el elemento donde va a mostrar el resultado.
function showResult(r, element) {
  if (r.factorial) {
    element.textContent = `El cuadrado de ${r.number} es ${r.square} y el factorial es ${r.factorial}.`;
  } else {
    element.textContent = `El cuadrado de ${r.number} es ${r.square}.`;
  }
}
const $botonCalc = document.getElementById("calcular");

$botonCalc.addEventListener("click", procesarEjercicio30);

function procesarEjercicio30(){
  const stringValue = document.getElementById("number").value.trim();
  if(!stringValue){
    window.alert("No se permite cadenas vacias");
  } else{
    const number = Number(stringValue);
    console.log(number);

    if(10<number){
      alert(`${number} es mayor que 10`);
      console.log(`El cuadrado de ${number} es    ${calcularCuadrado(number)});
     
        calcularFactorial(number);
    }
  }
}

function calcularCuadrado(number){
  return number * number;
}

function calcularFactorial(){
  if(number === 1){
    return 1;
  }
  return number * calcularFactorial(number - 1);
}
