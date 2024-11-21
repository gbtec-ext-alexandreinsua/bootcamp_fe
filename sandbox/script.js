const $boton = document.querySelector("button");

const mostrarMensaje = function (){
  alert("Buenos diías!");
  limpiarRecursos();
}
function limpiarRecursos(){
  $boton.removeEventListener("click", mostrarMensaje);
}
$boton.addEventListener("click", mostrarMensaje);

// El removeEventListener provoca que el boton una vez pulasdo no vuelva a ejecutar
// nada en las siguientes pulasciones, al eliminar los eventos declarados

