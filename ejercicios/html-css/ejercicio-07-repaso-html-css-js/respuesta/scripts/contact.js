document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
  
    // Función para validar el formulario
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevenir el envío del formulario antes de validarlo.
  
      // Obtener los valores de los campos
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;
  
      // Variables para los campos del formulario
      const nameField = document.getElementById("name");
      const emailField = document.getElementById("email");
      const subjectField = document.getElementById("subject");
      const messageField = document.getElementById("message");
  
      // Resetear los errores anteriores
      resetErrors();
  
      let isValid = true;
      let formData = {};
  
      // Validar el campo Nombre
      if (!name) {
        isValid = false;
        nameField.classList.add("error");
      } else {
        formData.name = name;
      }
  
      // Validar el campo Email
      if (!email || !validateEmail(email)) {
        isValid = false;
        emailField.classList.add("error");
      } else {
        formData.email = email;
      }
  
      // Validar el campo Asunto
      if (!subject) {
        isValid = false;
        subjectField.classList.add("error");
      } else {
        formData.subject = subject;
      }
  
      // Si la validación es correcta, mostrar los datos en la consola
      if (isValid) {
        console.log("Formulario enviado con éxito:");
        console.log(JSON.stringify(formData, null, 2));
      } else {
        console.log("El formulario contiene errores, por favor corrige los campos marcados.");
      }
    });
  
    // Función para restablecer los errores
    function resetErrors() {
      const errorFields = document.querySelectorAll(".error");
      errorFields.forEach((field) => {
        field.classList.remove("error");
      });
    }
  
    // Función para validar el formato del correo electrónico
    function validateEmail(email) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailPattern.test(email);
    }
  });
  