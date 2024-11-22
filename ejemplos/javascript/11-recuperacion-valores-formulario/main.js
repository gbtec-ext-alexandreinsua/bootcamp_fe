const $form = document.querySelector("form");
const $userName = document.getElementById("username");
const $password = document.getElementById("password");
// const $mayorEdad = document.getElementById("ma");
// const $menorEdad = document.getElementById("me");
const $edades = document.getElementsByName("edad");
const $enviar = document.getElementById("enviar");
let datosFormulario;

$enviar.addEventListener("click", function (event) {
  const mayorDeEdad = recuperarEdad();
  event.preventDefault();

  if (!mayorDeEdad) {
    alert("Esta es una página de viejóvenes. No puedes pasar!");
  }

  datosFormulario = {
    username: $userName.value,
    password: $password.value,
    mayorEdad: mayorDeEdad,
  };
  console.log(datosFormulario);
});

function recuperarEdad() {
  let mayorDeEdad = false;
  for (const input of $edades) {
    if (input.checked) {
      if ("true" === input.value) {
        mayorDeEdad = true;
      }
    }
  }
  return mayorDeEdad;
}
