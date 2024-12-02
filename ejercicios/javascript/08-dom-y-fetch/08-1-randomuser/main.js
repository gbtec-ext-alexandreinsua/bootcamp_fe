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
async function getRandomUser() {
    try {
        const response = await window.fetch("https://randomuser.me/api/");
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error("Error en la petición:", error);
      }
    }

    async function mostrarUserData() {
        const datosUser = await getRandomUser();
        const user = datosUser.results[0];
        console.log(JSON.stringify(datosUser));
    
       const upcard = document.querySelector(".upcard");
        const img = document.querySelector(".upcard img");
        img.setAttribute("src", user.picture.medium);
        img.setAttribute("alt", "userphoto");

        const data = document.querySelector(".data");
        const name = document.querySelector(".name");
        name.textContent = user.name.first + " " + user.name.last;

        const address = document.querySelector(".address");
        address.textContent = user.location.city + " - " + user.location.street.name + ", " + user.location.street.number;
        const phonemail = document.querySelector(".phonemail");
        phonemail.textContent = user.cell + " " + user.email;
       
        upcard.appendChild(img);
        data.appendChild(name);
        data.appendChild(address);
        data.appendChild(phonemail);

      }
   
      mostrarUserData();

// const juan = { "results": 
//     [{ "gender": "male", "name": { "title": "Mr", "first": "Macit", "last": "Akbulut" }, 
//         "location": { "street": { "number": 8223, "name": "Tunalı Hilmi Cd" }, 
//         "city": "Kilis", "state": "Afyonkarahisar", "country": "Turkey", "postcode": 11380, "coordinates": { "latitude": "71.8047", "longitude": "-98.6771" }, "timezone": { "offset": "+5:30", "description": "Bombay, Calcutta, Madras, New Delhi" } }, "email": "macit.akbulut@example.com", "login": { "uuid": "a1bdaf00-0ae1-480d-bd88-962f926250bf", "username": "orangelion627", "password": "stephane", "salt": "cN6gId18", "md5": "179b08bcf554994251a054e67cd6b633", "sha1": "92315e637ba0ae083ed6ccbe2fa24f244742ed35", "sha256": "98b38493f856348e3b4b1ccec98d47b559c0a0b97603d5dd57b579eff0dd1390" }, "dob": { "date": "1966-03-27T14:08:31.674Z", "age": 58 }, "registered": { "date": "2005-12-29T13:50:49.042Z", "age": 18 }, "phone": "(513)-130-7937", "cell": "(229)-827-0288", "id": { "name": "", "value": null }, "picture": { "large": "https://randomuser.me/api/portraits/men/97.jpg", "medium": "https://randomuser.me/api/portraits/med/men/97.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/97.jpg" }, "nat": "TR" }], "info": { "seed": "d7f8b5af66ba724e", "results": 1, "page": 1, "version": "1.4" } }
