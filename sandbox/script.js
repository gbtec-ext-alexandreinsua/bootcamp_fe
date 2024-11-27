<<<<<<< Updated upstream
let x = window
.fetch('https://dog.ceo/api/breeds/image/random')
.then(response => {
      console.log(response);
      return response.json;
    })
.then(data => console.log(data));
=======
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

const $hijos = document.getElementsByClassName('hijo');

$hijos[1].addEventListener('click', function (){
  let p = document.createElement("p");
  p.innerHTML = 'hola';
  $hijos[1].append(p);
  console.log("funciona");
});
>>>>>>> Stashed changes
