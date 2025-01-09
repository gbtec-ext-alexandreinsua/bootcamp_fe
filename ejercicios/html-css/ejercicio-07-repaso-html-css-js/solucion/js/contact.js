// Selección del formulario y los campos
const $form = document.querySelector("form");
const $nameField = document.querySelector("#name");
const $emailField = document.querySelector("#email");
const $subjectField = document.querySelector("#subject");
const $messageField = document.querySelector("#message");
const $newsletterField = document.querySelector("#newsletter");

// Escucha del evento "submit" en el formulario
$form.addEventListener("submit", (event) => {
  // Evitar el envío predeterminado del formulario
  event.preventDefault();

  // Validación de los campos
  const errors = validateForm();

  // si hay algún error no se procesa los datos.
  if (errors.length) {
    console.error(`Please fix the following errors:\n- ${errors.join("\n- ")}`);
  } else {
    // Si noy hay errores
    // Recoger los valores en un objeto JSON
    const formData = {
      name: $nameField.value.trim(),
      email: $emailField.value.trim(),
      subject: $subjectField.value.trim(),
      message: $messageField.value.trim(),
      newsletter: $newsletterField.checked,
    };

    // Mostrar el JSON en la consola en forma de cadena
    console.log("Form Data:", JSON.stringify(formData));

    $nameField.classList.remove("error");
    $emailField.classList.remove("error");
    $subjectField.classList.remove("error");
    $form.reset();
  }
});

// Función para validar los campos del formulario
function validateForm() {
  const errors = [];

  // oculto los mensajes de error
  const $errorHints = document.querySelectorAll(".error-hint");
  for (let $errorHint of $errorHints) {
    $errorHint.classList.add("hidden");
  }

  // Para cada campo obligatorio (nombre, correo electrónico y asunto)
  // valido su contenido
  // si está vacío
  // le aplico un estilo de error
  // y le muestro un mensaje al usuario

  // Validación del nombre
  if (!$nameField.value.trim()) {
    $nameField.classList.add("error");
    document.querySelector(".error-hint.name").classList.remove("hidden");
    errors.push("Name is required.");
  }

  // Validación del email
  if (!$emailField.value.trim()) {
    $emailField.classList.add("error");
    document.querySelector(".error-hint.email").classList.remove("hidden");
    errors.push("Email is required.");
    // si este campo esta cubierto
    // se valida el correo
  } else if (!isValidEmail($emailField.value.trim())) {
    $emailField.classList.add("error");
    document.querySelector(".error-hint.email").classList.remove("hidden");
    document.querySelector(".error-hint.email p").textContent =
      "Invalid email format. Please fix it.";
    errors.push("Invalid email format.");
  }

  // Validación del asunto
  if (!$subjectField.value.trim()) {
    $subjectField.classList.add("error");
    document.querySelector(".error-hint.subject").classList.remove("hidden");
    errors.push("Subject is required.");
  }

  return errors;
}

// Función para validar el formato del email
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
