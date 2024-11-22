const formulario = document.getElementById("formulario-inicio");
const inputUsuario = document.getElementById("usuario");
const inputPassword = document.getElementById("password");
const mensajeError = document.getElementById("mensaje-error");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const usuario = inputUsuario.value.trim();
  const password = inputPassword.value.trim();

  if (!usuario) {
    mostrarError("El nombre de usuario no puede estar en blanco");
    return;
  }

  if (!password) {
    mostrarError("El nombre o la contraseña son incorrectos");
    return;
  }

  mostrarError("");
  alert("Inicio de sesión exitoso");
});

function mostrarError(mensaje) {
  if (mensaje) {
    mensajeError.innerHTML = `<img src="./images/warning-icon.png" alt="Icono de advertencia"> ${mensaje}`;
    mensajeError.style.display = "flex";
  } else {
    mensajeError.style.display = "none";
  }
}
