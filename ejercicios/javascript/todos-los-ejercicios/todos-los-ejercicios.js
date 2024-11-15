
/*
toUpperCase(): Convierte todos los caracteres a mayúsculas.                                   ---->    str.toUpperCase();
toLowerCase(): Convierte todos los caracteres a minúsculas.                                   ---->    str.toLowerCase();
concat(): Une dos o más cadenas.                                                              ---->    str.concat(" ", "mundo");
replace(): Reemplaza una subcadena por otra.                                                  ---->    str.replace("mundo", "JavaScript");
slice(): Extrae una parte de la cadena (admite índices negativos: empieza por el final).      ---->    str.slice(0, 4); str.slice(0,-1);
substring(): Extrae una parte de la cadena.                                                   ---->    str.substring(0, 4); str.substring(2)
split(): Divide la cadena en un array de subcadenas.                                          ---->    str.split(", ");
trim(): Elimina los espacios al principio y al final de la cadena.                            ---->    str.trim();
includes(): Verifica si una subcadena existe dentro de la cadena.                             ---->    str.includes("mundo");
indexOf(): Devuelve el índice de la primera aparición de una subcadena.                       ---->    str.indexOf("mundo");
padStart(): Rellena la cadena hasta alcanzar la longitud especificada (por el principio).     ---->    str.padStart(3, "0");
padEnd(): Rellena la cadena hasta alcanzar la longitud especificada (por el final).           ---->    str.padEnd(3, "0");
repeat(): Repite la cadena un número determinado de veces.                                    ---->    str.repeat(3);
startsWith(): Verifica si la cadena empieza con una subcadena específica.                     ---->    str.startsWith("Hola");
endsWith(): Verifica si la cadena termina con una subcadena específica.                       ---->    str.endsWith("mundo");
normalize(): Convierte la cadena a una forma de normalización Unicode.                        ---->    str.normalize("NFD");
localeCompare(): Compara dos cadenas según la configuración regional.                         ---->    str.localeCompare("b");
charAt(): Devuelve el carácter en una posición específica.                                    ---->    str.charAt(1);
charCodeAt(): Devuelve el valor numérico del código Unicode de un carácter.                   ---->    str.charCodeAt(1);
codePointAt(): Devuelve el valor numérico del punto de código Unicode.                        ---->    str.codePointAt(0);
fromCharCode(): Convierte un valor numérico Unicode en su carácter correspondiente.           ---->    String.fromCharCode(111);
fromCodePoint(): Convierte un valor numérico Unicode en su carácter correspondiente.          ---->    String.fromCodePoint(128075); 

*/

//funcion checknum: se encarga de validar los números de todas las funciones que lo requieran

function checknum(n, t, b1, b2, b3) {
  let check = false;
  while (!check) {
    if (isNaN(n) || n.trim() == "") {
      n = prompt("Introduzca " + t + " válido: ");
    } else if (n == "") {
      n = prompt("Introduzca un " + t + ": ");
    } else if (parseInt(n) < 0 && b1) {
      n = prompt("Debe introducir " + t + " positivo: ");   //TIENE QUE SER UN NÚMERO POSITIVO -> TRUE
    } else if (parseInt(n) == 0 && b2) {
      n = prompt("Introduzca " + t + " distinto de 0: ");    //NO PUEDE SER 0 -> TRUE
    } else if (n % 1 != 0 && b3) {
      n = prompt("Debe introducir " + t + " entero: ");      //NO PUEDE SER DECIMAL -> TRUE
    } else {
      check = true;
    }
  }

  return n.trim();

}



//-------------------------
//FUNCIONES
//-------------------------



/*
EJERCIO 1
Escribe una función que calcule el precio de un producto.
Debe recibir un número y aplicarle un iva del 21%. Debe imprimir
por consola el resultado.
*/

function calculaPrecio() {
  let precio = parseFloat(checknum(prompt("Introduzca el precio del producto: "), "un precio", true, false, false));
  const IVA = 21;
  var precio_con_iva = precio * (IVA / 100 + 1);
  mostrarPrecio(precio_con_iva, precio, IVA);

}

function mostrarPrecio(precio_final, p, iva) {
  return alert("El precio del producto de " + p + "€ con IVA del " + iva + "% es: " + precio_final.toFixed(2) + "€");

}

/*
EJERCICIO 2
Crea una función que recibe por parámetro un número de segundos
y muestra por consola su equivalencia en horas, minutos y segundos.
*/

function calculoTiempo() {
  let s = parseInt(checknum(prompt("Introduzca el número de segundos: "), "un número de segundos", true, false, true));

  let horas = parseInt(s / (60 * 60));
  let minutos = parseInt(s / 60 - (horas * 60));
  let segundos = parseInt(s - (minutos * 60) - (horas * 3600));

  alert("Segundos:  " + s + "\n\nCronómetro:  " + horas + " : " + minutos + " : " + segundos);

}

/* 
EJERCICIO 3
Escribe un método que le pida al usuario el lado de un cuadrado y muestre por consola
el área y al perímetro 
Por ejemplo un cuadrado de 7 unidades de lado
*/

function cuadrado() {
  let lado = parseFloat(checknum(prompt("Introduzca el lado del cuadrado en m²: "), "un lado de cuadrado", true, true, false));

  let area = Math.pow(lado, 2);
  let perimetro = lado * 4;

  alert("Lado del cuadrado: " + lado + " m²\n\nArea: " + area + " m²\nPerimetro: " + perimetro + " m");

}

/*
EJERCICIO 4
Crea un método que le pide al usuario el número el número de comensales
y muestre por consola los ingredientes que se necesitan para hacer una
tortilla de patatas. Por cada comensal se necesitan 200 gr de patatas.
Por cada kilo de patatas se necesitan 5 huevos y 100 g de cebollas.
*/

function calculoTortilla() {
  let n = parseInt(checknum(prompt("Introduzca el número de comensales: "), "un número de comensales", true, true, false));

  let patatas = n * 0.2;
  let huevos = n;
  let cebolla = patatas * 100;

  alert("Para una tortilla de " + n + " comensales se necesitan " + patatas + " kg de patatas, " + huevos + " huevos y " + cebolla + " g de cebolla.");

}

/*
EJERCICIO 5
Crea un método que le pida al usuario 3 números enteros y
muestre por pantalla la media de los 3.
*/

function mediaNumeros() {
  let n1 = parseFloat(checknum(prompt("Introduzca el primer número: "), "un primer número", false, false, false));
  let n2 = parseFloat(checknum(prompt("Introduzca el segundo número: "), "un segundo número", false, false, false));
  let n3 = parseFloat(checknum(prompt("Introduzca el tercer número: "), "un tercer número", false, false, false));

  let media_numeros = ((n1 + n2 + n3) / 3).toFixed(2);

  alert("Números: " + n1 + "  " + n2 + "  " + n3 + "\n\nMedia: " + media_numeros);

}

/*
EJERCICIO 6
Crea un método que le pida al usuario un número de kilómetros 
y los litros consumidos en un viaje. Debe mostrar por consola el
consumo de combustible por km y el coste total del viaje a un coste
de 0.21€ por litro y kilómetro.
*/

function viaje() {
  const PRECIO_MEDIO = 1.5;
  let k = parseFloat(checknum(prompt("Introduzca el número de kilómetros a recorrer: "), "un número de kilómetros", true, true, false));
  let c = parseFloat(checknum(prompt("Introduzca los litros / 100km que consume el vehículo: "), "un número de litros / 100km", true, true, false));

  let litros_viaje = c * (k / 100);
  let precio_viaje = litros_viaje * PRECIO_MEDIO;

  alert("DATOS DE SU VIAJE:\n\nKilómetros: " + k + " km\nConsumo de su vehículo: " + c + " L/100km\n" + "Precio actual del combustible: " + PRECIO_MEDIO +
    " €\n--------------------------------------------------\n Durante su viaje ha consumido " + litros_viaje.toFixed(2) + " litros gastando " + precio_viaje.toFixed(2) + " €");

}



//-------------------------
//CONTROL DE FLUJO
//-------------------------



/*
EJERCICIO 7
Crea un método que le pida al usuario un número
y imprima por consola si es par o impar 
*/

function paridad() {
  let numero = checknum(prompt("Introduzca el número: "), "un número", false, false, true);
  if (numero % 2 == 0) {
    alert("El número " + numero + " es PAR");
  } else {
    alert("El número " + numero + " es IMPAR");
  }

}

/*
EJERCICIO 8
Crea un método que le pida al usuario que introduza una letra
Si la letra es A o B debe mostrar por consola que que ha acertado
si la letra es C o D debe mostrar por consola que está cerca de acertar
en caso caso contrario debe mostrar por consola que este equivocado.
"Ha acertado", "Casi ha acertado", "Está equivocado"
*/

function acertarLetra() {
  let letra = prompt("Introduzca una letra: ").trim().toUpperCase();
  let checkLetra = false;

  while (!checkLetra) {
    if (/^[A-Z]$/.test(letra)) {
      if (letra == "A" || letra == "B") {
        alert("Ha acertado.");
        checkLetra = true;
      } else if (letra == "C" || letra == "D") {
        letra = prompt("Casi ha acertado: ").toUpperCase();
      } else {
        letra = prompt("Está equivocado: ").toUpperCase();
      }
    } else {
      letra = prompt("Introduzca una letra válida: ").toUpperCase();
    }
  }

}

/*
EJERCICIO 9
Crea un método que le pida al usuario que introduzca dos números.
Debe imprimir el resultado de restar el menor al mayor
Por ejmplo si introduce 5 y 8 ó 8 y 5 debe mostrar por consola 
"El resultado de restarle 5 a 8 es 3".
 */

function restaMenor() {
  let n1 = parseFloat(checknum(prompt("Introduzca el primer número: "), "un primer número", false, false, false));
  let n2 = parseFloat(checknum(prompt("Introduzca el segundo número: "), "un segundo número", false, false, false));

  let mayor = n1;
  let menor = n2;

  if (n1 < n2) {
    mayor = n2;
    menor = n1;
  }

  alert("Número mayor: " + mayor + "\nNúmero menor: " + menor + "\n---------------------------" + "\nRESULTADO: (" + mayor + " - " + menor + ") = " + (mayor - menor));

}

/*
EJERCICIO 10
Crea un método que le pida al usuario el medio de transporte que va a usar
y que reciba dos parámetros de tipo numérico el precio del medio de transporte y los kilómetros que va a recorrer.
Las opciones para los medios de transporte son coche, tren, bicicleta o autobus.
Si la opción es bicicleta debe mostrar "Buen viaje"
Si la opción es coche debe mostrar "Es costo del viaje es ( kilómetros por 0,21 )"
Si la opción es tren o autobús mostrar "Es costo del viaje es ( kilómetros por precio"
Si introduce otra cosa, de mostrar "La opción que has presentado (transporte), no válida es válida"
*/

function eligeTransporte() {
  let check_transporte = false;
  let PRECIO_MEDIO = 1.5;

  while (!check_transporte) {
    let transporte = prompt("Introduzca su medio de transporte: ").trim().toLowerCase();
    switch (transporte) {
      case "bicicleta":
        alert("Buen viaje!");
        check_transporte = true;
        break;
      case "coche":
      case "tren":
      case "autobus":
      case "autobús":
        checkPrecio(PRECIO_MEDIO, transporte);
        check_transporte = true;
        break;
      default:
        transporte = alert("El transporte " + transporte + " no es válido.");
        break;

    }
  }

}

function checkPrecio(precio_medio, t) {
  let k = parseFloat(checknum(prompt("Introduzca el número de kilómetros a recorrer: "), "un número de kilómetros", true, true, false));
  let c = parseFloat(checknum(prompt("Introduzca los litros / 100km que consume el " + t + ": "), "un número de litros / 100km", true, true, false));

  let litros_viaje = c * (k / 100);
  let precio_viaje = litros_viaje * precio_medio;

  alert("DATOS DE SU VIAJE:\n\nKilómetros: " + k + " km\nConsumo de su " + t + ": " + c + " L/100km\n" + "Precio actual del combustible: " + precio_medio +
    " €\n--------------------------------------------------\n Durante su viaje ha consumido " + litros_viaje.toFixed(2) + " litros gastando " + precio_viaje.toFixed(2) + " €");
}

/*
EJERCICIO 11
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar por consola su cuadrado,
pero si es una cadena de caracteres debe trasformarla a mayúsculas.
*/

function cuadradoMayusculas() {
  let dato = prompt("Introduzca un dato: ").trim();

  if (isNaN(dato)) {
    alert("Dato introducido: " + dato + "\n----------------------------" + "\nRESULTADO: " + dato.toUpperCase());
  } else {
    if (dato % 1 == 0) {
      alert("Número introducido: " + dato + "\n----------------------------" + "\nRESULTADO:  " + dato + " ² = " + Math.pow(dato, 2));
    } else {
      alert("Casi... Si hubiese introducido un número entero...");
    }
  }

}

/*
EJERCICIO 12
Crea un método que le pida al usuario un dato cualquiera. Si es un entero múltiplo de 3 debe mostrar por consola
su descomposición en factores, p. ej. 12 = 3 x 4 (no quiero la descomposición en factores primos completa). Si no,
lo debe mostrar tal cual (y decir que es primo).
Si es una cadena con una longitud mayor que 5 debe mostrarla por consola recortada. en caso contrario debe mostrarla
tal cual.
*/

function multiploCadena() {
  let dato = prompt("Introduzca un dato: ").trim();
  const MULTIPLO = 3;

  if (isNaN(dato)) {
    let longitud_dato = "";
    if (dato.length > 5) {
      longitud_dato = " (mostrando 5 caracteres)";
    }
    alert("Dato introducido: " + dato + "\n----------------------------" + "\nRESULTADO: " + dato.substring(0, 5) + longitud_dato);
  } else {
    if (dato % 1 == 0) {
      if (dato % MULTIPLO == 0) {
        let digito = dato / MULTIPLO;
        alert("Número introducido: " + dato + "\n----------------------------" + "\nRESULTADO:  " + dato + " = " + MULTIPLO + " x " + digito);
      } else {
        alert("Casi... Si hubiese introducido un múltiplo de 3...");
      }
    } else {
      alert("Casi... Si hubiese introducido un número entero...");
    }
  }

}

/*
EJERCICIO 13
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar su doble. Si es un string,
Debe mostrarla con la última letra en mayúsculas.
*/

function dobleLetra() {
  let dato = prompt("Introduzca un dato: ").trim();
  const MAYUSCULAS_FINALES = 1;
  const MULTIPLICADOR = 2;

  if (isNaN(dato)) {
    let datoMod = dato.slice(0, -MAYUSCULAS_FINALES) + dato.charAt(dato.length - MAYUSCULAS_FINALES).toUpperCase();
    alert("Dato introducido: " + dato + "\n----------------------------" + "\nRESULTADO: " + datoMod);
  } else {
    alert("Número introducido: " + dato + "\n----------------------------" + "\nRESULTADO:  " + dato + " * " + MULTIPLICADOR + " = " + (dato * 2));
  }

}

/*
EJERCICIO 14
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrar el resto de dividirlo
entre 5. Si es un string, debe mostrar la cadena alternando las letras en mayúsculas o minúsculas (p. ej.: palabra -> PaLaBrA)
*/

function restoAlternar() {
  let dato = prompt("Introduzca un dato: ").trim();
  const DIVISOR = 5;

  if (isNaN(dato)) {
    datoMod = "";
    for (i = 0; i < dato.length; i++) {
      if (dato.charAt(i).toUpperCase() == dato.charAt(i)) {
        datoMod += dato.charAt(i).toLowerCase();
      } else {
        datoMod += dato.charAt(i).toUpperCase();
      }
    }
    alert("Dato introducido: " + dato + "\n----------------------------" + "\nRESULTADO: " + datoMod);
  } else {
    if (dato % 1 == 0) {
      alert("Número introducido: " + dato + "\n----------------------------" + "\nRESULTADO:  " + dato + " / " + DIVISOR + " -> RESTO " + (dato % DIVISOR));
    } else {
      alert("Casi... Si hubiese introducido un número entero...");
    }
  }

}

/*
EJERCICIO 15
Crea un método que le pida al usuario un dato cualquiera. Si es un entero debe mostrarlo al cubo, si tiene decimales, debe mostrarlo
al cuadrado. Si es un string debe cambiar la primera "a" por un asterisco.
*/

function cuboCuadrado() {
  let dato = prompt("Introduzca un dato: ").trim();
  const DIVISOR = 5;
  datoMod = "";
  if (isNaN(dato)) {
    for (i = 0; i < dato.length; i++) {
      if (dato.charAt(i) == "a" || dato.charAt(i) == "A") {
        datoMod += dato.charAt(i).replace(dato.charAt(i), "*");
      } else {
        datoMod += dato.charAt(i);
      }
    }
    alert("Dato introducido: " + dato + "\n----------------------------" + "\nRESULTADO: " + datoMod);
  } else {
    if (dato % 1 == 0) {
      alert("Número introducido: " + dato + "\n----------------------------" + "\nRESULTADO:  " + dato + " ³ = " + Math.pow(dato, 3));
    } else {
      alert("Número introducido: " + dato + "\n----------------------------" + "\nRESULTADO:  " + dato + " ² = " + Math.pow(dato, 2).toFixed(2));
    }
  }

}

/*
EJERCICIO 16
Verificación de Número Primo:
Escribe un método que reciba un número entero positivo mayor que 1 y determine si es un número primo.
Un número es primo si solo es divisible por 1 y por sí mismo.
El método debe validar el tipo de dato y mostrar el resultado en la consola.
*/

function primo() {
  let n = parseFloat(checknum(prompt("Introduzca un número para comprobar si es primo: "), "un número", true, false, false));
  let check_primo = 0;
  for (i = n; i > 0; i--) {
    if (n % i == 0) {
      check_primo++;
    }
  }
  if (check_primo == 2) {
    alert("El número " + n + " es primo.");
  } else {
    alert("El número " + n + " NO es primo.");
  }

}

/*
EJERCICIO 17
Calculadora Básica:
Escribe un método que reciba tres parámetros: dos números y una operación en formato de texto (suma, resta, multiplicación, división).
El método debe realizar la operación indicada y mostrar el resultado en la consola.
Debe validar que los dos primeros parámetros sean números y que la operación sea válida.
Si la operación es una división, debe verificar que el segundo número no sea cero.
*/

//comprobar 17 y 12

function calculadora() {
  let op_valida = "la operación que desea realizar";
  do{
    let op = prompt("Introduzca " + op_valida + " (+ - * / %): ");
    op_valida = "una operación válida";
  }while(op != "+" && op != "-" && op != "*" && op != "/" && op != "%");

  let n1 = parseFloat(checknum(prompt("Introduzca el primer número: "), "un primer número", false, false, false));
  let distinto_cero = "Introduzca el segundo número: ";
  do{
    let n2 = parseFloat(checknum(prompt(distinto_cero), "un segundo número", false, false, false));
    distinto_cero = "Introduzca un segundo número distinto de 0: ";
  }while(op == "/" && n2 == 0);

  switch (op) {
    case "+":
      alert(n1 + " + " + n2 + " = " + (n1 + n2));
      break;
    case "-":
      alert(n1 + " - " + n2 + " = " + (n1 - n2));
      break;
    case "*":
      alert(n1 + " * " + n2 + " = " + (n1 * n2));
      break;
    case "/":
      alert(n1 + " / " + n2 + " = " + (n1 / n2));
      break;
    default:
      alert(n1 + " % " + n2 + " = " + (n1 % n2));
      break;
  }
}

// TODO: Alternativa con callbacks

/*
EJERCICIO 18
Dado el siguente array:
const numeros = [11, 22, 34, 45, 66, 78, 99, 44, 55, 23, 21, 32, 12, 33, 88, 67, 76, 45, 90, 43];
Escribe un método reciba como parámetro el array y compruebe si el número es capicúa o no y muestre 
el resultado por consola.
*/



/*
EJERCICIO 19
Escribe un método que le pida al usuario que introduzca un número entero que también puede ser cero.
Podra introducir todos los números que quiera hasta que introduzca la letra A (o a);
En caso de que introduzca otra cosa debe mostrar un error.
Después de introducir los números debe mostrar por consola el mayor, el menor y la media de ellos. 
Por ejemplo para los números del 0 al 10 mostrará 
Números introducidos: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
Número mayor: 10
Número menor: 0
Media: 5
*/



/*
EJERCICIO 20
Dado el siguiente array:
const numeros = [101, 234, 567, 890, 123, 456, 789, 101, 202, 303, 404, 505, 606, 707, 808, 909, 345, 678, 901, 234];
Escribe un método que muestre por consola los múltiplos de 7 y de 11, los números primos y que cuente los pares y los impares 
*/



/*
EJERCICIO 21
Dado el siguiente array:
const myArray = [42, "hola", 3, true, 76, 19, false, "JavaScript", 88, 15,null, 34, 53, 91, 12, "mundo", 27, 64, 82, 39 ];
1. Halla la suma de los numeros que contiene e múestrala por consola.
2. Si el elemento es un string, muéstralo por pantalla.
3. Si el elemento no es un número o un string, ignóralo
*/

const myArray = [42, "hola", 3, true, 76, 19, false, "JavaScript", 88, 15, null, 34, 53, 91, 12, "mundo", 27, 64, 82, 39];

let suma = 0;
for (let i = 0; i < myArray.length; i++) {
  if (typeof myArray[i] === "string") {
    console.log(myArray[i]);
  }

  if (typeof myArray[i] === "number") {
    suma += myArray[i];
  }
}

console.log("La suma del array es ", suma);












/* Ejercicio 6: ARRAYS
 
Dado el siguiente myArray
const myArray = [42, "hola", 3, true, 76, 19, false, "JavaScript", 88, 15,null, 34, 53, 91, 12, "mundo", 27, 64, 82, 39 ];
1. Halla la suma de los numeros que contiene e múestrala por consola.
2. Si el elemento es un string, muéstralo por pantalla.
3. Si el elemento no es un número o un string, ignóralo */

function arrayCall() {
  const myArray = [42, "hola", 3, true, 76, 19, false, "JavaScript", 88, 15, null, 34, 53, 91, 12, "mundo", 27, 64, 82, 39];
  const myArrayStrings = ['STRINGS DEL ARRAY:', ''];
  let incremento = 0;
  for (let i = 0; i < myArray.length; i++) {
    if (typeof (myArray[i]) === 'number') {
      incremento += myArray[i];
    }
    if (typeof (myArray[i]) === 'string') {
      myArrayStrings.push(myArray[i]);
    }
  }
  alert(myArrayStrings.join('\n'));
  alert('La suma de todos los números del myArray es: ' + incremento);
}

