// hago la petición fetch
async function getRandomUser() {
  // evito un valor hardcodeado en el código
  // le doy un nombre humano
  const url = "https://randomuser.me/api/";

  try {
    const response = await window.fetch(url);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    // Devuelvo la respuesta mapeada (= tranformada)
    // conforme a lo que voy a necesitar
    return mapUser(await response.json());
  } catch (error) {
    console.error("Error en la petición:", error);
  }
}

// función auxiliar para mapear la respuesta
// de un json con todas la propiedaes
// o otro json con sólo las propiedades que voy a usar
async function mapUser(responseJson) {
  const result = await responseJson.results[0];

  const userName = `${result.name.first} ${result.name.last}`;
  const location = `${result.location.city} - ${result.location.street.name}, ${result.location.street.number}`;
  const contact = `${result.cell} | ${result.email}`;
  const pictureUrl = result.picture.large;

  return { userName, location, contact, pictureUrl };
}

// creo los elemento htmly
// establezco sus propiedades
// y los voy agregando al padre respectivo
// lo importante es reducir el número de modificaciones
// del DOM
async function showUserCard() {
  // recupero la información del usuario
  const user = await getRandomUser();
  // recupero la referencia del elemento html
  const $card = document.querySelector(".card");
  // creo un fragment
  const fragment = document.createDocumentFragment();

  // crear elemento envolver la imagen
  const pictureDiv = document.createElement("div");
  // asigno una clase
  pictureDiv.classList.add("user_photo_wrapper");

  // creo el elemento imagen
  const userPicture = document.createElement("img");
  // le asigno la propiedad src que viene de la petición con la url
  userPicture.setAttribute("src", user.pictureUrl);
  // LE AGREGO LA PROPIEDAD ALT !IMPORTANTE
  userPicture.setAttribute("alt", user.userName);

  // crear elemento envolver los detalles
  const detailsDiv = document.createElement("div");
  // le asigno una clase
  detailsDiv.classList.add("user_details");

  // creo el elemento html para mostrar el saludo
  const greeting = document.createElement("p");
  // le asigno la clase
  greeting.classList.add("greeting");
  // le asigno el contenido textual. En este caso es estático
  greeting.textContent = "Hi, My name is";

  // creo el elemento html para mostrar el nombre
  const nameP = document.createElement("p");
  // le asigno la clase
  nameP.classList.add("name");
  // le asigno el contenido textual con la propiedade que viene de la request
  nameP.textContent = user.userName;

  // creo el elemento html para mostrar la ciudad y la dirección
  const locationP = document.createElement("p");
  // le asigno la clase
  locationP.classList.add("location");
  // le asigno el contenido textual con la propiedade que viene de la request
  locationP.textContent = user.location;

  // creo el elemento html para mostrar la ciudad y la dirección
  const contactP = document.createElement("p");
  // le asigno la clase
  contactP.classList.add("contact");
  // le asigno el contenido textual con la propiedade que viene de la request
  contactP.textContent = user.contact;

  // agrego los elemento a su padre segun el plan
  // la imagen se la agrego al user_photo_wrapper
  pictureDiv.appendChild(userPicture);

  // los parrafos a los detalles
  detailsDiv.appendChild(greeting);
  detailsDiv.appendChild(nameP);
  detailsDiv.appendChild(locationP);
  detailsDiv.appendChild(contactP);

  //  user_photo_wrapper y detalles al fragmento temporal
  fragment.appendChild(pictureDiv);
  fragment.appendChild(detailsDiv);

  // el fragmento temporal a la card
  $card.appendChild(fragment);

  // de esta forma realizamos 1 única modificación de DOM
}

showUserCard();
