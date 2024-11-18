/*
EJERCIO 1.- Escribe una función que calcule el precio de un producto.
Debe recibir un número y aplicarle un iva del 21%. Debe imprimir
por consola el resultado. 
Por ejemplo, recibe un precio de 20 y debe mostrar por consola
"Precio con IVA: 24.2€"
Pista: investigad esto Number.parseInt();
Aviso en Javascript usamos función como sinónimo de método
(y no es correcto).
*/
/*
// declaramos la función
function calcularPrecioProducto1(precio) {
  const iva = 0.21; // 21 / 100
  precio = Number.parseInt(precio); // validacion de tipo
  precio += precio * iva;
  console.log("Precio con IVA: " + precio.toFixed(2) + "€");
}

function calcularPrecioProducto2(precio) {
  const iva = 0.21;
  precio = Number.parseInt(precio);
  const precioconIva = precio + precio * iva;
  console.log("Precio con IVA: " + precioconIva.toFixed(2) + "€");
}

function calcularPrecioProducto3(precio) {
  const ivaE = 1.21;
  precio = Number.parseInt(precio);
  const precioconIva = precio * ivaE;
  console.log("Precio con IVA: " + precioconIva.toFixed(2) + "€");
}

// invocación de las funciones
// calcularPrecioProducto1(20)
// calcularPrecioProducto2(20)
// calcularPrecioProducto3(20)
// calcularPrecioProducto3("20")

/*
EJERCICIO 2.- Crea una función que recibe por parámetro un número de segundos
y muestra por consola su equivalencia en horas, minutos y segundos.
Por ejemplo 10000 debe mostar
"10000 segundos son 2 horas 30 minutos x segundos"
*/
/*
function calculateSecondsToHumanVersion(seconds) {
  const secondsInHour = 3600;
  const secondsInMinute = 60;

  /*
    El método estático Number.parseInt() analiza un argumento de cadena 
    y devuelve un número entero de la raíz o base especificada.
    */
/*
  const hours = Number.parseInt(seconds / secondsInHour);
  const minutes = Number.parseInt((seconds % secondsInHour) / secondsInMinute);
  const remainSeconds = Number.parseInt(seconds % secondsInMinute);
  console.log(
    seconds +
    " segundos son " +
    hours +
    " horas " +
    minutes +
    " minutos " +
    remainSeconds +
    "  segundos"
  );
}

function calculateSecondsToHumanVersion2(seconds) {
  const secondsInHour = 3600;
  const secondsInMinute = 60;

  /* 
    Devuelve el máximo entero menor o igual a un número.
    */
/*
  const hours = Math.floor(seconds / secondsInHour);
  const minutes = Math.floor((seconds % secondsInHour) / secondsInMinute);
  const remainSeconds = Math.floor(seconds % secondsInMinute);
  console.log(
    seconds +
    " segundos son " +
    hours +
    " horas " +
    minutes +
    " minutos " +
    remainSeconds +
    "  segundos"
  );
}

// calculateSecondsToHumanVersion(10000)
// calculateSecondsToHumanVersion2(10000)

/* 
EJERCICIO 3.- 
const result = window.prompt("Dame un dato");
Escribe un método que le pida al usuario el lado de un cuadrado y muestre por consola
el área y al perímetro 
Por ejemplo un cuadrado de 7 unidades de lado
"Un cuadrado de 7 unidades tiene un area de 49 unidadades y un perímetro de 28 unidades"
*/
/*
function calculateAreaAndPerimeter() {
  const numberOfSides = 4;
  const resultString = window.prompt(
    "Dame el lado de cuadrado (un número entero, p. ej. 7)"
  );
  const result = Number.parseInt(resultString);
  const area = result * result;
  const perimeter = result * numberOfSides;

  console.log(
    `Un cuadrado de ${result} unidades tiene un area de ${area} unidadades y un perímetro de ${perimeter} unidades`
  );
}

function calculateAreaAndPerimeter2() {
  const numberOfSides = 4;
  const result = Number.parseInt(
    window.prompt("Dame el lado de cuadrado (un número entero, p. ej. 7)")
  );
  const area = result * result;
  const perimeter = result * numberOfSides;

  console.log(
    `Un cuadrado de ${result} unidades tiene un area de ${area} unidadades y un perímetro de ${perimeter} unidades`
  );
}
*/
// calculateAreaAndPerimeter();
// calculateAreaAndPerimeter2();

/*
EJERCICIO 4.-  
Crea un método que le pide al usuario el número el número de comensales
y muestre por consola los ingredientes que se necesitan para hacer una
tortilla de patatas. Por cada comensal se necesitan 200 gr de patatas.
Por cada kilo de patatas se necesitan 5 huevos y 100 g de cebollas.
Por ejemplo: Para 5 comensales debe mostrar por pantalla
"Para una tortila de 5 comensales se necesitan 1 kg de patatas, 5 huevos y 100 g de cebolla" 
*/

/*
EJERCICIO 5.- 
/* Crea un método que le pida al usuario 3 números enteros y
muestre por pantalla la media de los 3.
"La media de 1, 2 y 3 es 2."
*/

function pedirEnteros() {
  const numeros = new Array();

  do {
    const reponse = window.prompt("introduce un número entero").trim();
    const number = Number(reponse);

    if (!reponse || Number.isNaN(number)) {
      window.alert("Introduce un número válido");
    } else {
      numeros.push(number);
    }
  } while (numeros.length < 3);

  window.alert("Media: " + ((numeros[0], numeros[1], numeros[2]) / 3));
}

pedirEnteros();


function pedirEnteros() {
  const numeros = new Array();

  do {
    const reponse = window.prompt("introduce un número entero").trim();
    const number = Number(reponse);

    if (!reponse || Number.isNaN(number)) {
      window.alert("Introduce un número válido");
    } else {
      numeros.push(number);
    }
  } while (numeros.length < 3);

  window.alert("Media: " + ((numeros[0], numeros[1], numeros[2]) / 3));
}

pedirEnteros();


function pedir3Enteros() {
  //const numeros = [];
  const numeros = new Array();

  do {
    const reponse = window.prompt("Introduce un numero entero").trim();
    const number = Number(reponse);
    if (!reponse || Number.isNaN(number)) {
      window.alert("Introduce un numero válido");
    } else {
      numeros.push(number);
    }
  } while (numeros.length < 3);
  window.alert("Media: " + (numeros[0] + numeros[1] + numeros[2]) / 3);
}

pedir3Enteros();
/*
EJERCICIO 6.- 
Crea un método que le pida al usuario un número de kilómetros 
y los litros consumidos en un viaje. Debe mostrar por consola el
consumo de combustible por km y el coste total del viaje a un coste
de 0.21€ por litro y kilómetro.
*/

function calcularCoste() {

  let kilometros = 0;
  let kilometrosValidos = false;
  let litros = 0;
  let litrosValidos = false;
  const precio = 0.21;
  const cantidadMinima = 0;

  do {
    const kmString = window.prompt("¿Cuántos km has recorrido?");
    kilometros = validarNumero(kmString, "km realizados");
    kilometrosValidos = cantidadMinima < kilometros;

    if (!kilometrosValidos) {
      window.alert("Debes introducir un número positivo de km");
    }
  } while (!kilometrosValidos);

  do {
    const ltString = window.prompt("¿Cuántos L has repostado?");
    litros = validarNumero(ltString, "L repostados");
    litrosValidos = cantidadMinima < litros;

    if (!litrosValidos) {
      window.alert("Debes introducir un número positivo de L");
    }
  } while (!litrosValidos)

  
  const consumo = litros / kilometros;
  const consteViaje = consumo * precio;

  window.alert("El consumo es " + consumo + "por km, y el coste total es " + consteViaje);

}

calcularCoste();

function validarNumero(string, mensaje) {
  let resultado;

  if (!string) {
    window.alert(mensaje);

  } else {
    resultado = Number(string);

    if (Number.isNaN(resultado)) {
      window.alert("Eso no es un número");

    } else {
      return resultado;
    }
  }
}






function calcularCoste() {

  let kilometros = 0;
  let kilometrosValidos = false;
  let litros = 0;
  let litrosValidos = false;
  const precio = 0.21;
  const cantidadMinima = 0;

  do {
    const kmString = window.prompt("¿Cuántos km has recorrido?");
    kilometros = validarNumero(kmString, "km realizados");
    kilometrosValidos = cantidadMinima < kilometros;

    if (!kilometrosValidos) {
      window.alert("Debes introducir un número positivo de km");
    }
  } while (!kilometrosValidos);

  do {
    const ltString = window.prompt("¿Cuántos L has repostado?");
    litros = validarNumero(ltString, "L repostados");
    litrosValidos = cantidadMinima < litros;

    if (!litrosValidos) {
      window.alert("Debes introducir un número positivo de L");
    }
  } while (!litrosValidos)

  
  const consumo = litros / kilometros;
  const consteViaje = consumo * precio;

  window.alert("El consumo es " + consumo + "por km, y el coste total es " + consteViaje);

}

calcularCoste();

function validarNumero(string, mensaje) {
  let resultado;

  if (!string) {
    window.alert(mensaje);

  } else {
    resultado = Number(string);

    if (Number.isNaN(resultado)) {
      window.alert("Eso no es un número");

    } else {
      return resultado;
    }
  }
}






function calcularCoste() {
  const precio = 0.21;
  const cantidadMinima = 0;
  let kilometrosValidos = false;
  let kilometros = 0;
  let litrosValidos = false;
  let litros = 0;

  do { // empieza
    const kmString = window.prompt("Cuantos kilometros has recorrido?")
    kilometros = validarNumero(kmString, "Debes introducir los kilometros realizados")
    kilometrosValidos = cantidadMinima < kilometros;
    if (!kilometrosValidos) {
      window.alert("Debes introducir un numero de kilometros positivo")
    }
    // fin bloque
  } while (!kilometrosValidos);

  // segundo do while
  do {
    const ltString = window.prompt("Cuantos litros has repostado?")
    litros = validarNumero(ltString, "Debes introducir los litros repostados")
    litrosValidos = cantidadMinima < litros;
    if (!litrosValidos) {
      window.alert("Debes introducir un numero de litros positivo")
    }
  } while (!litrosValidos);



  const consumo = litros / kilometros
  const costeViaje = consumo * precio * kilometros
  window.alert(`consumo es ${consumo} por km y el coste total es ${costeViaje}`)

}
calcularCoste()

function validarNumero(string, message) {
  let resultado;
  if (!string) {
    window.alert(message)
  }
  else {
    resultado = Number(string)
    if (Number.isNaN(resultado)) {
      window.alert("Eso no es un número")
    }
    else {
      return resultado;
    }
  }


}