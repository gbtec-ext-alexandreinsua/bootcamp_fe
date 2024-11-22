const banner = document.getElementById("banner");
const usuarioInput = document.getElementById("usuario");
const contraseñaInput = document.getElementById("contraseña");
const botonEntrar = document.getElementById("validar");

// Función para validar y cambiar el mensaje del banner
function validarDatos() {
  const usuario = usuarioInput.value.trim();
  const contrasena = contrasenaInput.value.trim();

  if (!usuario && !contrasena) {
    banner.textContent = "Usuario desconocido o contraseña incorrecta";
  } else if (!usuario) {
    banner.textContent = "El nombre del usuario no puede estar en blanco";
  } else (!contrasena) {
    banner.textContent = "La contraseña no puede estar en blanco";
  }
}

botonEntrar.addEventListener("click", validarDatos);
