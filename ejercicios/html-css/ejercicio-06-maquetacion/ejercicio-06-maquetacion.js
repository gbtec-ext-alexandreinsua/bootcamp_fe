
const $warning = document.getElementById("warning-message");
const $warningDiv = document.querySelector(".warning");
const $boton = document.getElementById("entrar");


$boton.addEventListener('click', function(event) {
 event.preventDefault();

const $nombre = document.getElementById("username").value.trim();
const $pass = document.getElementById("password").value.trim();

    if(!$pass && !$nombre){
    $warning.textContent = "Usuario o contraseña incorrectos";
    $warningDiv.style.display = "flex";
    }
    else if(!$pass){
       $warning.textContent = "Contraseña en blanco";
       $warningDiv.style.display = "flex";
    }
    else if(!$nombre){
        $warning.textContent = "Usuario en blanco";
        $warningDiv.style.display = "flex";
    }

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  
})