const $boton = document.querySelector("button");

const mostrarMensaje = function() {
  window.alert("mensaje");
  limpiarRecursos();
}

$boton.addEventListener("click", mostrarMensaje);

function limpiarRecursos() {
    $boton.removeEventListener("click", mostrarMensaje);
}