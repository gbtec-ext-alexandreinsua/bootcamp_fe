/*const $boton = document.querySelector("button");

const mostrasMensaje = function(){
    window.alert("mensaje");
}

$boton.addEventListener("click",mostrasMensaje);

function limpiarRecursos (){
    $boton.removeEventListener("click, mostrarMensaje");
}*/

// Otra opción , ()=> es una forma de llamar función anonima

const $boton = document.querySelector("button");

function mostrarMensaje(mensaje){
    window.alert(mensaje);
}

$boton.addEventListener("click", ()=> {
    mostrarMensaje("Hola Mundo");
})


