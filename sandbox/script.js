const $boton = document.querySelector("button");


function mostrarMensaje() {
  console.log("mensaje");
}

<<<<<<< Updated upstream
$boton.addEventListener("click", mostrarMensaje);

$boton.removeEventListener("click", mostrarMensaje);
=======
const $hijos = document.getElementsByClassName('hijo');

$hijos[1].addEventListener('click', function (){
  let p = document.createElement("p");
  p.innerHTML = 'hola';
  $hijos[1].append(p);
  console.log("funciona");
});
>>>>>>> Stashed changes
