const form = document.getElementById('loginForm'); 
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');
const warningMessage = document.getElementById('warning-message');
const submitButton = document.getElementById('loginButton'); 

// Añadimos el evento al hacer clic
submitButton.addEventListener('click', function (e) {
    e.preventDefault();

    // Verificar si los campos de usuario y contraseña están vacíos o no:
    if (usernameField.value.trim() === '' || passwordField.value.trim() === '') {
      // Mostrar el mensaje de advertencia si los campos están vacíos:
      warningMessage.classList.remove('hidden');
    } else {
      // Ocultamos el mensaje de advertencia y procesamos
      warningMessage.classList.add('hidden');
      console.log({
        username: usernameField.value,
        password: passwordField.value,
      });
    }
});
