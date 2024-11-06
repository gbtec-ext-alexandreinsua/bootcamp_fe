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

function calculaPrecio(pp) {
    var precio_con_iva = pp * 1.21;
    var precio_texto_calculo = mostrarPrecio(precio_con_iva);
    return precio_texto_calculo;
}

function mostrarPrecio(pf) {
    var precio_texto_muestra = console.log("El precio del producto con IVA del 21% es: " + pf);
    return precio_texto_muestra;
}

var precio_producto = 45;


/*Crea una función que recibe por parámetro un número de segundos
y muestra por consola su equivalencia en horas, minutos y segundos.
Por ejemplo 10000 debe mostar
"10000 segundos son 2 horas 30 minutos x segundos"*/

function calculoHora(s) {
    let horas = parseInt(s / (60 * 60));
    let minutos = parseInt(s / 60 - (horas * 60));
    let segundos = parseInt(s - (minutos * 60) - (horas * 3600));

    console.log(s, " ------> ", horas, ":", minutos, ":", segundos);
}

/* 
const result = window.prompt("Dame un dato");
Escribe un método que le pida al usuario el lado de un cuadrado y muestre por consola
el área y al perímetro 
Por ejemplo un cuadrado de 7 unidades de lado
"Un cuadrado de 7 unidades tiene un area de 49 unidadades y un perímetro de 28 unidades"
*/

function cuadrado() {
    lado = prompt("Lado del cuadrado en m²: ");
    console.log("--- Lado del cuadrado:", lado, "m² ---");
    console.log("Area: ", Math.pow(lado,2), "m²");
    console.log("Perimetro: ", lado * 4, "m");
}

/* Crea un método que le pida al usuario un número y imprima por consola si es par o impar 
Por ejemplo "Introduzca un número:" 2 -> "2 es un número par." */


function paridad(){
    let numero = prompt("Introduzca un numero: ");
    if (numero % 2 == 0){
        console.log(numero," es un número par");
    }else{
        console.log(numero," es un número impar");
    }
}

    console.log(`Un cuadrado de ${result} unidades tiene un area de ${area} unidadades y un perímetro de ${perimeter} unidades`);    


// calculateAreaAndPerimeter();
// calculateAreaAndPerimeter2();


// EJERCICIOS DE CONTROL DE FLUJO -- volver a Ana
/* Crea un método que le pida al usuario un número
y imprima por consola si es par o impar 
Por ejemplo
"Introduzca un número:"
2
"2 es un número par."
*/


