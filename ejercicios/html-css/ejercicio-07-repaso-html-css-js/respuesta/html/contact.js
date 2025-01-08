document.addEventListener("DOMContentLoaded", () => {
    const formContainer = document.querySelector("form");
  
    const formElements = `
      <label for="name">Name*:</label>
      <input type="text" id="name" name="name" placeholder="Your Full Name" required />
    
  
      <label for="email">Email*:</label>
      <input type="email" id="email" name="email" placeholder="Your Mail Address" required />

  
      <label for="subject">Subject*:</label>
      <input type="text" id="subject" name="subject" placeholder="Reason For Contacting" required />
      
  
      <label for="message">Message:</label>
      <textarea id="message" name="message" placeholder="Your Message Or Questions"></textarea>

      <div class="checkbox-container">
      <input type="checkbox" id="terms" name="terms" />
      <label for="terms">Subscribe to our Newsletter</label>
      </div>
  
      <button type="cancel">Cancel</button>
      <button type="submit">Send</button>
    `;
  
    formContainer.innerHTML = formElements;
  
    formContainer.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const subject = document.getElementById("subject");
      const message = document.getElementById("message");
  
      let isValid = true;
  
      if (name.value.trim() === "") {
        showError("name-error");
        isValid = false;
      } else {
        hideError("name-error");
      }
  
      if (email.value.trim() === "" || !/\S+@\S+\.\S+/.test(email.value)) {
        showError("email-error");
        isValid = false;
      } else {
        hideError("email-error");
      }
  
      if (subject.value.trim() === "") {
        showError("subject-error");
        isValid = false;
      } else {
        hideError("subject-error");
      }
  
      if (isValid) {
        const formData = {
          name: name.value.trim(),
          email: email.value.trim(),
          subject: subject.value.trim(),
          message: message.value.trim(),
        };
  
        console.log(JSON.stringify(formData, null, 2));
        alert("Form submitted successfully!");
        formContainer.reset();
      }
    });
  
    function showError(errorId) {
      document.getElementById(errorId).style.display = "block";
    }
  
    function hideError(errorId) {
      document.getElementById(errorId).style.display = "none";
    }
  });