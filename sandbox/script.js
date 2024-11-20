const $boton = document.querySelector("button");

const mostrarMensaje = function (){
  alert("Buenos diías!");
}
$boton.addEventListener("click", mostrarMensaje);
// $boton.removeEventListener("click", mostrarMensaje);
