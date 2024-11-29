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
