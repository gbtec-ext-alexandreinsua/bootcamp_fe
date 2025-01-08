const $name = document.getElementById("name");
const $email = document.getElementById("email");
const $subject = document.getElementById("subject");
const $message = document.getElementById("message");
const $subscribeToNewsletter = document.getElementById("subscribeToNewsletter");
const $send = document.getElementById("send");

let formData;

$send.addEventListener("click", function () {
  if (!$name.value) {
    $name.style.backgroundColor = "#ff6f61";
  }

  if (!email.value) {
    email.style.backgroundColor = "#ff6f61";
  }

  if (!subject.value) {
    subject.style.backgroundColor = "#ff6f61";
  }

  if ($name.value && $email.value && $subject.value) {
    $name.style.backgroundColor = "white";
    email.style.backgroundColor = "white";
    subject.style.backgroundColor = "white";
    console.log("Name: " + $name.value);
    console.log("Email: " + $email.value);
    console.log("Subject: " + $subject.value);
    if ($message.value) {
      console.log("Message: " + $message.value);
    }
    console.log("Subscribe to newsletter: " + $subscribeToNewsletter.checked);
  }
});