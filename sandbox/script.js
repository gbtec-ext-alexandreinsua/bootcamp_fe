const $boton = document.querySelector("button");


function mostrarMensaje() {
  console.log("mensaje");
}

$boton.addEventListener("click", mostrarMensaje);

$boton.removeEventListener("click", mostrarMensaje);
