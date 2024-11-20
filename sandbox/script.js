const $boton = document.querySelector("button");

function mostrarMensaje(mensaje) {
    window.alert(mensaje);
}

$boton.addEventListener("click", () => {
    mostrarMensaje("Hola mundo");
});

/* ARROW FUNCTIONS */

function sumar(a, b) {
    return a + b;
} 

// const sumarA = (a, b) => a + b;

function calcular(a, b, callback) {
    return callback(a, b);
}

console.log(calcular(1, 2, sumar));

console.log(calcular(3, 4, (a, b) => a + b));