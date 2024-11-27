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

function guessLetter(){
  const correct = ["A", "B"];
  const almost = ["C", "D"];
  let ok = false;

  do{
    let guess = window.prompt("Guess a letter!").toUpperCase().trim();
    console.log(guess);
    if (guess.length > 1){
      alert("Debes introducir solo 1 letra.");
    } else if (Number.isInteger(Number(guess))){
      alert("Solo las letras están permitidas");
    } else {
      if (correct.includes(guess)) {
        ok = true;
        alert("Ha acertado");
      } else if (almost.includes(guess)){
        alert("Casi ha acertado");
      } else {
        alert("Está equivocado")
      }
    }
  } while(!ok);

}

guessLetter();

/*
EJERCICIO 9.- 
Crea un método que le pida al usuario que introduzca dos números.
Debe imprimir el resultado de restar el menor al mayor
Por ejemplo si introduce 5 y 8 ó 8 y 5 debe mostrar por consola 
"El resultado de restarle 5 a 8 es 3".
 */

<<<<<<< Updated upstream
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
=======
function restarMenorMayor(){
  let ok = 0;
  do {
    let num1 = Number(window.prompt("Introduce un número:").trim());
    if (!num1 || Number.isNaN(num1) || num1 <= 0) {
      window.alert("Valor no válido para el primer número.")
    } else {
      do {
        let num2 = Number(window.prompt("Introduce otro número:").trim());
        if (!num2 || Number.isNaN(num2) || num2 <= 0) {
          window.alert("Valor no válido para el segundo número.")
        } else {
          ok = 1;
          if(num1 >= num2){
            const resultado = num1 - num2;
            console.log(`El resultado de restarle ${num2} a ${num1} es ${resultado}.`)
          } else {
            const resultado = num2 - num1;
            console.log(`El resultado de restarle ${num1} a ${num2} es ${resultado}.`)
          }
        }
      } while (!ok);
    }
  } while (!ok);
}

//restarMenorMayor();
>>>>>>> Stashed changes

/*
TODO
EJERCICIO 10.-
Crea un método que le pida al usuario el medio de transporte y los kilómetros que va a recorrer.
Debe calcular el coste del viaje y mostrar el resultado con un popup.
El primer dato es una cadena de caracteres que puede ser "Bicicleta", "Coche", "Tren" o "autobus".
A continuación, si ha elegido el coche debe pedir el número de kilometros del viaje que va a realizar
y el número de litros aproximado que va a consumir;

Los viajes en tren valen 10€ cada 15km o fracción (un viaje de 16km cuesta 20€)
Los viajes en autobús valen 4,5€  cada 25km  (un viaje de 26km cuesta 4,5€)
El coste del viaje en coche es distancia * combustible * 0,32€.
 
Si la opción es bicicleta debe mostrar "Buen viaje!"
Si la opción es coche debe mostrar "Es costo del viaje es ( combustible * kilómetros *  0,32€  )"cal
Si la opción es tren o autobús mostrar "Es costo del viaje es ( kilómetros *  precio )"
Si introduce otra cosa, de mostrar "La opción que has presentado (transporte), no es válida" 
*/

<<<<<<< Updated upstream

function fraccionViaje(km, transporte){
  if(transporte === 'Tren'){
    const fraccion = 15;
    if (km < fraccion){
      return 1;
    }else{
      return Math.ceil(km/fraccion);
    }
  }else{
    const fraccion = 25;
    if (km < fraccion){
      return 1;
    }else{
      return Math.ceil(km/fraccion);
    }
  }
}
  

/*   let count = 0;
  do{
    count++;
    km -= fraccion;
  }while (km > 1); */


function costeViaje(){
  const transporte = ["Bicicleta", "Coche", "Autobus", "Tren"];
  const transpoteElegido = window.prompt("Que medio de transporte va a utilizar?").trim();
  const elegido = transpoteElegido.charAt(0).toUpperCase() + transpoteElegido.slice(1);


  if(transporte.includes(elegido)){
    switch(elegido){
      case transporte[0]:
        alert("Buen viaje!")
        break;
      case transporte[1]:
        let ok1 = 0;
        do {
          let km = Number(window.prompt("Introduce los kilómetros recorridos:").trim());
          if (!km || Number.isNaN(km) || km <= 0) {
            window.alert("Valor no válido para el kilometraje.")
          } else {
            do {
              let litros = Number(window.prompt("Introduce los litros repostados:").trim());
              if (!litros || Number.isNaN(litros) || litros <= 0) {
                window.alert("Valor no válido para el combustible repostado.")
              } else {
                const eurolitro = 0.21;
                ok1 = 1;
                const consumoKilometro = litros / km;
                const costeViaje = consumoKilometro * eurolitro * km;

                alert(`Un viaje de ${km}km, tiene un coste de ${costeViaje}€, con un consumo por km de ${consumoKilometro}€`)
              }
            } while (!ok1);
          }
        } while (!ok1);
        break;
      case transporte[2]:
        let ok2 = 0;
        do {
          let km = Number(window.prompt("Introduce los kilómetros recorridos:").trim());
          if (!km || Number.isNaN(km) || km <= 0) {
            window.alert("Valor no válido para el kilometraje.")
          } else {
            ok2 = 1;
            const precioBus = 4.5;
            const costeBus = precioBus * fraccionViaje(precioBus, transporte[2]);
            alert(`Es costo del viaje es ${costeBus}`);
          }
        }while(!ok2);
        break;
      default:
        let ok3 = 0;
        do {
          let km = Number(window.prompt("Introduce los kilómetros recorridos:").trim());
          if (!km || Number.isNaN(km) || km <= 0) {
            window.alert("Valor no válido para el kilometraje.")
          } else {
            ok3 = 1;
            const precioTren = 10;
            const costeTren = precioTren * fraccionViaje(km, transporte[3]);
            alert(`Es costo del viaje es ${costeTren}`);
          }
        }while(!ok3);
    }
  } else {
    alert(`La opción que has presentado ${elegido}, no es válida`)
  }
}

costeViaje();


=======
function costeViaje(){
  const transporte = ["Bicicleta", "Coche", "Tren", "Autobus"];
  const transpoteElegido = window.prompt("Que medio de transporte va a utilizar?").trim()
}

>>>>>>> Stashed changes
/*
TODO
EJERCICIO 11.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar por consola su cuadrado,
pero si es una cadena de caracteres debe trasformarla a mayúsculas.
*/

function cuadradoMayus(){
  const userInput = window.prompt("Introduce un número entero o una cadena de caracteres.");

  if (!userInput.trim()){
    window.alert("No puedes meter un mensaje en blanco");
  }else{
    const userInputNumber = Number(userInput);
    if(Number.isInteger(userInputNumber)){
      console.log(userInputNumber*userInputNumber);
    }else{
      console.log(userInput.toUpperCase());
    }
  }
}

//cuadradoMayus();

/*
TODO
EJERCICIO 12.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero múltiplo de 3 debe mostrar por consola
su descomposición en factores, p. ej. 12 = 3 x 4 (primero el factor menor, no quiero la descomposición en factores
primos completa). Si no, lo debe mostrar tal cual y decir que es primo)
Si es una cadena con una longitud mayor que 5 debe mostrarla por consola recortada. en caso contrario debe mostrarla
tal cual.
*/

/*
TODO
EJERCICIO 13.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar su doble. Si es un string,
Debe mostrarla en mayúsculas.
*/

/*
TODO
EJERCICIO 14.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar el resto de dividirlo
entre 5. Si es un string, debe mostrar en mayúsculas o minúsculas.
*/

/*
TODO
EJERCICIO 15.- 
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrarlo al cubo, si tiene decimales, debe mostrarlo
al cuadrado. Si es un string debe cambiar la primera "a" por un asterisco. TIP: La clase String tiene un método replace(). 
*/
