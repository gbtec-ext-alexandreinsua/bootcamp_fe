const banner = document.getElementById("banner");
const usuarioInput = document.getElementById("usuario");
const contrasenaInput = document.getElementById("contrasena");
const botonEntrar = document.getElementById("botonEntrar");


function validarDatos() {
  const usuario = usuarioInput.value.trim();
  const contrasena = contrasenaInput.value.trim();

  const alertaSimbolo = "⚠ ";

  if (!usuario && !contrasena) {
    banner.textContent = alertaSimbolo + "Usuario desconocido o contraseña incorrecta";
  } else if (!usuario) {
    banner.textContent = alertaSimbolo + "El nombre del usuario no puede estar en blanco";
  } else if (!contrasena) {
    banner.textContent = alertaSimbolo + "La contraseña no puede estar en blanco";
  }
}

botonEntrar.addEventListener('click', validarDatos);
