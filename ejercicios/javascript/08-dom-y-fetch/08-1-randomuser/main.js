async function getData() {
    const url = 'https://randomuser.me/api/';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      return json = await response.json();
    } catch (error) {
      console.error(error.message);
    }
  }
  

async function  mostrarCard(){
    const datos = await getData();
    const $wrapper = document.getElementsByClassName("wrapper")[0];
    
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const cardHead = document.createElement("div");
    cardHead.setAttribute("class", "card-head");
    card.appendChild(cardHead);


/*     const imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "double-border")
    cardHead.appendChild(imgDiv); */

    const cardImg = document.createElement("img");
    cardImg.setAttribute("src", datos.results[0].picture.large);
    cardImg.setAttribute("alt", "random person");
    cardHead.appendChild(cardImg);
    
    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    card.appendChild(cardBody);

    const bodyP = document.createElement("p");
    bodyP.innerText = "Hello, My name is";
    cardBody.appendChild(bodyP);

    const bodyName = document.createElement("p");
    bodyName.setAttribute("class", "random-name");
    bodyName.innerText = `${datos.results[0].name.first} ${datos.results[0].name.last}`;
    cardBody.appendChild(bodyName);

    const bodyAddress = document.createElement("p");
    bodyAddress.setAttribute("class", "random-address");
    bodyAddress.innerText = `${datos.results[0].location.city} - ${datos.results[0].location.street.name}, ${datos.results[0].location.street.number}`;
    cardBody.appendChild(bodyAddress);

    const bodyContact = document.createElement("p");
    bodyContact.setAttribute("class", "random-contact");
    bodyContact.innerText = `${datos.results[0].phone} - ${datos.results[0].email}`;
    cardBody.appendChild(bodyContact);

    $wrapper.appendChild(card);

    console.log(datos);
}

mostrarCard();