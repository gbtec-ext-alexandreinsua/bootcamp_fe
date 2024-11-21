const $boton = document.querySelector("button");


function mostrarMensaje() {
  console.log("mensaje");
}

$boton.addEventListener("click", mostrarMensaje);

$boton.removeEventListener("click", mostrarMensaje);

const $boton = document.getElementById("boton");

function mostrarMensaje(){
  alert("Has pulsado el botón");
}

$boton.addEventListener("click",mostrarMensaje);