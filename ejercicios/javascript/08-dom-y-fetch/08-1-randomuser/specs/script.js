// Escucha el evento 'DOMContentLoaded', que se activa cuando el contenido HTML ha sido completamente cargado y el DOM está listo.
document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://randomuser.me/api/';  // URL de la API que se utilizará para obtener los datos del usuario

    // Elementos de la tarjeta
    const userPhoto = document.getElementById('user-photo');
    const userName = document.getElementById('user-name');
    const userAddress = document.getElementById('user-address');
    const userPhone = document.getElementById('user-phone');
    const userEmail = document.getElementById('user-email');

    // Función para obtener datos del usuario desde la API:
    async function fetchUser() {
        try {
            const response = await fetch(apiUrl); // se realiza una solicitud de red a la API 
            const data = await response.json();  // Convierte la respuesta de la API en formato JSON
            const user = data.results[0];  // extraemos con un array los datos del usuario

            // Actualizar datos en la tarjeta
            userPhoto.src = user.picture.large;
            userName.textContent = `${user.name.first} ${user.name.last}`;
            userAddress.textContent = `${user.location.street.name} ${user.location.street.number} - ${user.location.city}, ${user.location.state}, ${user.location.postcode}`;
            userPhone.textContent = user.cell;
            userEmail.textContent = user.email;
        } catch (error) {
            console.error('Error al obtener los datos del usuario:', error);
        }
    }
    fetchUser();
});
