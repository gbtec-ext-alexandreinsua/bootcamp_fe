/*
EJERCICIO 7.-  Crea un método que le pida al usuario un número
y imprima por consola si es par o impar 
Por ejemplo
"Introduzca un número:"
2
"2 es un número par."
*/

function showIsEvenOrOdd() {
  // validamos que el usuario haya una cadena de texto con contenido
  const numberString = window.prompt("Introduzca un número entero:");

  // si introduce una cadena vacía
  // mostramos un error
  if (!numberString) {
    console.error("No has introducido nada");
  } else {
    // tranformarmos esa cadena a un número
    // puede dar como resultado Number | NaN
    let number = Number(numberString);

    // comprobamos que el número sea un entero
    // si no es entero mostramos un error
    if (!Number.isInteger(number)) {
      console.error(`${number} no es un entero`);
    } else {
      // si es un entero
      // calculamos si es par o impar
      // y mostramos el mensaje correspondiente
      if (number % 2 === 0) {
        console.log(`${number} es un número par`);
      } else {
        console.log(`${number} es un número impar`);
      }
    }
  }
}

/*
EJERCICIO 8.-
Crea un método que le pida al usuario que introduza una letra
Si la letra es A o B debe mostrar por consola que que ha acertado
si la letra es C o D debe mostrar por consola que está cerca de acertar
en caso caso contrario debe mostrar por consola que está equivocado.
"Ha acertado", "Casi ha acertado", "Está equivocado"
*/
function procesarLetra() {
  const response = window.prompt("Dime una letra: ").trim().toUpperCase();

  switch (response) {
    case "A":
    case "B":
      window.alert("Ha acertado");
      break;
    case "C":
      window.alert("Casi ha acertado");
      break;
    default:
      window.alert("Está equivocado");
      break;
  }
}

function procesarLetraBucle() {
  let opcionValida = true;
  let response = window.prompt("Dime una letra: ").trim().toUpperCase();

  do {
    if (!opcionValida) {
      response = window
        .prompt("Esa opción no es válida. Introduzca otra: ")
        .trim()
        .toUpperCase();
    }

    switch (response) {
      case "A":
      case "B":
        opcionValida = true;
        window.alert("Ha acertado");
        break;
      case "C":
        opcionValida = true;
        window.alert("Casi ha acertado");
        break;
      default:
        opcionValida = false;
        break;
    }
  } while (!opcionValida);
}

function validarLetra(){
      
  let l = "";
  do{
        
        l = window.prompt("Introduce unha letra do abecedario:").toUpperCase();
        console.log(l);
      
        
        if(l === ""){
          window.alert("Tes que introducir unha letra, non vale deixar o campo en blanco.");
        } else if (l === "A") {
          window.alert("Ha acertado");
          console.log("Ha acertado");
        } else if (l === "B") {
          window.alert("Casi ha acertado");
          console.log("Casi ha acertado");
        } else if (l === "C") {
          window.alert("Está equivocado");
          console.log("Está equivocado");
        }  else {

          window.alert("Proba a próxima vez a introducir unha letra do abecedario");
          console.log("Proba a próxima vez a introducir unha letra do abecedario");
        }
        console.log(l === "");
        console.log(l === "A");
        console.log(l === "B");
        console.log(l === "C");
        
      } while (!(l === "A"|| l === "B" || l === "C"));
}

//validarLetra();

/*
EJERCICIO 9.- 
Crea un método que le pida al usuario que introduzca dos números.
Debe imprimir el resultado de restar el menor al mayor
Por ejemplo si introduce 5 y 8 ó 8 y 5 debe mostrar por consola 
"El resultado de restarle 5 a 8 es 3".
 */
function calcularUP(num1,num2){
  
  if(!Number.isNaN(num1) && !Number.isNaN(num2)){
    
    if(num1 > num2) console.log(num1-num2);
    else console.log(num2-num1);
        
  }

}
//calcularUP(0,25);

function higherMinusLower() {
  const firstNum = window.prompt("Introduce un número positivo");
  const secondNum = window.prompt("Introduce otro número positivo");
  if (
    !isNaN(firstNum) &&
    firstNum >= 0 &&
    firstNum != "" &&
    !isNaN(secondNum) &&
    secondNum >= 0 &&
    secondNum != ""
  ) {
    console.log(
      Math.max(firstNum, secondNum) +
        " - " +
        Math.min(firstNum, secondNum) +
        " = " +
        (Math.max(firstNum, secondNum) - Math.min(firstNum, secondNum))
    );
  } else {
    console.log("Debes introducir dos números positivos");
  }
}

function restarDosNumeros() {
  const num1 = Number(prompt("Introduce el primer número:").trim());
  const num2 = Number(prompt("Introduce el segundo número:").trim());

  //Validación
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Error: Ambos valores deben ser números.");
    return; // Terminamos la función si hay un error
  }

  // Determinamos el mayor y el menor
  const mayor = Math.max(num1, num2);
  const menor = Math.min(num1, num2);

  const resultado = mayor - menor;

  console.log(`El resultado de restarle ${menor} a ${mayor} es ${resultado}`);
}

function restaNum() {
  // .trim() elimina los espaciones en blanco alrededor del input del usuario
  let num1 = window.prompt("Introduce el primer número:").trim(); // pedimos el primero
  let num2 = window.prompt("Introduce el segundo número:").trim(); // ahora el segundo

  // validamos que no haya introducido nada o que haya ingresado un espacio en blanco
  if (!num1 || !num2) {
    window.alert("Error: Debes introducir dos números."); // lanzamos este error si el usuario no ingresa nada
  } else {
    // los parseo a un número
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
      // verifico si son numeros
      window.alert("Error: Debes introducir dos números válidos."); // Lanzamos error si no son números lo que introducen
    } else if (num1 > num2) {
      // si el primer numero es mayor que el segundo calculamos la resta del primero con el segundo
      let resultado = num1 - num2;
      window.alert(`El resultado de restar ${num2} a ${num1} es: ${resultado}`);
    } else if (num1 < num2) {
      // l primer número es menor que el segundo, calcula la resta del segundo número menos el primero y muestra el resultado
      let resultado = num2 - num1;
      window.alert(`El resultado de restar ${num1} a ${num2} es: ${resultado}`);
    } else {
      window.alert("Ambos números son iguales, el resultado de restarlos es 0");
    }
  }
}
//restaNum();

/*
EJERCICIO 10.-
Crea un método que le pida al usuario el medio de transporte y los kilómetros que va a recorrer.
Debe calcular el coste del viaje y mostrar el resultado con un popup.
El primer dato es una cadena de caracteres que puede ser "Bicicleta", "Coche", "Tren" o "Autobús".
A continuación, si ha elegido el coche debe pedir el número de kilometros del viaje que va a realizar
y el número de litros aproximado que va a consumir;

Los viajes en tren valen 10€ cada 15km o fracción (un viaje de 16km cuesta 20€)
Los viajes en autobús valen 4,5€ cada 25km  (un viaje de 26km cuesta 4,5€)
El coste del viaje en coche es distancia * combustible * 0,32€.
 
Si la opción es bicicleta debe mostrar "Buen viaje!"
Si la opción es coche debe mostrar "El costo del viaje es ( combustible * kilómetros * 0,32€  )" 10 x 10 x 0.32 = 32
Si la opción es tren o autobús mostrar "El costo del viaje es ( kilómetros *  precio )"
Si introduce otra cosa, de mostrar "La opción que has presentado (transporte), no es válida" 
*/
function transporte(){

  let mTransporte = window.prompt("Introduce o medio de trasnporte:").toLowerCase();
  let kilometros = 0;
  let litros = 0;
  let costo = 0;
    switch(mTransporte) {
      case "bicicleta" :
        window.alert("Buen viaje!")
        break;
      case "coche":
        kilometros = pedirNumero("Introduce o número de kilometros do viaxe que vas a realizar:");
        litros = pedirNumero("Introduza o número de litros aproximado que vai a consumir:"); 
        costo = litros * kilometros * 0.32; 
        window.alert(`O coste do viaxe e de ${costo}`);    
        break;
      case "tren":
        kilometros = pedirNumero("Introduce o número de kilometros do viaxe que vas a realizar:");
        costo = Math.ceil(kilometros/15)*10;
        window.alert(`O coste do viaxe e de ${costo}`);
        break;
      case "autobus":
      case "autobús":
        kilometros = pedirNumero("Introduce o número de kilometros do viaxe que vas a realizar:");
        costo = Math.ceil(kilometros/25)*10;
        window.alert(`O coste do viaxe e de ${costo}`);
        break;
      default:
        window.alert(`La opción que has presentado (${mTransporte}), no es válida`);
        break;

    }

}

function pedirNumero(mensaje) {
  let number;
  do {
  
    let input = window.prompt(mensaje);

    if (input === null) {
      alert("Cancelouse a introdución do número.");
      return null; // Salir de la función y devolver `null`
    }
    
    if(input === "") {
      alert("Unha cadea vacía non é un número. Introduce un número válido.");
      continue; 
    }

    if(input === " ") {
      alert("Un espacio non é un número. Introduce un número válido.");
      continue; 
    }
    
    number = Number(input);
  
    if (Number.isNaN(number)) {
      alert("O valor introducido non é un número. Introduce un número válido.");
      continue; 
    }
    
    break;

  } while (true);

  console.log("Número válido:", number);
  return number;
}




//transporte();

/*
TODO
EJERCICIO 11.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar por consola su cuadrado,
pero si es una cadena de caracteres debe trasformarla a mayúsculas.
*/
function exercise11(){
  let input = window.prompt("Introduzca un dato calquera:");
  if(input === ""){
    window.alert("Unha cadea vacia non é un dato");
  }else if(Number.isInteger(Number(input))){
    window.alert(Number(input)*Number(input));
  }else{
    window.alert(input.toLowerCase());
  }
}
//exercise11();

/*
TODO
EJERCICIO 12.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero múltiplo de 3 debe mostrar por consola
su descomposición en factores, p. ej. 12 = 3 x 4 (primero el factor menor, no quiero la descomposición en factores
primos completa). Si no, lo debe mostrar tal cual y decir si es primo)
Si es una cadena con una longitud mayor que 5 debe mostrarla por consola recortada. en caso contrario debe mostrarla
tal cual.
*/
function exercise12(){
  const number = Number(console.log(Math.trunc(pedirNumero("Introduza un numero enteiro:"))));
  console.log(typeof number);
   console.log(12-3);
   if(!number%3){
      window.alert("Es múltiplo de 3");

      for(let i = 4; i<number; i++){

      }
      

   }

   
}
exercise12();
/*
TODO
EJERCICIO 13.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar su doble. Si es un string,
Debe mostrarla en mayúsculas.
*/
function exercise13(){
  let input = window.prompt("Introduzca un dato calquera:");
  if(input === ""){
    window.alert("Unha cadea vacia non é un dato");
  }else if(Number.isInteger(Number(input))){
    window.alert(Number(input)*2);
  }else{
    window.alert(input.toUpperCase());
  }
}
//exercise13();
/*
TODO
EJERCICIO 14.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar el resto de dividirlo
entre 5. Si es un string, debe mostrar en  minúsculas.
*/
function exercise14(){
  let input = window.prompt("Introduzca un dato calquera:");
  if(input === ""){
    window.alert("Unha cadea vacia non é un dato");
  }else if(Number.isInteger(Number(input))){
    window.alert(Number(input)%5);
  }else{
    window.alert(input.toUpperCase());
  }
}
//exercise14();
/*
TODO
EJERCICIO 15.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrarlo al cubo, si tiene decimales, debe mostrarlo
al cuadrado. Si es un string debe cambiar la primera "a" por un asterisco. TIP: La clase String tiene un método replace(). 
*/
function exercise15(){
  let input = window.prompt("Introduzca un dato calquera:");
  if(input === ""){
    window.alert("Unha cadea vacia non é un dato");
  }else if(Number.isInteger(Number(input))){
    window.alert(Number(input)*Number(input)*Number(input));
  }else if(Number(input) && Number(input)%1 != 0 ){
    window.alert(Number(input)*Number(input));
  }else{
    window.alert(input.replace("a","*"));
  }
}
//exercise15();

