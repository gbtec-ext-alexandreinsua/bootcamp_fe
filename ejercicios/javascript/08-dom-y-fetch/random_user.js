// hago la petición fetch
async function getRandomUser() {

    // evito un valor hardcodeado en el codigo
    // le doy un nombre humano
    const url = "https://randomuser.me/api/";

    try {
        const response = await window.fetch(url);
        if (!response.ok) {
            throw new Error(`ErrorHTTP: ${response.status}`);
        }
        // devuelvo la respuesta mapeada (= transformada)
        // conforme a lo que voy a necesitar
        return mapUser(await response.json());
    } catch (error) {
        console.error("Error en la peticion", error);
    }
}

// función auxiliar para mapear la respuesta
// de un json con todas las propiedades
// a otro jason con solo las propieaddes que voy a usar
async function mapUser(responseJson) {
    const result = await responseJson.results[0];

    const userName = `${result.name.first} ${result.name.last}`;
    const location = `${result.location.city} - ${result.location.street.name}, ${result.location.street.number}`;
    const contact = `${result.cell} | ${result.email}`;
    const pictureUrl = result.picture.large;

    return { userName, location, contact, pictureUrl};
}

async function mostrarUserData() {
    const user = await getRandomUser();
    const $card = document.querySelector(".card");
    const fragment = document.createDocumentFragment();
    



    // const cards = document.getElementsByClassName("card")[0];
    // console.log(JSON.stringify(cards[0]));

    const $wrapper = document.querySelector("$wrapper");
    const card = document.querySelector(".card");
    const imagen = document.querySelector(".image")
    const name = document.querySelector(".name");
    const city = document.querySelector(".city");
    const adress = document.querySelector(".adress");
    const phone = document.querySelector(".phone");
    const mail = document.querySelector(".mail");

    
    
    card.classList.add("card");
    imagen.setAttribute = ("src", user.imagen);
    imagen.style.width = "100px";
    name.innerText = `${user.name.first} ${user.name.last}`;
    city.innerText = user.location.city;
    adress.innerText = `${user.street.number} ${user.street.name}`;
    phone.innerText = user.phone;
    mail.innerText = user.mail;
    
    fragment.appendChild(imagen);
    fragment.appendChild(name);
    fragment.appendChild(city);
    fragment.appendChild(adress);
    fragment.appendChild(phone);
    fragment.appendChild(mail);

    $wrapper.appendChild(fragment)
    
}
mostrarUserData();