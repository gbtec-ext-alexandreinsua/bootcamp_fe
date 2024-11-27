const credencialesIncorrectas = "Usuario desconocido o contraseña incorrecta";
const usuarioEnBlanco = "El nombre del usuario no puede estar en blanco";
const passwordEnBlanco = "La contraseña no puede estar en blanco";

const $entrar = document.getElementById("entrar");
const $warningDiv = document.querySelector(".warning");
const $warningMsg = document.getElementById("warning-message");

$entrar.addEventListener("click", function (event) {
  // se evita el comportamiento por defecto de un botón de tipo submit
  event.preventDefault();

  // recuperamos datos del formulario
  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value.trim();

  // validaciones
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

  // procesar datos
  if (usuario && password) {
    window.alert(usuario + "\n" + password);
  }

  // limpiar formulario
  document.getElementById("usuario").value = "";
  document.getElementById("password").value = "";
});
