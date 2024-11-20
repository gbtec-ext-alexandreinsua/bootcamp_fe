const $boton = document.querySelector("button");

<<<<<<< HEAD
const mostrarMensaje = function() {
  window.alert("mensaje");
  limpiarRecursos());
=======

function mostrarMensaje() {
  console.log("mensaje");
>>>>>>> development
}

$boton.addEventListener("click", mostrarMensaje);

<<<<<<< HEAD
if (limpiarRecursos) {
  $boton.removeEventListener("click", mostrarMensaje);
//  limpiarRecursos = false;
}
=======
$boton.removeEventListener("click", mostrarMensaje);
>>>>>>> development
