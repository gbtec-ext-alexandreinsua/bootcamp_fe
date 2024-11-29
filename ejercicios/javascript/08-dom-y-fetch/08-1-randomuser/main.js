async function getData() {
  const url = "https://randomuser.me/api/";

  try {
    const response = await window.fetch(url);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error: ", error);
  }
}

async function showData() {
  const data = await getData();

  const $main = document.createElement("main");
  $main.setAttribute("class", "card");

  const $div = document.createElement("div");
  $div.setAttribute("class", "img-background");
  const img = document.createElement("img");
  img.setAttribute("class", "img");
  img.setAttribute("src", data.results[0].picture.large);
  img.setAttribute("alt", "Foto");
  $div.appendChild(img);
  $main.appendChild($div);

  const presentation = document.createElement("p");
  presentation.setAttribute("class", "presentation");
  presentation.textContent = "Hi, My name is";
  $main.appendChild(presentation);

  const name = document.createElement("p");
  name.setAttribute("class", "name");
  name.textContent = (data.results[0].name.first + " " +  data.results[0].name.last);
  $main.appendChild(name);

  const adress = document.createElement("p");
  adress.setAttribute("class", "adress");
  adress.textContent = (data.results[0].location.city + " - " + data.results[0].location.street.name + ", " + data.results[0].location.street.number);
  $main.appendChild(adress);

  const contact = document.createElement("p");
  contact.setAttribute("class", "contact");
  contact.textContent = (data.results[0].phone + " " + data.results[0].email);
  $main.appendChild(contact);

  const $body = document.querySelector("body");
  $body.appendChild($main);
}

showData();
