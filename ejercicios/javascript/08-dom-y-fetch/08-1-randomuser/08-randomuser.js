
const apiUrl = 'https://randomuser.me/api/';

// Función que fai a solicitud e actualiza HTML
function fetchRandomUser() {
    // Realizo a solicitud fetch a API
    fetch(apiUrl)
        .then(response => {
            // Verifica si a respuesta é exitosa, en caso de non selo,manda esta mensaxe
            if (!response.ok) {
                throw new Error('A respota non foi doada');
            }
            return response.json();
        })
        .then(data => {
            
            const user = data.results[0];  //almacenamos o primeiro resultado que nos lanza a API nesta constante
            
            
            document.getElementById('user-image').src = user.picture.large;
            document.getElementById('name').textContent = `${user.name.first} ${user.name.last}`;
            document.getElementById('city').textContent = user.location.city;
            document.getElementById('street').textContent = `${user.location.street.name} ${user.location.street.number}`;
            document.getElementById('postcode').textContent = user.location.postcode;
            document.getElementById('phone').textContent = user.phone;
            document.getElementById('email').textContent = user.email;
            //aquí geteamos os elementos do HTML cos datos que lle pedimos a API accedendo ao DOM
})
}

window.onload = fetchRandomUser;


// async function obtenerDatos(){
//     const url = "https://randomuser.me/api"
//     try{
//         const response = await window.fetch(url);

//         if (!response.ok){
//             throw new Error(`Error HTTP: ${response.status}`);
//         }
//         return await response.json();

//     }catch (error){
//         console.error("Error en la petición:", error);
//     }
// }
// async function mostrarDatos(){

// }