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

  if (errors.length) {
    console.error(`Please fix the following errors:\n- ${errors.join("\n- ")}`);
  } else {
    // Recoger los valores en un objeto JSON
    const formData = {
      name: $nameField.value.trim(),
      email: $emailField.value.trim(),
      subject: $subjectField.value.trim(),
      message: $messageField.value.trim(),
      newsletter: $newsletterField.checked,
    };

    // Mostrar el JSON en la consola
    console.log("Form Data:", JSON.stringify(formData));
  }

  // Opcional: reiniciar el formulario tras el envío
  $nameField.classList.remove("error");
  $emailField.classList.remove("error");
  $subjectField.classList.remove("error");
  $form.reset();
});

// Función para validar los campos del formulario
function validateForm() {
  const errors = [];

  // Validación del nombre
  if (!$nameField.value.trim()) {
    $nameField.classList.add("error");
    errors.push("Name is required.");
  }

  // Validación del email
  if (!$emailField.value.trim()) {
    $emailField.classList.add("error");
    errors.push("Email is required.");
  } else if (!isValidEmail($emailField.value.trim())) {
    $emailField.classList.add("error");
    errors.push("Invalid email format.");
  }

  // Validación del asunto
  if (!$subjectField.value.trim()) {
    $subjectField.classList.add("error");
    errors.push("Subject is required.");
  }

  return errors;
}

// Función para validar el formato del email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
