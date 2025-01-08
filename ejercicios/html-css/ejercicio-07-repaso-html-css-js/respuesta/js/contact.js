const datos = document.getElementById('contact');
datos.addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const newsletter = document.getElementById('newsletter').checked;

    const formData = {
        name: name,
        email: email,
        subject: subject,
        message: message,
        newsletter: newsletter
      };
      const jsonString = JSON.stringify(formData);     
      console.log("Datos de contacto: "+ jsonString);

})