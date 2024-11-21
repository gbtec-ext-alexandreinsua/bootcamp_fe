const $padre = document.getElementsByClassName("padre")[0];
console.log($padre);

// const timer = setTimeout(function () {
//   const $primero = document.getElementById("primero");
//   $primero.classList.add("grande");
// }, 0);

$padre.style.flexDirection = "row-reverse";
const $divs = document.querySelectorAll(".hijo");
console.log($divs);

for (const div of $divs) {
  //   div.innerHTML = "<p>Hijo </p>";
  div.classList.add("grande");
}

const $boton = document.getElementById("boton");

function mostrarMensaje(){
  alert("Has pulsado el botón");
}

$boton.addEventListener("click",mostrarMensaje);