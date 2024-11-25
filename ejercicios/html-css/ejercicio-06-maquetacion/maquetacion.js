const credencialesIncorrectas = "usuario desconocido o contraseña incorrecta";
const usuarioEnBlanco = "el nombre del usuario no puede estar en blanco";
const passwordEnBlanco = "la contraseña no puede estar en blanco";

const $entrar = document.getElementById("entrar");
const $warningDiv = document.querySelector(".warning");
const $warningMsg = document.getElementById("warning-message");

$entrar.addEventListener("click", function (event) {
  event.preventDefault();
  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!usuario && !password) {
    $warningMsg.textContent = credencialesIncorrectas;
    $warningDiv.style.display = "flex";
  } else if (!usuario) {
    $warningMsg.textContent = usuarioEnBlanco;
    $warningDiv.style.display = "flex";
  } else if (!password) {
    $warningMsg.textContent = passwordEnBlanco;
    $warningDiv.style.display = "flex";
  }

  //   window.alert(usuario + "\n" + password);

  document.getElementById("usuario").value = "";
  document.getElementById("password").value = "";
});
