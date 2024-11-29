const API_URL = "https://randomuser.me/api/";

async function fetchUserData() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Error en la API ! Status: ${response.status}`);
    }
    const data = await response.json();
    const user = data.results[0];

    
    document.getElementById("user-photo").src = user.picture.large;
    document.getElementById("user-name").textContent = `${user.name.first} ${user.name.last}`;
    document.getElementById("user-address").textContent = `${user.location.city} - ${user.location.street.name}, ${user.location.street.number}`;
    document.getElementById("user-phone").textContent = user.phone;
    document.getElementById("user-email").textContent = user.email;
  } catch (error) {
    
    throw new Error(`Error fetch : ${error.message}`);
  }
}


(async function initcializar() {
  try {
    await fetchUserData();
  } catch (error) {
    console.error("Error al inicializar :", error);
   
  }
})();
