/*
Escribe una función que calcule el precio de un producto.
Debe recibir un número y aplicarle un iva del 21%. Debe imprimir
por consola el resultado. 
Por ejemplo, recibe un precio de 20 y debe mostrar por consola
"Precio con IVA: 24.2€"
Pista: investigad esto Number.parseInt();
Aviso en Javascript usamos función como sinónimo de método
(y no es correcto).
*/

// declaramos la función
function calcularPrecioProducto1(precio) {
    const iva = 0.21; // 21 / 100
    precio = Number.parseInt(precio) // validacion de tipo
    precio += (precio * iva);
    console.log("Precio con IVA: " + precio.toFixed(2) + "€");
}

function calcularPrecioProducto2(precio) {
    const iva = 0.21;  
    precio = Number.parseInt(precio)
    const precioconIva = precio + (precio * iva);
    console.log("Precio con IVA: " + precioconIva.toFixed(2) + "€");
}

function calcularPrecioProducto3(precio) {
    const ivaE = 1.21;
    precio = Number.parseInt(precio)        
    const precioconIva = precio * ivaE;
    console.log("Precio con IVA: " + precioconIva.toFixed(2) + "€");
}

// invocación de las funciones
calcularPrecioProducto1(20)
calcularPrecioProducto2(20)
calcularPrecioProducto3(20)
calcularPrecioProducto3("20")

/* Crea una función que recibe por parámetro un número de segundos
y muestra por consola su equivalencia en horas, minutos y segundos.
Por ejemplo 10000 debe mostar
"10000 segundos son 2 horas 30 minutos x segundos"
*/
function calculateSecondsToHumanVersion ( seconds){
    const secondsInHour = 3600;
    const secondsInMinute = 60;
       

    /*
    El método estático Number.parseInt() analiza un argumento de cadena 
    y devuelve un número entero de la raíz o base especificada.
    */
    const hours = Number.parseInt(seconds / secondsInHour);
    const minutes = Number.parseInt((seconds % secondsInHour) / secondsInMinute);
    const remainSeconds = Number.parseInt(seconds % secondsInMinute);
    console.log(seconds + " segundos son " + hours + " horas " + minutes + " minutos " + remainSeconds + "  segundos")
}

function calculateSecondsToHumanVersion2 ( seconds){
    const secondsInHour = 3600;
    const secondsInMinute = 60;
    
    /* 
    Devuelve el máximo entero menor o igual a un número.
    */
    const hours = Math.floor(seconds / secondsInHour); 
    const minutes = Math.floor((seconds % secondsInHour) / secondsInMinute);
    const remainSeconds = Math.floor(seconds % secondsInMinute);
    console.log(seconds + " segundos son " + hours + " horas " + minutes + " minutos " + remainSeconds + "  segundos")
}

calculateSecondsToHumanVersion(10000)
calculateSecondsToHumanVersion2(10000)

/* 
const result = window.prompt("Dame un dato");
Escribe un método que le pida al usuario el lado de un cuadrado y muestre por consola
el área y al perímetro 
Por ejemplo un cuadrado de 7 unidades de lado
"Un cuadrado de 7 unidades tiene un area de 49 unidadades y un perímetro de 28 unidades"
*/

function calculateAreaAndPerimeter(){
    const numberOfSides = 4;
    const resultString = window.prompt("Dame el lado de cuadrado (un número entero, p. ej. 7)");
    const result = Number.parseInt(resultString);
    const area = result * result;
    const perimeter = result * numberOfSides;

    console.log(`Un cuadrado de ${result} unidades tiene un area de ${area} unidadades y un perímetro de ${perimeter} unidades`)
    
}

function calculateAreaAndPerimeter2(){
    const numberOfSides = 4;
    const result = Number.parseInt(window.prompt("Dame el lado de cuadrado (un número entero, p. ej. 7)"));
    const area = result * result;
    const perimeter = result * numberOfSides;

    console.log(`Un cuadrado de ${result} unidades tiene un area de ${area} unidadades y un perímetro de ${perimeter} unidades`)    
}

// calculateAreaAndPerimeter();
// calculateAreaAndPerimeter2();