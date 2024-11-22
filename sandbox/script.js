const $boton = document.querySelector("button");

const hacerClick = function(){
  window.alert("Clickeado");
  limpiarRecursos();
}

$boton.addEventListener("click", hacerClick);

function limpiarRecursos(){
  $boton.removeEventListener("click", hacerClick);
}


const $boton = document.querySelector("button");


function mostrarMensaje() {
  console.log("mensaje");
}

$boton.addEventListener("click", mostrarMensaje);

$boton.removeEventListener("click", mostrarMensaje);
