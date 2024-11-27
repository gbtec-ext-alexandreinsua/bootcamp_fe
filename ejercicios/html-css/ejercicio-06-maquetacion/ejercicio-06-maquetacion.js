const $entrar = document.getElementById("entrar");


$entrar.addEventListener("click", function(event){
    const user = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();
    if(!user){
        const usuarioEnBlanco = "El nombre de usuario no puede estar en blanco."
        event.preventDefault();
        const $warning = document.querySelector(".warning");
        const $prueba = document.getElementsByClassName("warning");
        const $warningMsg = document.querySelector(".warning-msg");
        console.log($prueba);
        $warning.style.display = "flex";
        $warningMsg.textContent = usuarioEnBlanco;
    }
});