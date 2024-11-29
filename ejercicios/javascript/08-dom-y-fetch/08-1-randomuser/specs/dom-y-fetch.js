const API_URL = "https://randomuser.me/api/";

let usuarioCargado = false;

async function fetchUserData() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Error en la API!: ${response.status}`);
    }
    const data = await response.json();
    const user = data.results[0];

    if (!usuarioCargado) {
      const cardContent = `
        <div class="card-header">
          <img src="${user.picture.large}" alt="User Photo">
        </div>
        <div class="card-body">
          <p>Hi, My name is</p>
          <h2>${user.name.first} ${user.name.last}</h2>
          <p>${user.location.city} - ${user.location.street.name}, ${user.location.street.number}</p>
          <p>${user.phone} - ${user.email}</p>
        </div>
      `;
      document.querySelector(".card").innerHTML = cardContent;

      usuarioCargado = true;
    }
  } catch (error) {
    console.error(`Error en fetchUserData: ${error.message}`);
  }
}

(async function inicializar() {
  try {
    await fetchUserData();
  } catch (error) {
    console.error("Error al inicializar:", error);
  }
})();
