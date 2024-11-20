// const $padre = document.getElementsByClassName("padre")[0];
//c onsole.log($padre);

// const timer = setTimeout(function () {
//   const $primero = document.getElementById("primero");
//   $primero.classList.add("grande");
// }, 0);

// $padre.style.flexDirection = "row-reverse";
// const $divs = document.querySelectorAll(".hijo");
// console.log($divs);

// for (const div of $divs) {
  //   div.innerHTML = "<p>Hijo </p>";
 //  div.classList.add("grande");
// }

const $button = document.getElementById("button"); 

$button.addEventListener("click", function() {
  $button.textContent = "¡Perfecto!";
});
