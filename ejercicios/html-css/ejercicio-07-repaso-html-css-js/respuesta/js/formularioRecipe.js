

//ejercicio pendiente por terminar




//este bloque va dentro de un try catch

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');



//funcion para validar un email
function isValidEmail(email){

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`/;

    return regexEmail.test(email);
}


//una funcion que se encarga de solo agregar letras en el campo
function isFilledField(dato){

    const regexField = /^[a-zA-Z\s]+$/;

    return regexField.test(dato.trim());
}