const $padre = document.getElementsByClassName("padre")[0];
console.log($padre);

<<<<<<< Updated upstream
// const timer = setTimeout(function () {
//   const $primero = document.getElementById("primero");
//   $primero.classList.add("grande");
// }, 0);
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes

$padre.style.flexDirection = "row-reverse";
const $divs = document.querySelectorAll(".hijo");
console.log($divs);

for (const div of $divs) {
  //   div.innerHTML = "<p>Hijo </p>";
  div.classList.add("grande");
}
<<<<<<< Updated upstream
=======

$boton.addEventListener("click", mostrarMensaje);

$boton.removeEventListener("click", mostrarMensaje);
=======
function mostrarMensaje (mensaje) {
  window.alert(mensaje);
}

$boton.addEventListener("click", () => {
  mostrarMensaje("!Hola Mundo¡");
});
>>>>>>> Stashed changes
>>>>>>> Stashed changes
