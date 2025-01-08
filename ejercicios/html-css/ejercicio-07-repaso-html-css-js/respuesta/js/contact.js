const datos = document.getElementById('contact');
datos.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = mapFormData();

  validateEmail(formData.email);

  console.log("Datos de contacto: " + "\n" +
    "Name: " + JSON.stringify(formData.name)
  +"\n"+ "Email: " + JSON.stringify(formData.email) + 
  "\n"+ "Subject: " + JSON.stringify(formData.subject) +
  "\n"+ "Message: " + JSON.stringify(formData.message)
  + "\n"+ "Suscrito a newsletter (T/F): " + formData.newsletter
);

})
function mapFormData() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  const newsletter = document.getElementById('newsletter').checked;

  return { name, email, subject, message, newsletter };
}

function validateEmail(email) {

  const regexMail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  if (regexMail.test(email)) {
    console.log("Email válido")
  } else {
    console.error("Email introducido no válido")
  }

}
