const $boton = document.querySelector("button");

const mostrarMensaje = function() {
  window.alert("mensaje");
  limpiarRecursos());
}

$boton.addEventListener("click", mostrarMensaje);

if (limpiarRecursos) {
  $boton.removeEventListener("click", mostrarMensaje);
//  limpiarRecursos = false;
}