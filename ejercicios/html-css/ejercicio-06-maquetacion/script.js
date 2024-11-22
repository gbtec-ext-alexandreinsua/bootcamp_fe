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
  mensajeError.textContent = "";

  if (mensaje) {
    const icono = document.createElement("img");
    icono.src = "./images/warning-icon.png";
    icono.alt = "Icono de advertencia";
    icono.style.width = "20px";
    icono.style.height = "20px";

    const texto = document.createElement("span");
    texto.textContent = mensaje;

    mensajeError.style.display = "flex";
    mensajeError.appendChild(icono);
    mensajeError.appendChild(texto);
  } else {
    mensajeError.style.display = "none";
  }
}
