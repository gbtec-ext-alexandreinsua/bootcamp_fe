const $boton = document.querySelector("button");
let i = 0

function mostrarMensaje(mensaje) {
  i++
  console.log(mensaje+i);
  window.alert(mensaje+i);
  
  //$boton.removeEventListener("click", mostrarMensaje);
}
/*
$boton.addEventListener("click", function (){
  mostrarMensaje("Hola mundo");
});
*/

$boton.addEventListener("click", () => {
  mostrarMensaje("Hola mundo");
});